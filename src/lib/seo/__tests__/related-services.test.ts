/**
 * PART 4 / JOB A2 guard — the service-to-service cross-link map.
 *
 * Protects the two failures this audit kept finding: a link that is authored
 * but never rendered, and a link that points at something which does not exist.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
    ORPHAN_CONTENT_PAGES,
    ORPHAN_SERVICE_PAGES,
    RELATED_SERVICES,
    relatedServicesFor,
} from "../related-services";

const sourceSlugs = Object.keys(RELATED_SERVICES);
const targetSlugs = [...new Set(Object.values(RELATED_SERVICES).flat())];

// Route groups do not appear in the URL, and not every page lives in one:
// the comparison and tool pages sit directly under src/app.
const pageFile = (slug: string) => {
    for (const group of ["(services)", "(solutions)", ""]) {
        const file = group
            ? join(process.cwd(), "src", "app", group, slug, "page.tsx")
            : join(process.cwd(), "src", "app", slug, "page.tsx");
        if (existsSync(file)) return file;
    }
    return null;
};

/**
 * True when this page renders ServiceCrossLinks, directly or through a shared
 * template it delegates to. The six tool pages render only
 * <ToolLandingPage />, so a direct-text check would wrongly fail them.
 */
const rendersCrossLinks = (file: string): boolean => {
    const src = readFileSync(file, "utf8");
    if (src.includes("ServiceCrossLinks")) return true;
    for (const match of src.matchAll(/["']@\/components\/sections\/([A-Za-z0-9_]+)["']/g)) {
        const dep = join(process.cwd(), "src", "components", "sections", match[1] + ".tsx");
        if (existsSync(dep) && readFileSync(dep, "utf8").includes("ServiceCrossLinks")) return true;
    }
    return false;
};

/** How many distinct source pages link each orphan. */
const sourcesFor = (target: string) =>
    sourceSlugs.filter((source) => RELATED_SERVICES[source].includes(target));

describe("RELATED_SERVICES map", () => {
    it("names only source pages that exist", () => {
        expect(sourceSlugs.filter((slug) => pageFile(slug) === null)).toEqual([]);
    });

    it("names only target pages that exist", () => {
        expect(targetSlugs.filter((slug) => pageFile(slug) === null)).toEqual([]);
    });

    it("uses bare kebab-case slugs, not paths", () => {
        const bad = [...sourceSlugs, ...targetSlugs].filter(
            (slug) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug),
        );
        expect(bad).toEqual([]);
    });

    it("never links a page to itself", () => {
        const selfLinks = sourceSlugs.filter((slug) => RELATED_SERVICES[slug].includes(slug));
        expect(selfLinks).toEqual([]);
    });

    it("never repeats a target within one source page", () => {
        const dupes = sourceSlugs.filter((slug) => {
            const list = RELATED_SERVICES[slug];
            return new Set(list).size !== list.length;
        });
        expect(dupes).toEqual([]);
    });

    it("covers all 12 orphan service pages", () => {
        const uncovered = ORPHAN_SERVICE_PAGES.filter((slug) => !targetSlugs.includes(slug));
        expect(uncovered).toEqual([]);
    });

    it("gives every orphan at least 2 source pages", () => {
        // The acceptance is ">=2 contextual incoming links". Their existing
        // single link came from /website-map, which is an index rather than a
        // contextual link, so it does not count toward this.
        const thin = ORPHAN_SERVICE_PAGES.map((slug) => ({ slug, n: sourcesFor(slug).length }))
            .filter((row) => row.n < 2)
            .map((row) => `${row.slug} has ${row.n}`);
        expect(thin).toEqual([]);
    });

    it("gives every PART 9 orphan content page at least 2 source pages", () => {
        // The comparison and tool pages found on zero incoming body links.
        // Same acceptance as above: two contextual sources, not an index entry.
        const thin = ORPHAN_CONTENT_PAGES.map((slug) => ({ slug, n: sourcesFor(slug).length }))
            .filter((row) => row.n < 2)
            .map((row) => `${row.slug} has ${row.n}`);
        expect(thin).toEqual([]);
    });

    it("links every PART 9 orphan content page from somewhere", () => {
        const unmapped = ORPHAN_CONTENT_PAGES.filter((slug) => !targetSlugs.includes(slug));
        expect(unmapped).toEqual([]);
    });

    it("renders the component on every source page", () => {
        const notRendering = sourceSlugs.filter((slug) => {
            const file = pageFile(slug);
            return file === null || !rendersCrossLinks(file);
        });
        expect(notRendering).toEqual([]);
    });

    it("does not collide with the blog-to-service RelatedServices component", () => {
        // RelatedServices in the same folder is the BLOG -> service return path
        // with a different prop shape. An earlier pass overwrote it; this keeps
        // the two separate.
        const blogComponent = join(
            process.cwd(),
            "src",
            "components",
            "sections",
            "RelatedServices.tsx",
        );
        expect(existsSync(blogComponent)).toBe(true);
        expect(readFileSync(blogComponent, "utf8")).toContain("categorySlugs");
    });
});

describe("relatedServicesFor", () => {
    it("returns the mapped list", () => {
        expect(relatedServicesFor("sap-testing-services")).toEqual(["migration-testing"]);
    });

    it("returns empty for an unmapped service", () => {
        expect(relatedServicesFor("not-a-service")).toEqual([]);
    });
});
