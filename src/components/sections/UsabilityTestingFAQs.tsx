"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const UsabilityTestingFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the benefits of professional usability testing services?",
            answer: "Professional usability testing services significantly enhance user satisfaction, reduce development costs by identifying issues early, improve conversion rates, and strengthen brand loyalty. It ensures your product is intuitive, efficient, and enjoyable for its target audience."
        },
        {
            question: "How much does a usability audit cost for a mobile app?",
            answer: "The cost is customized based on scope and complexity. Testriq offers tailored quotes following an initial ROI-focused consultation to ensure you get the most value for your specific mobile platform needs."
        },
        {
            question: "Why is usability testing important for software development?",
            answer: "It validates design decisions through real-user eyes, uncovering critical point points that developers might miss. This leads to minimized rework, faster market adoption, and ultimately higher business success."
        },
        {
            question: "How to choose the best usability testing company?",
            answer: "Look for a combination of ISTQB certified expertise, global reach, and a methodology that integrates AI-driven insights. Testriq combines 15+ years of experience with predictive analytics to deliver unparalleled UX value."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
                        <FaQuestionCircle /> Expert Guidance
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Usability Testing <span className="text-brand-blue">FAQ</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-8 text-left flex items-center justify-between gap-6 group cursor-pointer"
                            >
                                <span className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-snug">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-brand-blue text-white' : 'group-hover:bg-brand-blue/10'}`}>
                                    <FaChevronDown className="text-sm" />
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-8 pb-8 text-gray-600 leading-relaxed pt-0 text-lg">
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

export default UsabilityTestingFAQs;
