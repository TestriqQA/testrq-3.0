"use client";

import React, { useState } from "react";
import {
    FaSearch,
    FaClipboardList,
    FaSync,
    FaCommentDots,
    FaAward,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

const AgileTestingMethodology: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            icon: <FaSearch className="w-6 h-6" />,
            title: "Discovery & Alignment",
            shortTitle: "Discovery",
            description: "We align our QA strategy with your sprint goals and business objectives during the initial phase.",
            details: [
                "Requirement Clarification",
                "Stakeholder Alignment",
                "Risk Assessment",
                "Tool Selection",
            ],
            color: "sky",
            gradient: "from-brand-blue to-brand-blue/80",
            duration: "Sprint 0 / Day 1",
        },
        {
            number: "02",
            icon: <FaClipboardList className="w-6 h-6" />,
            title: "Agile Test Planning",
            shortTitle: "Planning",
            description: "Defining the scope of testing for the upcoming sprint, including user stories and acceptance criteria.",
            details: [
                "User Story Analysis",
                "Acceptance Criteria Definition",
                "Test Scenario Mapping",
                "Automation Strategy",
            ],
            color: "indigo",
            gradient: "from-indigo-500 to-indigo-600",
            duration: "Sprint Planning",
        },
        {
            number: "03",
            icon: <FaSync className="w-6 h-6" />,
            title: "Iterative Testing",
            shortTitle: "Iteration",
            description: "Execution of functional, regression, and automation tests concurrently with development.",
            details: [
                "Sprint-Level Testing",
                "Continuous Integration",
                "Regression Execution",
                "Defect Logging",
            ],
            color: "blue",
            gradient: "from-blue-500 to-blue-600",
            duration: "Daily Sprints",
        },
        {
            number: "04",
            icon: <FaCommentDots className="w-6 h-6" />,
            title: "Continuous Feedback",
            shortTitle: "Feedback",
            description: "Providing real-time insights to developers and stakeholders to ensure immediate course correction.",
            details: [
                "Daily Standups",
                "Real-time Dashboards",
                "Collaboration Tools",
                "Blocker Identification",
            ],
            color: "cyan",
            gradient: "from-cyan-500 to-cyan-600",
            duration: "Continuous",
        },
        {
            number: "05",
            icon: <FaAward className="w-6 h-6" />,
            title: "Sprint Review & Retro",
            shortTitle: "Review",
            description: "Evaluating the quality of the release and identifying areas for process improvement.",
            details: [
                "Quality Metrics Review",
                "Release Sign-off",
                "Process Retrospective",
                "Future Planning",
            ],
            color: "teal",
            gradient: "from-teal-500 to-teal-600",
            duration: "Sprint End",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Our Proven{" "}
                        <span className="text-brand-blue">Agile QA Methodology</span>
                    </h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        Our systematic approach ensures quality is baked into every sprint, not bolted on at the end.
                    </p>
                </div>

                {/* Dynamic Timeline */}
                <div className="relative mb-16">
                    {/* Desktop Synapses */}
                    <div className="hidden lg:block relative h-24 mb-12">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
                        <div className="flex justify-between items-center h-full relative z-10">
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold transition-all duration-500 transform ${activeStep === index ? `bg-gradient-to-br ${step.gradient} shadow-2xl scale-125 rotate-6` : activeStep > index ? "bg-brand-blue" : "bg-gray-300"
                                        }`}
                                >
                                    {activeStep > index ? <FaCheckCircle className="text-2xl" /> : step.icon}
                                </button>
                            ))}
                        </div>
                        {/* Progress Fill */}
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-brand-blue -translate-y-1/2 rounded-full transition-all duration-700"
                            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        ></div>
                    </div>

                    {/* Mobile Selector */}
                    <div className="lg:hidden flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all ${activeStep === index ? `bg-brand-blue text-white shadow-lg` : "bg-white text-gray-500 border border-gray-100"
                                    }`}
                            >
                                {step.shortTitle}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Detailed Content Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="p-12 lg:p-16 space-y-8">
                            <div className="flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} text-white flex items-center justify-center shadow-lg font-black text-2xl`}>
                                    {steps[activeStep].number}
                                </div>
                                <div>
                                    <div className="text-brand-blue font-black text-xs uppercase tracking-widest mb-1 italic">Phase {steps[activeStep].number}</div>
                                    <h3 className="text-3xl font-black text-gray-900">{steps[activeStep].title}</h3>
                                </div>
                            </div>

                            <p className="text-gray-600 text-xl leading-relaxed italic border-l-4 border-brand-blue/30 pl-6">
                                &quot;{steps[activeStep].description}&quot;
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {steps[activeStep].details.map((detail, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors group">
                                        <div className={`w-2 h-2 rounded-full mr-3 bg-brand-blue group-hover:scale-150 transition-transform`} />
                                        <span className="text-gray-700 font-bold text-sm tracking-tight">{detail}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest items-center flex">Timeline:</span>
                                    <span className="text-brand-blue font-black text-sm tracking-tight">{steps[activeStep].duration}</span>
                                </div>
                                <button
                                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                                    className={`p-4 rounded-full bg-gradient-to-r ${steps[activeStep].gradient} text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-110`}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        {/* Right Visual (Abstract Agile Representation) */}
                        <div className={`hidden lg:flex bg-gradient-to-br ${steps[activeStep].gradient} items-center justify-center p-20 relative overflow-hidden`}>
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full animate-ping"></div>
                                <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
                            </div>
                            <div className="relative z-10 text-white text-center">
                                <div className="text-[12rem] font-black opacity-10 absolute -top-24 left-1/2 -translate-x-1/2 select-none">{steps[activeStep].number}</div>
                                <div className="bg-white/20 backdrop-blur-xl p-12 rounded-[2rem] border border-white/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                    {React.cloneElement(steps[activeStep].icon as React.ReactElement, { className: "w-24 h-24 mb-6 mx-auto" })}
                                    <div className="text-2xl font-black uppercase tracking-tighter">{steps[activeStep].shortTitle} Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingMethodology;
