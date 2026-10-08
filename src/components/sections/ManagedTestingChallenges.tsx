"use client";

import React, { useState } from "react";
import {
    FaUserTie,
    FaTools,
    FaClipboardCheck,
    FaExpandArrowsAlt,
    FaShieldAlt,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

const ManagedTestingChallenges: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const challenges = [
        {
            icon: <FaUserTie className="text-xl" />,
            title: "The QA Talent Shortage and Rising Costs",
            color: "red",
            problem: "Recruiting and retaining skilled QA engineers is increasingly difficult. The talent market is competitive, salaries are rising, and training new QA staff takes months.",
            whyItMatters: [
                "Product managers need stable, experienced QA teams to maintain release velocity",
                "Finance teams worry about rising labor costs and budget unpredictability",
                "CTOs struggle with knowledge loss when experienced QA engineers leave",
            ],
            solutions: [
                "Global talent pool: Access to experienced QA professionals across US, UK, EU, India, Asia, and UAE",
                "Cost predictability: Fixed or outcome-based pricing eliminates salary escalation surprises",
                "Reduced turnover impact: Vendor manages team continuity; individual departures don't disrupt testing",
                "Continuous training: Vendor invests in keeping teams current with latest tools and methodologies",
                "Scalable expertise: Quickly scale testing capacity without lengthy recruitment cycles",
            ],
        },
        {
            icon: <FaTools className="text-xl" />,
            title: "Infrastructure, Tools, and Technology Investment",
            color: "orange",
            problem: "Building an in-house QA function requires significant infrastructure investment: test automation tools, performance testing platforms, security testing software, CI/CD integration, and monitoring tools.",
            whyItMatters: [
                "Finance teams see QA infrastructure as a cost burden with no direct revenue impact",
                "CTOs worry about tool selection and integration complexity",
                "Product managers want testing capabilities without infrastructure overhead",
            ],
            solutions: [
                "Tool optimization: Vendor selects and maintains optimal tools for your technology stack",
                "Licensing efficiency: Vendor leverages economies of scale across multiple clients",
                "Infrastructure management: No need to build or maintain testing infrastructure",
                "Continuous updates: Vendor keeps tools current with latest versions and capabilities",
                "Integration expertise: Vendor handles complex integrations with your CI/CD pipeline",
            ],
        },
        {
            icon: <FaClipboardCheck className="text-xl" />,
            title: "Testing Process Inconsistency and Quality Variability",
            color: "yellow",
            problem: "Without a structured testing process, quality becomes inconsistent. Different team members follow different approaches, test coverage varies, and critical scenarios are sometimes missed.",
            whyItMatters: [
                "Product managers experience unpredictable quality and unexpected production issues",
                "CTOs struggle with visibility into testing coverage and effectiveness",
                "Compliance teams worry about audit trails and process documentation",
            ],
            solutions: [
                "Standardized processes: Vendor implements proven methodologies (ISO 29119, ISTQB standards)",
                "Consistent quality: Standardized processes ensure consistent test coverage and quality",
                "Process documentation: Comprehensive documentation for audit and compliance",
                "Continuous improvement: Vendor optimizes processes based on metrics and learnings",
                "Quality metrics visibility: Clear, transparent reporting on quality metrics and trends",
            ],
        },
        {
            icon: <FaExpandArrowsAlt className="text-xl" />,
            title: "Scaling Testing Without Proportional Cost Increases",
            color: "blue",
            problem: "As your product grows and release frequency increases, testing needs grow exponentially. Scaling in-house QA requires hiring more people, increasing fixed costs, management overhead, and coordination complexity.",
            whyItMatters: [
                "Product managers want to accelerate release cycles but testing becomes a bottleneck",
                "Finance teams see testing costs growing faster than revenue",
                "CTOs struggle with team coordination and knowledge management at scale",
            ],
            solutions: [
                "Elastic scaling: Testing capacity scales up or down based on your needs without fixed overhead",
                "Cost efficiency: Scaling doesn't require proportional cost increases due to vendor economies of scale",
                "Rapid deployment: Vendor can quickly allocate additional resources without recruitment delays",
                "Maintained quality: Scaling doesn't compromise quality or introduce inconsistencies",
                "Flexible engagement: Pay only for the testing capacity you need, when you need it",
            ],
        },
        {
            icon: <FaShieldAlt className="text-xl" />,
            title: "Compliance, Security, and Risk Management",
            color: "purple",
            problem: "Enterprises in regulated industries face complex compliance requirements. Testing must validate security controls, audit logging, data protection, and regulatory compliance.",
            whyItMatters: [
                "Compliance officers need assurance that testing validates regulatory requirements",
                "CTOs worry about security vulnerabilities and compliance violations",
                "Finance teams fear regulatory fines and reputational damage",
            ],
            solutions: [
                "Compliance expertise: Deep experience with HIPAA, GDPR, SOC2, PCI-DSS, and other standards",
                "Security testing: Penetration testing, vulnerability assessment, and security audits",
                "Audit documentation: Comprehensive documentation for compliance audits and certifications",
                "Risk management: Vendor identifies and mitigates testing-related risks",
                "Regulatory alignment: Testing processes aligned with industry-specific requirements",
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; iconBg: string } } = {
            red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-100" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-100" },
            yellow: { bg: "bg-yellow-50", text: "text-yellow-600", iconBg: "bg-yellow-100" },
            blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Challenges Solved</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Five Biggest Challenges{" "}
                        <span className="text-brand-blue">Solved by Managed Testing</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {challenges.map((challenge, index) => {
                        const colors = getColorClasses(challenge.color);
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <span className={colors.text}>{challenge.icon}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-gray-400 font-semibold">Challenge {index + 1}</span>
                                            <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                                        </div>
                                    </div>
                                    {isOpen ? (
                                        <FaChevronUp className="text-brand-blue flex-shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="px-8 pb-6">
                                        {/* Problem */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-bold text-red-600 mb-2">The Problem:</h4>
                                            <p className="text-gray-600 text-sm">{challenge.problem}</p>
                                        </div>

                                        {/* Why It Matters */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-bold text-orange-600 mb-2">Why It Matters:</h4>
                                            <div className="space-y-1">
                                                {challenge.whyItMatters.map((item, i) => (
                                                    <div key={i} className="flex items-start space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-600 text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Solution */}
                                        <div>
                                            <h4 className="text-sm font-bold text-green-600 mb-2">How Managed Testing Solves It:</h4>
                                            <div className="space-y-1">
                                                {challenge.solutions.map((item, i) => (
                                                    <div key={i} className="flex items-start space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-600 text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingChallenges;
