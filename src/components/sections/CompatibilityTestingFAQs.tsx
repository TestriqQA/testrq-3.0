"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const CompatibilityTestingFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are compatibility testing services?",
            answer: "Compatibility testing services ensure that a software application or system functions correctly across various operating systems, browsers, hardware configurations, network environments, and devices. This verifies that the application delivers a consistent user experience regardless of the platform it is used on."
        },
        {
            question: "Why is compatibility testing important for software?",
            answer: "It is crucial for preventing poor user experiences, reducing customer churn, and avoiding revenue loss due to application malfunctions. It ensures that software reaches a wider audience, maintains brand reputation, and operates reliably across the diverse technological landscape users employ."
        },
        {
            question: "What are the types of compatibility testing?",
            answer: "Key types include Browser Compatibility Testing, Operating System Compatibility Testing, Mobile Device Compatibility Testing, Hardware Compatibility Testing, Network Compatibility Testing, Backward Compatibility Testing (with older versions), and Forward Compatibility Testing (with newer versions)."
        },
        {
            question: "How to perform compatibility testing for mobile apps?",
            answer: "It involves testing across a wide range of real mobile devices, operating systems (iOS and Android), and versions. This includes checking app functionality, UI responsiveness, performance, and user experience on different screen sizes, resolutions, and network conditions."
        },
        {
            question: "What are the best tools for compatibility testing?",
            answer: "Popular choices include BrowserStack, Sauce Labs, and LambdaTest for cross-browser and cross-device testing. For mobile apps, tools like Appium and dedicated cloud-based mobile device labs are highly effective. Automated tools like Selenium and Cypress are also frequently integrated."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center bg-blue-50 text-brand-blue gap-2 px-4 py-2 rounded-full font-bold text-sm">
                        <FaQuestionCircle />
                        <span>Quick Guide</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Compatibility Testing <span className="text-brand-blue">FAQs</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors duration-300 cursor-pointer"
                            >
                                <h3 className="text-lg font-bold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-brand-blue text-xl" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400 text-xl" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === index && (
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed italic border-l-2 border-brand-blue pl-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 p-10 rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold">Still have questions?</h3>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our Compatibility testing experts are here to help you navigate the chaos of digital diversity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us" className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg">
                                Consult an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompatibilityTestingFAQs;
