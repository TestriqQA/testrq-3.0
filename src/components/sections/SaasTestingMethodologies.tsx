"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaCogs,
    FaTachometerAlt,
    FaShieldAlt,
    FaSyncAlt,
    FaDatabase,
    FaArrowRight,
} from "react-icons/fa";

const SaasTestingMethodologies: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const methodologies = [
        {
            id: "functional",
            title: "Functional Testing",
            icon: <FaCogs className="text-2xl" />,
            color: "cyan",
            description:
                "SaaS Application Testing validates business logic across multi-tenant scenarios with comprehensive user journey coverage.",
            features: [
                "Role-based access control (RBAC) testing: Verifying admin, user, and guest roles see appropriate data",
                "Workflow testing: Validating complete user journeys from signup through payment to data export",
                "Edge case identification: Testing boundary conditions (empty datasets, maximum file sizes, concurrent operations)",
                "Localization testing: Validating currency formatting, date handling, and language-specific features",
            ],
            link: "/functional-testing-services",
        },
        {
            id: "performance",
            title: "Performance & Scalability",
            icon: <FaTachometerAlt className="text-2xl" />,
            color: "orange",
            description:
                "SaaS performance and scalability testing measures system behavior under realistic conditions to ensure consistent user experience.",
            features: [
                "Baseline establishment: Measuring response times, throughput, and resource utilization under normal load",
                "Capacity planning: Determining maximum concurrent users before performance degrades",
                "Bottleneck identification: Using profiling tools for slow queries, memory leaks, or CPU-bound operations",
                "Scaling validation: Testing horizontal scaling (adding servers) and vertical scaling (increasing resources)",
            ],
            link: "/performance-testing-services",
        },
        {
            id: "security",
            title: "Security & Compliance",
            icon: <FaShieldAlt className="text-2xl" />,
            color: "red",
            description:
                "SaaS security testing goes beyond vulnerability scanning to validate complete security architecture and compliance posture.",
            features: [
                "Penetration testing: Simulating attacker behavior to identify exploitable vulnerabilities",
                "Data flow analysis: Tracing how sensitive data moves through the system with encryption at each stage",
                "Access control validation: Testing authorization checks at every API endpoint and database query",
                "Compliance auditing: Validating adherence to SOC 2, GDPR, HIPAA, PCI-DSS, or industry-specific standards",
            ],
            link: "/security-testing",
        },
        {
            id: "regression",
            title: "Automated Regression",
            icon: <FaSyncAlt className="text-2xl" />,
            color: "indigo",
            description:
                "Automated regression testing for SaaS products prevents new code from breaking existing functionality with fast CI feedback.",
            features: [
                "Test case prioritization: Running critical path tests first to provide fast feedback",
                "Flaky test elimination: Identifying and fixing tests that fail intermittently due to timing issues",
                "Test data management: Maintaining consistent test datasets across environments",
                "Continuous integration: Running tests automatically on every code commit",
            ],
            link: "/regression-testing",
        },
        {
            id: "isolation",
            title: "Multi-Tenant Isolation",
            icon: <FaDatabase className="text-2xl" />,
            color: "purple",
            description:
                "SaaS data integrity and multi-tenant isolation testing specifically validates tenant separation across all infrastructure layers.",
            features: [
                "Data leakage detection: Automated scanning for queries that return data across tenant boundaries",
                "Cross-tenant permission testing: Attempting to access other tenants' resources with manipulated IDs",
                "Shared resource testing: Validating caches, queues, and background jobs don't leak data between tenants",
                "Backup and recovery testing: Ensuring restoration procedures don't mix customer data",
            ],
            link: "/automation-testing-services",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
            red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Testing Methodologies</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SaaS Testing Services:{" "}
                        <span className="text-brand-blue">Specific Methodologies</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our specialized SaaS testing methodologies cover every layer of
                        your cloud application — from business logic to infrastructure.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap border-b border-gray-200">
                        {methodologies.map((method, index) => {
                            const colors = getColorClasses(method.color);
                            return (
                                <button
                                    key={method.id}
                                    aria-label={method.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                                            ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex flex-col items-center justify-center space-x-2">
                                        <span className={activeTab === index ? colors.text : "text-gray-400"}>
                                            {method.icon}
                                        </span>
                                        <span className="hidden sm:inline text-xs mt-1">{method.title}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 bg-white">
                        {methodologies.map((method, index) => {
                            const colors = getColorClasses(method.color);
                            return (
                                <div
                                    key={method.id}
                                    className={`${activeTab === index ? "block" : "hidden"}`}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                                    <span className={colors.text}>{method.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {method.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                {method.description}
                                            </p>
                                            <Link
                                                href={method.link}
                                                className="bg-brand-blue text-white inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                            >
                                                Learn More <FaArrowRight />
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                Key Testing Activities
                                            </h4>
                                            <div className="space-y-4">
                                                {method.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
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

export default SaasTestingMethodologies;
