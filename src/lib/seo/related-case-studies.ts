// PART 4 / JOB A3 — which case studies each service page should link to.
//
// Taken from the brief's table, inverted: it lists "case study -> link FROM
// service page", and a service page needs to know what to render.
//
// Why this is needed at all: a link crawl of the build found 11 of the 14 case
// studies on ZERO contextual inbound links. Two causes, both now fixed —
// /case-studies linked them with a relative href that resolved under
// /case-studies/... and 404'd, and nothing else linked them at all. Those
// fixes brought every case study to 2 inbound links; the brief's threshold is
// 3, and this map supplies the rest.
//
// Note that the per-service "case studies" sections that already exist on these
// pages (ApiCaseStudies, SecurityTestingCaseStudies, and so on) are narrative
// copy that links other service pages and blog posts. They do not link a single
// case study page, which is why they did not help.
//
// No `@/` imports: this repo ships no vitest config, so there is no path-alias
// resolution for runtime imports in tests.

export const RELATED_CASE_STUDIES: Readonly<Record<string, readonly string[]>> = {
    "healthcare-testing-services": ["pro-ficiency-case-study"],
    "qa-documentation-services": ["pro-ficiency-case-study"],
    "security-testing": ["indo-wings-case-study", "leadoconnect-case-study"],
    "saas-testing-services": [
        "leadoconnect-case-study",
        "realtytrac-case-study",
        "home-facts-case-study",
    ],
    "performance-testing-services": [
        "leadoconnect-case-study",
        "rc-pets-case-study",
        "worksocial-case-study",
    ],
    "e-commerce-testing-services": ["rc-pets-case-study"],
    "gaming-app-testing-services": ["lokko-game-testing-qa"],
    "iot-device-testing-services": ["smart-doorbell-case-study"],
    "smart-device-testing-services": ["smart-doorbell-case-study"],
    "mobile-application-testing": [
        "ragnar-sports-platform",
        "luep-case-study",
        "kanishka-mobile-app",
    ],
    "manufacturing-industry-testing-services": ["cleverence-inventory-odoo-case-study"],
    "migration-testing": ["cleverence-inventory-odoo-case-study"],
    "api-testing": ["phyllo-case-study"],
    "postman-api-testing-services": ["phyllo-case-study"],
};

/** Case study slugs to feature on a service page; empty when unmapped. */
export function relatedCaseStudiesFor(serviceSlug: string): readonly string[] {
    return RELATED_CASE_STUDIES[serviceSlug] ?? [];
}

/**
 * Readable fallback title, used when Sanity cannot be reached so the link still
 * renders with sensible anchor text rather than a bare slug.
 *
 * Keeps "QA" upper-cased and drops the redundant "Case Study" suffix, since the
 * card already says that.
 */
export function caseStudyFallbackTitle(slug: string): string {
    return slug
        .replace(/-case-study$/, "")
        .split("-")
        .map((word) => (word === "qa" ? "QA" : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(" ");
}
