import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { discoverRoutes } from "../discover-routes";
import {
    NOINDEX_SOURCE_PATTERNS,
    STATIC_EXCLUDED_FROM_SITEMAP,
} from "../sitemap-exclusions";

/**
 * Guards the invariant that sitemap.xml never advertises a page which asks not
 * to be indexed.
 *
 * This has now gone wrong in both directions. The static list was hardcoded
 * and stale, so 18 real pages were never submitted; switching to filesystem
 * discovery fixed that and swept in /verify-certificate, which had been left
 * out on purpose because it is noindex. Neither failure was visible in review
 * — one was an absence, the other looked like a correction.
 *
 * So the check is derived from the routes themselves rather than from a second
 * hand-written list, which would just be one more thing to keep in step.
 */

/** Read a route's own metadata sources. Returns "" for files that don't exist. */
function routeSource(slug: string): string {
    const dir = join(process.cwd(), "src/app", slug);
    let combined = "";
    // BOTH files matter. /verify-certificate declares robots in layout.tsx and
    // nothing in page.tsx, which is exactly how it was missed.
    for (const file of ["page.tsx", "layout.tsx"]) {
        const path = join(dir, file);
        try {
            statSync(path);
            combined += readFileSync(path, "utf8");
        } catch {
            // Route has no file of this name; nothing to read.
        }
    }
    return combined;
}

/** Strip // and block comments so prose about noindex isn't read as a directive. */
function stripComments(source: string): string {
    return source
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/^\s*\/\/.*$/gm, "");
}

function declaresNoindex(slug: string): boolean {
    const code = stripComments(routeSource(slug));
    return NOINDEX_SOURCE_PATTERNS.some((re) => re.test(code));
}

describe("sitemap static-route exclusions", () => {
    const discovered = discoverRoutes("src/app");

    it("discovers the top-level routes at all", () => {
        // Sanity check: if discovery silently returned [], every assertion
        // below would pass for the wrong reason.
        expect(discovered.length).toBeGreaterThan(20);
    });

    it("excludes every top-level route that declares itself noindex", () => {
        const leaked = discovered
            .filter((slug) => declaresNoindex(slug))
            .filter((slug) => !STATIC_EXCLUDED_FROM_SITEMAP.has(slug));

        expect(
            leaked,
            `These routes declare noindex but are still in the sitemap. Add them to ` +
                `STATIC_EXCLUDED_FROM_SITEMAP in src/lib/seo/sitemap-exclusions.ts: ` +
                leaked.join(", "),
        ).toEqual([]);
    });

    it("keeps /verify-certificate out, and knows why", () => {
        expect(discovered).toContain("verify-certificate");
        expect(STATIC_EXCLUDED_FROM_SITEMAP.has("verify-certificate")).toBe(true);
        expect(declaresNoindex("verify-certificate")).toBe(true);
    });

    it("keeps the blog demo page out", () => {
        expect(STATIC_EXCLUDED_FROM_SITEMAP.has("blog/demo")).toBe(true);
    });

    it("does not exclude routes that are perfectly indexable", () => {
        // The 18 that were missing before discovery landed. If a future
        // exclusion is written too broadly, this is what it would break.
        const mustBeListed = [
            "playwright-vs-cypress",
            "playwright-vs-selenium",
            "selenium-vs-cypress",
            "jmeter-vs-k6",
            "appium-vs-espresso",
            "manual-vs-automation-testing",
            "hire-qa-engineer",
            "dedicated-qa-team",
            "qa-engineer-on-demand",
            "staff-augmentation",
            "test-case-template",
            "test-plan-template",
            "test-strategy-template",
            "test-case-estimator",
            "pricing",
            "qa-process",
            "stlc-explained",
            "website-map",
        ];

        for (const slug of mustBeListed) {
            expect(discovered, `${slug} should be discovered`).toContain(slug);
            expect(
                STATIC_EXCLUDED_FROM_SITEMAP.has(slug),
                `${slug} is indexable and must stay in the sitemap`,
            ).toBe(false);
        }
    });

    it("lists nothing that discovery cannot find", () => {
        // A stale exclusion is harmless at runtime but misleading to read:
        // it implies a route exists that does not.
        for (const slug of STATIC_EXCLUDED_FROM_SITEMAP) {
            expect(discovered, `${slug} is excluded but no longer exists`).toContain(slug);
        }
    });
});
