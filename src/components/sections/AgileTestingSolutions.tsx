"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaFlask,
    FaSync,
    FaSearch,
    FaCode,
    FaHistory,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

const AgileTestingSolutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const testingTypes = [
        {
            icon: <FaSync className="w-8 h-8" />,
            title: "Continuous Testing & CI/CD Integration",
            description: "Automated validation for every code change. We integrate testing into your DevOps pipeline to provide immediate feedback, ensuring that bugs are caught before they reach production.",
            features: [
                "Pipeline Integration (Jenkins, GitLab, Azure)",
                "Automated Smoke & Sanity Tests",
                "Real-time Quality Dashboards",
                "Instant Feedback Loops",
            ],
            color: "sky",
            gradientColor: "from-brand-blue to-brand-blue/80",
            metric: "Zero-Day Feedback",
        },
        {
            icon: <FaCode className="w-8 h-8" />,
            title: "Agile Test Automation Services",
            description: "Building maintainable, scalable automation frameworks that keep pace with your sprints. Our scripts are designed to be robust and easy to update as your application evolves.",
            features: [
                "Custom Automation Frameworks",
                "Sprint-Level Scripting",
                "Maintainable Test Suites",
                "Cross-Browser/Platform Coverage",
            ],
            color: "indigo",
            gradientColor: "from-indigo-500 to-indigo-600",
            metric: "95% Automation Coverage",
        },
        {
            icon: <FaSearch className="w-8 h-8" />,
            title: "Agile Exploratory Testing",
            description: "Expert-led discovery of edge cases and usability issues that scripted tests might miss. Our testers use their intuition and experience to find complex defects in new features.",
            features: [
                "Session-Based Testing",
                "Unscripted Edge Case Discovery",
                "Usability & UX Feedback",
                "Persona-Based UX Testing",
            ],
            color: "blue",
            gradientColor: "from-blue-500 to-blue-600",
            metric: "Early Defect Discovery",
        },
        {
            icon: <FaFlask className="w-8 h-8" />,
            title: "BDD & TDD Implementation",
            description: "Behavior-Driven and Test-Driven Development to ensure clear requirements and testable code from day one. We help bridge the gap between business, dev, and QA.",
            features: [
                "Gherkin/Cucumber Synergy",
                "Test-First Development Culture",
                "Requirement Clarification",
                "Living Documentation",
            ],
            color: "cyan",
            gradientColor: "from-cyan-500 to-cyan-600",
            metric: "100% Requirement Coverage",
        },
        {
            icon: <FaHistory className="w-8 h-8" />,
            title: "Agile Regression Testing",
            description: "Optimized regression suites that run fast and efficiently within sprint cycles. We ensure that existing functionality remains stable while you innovate at speed.",
            features: [
                "Risk-Based Regression",
                "Impact Analysis",
                "Parallel Test Execution",
                "Automated Regression Suites",
            ],
            color: "teal",
            gradientColor: "from-teal-500 to-teal-600",
            metric: "Sub-Hour Regression Cycles",
        },
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6 font-bold text-sm uppercase tracking-widest shadow-sm">
                        Our Solutions
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Suite of <span className="text-brand-blue">Agile Testing</span> Solutions
                    </h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        From early-stage planning to continuous deployment, we provide the tools and expertise to ensure your Agile journey is a success.
                    </p>
                </div>

                {/* Tabbed Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {testingTypes.map((type, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 group border ${activeTab === index
                                        ? `bg-gradient-to-r ${type.gradientColor} text-white shadow-2xl border-transparent scale-105`
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-100"
                                    }`}
                            >
                                <div className={`p-3 rounded-xl ${activeTab === index ? "bg-white/20" : "bg-white shadow-sm group-hover:bg-brand-blue/10"}`}>
                                    {React.cloneElement(type.icon as React.ReactElement, {
                                        className: `w-6 h-6 ${activeTab === index ? "text-white" : "text-brand-blue"}`
                                    })}
                                </div>
                                <span className="font-bold text-lg leading-tight">{type.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8 bg-gray-50 rounded-3xl p-12 shadow-inner border border-gray-100 relative overflow-hidden group">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                    {testingTypes[activeTab].metric}
                                </div>
                                <div className="flex gap-2">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`h-1.5 w-8 rounded-full transition-all duration-500 ${i === activeTab ? "bg-brand-blue w-12" : "bg-gray-300"}`} />
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                                {testingTypes[activeTab].title}
                            </h3>

                            <p className="text-gray-600 text-xl leading-relaxed mb-10">
                                {testingTypes[activeTab].description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {testingTypes[activeTab].features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-sky-50/50 hover:shadow-md transition-shadow">
                                        <FaCheckCircle className="text-brand-blue text-xl flex-shrink-0" />
                                        <span className="text-gray-800 font-bold text-sm tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                <Link href="/contact-us" className={`flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r ${testingTypes[activeTab].gradientColor} text-white font-black rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}>
                                    Deploy Solution <FaArrowRight />
                                </Link>
                                <button
                                    onClick={() => setActiveTab((prev) => (prev + 1) % testingTypes.length)}
                                    className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-700 font-black rounded-2xl hover:bg-gray-100 transition-all border border-gray-200 cursor-pointer"
                                >
                                    Explore Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingSolutions;
