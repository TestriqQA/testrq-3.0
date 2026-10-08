"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What are the benefits of Managed QA Services?",
        answer: "Managed QA Services allow organizations to outsource their entire quality function to experts. Our approach cuts overhead and gives you access to advanced test automation. You get comprehensive testing without the costs of internal hiring."
    },
    {
        question: "How does Testriq ensure security in Software Testing Services?",
        answer: "We integrate Security at the heart of the SDLC through DevSecOps Integration. This includes risk-based testing, Pentesting, and regular Security Audits to ensure compliance with global standards like SOC2 and GDPR."
    },
    {
        question: "Why is ISO/IEC/IEEE 29119 important for QA?",
        answer: "ISO/IEC/IEEE 29119 is the international standard for software testing. Our approach uses a standard language and process for risk-based testing. This ensures all reports and bug tracking meet the highest global standards."
    },
    {
        question: "Do you offer Mobile App QA Testing?",
        answer: "Yes. We provide mobile QA for both iOS and Android. Our testing includes cross-browser checks and UX validation to ensure your global rollout is seamless across all devices."
    },
    {
        question: "How do you handle Generative AI Testing?",
        answer: "We specialize in Generative AI testing to protect your brand. We ensure your AI is reliable and secure. Our team audits agents for inaccurate data, prevents prompt injections, and guarantees model fairness."
    }
];

const HomeFAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-[theme(color.background.gray)]">
            <div className="max-w-4xl mx-auto px-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mb-4">
                        <HelpCircle className="text-[theme(color.brand.blue)]" size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions <span className="text-[theme(color.brand.blue)]">(People Also Ask)</span>
                    </h2>
                    <p className="text-gray-600">Everything you need to know about our global QA and software testing services.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sky-50 transition-colors cursor-pointer"
                            >
                                <span className="font-bold text-gray-900 md:text-lg">{faq.question}</span>
                                {openIndex === i ? <ChevronUp className="text-[theme(color.brand.blue)]" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            {openIndex === i && (
                                <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-fade-in">
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

export default HomeFAQSection;
