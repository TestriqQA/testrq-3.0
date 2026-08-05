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
