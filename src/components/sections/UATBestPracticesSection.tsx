"use client";

import React from "react";
import { FaClock, FaBullseye, FaChartBar, FaGraduationCap, FaLayerGroup, FaFileSignature, FaSearchPlus } from "react-icons/fa";

const UATBestPracticesSection: React.FC = () => {
    const practices = [
        {
            icon: <FaClock />,
            title: "Involve Users Early",
            desc: "Successful UAT requires early involvement in requirements and design reviews, not just at the final stage."
        },
        {
            icon: <FaBullseye />,
            title: "Clear Acceptance Criteria",
            desc: "Define specific, measurable success metrics aligned with business requirements before testing begins."
        },
        {
            icon: <FaLayerGroup />,
            title: "Realistic Scenarios & Data",
            desc: "Use actual (anonymized) business data and end-to-end workflows to validate real-world usage."
        },
        {
            icon: <FaGraduationCap />,
            title: "Adequate Training",
            desc: "Provide comprehensive training to end-users on the software and the UAT documentation process."
        },
        {
            icon: <FaSearchPlus />,
            title: "Structured Issue Tracking",
            desc: "Standardize documentation and prioritize issues based strictly on business impact and operations."
        },
        {
            icon: <FaChartBar />,
            title: "Business Process Focus",
            desc: "Test complete processes and their variations rather than just isolated technical features."
        },
        {
            icon: <FaFileSignature />,
            title: "Formal Sign-Off",
            desc: "Ensure all activities and risk acceptances are documented for a confident deployment decision."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <div className="inline-block bg-brand-blue text-white text-[10px] font-black uppercase tracking-[3px] px-3 py-1 rounded-md mb-6">
                            Best Practices
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                            Ensuring <span className="text-brand-blue italic">Success</span> through Proven Methods
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                            Organizations can maximize the effectiveness of their user acceptance testing by following these
                            seven industry-leading standards.
                        </p>
                        <div className="bg-slate-800/50 border border-slate-700 p-5 md:p-6 rounded-2xl w-full">
                            <p className="text-sm italic text-slate-300">
                                &quot;Rushing UAT often results in missed business process issues that are 10x more costly to fix after production go-live.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                        {practices.map((item, idx) => (
                            <div
      key={idx}
      className={`group p-6 md:p-8 rounded-2xl border transition-all duration-300 w-full ${idx === 0 ? 'sm:col-span-2 bg-brand-blue border-brand-blue' : 'bg-slate-800/50 border-slate-700 hover:border-brand-blue'}`}
    >
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6 transition-transform group-hover:scale-110 flex-shrink-0 ${idx === 0 ? 'bg-white text-brand-blue' : 'bg-brand-blue/20 text-brand-blue'}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 break-words ${idx === 0 ? 'text-white' : 'text-slate-100'}`}>{item.title}</h3>
                                <p className={`text-sm leading-relaxed ${idx === 0 ? 'text-blue-50' : 'text-slate-400 font-medium'}`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATBestPracticesSection;
