"use client";

import React from "react";
import { FaClipboardList, FaFileAlt, FaUserTie, FaPlayCircle, FaTools, FaCheckDouble } from "react-icons/fa";

const UATProcessSection: React.FC = () => {
    const steps = [
        {
            title: "UAT Planning & Strategy",
            icon: <FaClipboardList />,
            description: "Stakeholder identification, business requirement review, and defining clear success criteria.",
            color: "blue"
        },
        {
            title: "Test Case Development",
            icon: <FaFileAlt />,
            description: "Creating realistic business scenarios and preparing appropriate test data.",
            color: "indigo"
        },
        {
            title: "Team Selection & Training",
            icon: <FaUserTie />,
            description: "Selecting representative end-users and providing deep facilitation support.",
            color: "blue"
        },
        {
            title: "UAT Execution",
            icon: <FaPlayCircle />,
            description: "Executing test cases, documenting issues immediately, and collecting structured feedback.",
            color: "indigo"
        },
        {
            title: "Resolution & Retesting",
            icon: <FaTools />,
            description: "Prioritizing issues based on impact, resolving defects, and performing regression testing.",
            color: "blue"
        },
        {
            title: "Sign-Off & Readiness",
            icon: <FaCheckDouble />,
            description: "Formal sign-off from stakeholders and final deployment readiness confirmation.",
            color: "indigo"
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        A <span className="text-brand-blue italic">Structured Approach</span> to UAT Success
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Successful user acceptance testing doesn&apos;t happen by accident. Our 6-phase process ensures
                        comprehensive validation and clear deployment sign-off.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {steps.map((step, idx) => (
                            <div
      key={idx}
      className="relative flex flex-col items-center text-center group"
    >
                                <div className={`w-28 h-28 rounded-2xl ${step.color === 'blue' ? 'bg-brand-blue shadow-blue-200' : 'bg-slate-900 shadow-slate-300'} text-white flex items-center justify-center text-3xl mb-6 shadow-xl relative z-10 transition-transform group-hover:-translate-y-2 duration-300`}>
                                    {step.icon}
                                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-4 border-slate-50 bg-white flex items-center justify-center text-sm font-black text-gray-900">
                                        {idx + 1}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Need help planning your UAT?</h4>
                            <p className="text-gray-600">Our ISTQB-certified professionals can help you design a custom UAT strategy tailored to your industry and scale.</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-colors shadow-lg shadow-slate-200 cursor-pointer">
                                Request Strategy Session
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATProcessSection;
