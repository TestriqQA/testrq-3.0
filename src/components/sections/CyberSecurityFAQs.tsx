"use client";

import React, { useState } from "react";
import { FaChevronDown, FaShieldAlt } from "react-icons/fa";

const CyberSecurityFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // SEO handoff (Sept 2026) — PART E. Two entries were removed from this list:
    // "What is the difference between a vulnerability assessment and a
    // penetration test?" and "How much does a professional penetration test cost
    // in 2026?". Both are penetration-testing intent and are now answered on
    // /security-testing, which owns that query set; leaving them here would
    // re-create the cannibalization PART E exists to fix. Removing the cost
    // entry also drops a "2026" time anchor that was baked into this page's
    // FAQPage JSON-LD.
    const faqs = [
        {
            question: "How often should a company perform a security audit for compliance?",
            answer: "The frequency depends on several factors, including industry regulations, the sensitivity of data handled, and the rate of changes to your IT environment. For highly regulated industries (e.g., finance, healthcare), annual or bi-annual audits are often mandatory. For others, a comprehensive audit at least once a year, coupled with continuous monitoring and targeted testing after significant system changes, is recommended."
        },
        {
            question: "How does security testing fit into the DevSecOps lifecycle?",
            answer: "In a DevSecOps model, security testing is integrated throughout the entire software development lifecycle, rather than being a separate, late-stage activity. This means security checks, vulnerability scans, and penetration tests are performed continuously from the design phase through development, testing, and deployment. This 'shift-left' approach helps identify and remediate security flaws early."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
                        <FaShieldAlt /> Q&A
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Frequently Asked <span className="text-brand-blue">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                            >
                                <span className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <FaChevronDown className="text-sm" />
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
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

export default CyberSecurityFAQs;
