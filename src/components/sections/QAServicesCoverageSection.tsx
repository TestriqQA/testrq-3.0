// Server Component. The nine areas below are the coverage a buyer searching
// "software QA services" is checking for. Four of them — UAT, accessibility,
// test strategy and shift-left — appear on competitor QA pages (TestingXperts,
// Propel Tech, Zoonou, KiwiQA) and appeared nowhere on testriq.com's nearest
// equivalent, /qa-outsourcing-services, which is an engagement-model page.
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const areas = [
  {
    name: "Functional & Regression Testing",
    href: "/functional-testing-services",
    body:
      "Every user-facing path exercised against the acceptance criteria, then a regression suite that grows with the product so last month's fix does not quietly break next month's release.",
  },
  {
    name: "Test Automation Frameworks",
    href: "/automation-testing-services",
    body:
      "Frameworks built in Selenium, Playwright, Cypress or Appium and wired into Jenkins, GitHub Actions, GitLab CI or Azure DevOps. Written to be maintained by your team, not just by ours.",
  },
  {
    name: "Performance & Load Testing",
    href: "/performance-testing-services",
    body:
      "JMeter and k6 load, stress, soak and spike runs against realistic traffic, with the bottleneck traced to a query, a service or an instance size rather than reported as a number.",
  },
  {
    name: "Security Testing",
    href: "/security-testing",
    body:
      "OWASP-aligned application security testing, authentication and authorisation checks, and dependency review, reported with the evidence your customers' security teams ask for.",
  },
  {
    name: "Accessibility Testing",
    href: "/accessibility-testing-services",
    body:
      "WCAG 2.1 AA audits combining automated scans with keyboard and screen-reader passes, because the issues that lose you a public-sector contract are rarely the ones a scanner finds.",
  },
  {
    name: "Mobile & Cross-Platform Testing",
    href: "/mobile-application-testing",
    body:
      "Real-device coverage across iOS and Android versions, screen sizes and network conditions — not just emulators, which miss exactly the defects your users report.",
  },
  {
    name: "API & Integration Testing",
    href: "/api-testing",
    body:
      "REST, GraphQL and SOAP contract, schema and error-path testing, including the third-party integrations that fail quietly in production and loudly at month end.",
  },
  {
    name: "UAT Support & Release Sign-Off",
    href: "/user-acceptance-testing",
    body:
      "We run the UAT cycle with your business stakeholders — scripts, sessions, defect triage — and give you a documented go/no-go position instead of an inbox full of screenshots.",
  },
  {
    name: "Test Strategy & Shift-Left Consulting",
    href: "/shift-left-testing",
    body:
      "Where to put the effort: what to automate, what to leave manual, what to test before code is written. Often the engagement that saves the most, because it stops work rather than adding it.",
  },
];

const QAServicesCoverageSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-brand-blue">QA Services</span> Cover
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Nine areas, delivered individually or as a full quality function. Most
            engagements start with two or three and widen once the first release
            ships clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.name}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href={area.href} className="hover:text-brand-blue transition-colors">
                  {area.name}
                </Link>
              </h3>
              <p className="text-gray-700 text-sm flex-1">{area.body}</p>
              <Link
                href={area.href}
                aria-label={`Read more about ${area.name}`}
                className="mt-4 inline-flex items-center text-brand-blue font-semibold text-sm hover:text-blue-400 transition-colors"
              >
                <FaCheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>How we run it</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAServicesCoverageSection;
