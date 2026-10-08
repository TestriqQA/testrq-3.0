"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ManagedTestingFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are managed testing services and how do they work?",
            answer:
                "Managed testing services represent a strategic partnership where a vendor takes full responsibility for the testing function, including strategy, resources, tools, and outcomes. Unlike traditional outsourcing where you rent headcount, managed testing involves the vendor owning the entire testing process and being accountable for quality outcomes through Service Level Agreements (SLAs) and Key Performance Indicators (KPIs). The vendor typically assigns a dedicated team that becomes an extension of your organization, manages all testing activities, and provides transparent reporting on quality metrics and SLA compliance.",
        },
        {
            question: "What is the difference between QA outsourcing and managed testing services?",
            answer:
                "While traditional QA outsourcing often focuses on staff augmentation (renting headcount), managed testing services involve the vendor owning the entire testing process and being accountable for outcomes. In traditional outsourcing, your organization manages the QA function and directs the vendor's activities. In managed testing, the vendor manages the QA function and is accountable for quality outcomes. Additionally, managed testing typically uses outcome-based or fixed pricing models with SLA-backed accountability, while traditional outsourcing often uses time-and-materials pricing. The key difference is who owns the responsibility and risk for quality outcomes.",
        },
        {
            question: "What are the benefits of managed testing services for enterprises?",
            answer:
                "Managed testing services provide multiple benefits for enterprises: cost predictability through fixed or outcome-based pricing (OPEX model), access to specialized global talent without lengthy recruitment, faster time-to-market through accelerated testing, and the ability for internal teams to focus on core innovation rather than QA management. Additional benefits include reduced infrastructure investment (vendor manages tools and infrastructure), consistent quality through standardized processes, scalable testing capacity without proportional cost increases, and reduced management overhead. For enterprises in regulated industries, managed testing provides compliance expertise and audit documentation.",
        },
        {
            question: "How to choose the best managed testing service provider?",
            answer:
                "When selecting a managed testing service provider, look for several key factors: industry-specific experience (especially if you're in healthcare, finance, or other regulated sectors), technical depth in automation and specialized testing areas, transparent reporting structures and clear SLAs, proven track record of meeting complex quality requirements, ISTQB certification or equivalent credentials for team members, global reach if you need multi-region support, and references from similar-sized organizations in your industry. Additionally, evaluate their approach to continuous improvement, their ability to scale with your needs, and their willingness to align testing strategy with your business objectives.",
        },
        {
            question: "How do managed testing services reduce software development costs?",
            answer:
                "Managed testing services reduce costs in multiple ways: eliminating the need for in-house QA infrastructure (tools, systems, facilities), reducing recruitment and training expenses, preventing costly post-release defects through superior test coverage, reducing management overhead, and providing cost predictability through fixed or outcome-based pricing. By shifting from fixed headcount to flexible, outcome-based engagement, organizations pay only for testing capacity they need. Additionally, managed testing providers leverage economies of scale across multiple clients to optimize tool licensing and infrastructure costs. The cumulative effect is typically 30-50% reduction in total QA costs compared to maintaining an equivalent in-house team.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Managed Testing{" "}
                        <span className="text-brand-blue">FAQs</span>
                    </h2>
                    <p className="text-lg text-gray-600">Your quick answers to managed testing services</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-brand-blue flex-shrink-0" />
                                ) : (
                                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="px-8 pb-5">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingFAQs;
