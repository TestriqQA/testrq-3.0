"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ArchitectureFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What is an application architecture inspection?",
            answer: "An application architecture inspection is a formal, technical review of a software system's design and structure. It aims to identify potential risks, scalability bottlenecks, security flaws, and technical debt, ensuring the system is aligned with business goals and industry best practices.",
        },
        {
            question: "Why is a software architecture audit important for enterprises?",
            answer: "For enterprises, an architecture audit is critical to prevent 'architectural rot,' reduce long-term maintenance costs, and ensure that the system can scale to meet growing business demands. It provides an objective assessment of the system's health and its readiness for future innovations like AI integration.",
        },
        {
            question: "How to identify technical debt in legacy applications?",
            answer: "Technical debt is identified by analyzing code complexity, frequency of bugs in specific modules, difficulty in implementing new features, and deviations from modern architectural patterns. Tools like static code analyzers and architectural dependency mapping are often used during this process.",
        },
        {
            question: "What are the benefits of a cloud-native architecture review?",
            answer: "A cloud-native review ensures that your application fully leverages the benefits of the cloud, such as dynamic scaling, self-healing, and cost-optimization. It validates that your architecture is resilient to infrastructure failures and can be deployed rapidly through automated pipelines.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Architecture <span className="text-brand-blue">Expertise</span> FAQ
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Essential insights into our Application Architecture Inspection process.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${activeIndex === index
                                    ? "border-brand-blue/30 bg-brand-blue/10 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-brand-blue">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
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

export default ArchitectureFAQs;
