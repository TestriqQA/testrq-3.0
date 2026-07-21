"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ManualTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is manual testing still important in 2026?",
      answer:
        (
          <>
            AI is rising, but <Link href="/blog/post/the-future-of-manual-testing-adapting-in-an-automated-world" className="text-brand-blue underline">manual testing</Link> remains vital. It handles exploratory work and complex logic. This is where &apos;human-in-the-loop&apos; intuition is vital for finding what scripts miss. It fills the &quot;coverage gaps&quot; that <Link href="/automation-testing-services" className="text-brand-blue underline">automation</Link> cannot reach in complex micro-services architectures.
          </>
        ),
    },
    {
      question: "How does ISO/IEC/IEEE 29119 improve manual testing?",
      answer:
        (<>This international standard provides a structured, risk-based framework. This standard ensures manual testing is never ad-hoc. It follows a repeatable process for planning, design, and reporting. This approach increases visibility for stakeholders and makes your software more reliable.</>),
    },
    {
      question: "Can manual testing fit into a CI/CD pipeline?",
      answer:
        (<>Yes. We use the ISO 29119-2 standard to create repeatable test processes. This allows us to sync manual regression with your fast release cycles. You get high-quality results without losing speed.</>),
    },
    {
      question: "What is the cost of outsourcing manual testing?",
      answer:
        "Outsourcing manual testing is more cost-effective than building an in-house team. It removes the extra costs of tool licensing and specialized training. Plus, it makes it easier to scale during busy development periods.",
    },
    {
      question: "Does Testriq provide manual testing for mobile apps?",
      answer:
        (<>Yes, we offer <Link href="/mobile-application-testing" className="text-brand-blue underline">manual testing for both iOS and Android</Link>. We use real devices from our global farm to ensure your app works across all OS versions and screen sizes.</>),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our manual testing services,
            processes, and how we can help ensure your software delivers
            exceptional quality and user experiences.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-label="faq_question"
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-brand-blue text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-xl" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openFAQ === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our manual testing experts are here to help. Get personalized
              answers to your specific questions and learn how our services can
              benefit your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingFAQs;
