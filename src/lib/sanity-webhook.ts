// DEV-12 follow-up — signature verification and path derivation for the
// Sanity publish webhook served by `src/app/api/revalidate/route.ts`.
//
// Why this file is deliberately plain:
//   - No `@/` imports. This repo ships no vitest config, so Vitest resolves
//     no `@/` path alias for runtime imports; anything a test loads has to
//     use relative paths. (Type-only `@/` imports are erased and would be
//     fine, but nothing here needs one.)
//   - No `next/*` imports and no I/O. Everything here is a pure function, so
//     the whole contract is unit-testable without a running server. The route
//     handler keeps all of the side effects.
//
// Wire format, verified against the `@sanity/webhook@4.0.4` implementation
// installed under node_modules rather than from memory:
//   header  sanity-webhook-signature: t=<unix-ms>,v1=<signature>
//   signed  `${timestamp}.${rawRequestBody}`
//   algo    HMAC-SHA256, secret used as raw UTF-8 key bytes
//   encode  base64url, padding stripped
//
// We re-implement rather than depend on `@sanity/webhook` because that package
// is only present transitively (via the `sanity` dependency) and is not
// declared in package.json — importing an undeclared transitive dep is a
// hoisting-dependent break waiting to happen. The test suite cross-checks our
// output against the real package so the two cannot silently diverge.
//
// Two deliberate differences from the official helper:
//   1. It compares signatures with `!==`. We use `timingSafeEqual`.
//   2. It enforces only a floor on the timestamp, with no freshness window, so
//      a captured request stays replayable forever. Replaying one of these can
//      trigger a production deploy, so we add a tolerance window.

import { createHmac, timingSafeEqual } from "node:crypto";

export const SIGNATURE_HEADER_NAME = "sanity-webhook-signature";
export const OPERATION_HEADER_NAME = "sanity-operation";

// Mirrors @sanity/webhook: `t=<digits>`, one or more [, ] separators, then
// `v1=<token>` containing no comma or space.
const SIGNATURE_HEADER_REGEX = /^t=(\d+)[, ]+v1=([^, ]+)$/;

// 2021-01-01T00:00:00Z — the same floor the official package uses. Anything
// older is not a millisecond-precision timestamp (most likely seconds).
export const MINIMUM_TIMESTAMP = 1609459200000;

// Accept a signature up to 5 minutes either side of now: the past bound caps
// the replay window, the future bound tolerates clock skew on Sanity's side.
export const DEFAULT_TOLERANCE_MS = 5 * 60 * 1000;

export type SignatureVerification =
    | { ok: true; timestamp: number }
    | { ok: false; status: 400 | 401; reason: string };

export interface VerifyOptions {
    rawBody: string;
    signatureHeader: string | null | undefined;
    secret: string;
    /** Injectable for tests. Defaults to `Date.now()`. */
    nowMs?: number;
    toleranceMs?: number;
}

/**
 * Compute the `v1=` portion of the signature header for a payload. Exported so
 * the tests can build valid headers, and so the shape of the signed string
 * lives in exactly one place.
 */
export function signPayload(rawBody: string, timestamp: number, secret: string): string {
    return createHmac("sha256", secret)
        .update(`${timestamp}.${rawBody}`)
        .digest("base64url");
}

/** Build a complete header value. Mirrors Sanity's encoder. */
export function encodeSignatureHeader(rawBody: string, timestamp: number, secret: string): string {
    return `t=${timestamp},v1=${signPayload(rawBody, timestamp, secret)}`;
}

/**
 * Status codes follow the official package's own split, which also matches how
 * `src/app/api/draft-mode/enable/route.ts` reports its secret failures:
 *   400 — the request is malformed (header missing a field, junk timestamp).
 *   401 — the request is well-formed but not authentic.
 */
