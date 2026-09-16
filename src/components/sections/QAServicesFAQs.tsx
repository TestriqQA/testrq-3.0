// Server Component. Questions mirror qaServicesFAQSchema in
// src/components/seo/StructuredData.tsx — keep the two in sync, or the FAQPage
// markup will advertise answers the page does not show.
import Link from "next/link";
import React from "react";

export const qaServicesFaqs = [
  {
    q: "What is the difference between QA services and software testing?",
    a: "Testing is the act of finding defects. QA is the wider job of preventing them — test strategy, process, coverage decisions and release criteria, with testing as the part you can see. In practice most teams ask for testing and need some of both.",
  },
  {
    q: "Do you replace our QA team or work alongside it?",
    a: "Either. Some clients have no QA function and we become it. More often there is a small internal team and we take the load they cannot reach — regression, performance, security, or a release crunch — while they stay close to the product.",
  },
  {
    q: "How quickly can you start?",
    a: "Discovery usually starts within a week of scope being agreed, and the first test cycle inside two to three weeks. The slow part is almost never us; it is environment access and test data.",
  },
  {
    q: "Do you only do automation?",
    a: "No, and we will tell you when automation is the wrong answer. A test that changes every sprint costs more to automate than to run by hand. We automate regression coverage once it has stabilised and keep exploratory and UAT work manual.",
  },
  {
    q: "Which tools do you work in?",
    a: "Selenium, Playwright, Cypress and Appium for automation; JMeter and k6 for performance; Postman for API work; and your existing Jira, Git and CI setup. We fit into your toolchain rather than asking you to adopt ours.",
  },
  {
    q: "Can you sign an NDA and work under our security requirements?",
    a: "Yes. We work under NDA as standard, and we are ISO 9001 and ISO 27001 certified. For teams with GDPR or sector-specific obligations we can scope access so that production personal data never leaves your environment.",
  },
];

const QAServicesFAQs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Frequently Asked <span className="text-brand-blue">Questions</span>
        </h2>

        <dl className="space-y-6">
          {qaServicesFaqs.map((item) => (
            <div key={item.q} className="bg-white p-6 rounded-xl border border-gray-200">
              <dt className="text-lg font-semibold text-gray-900 mb-2">{item.q}</dt>
              <dd className="text-gray-700">{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-5">
            Still deciding what you actually need? Tell us what is breaking and a QA
            engineer will answer &mdash; not a sales form.
          </p>
          <Link
            href="/contact-us"
            title="Contact Testriq about QA services"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Talk to a QA Engineer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QAServicesFAQs;
