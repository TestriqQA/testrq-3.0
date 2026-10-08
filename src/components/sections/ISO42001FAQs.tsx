"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const ISO42001FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is ISO/IEC 42001:2023 and who needs it?",
      answer:
        "ISO/IEC 42001:2023 is the first international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organizations that develop, provide, or use AI-based products and services. Any organization seeking to demonstrate responsible AI governance — whether in healthcare, finance, automotive, or technology — can benefit from this certification. It is increasingly expected by regulators, enterprise clients, and partners.",
    },
    {
      question:
        "How does ISO/IEC 42001 relate to the EU AI Act and NIST AI RMF?",
      answer:
        "ISO/IEC 42001:2023 serves as a management system standard that can help organizations demonstrate compliance with multiple regulatory frameworks. The EU AI Act (effective 2025-2026) requires AI system providers to implement risk management, transparency, and governance measures — all of which align with ISO 42001 requirements. Similarly, the NIST AI Risk Management Framework (RMF) shares common objectives. Achieving ISO 42001 certification positions your organization to meet these regulatory requirements efficiently.",
    },
    {
      question:
        "What is the difference between ISO 42001 and ISO 27001?",
      answer:
        "While ISO 27001 focuses on Information Security Management Systems (ISMS), ISO 42001 specifically addresses AI Management Systems (AIMS). ISO 27001 covers data security, access controls, and information protection. ISO 42001 extends beyond security to cover AI-specific concerns like bias, fairness, explainability, ethical use, societal impact, and AI lifecycle management. Many organizations implement both standards in an integrated management system.",
    },
    {
      question:
        "How long does it take to achieve ISO/IEC 42001 certification?",
      answer:
        "The timeline depends on your organization's current AI maturity level. Typically, the journey from initial gap assessment to certification readiness takes 3-6 months. Organizations with existing management systems (like ISO 27001 or ISO 9001) may accelerate this timeline. Testriq's structured 6-phase approach is designed to minimize delays and ensure first-pass certification success.",
    },
    {
      question:
        "What are the Annex A controls in ISO/IEC 42001:2023?",
      answer:
        "Annex A of ISO/IEC 42001:2023 contains 38 controls organized across multiple domains including AI policy, AI impact assessment, data management for AI, AI system lifecycle, and third-party/supplier management. These controls provide specific implementation requirements that complement the main clauses (4-10) of the standard. Our testing covers every control with evidence-based validation.",
    },
    {
      question:
        "Can Testriq help with both compliance testing and certification preparation?",
      answer:
        "Yes. Testriq provides end-to-end support — from initial gap analysis and risk assessment through testing execution, remediation guidance, and pre-certification audit simulation. While we do not issue the certification itself (that is done by accredited certification bodies), we ensure your organization is fully prepared to pass the certification audit on the first attempt. Our 98% first-pass certification rate speaks to the effectiveness of our approach.",
    },
    {
      question:
        "What industries benefit most from ISO 42001 compliance?",
      answer:
        "Any industry deploying AI systems benefits from ISO 42001 certification, but it is especially critical for healthcare (clinical AI, diagnostic tools), financial services (credit scoring, fraud detection), automotive (ADAS, autonomous driving), government (public sector AI), and enterprise SaaS (AI-powered features). Regulatory pressure and client expectations are driving rapid adoption across these sectors.",
    },
    {
      question:
        "Does Testriq provide ongoing compliance monitoring after certification?",
      answer:
        "Absolutely. ISO 42001 is not a one-time certification — it requires continual improvement and surveillance audits. Testriq provides post-certification services including periodic compliance re-assessments, model drift monitoring, regulatory update alerts (tracking changes in EU AI Act, NIST AI RMF, etc.), and annual surveillance test support to ensure your AIMS remains effective and compliant.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-md">
            <span className="text-sm font-bold uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ISO/IEC 42001:2023 compliance
            testing and how Testriq helps you achieve AI governance excellence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${
                openFAQ === index
                  ? "border-emerald-200 bg-emerald-50 shadow-lg"
                  : "border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md"
              }`}
            >
              <button
                className="w-full px-8 py-6 text-left transition-colors flex justify-between items-center group cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-black text-lg transition-colors ${
                    openFAQ === index ? "text-emerald-900" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-all ${
                    openFAQ === index
                      ? "bg-emerald-600 text-white rotate-180"
                      : "bg-white text-emerald-600 shadow-sm"
                  }`}
                >
                  <FaChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8">
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20">
          <div className="bg-emerald-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden text-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-teal-950 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">
                Still Have Questions About AI Compliance?
              </h3>
              <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Our AI governance specialists are ready to discuss your specific
                compliance requirements and provide a personalized assessment.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-900 font-black rounded-2xl hover:bg-emerald-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                Talk to a Compliance Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001FAQs;
