"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const BankingFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the importance of Banking API testing?",
      answer: "Banking APIs are the backbone of modern fintech and open banking. Testing them is critical to ensure secure data exchange, validating functional logic, security (OAuth/Encryption), and performance under high concurrency."
    },
    {
      question: "How does PCI DSS compliance affect software testing?",
      answer: "PCI DSS Compliance Testing requires strict security standards for any software handling credit card data. Non-compliance results in fines up to $100,000 per month and loss of processing ability."
    },
    {
      question: "Why is User Acceptance Testing (UAT) critical in banking?",
      answer: "UAT ensures software works in real-world business conditions, preventing costly errors in transaction logic and user experience. This reduces customer churn and direct financial loss."
    },
    {
      question: "What are the benefits of Automated Regression Testing in BFSI?",
      answer: "Automated Regression Testing enables faster CI/CD updates with an ROI of over 300% for mid-sized banks. It reduces manual testing hours and prevents critical outages by ensuring new code doesn't break system functions."
    },
    {
      question: "How do you handle legacy system migration testing?",
      answer: "We use Middleware and Integration Testing alongside heavy regression suites to secure your migration. We synchronize new digital front-ends with legacy COBOL mainframes to ensure seamless data flow."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Banking & Financial
            <span className="block text-[theme(color.brand.blue)]">
              Questions Answered
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our BFSI testing
            services, API security, and global compliance standards.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our banking testing experts are here to help. Get personalized
            answers to your specific questions and learn how our services can
            benefit your financial institution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"} className="w-fit">
              <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-98 transition-all duration-300">
                Schedule Expert Consultation
              </button>
            </Link>
            <Link href="/contact-us" className="w-fit">
              <button className="border-2 cursor-pointer border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300">
                Contact Support Team
              </button>
            </Link>
          </div>
        </div>

        {/* Knowledge Base CTA */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Explore Our Knowledge Base
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Access our comprehensive library of banking testing resources, best
            practices, compliance guides, and industry insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us" className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Browse Knowledge Base
            </Link>
            {/* <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Testing Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingFAQSection;
