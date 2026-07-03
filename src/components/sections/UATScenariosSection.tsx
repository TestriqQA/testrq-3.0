"use client";

import React from "react";
import { FaChartLine, FaHeartbeat, FaShoppingCart, FaExchangeAlt } from "react-icons/fa";

const UATScenariosSection: React.FC = () => {
    const scenarios = [
        {
            title: "Enterprise ERP Implementation",
            icon: <FaChartLine />,
            challenge: "Replacing legacy systems across 50+ business processes.",
            approach: "Identified 100+ scenarios and resolve 45 critical issues before deployment.",
            result: "Smooth deployment with record high user satisfaction."
        },
        {
            title: "Healthcare System Migration",
            icon: <FaHeartbeat />,
            challenge: "Migrating to cloud-based EHR with strict HIPAA standards.",
            approach: "Validated 80+ clinical workflows and HIPAA compliance protocols.",
            result: "Confident clinical staff and 100% data protection validation."
        },
        {
            title: "E-Commerce Platform Launch",
            icon: <FaShoppingCart />,
            challenge: "Launching new platform before peak holiday season.",
            approach: "Rapid 2-week UAT covering complex checkout and payment flows.",
            result: "Zero technical issues during record-breaking holiday sales."
        },
        {
            title: "Digital Transformation Initiative",
            icon: <FaExchangeAlt />,
            challenge: "Significant business process changes in financial services.",
            approach: "6-week UAT with deep change management and process validation.",
            result: "30% improvement in overall process efficiency post-launch."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Real-World <span className="text-brand-blue italic">UAT Scenarios</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        See how our structured user acceptance testing approach delivers tangible value across
                        different industries and complexities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {scenarios.map((item, idx) => (
                        <div
      key={idx}
      className="flex gap-6 p-8 rounded-2xl border border-slate-200 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:border-brand-blue transition-all group"
    >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-3xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                                {item.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors tracking-tight">{item.title}</h3>

                                <div className="space-y-3">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">The Challenge</p>
                                        <p className="text-sm font-medium text-gray-700 leading-relaxed">{item.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-1">Our Approach</p>
                                        <p className="text-sm font-medium text-gray-700 leading-relaxed">{item.approach}</p>
                                    </div>
                                    <div className="pt-2">
                                        <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                                            Result: {item.result}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UATScenariosSection;
