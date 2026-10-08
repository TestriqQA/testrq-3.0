"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const MigrationFAQs: React.FC = () => {
    const faqs = [
        {
            question: "What is migration testing and why is it important?",
            answer: "Migration testing is the process of verifying that an application or data has been successfully moved from one environment to another without loss, corruption, or functional degradation. It is important to prevent data loss, ensure functional continuity, and minimize business downtime, thereby safeguarding critical operations and user experience."
        },
        {
            question: "What are the key phases of a migration testing process?",
            answer: "The key phases typically include: Pre-Migration (assessment, data profiling, mapping, and environment readiness), Migration (execution, monitoring, and initial data transfer verification), and Post-Migration (comprehensive validation, data reconciliation, Regression Testing, and performance testing in the new environment)."
        },
        {
            question: "How to ensure data integrity during a cloud migration?",
            answer: "To ensure data integrity, it is crucial to implement automated reconciliation tools, perform rigorous row-count and checksum validations, verify data transformations against predefined rules, and conduct thorough post-migration functional and data accuracy checks. Establishing clear Schema Validation and Data Mapping processes is also vital."
        },
        {
            question: "What is the difference between pre-migration and post-migration testing?",
            answer: "Pre-migration testing focuses on preparing for the migration by assessing data quality, profiling source data, defining data mapping rules, and ensuring environment readiness. Post-migration testing validates that the data is accurate, complete, and consistent in the new system, and checks all applications and functionalities post-transfer."
        },
        {
            question: "What are the common challenges in data migration testing?",
            answer: "Common challenges include managing large data volumes, complex transformations, mapping mismatches between source and target systems, ensuring security and compliance throughout the transfer, and minimizing downtime during the migration window. Accurate Data preprocessing and source-target system complexity also pose significant hurdles."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-slate-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4 text-brand-blue">
                        <FaQuestionCircle className="w-8 h-8 opacity-20" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Migration Testing <span className="text-brand-blue">FAQ</span>
                    </h2>
                    <p className="text-gray-600 font-medium font-inter">
                        Quick answers to common questions about moving your data and systems securely.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-brand-blue/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center group cursor-pointer"
                            >
                                <span className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors leading-tight">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-brand-blue shrink-0 ml-4" />
                                ) : (
                                    <FaChevronDown className="text-gray-400 shrink-0 ml-4" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
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

export default MigrationFAQs;
