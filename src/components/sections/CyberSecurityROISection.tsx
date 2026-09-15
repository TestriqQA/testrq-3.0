"use client";

import React from "react";
import { FaCheck, FaArrowUp, FaGlobe, FaClock } from "react-icons/fa";

const CyberSecurityROISection: React.FC = () => {
    const benefits = [
        {
            title: "Reduced Breach Costs",
            desc: "Proactively identifies vulnerabilities, preventing costly data breaches, regulatory fines, and legal expenses.",
            impact: "Up to 70% Savings",
            icon: <FaArrowUp className="text-blue-600" />,
        },
        {
            title: "Enhanced Brand Reputation",
            desc: "Demonstrates a strong commitment to data security, building and maintaining customer trust.",
            impact: "Increased Customer Trust",
            icon: <FaGlobe className="text-emerald-600" />,
        },
        {
            title: "Regulatory Compliance",
            desc: "Ensures adherence to industry-specific regulations (GDPR, HIPAA, PCI-DSS, SOC2), avoiding penalties.",
            impact: "100% Compliance Rate",
            icon: <FaCheck className="text-purple-600" />,
        },
        {
            title: "Improved Business Continuity",
            desc: "Minimizes downtime and operational disruptions caused by security incidents and cyberattacks.",
            impact: "Reduced Downtime Risk",
            icon: <FaClock className="text-amber-600" />,
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        The <span className="text-brand-blue">ROI</span> of Investing in Robust Security Testing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A strategic decision that yields significant returns, protecting your sensitive data, preserving your reputation, and securing your bottom line.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
      key={index}
      className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100 transition-all duration-500 h-full flex flex-col"
    >
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {benefit.desc}
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <span className="text-xs font-black text-brand-blue uppercase tracking-widest block mb-1">IMPACT</span>
                                <span className="text-lg font-extrabold text-gray-900">{benefit.impact}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnote reference mentioned in content */}
                <div className="mt-12 text-center text-xs text-gray-400">
                    [1] Market statistics as per 2024-2025 industry reports on global data breaches.
                </div>
            </div>
        </section>
    );
};

export default CyberSecurityROISection;
