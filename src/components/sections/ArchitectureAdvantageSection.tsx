"use client";

import React from "react";
import { FaHistory, FaCloud, FaChartLine, FaUserShield } from "react-icons/fa";

const ArchitectureAdvantageSection: React.FC = () => {
    const advantages = [
        {
            icon: <FaHistory className="text-3xl" />,
            title: "15+ Years of Engineering Excellence",
            description: "Our consultants bring decades of experience in auditing complex systems for global enterprises across FinTech, Healthcare, and SaaS.",
        },
        {
            icon: <FaCloud className="text-3xl" />,
            title: "Deep Cloud-Native Expertise",
            description: "We specialize in cloud-native architecture reviews, validating your use of Kubernetes, service meshes, and serverless patterns.",
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: "Actionable Technical Debt Reduction",
            description: "We don't just find problems; we provide a prioritized roadmap for technical debt assessment, balancing new features with system health.",
        },
        {
            icon: <FaUserShield className="text-3xl" />,
            title: "Security-First Inspection",
            description: "Our methodology integrates security at the architectural level, identifying vulnerabilities in system design before any code is written.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Trust Testriq for Your <span className="text-brand-blue">Architecture Review?</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        A flawed architecture is a silent killer of innovation, leading to soaring maintenance costs and performance bottlenecks. Testriq ensures your systems are built to scale, endure, and evolve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <div
      key={index}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
                            <div className="text-brand-blue mb-6">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureAdvantageSection;
