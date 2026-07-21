"use client";

import React, { useState } from "react";
import {
    FaDatabase,
    FaSyncAlt,
    FaTachometerAlt,
    FaShieldAlt,
    FaPlug,
    FaDesktop,
} from "react-icons/fa";

const SaasTestingChallenges: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const challenges = [
        {
            id: "multi-tenancy",
            title: "Multi-Tenancy & Data Isolation",
            icon: <FaDatabase className="text-2xl" />,
            color: "cyan",
            description:
                "Multi-tenant SaaS application testing validates that customer data remains isolated despite sharing the same database, application servers, and infrastructure.",
            points: [
                "Row-level security testing: Verifying SQL queries and ORM frameworks correctly filter data by tenant ID",
                "Cross-tenant data leakage detection: Automated scanning for queries that return data across tenant boundaries",
                "Session isolation validation: Ensuring authentication tokens and session data cannot be hijacked across tenants",
                "API endpoint isolation: Testing that REST/GraphQL endpoints respect tenant boundaries even with manipulated parameters",
            ],
            impact:
                "Real-world failures in this area have resulted in data breaches affecting millions of users.",
        },
        {
            id: "regression",
            title: "Frequent Releases & Regression Risk",
            icon: <FaSyncAlt className="text-2xl" />,
            color: "indigo",
            description:
                "Continuous testing for SaaS delivery pipelines prevents new deployments from breaking existing functionality. SaaS companies deploying daily face exponential regression risk.",
            points: [
                "Automated regression testing must run in under 30 minutes to not block deployments",
                "Test automation frameworks need to balance coverage with execution speed",
                "CI/CD integration requires tests to fail fast and provide actionable diagnostics",
                "Smoke testing validates core workflows immediately after deployment",
            ],
            impact:
                "Companies attempting manual testing with daily releases typically experience 15-20% of deployments causing production incidents.",
        },
        {
            id: "performance",
            title: "Performance Under Variable Load",
            icon: <FaTachometerAlt className="text-2xl" />,
            color: "orange",
            description:
                "SaaS load and stress testing services must simulate realistic traffic patterns, not just peak capacity.",
            points: [
                "Baseline performance metrics: Establishing normal response times (p50, p95, p99 latencies)",
                "Spike testing: Validating behavior when traffic increases 10x in minutes",
                "Sustained load testing: Running at 80% capacity for 24+ hours to detect memory leaks",
                "Geographic distribution testing: Simulating users across multiple regions with varying conditions",
            ],
            impact:
                "A 100ms increase in page load time reduces conversion rates by 7%. A complete outage costs SaaS companies $5,600 per minute.",
        },
        {
            id: "security",
            title: "Security in Multi-Tenant Environments",
            icon: <FaShieldAlt className="text-2xl" />,
            color: "red",
            description:
                "SaaS security and compliance testing (SOC2/GDPR) requires validation beyond traditional penetration testing.",
            points: [
                "Data encryption validation: Confirming encryption at rest and in transit (TLS 1.2+)",
                "API authentication testing: Validating OAuth 2.0, JWT token handling, and API key rotation",
                "GDPR/HIPAA compliance verification: Testing data retention policies, user deletion workflows, and audit logging",
                "Third-party API security testing: Validating integrations don't expose customer data",
            ],
            impact:
                "GDPR violations carry fines up to €20 million or 4% of annual revenue. SOC 2 Type II requires demonstrating controls over 6 months.",
        },
        {
            id: "api",
            title: "API Integration Testing",
            icon: <FaPlug className="text-2xl" />,
            color: "purple",
            description:
                "API integration testing for SaaS platforms validates both internal microservices and external third-party connections.",
            points: [
                "Contract testing: Ensuring API producers and consumers maintain compatible interfaces",
                "Error handling: Testing timeout scenarios, rate limiting, and graceful degradation",
                "Data consistency: Validating data remains consistent across services during failures",
                "Webhook reliability: Testing asynchronous callbacks for delivery, retry logic, and idempotency",
            ],
            impact:
                "Modern SaaS applications average 15-20 third-party API integrations. A single failure can cascade through the system.",
        },
        {
            id: "compatibility",
            title: "Cross-Platform Compatibility",
            icon: <FaDesktop className="text-2xl" />,
            color: "green",
            description:
                "SaaS compatibility testing across browsers and devices ensures consistent user experience across all platforms.",
            points: [
                "Browser compatibility: Testing across Chrome, Firefox, Safari, Edge on Windows, macOS, iOS, Android",
                "Responsive design validation: Ensuring layouts work from 320px (mobile) to 4K displays",
                "Network condition testing: Simulating 3G, 4G, and WiFi with packet loss and latency",
                "Accessibility compliance: WCAG 2.1 AA standards for keyboard navigation and screen readers",
            ],
            impact:
                "Approximately 25% of SaaS users access applications on mobile devices. Broken mobile experiences directly reduce retention.",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
            red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
            green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
        };
        return colorMap[color] || colorMap.cyan;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Core Challenges & Solutions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Core SaaS Testing{" "}
                        <span className="text-brand-blue">Challenges</span> & Technical
                        Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Cloud-native SaaS applications present unique testing challenges
                        that require specialized methodologies and tools.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap border-b border-gray-200">
                        {challenges.map((challenge, index) => {
                            const colors = getColorClasses(challenge.color);
                            return (
                                <button
                                    key={challenge.id}
                                    aria-label={challenge.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 min-w-0 px-3 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                                            ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <span className={activeTab === index ? colors.text : "text-gray-400"}>
                                            {challenge.icon}
                                        </span>
                                        <span className="hidden md:inline text-xs mt-1">{challenge.title}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        {challenges.map((challenge, index) => {
                            const colors = getColorClasses(challenge.color);
                            return (
                                <div
                                    key={challenge.id}
                                    className={`${activeTab === index ? "block" : "hidden"}`}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                                    <span className={colors.text}>{challenge.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {challenge.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                {challenge.description}
                                            </p>
                                            {/* Impact callout */}
                                            <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                                                <p className={`text-sm font-medium ${colors.text}`}>
                                                    ⚠️ {challenge.impact}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                Technical Testing Requirements
                                            </h4>
                                            <div className="space-y-4">
                                                {challenge.points.map((point, pointIndex) => (
                                                    <div key={pointIndex} className="flex items-start space-x-3">
                                                        <div className={`w-2 h-2 ${colors.text === "text-cyan-600" ? "bg-cyan-500" : colors.text === "text-indigo-600" ? "bg-indigo-500" : colors.text === "text-orange-600" ? "bg-orange-500" : colors.text === "text-red-600" ? "bg-red-500" : colors.text === "text-purple-600" ? "bg-purple-500" : "bg-green-500"} rounded-full mt-2 flex-shrink-0`}></div>
                                                        <span className="text-gray-600 text-sm leading-relaxed">
                                                            {point}
                                                        </span>
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

export default SaasTestingChallenges;
