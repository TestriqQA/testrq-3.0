"use client";

import React from "react";
const ArchitectureMethodologySection: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Discovery & Documentation Review",
            description: "We analyze your existing system documentation, diagrams, and business requirements to understand the 'as-is' state.",
        },
        {
            number: "2",
            title: "Deep-Dive Technical Audit",
            description: "Our architects perform a comprehensive review of the codebase, infrastructure, and data models using advanced diagnostic tools.",
        },
        {
            number: "3",
            title: "Risk & Gap Analysis",
            description: "We identify deviations from industry best practices, potential failure points, and areas of excessive technical debt.",
        },
        {
            number: "4",
            title: "Strategic Roadmap & Recommendations",
            description: "We deliver a detailed report with prioritized, actionable recommendations for architectural improvement and modernization.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our Architecture Inspection Methodology: <span className="text-blue-400">The Blueprint for Success</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        We follow a rigorous, four-stage process to ensure architectural excellence:
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/20 hidden lg:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
      key={index}
      className="relative z-10 flex flex-col items-center text-center group"
    >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-8 group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-wider">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm px-4">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureMethodologySection;
