"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const faqs = [
  {
    question: "What is LLMQA, in one sentence?",
    answer:
      "LLMQA is a validation platform that tests any LLM-powered chatbot across 9 dimensions and issues signed certifications your customers can verify.",
  },
  {
    question: "Do I need to write my own evals?",
    answer:
      "No. Starter suites cover accuracy, hallucination, safety, persona, and red-team out of the box. Extend them with your own golden cases as you go.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Yes — Helm charts and Terraform modules ship on Enterprise. Self-serve plans (Trial, Pay as you go, Volume) run on our managed cloud.",
  },
  {
    question: "Does LLMQA train on my data?",
    answer:
      "No. Your prompts and completions are used only to execute the eval and produce results visible to your workspace.",
  },
];

export default function LLMQAFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            Common questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            The questions every team asks before they{" "}
            <span className="text-[theme(color.brand.blue)]">sign up.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center font-semibold text-gray-900 bg-white hover:bg-gray-50 transition-colors text-left"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-[theme(color.brand.blue)] ml-4 shrink-0">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 py-4 border-t border-gray-100 text-gray-700">
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
}
