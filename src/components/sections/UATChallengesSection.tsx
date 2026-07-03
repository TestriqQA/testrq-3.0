"use client";

import React from "react";
import { FaExclamationTriangle, FaUserAlt, FaDatabase, FaProjectDiagram, FaBalanceScale } from "react-icons/fa";

const UATChallengesSection: React.FC = () => {
    const challenges = [
        {
            icon: <FaExclamationTriangle className="text-amber-500" />,
            title: "Business Requirements Misalignment",
            problem: "Technical teams build according to specs that may not reflect actual business needs.",
            solution: "UAT validates that the software actually supports real-world business processes and workflows."
        },
        {
            icon: <FaUserAlt className="text-brand-blue" />,
            title: "User Experience and Usability Issues",
            problem: "Technically correct software can still be difficult or frustrating for end-users to navigate.",
            solution: "Real user feedback identifies usability bottlenecks before they impact production adoption."
        },
        {
            icon: <FaDatabase className="text-indigo-500" />,
            title: "Data Integrity and Migration Issues",
            problem: "Incorrect migration can corrupt business data or violate critical compliance requirements.",
            solution: "UAT validates data accuracy and completeness in realistic production scenarios."
        },
        {
            icon: <FaProjectDiagram className="text-emerald-500" />,
            title: "Business Process Workflow Validation",
            problem: "Functional tests often miss broken or inefficient end-to-end business workflows.",
            solution: "Validates complete processes to ensure operations aren't disrupted post-deployment."
        },
        {
            icon: <FaBalanceScale className="text-purple-500" />,
            title: "Compliance and Regulatory Requirements",
            problem: "Compliance controls must work in real-world operations, not just on paper.",
            solution: "Operational acceptance testing confirms sensitive data is protected and audit trails work correctly."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                            Solving the <span className="text-brand-blue underline decoration-brand-blue/40 underline-offset-8">Biggest Challenges</span> in Enterprise Deployment
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Enterprise organizations face specific hurdles that professional UAT testing services are
                            uniquely designed to solve, ensuring successful software adoption.
                        </p>
                    </div>
                    <div className="bg-gray-50 border border-slate-200 p-4 rounded-xl text-sm font-semibold text-slate-500 uppercase tracking-widest">
                        UAT Value Proposition
                    </div>
                </div>

                <div className="space-y-6">
                    {challenges.map((item, idx) => (
                        <div
      key={idx}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-50 border border-slate-200 p-6 lg:p-8 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-brand-blue transition-all duration-500"
    >
                            <div className="lg:col-span-1 flex items-center justify-center">
                                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                                <div className="inline-flex items-center gap-2 text-xs font-black text-amber-600 uppercase mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                                    The Problem
                                </div>
                                <p className="text-gray-600 italic leading-relaxed text-sm">
                                    {item.problem}
                                </p>
                            </div>
                            <div className="lg:col-span-6 flex flex-col justify-center bg-white/60 rounded-2xl p-6 border border-white group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors">
                                <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 uppercase mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                    UAT Solution
                                </div>
                                <p className="text-gray-900 font-medium leading-relaxed">
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UATChallengesSection;
