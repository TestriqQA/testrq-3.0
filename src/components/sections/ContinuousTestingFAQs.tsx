"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContinuousTestingFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const faqs = [
        {
            question:
                "What is the difference between Continuous Testing and Test Automation?",
            answer:
                "While Test Automation refers to the use of tools to execute tests without human intervention, Continuous Testing is the broader process of executing these automated tests as part of a software delivery pipeline to obtain immediate feedback on business risks. Automation is the tool, while Continuous Testing is the strategy.",
        },
        {
            question: "Why is Continuous Testing essential for DevOps?",
            answer:
                "Continuous Testing is essential because it removes the traditional testing bottleneck. In a DevOps environment, where speed is critical, waiting for a manual testing phase is impossible. Continuous Testing ensures that speed does not compromise quality by providing constant, automated validation.",
        },
        {
            question:
                "What are the key components of a Continuous Testing Service?",
            answer:
                "The foundational pillars include Test Automation, CI/CD Integration, Test Data Management, and Environmental Parity. Together, these components ensure that tests are reliable, repeatable, and provide an accurate reflection of production readiness.",
        },
        {
            question:
                "How does continuous testing improve feedback loops?",
            answer:
                "It provides developers with instant results after every code commit. Instead of waiting days for a QA report, developers know within minutes if their changes have introduced a defect, allowing for immediate remediation and significantly lower technical debt.",
        },
        {
            question:
                "What are the main challenges in implementing continuous testing?",
            answer: (
                <>
                    Common hurdles include cultural resistance to shared quality
                    responsibility, &ldquo;flaky&rdquo; tests that provide inconsistent
                    results, skill gaps in automation, and the high effort required for
                    test maintenance.{" "}
                    <Link
                        href="/contact-us"
                        className="text-brand-blue underline"
                    >
                        Testriq specializes
                    </Link>{" "}
                    in overcoming these challenges through strategic consulting and
                    robust framework implementation.
                </>
            ),
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked{" "}
                        <span className="text-brand-blue">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get answers to common questions about our Continuous Testing
                        services, CI/CD integration, and how we can help accelerate your
                        software delivery pipeline.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
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

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openFAQ === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our Continuous Testing experts are here to help. Get personalized
                            answers about CI/CD integration, pipeline optimization, and how
                            our services can accelerate your releases.
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

export default ContinuousTestingFAQs;
