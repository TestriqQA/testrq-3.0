"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const MicroservicesFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is microservices testing and why is it complex?",
            answer:
                "Microservices testing is the comprehensive validation of independently deployable services in a distributed system architecture. It is complex because a single transaction might cross 10+ services, multiple databases, and various network protocols, making simple unit tests insufficient for system-wide reliability.",
        },
        {
            question: "How does contract testing work in a microservices architecture?",
            answer:
                (
                    <div className="space-y-3">
                        <p>Contract testing ensures that service consumers and providers agree on the structure of their APIs. It follows a simple flow:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Consumer side:</strong> Defines expectations (contracts) for the provider.</li>
                            <li><strong>Provider side:</strong> Validates its implementation against those contracts.</li>
                            <li><strong>Prevention:</strong> If a provider changes a field, the contract test fails in CI/CD before breaking the consumer.</li>
                        </ul>
                    </div>
                ),
        },
        {
            question: "Is it possible to test microservices without a dedicated stage environment?",
            answer:
                "Yes, through Service Virtualization (mocking dependencies with WireMock) and Contract Testing. These techniques allow developers to validate services in isolation or thin environments, drastically reducing the need for heavy, shared staging clusters.",
        },
        {
            question: "What are the benefits of chaos engineering for distributed systems?",
            answer:
                (
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Resilience Validation:</strong> Ensures the system survives pod failures and network spikes.</li>
                        <li><strong>Incident Preparedness:</strong> Trains teams to respond to failures before they happen in production.</li>
                        <li><strong>Confidence:</strong> Provides proof that &apos;Circuit Breakers&apos; and &apos;Retries&apos; actually work under load.</li>
                    </ul>
                ),
        },
        {
            question: "How do you handle data consistency testing across services?",
            answer:
                "We implement Saga pattern validation and eventual consistency audits. We use specialized test data management to ensure that distributed transactions settle correctly across multiple database-per-service instances.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaQuestionCircle className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-widest">
                            Common Questions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-brand-blue">Distributed Systems</span> FAQ
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Find answers to technical questions about microservices QA and resilience engineering.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-bold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                {openFAQ === index ? (
                                    <FaChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
                                ) : (
                                    <FaChevronDown className="w-5 h-5 text-brand-blue shrink-0" />
                                )}
                            </button>
                            {openFAQ === index && (
                                <div className="px-6 py-5 bg-blue-50/30 border-t border-gray-100">
                                    <div className="text-gray-700 text-sm leading-relaxed">{faq.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 font-medium">Have a more technical architecture question?</p>
                    <Link href="/contact-us" className="px-6 py-3 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Ask Our Experts
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesFAQs;
