"use client";

import React, { useState } from "react";
import { BOOKING_URL } from "@/lib/booking";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";

const FantasyAppFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is fantasy app certification and why does it matter?",
      answer:
        "Fantasy app certification is a structured validation process to ensure your platform meets industry standards for fair play, security, privacy, and performance. It helps build user trust, ensures regulatory compliance, mitigates fraud risks, and improves app store rankings—especially for real-money and competitive gameplay environments.",
    },
    {
      question: "How long does the fantasy app certification process take?",
      answer:
        "The full process typically takes 12–18 working days. This includes assessment (2–3 days), comprehensive testing (7–10 days), security audit (3–5 days), and certification issuance (1–2 days). Timelines may vary depending on your app’s features, complexity, and current compliance level.",
    },
    {
      question: "What regulations and standards do you certify against?",
      answer:
        "We certify fantasy apps against ISO 27001 (Security), ISO 27701 (Privacy), GDPR, CCPA, OWASP, and SOC 2 standards. We also validate fairness algorithms, KYC compliance, payment integration security, and region-specific data localization policies to meet gaming authority expectations.",
    },
    {
      question: "What types of testing are included in the certification?",
      answer:
        "Certification includes security testing (VAPT, OWASP, API hardening), performance testing (load & stress), gameplay logic validation, API and backend testing, UI/UX evaluation, compliance checks, and fraud prevention audits to ensure platform reliability during live contests.",
    },
    {
      question: "How much does certification for a fantasy app cost?",
      answer:
        "Costs depend on your platform size, compliance scope, and feature set. We offer affordable packages for startups and enterprise-grade plans for real-money gaming apps. Most clients recover the investment within 3–6 months through improved user retention and trust.",
    },
    {
      question: "Do you provide post-certification support?",
      answer:
        "Yes. We provide 24/7 monitoring, periodic audits, recertification, and incident response. Our support includes fair play audits, fraud alert monitoring, regulatory updates, and team training to keep your app compliant and secure long-term.",
    },
    {
      question: "Can you help with compliance in multiple regions?",
      answer:
        "Absolutely. We support cross-jurisdictional compliance including GDPR (EU), CCPA (USA), India’s data rules, and regional fairness laws. Whether you're targeting a global or localized audience, we align your platform to meet legal and ethical standards in all markets.",
    },
    {
      question: "What if issues are found during the certification process?",
      answer:
        "We provide detailed remediation steps and collaborate with your developers to fix issues. Once resolved, we perform retesting to ensure compliance. Our phased approach helps prioritize critical fixes while minimizing launch delays.",
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-brand-blue">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about fantasy app certification,
            testing process, security, and compliance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#25A8E0] focus:ring-opacity-50 rounded-xl cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-brand-blue">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our QA and compliance specialists are ready to help you. Book a
              free session to discuss your fantasy app’s certification needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule Free Consultation
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                  Contact Our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyAppFAQs;
