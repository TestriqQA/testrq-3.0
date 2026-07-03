"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        q: "What is User Acceptance Testing (UAT) and why is it important?",
        a: "User Acceptance Testing (UAT) is the final phase of software testing where actual end-users and business stakeholders validate that the software meets their business requirements. It's important because it identifies business misalignment and user experience issues that technical testing often misses, ensuring the software actually delivers business value."
    },
    {
        q: "What are the key steps in the UAT process?",
        a: "The UAT process typically follows 6 key steps: Planning (scope & criteria), Test Case Development (business scenarios), Team Selection & Training (facilitating users), Test Execution (collecting feedback), Issue Resolution (prioritizing bypasses/fixes), and Sign-Off (deployment readiness confirmation)."
    },
    {
        q: "How does UAT differ from functional testing?",
        a: "Functional testing checks if the software works according to technical specifications (the mechanics). UAT validates if the software actually meets user needs and enables business workflows (the value). Functional is done by QA pros; UAT is done by end-users."
    },
    {
        q: "Who should be involved in User Acceptance Testing?",
        a: "Key participants include End-Users (provide feedback), Business Analysts (facilitate), Product Owners (strategic decisions), Operations Teams (readiness), and specialized UAT service providers like Testriq who manage the entire lifecycle."
    }
];

const UATFAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-brand-blue font-black tracking-[4px] uppercase text-[10px] mb-4">
                        <FaQuestionCircle /> FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        User Acceptance Testing <span className="text-brand-blue italic">Quick Answers</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-brand-blue">
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer"
                            >
                                <span className="text-lg lg:text-xl font-bold text-gray-900 pr-8">{faq.q}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === i ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'}`}>
                                    {activeIndex === i ? <FaMinus /> : <FaPlus />}
                                </div>
                            </button>
                            {activeIndex === i && (
                                <div className="px-6 lg:px-8 pb-8 text-gray-600 leading-relaxed font-medium">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UATFAQs;
