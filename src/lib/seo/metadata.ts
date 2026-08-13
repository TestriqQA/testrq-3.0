/**
 * @file Single source-of-truth metadata helpers for Testriq pages.
 *
 * Background: see `docs/seo-audit/02-codebase-audit.md` §3 for the four
 * `og:url` / canonical bug patterns this module is designed to prevent.
 *
 * Contract for any page calling `buildPageMetadata`:
 *   - The page passes ONE pathname (e.g. `"automation-testing-services"` or
 *     `"/automation-testing-services"` — both work).
 *   - The helper computes BOTH `<link rel="canonical">` and
 *     `<meta property="og:url">` from that single value, eliminating drift.
 *   - The helper produces an absolute URL anchored at `SITE_URL` — pages
 *     cannot accidentally emit relative URLs (Pattern A bug from the audit).
 *   - The helper enforces no `/services/` prefix or any other route-group
 *     leakage — only the actual public pathname appears in metadata.
 *
 * This module has no runtime side effects: it can be safely imported by
 * any Server Component, Route Handler, or build script. Pure functions
 * only — no I/O, no env reads at runtime (except `NODE_ENV` for
 * dev-mode assertions), no globals mutated.
 *
 * For the formal invariant list and recipes, see `./README.md`.
 */

import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/**
 * Canonical site origin. Always `https://www.testriq.com` (no trailing slash).
 *
 * Use this for any absolute URL construction. Do NOT hardcode the origin
 * elsewhere — import from here so a future origin change is one-line.
 */
export const SITE_URL = "https://www.testriq.com" as const;

/** Default OG `siteName`. Overridable per page via `BuildPageMetadataOptions.siteName`. */
export const DEFAULT_SITE_NAME = "Testriq" as const;

/** Default OG `locale`. Overridable per page. */
export const DEFAULT_LOCALE = "en_US" as const;

/** Default Twitter handle for `site` and `creator`. */
export const DEFAULT_TWITTER_HANDLE = "@testriq" as const;

/**
 * Default Open Graph image used as a site-wide fallback when a page does
 * not specify its own `ogImage`. Points to the existing homepage OG image
 * shipped in `/public/OG/testriq-qa-lab-llp-og-img.webp` (1100×733, WebP,
 * referenced from [src/app/layout.tsx](../../app/layout.tsx)).
 *
 * The contract guarantees every page produced by `buildPageMetadata`
 * emits a valid `og:image` tag — preventing blank link previews on
 * social shares and AI engine link cards.
 *
 * NOTE: width/height MUST match the real asset on disk. They were declared
 * as 1200×630 while the file has always been 1100×733 — receivers use these
 * numbers to pre-allocate the preview box before the image downloads, so a
 * wrong ratio renders the first share letterboxed or cropped. The asset is
 * also slightly under Facebook's recommended 1200px width and is a 1.5:1
 * ratio rather than the 1.91:1 the major platforms crop to; replacing it
 * with a true 1200×630 export is an asset task, not a code one.
 */
export const DEFAULT_OG_IMAGE: OgImageDescriptor = {
    url: `${SITE_URL}/OG/testriq-qa-lab-llp-og-img.webp`,
    width: 1100,
    height: 733,
    alt: "Testriq - Global Software Testing Services",
    type: "image/webp",
};

// ---------------------------------------------------------------------------
// buildCanonicalUrl
// ---------------------------------------------------------------------------

/**
 * Build an absolute canonical URL from a pathname.
 *
 * Edge-case behavior is contractual — write tests against these examples.
 *
 * @example
 *   buildCanonicalUrl("")                        // "https://www.testriq.com"
 *   buildCanonicalUrl("/")                       // "https://www.testriq.com"
 *   buildCanonicalUrl("about-us")                // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("/about-us")               // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("/about-us/")              // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("//about-us//")            // "https://www.testriq.com/about-us"  (with dev warn)
 *   buildCanonicalUrl("blog/post/foo")           // "https://www.testriq.com/blog/post/foo"
 *   buildCanonicalUrl("  /blog/  ")              // "https://www.testriq.com/blog"  (trim)
 *   buildCanonicalUrl("foo%20bar")               // "https://www.testriq.com/foo%20bar"  (passthrough)
 *
 *   // If an already-absolute URL is passed at the same origin, it is
 *   // returned with the trailing slash stripped and is otherwise unchanged.
 *   // (Defensive — the function's contract is "pathname in", but misuse
 *   // should not corrupt the protocol.)
 *   buildCanonicalUrl("https://www.testriq.com/foo/")  // "https://www.testriq.com/foo"
 *
 *   // Cross-origin URLs THROW in development to surface the bug.
 *   // In production the function silently passes through (best-effort
 *   // safety net).
 *   buildCanonicalUrl("https://example.com/foo")  // throws (dev) | passthrough (prod)
 *
 *   // Null/undefined/non-strings: returns SITE_URL (defensive).
 *   buildCanonicalUrl(undefined as unknown as string)  // "https://www.testriq.com"
 *
 * Notes:
 *   - This function does NOT URL-encode segments. Pass already-encoded
 *     pathnames if any segment contains reserved characters (e.g. `%20`).
 *   - Trailing slashes are always stripped, matching the project's
 *     `next.config.ts` `trailingSlash: false` setting.
 *   - Consecutive slashes inside the path are collapsed to a single slash.
 *     In dev mode a console warning is emitted so the source typo can be
 *     fixed; the function still self-corrects in both dev and prod.
 *
 * @param pathname Path relative to site root, with or without leading slash.
 * @returns Absolute canonical URL.
 * @throws In development only, when an absolute URL of a different origin is passed.
 */
