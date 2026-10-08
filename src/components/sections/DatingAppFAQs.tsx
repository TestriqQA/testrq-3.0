"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DatingAppFAQs = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does the dating app certification process involve?",
      answer:
        "We review your app against our six key pillars of trust and safety, including security, privacy, user protection, content integrity, compliance, and operational transparency. Certification is granted only when all six pillars are fully met.",
    },
    {
      question: "Do you help apps improve if they don't meet the six pillars?",
      answer:
        "Yes. If your app falls short in any area, we provide clear, actionable recommendations so you can make the necessary changes before reapplying for certification.",
    },
    {
      question: "Is this certification recognized outside my country?",
      answer:
        (<>Yes. Our six-pillar framework is based on globally accepted <Link href="/blog/post/web-application-automation-testing-tools-frameworks-best-practices">best practices</Link>, making it relevant for dating apps operating in multiple regions.</>),
    },
    {
      question: "What happens after my app is certified?",
      answer:
        "Once certified, you’ll receive official documentation and the certification badge to display on your app and marketing materials. We also provide periodic reviews to ensure ongoing compliance.",
    },
    {
      question: "Do you work with all types of dating apps?",
      answer:
        "We work with both established platforms and startups, as long as they are committed to meeting all six pillars of trust and safety.",
    },
    {
      question: "What exactly are the six pillars of dating apps?",
      answer:
        (<>The six pillars include: (1) <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">Data Privacy & Security</Link>, (2) User Verification, (3) Content Moderation, (4) Fraud Prevention, (5) Compliance with Relevant Laws, and (6) Transparency & Accountability.</>),
    },
    {
      question: "Do you guarantee app success after certification?",
      answer:
        "Our role is to verify that your app meets the six pillars and issue certification. While this can strengthen user trust, we do not guarantee business performance.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Learn how we verify dating apps against our six pillars and issue
            certification
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === index ? null : index)
                }
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedFAQ === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppFAQs;
