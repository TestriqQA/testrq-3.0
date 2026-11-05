"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Single source for both this accordion and the page's FAQPage JSON-LD.
// These used to be two hand-maintained copies and they HAD drifted — the
// wording of the ISO 29119 answer differed between what visitors read here
// and what was sent to Google. See the note in faqs.tsx. Add questions
// there, not here.
import { manualTestingFaqs as faqs } from "@/app/(services)/manual-testing-services/faqs";

const ManualTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
              {/* `aria-label="faq_question"` was removed from this button on
                  2026-11-04. aria-label REPLACES an element's accessible name,
                  so every one of these buttons announced itself to a screen
                  reader as "faq_question" and the actual question — the only
                  thing distinguishing twelve identical controls — was thrown
                  away. The <h3> text below is the correct accessible name, so
                  the button now simply has no label override.

                  aria-expanded / aria-controls added so the control also
                  reports whether its answer is open, and says which region it
                  opens. */}
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`manual-testing-faq-answer-${index}`}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
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

              {/* Was a `max-h-96` / `max-h-0` opacity transition. The
                  animation looked fine but capped every answer at 24rem and
                  silently CLIPPED anything longer, with `overflow-hidden`
                  hiding the evidence. The original five answers all fit; the
                  buyer questions added on 2026-11-04 do not — the service list
                  alone is over twice that height on a phone.

                  `hidden` has no height ceiling, so an answer cannot be cut
                  off by its own length, and it is the same pattern
                  UsabilityTestingFAQs uses. The content stays server-rendered
                  either way, so the FAQ text remains crawlable whether or not
                  a visitor opens the accordion. */}
              <div
                id={`manual-testing-faq-answer-${index}`}
                hidden={openFAQ !== index}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answerJsx ?? faq.answer}
                  </p>
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
