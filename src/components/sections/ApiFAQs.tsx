"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ApiFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is API testing in software testing?",
      answer:
        "API testing involves verifying that the communication between different software systems (Application Programming Interfaces) is secure, reliable, and performs as expected. Unlike UI testing, it focuses on the business logic layer.",
    },
    {
      question: "What are the primary API testing techniques?",
      answer:
        (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Unit Testing:</strong> Validating individual endpoints.</li>
            <li><strong>Integration Testing:</strong> Checking how multiple APIs work together.</li>
            <li><strong><Link href="/security-testing" className="hover:underline">Security Testing</Link>:</strong> Ensuring identity and access rights are robust.</li>
            <li><strong>Fuzz Testing:</strong> Sending unexpected or random data to find crashes.</li>
          </ul>
        ),
    },
    {
      question: "Can you provide an API testing checklist?",
      answer:
        (
          <div className="space-y-3">
            <p>A professional API testing checklist should include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verify HTTP status codes (200, 201, 400, 401, 404, 500).</li>
              <li>Validate JSON/XML schema and data types.</li>
              <li>Test for negative scenarios (invalid inputs).</li>
              <li>Check response headers and performance latency.</li>
            </ul>
            <p className="mt-2 italic">Our team validates JWT and OAuth2 tokens to ensure strict access control across your systems.</p>
          </div>
        ),
    },
    {
      question: "What are common API testing interview questions for testers?",
      answer:
        (
          <ul className="list-disc pl-5 space-y-2">
            <li>How do you test a REST API without any documentation?</li>
            <li>Technical Comparison: SOAP vs. REST API Architectures?</li>
            <li>How do you handle dynamic data in automated API testing?</li>
            <li>Explain the importance of Contract Testing in micro-services.</li>
          </ul>
        ),
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
            <span className="text-sm">
              ● Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">Frequently</span>{" "}
            Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our API testing services and
            processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center cursor-pointer"
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
      </div>
    </section>
  );
};

export default ApiFAQs;
