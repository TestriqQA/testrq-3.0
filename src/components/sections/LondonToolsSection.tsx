// Server Component.
//
// Added Oct 2026. The page it sits on answers "what do you test" and "how do we
// start" but said nothing about what the testing is actually done with — the
// question every buyer comparing QA suppliers asks third. The city entry this
// page replaced had a section titled "Tools & Frameworks Used for London" whose
// entire content was the strings "15+", "24/7" and "500K+"; this is that
// section built to mean something.
//
// Every tool named here is already named elsewhere on testriq.com (the service
// pages' tools-and-frameworks sections and /technology-stack). Nothing is
// aspirational — do not add a tool here before it is true of the delivery team.
//
// The groups deliberately mirror the five rows of LondonUKRequirementsSection,
// so "what we test" and "what we test it with" line up, and each group carries
// the internal link to the service page that owns that capability.
import Link from "next/link";
import React from "react";

interface ToolGroup {
  area: string;
  tools: string[];
  /** Service page that owns this capability. */
  href: string;
  linkLabel: string;
}

const GROUPS: ToolGroup[] = [
  {
    area: "API and Open Banking flows",
    tools: ["Postman", "REST Assured", "Charles Proxy"],
    href: "/api-testing",
    linkLabel: "API testing",
  },
  {
    area: "Mobile, including app-to-app authentication redirects",
    tools: ["Appium", "BrowserStack"],
    href: "/mobile-application-testing",
    linkLabel: "mobile application testing",
  },
  {
    area: "Web regression and end-to-end suites",
    tools: ["Playwright", "Selenium", "Cypress"],
    href: "/automation-testing-services",
    linkLabel: "automation testing",
  },
  {
    area: "Load and performance",
    tools: ["JMeter", "k6"],
    href: "/performance-testing-services",
    linkLabel: "performance testing",
  },
  {
    area: "Accessibility against WCAG 2.2 AA",
    tools: ["axe", "WAVE", "Lighthouse", "NVDA and JAWS for manual passes"],
    href: "/accessibility-testing-services",
    linkLabel: "accessibility testing",
  },
  {
    area: "Security",
    tools: ["OWASP ZAP", "Burp Suite"],
    href: "/security-testing",
    linkLabel: "security testing",
  },
  {
    area: "Pipelines and reporting",
    tools: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "Jira", "Xray", "TestRail", "Allure"],
    href: "/continuous-testing-services-cicd-pipeline",
    linkLabel: "continuous testing",
  },
];

const LondonToolsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What we test <span className="text-brand-blue">with</span>
        </h2>
        <p className="text-gray-700 max-w-4xl mb-10">
          We work in your repository and your pipeline rather than a parallel one
          of ours, so the suites stay useful to your team after an engagement
          ends. Where you already have a tool in place, we use it.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div
              key={group.area}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {group.area}
              </h3>
              <ul className="flex flex-wrap gap-2 mb-4 flex-1">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="text-sm text-gray-700 bg-white border border-gray-200 rounded-md px-2.5 py-1"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <Link
                href={group.href}
                className="text-sm text-brand-blue hover:underline font-medium"
              >
                More on {group.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonToolsSection;
