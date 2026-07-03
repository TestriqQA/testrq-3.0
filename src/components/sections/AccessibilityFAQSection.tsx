"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const AccessibilityFAQSection: React.FC = () => {
    const faqs = [
        {
            question: "What are accessibility testing services?",
            answer: "Accessibility testing services ensure that digital products, such as websites, mobile apps, and software, are usable by people with disabilities. This involves evaluating compliance with accessibility standards like WCAG, ADA, and Section 508, ensuring equal access and an inclusive user experience for all individuals."
        },
        {
            question: "Why is accessibility testing important for websites?",
            answer: "Accessibility testing is crucial for websites to ensure legal compliance (e.g., ADA, WCAG), expand market reach to a broader audience, and enhance brand reputation. It improves the user experience for individuals with disabilities, preventing exclusion and potential legal challenges, while fostering an inclusive digital environment."
        },
        {
            question: "What is the difference between automated and manual accessibility testing?",
            answer: "Automated accessibility testing uses software tools to quickly scan digital content for common accessibility issues, such as missing alt text or color contrast problems. It is efficient for large-scale checks but can only detect a fraction of issues. Manual accessibility testing involves human testers, often using assistive technologies like screen readers, to evaluate complex interactions and user flows, identifying nuanced issues that automated tools miss. Both are essential for comprehensive coverage."
        },
        {
            question: "How to achieve WCAG 2.2 compliance?",
            answer: "Achieving WCAG 2.2 compliance involves conducting thorough accessibility audits, implementing guidelines for perceivable, operable, understandable, and robust content, and regularly testing with both automated tools and manual methods, including assistive technologies. It requires addressing new success criteria introduced in WCAG 2.2, such as those related to drag-and-drop interfaces and target size."
        },
        {
            question: "What are the legal requirements for website accessibility?",
            answer: "Legal requirements for website accessibility vary by region but commonly include adherence to standards like the Americans with Disabilities Act (ADA) in the U.S., the Web Content Accessibility Guidelines (WCAG) internationally, and Section 508 for federal agencies. These laws mandate that digital content be accessible to individuals with disabilities, often requiring compliance with specific WCAG levels (e.g., AA)."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white mb-4">
                            <FaQuestionCircle />
                            <span className="text-sm font-bold uppercase tracking-wider">Quick Guide</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Snippet <span className="text-brand-blue">Questions</span></h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                                >
                                    <span className="text-lg md:text-xl font-bold text-gray-900 pr-8">{faq.question}</span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-brand-blue text-white' : 'bg-blue-50 text-brand-blue'}`}>
                                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </button>
                                {activeIndex === index && (
                                    <div className="px-6 md:px-8 pb-8 pt-0">
                                        <div className="h-px bg-gray-100 mb-6"></div>
                                        <p className="text-lg text-gray-600 leading-relaxed italic">
                                            &quot;{faq.answer}&quot;
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilityFAQSection;
