/**
 * Guard for the legacy blog-slug redirects after moving them from
 * next.config's redirect table into middleware.
 *
 * Two things this must keep true:
 *   1. The route table stays under Next's 1,000-route soft limit, which is why
 *      the move happened.
 *   2. Unknown slugs are NOT redirected. A blanket `/blog/:slug` rule would
 *      have been one line, and would have turned every typo into a 308 into a
 *      404 — the soft-404 pattern this repo has cleaned up twice.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 */

import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { BLOG_POST_SLUGS, blogPostRedirectTarget } from "../blog-slug-redirect";
import { redirects } from "../redirect-map";

describe("blogPostRedirectTarget", () => {
    const knownSlug = [...BLOG_POST_SLUGS][0];

    it("has a populated slug list", () => {
        expect(BLOG_POST_SLUGS.size).toBeGreaterThan(300);
    });

    it("redirects a known legacy slug into /blog/post/", () => {
        expect(blogPostRedirectTarget(`/blog/${knownSlug}`)).toBe(`/blog/post/${knownSlug}`);
    });

    it("tolerates a trailing slash", () => {
        expect(blogPostRedirectTarget(`/blog/${knownSlug}/`)).toBe(`/blog/post/${knownSlug}`);
    });

    it("leaves an UNKNOWN slug alone, so it still 404s honestly", () => {
        expect(blogPostRedirectTarget("/blog/this-post-does-not-exist")).toBeNull();
        expect(blogPostRedirectTarget("/blog/typo-abc-123")).toBeNull();
    });

    it("leaves the real child routes under /blog alone", () => {
        for (const path of [
            "/blog/post",
            "/blog/search",
            "/blog/categories",
            "/blog/category",
            "/blog/tag",
            "/blog/demo",
            "/blog/feed.xml",
        ]) {
            expect(blogPostRedirectTarget(path)).toBeNull();
        }
    });

    it("ignores paths with more than one segment, and non-blog paths", () => {
        for (const path of [
            `/blog/post/${knownSlug}`,
            "/blog/tag/automation",
            "/blog/category/api",
            "/blog",
            "/",
            "/api-testing",
        ]) {
            expect(blogPostRedirectTarget(path)).toBeNull();
        }
    });

    it("never shadows a real /blog child route", () => {
        // The slug list is data from Sanity; if a post were ever given the slug
        // "search" or "feed.xml" it would hide a working page.
        const blogDir = join(process.cwd(), "src", "app", "blog");
        const realRoutes = readdirSync(blogDir).filter((entry) => {
            try {
                return statSync(join(blogDir, entry)).isDirectory();
            } catch {
                return false;
            }
        });
        const shadowed = realRoutes.filter((segment) => BLOG_POST_SLUGS.has(segment));
        expect(shadowed).toEqual([]);
    });
});

describe("next.config redirect table", () => {
    it("stays under Next's 1,000 custom-route soft limit", () => {
        expect(redirects.length).toBeLessThan(1000);
    });

    it("no longer enumerates one rule per post slug", () => {
        const enumerated = redirects.filter(
            (r) =>
                /^\/blog\/[^/:]+$/.test(r.source) &&
                BLOG_POST_SLUGS.has(r.source.replace("/blog/", "")),
        );
        expect(enumerated).toEqual([]);
    });

    it("keeps the renamed-post redirects, which middleware must not replace", () => {
        // These point at a DIFFERENT slug, so a slug-insertion rule cannot
        // express them. They have to stay explicit in the table.
        const remapped = redirects.filter(
            (r) =>
                /^\/blog\/[^/:]+$/.test(r.source) &&
                /^\/blog\/post\//.test(String(r.destination)) &&
                r.source.replace("/blog/", "") !==
                    String(r.destination).replace("/blog/post/", ""),
        );
        expect(remapped.length).toBeGreaterThanOrEqual(7);
    });

    it("has no single-segment /blog rule that middleware would also match", () => {
        // Overlap would make behaviour depend on whether middleware or the
        // redirect table runs first. There is none, and this keeps it that way.
        const overlapping = redirects
            .filter((r) => /^\/blog\/[^/:]+$/.test(r.source))
            .filter((r) => BLOG_POST_SLUGS.has(r.source.replace("/blog/", "")));
        expect(overlapping).toEqual([]);
    });
});
