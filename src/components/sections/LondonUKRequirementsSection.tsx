// Server Component. The five UK regimes UK buyers actually screen vendors on.
//
// Rendered as a real <table> rather than stacked cards so the Area / failure /
// coverage relationship survives both screen readers and extraction into an AI
// answer. On narrow screens the table scrolls horizontally inside its wrapper
// instead of being duplicated as a second mobile-only markup block — duplicating
// it would put every cell on the page twice for a crawler.
//
// The scope disclaimer under the table is load-bearing, not boilerplate: the
// page names FCA, NHS and UK GDPR, and Testriq tests against requirements the
// client's own compliance lead defines. It does not certify compliance or give
// legal advice. Do not soften that line into a capability claim.
import Link from "next/link";
import React from "react";

const ROWS: { area: string; breaks: string; tested: string }[] = [
  {
    area: "UK GDPR and PECR",
    breaks:
      "Cookie banners that set non-essential cookies before consent; staging databases holding real customer data; data-export and deletion requests that miss one system",
    tested:
      "Consent states across browsers and devices, scans of test environments for personal data, end-to-end data-subject request flows",
  },
  {
    area: "Open Banking and strong customer authentication",
    breaks:
      "Step-up authentication failing on mobile app-to-app redirects; expired tokens; unexpected error codes from bank sandboxes",
    tested:
      "API behaviour against the specification you provide, negative and timeout scenarios, the full redirect journey on mobile",
  },
  {
    area: "NHS-connected software",
    breaks:
      "Audit logs with gaps; integration messages (HL7 or FHIR) rejected or mis-mapped; clinical-safety hazards with no matching test",
    tested:
      "Message handling, access and audit-trail checks, test cases traceable to your hazard log",
  },
  {
    area: "Accessibility (Equality Act 2010, WCAG 2.2 AA)",
    breaks:
      "Keyboard traps, invisible focus indicators, unlabelled controls, targets too small on touch screens",
    tested: "Automated scans plus manual keyboard and screen-reader passes",
  },
  {
    area: "UK commerce and locale",
    breaks:
      "VAT and GBP rounding errors, postcode validation that rejects real addresses, delivery cut-offs on bank holidays",
    tested: "Price and tax calculations, address and date formats, holiday calendars",
  },
];

const RELATED: { label: string; href: string }[] = [
  { label: "banking and finance testing", href: "/banking-finance-industry-testing-services" },
  { label: "healthcare testing", href: "/healthcare-testing-services" },
  { label: "accessibility testing", href: "/accessibility-testing-services" },
  { label: "security testing", href: "/security-testing" },
];

const LondonUKRequirementsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          UK requirements we build into{" "}
          <span className="text-brand-blue">test plans</span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[46rem] text-left border-collapse">
            <caption className="sr-only">
              UK regulatory areas, where UK releases usually break, and what Testriq tests
            </caption>
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200 align-top w-1/5">
                  Area
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200 align-top w-2/5">
                  Where UK releases usually break
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200 align-top w-2/5">
                  What we test
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.area} className="even:bg-gray-50/60 align-top">
                  <th scope="row" className="px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200 align-top">
                    {row.area}
                  </th>
                  <td className="px-5 py-4 text-sm text-gray-700 border-b border-gray-200 align-top">
                    {row.breaks}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700 border-b border-gray-200 align-top">
                    {row.tested}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-8 max-w-4xl">
          We test against the requirements your compliance, clinical-safety or
          data-protection lead defines, and we hand back evidence they can review.
          We do not give legal advice or certify compliance.
        </p>

        <p className="text-gray-700 mt-4 max-w-4xl">
          Related services:{" "}
          {RELATED.map((item, i) => (
            <React.Fragment key={item.href}>
              <Link href={item.href} className="text-brand-blue hover:underline">
                {item.label}
              </Link>
              {i < RELATED.length - 1 ? ", " : "."}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default LondonUKRequirementsSection;
