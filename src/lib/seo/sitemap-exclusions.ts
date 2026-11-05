/**
 * Top-level routes that `discoverRoutes('src/app')` finds but which must NOT
 * be advertised in sitemap.xml.
 *
 * Why this is a module rather than a `const` inside sitemap.ts
 * -----------------------------------------------------------
 * So it can be tested. The accompanying test walks src/app, works out which
 * routes declare themselves noindex, and asserts every one of them appears
 * here. That turns a rule somebody has to remember into one the suite checks.
 *
 * The rule
 * --------
 * A noindex page listed in a sitemap is a contradiction: the sitemap asks
 * Google to index the URL while the page asks it not to. Search Console
 * reports it as "Submitted URL marked 'noindex'".
 *
 * When adding a route here, check BOTH `page.tsx` AND `layout.tsx`. That is
 * the trap that caused this: /verify-certificate keeps its robots directive in
 * layout.tsx, so searching the page file alone turns up nothing and the route
 * looks ordinary.
 *
 * History worth keeping: the sitemap's static list was hardcoded and stale
 * until 2026-11-04, missing 18 real pages. Switching to filesystem discovery
 * fixed that and introduced the mirror-image bug — discovery finds everything,
 * including the pages that were absent on purpose, and /verify-certificate was
 * swept in with the 18 that belonged. Fixed 2026-11-05.
 */
export const STATIC_EXCLUDED_FROM_SITEMAP: ReadonlySet<string> = new Set([
    // Demo page, not real content.
    "blog/demo",
    // noindex, nofollow — declared in src/app/verify-certificate/layout.tsx.
    "verify-certificate",
]);

/**
 * Source-level markers that mean "this route asks not to be indexed".
 *
 * Two spellings exist in this codebase: an explicit `index: false` inside a
 * Next.js `robots` object, and the `noindex: true` shorthand that
 * `buildPageMetadata` accepts. Both are checked.
 *
 * This is a text scan, so it only sees directives written as literals. A route
 * that decides indexability at runtime — as the blog category archive does,
 * from its post count — will not match, which is correct here: those are
 * dynamic routes and are not part of the static list this guards.
 */
export const NOINDEX_SOURCE_PATTERNS: readonly RegExp[] = [
    /\bindex\s*:\s*false\b/,
    /\bnoindex\s*:\s*true\b/,
];
