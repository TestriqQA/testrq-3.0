"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RoboticFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the difference between RPA and traditional test automation?",
      answer: (
        <>
          The differences between{" "}
          <span className="text-brand-blue font-medium">RPA</span>{" "}
          and traditional test automation lie in their integration level. RPA
          copies human actions directly through the user interface, making it
          perfect for legacy systems. Traditional{" "}
          <Link
            href="/automation-testing-services"
            className="text-brand-blue underline font-medium"
          >
            automation
          </Link>{" "}
          integrates directly into backend APIs and scripts for long-term
          stability in the SDLC.
        </>
      ),
    },
    {
      question: "How do you implement robotic testing for legacy enterprise systems?",
      answer: (
        <>
          When implementing robotic testing for legacy enterprise systems, we
          use RPA bots to interact with the presentation layer. We provide
          complete workflow automation and{" "}
          <Link
            href="/api-testing"
            className="text-brand-blue underline font-medium"
          >
            data validation
          </Link>{" "}
          for your systems. This approach avoids the high cost and risk of
          changing your backend code.
        </>
      ),
    },
    {
      question: "What are the benefits of ISO 10218-1:2026 for my business?",
      answer: (
        <>
          The updated{" "}
          <span className="text-brand-blue font-medium">ISO 10218-1:2026</span>{" "}
          standard makes functional safety requirements explicit rather than
          implied. This process prepares your robots for global export and
          reduces the risk of expensive recalls and safety incidents.
        </>
      ),
    },
    {
      question: "Can robotic testing validate data from end to end?",
      answer: (
        <>
          Yes. To validate data from end to end, we configure bots to extract
          information from emails, ERPs, and spreadsheets, then verify that the
          data remains consistent across all your software systems. Our{" "}
          <Link
            href="/etl-testing-services"
            className="text-brand-blue underline font-medium"
          >
            data validation
          </Link>{" "}
          protocols help ensure data integrity.
        </>
      ),
    },
    {
      question: 'What is "Physical AI" in 2026 robotics?',
      answer: (
        <>
          Physical AI refers to the trend where robots use{" "}
          <Link
            href="/blog/post/ai-testing-learning-guide"
            className="text-brand-blue underline font-medium"
          >
            Generative AI
          </Link>{" "}
          and simulation to &quot;train&quot; themselves in virtual
          environments. Fixed code is replaced by learned experience, making
          robots much more adaptable in changing, real-world environments.
        </>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our robotic testing services
            and methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticFAQs;
