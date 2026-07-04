"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What are embedded testing services?",
        answer: "Embedded testing services involve the comprehensive verification and validation of embedded software and hardware systems. This ensures that embedded devices, from IoT gadgets to automotive control units, function reliably, securely, and according to their specifications in real-world environments."
    },
    {
        question: "Why is embedded software testing important?",
        answer: "Embedded software testing is critical because embedded systems often operate in safety-critical applications (e.g., medical devices, automotive). Thorough testing ensures reliability, prevents costly failures, enhances security against vulnerabilities, and guarantees compliance with industry-specific regulations and standards, ultimately safeguarding users and investments."
    },
    {
        question: "What is the difference between HIL, SIL, and MIL testing?",
        answer: "Model-in-the-Loop (MIL) testing verifies the control algorithm using a mathematical model of the system. Software-in-the-Loop (SIL) testing integrates the actual production code with a simulated environment. Hardware-in-the-Loop (HIL) testing connects the real embedded controller to a simulated plant model, enabling real-time interaction and comprehensive validation under realistic conditions."
    },
    {
        question: "How to choose an embedded testing service provider?",
        answer: "When selecting an embedded testing service provider, consider their expertise in your specific industry (e.g., automotive, medical), their proficiency with relevant standards (e.g., ISO 26262, DO-178C), their capabilities in HIL, SIL, and MIL testing, and their experience with test automation frameworks for embedded systems."
    },
    {
        question: "What are the key challenges in embedded systems testing?",
        answer: "Key challenges include the tight coupling of hardware and software, real-time constraints, limited debugging access, resource constraints (memory, processing power), complex toolchains, ensuring compliance with safety and security standards, and replicating real-world environmental conditions for validation."
    }
];

const EmbeddedFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        Your Quick Guide to <br />
                        <span className="text-brand-blue">Embedded Testing</span>
                    </h2>
                    <p className="text-gray-600">Frequently asked questions about our embedded validation services.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "bg-white border-brand-blue/30 shadow-md"
                                    : "bg-white/50 border-gray-200 hover:border-brand-blue/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-brand-blue" : "text-gray-900"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-brand-blue text-white" : "bg-gray-100 text-gray-400"
                                    }`}>
                                    {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                </div>
                            </button>

                            <div className={`transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                <div className="p-6 pt-0 border-t border-gray-50 px-6">
                                    <p className="text-gray-600 leading-relaxed pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmbeddedFAQs;
