"use client";

import React from "react";
import {
    FaDraftingCompass,
    FaClipboardList,
    FaUserFriends,
    FaChartPie,
    FaSyncAlt
} from "react-icons/fa";

const UsabilityTestingMethodology: React.FC = () => {
    const steps = [
        {
            title: "Define Objectives & Personas",
            desc: "Understanding your goals and defining key user personas to guide our testing strategy.",
            icon: <FaDraftingCompass />
        },
        {
            title: "Test Plan Development",
            desc: "Crafting detailed scenarios and tasks that simulate real-world user interactions.",
            icon: <FaClipboardList />
        },
        {
            title: "Execution & Real-User Data",
            desc: "Employing moderated/unmoderated tests with real-user usability testing panels.",
            icon: <FaUserFriends />
        },
        {
            title: "Analysis & Metrics Reporting",
            desc: "Analyzing task success rate, time on task, and benchmarking against competitors.",
            icon: <FaChartPie />
        },
        {
            title: "Iterative UX Enhancement",
            desc: "Collaborating with your team to implement changes and re-test for continuous improvement.",
            icon: <FaSyncAlt />
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        A User-Centric <span className="text-brand-blue">Blueprint</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our proven methodology ensures a thorough and insightful validation process to delight your target audience.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block z-0"></div>

                    <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
      key={index}
      className="flex flex-col items-center text-center group"
    >
                                <div className="w-20 h-20 bg-white border-4 border-gray-50 shadow-xl rounded-full flex items-center justify-center text-3xl text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                    {step.icon}
                                </div>
                                <div className="space-y-4">
                                    <span className="text-xs font-bold text-brand-blue/30 uppercase tracking-[0.2em]">Step {index + 1}</span>
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsabilityTestingMethodology;
