"use client";

// FAQ accordion for /dpdp-compliance-testing-services. Copy lives in
// ./dpdpFaqData so this and the page's FAQPage JSON-LD cannot drift apart —
// see the note in that file.
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { dpdpFaqs } from "./dpdpFaqData";

const DPDPFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {dpdpFaqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 text-brand-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DPDPFAQs;
