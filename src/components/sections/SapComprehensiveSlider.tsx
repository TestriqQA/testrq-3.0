"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaChartLine,
    FaFlask,
    FaServer,
    FaSync,
} from "react-icons/fa";

const SapComprehensiveSlider: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const testingTypes = [
        {
            id: "s4hana",
            title: "S/4HANA Migration Testing",
            icon: <FaServer className="w-6 h-6" />,
            coverage: "ISO 29119 Aligned Success",
            description:
                "Validate 'clean core' principles and custom Z-reports during the ECC to S/4HANA transition. We ensure 100% success by mapping critical paths via risk-based testing.",
            features: [
                "Clean Core Validation",
                "Custom Z-Report Testing",
                "Universal Journal Merging",
                (<><Link href="/manual-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">Business Process QA</Link></>),
                "Data Conversion Integrity",
                "Fiori UX Verification",
            ],
            metrics: [
                { label: "Migration Success", value: "100%" },
                { label: "Data Integrity", value: "99.9%" },
                { label: "Uptime", value: "98%" },
            ],
            action: "/sap-testing-services"
        },
        {
            id: "data-testing",
            title: "SAP Data Testing & Compliance",
            icon: <FaFlask className="w-6 h-6" />,
            coverage: "GDPR & CCPA Compliant",
            description:
                "Expert SAP data testing using TDMS and synthetic generation. We mask PII while maintaining referential integrity across complex global datasets.",
            features: [
                "PII Data Masking",
                (<><Link href="/data-analysis-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">SAP TDMS Integration</Link></>),
                "Synthetic Data Gen",
                "ISO 29119-3 templates",
                "Referential Integrity",
                "Global Audit Ready",
            ],
            metrics: [
                { label: "Compliance Rate", value: "100%" },
                { label: "Data Realism", value: "High" },
                { label: "Risk Mitigation", value: "Excellent" },
            ],
            action: "/api-testing"
        },
        {
            id: "automation",
            title: "Automation & Maintenance",
            icon: <FaSync className="w-6 h-6" />,
            coverage: "40% Faster Cycles",
            description:
                "Resilient, keyword-driven frameworks using Tricentis Tosca and Worksoft. Achieve 80% regression automation for long-term stability.",
            features: [
                (<><Link href="/technology-stack" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">Tricentis Tosca Labs</Link></>),
                "Worksoft Certify",
                "Keyword-Driven Design",
                "80% Regression Cover",
                "Patch Impact Analysis",
                "Auto-healing Scripts",
            ],
            metrics: [
                { label: "Automation Rate", value: "80%" },
                { label: "Maintenance Drop", value: "50%" },
                { label: "ROI", value: "Positive" },
            ],
            action: "/automation-testing-services"
        },
        {
            id: "performance",
            title: "Performance under Load",
            icon: <FaChartLine className="w-6 h-6" />,
            coverage: "Zero Sizing Failures",
            description:
                "Simulating multi-region access and Fiori-based workloads. We benchmark OData APIs and background jobs to prevent system crashes.",
            features: [
                (<><Link href="/api-testing" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">OData API Spikes</Link></>),
                (<><Link href="/performance-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">Fiori Workload Sizing</Link></>),
                "Multi-region Simulation",
                "Batch Overlap Check",
                "HANA DB Optimization",
                "ISO 29119-3 Specs",
            ],
            metrics: [
                { label: "Throughput", value: "Zettabyte Scalable" },
                { label: "Response", value: "Optimized" },
                { label: "Stability", value: "100%" },
            ],
            action: "/performance-testing-services"
        },
    ];

    // Function to move to the next tab
    const nextTab = () => {
        setActiveTab((prevTab) => (prevTab + 1) % testingTypes.length); // Loop back to the first tab when reaching the last one
    };

    // Function to move to the previous tab
    const prevTab = () => {
        setActiveTab((prevTab) => (prevTab - 1 + testingTypes.length) % testingTypes.length);
    };

    const activeTestingType = testingTypes[activeTab];

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaFlask />
                        <span className="text-sm">End-to-End SAP QA Solutions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SAP Quality Assurance <span className="text-brand-blue">for the 2026 Landscape</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Whether you are migrating to S/4HANA or comparing ERP testing partners, Testriq provides the technical depth you need. We deliver global compliance and zero-defect deployments based on ISO 29119 standards.
                    </p>
                </div>

                {/* Active Tab Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
                        {/* Left Side - Description and Features */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                    {activeTestingType.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {activeTestingType.title}
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                        {activeTestingType.coverage}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {activeTestingType.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Key Features:
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {activeTestingType.features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <Link href={`blog/post${activeTestingType.action}`} className="w-full sm:w-auto text-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                                    Explore {activeTestingType.title}
                                </Link>
                                <div className="flex gap-4 w-full sm:w-auto">
                                    <button
                                        className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                        onClick={prevTab}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                        onClick={nextTab}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Metrics and Visualization */}
                        <div>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    {activeTestingType.title}
                                </h4>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {activeTestingType.coverage}
                                </div>
                                <div className="space-y-4">
                                    {activeTestingType.metrics.map((metric, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-600">{metric.label}</span>
                                                <span className="font-semibold text-blue-600">
                                                    {metric.value}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: "95%" }} // Simplified width for visual
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h5 className="font-semibold text-gray-900 mb-4">
                                    Testing Coverage Visualization
                                </h5>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span className="text-blue-600 font-bold text-lg">✓</span>
                                        </div>
                                        <div className="text-sm text-gray-600">Validated</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span className="text-green-600 font-bold text-lg">
                                                ⚡
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600">Optimized</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SapComprehensiveSlider;
