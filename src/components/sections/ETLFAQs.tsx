"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ETLFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How to perform ETL testing step by step?",
      answer:
        "To perform ETL testing, start by analyzing the source-to-target mapping and validating source data. Next, test the transformation logic in the staging area before finally reconciling the data in the target system. Our methodology follows this ISO 8000 aligned flow to ensure 100% data integrity.",
    },
    {
      question: "What are the best automated ETL testing tools in 2026?",
      answer:
        "Different ETL tools excel at different tasks. In 2026, Query-Surge dominated high-volume data warehouse testing, while iceDQ specialized in real-time, in-memory validation. For visual test case building, Datagaps ETL Validator remains the top choice. These tools reduce manual effort by up to 80% and are essential for modern DataOps.",
    },
    {
      question: "What is the difference between ETL testing and database testing?",
      answer: (
        <>
          The difference between <Link href="/data-analysis-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">ETL testing</Link> and database testing lies in the scope. Database testing verifies static storage elements like tables and stored procedures. ETL testing ensures data stays accurate as it transforms and flows from multiple sources into a central warehouse.
        </>
      ),
    },
    {
      question: "What technical challenges define ETL testing within massive-scale data environments?",
      answer:
        "Testing high-volume data pipelines presents challenges across three core dimensions: volume, variety, and velocity. To validate billions of real-time records, teams must deploy scalable ETL frameworks. This automation eliminates the \"sampling errors\" that often compromise manual data re-conciliation.",
    },
    {
      question: "Why is an ETL testing checklist for data migration important?",
      answer:
        "An ETL testing checklist provides complete migration coverage. It systematically tracks every phase, from initial metadata validation to final production support. It serves as a guide for ensuring data quality assurance and regulatory compliance during large-scale enterprise transitions.",
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
            Get answers to common questions about our ETL testing services and
            methodologies.
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

export default ETLFAQs;
