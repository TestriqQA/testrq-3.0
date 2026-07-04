"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What are the best practices for Azure application testing?",
            answer: (
                <>
                    Best practices include implementing <Link href="/automation-testing-services" className="text-brand-blue hover:underline">automated testing</Link> early in the SDLC, using Infrastructure as Code (ARM/Bicep) for environment consistency, and leveraging Azure Monitor for real-time observability. We also recommend performing regular security audits and scale-testing to validate dynamic elasticity.
                </>
            ),
        },
        {
            question: "How to integrate automated testing in Azure DevOps pipelines?",
            answer: (
                <>
                    This involves configuring YAML-based build and release pipelines to trigger automated test suites (Selenium, Playwright, or unit tests) at every stage. We specialize in setting up quality gates in <Link href="/qa-documentation-services" className="text-brand-blue hover:underline">Azure DevOps</Link> that prevent unstable code from reaching production.
                </>
            ),
        },
        {
            question: "How to ensure security during Azure cloud migration?",
            answer: (
                <>
                    Security is ensured through a multi-layered approach: validating IAM configurations in Azure AD, performing network penetration testing on VNets, and conducting data integrity checks before and after the move. We map all testing activities to global standards like <Link href="/security-testing" className="text-brand-blue hover:underline">SOC2 and ISO 27001</Link>.
                </>
            ),
        },
        {
            question: "What are the benefits of managed Azure testing services?",
            answer:
                "Managed services provide access to Azure-certified QA experts, specialized testing tools, and proven methodologies. This reduces the burden on internal teams, accelerates time-to-market, and ensures that your cloud infrastructure is optimized for performance, security, and cost-efficiency.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6">
                        <FaQuestionCircle />
                        <span className="text-sm font-bold uppercase tracking-wider">Cloud Knowledge Base</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        <span className="text-brand-blue">Azure Testing</span> FAQs
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Answers to technical and strategic questions regarding Cloud QA and Azure ecosystems.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openFAQ === index ? "border-brand-blue shadow-2xl shadow-blue-50" : "border-gray-100 hover:border-gray-300"
                                }`}
                        >
                            <button
                                className={`w-full px-8 py-6 text-left transition-colors duration-300 flex justify-between items-center cursor-pointer ${openFAQ === index ? "bg-blue-50/50" : "bg-white"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-bold text-lg md:text-xl pr-8 ${openFAQ === index ? "text-brand-blue" : "text-gray-800"}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFAQ === index ? "bg-brand-blue text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                                    }`}>
                                    <FaChevronDown />
                                </div>
                            </button>
                            {openFAQ === index && (
                                <div className="px-8 pb-8 bg-blue-50/50 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <p className="text-gray-600 text-lg leading-relaxed pt-2 border-t border-blue-100/50">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Support Strip */}
                <div className="mt-16 p-8 rounded-3xl bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl">
                            <VscAzure className="animate-pulse" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Still have questions?</h4>
                            <p className="text-gray-400">Our Azure architects are ready to help you architect your QA strategy.</p>
                        </div>
                    </div>
                    <Link href="/contact-us" className="bg-brand-blue px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-colors uppercase tracking-widest text-sm cursor-pointer">
                        Get Expert Advice
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AzureTestingFAQs;
