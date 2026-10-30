// Server Component. Block 9 of the service page template for
// /saas-testing-services — the one service page that had no FAQ section and no
// FAQPage JSON-LD, while the other 62 had both.
//
// SINGLE SOURCE OF TRUTH
// ----------------------
// `SAAS_TESTING_FAQS` is exported and the page feeds the SAME array to
// `createFaqPageSchema`, so the markup cannot describe questions the page does
// not show. That matters: FAQPage schema whose Q&As are not visible on the page
// is a manual-action risk, and the existing pages keep two separate copies of
// their FAQ text (one in the component, one on the page) which can drift apart.
//
// WHERE THE ANSWERS COME FROM
// ---------------------------
// Every claim below is already made in this page's own visible sections — the
// comparison table in "Why SaaS Testing Differs", the "Core SaaS Testing
// Challenges" cards, the "Real-World SaaS Testing Scenarios" list, the tools
// table, the compliance cards and the engagement models. Nothing here asserts
// a price, a turnaround time, a client name or a certification that the page
// does not already state.
//
// Rendered as a plain visible list rather than a JS accordion, deliberately:
// the answers are in the server-rendered HTML with no interaction needed, which
// is what both a crawler and the schema requirement want.
import Link from "next/link";
import React from "react";

export interface SaasTestingFaq {
  question: string;
  answer: string;
}

/** Buyer-phrased questions, answered only from this page's own content. */
export const SAAS_TESTING_FAQS: SaasTestingFaq[] = [
  {
    question: "How is SaaS testing different from traditional software testing?",
    answer:
      "The operational model changes what has to be tested. A traditional release ships one version per customer, while a SaaS release updates every user simultaneously, so a regression reaches the whole base at once. Traditional software keeps isolated databases; SaaS shares infrastructure between tenants, which makes data isolation something to prove rather than assume. Load is variable and spiky rather than fixed, and compliance has to hold across multiple geographies instead of a single environment.",
  },
  {
    question: "How do you test multi-tenant data isolation?",
    answer:
      "Multi-tenant testing validates that customer data stays isolated even though tenants share the same database, application servers and infrastructure. In practice that means proving one tenant cannot read, modify or infer another tenant's records through the UI, the API or direct query paths. Real-world failures in this area have produced data breaches affecting millions of users, which is why isolation is tested explicitly instead of being inferred from the schema design.",
  },
  {
    question: "We deploy daily. How do you stop releases breaking existing functionality?",
    answer:
      "Continuous testing inside the delivery pipeline, with an automated regression suite running on every deployment rather than once per release cycle. Daily deployment multiplies regression risk, and teams trying to keep pace manually typically see 15-20% of deployments cause a production incident. Automating regression and wiring it into CI/CD is what holds that rate down as release frequency rises.",
  },
  {
    question: "Which compliance standards do you test against?",
    answer:
      "HIPAA, PCI-DSS, SOC 2 Type II, GDPR and FedRAMP. Compliance testing is treated as an ongoing requirement integrated into development and testing rather than a one-time audit. SOC 2 Type II in particular is validated over a period of six months or more, so the controls have to hold continuously, not just on the day of assessment.",
  },
  {
    question: "What does subscription billing testing cover?",
    answer:
      "Charge amounts across plan tiers, proration when a customer upgrades or downgrades mid-cycle, refund processing and credit application, failed-payment retry and dunning workflows, and compliance with local tax regulations such as VAT, GST and sales tax. Billing defects cost more than their size suggests: a bug affecting 1% of transactions can translate into thousands of dollars of lost revenue or refunds.",
  },
  {
    question: "Which tools do you use for SaaS testing?",
    answer:
      "Selenium, Cypress and Playwright for browser and UI automation; Postman, REST Assured and Newman for API validation and contract testing; JMeter, LoadRunner, K6 and Gatling for load testing and performance analysis; Burp Suite, OWASP ZAP and Nessus for vulnerability scanning and penetration testing; and Jenkins or GitLab for CI/CD. Tool selection follows your technology stack, your team's expertise and the product's specific requirements.",
  },
  {
    question: "How do you test API rate limiting?",
    answer:
      "By confirming that requests exceeding the limit receive 429 status codes, that clients can determine their remaining quota from response headers, that Retry-After headers tell them when to retry, and that burst traffic does not cause cascading failures. Rate limiting is what prevents one tenant's traffic from degrading service for every other tenant.",
  },
  {
    question: "What engagement models are available for SaaS testing?",
    answer:
      "A dedicated QA team, managed testing services, specialized testing, or automation implementation. A dedicated team embeds full-time QA engineers with your developers, owning testing strategy and execution and scaling as the product grows, which suits complex products or high compliance requirements. Early-stage teams more often take managed testing, which covers the critical paths and scales without adding fixed headcount.",
  },
];

const SaasTestingFAQs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SaaS Testing <span className="text-brand-blue">Questions</span>
          </h2>
          <p className="text-gray-700 text-lg">
            The questions SaaS teams ask us most often, answered from the detail on this page.
          </p>
        </div>

        <dl className="space-y-6">
          {SAAS_TESTING_FAQS.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</dt>
              <dd className="text-gray-700 leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="text-center text-gray-600 text-sm mt-10">
          Something not covered here?{" "}
          <Link href="/contact-us" className="text-brand-blue hover:underline">
            Ask us directly
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SaasTestingFAQs;
