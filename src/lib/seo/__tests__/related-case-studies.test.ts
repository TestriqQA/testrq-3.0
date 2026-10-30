/**
 * PART 4 / JOB A3 guard — the service-page-to-case-study map must stay honest.
 *
 * The failure this protects against is the one the audit found twice already:
 * a link that is authored but never reaches a crawler, or points somewhere that
 * does not exist. Here that would be a map entry whose service page never
 * renders the component, or a case study slug with no page.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
    RELATED_CASE_STUDIES,
    caseStudyFallbackTitle,
    relatedCaseStudiesFor,
} from "../related-case-studies";

const serviceSlugs = Object.keys(RELATED_CASE_STUDIES);
const allCaseStudies = Object.values(RELATED_CASE_STUDIES).flat();

/** Service pages live in one of the two App Router groups. */
const pageFile = (slug: string) => {
    for (const group of ["(services)", "(solutions)"]) {
        const file = join(process.cwd(), "src", "app", group, slug, "page.tsx");
        if (existsSync(file)) return file;
    }
    return null;
};

/**
 * Mapped pages that deliberately do NOT render the component, each because its
 * case study is already linked from a sibling service page, and its page shape
 * has no standard slot (two end on a bare </div>, one is a single
 * shared-template element). Listed explicitly so the exemption is visible
 * rather than implied by a silently passing test.
 */
const RENDER_EXEMPT = new Set([
    "qa-documentation-services",
    "smart-device-testing-services",
    "postman-api-testing-services",
]);

describe("RELATED_CASE_STUDIES map", () => {
    it("covers the brief's 14 case studies", () => {
        expect(new Set(allCaseStudies).size).toBe(14);
    });

    it("maps every service slug to at least one case study", () => {
        const empty = serviceSlugs.filter((s) => RELATED_CASE_STUDIES[s].length === 0);
        expect(empty).toEqual([]);
    });

    it("names only service pages that exist", () => {
        const missing = serviceSlugs.filter((slug) => pageFile(slug) === null);
        expect(missing).toEqual([]);
    });

    it("uses bare kebab-case slugs, not paths", () => {
        const bad = [...serviceSlugs, ...allCaseStudies].filter(
            (slug) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug),
        );
        expect(bad).toEqual([]);
    });

    it("never repeats a case study within one service page", () => {
        const dupes = serviceSlugs.filter((slug) => {
            const list = RELATED_CASE_STUDIES[slug];
            return new Set(list).size !== list.length;
        });
        expect(dupes).toEqual([]);
    });

    it("renders the component on every mapped page that is not exempt", () => {
        const notRendering = serviceSlugs
            .filter((slug) => !RENDER_EXEMPT.has(slug))
            .filter((slug) => {
                const file = pageFile(slug);
                return file === null || !readFileSync(file, "utf8").includes("RelatedCaseStudies");
            });
        expect(notRendering).toEqual([]);
    });

    it("gives each case study at least one non-exempt source page", () => {
        // Without this, a case study could be mapped only from an exempt page
        // and end up with no new inbound link at all.
        const covered = new Set(
            serviceSlugs
                .filter((slug) => !RENDER_EXEMPT.has(slug))
                .flatMap((slug) => RELATED_CASE_STUDIES[slug]),
        );
        const uncovered = [...new Set(allCaseStudies)].filter((cs) => !covered.has(cs));
        // phyllo is mapped only from api-testing (non-exempt) and
        // postman-api-testing-services (exempt), so it must still be covered.
        expect(uncovered).toEqual([]);
    });
});

describe("relatedCaseStudiesFor", () => {
    it("returns the mapped list", () => {
        expect(relatedCaseStudiesFor("api-testing")).toEqual(["phyllo-case-study"]);
    });

    it("returns empty for an unmapped service", () => {
        expect(relatedCaseStudiesFor("not-a-service")).toEqual([]);
    });
});

describe("caseStudyFallbackTitle", () => {
    it("reads as a title and drops the redundant suffix", () => {
        expect(caseStudyFallbackTitle("pro-ficiency-case-study")).toBe("Pro Ficiency");
        expect(caseStudyFallbackTitle("ragnar-sports-platform")).toBe("Ragnar Sports Platform");
    });

    it("keeps QA upper-cased", () => {
        expect(caseStudyFallbackTitle("lokko-game-testing-qa")).toBe("Lokko Game Testing QA");
    });
});
