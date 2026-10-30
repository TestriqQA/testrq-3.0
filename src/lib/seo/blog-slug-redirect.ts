// Legacy `/blog/<slug>` -> `/blog/post/<slug>` redirects (DEV-05), moved out
// of next.config's redirect table and into a proxy (Next 16 renamed the middleware convention).
//
// Why it moved: the generated table held one rule per post slug, which pushed
// the project to 1,167 custom routes and tripped Next's
// `max-custom-routes-reached` warning (the soft limit is 1,000). Every request
// was matched sequentially against all of them. A Set lookup here is O(1), and
// removing 365 rules (plus two that duplicated them) brings the table to 800.
//
// Why NOT a blanket `/blog/:slug` redirect, which would have been one line:
// the original comment on the generated block rejected that deliberately, and
// it was right. A catch-all turns every typo and crawler guess into a 308 into
// a 404 — a soft 404 at scale. This repo has cleaned that up twice already (8
// soft-404s from a stale snapshot, and DEV-12, whose whole point was making
// unknown URLs return a real 404 instead of a 200). Matching against the real
// slug list keeps that property: a slug that does not exist is simply not
// redirected, and still 404s honestly.
//
// Kept as a pure function in its own module so it is unit-testable without
// constructing a NextRequest, and so middleware stays a thin wrapper. The
// relative JSON import matters: this repo ships no vitest config, so a `@/`
// import would not resolve in tests.

import buildSnapshot from "../sanity-build-snapshot.json";

/**
 * Current post slugs, refreshed by `npm run sanity:snapshot` (and by the
 * prebuild step on every deploy). A post added after the last refresh simply
 * has no redirect yet, which is the safe failure — the same property the
 * generated table had.
 */
export const BLOG_POST_SLUGS: ReadonlySet<string> = new Set<string>(
    (buildSnapshot as { postSlugs?: string[] }).postSlugs ?? [],
);

/** Matches exactly one path segment under /blog, with an optional trailing slash. */
const SINGLE_SEGMENT = /^\/blog\/([^/]+)\/?$/;

/**
 * The path a legacy blog URL should redirect to, or null to leave the request
 * alone.
 *
 * Returns null for anything that is not a known post slug, which covers the
 * real child routes under /blog (post, search, tag, category, categories,
 * demo, feed.xml) as well as typos. Those are never in the slug list, so they
 * fall through untouched rather than being special-cased.
 */
export function blogPostRedirectTarget(pathname: string): string | null {
    const match = SINGLE_SEGMENT.exec(pathname);
    if (!match) return null;

    const slug = match[1];
    if (!BLOG_POST_SLUGS.has(slug)) return null;

    return `/blog/post/${slug}`;
}
