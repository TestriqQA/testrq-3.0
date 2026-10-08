"use client";

import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const ShiftLeftFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What is shift-left testing and why is it important?",
            answer: "Shift-left testing is the practice of moving testing activities earlier in the software development lifecycle, ideally starting from the requirements and design phases. It is important because it helps catch defects when they are easiest and cheapest to fix, significantly reducing the overall cost of quality, accelerating delivery, and improving reliability."
        },
        {
            question: "How to implement shift-left testing in an Agile environment?",
            answer: "Involving QA professionals in requirements gathering, encouraging developers to write unit tests, automating testing within the CI/CD pipeline, and fostering a collaborative culture where quality is a shared responsibility are key steps."
        },
        {
            question: "What are the benefits of shift-left testing for businesses?",
            answer: "Benefits include faster time-to-market, significant cost savings by minimizing expensive post-release fixes, reduction in technical debt, and higher customer satisfaction through more reliable software."
        },
        {
            question: "What is the difference between shift-left and shift-right testing?",
            answer: "Shift-left focuses on pre-production testing to prevent defects. Shift-right involves testing in production (monitoring, A/B testing) to gather real-world feedback and identify live-environment issues."
        },
        {
            question: "How does shift-left testing reduce software development costs?",
            answer: "By resolving defects at their earliest stages, companies avoid the exponential increase in fix costs. Catching an issue during design is often 100x cheaper than fixing it after it has reached production."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center">
                    <FaQuestionCircle className="text-brand-blue w-10 h-10 mb-4 opacity-20" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Guide & FAQ</h2>
                    <p className="text-gray-600">Answers to common questions about our Shift-Left approach.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                                <FaChevronDown className={`w-4 h-4 text-brand-blue transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {activeIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
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

export default ShiftLeftFAQs;
