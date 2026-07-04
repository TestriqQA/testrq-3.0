"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaRunning } from "react-icons/fa";
import Link from "next/link";

const AgileTestingFAQs: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What are the core principles of Agile testing?",
            answer: "The core principles of Agile testing include continuous feedback, collaboration between testers and developers, testing early and often (shift-left), and focusing on delivering value to the customer through iterative improvements."
        },
        {
            question: "How does Agile testing differ from traditional waterfall testing?",
            answer: "Unlike waterfall testing, which occurs at the end of the development cycle, Agile testing is integrated into every stage of the process. It is iterative, collaborative, and focuses on continuous quality rather than a single final sign-off."
        },
        {
            question: "What is the role of a QA tester in an Agile team?",
            answer: "In an Agile team, a QA tester is a collaborative partner who helps define requirements, provides continuous feedback, develops automated tests, and ensures that the final product meets the user's needs and expectations."
        },
        {
            question: "How to integrate automated testing into Agile sprints?",
            answer: "Integrating automation into Agile sprints requires a focus on building maintainable scripts, prioritizing high-value test cases, and ensuring that automated tests are executed as part of the continuous integration (CI) pipeline."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-md">
                        <span className="text-sm font-bold uppercase tracking-widest">FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="text-brand-blue">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about our Agile testing services and how we help you deliver high-quality software at speed.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openFAQ === index ? "border-brand-blue/30 bg-brand-blue/10 shadow-lg" : "border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md"
                                }`}
                        >
                            <button
                                className="w-full px-8 py-6 text-left transition-colors flex justify-between items-center group cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-black text-lg transition-colors ${openFAQ === index ? "text-brand-blue" : "text-gray-800"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all ${openFAQ === index ? "bg-brand-blue text-white rotate-180" : "bg-white text-brand-blue shadow-sm"}`}>
                                    <FaChevronDown className="w-4 h-4" />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="px-8 pb-8">
                                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner inside FAQ area */}
                <div className="mt-20">
                    <div className="bg-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-800 to-indigo-950 opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-6">Ready to Accelerate Your Velocity?</h3>
                            <p className="text-sky-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                Don&apos;t let quality be a bottleneck in your Agile process. Let our experts show you how to build a high-speed QA pipeline that scales.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-blue font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
                                Start Free QA Audit <FaRunning />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingFAQs;
