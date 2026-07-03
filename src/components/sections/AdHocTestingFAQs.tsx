"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AdHocTestingFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is ad-hoc testing and when should it be used?",
            answer: "Ad-hoc testing is an informal, unstructured testing method where testers use domain knowledge, intuition, and error-guessing techniques to find bugs without predefined test cases. It should be used for hotfixes requiring immediate validation, mobile apps needing quick cross-device checks, agile sprints needing rapid feature feedback, or startups needing cost-effective testing. It's best combined with formal testing for the perfect balance of speed and coverage.",
        },
        {
            question: "What are the main types of ad-hoc testing?",
            answer: "The primary types include Buddy Testing (developer/tester collaboration), Pair Testing (two testers working together), Monkey Testing (random input stress testing), Error Guessing (intuitive bug prediction), Sanity Testing (quick functional validation after fixes), and Smoke Testing (preliminary build stability check).",
        },
        {
            question: "How does ad-hoc testing differ from exploratory testing?",
            answer: "Ad-hoc testing is completely unstructured and random with zero documentation. Exploratory testing is semi-structured, guided by test 'charters' and learning objectives, and involves more systematic exploration with documented findings. Ad-hoc is best for urgency; Exploratory is best for deep feature investigation.",
        },
        {
            question: "What are the advantages and disadvantages of ad-hoc testing?",
            answer: "Advantages include extreme speed, cost-effectiveness, and intuitive bug detection. Disadvantages include a lack of documentation, difficulty in measuring coverage, and a high dependency on the tester's individual expertise. It's an excellent supplement but rarely a replacement for comprehensive formal QA.",
        },
        {
            question: "What are the best practices for effective ad-hoc testing?",
            answer: "Key practices include using highly experienced testers with deep domain knowledge, focusing on high-risk areas (payments, security), documenting bugs immediately with screen captures, combining it with formal testing phases, and conducting post-session analysis to feed findings back into the main test suite.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
                        Featured Snippet <span className="text-brand-blue">FAQs</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Quick answers to the most common questions about our ad-hoc testing services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border border-gray-100 bg-white transition-all duration-300 ${openIndex === index ? "shadow-xl ring-1 ring-brand-blue/20" : "hover:border-brand-blue/20"
                                }`}
                        >
                            <button
                                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-8 pb-8 animate-fade-in-down">
                                    <div className="h-px bg-gray-100 mb-6"></div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingFAQs;
