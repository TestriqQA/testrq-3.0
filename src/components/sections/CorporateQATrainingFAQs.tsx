"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

const CorporateQATrainingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the best way to set up a QA training program for your organization?",
      answer: "Setting up a successful program starts with a technical workforce development audit. First, identify specific gaps in your CI/CD pipeline integration. Then, choose a provider that offers customized QA bootcamps instead of generic courses."
    },
    {
      question: "How do you measure the ROI of corporate software QA training?",
      answer: "We measure ROI through 'Defect Detection Efficiency' and 'Time-to-Market' metrics. By following ISO 29119 standards, companies often reduce post-release bugs by 30-60%. This results in significantly lower maintenance costs."
    },
    {
      question: "Do you offer ISTQB certification for teams?",
      answer: "Yes. Our QA courses prepare teams for ISTQB Foundation and Advanced certifications. This creates a 'common language' of testing across your entire organization."
    },
    {
      question: "Is online corporate QA training effective for remote teams?",
      answer: "Absolutely. We use interactive virtual labs and real-time collaboration tools for our remote QA training. This ensures our online sessions are just as rigorous and hands-on as our on-site workshops."
    },
    {
      question: "What is the difference between Manual vs. Automation testing training?",
      answer: "Manual testing training focuses on exploratory techniques, UX, and human-centric edge cases. Our training focuses on building scalable test automation frameworks. We then help you integrate them into your CI/CD pipeline for rapid feedback."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaQuestionCircle />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Got Questions About Our
            <span className="bg-clip-text text-brand-blue">
              {" "}
              Training Programs?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our corporate QA training
            services, programs, and support offerings.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
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

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our training experts are here to help you find the perfect program
              for your team. Get personalized recommendations and detailed
              information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={BOOKING_URL} target={"_blank"}>
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="border border-gray-300 cursor-pointer text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Contact Training Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingFAQs;
