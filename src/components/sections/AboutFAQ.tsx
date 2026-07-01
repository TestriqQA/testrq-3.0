"use client";

interface FAQ {
    question: string;
    answer: string | string[];
}

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

const AboutFAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs: FAQ[] = [
        {
            question: "What makes Testriq a trusted QA partner with over 15 years of experience?",
            answer: ["Testriq is a trusted QA partner with 15+ years of delivering software quality assurance, serving startups and enterprises globally. Our certified QA engineers combine manual testing and test automation services using advanced frameworks tailored to your business needs.",
                "We have delivered large-scale test execution across SaaS, Fintech, and Ecommerce, ensuring reduced bugs and faster releases for our clients.",
                "Our structured QA processes improve product stability and performance across platforms and devices, enhancing user trust.",
                "We offer transparent reporting with measurable results, providing clear insights at every stage of the testing lifecycle."
            ]
        },
        {
            question: "Which industries does Testriq serve with its software testing services?",
            answer: ["Testriq provides software testing services to fintech, healthcare, SaaS, eCommerce, and education industries worldwide.",
                "For fintech QA, we ensure stability, scalability, and compliance with PCI DSS and other standards to protect financial applications.",
                "In healthcare QA, we align testing frameworks with HIPAA compliance, ensuring security, reliability, and user data protection.",
                "Our eCommerce testing services focus on scalability and seamless user experiences during high-traffic loads and peak sales.",
                "We provide startups and SaaS businesses with rapid, scalable QA testing frameworks, ensuring product readiness for fast releases."
            ]
        },
        {
            question: "Why do startups and enterprises choose Testriq for software quality assurance?",
            answer: ["Startups and enterprises choose Testriq for QA outsourcing services that scale with their business needs while ensuring quality.",
                "We accelerate product launches with agile QA frameworks, test automation, and rapid manual testing cycles for faster releases.",
                "Our domain expertise across SaaS, fintech, healthcare, and eCommerce allows us to provide targeted, scalable testing support.",
                "Testriq’s flexible QA models align with client workflows, whether you need on-demand testers or dedicated QA teams.",
                "We focus on reducing bugs and enhancing software stability while maintaining timelines, ensuring high-quality product releases."
            ]
        },
        {
            question: "How does Testriq ensure quality and transparency in testing?",
            answer: ["Testriq ensures software quality through structured QA processes, systematic testing frameworks, and detailed documentation.",
                "We use manual testing and test automation services for high test coverage and faster regression testing across modules.",
                "Our QA engineers provide transparent, real-time reporting, keeping you informed about defects, progress, and testing insights.",
                "We utilize advanced test management tools like Jira and TestRail to track test cases and defects systematically.",
                "Testriq aligns testing with your business goals, maintaining clear communication to ensure you remain informed at every step."
            ]
        },
        {
            question: "How do I get started with Testriq for QA services?",
            answer: ["Getting started with Testriq for QA services is seamless and quick. Contact us through our website or email to discuss your QA needs.",
                "We analyze your product, project goals, and timelines to propose a customized, efficient QA strategy tailored to your business.",
                "Our flexible QA engagement models include dedicated teams, QA outsourcing, and on-demand testing aligned with your workflows.",
                "We integrate seamlessly into your agile or DevOps processes to ensure fast onboarding and effective QA delivery.",
                "Testriq ensures continuous communication and transparent reporting, helping you focus on product development while we ensure quality."
            ]
        },
        {
            question: "What types of testing does Testriq perform?",
            answer: ["Testriq offers manual testing, test automation, performance testing, API testing, security testing, and mobile app testing.",
                "We use advanced testing tools like Selenium, Cypress, JMeter, Postman, and TestRail for effective and scalable test execution.",
                "Our functional testing and regression testing ensure your software performs as intended across different scenarios.",
                "We conduct load testing and performance testing to measure and enhance your app’s scalability under user load.",
                "With security testing, we help identify and fix vulnerabilities to protect your users and maintain compliance."
            ]
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <MdHelpOutline />
                        <span className="text-sm">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        <span className="text-[theme(color.brand.blue)]">FAQs</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get answers to common questions about our testing services,
                        processes, and app store compliance requirements.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 ease-in-out"
                                aria-label="about_us_faq_button"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openFAQ === index ? (
                                        <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                                    ) : (
                                        <FaChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </div>
                            </button>

                            {openFAQ === index && (
                                <div className="px-8 pb-6">
                                    <div className="border-t border-gray-100 pt-6">
                                        <ul className="list-disc pl-5 [&::marker]:text-blue-600">

                                            {
                                                Array.isArray(faq.answer) ? (
                                                    faq.answer.map((answerItem: string, answerIndex: number) => {
                                                        return <li key={answerIndex} className="text-gray-600 mleading-7">
                                                            {answerItem}
                                                        </li>
                                                    })
                                                ) : (
                                                    <li>{faq.answer}</li>
                                                )
                                            }

                                        </ul>
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

export default AboutFAQ;

