"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is QA outsourcing?",
    answer:
      "QA outsourcing means delegating your software testing to a specialized external partner instead of hiring an in-house QA team. You get certified testers, tools, and proven processes on demand — at lower cost and with the flexibility to scale.",
  },
  {
    question: "How much does QA outsourcing cost?",
    answer:
      "Cost depends on your engagement model (dedicated team, managed, or project-based), the number of testers, and the scope of testing. Outsourcing is typically far cheaper than building an in-house team because you avoid hiring, training, tooling, and infrastructure costs. Contact us for a tailored quote.",
  },
  {
    question: "What are the benefits of outsourcing software testing?",
    answer:
      "Lower costs, faster releases, access to ISTQB-certified experts, the ability to scale up or down, independent and unbiased testing, and freeing your developers to focus on building the product.",
  },
  {
    question:
      "Dedicated team, managed testing, or project-based — which should I choose?",
    answer:
      "Choose a dedicated team for ongoing development with a stable roadmap; managed testing if you want us to own the whole QA function against quality goals; and project-based if you need flexible testing for a specific release. Not sure? We'll recommend the right fit in a free consultation.",
  },
  {
    question: "Is my data safe with an outsourced QA partner?",
    answer:
      "Yes. Testriq follows ISO 27001-aligned information-security practices, signs NDAs, and controls access to your systems and test data. Data handling is documented and auditable.",
  },
  {
    question: "How do you manage an outsourced QA team?",
    answer:
      "Your dedicated testers integrate with your tools (Jira, Slack, CI/CD), join your stand-ups if you wish, and report through transparent dashboards — so you always have visibility and control, as if they were in-house.",
  },
  {
    question: "Can you work in our time zone?",
    answer:
      "Yes. We deliver across time zones (US, UK, EU, UAE, India, and beyond) and align working hours to your schedule for real-time collaboration or follow-the-sun testing.",
  },
];

const QAOutsourcingFAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently <span className="text-brand-blue">Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-brand-blue flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-brand-blue flex-shrink-0 ml-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-100 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAOutsourcingFAQs;
