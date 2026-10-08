"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SapFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the main challenges of performance testing in SAP environments?",
            answer: "SAP performance testing presents several unique challenges. Key obstacles include simulating realistic Fiori tile launches and managing overlapping batch jobs. Aligned with ISO 29119, we recommend mirroring production environments to avoid 'blind spots'."
        },
        {
            question: "How do I find sap testing services for s 4hana migration projects?",
            answer: "Searching for SAP S/4HANA migration services? Prioritize vendors who combine migration testing with ISO 29119 compliance. You should also ensure they use automated data validation tools for a smooth transition from legacy ECC."
        },
        {
            question: "Can you automate SAP Fiori applications?",
            answer: "Yes. Effective SAP Fiori automation requires the right tools and strategy. You can use model-based tools like Tosca or script-based frameworks like Selenium. Both methods need specialized logic to handle Fiori’s dynamic UI elements."
        },
        {
            question: "What are the best SAP testing tools for ECC to S/4HANA migration?",
            answer: "Top SAP testing tools for S/4HANA migrations serve specific roles. Tricentis Tosca leads in automation, while SAP Solution Manager (SolMan) handles lifecycle management. For performance validation, LoadRunner remains the industry standard."
        },
        {
            question: "Is SAP test automation cost-effective for B2B?",
            answer: "Cost-effective SAP test automation helps B2B organizations reduce manual effort by up to 80% and accelerates release cycles by 40%. This significantly lowers the Total Cost of Ownership (TCO) for your SAP landscape."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-brand-blue">Frequently</span> Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get answers to common questions about our SAP testing services and
                        methodologies.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                            >
                                <h3 className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openFAQ === index ? (
                                        <FaChevronUp className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <FaChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === index && (
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SapFAQs;
