"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaSync,
    FaCloudUploadAlt,
    FaRocket,
    FaShieldAlt,
    FaMicrochip,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingSolutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const solutions = [
        {
            icon: <FaSync className="w-8 h-8" />,
            title: "Azure DevOps & CI/CD Validation",
            description:
                "We optimize your delivery pipeline by implementing continuous testing in Azure DevOps. Our solutions ensure that every deployment is validated against functional and security requirements, reducing lead times and improving release quality.",
            features: [
                "YAML Build/Release Pipelines",
                "Automated Smoke Testing",
                "Quality Gates & Approval Flows",
                "Azure Test Plans Integration",
            ],
            gradient: "from-brand-blue to-brand-blue/80",
            metric: "Ready for Prompt Release",
        },
        {
            icon: <FaCloudUploadAlt className="w-8 h-8" />,
            title: "Azure Cloud Migration Testing",
            description:
                "Migration is a critical phase for any enterprise. Our Azure migration testing services focus on pre-migration assessment, data migration validation, and post-migration performance tuning to ensure your cloud environment is ready for production.",
            features: [
                "Schema & Data Validation",
                "Latency & Throughput Verification",
                "Uptime/Cutover Management",
                "Native Service Optimization",
            ],
            color: "indigo",
            gradient: "from-indigo-600 to-indigo-500",
            metric: "Zero-Data Loss Guarantee",
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Azure Performance & Load Testing",
            description:
                "Scalability is the hallmark of the cloud. Our Azure performance and load testing services simulate real-world traffic patterns to validate your application's ability to scale dynamically while maintaining optimal latency.",
            features: [
                "Auto-Scaling Validation",
                "Burst Load Simulation",
                "Global Traffic Profiling",
                "Application Insights Audit",
            ],
            color: "sky",
            gradient: "from-sky-600 to-cyan-500",
            metric: "Enterprise Scale Verified",
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Azure Security & Penetration Testing",
            description:
                "Protect your cloud assets with our Azure infrastructure security testing. We perform deep-dive assessments of your network configurations, identity management (Azure AD), and application security to identify vulnerabilities.",
            features: [
                "Azure AD Perm Audit",
                "VNet Configuration Check",
                "WAF & Sentinel Tuning",
                "Cloud-Native Pen Testing",
            ],
            color: "emerald",
            gradient: "from-emerald-600 to-teal-500",
            metric: "SOC2/HIPAA Ready",
        },
        {
            icon: <FaMicrochip className="w-8 h-8" />,
            title: "Azure AI & Data Services Testing",
            description:
                "As AI becomes central to Azure, we provide specialized testing for Azure AI/ML models and Azure Synapse Analytics data pipelines, ensuring accuracy, reliability, and ethical AI compliance.",
            features: [
                "Model Drift Monitoring",
                "Synapse Data Orchestration",
                "Ethical AI Frameworks",
                "Machine Learning QA",
            ],
            color: "cyan",
            gradient: "from-cyan-600 to-sky-400",
            metric: "99%+ Prediction Accuracy",
        },
    ];

    const nextTab = () => {
        setActiveTab((prev) => (prev + 1) % solutions.length);
    };

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-blue-100">
                        <VscAzure />
                        <span className="text-sm font-bold uppercase tracking-widest">Enterprise Solutions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Comprehensive <span className="text-brand-blue">Azure Testing</span> Solutions
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Testriq offers a full suite of services to optimize your Azure-based digital infrastructure, from individual service validation to end-to-end cloud ecosystem audits.
                    </p>
                </div>

                {/* Desktop Tabbed View */}
                <div className="bg-gray-50 rounded-3xl p-4 shadow-inner">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 flex flex-col gap-3 p-4">
                            {solutions.map((sol, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center gap-4 p-5 rounded-2xl text-left cursor-pointer transition-all duration-300 ${activeTab === index
                                        ? `bg-gradient-to-r ${sol.gradient} text-white shadow-xl scale-[1.02]`
                                        : "bg-white hover:bg-white/80 text-gray-600 hover:shadow-md"
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === index ? "bg-white/20" : "bg-gray-100 text-brand-blue"}`}>
                                        {sol.icon}
                                    </div>
                                    <span className="font-bold text-sm leading-tight">{sol.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Display */}
                        <div className="lg:col-span-8 p-8 md:p-12">
                            <div className="h-full flex flex-col justify-center">
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                    <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${activeTab === 0 ? "bg-blue-100 text-blue-700" :
                                        activeTab === 1 ? "bg-indigo-100 text-indigo-700" :
                                            activeTab === 2 ? "bg-sky-100 text-sky-700" :
                                                activeTab === 3 ? "bg-emerald-100 text-emerald-700" :
                                                    "bg-cyan-100 text-cyan-700"
                                        }`}>
                                        {solutions[activeTab].metric}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                        {solutions[activeTab].title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {solutions[activeTab].description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {solutions[activeTab].features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                                <FaCheckCircle className={`text-xl ${activeTab === 0 ? "text-brand-blue" :
                                                    activeTab === 1 ? "text-indigo-500" :
                                                        activeTab === 2 ? "text-sky-500" :
                                                            activeTab === 3 ? "text-emerald-500" :
                                                                "text-cyan-500"
                                                    }`} />
                                                <span className="text-sm font-bold text-gray-700">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <Link href="/contact-us" className={`group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-full overflow-hidden transition-all hover:pr-10 cursor-pointer`}>
                                            <span className="relative z-10">Deploy Quality Now</span>
                                            <FaArrowRight className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <button onClick={nextTab} className="p-4 text-gray-400 hover:text-gray-900 font-bold transition-colors cursor-pointer">
                                            Next Solution
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AzureTestingSolutions;
