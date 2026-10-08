"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const TDMFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What is test data management and why is it important?",
            answer: "Test Data Management (TDM) is the process of planning, creating, securing, and delivering the data required for software testing. It is important because it ensures that testing is realistic, secure, and compliant with privacy laws, while reducing the time and cost associated with manual data preparation.",
        },
        {
            question: "How to ensure GDPR compliance in test data management?",
            answer: "GDPR compliance is ensured through techniques like data masking, pseudonymization, and synthetic data generation. These methods remove personally identifiable information (PII) from test environments, ensuring that no real user data is exposed during the QA process.",
        },
        {
            question: "What is the difference between data masking and synthetic data?",
            answer: "Data masking involves taking real production data and obfuscating sensitive elements to make it secure for testing. Synthetic data, on the other hand, is artificially generated from scratch using algorithms or AI to mirror the characteristics of real data without containing any actual information from real users.",
        },
        {
            question: "How to automate test data provisioning in DevOps?",
            answer: "Automating test data provisioning involves integrating TDM tools with CI/CD pipelines. This allows for the automatic creation, masking, and delivery of fresh test datasets whenever a new build is triggered, enabling true self-service QA and faster release cycles.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="text-[theme(color.brand.blue)]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Answers to common questions about our Test Data Management services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-blue-600">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-slate-50">
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

export default TDMFAQs;
