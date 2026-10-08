"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What are the benefits of testing in the same time zone?",
        answer: "Testing in the same time zone enables real-time collaboration, faster feedback loops, and immediate defect resolution. It eliminates the communication delays typical of traditional offshore models, ensuring that QA and development remain perfectly synchronized throughout the sprint."
    },
    {
        question: "Do you offer localized support in my region?",
        answer: "Yes, our Time Zone Aligned QA includes localized support across major global regions including North America (EST/PST), Europe (GMT/CET), and Asia-Pacific (IST/SGT/AEST)."
    },
    {
        question: "How does follow-the-sun testing improve software quality?",
        answer: "Follow-the-sun testing provides a 24/7 QA cycle by leveraging teams in different global regions. This allows for continuous testing, where code developed in one region is tested in another while the original team sleeps, significantly reducing the overall testing lifecycle and improving time-to-market."
    },
    {
        question: "Why is real-time collaboration important in software QA?",
        answer: "Real-time collaboration allows testers to clarify requirements instantly, developers to fix bugs as they are found, and stakeholders to have immediate visibility into the product's quality. This synchronous approach reduces misunderstandings, minimizes rework, and fosters a stronger culture of quality."
    },
    {
        question: "What is the difference between onshore, nearshore, and offshore testing?",
        answer: "Onshore testing involves teams in the same country. Nearshore testing involves teams in a neighboring country or the same time zone. Offshore testing involves teams in a distant country with a significant time zone difference. Nearshore and onshore models are preferred for projects requiring high levels of real-time collaboration."
    }
];

const TimezoneFAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-[theme(color.brand.blue)]">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about our Time Zone Aligned QA services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                </div>
                            </button>

                            {activeIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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

export default TimezoneFAQs;
