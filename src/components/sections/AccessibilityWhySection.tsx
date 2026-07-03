"use client";

import React from "react";
import {
    FaGavel,
    FaChartLine,
    FaUserAstronaut,
    FaSearchDollar,
    FaAward
} from "react-icons/fa";

const AccessibilityWhySection: React.FC = () => {
    const benefits = [
        {
            icon: FaGavel,
            title: "Ensure Legal Compliance",
            text: "Navigate complex regulations such as WCAG, ADA, and Section 508, mitigating legal risks and fostering trust.",
            color: "blue"
        },
        {
            icon: FaChartLine,
            title: "Expand Market Reach",
            text: "Make your digital products accessible to over a billion people worldwide with disabilities, tapping into an underserved market.",
            color: "green"
        },
        {
            icon: FaUserAstronaut,
            title: "Enhance User Experience",
            text: "Create intuitive and user-friendly interfaces that benefit all users, including those with temporary or situational disabilities.",
            color: "purple"
        },
        {
            icon: FaSearchDollar,
            title: "Improve SEO",
            text: "Accessible websites often rank higher due to better semantic structure, faster loading times, and improved user engagement.",
            color: "orange"
        },
        {
            icon: FaAward,
            title: "Cultivate Brand Reputation",
            text: "Demonstrate a commitment to social responsibility and inclusive design, strengthening your brand's standing.",
            color: "red"
        }
    ];

    // Static color lookup — Tailwind's JIT compiler cannot see class names
    // built at runtime (e.g. `bg-${color}-50`), so they never get generated.
    // Mapping to complete literal class strings keeps the icon tiles colored.
    const colorMap: Record<string, { bg: string; text: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-600" },
        green: { bg: "bg-green-50", text: "text-green-600" },
        purple: { bg: "bg-purple-50", text: "text-purple-600" },
        orange: { bg: "bg-orange-50", text: "text-orange-600" },
        red: { bg: "bg-red-50", text: "text-red-600" },
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Why It Matters</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Accessibility Testing is <span className="text-brand-blue">Essential</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Beyond Compliance, Towards True Inclusion
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const c = colorMap[benefit.color] || colorMap.blue;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <benefit.icon className={`text-2xl ${c.text}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed italic">&quot;{benefit.text}&quot;</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AccessibilityWhySection;
