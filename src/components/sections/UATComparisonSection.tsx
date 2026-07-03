"use client";

import React from "react";
const UATComparisonSection: React.FC = () => {
    const data = [
        { factor: "Conducted By", uat: "End-users", system: "QA Pros", integration: "QA Pros", unit: "Developers" },
        { factor: "Focus", uat: "Business Workflows", system: "Full System Sync", integration: "Component Interaction", unit: "Individual Units" },
        { factor: "Scope", uat: "End-to-End Processes", system: "Complete Module", integration: "Interface/API", unit: "Function/Class" },
        { factor: "Criteria", uat: "Business Needs", system: "Technical Specs", integration: "Integration Specs", unit: "Logic Correctness" },
        { factor: "Timing", uat: "Final Layer", system: "Mid-Cycle", integration: "Development", unit: "Early Phase" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        UAT vs. Other <span className="text-brand-blue">Testing Phases</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A complete comparison to show where UAT fits in the modern quality assurance lifecycle.
                    </p>
                </div>

                <div
      className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
    >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-slate-200">
                                <th className="p-6 text-sm font-black text-slate-500 uppercase tracking-widest">Factor</th>
                                <th className="p-6 bg-brand-blue text-white font-black text-center">UAT</th>
                                <th className="p-6 text-slate-700 font-bold text-center">System</th>
                                <th className="p-6 text-slate-700 font-bold text-center">Integration</th>
                                <th className="p-6 text-slate-700 font-bold text-center">Unit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {data.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-900">{row.factor}</td>
                                    <td className="p-6 text-center text-brand-blue font-black bg-brand-blue/10">{row.uat}</td>
                                    <td className="p-6 text-center text-slate-600">{row.system}</td>
                                    <td className="p-6 text-center text-slate-600 font-medium">{row.integration}</td>
                                    <td className="p-6 text-center text-slate-600">{row.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UATComparisonSection;
