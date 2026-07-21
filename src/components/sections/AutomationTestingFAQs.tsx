"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AutomationTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the difference between Manual and Automation testing in 2026?",
      answer:
        (<>By 2026, the line is clear: Automation testing handles repetitive, data-heavy regression and cross-browser suites, while <Link href="/manual-testing-services" className="text-brand-blue underline">manual experts</Link> focus on UX, exploratory testing, and complex edge cases that require human intuition.</>),
    },
    {
      question: "Why is ISO 29119-5:2024 important for my business?",
      answer:
        (<> <Link href="/qa-documentation-services" className="text-brand-blue underline">ISO 29119-5</Link> is the international standard for test automation. Adherence ensures your QA process is globally recognized, scalable, and follows a structured framework that reduces long-term maintenance costs.</>),
    },
    {
      question: "How do you calculate automation ROI for micro-services?",
      answer:
        "We measure ROI by tracking the reduction in code-to-release time and the decrease in defect leakage. For micro-services, we specifically focus on how automation reduces the complexity of integration and data-flow validation.",
    },
    {
      question: "Can you integrate automation with our existing CI/CD pipelines?",
      answer:
        (<>Absolutely. Our engineers are experts in Jenkins, GitLab CI, Azure DevOps, and GitHub Actions. We implement a &apos;Shift-Left&apos; approach, ensuring that every code commit triggers automated smoke and <Link href="/regression-testing" className="text-brand-blue underline">regression tests</Link>.</>),
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
            Get answers to common questions about our Automation testing
            services, processes, and how we can help ensure your software
            delivers exceptional quality and performance.
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

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our Automation testing experts are here to help. Get personalized
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

export default AutomationTestingFAQs;
