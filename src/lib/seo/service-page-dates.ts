// Review dates for the service and solution pages (DEV-18).
//
// WHAT THIS IS, AND WHAT IT IS NOT
// -------------------------------
// This is the date a human last reviewed the page's content. It is maintained
// by hand on purpose. The alternatives were considered and rejected:
//
//   * the build date — would claim every page was updated on every deploy,
//     which is the fabricated-freshness signal search engines discount.
//   * the file's git commit date — accurate about the FILE, misleading about
//     the CONTENT: a one-line code change would bump the date without a word
//     of the page changing, and the shallow clone CI uses cannot reliably give
//     per-file history anyway.
//
// /cyber-security-testing-services already carried this pattern before DEV-18,
// as "Last updated: <time>" next to its named reviewer, so hand-maintained is
// also the existing house convention here.
//
// HOW TO KEEP IT HONEST
// ---------------------
// Update a page's entry when its CONTENT is reviewed or revised. Do not touch
// it for a refactor, a dependency bump or a styling change. A date that only
// ever moves when the words move is worth something; one that tracks commits
// is noise.
//
// SEED VALUE
// ----------
// Every page below is seeded 2026-10-28, which is accurate rather than
// convenient: on that date every service page gained the "who you'll work
// with" and engagement-model sections, and most had their title, H1 and meta
// description rewritten.
//
// /cyber-security-testing-services is deliberately absent — it keeps the
// reviewer-attributed date in its own hero, which says who reviewed it as well
// as when. Changing that date here would assert a re-review that did not
// happen.

/** Slug -> ISO date (YYYY-MM-DD) the page's content was last reviewed. */
export const SERVICE_PAGE_REVIEWED: Readonly<Record<string, string>> = {
    "accessibility-testing-services": "2026-10-28",
    "ad-hoc-testing": "2026-10-28",
    "agile-testing-services": "2026-10-28",
    "ai-application-testing": "2026-10-28",
    "api-testing": "2026-10-28",
    "appium-mobile-testing-services": "2026-10-28",
    "application-architecture-inspection-services": "2026-10-28",
    "automation-testing-services": "2026-10-28",
    "azure-testing-services": "2026-10-28",
    "banking-finance-industry-testing-services": "2026-10-28",
    "blockchain-app-testing-services": "2026-10-28",
    "compatibility-testing-services": "2026-10-28",
    "continuous-testing-services-cicd-pipeline": "2026-10-28",
    "corporate-qa-training": "2026-10-28",
    "cypress-testing-services": "2026-10-28",
    "data-analysis-services": "2026-10-28",
    "dating-app-certification": "2026-10-28",
    "desktop-application-testing-services": "2026-10-28",
    "dpdp-compliance-testing-services": "2026-10-28",
    "e-commerce-testing-services": "2026-10-28",
    "e-learning-testing-services": "2026-10-28",
    "embedded-testing-services": "2026-10-28",
    "etl-testing-services": "2026-10-28",
    "exploratory-testing": "2026-10-28",
    "functional-testing-services": "2026-10-28",
    "gaming-app-testing-services": "2026-10-28",
    "healthcare-testing-services": "2026-10-28",
    "iot-appliances-and-apps-testing-services": "2026-10-28",
    "iot-device-testing-services": "2026-10-28",
    "iso-iec-42001-compliance-testing-services": "2026-10-28",
    "jmeter-performance-testing-services": "2026-10-28",
    "launchfast-qa": "2026-10-28",
    "managed-testing-services": "2026-10-28",
    "manual-testing-services": "2026-10-28",
    "manufacturing-industry-testing-services": "2026-10-28",
    "matrimonial-apps-certification": "2026-10-28",
    "microservices-testing": "2026-10-28",
    "migration-testing": "2026-10-28",
    "mobile-application-testing": "2026-10-28",
    "performance-testing-services": "2026-10-28",
    "playwright-testing-services": "2026-10-28",
    "postman-api-testing-services": "2026-10-28",
    "qa-documentation-services": "2026-10-28",
    "qa-outsourcing-services": "2026-10-28",
    "quality-assurance-services": "2026-10-28",
    "regression-testing": "2026-10-28",
    "robotics-testing-services": "2026-10-28",
    "saas-platform-testing-services": "2026-10-28",
    "saas-testing-services": "2026-10-28",
    "sap-testing-services": "2026-10-28",
    "security-testing": "2026-10-28",
    "selenium-testing-services": "2026-10-28",
    "shift-left-testing": "2026-10-28",
    "shopping-apps-certification": "2026-10-28",
    "smart-device-testing-services": "2026-10-28",
    "telecommunications-testing-services": "2026-10-28",
    "test-data-management-services": "2026-10-28",
    "timezone-testing-services": "2026-10-28",
    "trading-apps-certification": "2026-10-28",
    "usability-testing-services": "2026-10-28",
    "user-acceptance-testing": "2026-10-28",
    "web-application-testing-services": "2026-10-28",
};

/** The review date for a page, or null when the page has no entry. */
export function reviewedOn(slug: string): string | null {
    return SERVICE_PAGE_REVIEWED[slug] ?? null;
}

/** "2026-10-28" -> "October 28, 2026", for the visible line. */
export function formatReviewDate(iso: string): string {
    const [y, m, d] = iso.split("-").map(Number);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    return `${months[m - 1]} ${d}, ${y}`;
}
