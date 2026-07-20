"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBrain, FaChevronDown, FaChevronUp } from "react-icons/fa";

const AIFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between traditional testing and AI testing?",
      answer: (
        <>
          <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Traditional software quality assurance</Link> relies on fixed, predictable logic. Conversely, machine learning testing evaluates variable outcomes, requiring statistical validation to ensure reasoning remains safe and accurate.
        </>
      ),
    },
    {
      question: "How does the EU AI Act affect AI testing services?",
      answer:
        "The EU AI Act (2026) mandates strict tests for high-risk AI. Companies must now prove their AI is safe and record their impact checks to stay compliant. Our services provide the necessary \"Declaration of Conformity\" and technical documentation for EU market entry.",
    },
    {
      question: "Why is AI model validation necessary for Gen-AI?",
      answer: (
        <>
          AI models remain vulnerable to <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">prompt injection</Link> and data errors. We use AI model validation and Red-Teaming to find these weak spots. We simulate attacks to stop hackers from stealing your data or breaking your safety rules.
        </>
      ),
    },
    {
      question: "What is the NIST AI RMF?",
      answer:
        "The NIST AI RMF is a set of US rules for managing AI risks. Companies use it to prove their AI is fair, safe, and easy to explain. It helps build trust with users and clients.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">Frequently</span>{" "}
            Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our AI testing services and
            methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-[theme(color.brand.blue)]" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom AI CTA */}
        <div className="text-center pt-8">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <FaBrain className="w-6 h-6 mr-2" />
                Ready to Achieve AI Excellence?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Let our AI testing experts help you achieve the same level of
                accuracy and reliability. Get started with a comprehensive AI
                model assessment today.
              </p>
              <Link
                href="/contact-us"
                title="Start Your AI Success Story – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Start Your AI Success Story
              </Link>
            </div>

            {/* AI Neural Network Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {/* Neural nodes */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-4 right-12 w-1.5 h-1.5 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-12 left-16 w-3 h-3 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping"
                style={{ animationDelay: "2.5s" }}
              ></div>

              {/* Neural connections */}
              <div className="absolute top-10 left-10 w-12 h-px bg-white transform rotate-45 animate-pulse"></div>
              <div
                className="absolute bottom-14 right-14 w-8 h-px bg-white transform -rotate-45 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/3 w-16 h-px bg-white transform rotate-12 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFAQs;
