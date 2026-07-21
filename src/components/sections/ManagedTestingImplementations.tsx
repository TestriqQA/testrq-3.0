"use client";

import React, { useState } from "react";
import {
    FaLayerGroup,
    FaRobot,
    FaTachometerAlt,
    FaShieldAlt,
    FaSyncAlt,
    FaCloud,
    FaBrain,
    FaDatabase,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";

const ManagedTestingImplementations: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const implementations = [
        {
            icon: <FaLayerGroup className="text-2xl" />,
            title: "End-to-End Managed Testing",
            color: "indigo",
            description: "Complete testing lifecycle from strategy through execution and reporting for enterprises.",
            features: [
                "Test strategy development aligned with business objectives",
                "Comprehensive test planning for each release cycle",
                "Test design covering functional, performance, security dimensions",
                "Defect management with tracking through resolution",
                "Transparent metrics reporting and SLA compliance",
            ],
        },
        {
            icon: <FaRobot className="text-2xl" />,
            title: "Managed Test Automation",
            color: "cyan",
            description: "Accelerate testing and enable continuous deployment through managed automation.",
            features: [
                "Automation framework design: scalable, maintainable frameworks",
                "Regression, smoke, and critical path test automation",
                "CI/CD integration for continuous validation",
                "Automation maintenance as your application evolves",
                "Automation coverage and effectiveness tracking",
            ],
        },
        {
            icon: <FaTachometerAlt className="text-2xl" />,
            title: "Performance & Scalability Testing",
            color: "green",
            description: "Validate your application meets performance requirements under all conditions.",
            features: [
                "Performance baseline establishment for critical paths",
                "Realistic load testing to identify bottlenecks",
                "Stress testing beyond expected capacity",
                "Horizontal and vertical scalability validation",
                "Performance optimization recommendations",
            ],
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Security & Compliance Testing",
            color: "red",
            description: "Validate security controls and compliance with HIPAA, GDPR, SOC2, PCI-DSS.",
            features: [
                "Penetration testing: simulating attacker behavior",
                "Vulnerability assessment and scanning",
                "Authentication, authorization, encryption validation",
                "Compliance validation for regulatory standards",
                "Security testing coverage and vulnerability trends",
            ],
        },
        {
            icon: <FaSyncAlt className="text-2xl" />,
            title: "Agile & DevOps Testing",
            color: "orange",
            description: "Integrate testing into rapid Agile development cycles and CI/CD pipelines.",
            features: [
                "Sprint-based testing aligned with sprint cycles",
                "Continuous testing in CI/CD pipelines",
                "Automated regression suites for rapid validation",
                "Test-driven development (TDD) support",
                "DevOps workflow and automation integration",
            ],
        },
        {
            icon: <FaCloud className="text-2xl" />,
            title: "Cloud-Native Application Testing",
            color: "purple",
            description: "Address unique testing challenges of cloud-native, containerized architectures.",
            features: [
                "Multi-tenant data isolation and security validation",
                "Microservices and distributed systems testing",
                "Container and orchestration testing",
                "Serverless function and event-driven testing",
                "Auto-scaling and variable load validation",
            ],
        },
        {
            icon: <FaBrain className="text-2xl" />,
            title: "AI & Machine Learning Testing",
            color: "pink",
            description: "Validate ML model accuracy, fairness, robustness, and inference performance.",
            features: [
                "Model validation: accuracy, precision, recall, F1 scores",
                "Bias detection and mitigation in ML models",
                "Fairness testing across user groups",
                "Adversarial testing for model robustness",
                "Inference performance validation",
            ],
        },
        {
            icon: <FaDatabase className="text-2xl" />,
            title: "ERP & CRM Implementation Testing",
            color: "teal",
            description: "Ensure successful ERP and CRM implementations with comprehensive testing.",
            features: [
                "Configuration testing against business requirements",
                "Data migration accuracy validation from legacy systems",
                "Integration testing with other business systems",
                "User acceptance testing facilitation",
                "Post-go-live testing support",
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
            red: { bg: "bg-red-50", text: "text-red-600", gradient: "from-red-500 to-red-600" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", gradient: "from-orange-500 to-orange-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
            pink: { bg: "bg-pink-50", text: "text-pink-600", gradient: "from-pink-500 to-pink-600" },
            teal: { bg: "bg-teal-50", text: "text-teal-600", gradient: "from-teal-500 to-teal-600" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Service Implementations</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Managed Testing:{" "}
                        <span className="text-brand-blue">Specific Implementations</span>
                    </h2>
                </div>

                {/* Service Selector */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-wrap border-b border-gray-200">
                        {implementations.map((impl, index) => {
                            const colors = getColorClasses(impl.color);
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    aria-label={impl.title}
                                    className={`flex-1 min-w-0 px-3 py-3 text-xs font-medium transition-all duration-300 ${activeTab === index
                                            ? `${colors.bg} ${colors.text} border-b-2 border-current`
                                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <span className={activeTab === index ? colors.text : "text-gray-400"}>{impl.icon}</span>
                                        <span className="hidden md:inline">{impl.title.split(" ").slice(0, 2).join(" ")}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="p-8 bg-white">
                        {implementations.map((impl, index) => {
                            const colors = getColorClasses(impl.color);
                            return (
                                <div key={index} className={`${activeTab === index ? "block" : "hidden"}`}>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                                    <span className={colors.text}>{impl.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900">{impl.title}</h3>
                                            </div>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-4">{impl.description}</p>

                                            {/* Navigation arrows */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setActiveTab(activeTab === 0 ? implementations.length - 1 : activeTab - 1)}
                                                    aria-label="Previous implementation"
                                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <FaArrowLeft className="text-gray-500 text-sm" />
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab(activeTab === implementations.length - 1 ? 0 : activeTab + 1)}
                                                    aria-label="Next implementation"
                                                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <FaArrowRight className="text-gray-500 text-sm" />
                                                </button>
                                                <span className="text-sm text-gray-400 self-center ml-2">{index + 1} / {implementations.length}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities</h4>
                                            <div className="space-y-3">
                                                {impl.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className={`flex items-start space-x-3 ${colors.bg} rounded-lg p-3`}>
                                                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${colors.text === "text-indigo-600" ? "bg-indigo-500" : colors.text === "text-cyan-600" ? "bg-cyan-500" : colors.text === "text-green-600" ? "bg-green-500" : colors.text === "text-red-600" ? "bg-red-500" : colors.text === "text-orange-600" ? "bg-orange-500" : colors.text === "text-purple-600" ? "bg-purple-500" : colors.text === "text-pink-600" ? "bg-pink-500" : "bg-teal-500"}`}></div>
                                                        <span className="text-gray-700 text-sm">{feature}</span>
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

export default ManagedTestingImplementations;