export function buildCanonicalUrl(pathname: string): string {
    // Defensive: handle null/undefined/non-string input gracefully so callers
    // don't have to defend against TypeScript-erased runtime values.
    if (typeof pathname !== "string") return SITE_URL;

    const trimmed = pathname.trim();
    if (trimmed === "") return SITE_URL;

    // -----------------------------------------------------------------------
    // Branch A: caller passed an already-absolute URL (defensive passthrough)
    // -----------------------------------------------------------------------
    if (/^https?:\/\//iu.test(trimmed)) {
        // Cross-origin guard: surface the programmer error in dev.
        if (isDevEnvironment()) {
            try {
                const parsed = new URL(trimmed);
                const expected = new URL(SITE_URL);
                if (parsed.origin !== expected.origin) {
                    throw new Error(
                        `[buildCanonicalUrl] Cross-origin URL "${trimmed}" is not allowed. ` +
                            `Expected origin "${expected.origin}". ` +
                            `Pass a relative pathname (e.g. "about-us") instead.`,
                    );
                }
            } catch (e) {
                // Re-throw our own assertion; swallow URL-parse failures so the
                // best-effort passthrough below still runs.
                if (e instanceof Error && e.message.startsWith("[buildCanonicalUrl] Cross-origin")) {
                    throw e;
                }
            }
        }

        const stripped = trimmed.replace(/\/+$/u, "");
        return stripped === "" ? SITE_URL : stripped;
    }

    // -----------------------------------------------------------------------
    // Branch B: caller passed a path; normalize and compose
    // -----------------------------------------------------------------------

    // Dev-mode warning for double slashes inside the path. Function still
    // self-corrects (collapse + strip), but the source should be cleaned up.
    if (isDevEnvironment() && /\/\//u.test(trimmed)) {
        console.warn(
            `[buildCanonicalUrl] Pathname "${pathname}" contains consecutive slashes. ` +
                `Slashes have been collapsed to produce a valid canonical, but the ` +
                `source caller should be cleaned up to pass a normalized path.`,
        );
    }

    const clean = trimmed.replace(/\/+/gu, "/").replace(/^\/+|\/+$/gu, "");
    if (clean === "") return SITE_URL;

    return `${SITE_URL}/${clean}`;
}

// ---------------------------------------------------------------------------
// buildPageMetadata
// ---------------------------------------------------------------------------

/**
 * Robots directive shape — subset of Next.js `Metadata.robots` object form.
 * Defaults are `index: true, follow: true` per Testriq's open-indexing posture.
 */
export interface RobotsDirective {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
}

/**
 * Open Graph image descriptor.
 *
 * `width`, `height`, and `alt` are **required** so social platforms can
 * pre-allocate the preview box (no CLS on the receiving site) and so AI
 * engine image-understanding gets useful context. Use `DEFAULT_OG_IMAGE`
 * when a page genuinely has no custom image.
 */
export interface OgImageDescriptor {
    /** Absolute URL of the image. Should be 1200×630 for ideal previews. */
    url: string;
    /** Width in pixels — required. Should match the actual image asset. */
    width: number;
    /** Height in pixels — required. */
    height: number;
    /** Descriptive alt text — required for accessibility and AI engines. */
    alt: string;
    /** Optional MIME type, e.g. `"image/webp"`. */
    type?: string;
}

/**
 * Options accepted by {@link buildPageMetadata}.
 *
 * The only required fields are `pathname`, `title`, and `description`.
 * Sensible defaults cover the rest. Override only when a page genuinely
 * needs a different value than the site default.
 */
export interface BuildPageMetadataOptions {
    /**
     * Path relative to site root, with or without leading slash.
     * E.g. `"ai-application-testing"` or `"/ai-application-testing"`.
     * For the homepage pass `""` or `"/"`.
     */
    pathname: string;