export function verifySanityWebhookSignature(options: VerifyOptions): SignatureVerification {
    const { rawBody, signatureHeader, secret } = options;
    const nowMs = options.nowMs ?? Date.now();
    const toleranceMs = options.toleranceMs ?? DEFAULT_TOLERANCE_MS;

    if (!secret) {
        return { ok: false, status: 400, reason: "No signing secret configured." };
    }
    // Absent header vs. present-but-empty are different failures, and the
    // official package splits them the same way: no header at all is an
    // authenticity failure, an unparseable one is a format failure (it falls
    // through to the regex check below).
    if (signatureHeader === null || signatureHeader === undefined) {
        return {
            ok: false,
            status: 401,
            reason: `Request contained no ${SIGNATURE_HEADER_NAME} header.`,
        };
    }
    if (!rawBody) {
        // Signing an empty string is meaningless, and Sanity never sends one.
        return { ok: false, status: 400, reason: "Request body was empty." };
    }

    const match = signatureHeader.trim().match(SIGNATURE_HEADER_REGEX);
    if (!match) {
        return {
            ok: false,
            status: 400,
            reason: "Signature header is not in the form 't=<ms>,v1=<signature>'.",
        };
    }

    const timestamp = Number.parseInt(match[1], 10);
    const provided = match[2];

    if (!Number.isFinite(timestamp) || timestamp < MINIMUM_TIMESTAMP) {
        return {
            ok: false,
            status: 400,
            reason: "Signature timestamp must be a unix timestamp with millisecond precision.",
        };
    }

    if (Math.abs(nowMs - timestamp) > toleranceMs) {
        return {
            ok: false,
            status: 401,
            reason: `Signature timestamp is outside the ${toleranceMs}ms tolerance window.`,
        };
    }

    const expected = signPayload(rawBody, timestamp, secret);
    const providedBuf = Buffer.from(provided, "utf8");
    const expectedBuf = Buffer.from(expected, "utf8");

    // timingSafeEqual throws on a length mismatch, so compare lengths first. A
    // differing length already means a differing signature.
    if (providedBuf.length !== expectedBuf.length || !timingSafeEqual(providedBuf, expectedBuf)) {
        return { ok: false, status: 401, reason: "Signature is invalid." };
    }

    return { ok: true, timestamp };
}

// ---------------------------------------------------------------------------
// Payload -> paths
// ---------------------------------------------------------------------------

/**
 * The projection the Sanity webhook sends. Everything past `_type` is optional
 * so a minimally-configured webhook still does useful work; the exact
 * projection to paste into the Studio is in
 * src/app/api/revalidate/README.md.
 */
export interface SanityWebhookPayload {
    _type?: string;
    _id?: string;
    /** Accepts a projected string or a raw `slug` object, whichever is configured. */
    slug?: string | { current?: string | null } | null;
    authorSlug?: string | null;
    categorySlugs?: readonly (string | null | undefined)[] | null;
    tagSlugs?: readonly (string | null | undefined)[] | null;
}

export type SanityOperation = "create" | "update" | "delete";

/**
 * Routes that list blog posts, and so go stale when any single post changes.
 * `/sitemap.xml` and the two llms.txt routes also list case studies, so they
 * appear in both aggregate sets.
 */
const POST_AGGREGATE_PATHS = [
    "/blog",
    "/blog/search",
    "/blog/feed.xml",
    "/website-map",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
] as const;

const CASE_STUDY_AGGREGATE_PATHS = [
    "/case-studies",
    "/website-map",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
] as const;

function readSlug(slug: SanityWebhookPayload["slug"]): string | null {
    const raw = typeof slug === "string" ? slug : slug?.current;
    if (typeof raw !== "string") return null;
    const trimmed = raw.trim();
    // Guard the path about to be handed to revalidatePath: a slug containing a
    // slash or a traversal segment would address a route other than the one
    // that actually changed.
    if (!trimmed || trimmed.includes("/") || trimmed === "." || trimmed === "..") return null;
    return trimmed;
}

