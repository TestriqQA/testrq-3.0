"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FAQSchema from "@/components/seo/FAQSchema";

const EcommerceFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the difference between B2B and B2C e-commerce testing?",
      answer: "The difference between B2B and B2C e-commerce testing lies in the complexity of the workflow. B2B testing focuses on bulk ordering, role-based permissions, and dynamic pricing contracts. B2C testing focuses on private user experience (UX), fast checkout flows, and mobile responsiveness."
    },
    {
      question: "How to test payment gateway integration in a sandbox environment?",
      answer: "Conduct payment integration testing in a sandbox environment using authorized test credentials from Stripe, PayPal, or other gateway providers. Validate successful transactions, declined cards, and partial refunds without processing real funds. Our e-commerce testing services ensure that the communication between your store and the gateway's API is error-free."
    },
    {
      question: "Why is PCI DSS compliance important for my online store?",
      answer: "PCI DSS compliance is a global security standard required for any business that processes credit card data. Failure to comply can lead to massive fines and the loss of your ability to process payments. Our website testing services include security audits that help you remain audit-ready."
    },
    {
      question: "What are the best practices for testing mobile shopping applications?",
      answer: "Best practices for testing mobile shopping applications include private 'thumb-friendly' UI, testing under variable network conditions (3G/5G), and validating push notification performance. We utilize a real device cloud to ensure your app works on the latest iOS and Android versions."
    },
    {
      question: "How does performance testing prevent cart abandonment?",
      answer: "Studies show a 1-second delay results in a 7% drop in conversions. Performance testing identifies database and server bottlenecks before they impact your customers. This ensures a fast checkout experience, even during massive traffic spikes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-white gap-2 bg-gradient-to-r from-brand-blue to-sky-600 bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            E-Commerce Testing
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">
              Questions Answered
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our e-commerce
            testing services, QA processes, and what to expect from our{" "}
            <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
              cross-platform
            </Link>{" "}
            testing and security validation team.
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
                    <FaChevronUp className="w-5 h-5 text-brand-blue" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
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
      </div>
    </section>
  );
};

export default EcommerceFAQSection;
