"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

// Single source for both this accordion and the page's FAQPage JSON-LD.
// These used to be two hand-maintained copies and they had drifted — see the
// note in faqs.ts. Add questions there, not here.
import { usabilityTestingFaqs as faqs } from "@/app/(services)/usability-testing-services/faqs";

const UsabilityTestingFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

                            <div className="px-8 pb-8 text-gray-600 leading-relaxed pt-0 text-lg" hidden={openIndex !== index}>
                                    {faq.answer}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsabilityTestingFAQs;
