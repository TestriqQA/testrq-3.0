"use client";

import React, { useState } from "react";
import {
    FaSearch,
    FaLayerGroup,
    FaRobot,
    FaServer,
    FaChartBar,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

const SaasTestingStrategy: React.FC = () => {
    const [openStep, setOpenStep] = useState<number | null>(0);

    const strategy = [
        {
            icon: <FaSearch className="text-xl" />,
            title: "Risk Assessment",
            description: "Identify the highest-impact failure scenarios for your SaaS application.",
            items: [
                "Data breaches or privacy violations",
                "Revenue-impacting outages",
                "Compliance violations",
                "Performance degradation affecting user retention",
            ],
        },
        {
            icon: <FaLayerGroup className="text-xl" />,
            title: "Test Pyramid Design",
            description: "Allocate testing effort across layers for optimal coverage and speed.",
            items: [
                "Unit tests (60%): Fast, run on every commit",
                "Integration tests (25%): Validate component interactions",
                "End-to-end tests (10%): Validate complete workflows",
                "Manual testing (5%): Exploratory and usability testing",
            ],
        },
        {
            icon: <FaRobot className="text-xl" />,
            title: "Automation Strategy",
            description: "Determine what to automate for maximum impact.",
            items: [
                "Critical user workflows",
                "Regression-prone areas",
                "Performance-sensitive operations",
                "Compliance-related validations",
            ],
        },
        {
            icon: <FaServer className="text-xl" />,
            title: "Environment Strategy",
            description: "Maintain appropriate test environments with environmental parity.",
            items: [
                "Development: For developer testing",
                "Staging: Production-like environment for comprehensive testing",
                "Production: With monitoring and canary deployments for gradual rollout",
            ],
        },
        {
            icon: <FaChartBar className="text-xl" />,
            title: "Metrics & Monitoring",
            description: "Track metrics that indicate quality and drive improvements.",
            items: [
                "Test coverage and execution time",
                "Defect detection rates by testing phase",
                "Production incident rates and severity",
                "Customer-reported issues",
            ],
        },
    ];

    const bestPractices = [
        {
            title: "Test Data Management",
            items: [
                "Use production-like data volumes in staging",
                "Implement data masking for sensitive information",
                "Automate test data provisioning",
            ],
        },
        {
            title: "Performance Testing",
            items: [
                "Establish baselines for critical paths",
                "Test under realistic traffic patterns",
                "Identify regressions early",
            ],
        },
        {
            title: "Security Testing",
            items: [
                "Test throughout development, not just before release",
                "Include in CI/CD pipelines",
                "Regular penetration and vulnerability assessments",
            ],
        },
        {
            title: "Multi-Tenant Testing",
            items: [
                "Test data isolation with concurrent tenants",
                "Validate tenant customizations don't affect others",
                "Verify billing accuracy across configurations",
            ],
        },
        {
            title: "Continuous Integration",
            items: [
                "Run tests on every code commit",
                "Fail builds when tests fail or coverage drops",
                "Provide fast feedback (under 10 minutes)",
            ],
        },
    ];

    const failures = [
        { type: "Cross-tenant data leakage", cause: "Insufficient tenant filtering", prevention: "Automated data isolation testing" },
        { type: "Performance degradation", cause: "Undetected N+1 queries / memory leaks", prevention: "Continuous performance monitoring" },
        { type: "Compliance violations", cause: "Inadequate audit logging", prevention: "Compliance testing in CI/CD" },
        { type: "Billing errors", cause: "Insufficient edge case testing", prevention: "Comprehensive billing workflow tests" },
        { type: "API integration failures", cause: "Inadequate error handling", prevention: "Contract testing & retry validation" },
        { type: "Availability issues", cause: "Insufficient DR testing", prevention: "Regular failover & chaos engineering" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Strategy Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Strategy & Best Practices</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Building a SaaS{" "}
                        <span className="text-brand-blue">Testing Strategy</span>
                    </h2>
                </div>

                {/* Accordion Strategy Steps */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="space-y-3">
                        {strategy.map((step, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                                <button
                                    onClick={() => setOpenStep(openStep === index ? null : index)}
                                    className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-brand-blue">{step.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                        </div>
                                    </div>
                                    {openStep === index ? (
                                        <FaChevronUp className="text-brand-blue" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400" />
                                    )}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openStep === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="px-8 pb-5">
                                        <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                                        <div className="space-y-2">
                                            {step.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-start space-x-3">
                                                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Best Practices */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        SaaS Testing <span className="text-brand-blue">Best Practices</span>
                    </h3>
                    <div className="grid md:grid-cols-5 gap-4">
                        {bestPractices.map((practice, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all">
                                <h4 className="font-bold text-gray-900 text-sm mb-3">{practice.title}</h4>
                                <div className="space-y-2">
                                    {practice.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-start space-x-2">
                                            <div className="w-1 h-1 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600 text-xs">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Common Failures Prevention Table */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Common Failures &{" "}
                        <span className="text-brand-blue">Prevention</span>
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Failure Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Cause</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Prevention</th>
                                </tr>
                            </thead>
                            <tbody>
                                {failures.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"} hover:bg-gray-50 transition-colors`}
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-red-600">{row.type}</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{row.cause}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                                                {row.prevention}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaasTestingStrategy;
