/**
 * Single source of truth for breadcrumb leaf labels on service and solution
 * pages.
 *
 * Why this exists: the visible breadcrumb and the `BreadcrumbList` JSON-LD were
 * authored independently on every page, and 22 of 61 routes had drifted apart
 * (e.g. `/desktop-application-testing-services` displayed "Desktop Application
 * Testing" while its markup claimed "Desktop Application Service"). Google's
 * structured data guidelines require markup to reflect what the user actually
 * sees, so every label below is the **visible** one, and both the rendered
 * breadcrumb and the JSON-LD now read from here.
 *
 * Adding a page: add its slug here, then pass the slug to
 * `createCanonicalBreadcrumb` and to the `<Breadcrumb>` component. Keep the
 * label identical to the page's visible breadcrumb leaf.
 */
export const BREADCRUMB_LABELS: Record<string, string> = {
  // --- services ---
  "accessibility-testing-services":                 "Accessibility Testing",
  "ad-hoc-testing":                                 "Ad-Hoc Testing",
  "agile-testing-services":                         "Agile Testing Services",
  "ai-application-testing":                         "AI Application Testing",
  "api-testing":                                    "API Testing",
  "appium-mobile-testing-services":                 "Appium Mobile Testing Services",
  "application-architecture-inspection-services":   "Application Architecture Inspection Services",
  "automation-testing-services":                    "Automation Testing",
  "azure-testing-services":                         "Azure Testing Services",
  "blockchain-app-testing-services":                "Blockchain App Testing",
  "compatibility-testing-services":                 "Compatibility Testing",
  "continuous-testing-services-cicd-pipeline":      "Continuous Testing",
  "corporate-qa-training":                          "Corporate QA Training",
  "cyber-security-testing-services":                "Cyber Security Testing Services",
  "cypress-testing-services":                       "Cypress Testing Services",
  "data-analysis-services":                         "Data Analysis Services",
  "dating-app-certification":                       "Dating Apps Certification",
  "desktop-application-testing-services":           "Desktop Application Testing",
  "embedded-testing-services":                      "Embedded Testing Services",
  "etl-testing-services":                           "ETL Testing",
  "exploratory-testing":                            "Exploratory Testing",
  "functional-testing-services":                    "Functional Testing",
  "iot-device-testing-services":                    "IoT Device Testing",
  "iso-iec-42001-compliance-testing-services":      "ISO/IEC 42001 Compliance Testing",
  "jmeter-performance-testing-services":            "JMeter Performance Testing Services",
  "launchfast-qa":                                  "LaunchFast QA",
  "managed-testing-services":                       "Managed Testing",
  "manual-testing-services":                        "Manual Testing",
  "matrimonial-apps-certification":                 "Matrimonial Apps Certification",
  "microservices-testing":                          "Microservices Testing",
  "migration-testing":                              "Migration Testing",
  "mobile-application-testing":                     "Mobile Application Testing",
  "performance-testing-services":                   "Performance Testing",
  "performance-testing-services/latency-testing":   "Latency Testing",
  "playwright-testing-services":                    "Playwright Testing Services",
  "postman-api-testing-services":                   "Postman API Testing Services",
  "qa-documentation-services":                      "QA Documentation",
  "qa-outsourcing-services":                        "QA Outsourcing",
  "regression-testing":                             "Regression Testing",
  "robotics-testing-services":                      "Robotic Testing",
  "saas-testing-services":                          "SaaS Testing",
  "sap-testing-services":                           "SAP Testing",
  "security-testing":                               "Security Testing",
  "selenium-testing-services":                      "Selenium Testing Services",
  "shift-left-testing":                             "Shift-Left Testing",
  "shopping-apps-certification":                    "Shopping Apps Certification",
  "smart-device-testing-services":                  "Smart Device Testing",
  "test-data-management-services":                  "Test Data Management Services",
  "timezone-testing-services":                      "Testing in Your Time Zone",
  "trading-apps-certification":                     "Trading Apps Certification",
  "usability-testing-services":                     "Usability Testing Services",
  "user-acceptance-testing":                        "User Acceptance Testing",
  "web-application-testing-services":               "Web Application Testing",

  // --- solutions ---
  "banking-finance-industry-testing-services":   "Banking & Finance",
  "e-commerce-testing-services":                 "E-Commerce Testing",
  "e-learning-testing-services":                 "E-Learning Testing",
  "gaming-app-testing-services":                 "Gaming App Testing",
  "healthcare-testing-services":                 "Healthcare Testing",
  "iot-appliances-and-apps-testing-services":    "IoT Appliance Testing",
  "manufacturing-industry-testing-services":     "Manufacturing & Industry 4.0 Testing Services",
  "saas-platform-testing-services":              "SaaS Platform Testing Services",
  "telecommunications-testing-services":         "Telecom Testing",
};