function readSlugList(list: SanityWebhookPayload["categorySlugs"]): string[] {
    if (!Array.isArray(list)) return [];
    return list.map((entry) => readSlug(entry)).filter((entry): entry is string => entry !== null);
}

/**
 * Every path to revalidate for one webhook delivery, de-duplicated and in a
 * stable order. An unrecognised `_type` yields `[]` — the route then answers
 * 200 with nothing revalidated rather than making Sanity retry forever.
 *
 * `subscriber` and `certificate` documents are intentionally absent: no public
 * route renders them.
 */
export function derivePathsToRevalidate(payload: SanityWebhookPayload): string[] {
    const slug = readSlug(payload.slug);
    const paths: string[] = [];

    switch (payload._type) {
        case "post": {
            if (slug) paths.push(`/blog/post/${slug}`);
            paths.push(...POST_AGGREGATE_PATHS);
            // Only present when the richer projection is configured. Without
            // them these pages still self-heal, because
            // /blog/category/[category] and /blog/tag/[tag] both run on
            // `revalidate = 60`.
            const author = readSlug(payload.authorSlug);
            if (author) paths.push(`/author/${author}`);
            for (const category of readSlugList(payload.categorySlugs)) {
                paths.push(`/blog/category/${category}`);
            }
            for (const tag of readSlugList(payload.tagSlugs)) {
                paths.push(`/blog/tag/${tag}`);
            }
            break;
        }
        case "caseStudy": {
            // Case studies are served by the catch-all /[slug] route, which
            // also serves city pages.
            if (slug) paths.push(`/${slug}`);
            paths.push(...CASE_STUDY_AGGREGATE_PATHS);
            break;
        }
        case "author": {
            if (slug) paths.push(`/author/${slug}`);
            paths.push("/sitemap.xml");
            break;
        }
        case "category": {
            if (slug) paths.push(`/blog/category/${slug}`);
            paths.push("/blog", "/sitemap.xml", "/website-map");
            break;
        }
        case "tag": {
            if (slug) paths.push(`/blog/tag/${slug}`);
            paths.push("/blog", "/sitemap.xml", "/website-map");
            break;
        }
        case "jobPosting": {
            paths.push("/careers", "/sitemap.xml");
            break;
        }
        case "page": {
            // `_type == "page"` documents are read by src/app/sitemap.ts only;
            // no route renders one today.
            paths.push("/sitemap.xml");
            break;
        }
        default:
            return [];
    }

    return [...new Set(paths)];
}

/**
 * Whether this delivery needs a full redeploy on top of revalidation.
 *
 * `src/app/[slug]/page.tsx` is the only route in the app that pins
 * `dynamicParams = false` (DEV-12, so unknown URLs 404 instead of answering
 * 200). That makes its set of valid params a build artifact: revalidatePath
 * can refresh a path the build already knew about, but it cannot add one,
 * because the allowed params live in the on-disk prerender manifest. So a case
 * study appearing or disappearing requires a build, while every other route
 * runs `dynamicParams = true` and renders new slugs on demand.
 *
 * Known residual: an *update* that renames a published case study's slug also
 * changes the param set, and is indistinguishable from an ordinary edit
 * without a before/after projection. Such a rename 404s until the next deploy.
 * Renames of live case studies are rare; the runbook says to redeploy after one.
 */
export function requiresDeploy(
    payload: SanityWebhookPayload,
    operation: SanityOperation | null,
): boolean {
    if (payload._type !== "caseStudy") return false;
    // No operation header → assume the param set moved. A redundant deploy
    // costs build minutes; a missed one leaves a published case study 404ing.
    if (operation === null) return true;
    return operation === "create" || operation === "delete";
}

/** Narrow the raw `sanity-operation` header to the three values Sanity sends. */
export function parseOperation(header: string | null | undefined): SanityOperation | null {
    const value = header?.trim().toLowerCase();
    return value === "create" || value === "update" || value === "delete" ? value : null;
}