    /**
     * Page title. Used as-is in the `<title>` tag, OG title, and Twitter title.
     * Aim for ≤ 60 characters. The root layout's title template
     * (`"%s | Testriq"`) does NOT apply to titles set by this helper —
     * include any branding suffix you want directly in `title`.
     */
    title: string;

    /**
     * Meta description. Used in `<meta name="description">`, OG description,
     * and Twitter description. Aim for 140–160 characters.
     */
    description: string;

    /**
     * Optional OG image. If omitted, {@link DEFAULT_OG_IMAGE} is used so
     * the page always emits a valid `og:image` tag.
     */
    ogImage?: OgImageDescriptor;

    /**
     * Optional override of Twitter image URL (absolute). If omitted,
     * the resolved OG image's `url` is used.
     */
    twitterImage?: string;

    /** Optional `siteName` for OG. Defaults to `DEFAULT_SITE_NAME`. */
    siteName?: string;

    /** Optional `locale` for OG. Defaults to `DEFAULT_LOCALE`. */
    locale?: string;

    /** Optional Twitter card type. Defaults to `"summary_large_image"`. */
    twitterCard?: "summary" | "summary_large_image" | "app" | "player";

    /**
     * Shorthand for the common case `{ index: false, follow: true }` —
     * i.e. hide the page from search results but still let crawlers
     * discover linked pages. Use for `/thank-you`, internal admin
     * dashboards, or draft preview routes.
     *
     * **Mutually exclusive with `robots`.** If both are provided,
     * `robots` wins and a `console.warn` is emitted in development so
     * the contradictory call is fixed at the source.
     *
     * If you need `noindex, nofollow` (rare), set
     * `robots: { index: false, follow: false }` explicitly.
     *
     * @example
     *   // Equivalent to `robots: { index: false, follow: true }`:
     *   buildPageMetadata({ pathname: "thank-you", title: "...", description: "...", noindex: true });
     */
    noindex?: boolean;

    /**
     * Robots overrides (full control). Defaults: `index: true, follow: true`.
     *
     * Mutually exclusive with `noindex` shorthand — see {@link noindex}.
     */
    robots?: RobotsDirective;

    /**
     * Optional `keywords` array. Most search engines ignore this meta,
     * but it's still emitted in the HTML for consistency with existing pages.
     */
    keywords?: string[];

    /**
     * Optional OG type. Defaults to `"website"`. For blog posts pass
     * `"article"` (note: this helper does not yet emit article-specific
     * fields like `publishedTime` / `authors` — extend if/when needed).
     */
    ogType?: "website" | "article" | "profile";

    /**
     * **Phase 5 stub — reserved, not yet wired into the returned `Metadata`.**
     *
     * Reserved for the upcoming Phase 5 (Schema.org / JSON-LD audit).
     * When implemented, this field will accept either a single Schema.org
     * object or an array of objects, and the helper will be extended to
     * emit one or more `<script type="application/ld+json">` blocks
     * alongside the standard meta tags (likely via a sibling
     * `getStructuredData(opts)` returning a stable serialized array).
     *
     * **Currently a no-op** — passing a value here has NO effect on the
     * returned `Metadata` object. Pages requiring JSON-LD today should
     * continue using `<StructuredData data={...} />` from
     * [src/components/seo/StructuredData.tsx](../../components/seo/StructuredData.tsx).
     *
     * The field is reserved here so callers can begin shaping their data
     * with the eventual API in mind, and so Phase 5's PR can light it up
     * without churning the public type signature.
     */
    jsonLd?: object | object[];
}

/**
 * Build a Next.js `Metadata` object with consistent canonical + OG + Twitter.
 *
 * Both `<link rel="canonical">` and `<meta property="og:url">` are derived
 * from the same `pathname` argument via {@link buildCanonicalUrl}, making
 * URL drift between the two structurally impossible.
 *
 * Acceptance criteria for any page using this helper:
 *   1. The live HTML contains exactly ONE `<link rel="canonical">`.
 *   2. The `og:url` meta tag value equals the canonical href.
 *   3. Both URLs are absolute and start with `SITE_URL`.
 *   4. The path portion contains no `/services/` or other route-group prefix.
 *   5. An `og:image` tag is always present (defaults to {@link DEFAULT_OG_IMAGE}).
 *
 * @example
 *   // src/app/(services)/automation-testing-services/page.tsx
 *   import { buildPageMetadata } from "@/lib/seo/metadata";
 *
 *   export const metadata = buildPageMetadata({
 *     pathname: "automation-testing-services",
 *     title: "Automation Testing Services | ISO 29119-5 & SOC2 | Testriq",
 *     description: "Global automation solutions using Playwright, Selenium...",
 *     ogImage: {
 *       url: "https://www.testriq.com/OG/Automation-testing-service-og-image.webp",
 *       width: 1200,
 *       height: 630,
 *       alt: "Automation Testing Services - Testriq",
 *       type: "image/webp",
 *     },
 *     keywords: ["automation testing services", "selenium", "playwright"],
 *   });
 *
 * @param opts {@link BuildPageMetadataOptions}
 * @returns Next.js {@link Metadata} object suitable for `export const metadata` or
 *   for return from `generateMetadata()`.
 */
