// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from 'next/link';
import React from "react";
import { FaExclamationTriangle, FaLink, FaSync, FaTools, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";

const QADocumentationChallenges = () => {
    const challenges = [
        {
            id: 1,
            title: "Fixing Ad-Hoc Inconsistency",
            description: <>Teams suffer from &apos;Consistency Decay&apos; that hinders onboarding. We implement <Link href="/manual-testing-services" className="text-brand-blue underline decoration-brand-blue">ISO/IEC/IEEE 29119-3:2021 templates</Link> for standardized policies.</>,
            solution: "Standardized template library across Agile, Waterfall, or Hybrid models.",
            icon: <FaProjectDiagram className="text-blue-600" />,
            tag: "ISO Standards"
        },
        {
            id: 2,
            title: "Solving the 68% Traceability Gap",
            description: "68% of teams struggle with fragmented tools that break the link between requirements and defects.",
            solution: "RTM frameworks linking test cases directly to requirement IDs for rigorous Quality Gates.",
            icon: <FaLink className="text-red-600" />,
            tag: "Requirement Mapping"
        },
        {
            id: 3,
            title: "Scaling at AI & CI/CD Speed",
            description: <>Documentation often lags behind the codebase in 90% of organizations utilizing <Link href="/automation-testing-services" className="text-brand-blue underline decoration-brand-blue">CI/CD pipelines</Link>.</>,
            solution: "6-step maintenance process evolving with code via usage analytics to eliminate debt.",
            icon: <FaSync className="text-purple-600" />,
            tag: "Pipeline Maintenance"
        },
        {
            id: 4,
            title: "Overcoming Tooling Chaos",
            description: <>Data scattered across wikis and Notion makes compliance evidence impossible to assemble. We organize centralized artifacts within a single <Link href="/technology-stack" className="text-brand-blue underline decoration-brand-blue">integrated system</Link>.</>,
            solution: "Centralized artifacts within a single integrated system (Jira, Confluence, Git-Book).",
            icon: <FaTools className="text-orange-600" />,
            tag: "Artifact Centralization"
        },
        {
            id: 5,
            title: "Zero-Finding Regulatory Audits",
            description: <>For MedTech & FinTech, documentation is a legal mandate <Link href="/healthcare-testing-services" className="text-brand-blue underline decoration-brand-blue">(FDA 21 CFR Part 11, HIPAA)</Link>.</>,
            solution: "Rigorous validation protocols achieving 100% first-time FDA compliance.",
            icon: <FaCheckCircle className="text-green-600" />,
            tag: "Legal Compliance"
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                        <FaExclamationTriangle className="mr-2" />
                        The 2026 Global Challenge
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Solving the <span className="text-brand-blue">&quot;Documentation Debt&quot;</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Modern QA teams face hurdles in consistency, traceability, and speed as AI-driven development becomes standard. Testriq directly addresses these 2026 pain points.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge) => (
                        <div key={challenge.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
                                    {challenge.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    {challenge.tag}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{challenge.id}. {challenge.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{challenge.description}</p>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <p className="text-blue-900 font-semibold text-sm">Our Solution:</p>
                                <p className="text-blue-800 text-sm leading-relaxed">{challenge.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QADocumentationChallenges;
