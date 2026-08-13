/**
 * Vitest tests for src/lib/seo/metadata.ts
 *
 * These tests document and enforce the public contract described in
 * `src/lib/seo/README.md`. Each `describe` block maps to one invariant
 * or one option-driven behavior.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
    DEFAULT_LOCALE,
    DEFAULT_OG_IMAGE,
    DEFAULT_SITE_NAME,
    DEFAULT_TWITTER_HANDLE,
    SITE_URL,
    buildCanonicalUrl,
    buildPageMetadata,
    isDevEnvironment,
    type OgImageDescriptor,
} from "../metadata";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Read the pixel dimensions of a WebP file from its header.
 *
 * Inlined rather than pulled from `sharp` so the test stays a fast, pure-Node
 * read with no native-binary dependency. Covers all three WebP chunk types:
 * `VP8 ` (lossy), `VP8L` (lossless) and `VP8X` (extended).
 */
function webpDimensions(file: string): [number, number] {
    const b = readFileSync(file);
    if (b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") {
        throw new Error(`Not a WebP file: ${file}`);
    }
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
        return [
            1 + (b[24] | (b[25] << 8) | (b[26] << 16)),
            1 + (b[27] | (b[28] << 8) | (b[29] << 16)),
        ];
    }
    if (chunk === "VP8 ") {
        return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    }
    if (chunk === "VP8L") {
        const bits = b.readUInt32LE(21);
        return [(bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
    }
    throw new Error(`Unrecognised WebP chunk "${chunk}" in ${file}`);
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

describe("SITE_URL constant", () => {
    it('is exactly "https://www.testriq.com"', () => {
        expect(SITE_URL).toBe("https://www.testriq.com");
    });

    it("has no trailing slash", () => {
        expect(SITE_URL.endsWith("/")).toBe(false);
    });
});

describe("DEFAULT constants", () => {
    it('DEFAULT_SITE_NAME is "Testriq"', () => {
        expect(DEFAULT_SITE_NAME).toBe("Testriq");
    });

    it('DEFAULT_LOCALE is "en_US"', () => {
        expect(DEFAULT_LOCALE).toBe("en_US");
    });

    it('DEFAULT_TWITTER_HANDLE is "@testriq"', () => {
        expect(DEFAULT_TWITTER_HANDLE).toBe("@testriq");
    });

    it("DEFAULT_OG_IMAGE has required fields", () => {
        expect(DEFAULT_OG_IMAGE.url).toMatch(/^https:\/\/www\.testriq\.com\/OG\/.+\.webp$/);
        expect(DEFAULT_OG_IMAGE.alt.length).toBeGreaterThan(0);
        expect(DEFAULT_OG_IMAGE.type).toBe("image/webp");
    });

    // Regression guard. DEFAULT_OG_IMAGE declared 1200×630 for its whole life
    // while the asset on disk has always been 1100×733, and this test asserted
    // the declared numbers rather than the real ones — so it locked the bug in
    // instead of catching it. Receivers use og:image:width/height to size the
    // preview box before the image downloads, so wrong values render the first
    // share letterboxed. Asserting against the file makes the drift impossible.
    it("DEFAULT_OG_IMAGE dimensions match the asset on disk", () => {
        const file = join(
            process.cwd(),
            "public",
            DEFAULT_OG_IMAGE.url.replace(SITE_URL, "")
        );
        expect(existsSync(file)).toBe(true);
        expect(webpDimensions(file)).toEqual([
            DEFAULT_OG_IMAGE.width,
            DEFAULT_OG_IMAGE.height,
        ]);
    });
});

// ---------------------------------------------------------------------------
// buildCanonicalUrl — path normalization
// ---------------------------------------------------------------------------

describe("buildCanonicalUrl", () => {
    describe("root cases", () => {
        it('returns SITE_URL for ""', () => {
            expect(buildCanonicalUrl("")).toBe(SITE_URL);
        });

        it('returns SITE_URL for "/"', () => {
            expect(buildCanonicalUrl("/")).toBe(SITE_URL);
        });

        it('returns SITE_URL for whitespace-only "   "', () => {
            expect(buildCanonicalUrl("   ")).toBe(SITE_URL);
        });

        it('returns SITE_URL for "//" and "///"', () => {
            // Suppress the dev-mode warning so test output stays clean
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
            expect(buildCanonicalUrl("//")).toBe(SITE_URL);
            expect(buildCanonicalUrl("///")).toBe(SITE_URL);
            warn.mockRestore();
        });
    });

    describe("simple pathnames", () => {
        it('strips no slash on "about-us"', () => {
            expect(buildCanonicalUrl("about-us")).toBe("https://www.testriq.com/about-us");
        });

        it('strips leading slash on "/about-us"', () => {
            expect(buildCanonicalUrl("/about-us")).toBe("https://www.testriq.com/about-us");
        });

        it('strips trailing slash on "/about-us/"', () => {
            expect(buildCanonicalUrl("/about-us/")).toBe("https://www.testriq.com/about-us");
        });

        it("preserves nested paths", () => {
            expect(buildCanonicalUrl("blog/post/foo")).toBe(
                "https://www.testriq.com/blog/post/foo",
            );
        });

        it("preserves nested paths with leading and trailing slashes", () => {
            expect(buildCanonicalUrl("/blog/post/foo/")).toBe(
                "https://www.testriq.com/blog/post/foo",
            );
        });
    });

    describe("normalization", () => {
        it("collapses double slashes inside path", () => {
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
            expect(buildCanonicalUrl("//about-us//")).toBe("https://www.testriq.com/about-us");
            expect(buildCanonicalUrl("blog//post///foo")).toBe(
                "https://www.testriq.com/blog/post/foo",
            );
            warn.mockRestore();
        });

        it("trims surrounding whitespace", () => {
            expect(buildCanonicalUrl("  /blog/  ")).toBe("https://www.testriq.com/blog");
        });

        it("passes through URL-encoded characters without re-encoding", () => {
            expect(buildCanonicalUrl("foo%20bar")).toBe("https://www.testriq.com/foo%20bar");
            expect(buildCanonicalUrl("/blog/category/qa%2Btesting")).toBe(
                "https://www.testriq.com/blog/category/qa%2Btesting",
            );
        });
    });

    describe("defensive: non-string input", () => {
        it("returns SITE_URL for undefined", () => {
            expect(buildCanonicalUrl(undefined as unknown as string)).toBe(SITE_URL);
        });

        it("returns SITE_URL for null", () => {
            expect(buildCanonicalUrl(null as unknown as string)).toBe(SITE_URL);
        });

        it("returns SITE_URL for number", () => {
            expect(buildCanonicalUrl(42 as unknown as string)).toBe(SITE_URL);
        });

        it("returns SITE_URL for object", () => {
            expect(buildCanonicalUrl({} as unknown as string)).toBe(SITE_URL);
        });
    });

    describe("absolute URL passthrough (same origin)", () => {
        it("passes through SITE_URL itself unchanged (no trailing slash to strip)", () => {
            expect(buildCanonicalUrl("https://www.testriq.com")).toBe("https://www.testriq.com");
        });

        it("strips trailing slash on absolute SITE_URL with slash", () => {
            expect(buildCanonicalUrl("https://www.testriq.com/")).toBe("https://www.testriq.com");
        });

        it("preserves absolute path on same origin, strips trailing slash", () => {
            expect(buildCanonicalUrl("https://www.testriq.com/foo/")).toBe(
                "https://www.testriq.com/foo",
            );
        });

        it("preserves absolute path with no trailing slash", () => {
            expect(buildCanonicalUrl("https://www.testriq.com/foo/bar")).toBe(
                "https://www.testriq.com/foo/bar",
            );
        });
    });

    describe("dev-mode assertions", () => {
        const ORIGINAL_NODE_ENV = process.env.NODE_ENV;

        beforeEach(() => {
            // Force dev-mode for assertion checks. NODE_ENV is "test" by
            // default under vitest, which our isDevEnvironment helper
            // already treats as non-production — but be explicit.
            process.env.NODE_ENV = "development";
        });

        afterEach(() => {
            process.env.NODE_ENV = ORIGINAL_NODE_ENV;
            vi.restoreAllMocks();
        });

        it("warns on consecutive slashes in dev mode", () => {
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
            buildCanonicalUrl("//about-us");
            expect(warn).toHaveBeenCalledTimes(1);
            expect(warn.mock.calls[0][0]).toMatch(/consecutive slashes/);
        });

        it("does NOT warn on a clean path", () => {
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
            buildCanonicalUrl("/about-us");
            expect(warn).not.toHaveBeenCalled();
        });

        it("throws on cross-origin URL in dev mode", () => {
            expect(() => buildCanonicalUrl("https://example.com/foo")).toThrow(/Cross-origin/);
        });

        it("throws on cross-origin even without trailing slash", () => {
            expect(() => buildCanonicalUrl("https://attacker.test/canonical")).toThrow(
                /Cross-origin/,
            );
        });

        it("does NOT throw for same origin", () => {
            expect(() => buildCanonicalUrl("https://www.testriq.com/about")).not.toThrow();
        });
    });

    describe("production-mode behavior", () => {
        const ORIGINAL_NODE_ENV = process.env.NODE_ENV;

        beforeEach(() => {
            process.env.NODE_ENV = "production";
        });

        afterEach(() => {
            process.env.NODE_ENV = ORIGINAL_NODE_ENV;
            vi.restoreAllMocks();
        });

        it("does NOT warn on consecutive slashes in production", () => {
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
            buildCanonicalUrl("//about-us//");
            expect(warn).not.toHaveBeenCalled();
        });

        it("does NOT throw on cross-origin in production (best-effort passthrough)", () => {
            expect(() => buildCanonicalUrl("https://example.com/foo/")).not.toThrow();
            // Also verify the result is just the input with trailing slash stripped
            expect(buildCanonicalUrl("https://example.com/foo/")).toBe("https://example.com/foo");
        });

        it("still self-corrects double slashes in production (silent)", () => {
            expect(buildCanonicalUrl("//about-us//")).toBe("https://www.testriq.com/about-us");
        });
    });
});

// ---------------------------------------------------------------------------
// buildPageMetadata — Metadata object shape
// ---------------------------------------------------------------------------

describe("buildPageMetadata", () => {
    const minimalOpts = {
        pathname: "automation-testing-services",
        title: "Automation Testing Services | Testriq",
        description: "Global automation testing across iOS and Android.",
    };

    describe("canonical and og:url binding", () => {
        it("emits a canonical equal to og:url (the cardinal invariant)", () => {
            const m = buildPageMetadata(minimalOpts);
            const canonical = m.alternates?.canonical;
            // og:url
            const ogUrl = (m.openGraph as { url?: string } | undefined)?.url;
            expect(canonical).toBe("https://www.testriq.com/automation-testing-services");
            expect(ogUrl).toBe(canonical);
        });

        it("emits absolute URLs starting with SITE_URL", () => {
            const m = buildPageMetadata(minimalOpts);
            const canonical = m.alternates?.canonical as string;
            expect(canonical.startsWith(SITE_URL)).toBe(true);
            expect(canonical.startsWith("/")).toBe(false);
        });

        it("URLs do NOT contain a /services/ route-group prefix", () => {
            const m = buildPageMetadata(minimalOpts);
            const canonical = m.alternates?.canonical as string;
            const ogUrl = (m.openGraph as { url?: string } | undefined)?.url as string;
            expect(canonical.includes("/services/")).toBe(false);
            expect(ogUrl.includes("/services/")).toBe(false);
        });

        it("strips trailing slash from input pathname", () => {
            const m = buildPageMetadata({ ...minimalOpts, pathname: "/blog/post/foo/" });
            expect(m.alternates?.canonical).toBe("https://www.testriq.com/blog/post/foo");
        });

        it("computes root canonical for empty pathname", () => {
            const m = buildPageMetadata({ ...minimalOpts, pathname: "" });
            expect(m.alternates?.canonical).toBe(SITE_URL);
        });
    });

    describe("title template bypass (regression test for double-brand bug)", () => {
        // The root layout (src/app/layout.tsx) sets a title.template of
        // `"%s | Testriq"`. If buildPageMetadata returned `title: opts.title`
        // as a plain string, Next.js would apply the template on top —
        // producing "Foo | Testriq | Testriq" for an opts.title of
        // "Foo | Testriq". The helper must use { absolute: opts.title } to
        // bypass the template, since its contract requires callers to pass a
        // complete brand-suffixed title.

        it("returns title as { absolute } object, not a plain string", () => {
            const m = buildPageMetadata({
                ...minimalOpts,
                title: "Agile Testing Services | Sprint-Ready QA | Testriq",
            });
            expect(typeof m.title).toBe("object");
            expect(m.title).toEqual({
                absolute: "Agile Testing Services | Sprint-Ready QA | Testriq",
            });
        });

        it("title.absolute equals opts.title byte-for-byte (no transformation)", () => {
            const opts = {
                ...minimalOpts,
                title: "Performance Testing Services | ISO 29119 | Testriq",
            };
            const m = buildPageMetadata(opts);
            expect((m.title as { absolute: string }).absolute).toBe(opts.title);
        });

        it("OG title and Twitter title still receive plain string (no template applies to OG/Twitter anyway)", () => {
            const m = buildPageMetadata({
                ...minimalOpts,
                title: "Foo Bar | Testriq",
            });
            const og = m.openGraph as { title?: string };
            const tw = m.twitter as { title?: string };
            // OG and Twitter titles should be the plain string — Next.js
            // does not apply title.template to OG/Twitter, so no bypass
            // is required there.
            expect(og.title).toBe("Foo Bar | Testriq");
            expect(tw.title).toBe("Foo Bar | Testriq");
        });
    });

    describe("default values", () => {
        it("defaults siteName, locale, twitter card, og type", () => {
            const m = buildPageMetadata(minimalOpts);
            const og = m.openGraph as { siteName?: string; locale?: string; type?: string };
            const tw = m.twitter as { card?: string; site?: string; creator?: string };
            expect(og.siteName).toBe(DEFAULT_SITE_NAME);
            expect(og.locale).toBe(DEFAULT_LOCALE);
            expect(og.type).toBe("website");
            expect(tw.card).toBe("summary_large_image");
            expect(tw.site).toBe(DEFAULT_TWITTER_HANDLE);
            expect(tw.creator).toBe(DEFAULT_TWITTER_HANDLE);
        });

        it("uses DEFAULT_OG_IMAGE when no ogImage is provided", () => {
            const m = buildPageMetadata(minimalOpts);
            const og = m.openGraph as { images?: OgImageDescriptor[] };
            expect(og.images?.[0]).toEqual(DEFAULT_OG_IMAGE);
            const tw = m.twitter as { images?: string[] };
            expect(tw.images?.[0]).toBe(DEFAULT_OG_IMAGE.url);
        });

        it("default robots = index:true, follow:true with googleBot maximums", () => {
            const m = buildPageMetadata(minimalOpts);
            const r = m.robots as { index?: boolean; follow?: boolean; googleBot?: object };
            expect(r.index).toBe(true);
            expect(r.follow).toBe(true);
            expect(r.googleBot).toBeDefined();
        });

        it("metadataBase is a URL pointing to SITE_URL", () => {
            const m = buildPageMetadata(minimalOpts);
            expect(m.metadataBase?.toString()).toBe(`${SITE_URL}/`);
        });
    });

    describe("ogImage override", () => {
        const customImg: OgImageDescriptor = {
            url: "https://www.testriq.com/OG/custom.webp",
            width: 1200,
            height: 630,
            alt: "Custom Image",
            type: "image/webp",
        };

        it("uses provided ogImage instead of default", () => {
            const m = buildPageMetadata({ ...minimalOpts, ogImage: customImg });
            const og = m.openGraph as { images?: OgImageDescriptor[] };
            expect(og.images?.[0]).toEqual(customImg);
        });

        it("twitterImage falls back to ogImage.url when not specified", () => {
            const m = buildPageMetadata({ ...minimalOpts, ogImage: customImg });
            const tw = m.twitter as { images?: string[] };
            expect(tw.images?.[0]).toBe(customImg.url);
        });

        it("explicit twitterImage overrides ogImage.url", () => {
            const m = buildPageMetadata({
                ...minimalOpts,
                ogImage: customImg,
                twitterImage: "https://www.testriq.com/OG/twitter-special.webp",
            });
            const tw = m.twitter as { images?: string[] };
            expect(tw.images?.[0]).toBe("https://www.testriq.com/OG/twitter-special.webp");
        });
    });

    describe("noindex shorthand", () => {
        it('sets robots to {index:false, follow:true} when noindex=true', () => {
            const m = buildPageMetadata({ ...minimalOpts, noindex: true });
            const r = m.robots as { index?: boolean; follow?: boolean };
            expect(r.index).toBe(false);
            expect(r.follow).toBe(true);
        });

        it("noindex=false is equivalent to default (index:true, follow:true)", () => {
            const m = buildPageMetadata({ ...minimalOpts, noindex: false });
            const r = m.robots as { index?: boolean; follow?: boolean };
            expect(r.index).toBe(true);
            expect(r.follow).toBe(true);
        });

        it("explicit `robots` takes precedence over `noindex`", () => {
            const ORIGINAL_NODE_ENV = process.env.NODE_ENV;
            process.env.NODE_ENV = "development";
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

            const m = buildPageMetadata({
                ...minimalOpts,
                noindex: true,
                robots: { index: true, follow: false },
            });
            const r = m.robots as { index?: boolean; follow?: boolean };
            expect(r.index).toBe(true); // robots wins, not noindex
            expect(r.follow).toBe(false);
            expect(warn).toHaveBeenCalledTimes(1);
            expect(warn.mock.calls[0][0]).toMatch(/Both `noindex` and `robots`/);

            warn.mockRestore();
            process.env.NODE_ENV = ORIGINAL_NODE_ENV;
        });

        it("does NOT warn when only noindex is provided (no robots)", () => {
            const ORIGINAL_NODE_ENV = process.env.NODE_ENV;
            process.env.NODE_ENV = "development";
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

            buildPageMetadata({ ...minimalOpts, noindex: true });
            expect(warn).not.toHaveBeenCalled();

            warn.mockRestore();
            process.env.NODE_ENV = ORIGINAL_NODE_ENV;
        });

        it("does NOT warn when only robots is provided (no noindex)", () => {
            const ORIGINAL_NODE_ENV = process.env.NODE_ENV;
            process.env.NODE_ENV = "development";
            const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

            buildPageMetadata({ ...minimalOpts, robots: { index: false } });
            expect(warn).not.toHaveBeenCalled();

            warn.mockRestore();
            process.env.NODE_ENV = ORIGINAL_NODE_ENV;
        });
    });

    describe("robots flags passthrough", () => {
        it("emits noarchive only when set", () => {
            const m = buildPageMetadata({
                ...minimalOpts,
                robots: { noarchive: true },
            });
            expect((m.robots as { noarchive?: boolean }).noarchive).toBe(true);
        });

        it("does NOT emit noarchive when unset", () => {
            const m = buildPageMetadata(minimalOpts);
            expect((m.robots as Record<string, unknown>).noarchive).toBeUndefined();
        });

        it("emits nosnippet/noimageindex only when set", () => {
            const m = buildPageMetadata({
                ...minimalOpts,
                robots: { nosnippet: true, noimageindex: true },
            });
            const r = m.robots as { nosnippet?: boolean; noimageindex?: boolean };
            expect(r.nosnippet).toBe(true);
            expect(r.noimageindex).toBe(true);
        });
    });

    describe("keywords passthrough", () => {
        it("emits keywords array when provided", () => {
            const m = buildPageMetadata({ ...minimalOpts, keywords: ["foo", "bar"] });
            expect(m.keywords).toEqual(["foo", "bar"]);
        });

        it("omits keywords when not provided", () => {
            const m = buildPageMetadata(minimalOpts);
            expect(m.keywords).toBeUndefined();
        });

        it("omits keywords when empty array", () => {
            const m = buildPageMetadata({ ...minimalOpts, keywords: [] });
            expect(m.keywords).toBeUndefined();
        });
    });

    describe("ogType variants", () => {
        it('defaults to "website"', () => {
            const m = buildPageMetadata(minimalOpts);
            const og = m.openGraph as { type?: string };
            expect(og.type).toBe("website");
        });

        it('emits "article" when set', () => {
            const m = buildPageMetadata({ ...minimalOpts, ogType: "article" });
            const og = m.openGraph as { type?: string };
            expect(og.type).toBe("article");
        });
    });

    describe("jsonLd is a Phase 5 stub (no-op)", () => {
        it("accepts a single object without affecting Metadata", () => {
            const baseline = buildPageMetadata(minimalOpts);
            const withJsonLd = buildPageMetadata({
                ...minimalOpts,
                jsonLd: { "@context": "https://schema.org", "@type": "WebPage" },
            });
            // Object structures should be deeply equal (no jsonLd field appears
            // anywhere in the returned Metadata).
            expect(withJsonLd).toEqual(baseline);
        });

        it("accepts an array without affecting Metadata", () => {
            const baseline = buildPageMetadata(minimalOpts);
            const withJsonLd = buildPageMetadata({
                ...minimalOpts,
                jsonLd: [
                    { "@context": "https://schema.org", "@type": "WebPage" },
                    { "@context": "https://schema.org", "@type": "BreadcrumbList" },
                ],
            });
            expect(withJsonLd).toEqual(baseline);
        });
    });

    describe("siteName, locale, twitterCard overrides", () => {
        it("overrides siteName when provided", () => {
            const m = buildPageMetadata({ ...minimalOpts, siteName: "Custom Brand" });
            const og = m.openGraph as { siteName?: string };
            expect(og.siteName).toBe("Custom Brand");
        });

        it("overrides locale when provided", () => {
            const m = buildPageMetadata({ ...minimalOpts, locale: "en_GB" });
            const og = m.openGraph as { locale?: string };
            expect(og.locale).toBe("en_GB");
        });

        it("overrides twitterCard when provided", () => {
            const m = buildPageMetadata({ ...minimalOpts, twitterCard: "summary" });
            const tw = m.twitter as { card?: string };
            expect(tw.card).toBe("summary");
        });
    });
});

// ---------------------------------------------------------------------------
// Internal helper
// ---------------------------------------------------------------------------

describe("isDevEnvironment", () => {
    const ORIGINAL_NODE_ENV = process.env.NODE_ENV;

    afterEach(() => {
        process.env.NODE_ENV = ORIGINAL_NODE_ENV;
    });

    it('returns false when NODE_ENV === "production"', () => {
        process.env.NODE_ENV = "production";
        expect(isDevEnvironment()).toBe(false);
    });

    it('returns true when NODE_ENV === "development"', () => {
        process.env.NODE_ENV = "development";
        expect(isDevEnvironment()).toBe(true);
    });

    it('returns true when NODE_ENV === "test"', () => {
        process.env.NODE_ENV = "test";
        expect(isDevEnvironment()).toBe(true);
    });

    it("returns true when NODE_ENV is undefined", () => {
        delete process.env.NODE_ENV;
        expect(isDevEnvironment()).toBe(true);
    });
});
