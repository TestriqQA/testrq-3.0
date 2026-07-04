"use client";

import React, { useState } from "react";
import {
    FaRunning,
    FaSync,
    FaRocket,
    FaUsers,
    FaAward,
    FaArrowRight,
    FaHistory,
} from "react-icons/fa";
import Link from "next/link";

const AgileTestingWhyChoose: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const benefits = [
        {
            icon: <FaHistory className="w-8 h-8" />,
            title: "15+ Years Experience",
            shortTitle: "Global Experience",
            description: "Our deep-rooted expertise allows us to navigate complexities from Scrum and Kanban to Scaled Agile Framework (SAFe).",
            stats: "15+ Years",
            color: "sky",
            gradient: "from-brand-blue to-brand-blue/80",
            features: [
                "Scrum & Kanban",
                "SAFe Framework",
                "Legacy to Agile",
                "Process Consulting",
            ],
        },
        {
            icon: <FaSync className="w-8 h-8" />,
            title: "Continuous Testing",
            shortTitle: "CI/CD Integration",
            description: "Testing at every stage of the CI/CD pipeline, ensuring every code change is validated automatically.",
            stats: "Real-time Validation",
            color: "indigo",
            gradient: "from-indigo-500 to-indigo-600",
            features: [
                "Pipeline Integration",
                "Automated Feedback",
                "Build Validation",
                "Release Confidence",
            ],
        },
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Shift-Left QA",
            shortTitle: "Earlier Detection",
            description: "Moving testing to the earliest stages of development to reduce costs and accelerate time-to-market.",
            stats: "40% Cost Reduction",
            color: "blue",
            gradient: "from-blue-500 to-blue-600",
            features: [
                "Bugs Found Early",
                "Reduced Rework",
                "Fast Feedback",
                "Quality Planning",
            ],
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Managed Agile QA",
            shortTitle: "Collaborative Teams",
            description: "Testers who are technical experts and collaborative partners embedded within your development team.",
            stats: "Cross-Functional",
            color: "cyan",
            gradient: "from-cyan-500 to-cyan-600",
            features: [
                "Embedded QA",
                "Collaborative Mindset",
                "Technical Prowess",
                "Value-Driven",
            ],
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-transform">
                        <FaAward />
                        <span className="text-sm font-bold uppercase tracking-wider">The Testriq Edge</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Why Choose Testriq for Your{" "}
                        <span className="text-brand-blue">Agile QA Needs?</span>
                    </h2>
                    <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
                        Agile testing is not just a phase; it&apos;s a mindset. At Testriq, we go beyond traditional bug-finding to deliver value early and often.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`relative group transition-all duration-500 transform ${hoveredCard === index ? "scale-105 z-10" : "hover:scale-102"
                                }`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl">
                                {/* Header Section */}
                                <div className={`bg-gradient-to-r ${benefit.gradient} p-8 text-white relative`}>
                                    <div className="relative z-10 flex justify-between items-start mb-4">
                                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                                            {benefit.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Metric</div>
                                            <div className="text-white font-black text-sm">{benefit.stats}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                                </div>

                                {/* Features Section */}
                                <div className="p-8 flex-grow">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {benefit.description}
                                    </p>
                                    <div className="space-y-3">
                                        {benefit.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center text-sm text-gray-700">
                                                <div className={`w-2 h-2 rounded-full mr-3 bg-brand-blue animate-pulse`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Reveal Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ${hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                                    }`}>
                                    <div className="p-4 bg-white/20 rounded-full mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">{benefit.shortTitle}</h4>
                                    <p className="text-center text-sky-50 mb-8 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                    <Link href="/contact-us" className="bg-white text-brand-blue px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 cursor-pointer">
                                        Get Started <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Velocity Stats */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>

                    <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center items-center">
                        <div className="space-y-2">
                            <div className="text-6xl font-black text-brand-blue">3x</div>
                            <div className="text-lg font-bold uppercase tracking-widest text-sky-100">Release Velocity</div>
                            <p className="text-xs text-sky-200/60 max-w-[200px] mx-auto">Faster time-to-market with automated CI/CD pipelines</p>
                        </div>
                        <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
                            <div className="text-6xl font-black text-brand-blue">0%</div>
                            <div className="text-lg font-bold uppercase tracking-widest text-sky-100">Sprint Bottlenecks</div>
                            <p className="text-xs text-sky-200/60 max-w-[200px] mx-auto">Continuous integration prevents late-stage quality issues</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-6xl font-black text-brand-blue">100%</div>
                            <div className="text-lg font-bold uppercase tracking-widest text-sky-100">Visibility</div>
                            <p className="text-xs text-sky-200/60 max-w-[200px] mx-auto">Real-time quality metrics throughout the sprint cycle</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingWhyChoose;
