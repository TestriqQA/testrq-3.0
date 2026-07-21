"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaCogs,
    FaArrowLeft,
    FaArrowRight,
    FaShieldAlt,
    FaDatabase,
    FaRocket,
    FaChartLine,
} from "react-icons/fa";

const ContinuousTestingComprehensiveSlider: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            id: "cicd-integration",
            title: "CI/CD Pipeline Integration",
            icon: <FaCogs className="text-2xl" />,
            color: "cyan",
            description:
                "Seamlessly embedding automated tests into Jenkins, GitLab, Azure DevOps, or AWS pipelines for zero-touch testing execution.",
            keyValue: "Zero-touch testing execution",
            features: [
                "Jenkins Pipeline Integration",
                "GitLab CI/CD Workflows",
                "Azure DevOps Pipelines",
                "AWS CodePipeline Support",
                "GitHub Actions Automation",
                "Custom Webhook Triggers",
            ],
            action: "/automation-testing-services",
        },
        {
            id: "shift-left-right",
            title: "Shift-Left & Shift-Right Testing",
            icon: <FaArrowLeft className="text-2xl" />,
            color: "indigo",
            description:
                "Moving testing earlier in development and monitoring performance in production for early defect detection & real-world insights.",
            keyValue: "Early defect detection & real-world insights",
            features: [
                "Unit Test Integration",
                "Pre-Commit Hooks",
                "Production Monitoring",
                "Canary Deployments",
                "A/B Testing Validation",
                "Synthetic Monitoring",
            ],
            action: "/automation-testing-services",
        },
        {
            id: "regression-testing",
            title: "Automated Regression Testing",
            icon: <FaShieldAlt className="text-2xl" />,
            color: "green",
            description:
                "Ensuring new code changes don't break existing functionality across web and mobile apps for stability across every release.",
            keyValue: "Stability across every release",
            features: [
                "Web App Regression Suites",
                "Mobile App Regression",
                "Cross-Browser Validation",
                "Visual Regression Testing",
                "Self-Healing Test Scripts",
                "Smart Test Selection",
            ],
            action: "/regression-testing",
        },
        {
            id: "performance-security",
            title: "Performance & Security Testing",
            icon: <FaChartLine className="text-2xl" />,
            color: "orange",
            description:
                "Validating system scalability and security posture with every build for proactive risk management.",
            keyValue: "Proactive risk management",
            features: [
                "Load & Stress Testing",
                "OWASP Top 10 Scanning",
                "API Security Validation",
                "Scalability Benchmarking",
                "Vulnerability Assessment",
                "Compliance Scanning",
            ],
            action: "/performance-testing-services",
        },
        {
            id: "test-data",
            title: "Test Data Management",
            icon: <FaDatabase className="text-2xl" />,
            color: "purple",
            description:
                "Providing high-quality, compliant data for realistic testing environments ensuring environmental parity and accuracy.",
            keyValue: "Environmental parity and accuracy",
            features: [
                "Synthetic Data Generation",
                "Data Masking & Compliance",
                "Environment Provisioning",
                "Production Data Mirroring",
                "GDPR/HIPAA Compliant Data",
                "Data Refresh Automation",
            ],
            action: "/automation-testing-services",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: {
            [key: string]: { bg: string; text: string; border: string };
        } = {
            cyan: {
                bg: "bg-cyan-50",
                text: "text-cyan-600",
                border: "border-cyan-200",
            },
            indigo: {
                bg: "bg-indigo-50",
                text: "text-indigo-600",
                border: "border-indigo-200",
            },
            green: {
                bg: "bg-green-50",
                text: "text-green-600",
                border: "border-green-200",
            },
            orange: {
                bg: "bg-orange-50",
                text: "text-orange-600",
                border: "border-orange-200",
            },
            purple: {
                bg: "bg-purple-50",
                text: "text-purple-600",
                border: "border-purple-200",
            },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaRocket />
                        <span className="text-sm">
                            Comprehensive Testing Solutions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Comprehensive{" "}
                        <span className="text-brand-blue">Continuous Testing</span>{" "}
                        Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At Testriq, we don&apos;t just automate tests; we engineer quality
                        into your entire software delivery lifecycle (SDLC). Our approach
                        combines advanced{" "}
                        <Link
                            href="/automation-testing-services"
                            className="text-brand-blue underline"
                        >
                            Test Automation Frameworks
                        </Link>{" "}
                        with strategic Quality Engineering.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap border-b border-gray-200">
                        {services.map((service, index) => {
                            const colors = getColorClasses(service.color);
                            return (
                                <button
                                    key={service.id}
                                    aria-label={service.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                                            ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex flex-col items-center justify-center space-x-2">
                                        <span
                                            className={
                                                activeTab === index ? colors.text : "text-gray-400"
                                            }
                                        >
                                            {service.icon}
                                        </span>
                                        <span className="hidden sm:inline text-xs mt-1">
                                            {service.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 bg-white">
                        {services.map((service, index) => {
                            const colors = getColorClasses(service.color);
                            return (
                                <div
                                    key={service.id}
                                    className={`${activeTab === index ? "block" : "hidden"
                                        } transition-all duration-300`}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div
                                                    className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}
                                                >
                                                    <span className={colors.text}>{service.icon}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900">
                                                        {service.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-2 mt-2">
                                                        <span className="text-sm text-gray-600">
                                                            Key Value:
                                                        </span>
                                                        <span
                                                            className={`text-sm font-bold ${colors.text}`}
                                                        >
                                                            {service.keyValue}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href={service.action}
                                                className="bg-brand-blue text-white inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                            >
                                                Learn More
                                                <FaArrowRight />
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                Key Features & Capabilities
                                            </h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="flex items-center space-x-3"
                                                    >
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                                        <span className="text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestingComprehensiveSlider;
