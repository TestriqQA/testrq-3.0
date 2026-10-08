"use client";

import React, { useState } from "react";
import {
    FaSearch,
    FaUsersCog,
    FaCogs,
    FaRocket,
    FaExpandArrowsAlt,
} from "react-icons/fa";

const ManagedTestingBlueprint: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            icon: <FaSearch className="text-xl" />,
            title: "Assessment & Strategy",
            color: "indigo",
            phase: "Phase 1",
            activities: [
                { name: "Current State Analysis", detail: "Evaluate existing QA function, testing processes, tool usage, team structure, and quality metrics" },
                { name: "Business Objective Alignment", detail: "Understand business goals, release velocity targets, quality standards, and compliance requirements" },
                { name: "Risk Identification", detail: "Identify highest-risk areas of your application and prioritize testing accordingly" },
                { name: "Engagement Model Design", detail: "Design the engagement model—dedicated team, augmentation, specialized testing, or hybrid" },
                { name: "SLA & KPI Definition", detail: "Establish clear Service Level Agreements and Key Performance Indicators" },
            ],
        },
        {
            icon: <FaUsersCog className="text-xl" />,
            title: "Team Mobilization & Onboarding",
            color: "cyan",
            phase: "Phase 2",
            activities: [
                { name: "Dedicated QA Team Assignment", detail: "Assign test engineers, automation specialists, and a testing manager as extensions of your org" },
                { name: "Knowledge Transfer", detail: "Comprehensive sessions to understand your application, architecture, and testing priorities" },
                { name: "Tool & Environment Setup", detail: "Establish testing infrastructure, configure tools, integrate with CI/CD, set up environments" },
                { name: "Process Implementation", detail: "Implement standardized processes aligned with ISO 29119 and ISTQB standards" },
                { name: "Baseline Establishment", detail: "Establish baseline quality metrics and testing coverage to measure improvement" },
            ],
        },
        {
            icon: <FaCogs className="text-xl" />,
            title: "Continuous Testing Execution",
            color: "green",
            phase: "Phase 3",
            activities: [
                { name: "Test Planning & Design", detail: "Develop comprehensive test plans with scenarios, coverage areas, and risk-based priorities" },
                { name: "Test Execution", detail: "Execute tests across functional, performance, security, and compliance dimensions" },
                { name: "Defect Management", detail: "Identify, document, and track defects through resolution with clear visibility into quality" },
                { name: "Regression Testing", detail: "Maintain and execute automated regression test suites to prevent regressions" },
                { name: "Continuous Reporting", detail: "Real-time reporting on quality metrics, test coverage, defect trends, and SLA compliance" },
            ],
        },
        {
            icon: <FaRocket className="text-xl" />,
            title: "Process Optimization & Improvement",
            color: "orange",
            phase: "Phase 4",
            activities: [
                { name: "Metrics Analysis", detail: "Analyze quality metrics to identify trends, root causes, and improvement opportunities" },
                { name: "Process Optimization", detail: "Optimize testing processes based on metrics and learnings for better efficiency" },
                { name: "Tool Optimization", detail: "Evaluate and optimize tool usage, improving automation coverage and reducing manual effort" },
                { name: "Team Development", detail: "Invest in team training and development, keeping skills current with latest technologies" },
                { name: "Strategic Reviews", detail: "Quarterly strategic reviews to assess progress and adjust the engagement as needed" },
            ],
        },
        {
            icon: <FaExpandArrowsAlt className="text-xl" />,
            title: "Scaling & Evolution",
            color: "purple",
            phase: "Phase 5",
            activities: [
                { name: "Capacity Scaling", detail: "Scale testing capacity up or down without disrupting quality or introducing inconsistencies" },
                { name: "Technology Evolution", detail: "Evolve testing approaches as your technology stack changes, adopting new tools and methods" },
                { name: "Scope Expansion", detail: "Expand testing scope as your product grows, maintaining coverage and quality metrics" },
                { name: "Engagement Evolution", detail: "Adjust the engagement model as your needs evolve—dedicated teams to specialized services" },
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string; ring: string } } = {
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600", ring: "ring-indigo-300" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600", ring: "ring-cyan-300" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600", ring: "ring-green-300" },
            orange: { bg: "bg-orange-50", text: "text-orange-600", gradient: "from-orange-500 to-orange-600", ring: "ring-orange-300" },
            purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-purple-600", ring: "ring-purple-300" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Our Methodology</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testriq&apos;s Managed Testing{" "}
                        <span className="text-brand-blue">Blueprint</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Phase Nav */}
                    <div className="lg:col-span-4">
                        <div className="space-y-3 sticky top-24">
                            {phases.map((phase, index) => {
                                const colors = getColorClasses(phase.color);
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActivePhase(index)}
                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 ${activePhase === index
                                                ? `${colors.bg} ring-2 ${colors.ring} shadow-md`
                                                : "bg-gray-50 hover:bg-gray-100"
                                            } cursor-pointer`}
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${activePhase === index
                                                ? `bg-gradient-to-br ${colors.gradient} text-white`
                                                : "bg-gray-200 text-gray-500"
                                            }`}>
                                            {phase.icon}
                                        </div>
                                        <div>
                                            <div className={`text-xs font-bold ${activePhase === index ? colors.text : "text-gray-400"
                                                }`}>{phase.phase}</div>
                                            <div className={`text-sm font-semibold ${activePhase === index ? "text-gray-900" : "text-gray-600"
                                                }`}>{phase.title}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Phase Content */}
                    <div className="lg:col-span-8">
                        {phases.map((phase, index) => {
                            const colors = getColorClasses(phase.color);
                            return (
                                <div key={index} className={`${activePhase === index ? "block" : "hidden"}`}>
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-white`}>
                                                {phase.icon}
                                            </div>
                                            <div>
                                                <div className={`text-xs font-bold ${colors.text}`}>{phase.phase}</div>
                                                <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {phase.activities.map((activity, actIndex) => (
                                                <div key={actIndex} className={`${colors.bg} rounded-xl p-4 border border-gray-100`}>
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{activity.name}</h4>
                                                    <p className="text-gray-600 text-sm">{activity.detail}</p>
                                                </div>
                                            ))}
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

export default ManagedTestingBlueprint;
