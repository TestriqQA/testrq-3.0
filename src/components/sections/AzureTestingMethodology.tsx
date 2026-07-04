"use client";

import React, { useState } from "react";
import {
    FaSearch,
    FaCogs,
    FaSync,
    FaShieldAlt,
    FaChartLine,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingMethodology: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            icon: <FaSearch className="w-6 h-6" />,
            title: "Cloud Architecture Review",
            shortTitle: "Architecture Review",
            description:
                "We analyze your Azure environment to identify critical components and potential failure points, ensuring a solid foundation for testing.",
            details: [
                "Environment Audit",
                "Dependency Mapping",
                "Failure Point Analysis",
                "Constraint Identification",
            ],
            gradient: "from-brand-blue to-brand-blue/80",
        },
        {
            number: "02",
            icon: <FaCogs className="w-6 h-6" />,
            title: "Test Environment Provisioning",
            shortTitle: "Provisioning",
            description:
                "Using ARM templates and Bicep, we create representative test environments that mirror production exactly for realistic validation.",
            details: [
                "Infrastructure as Code",
                "Production Replication",
                "Data Masking/Mocking",
                "Resource Optimization",
            ],
            color: "indigo",
            gradient: "from-indigo-600 to-indigo-500",
        },
        {
            number: "03",
            icon: <FaSync className="w-6 h-6" />,
            title: "Automated Pipeline Integration",
            shortTitle: "CI/CD Integration",
            description:
                "We integrate automated test suites directly into your Azure DevOps pipelines for real-time feedback and continuous quality control.",
            details: [
                "YAML Pipeline Config",
                "Test Plan Linkage",
                "Quality Gate Setup",
                "Failure Alerting",
            ],
            color: "sky",
            gradient: "from-sky-600 to-cyan-500",
        },
        {
            number: "04",
            icon: <FaShieldAlt className="w-6 h-6" />,
            title: "Deep-Dive Audit",
            shortTitle: "Security & Load Audit",
            description:
                "We execute specialized tests for cloud-specific risks, including multi-tenancy issues and dynamic scaling bottlenecks.",
            details: [
                "Security Pen Testing",
                "Elasticity Stress Tests",
                "Multi-Tenancy Isolation",
                "API Security Audit",
            ],
            color: "emerald",
            gradient: "from-emerald-600 to-teal-500",
        },
        {
            number: "05",
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Optimization & Monitoring",
            shortTitle: "Monitoring",
            description:
                "We leverage Azure Monitor and Application Insights to provide ongoing visibility into your cloud quality metrics and performance.",
            details: [
                "Monitor Dashboards",
                "App Insights Tuning",
                "ROI Tracking",
                "Continuous Feedback",
            ],
            color: "cyan",
            gradient: "from-cyan-600 to-sky-400",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Azure Testing <span className="text-brand-blue">Methodology</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A rigorous, cloud-focused process designed to ensure total quality assurance for enterprise Azure ecosystems.
                    </p>
                </div>

                {/* Horizontal Timeline (Desktop) */}
                <div className="hidden lg:flex justify-between items-start mb-20 relative">
                    <div className="absolute top-10 left-10 right-10 h-1 bg-gray-200 -z-10 rounded-full" />
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className="group flex flex-col items-center w-1/5 relative px-2 cursor-pointer"
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 border-4 border-white shadow-xl transition-all duration-300 ${activeStep === index ? `bg-gradient-to-br ${step.gradient} scale-125 z-10` : "bg-gray-400 scale-100 hover:scale-110"
                                }`}>
                                {step.icon}
                            </div>
                            <div className={`text-center transition-opacity duration-300 ${activeStep === index ? "opacity-100" : "opacity-60"}`}>
                                <span className="block text-xs font-black text-brand-blue mb-1 uppercase tracking-tighter">Step {step.number}</span>
                                <span className="block text-sm font-bold text-gray-900 whitespace-nowrap">{step.shortTitle}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Mobile View / Sidebar for details */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className={`p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br transition-all duration-500 ${steps[activeStep].gradient} text-white`}>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-md">
                                    {steps[activeStep].icon}
                                </div>
                                <div>
                                    <span className="text-xs font-black uppercase tracking-widest opacity-80">Phase {steps[activeStep].number}</span>
                                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">{steps[activeStep].title}</h3>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10">
                                {steps[activeStep].description}
                            </p>
                            <button
                                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all self-start cursor-pointer"
                            >
                                <span>Discover Next Step</span>
                                <FaArrowRight />
                            </button>
                        </div>

                        <div className="p-10 md:p-16 bg-white">
                            <h4 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-brand-blue rounded-full" />
                                Key Strategic Activities
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {steps[activeStep].details.map((detail, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-blue-200 transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                                            <FaCheckCircle className="text-xs" />
                                        </div>
                                        <span className="font-bold text-gray-700 text-sm group-hover:text-brand-blue transition-colors">{detail}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                                                <VscAzure className="text-brand-blue text-xs animate-spin-slow" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-400">Azure Certified Strategists</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-black text-emerald-600 uppercase">Live Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AzureTestingMethodology;