export function buildPageMetadata(opts: BuildPageMetadataOptions): Metadata {
    const canonical = buildCanonicalUrl(opts.pathname);
    const siteName = opts.siteName ?? DEFAULT_SITE_NAME;
    const locale = opts.locale ?? DEFAULT_LOCALE;
    const ogType = opts.ogType ?? "website";
    const twitterCard = opts.twitterCard ?? "summary_large_image";

    // -----------------------------------------------------------------------
    // Resolve robots directive.
    //
    // Precedence:
    //   1. `robots` (full control) wins if provided.
    //   2. Else `noindex` shorthand maps to `{ index: false, follow: true }`.
    //   3. Else default `{ index: true, follow: true }`.
    //
    // If both `robots` and `noindex` are provided, that's a programmer
    // error — `robots` wins, and we log a dev-only warning.
    // -----------------------------------------------------------------------
    if (isDevEnvironment() && opts.noindex !== undefined && opts.robots !== undefined) {
        console.warn(
            `[buildPageMetadata] Both \`noindex\` and \`robots\` were provided for ` +
                `pathname "${opts.pathname}". \`robots\` takes precedence; \`noindex\` is ignored. ` +
                `Pass only one to avoid this warning.`,
        );
    }

    let indexFlag: boolean;
    let followFlag: boolean;
    if (opts.robots !== undefined) {
        indexFlag = opts.robots.index ?? true;
        followFlag = opts.robots.follow ?? true;
    } else if (opts.noindex === true) {
        indexFlag = false;
        followFlag = true;
    } else {
        indexFlag = true;
        followFlag = true;
    }

    const robots: NonNullable<Metadata["robots"]> = {
        index: indexFlag,
        follow: followFlag,
        ...(opts.robots?.noarchive ? { noarchive: true } : {}),
        ...(opts.robots?.nosnippet ? { nosnippet: true } : {}),
        ...(opts.robots?.noimageindex ? { noimageindex: true } : {}),
        googleBot: {
            index: indexFlag,
            follow: followFlag,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    };

    // -----------------------------------------------------------------------
    // OG image — ALWAYS present. Falls back to DEFAULT_OG_IMAGE so every
    // page emits a valid social preview image.
    // -----------------------------------------------------------------------
    const ogImage: OgImageDescriptor = opts.ogImage ?? DEFAULT_OG_IMAGE;

    // Open Graph block — `url` is bound to canonical to make drift impossible.
    const openGraph: NonNullable<Metadata["openGraph"]> = {
        type: ogType,
        locale,
        url: canonical,
        siteName,
        title: opts.title,
        description: opts.description,
        images: [ogImage],
    };

    // Twitter — uses ogImage.url when no explicit twitterImage is set.
    const twitterImageUrl = opts.twitterImage ?? ogImage.url;
    const twitter: NonNullable<Metadata["twitter"]> = {
        card: twitterCard,
        site: DEFAULT_TWITTER_HANDLE,
        creator: DEFAULT_TWITTER_HANDLE,
        title: opts.title,
        description: opts.description,
        images: [twitterImageUrl],
    };

    // Note: opts.jsonLd is intentionally NOT consumed here. See the JSDoc
    // on BuildPageMetadataOptions.jsonLd for the Phase 5 plan.

    return {
        // Use `title.absolute` to BYPASS the root layout's `title.template`
        // ("%s | Testriq"). The helper's contract is that callers pass a
        // complete brand-suffixed title; without `absolute`, Next.js would
        // append "| Testriq" a second time, producing
        //   "Agile Testing Services | Sprint-Ready QA | Testriq | Testriq"
        // for example. See README invariant I11.
        title: { absolute: opts.title },
        description: opts.description,
        ...(opts.keywords && opts.keywords.length > 0 ? { keywords: opts.keywords } : {}),
        metadataBase: new URL(SITE_URL),
        alternates: { canonical },
        openGraph,
        twitter,
        robots,
    };
}

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

/**
 * Internal helper for dev-mode gating. Treats anything other than
 * `production` as development (covers `development`, `test`, and the
 * undefined case during ad-hoc Node script use).
 *
 * Exported for tests only — not part of the public API.
 *
 * @internal
 */
export function isDevEnvironment(): boolean {
    if (typeof process === "undefined") return false;
    const env = process.env?.NODE_ENV;
    return env !== "production";
}
