"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FunctionalFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What are functional testing services?",
            answer: "Functional testing services verify that a software system or application behaves according to its specified functional requirements and meets intended business needs. These services validate the system's features, capabilities, user interactions, and data manipulation to ensure it performs as expected in real-world scenarios."
        },
        {
            question: "Why is functional testing important for software?",
            answer: "Functional testing is crucial for software because it identifies defects early in the development cycle, validates that the application fulfills user requirements, and ensures changes do not break existing functionality. It improves system reliability, enhances user experience, and helps ensure regulatory compliance."
        },
        {
            question: "What is the difference between functional and non-functional testing?",
            answer: "Functional testing validates what the system does (behavior e.g., login, search). Non-functional testing measures how the system performs (e.g., speed, security, scalability). While functional testing checks actions against requirements, non-functional testing focuses on site attributes like performance and load capacity."
        },
        {
            question: "How to choose a functional testing service provider?",
            answer: "Consider their expertise in your industry, approach to test automation (Selenium, Appium, etc.), cross-platform compatibility, and ability to integrate with your existing development workflows. Look for providers offering flexible scripting, custom reporting, and strong CI/CD integration capabilities."
        },
        {
            question: "What are the key types of functional testing?",
            answer: "Key types include Unit Testing, Integration Testing, System Testing, User Acceptance Testing (UAT), Regression Testing, Smoke Testing, Sanity Testing, Black Box Testing, and White Box Testing. Each serves a unique purpose in the QA lifecycle to ensure comprehensive validation."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="text-brand-blue">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get answers to common questions about our functional testing services,
                        processes, and how we can help ensure your software delivers
                        exceptional quality and user experiences.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                aria-label="faq_question"
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeIndex === idx ? "bg-brand-blue text-white rotate-180" : "bg-gray-200 text-gray-500"}`}>
                                    <FaChevronDown className="text-xs" />
                                </div>
                            </button>

                            {activeIndex === idx && (
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our functional testing experts are here to help. Get personalized
                            answers to your specific questions and learn how our services can
                            benefit your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us">
                                <button className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300">
                                    Schedule Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalFAQs;
