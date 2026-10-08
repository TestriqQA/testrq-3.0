"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaIndustry,
    FaShoppingCart,
    FaUniversity,
    FaChevronLeft,
    FaChevronRight,
    FaTrophy,
    FaHeartbeat,
} from "react-icons/fa";

const SapCaseStudies: React.FC = () => {
    const [activeCase, setActiveCase] = useState(0);

    const caseStudies = [
        {
            id: 1,
            company: "Global Manufacturing Corp",
            industry: "Manufacturing",
            icon: <FaIndustry className="w-6 h-6" />,
            challenge: "S/4HANA Migration & Business Continuity",
            solution:
                "End-to-end testing for a massive S/4HANA migration, ensuring zero downtime for critical production lines and supply chain processes.",
            metrics: [
                { label: "Migration Success", value: "100% success", progress: 100 },
                { label: "Downtime", value: "Zero", progress: 100 },
                { label: "Defects Found", value: "500+ caught", progress: 95 },
                { label: "Cost Savings", value: "30% reduction", progress: 90 },
            ],
            testimonial:
                "Testriq's rigorous testing strategy was crucial for our seamless transition to S/4HANA. We maintained full operational capability throughout the migration.",
            timeline: [
                "Migration Assessment",
                "Data Migration Testing",
                "Process Validation",
                "Go-Live Support",
            ],
            color: "blue",
        },
        {
            id: 4,
            company: "Pharma Innovations Inc",
            industry: "Healthcare & Pharma",
            icon: <FaHeartbeat className="w-6 h-6" />,
            challenge: "S/4HANA & GxP Compliance",
            solution:
                "Validation of SAP modules for GxP compliance, ensuring data integrity and regulatory adherence during S/4HANA implementation.",
            metrics: [
                { label: "Compliance", value: "100% FDA", progress: 100 },
                { label: "Validation Time", value: "-40%", progress: 90 },
                { label: "Data Integrity", value: "100%", progress: 100 },
                { label: "Audit Readiness", value: "Instant", progress: 95 },
            ],
            testimonial:
                "Their validation framework helped us achieve FDA compliance in record time while modernizing our core SAP landscape.",
            timeline: [
                "GxP Assessment",
                "Validation Master Plan",
                "IQ/OQ/PQ Execution",
                "Audit Support",
            ],
            color: "red",
        },
        {
            id: 2,
            company: "Retail Giant Ltd",
            industry: "Retail & E-commerce",
            icon: <FaShoppingCart className="w-6 h-6" />,
            challenge: "SAP CAR & POS Integration",
            solution:
                "Comprehensive integration testing for SAP Customer Activity Repository (CAR) and Point of Sale (POS) systems across 500+ stores.",
            metrics: [
                {
                    label: "Store Integration",
                    value: "500+ stores",
                    progress: 100,
                },
                { label: "Data Accuracy", value: "99.9% inventory", progress: 99 },
                { label: "Performance", value: "Sub-second", progress: 98 },
                { label: "Sales Impact", value: "Positive", progress: 100 },
            ],
            testimonial:
                "The integration testing ensured our inventory data was accurate across all channels, significantly improving our omnichannel customer experience.",
            timeline: [
                "Integration Strategy",
                "POS Testing",
                "Performance Tuning",
                "Rollout Support",
            ],
            color: "green",
        },
        {
            id: 3,
            company: "FinTech Solutions",
            industry: "Financial Services",
            icon: <FaUniversity className="w-6 h-6" />,
            challenge: "SAP FICO & Regulatory Compliance",
            solution:
                "Automated regression testing for SAP FICO modules to ensure compliance with new financial regulations and reporting standards.",
            metrics: [
                { label: "Compliance", value: "100% adherence", progress: 100 },
                { label: "Automation", value: "85% coverage", progress: 85 },
                { label: "Reporting", value: "Error-free", progress: 100 },
                { label: "Audit Time", value: "50% faster", progress: 90 },
            ],
            testimonial:
                "Testriq's automation expertise helped us achieve full regulatory compliance while cutting our testing cycle time in half.",

            timeline: [
                "Compliance Analysis",
                "Automation Framework",
                "Regression Testing",
                "Audit Validation",
            ],
            color: "purple",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: "bg-blue-500",
                text: "text-blue-600",
                border: "border-blue-500",
            },
            green: {
                bg: "bg-green-500",
                text: "text-green-600",
                border: "border-green-500",
            },
            purple: {
                bg: "bg-purple-500",
                text: "text-purple-600",
                border: "border-purple-500",
            },
            red: {
                bg: "bg-red-500",
                text: "text-red-600",
                border: "border-red-500",
            },
        };
        return colors[color as keyof typeof colors];
    };

    const nextCase = () => {
        setActiveCase((prev) => (prev + 1) % caseStudies.length);
    };

    const prevCase = () => {
        setActiveCase(
            (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
        );
    };

    const currentCase = caseStudies[activeCase];
    const colorClasses = getColorClasses(currentCase.color);

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaTrophy />
                        <span className="text-sm">Success Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SAP Testing <span className="text-brand-blue">Success Stories</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover how our SAP testing expertise has helped global enterprises
                        achieve seamless migrations, robust integrations, and operational
                        excellence.
                    </p>
                </div>

                {/* Case Study Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {caseStudies.map((caseStudy, index) => (
                        <button
                            key={caseStudy.id}
                            onClick={() => setActiveCase(index)}
                            className={`flex items-center px-4 sm:px-6 py-3 rounded-xl border-2 transition-all duration-300 ${activeCase === index
                                ? `${getColorClasses(caseStudy.color).bg
                                } text-white border-transparent shadow-lg`
                                : `bg-white ${getColorClasses(caseStudy.color).text} ${getColorClasses(caseStudy.color).border
                                } hover:bg-gray-50`
                                } cursor-pointer`}
                        >
                            <div className="mr-2 sm:mr-3">{caseStudy.icon}</div>
                            <div className="text-left">
                                <div className="font-semibold text-sm">{caseStudy.company}</div>
                                <div className="text-xs opacity-80 hidden sm:block">{caseStudy.industry}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Active Case Study Display */}
                <div
                    className={`bg-white border-2 ${colorClasses.border} rounded-2xl shadow-xl overflow-hidden`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
                        {/* Left Side - Case Details */}
                        <div>
                            <div
                                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${colorClasses.bg} text-white`}
                            >
                                {currentCase.icon}
                                <span className="ml-2">{currentCase.company}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {currentCase.company}
                            </h3>
                            <p className={`${colorClasses.text} font-semibold mb-4`}>
                                {currentCase.industry}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                                <p className="text-gray-600 mb-4">{currentCase.challenge}</p>

                                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                                <p className="text-gray-600">{currentCase.solution}</p>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-l-green-500">
                                <p className="text-gray-700 italic mb-3">
                                    &quot;{currentCase.testimonial}&quot;
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Metrics and Timeline */}
                        <div>
                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    Key Results Achieved
                                </h4>
                                <div className="space-y-4">
                                    {currentCase.metrics.map((metric, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-600">{metric.label}</span>
                                                <span className={`font-semibold ${colorClasses.text}`}>
                                                    {metric.value}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className={`h-3 rounded-full ${colorClasses.bg} transition-all duration-1000 ease-out`}
                                                    style={{ width: `${metric.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Timeline */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    Project Timeline
                                </h4>
                                <div className="space-y-3">
                                    {currentCase.timeline.map((phase, index) => (
                                        <div key={index} className="flex items-center">
                                            <div
                                                className={`w-3 h-3 rounded-full ${colorClasses.bg} mr-3`}
                                            ></div>
                                            <span className="text-gray-600">{phase}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Success Badge */}
                            <div className="mt-8 text-center">
                                <div
                                    className={`inline-flex items-center px-6 py-3 rounded-full ${colorClasses.bg} text-white font-semibold shadow-lg`}
                                >
                                    <span className="mr-2">✓</span>
                                    Project Success
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="bg-gray-50 px-4 sm:px-8 py-4 flex items-center justify-between">
                        <button
                            onClick={prevCase}
                            className="flex items-center px-2 sm:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                            aria-label="Previous Case Study"
                        >
                            <FaChevronLeft className="w-4 h-4 mr-0 sm:mr-2" />
                            <span className="hidden sm:inline">Previous Case</span>
                        </button>

                        <div className="flex space-x-2">
                            {caseStudies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCase(index)}
                                    className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${activeCase === index ? colorClasses.bg : "bg-gray-300"
                                        } cursor-pointer`}
                                    aria-label={`Select Case Study ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextCase}
                            className="flex items-center px-2 sm:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                            aria-label="Next Case Study"
                        >
                            <span className="hidden sm:inline">Next Case</span>
                            <FaChevronRight className="w-4 h-4 ml-0 sm:ml-2" />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/case-studies"
                        title="View All Case Studies – Testriq QA Lab"
                        className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
                    >
                        View All Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SapCaseStudies;
