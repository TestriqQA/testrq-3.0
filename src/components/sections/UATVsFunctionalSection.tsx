"use client";

import { FaArrowsLeftRight } from "react-icons/fa6";

const UATVsFunctionalSection = () => {
    const data = [
        { label: "Focus", uat: "Business requirements and user workflows", func: "Technical functionality and specifications" },
        { label: "Conducted By", uat: "End-users and business stakeholders", func: "QA professionals and regular testers" },
        { label: "Perspective", uat: "Business and user perspective", func: "Technical and specification perspective" },
        { label: "Scope", uat: "End-to-end business processes", func: "Individual features and functions" },
        { label: "Questions Answered", uat: "Can users accomplish their real-world tasks?", func: "Does this work according to technical specs?" },
        { label: "Timing", uat: "Final phase before production", func: "Earlier in testing lifecycle" },
        { label: "Outcome", uat: "Business sign-off for deployment", func: "Technical validation of functionality" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3B82F6_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight">
                        UAT <span className="text-brand-blue">vs.</span> Functional Testing
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Understanding the distinction between technical correctness and business alignment. While Functional Testing
                        checks the mechanics, UAT checks the value.
                    </p>
                </div>

                <div
      className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl shadow-blue-500/10"
    >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-700/50">
                                    <th className="py-6 px-6 sm:px-8 text-sm font-black text-slate-400 uppercase tracking-widest">Aspect</th>
                                    <th className="py-6 px-6 sm:px-8 bg-brand-blue/20 text-brand-blue font-black text-lg text-center border-l border-slate-700">User Acceptance Testing</th>
                                    <th className="py-6 px-6 sm:px-8 text-slate-300 font-bold text-center border-l border-slate-700">Functional Testing</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {data.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-700/30 transition-colors group">
                                        <td className="py-5 px-6 sm:px-8 font-bold text-slate-300 group-hover:text-white">{row.label}</td>
                                        <td className="py-5 px-6 sm:px-8 text-center text-blue-100 bg-brand-blue/5 border-l border-slate-700 font-medium">
                                            {row.uat}
                                        </td>
                                        <td className="py-5 px-6 sm:px-8 text-center text-slate-400 border-l border-slate-700 italic">
                                            {row.func}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-4 bg-slate-800 p-4 rounded-full border border-slate-700 text-sm text-slate-400">
                        <span className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white"><FaArrowsLeftRight /></span>
                        Functional checks the specifications. <span className="font-bold text-brand-blue italic underline">UAT checks the business objective.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATVsFunctionalSection;
