// PART 4 / JOB A2 — contextual links from established service pages to the 12
// orphaned ones.
//
// Taken from the brief's table, inverted: it lists "orphan page -> link it
// FROM", and a source page needs to know what to render.
//
// The audit found all 12 orphans on exactly ONE inbound link, and that one
// source was /website-map for every single one of them. A sitemap listing is
// not a contextual link — it is an index — so against the brief's "each page
// has >=2 contextual incoming links" they were effectively at zero. Hence two
// contextual sources per orphan here rather than just topping them up to two
// links total.
//
// `/saas-platform-testing-services` is the one worth noticing: the brief has it
// ranking at position 3.15 with no internal links at all, which makes this the
// cheapest win on the list.
//
// No `@/` imports: this repo ships no vitest config, so there is no path-alias
// resolution for runtime imports in tests.

export const RELATED_SERVICES: Readonly<Record<string, readonly string[]>> = {
    "saas-testing-services": ["saas-platform-testing-services", "azure-testing-services"],
    "managed-testing-services": ["saas-platform-testing-services", "azure-testing-services"],
    "mobile-application-testing": [
        "dating-app-certification",
        "matrimonial-apps-certification",
        "trading-apps-certification",
        "appium-mobile-testing-services",
        "appium-vs-espresso",
    ],
    "matrimonial-apps-certification": ["dating-app-certification", "verify-certificate"],
    "dating-app-certification": ["matrimonial-apps-certification", "verify-certificate"],
    "banking-finance-industry-testing-services": [
        "trading-apps-certification",
        "dpdp-compliance-testing-services",
    ],
    "exploratory-testing": ["ad-hoc-testing"],
    "manual-testing-services": [
        "ad-hoc-testing",
        "manual-vs-automation-testing",
        "test-case-estimator",
    ],
    "api-testing": ["postman-api-testing-services", "blockchain-app-testing-services"],
    "iot-device-testing-services": ["manufacturing-industry-testing-services"],
    "embedded-testing-services": ["manufacturing-industry-testing-services"],
    // postman-api-testing-services is added here on top of the brief's table,
    // which lists /api-testing as its only source. One source yields one
    // contextual link, and the acceptance is >=2 — and Postman/Newman in CI is
    // API test automation, so this page is the natural second home for it.
    // Every other orphan already has two sources in the brief.
    "automation-testing-services": [
        "appium-mobile-testing-services",
        "postman-api-testing-services",
        "manual-vs-automation-testing",
    ],
    // PART 9 round — sources for the comparison and tool pages that the
    // orphan audit found on zero incoming body links.
    "appium-mobile-testing-services": ["appium-vs-espresso", "mobile-application-testing"],
    "jmeter-performance-testing-services": ["jmeter-vs-k6", "performance-testing-services"],
    "performance-testing-services": ["jmeter-vs-k6"],
    "qa-documentation-services": ["test-case-estimator"],
    "security-testing": ["dpdp-compliance-testing-services", "blockchain-app-testing-services"],
    "sap-testing-services": ["migration-testing"],
    "etl-testing-services": ["migration-testing"],
};

/**
 * PART 9 round — pages the orphan audit found on zero incoming body links and
 * which are now linked from at least two contextual sources each.
 *
 * Deliberately NOT linked, because a link would be the wrong fix:
 *
 *   /software-qa-testing-services-in-navi-mumbai — is a 308 redirect source,
 *     consolidated into /software-qa-testing-services-in-mumbai. Linking a page
 *     that redirects away just creates a hop.
 *   /author/Amey-Gaikwad, /author/default, /author/jayesh2, /author/Pranav-Patil,
 *   /author/sandeep-maske, /author/shravan-more, /author/sushma, /author/testriq017
 *     — blog posts DO link author pages; these eight are linked from zero posts
 *     because those authors have no published posts. The archives are empty, so
 *     linking them would promote empty pages. They want the same noindex
 *     decision as the thin tag pages.
 *   /cookies-policy — linked from the footer by design; it only looks orphaned
 *     because the audit excludes header/footer chrome.
 *   /blog/demo — publicly reachable and probably should not be. Not a linking
 *     problem.
 */
export const ORPHAN_CONTENT_PAGES: readonly string[] = [
    "appium-vs-espresso",
    "jmeter-vs-k6",
    "manual-vs-automation-testing",
    "verify-certificate",
    "test-case-estimator",
];

/** The 12 orphan pages this map exists to serve, for the guard test. */
export const ORPHAN_SERVICE_PAGES: readonly string[] = [
    "saas-platform-testing-services",
    "dating-app-certification",
    "matrimonial-apps-certification",
    "trading-apps-certification",
    "ad-hoc-testing",
    "postman-api-testing-services",
    "manufacturing-industry-testing-services",
    "azure-testing-services",
    "appium-mobile-testing-services",
    "dpdp-compliance-testing-services",
    "blockchain-app-testing-services",
    "migration-testing",
];

/** Related service slugs to feature on a service page; empty when unmapped. */
export function relatedServicesFor(serviceSlug: string): readonly string[] {
    return RELATED_SERVICES[serviceSlug] ?? [];
}