/**
 * Resolve a breadcrumb leaf label for a pathname.
 *
 * @param pathname Public pathname, with or without a leading slash.
 * @param fallback Label to use when the slug is not in `BREADCRUMB_LABELS`
 *                 (blog, case studies, and other trees outside this map).
 */
export function getBreadcrumbLabel(pathname: string, fallback: string): string;
export function getBreadcrumbLabel(pathname: string, fallback?: string): string | undefined;
export function getBreadcrumbLabel(pathname: string, fallback?: string): string | undefined {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  return BREADCRUMB_LABELS[slug] ?? fallback;
}

/**
 * Conceptual parent of a page, keyed slug → parent slug.
 *
 * Route groups are stripped from testriq URLs, so every service page is a flat
 * top-level path and the URL carries no hierarchy at all. Google derives
 * hierarchy from breadcrumbs and internal links, not from folder depth — so
 * this map is how a child page declares its parent without any URL moving.
 *
 * The six tool pages are the reason it exists. They sit at the top level, are
 * absent from the header nav, and receive no links from the homepage, from
 * their parent service pages or from any of the 343 blog posts — roughly eight
 * inbound links between them, all from comparison pages. In GSC they are
 * effectively invisible (`selenium` 397 impressions / 1 click). Declaring the
 * parent puts each one inside an established topic instead of floating alone.
 *
 * Only add an entry where the parent genuinely *contains* the child. Comparison
 * pages (`X-vs-Y`) deliberately stay top-level: their intent is bottom-of-funnel
 * evaluation, not a subdivision of a service.
 */
export const BREADCRUMB_PARENTS: Record<string, string> = {
  // tool pages → the service that delivers them
  "selenium-testing-services":                     "automation-testing-services",
  "cypress-testing-services":                      "automation-testing-services",
  "playwright-testing-services":                   "automation-testing-services",
  "appium-mobile-testing-services":                "mobile-application-testing",
  "jmeter-performance-testing-services":           "performance-testing-services",
  "postman-api-testing-services":                  "api-testing",
  // already nested in the URL, listed here so its trail comes from one source
  "performance-testing-services/latency-testing":  "performance-testing-services",
};

export interface BreadcrumbCrumb {
  /** Display label. */
  label: string;
  /** Pathname with a leading slash. Absent on the terminal crumb. */
  href?: string;
}

/**
 * Build the full breadcrumb trail for a pathname, excluding "Home".
 *
 * Returns one crumb when the page has no parent (the existing behaviour for
 * ~55 service pages), or two when `BREADCRUMB_PARENTS` declares one. The
 * terminal crumb carries no `href` so callers can mark it `aria-current`.
 *
 * Both the visible breadcrumb and the `BreadcrumbList` JSON-LD read from here,
 * which is what keeps them from drifting apart again — 22 of 61 routes had
 * drifted before the labels were centralised.
 *
 * @param pathname Public pathname, with or without a leading slash.
 * @param fallback Leaf label for slugs outside `BREADCRUMB_LABELS`.
 */
export function getBreadcrumbTrail(pathname: string, fallback?: string): BreadcrumbCrumb[] {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const trail: BreadcrumbCrumb[] = [];

  const parentSlug = BREADCRUMB_PARENTS[slug];
  if (parentSlug) {
    const parentLabel = BREADCRUMB_LABELS[parentSlug];
    // A parent with no label would render a blank crumb — skip it rather than
    // emit a broken trail.
    if (parentLabel) trail.push({ label: parentLabel, href: `/${parentSlug}` });
  }

  trail.push({ label: BREADCRUMB_LABELS[slug] ?? fallback ?? "" });
  return trail;
}
