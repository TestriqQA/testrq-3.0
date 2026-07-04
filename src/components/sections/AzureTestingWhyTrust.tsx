"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaCertificate,
    FaShieldAlt,
    FaCloudUploadAlt,
    FaSync,
    FaArrowRight,
    FaAward,
    FaCheckCircle,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingWhyTrust: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const advantages = [
        {
            icon: <VscAzure className="w-8 h-8" />,
            title: "Azure-Certified Expertise",
            shortTitle: "Certified Experts",
            description:
                "Our senior engineers possess deep knowledge of Azure services, from AKS and App Services to Azure SQL and Sentinel, enabling comprehensive Azure testing services.",
            metric: "Microsoft Certified",
            color: "blue",
            gradient: "from-blue-600 to-sky-500",
            features: [
                "AKS & App Services",
                "Azure SQL Validation",
                "Sentinel Security",
                "Infrastructure as Code",
            ],
        },
        {
            icon: <FaSync className="w-8 h-8" />,
            title: "Seamless Azure DevOps Integration",
            shortTitle: "DevOps Integration",
            description:
                "We specialize in integrating continuous testing in Azure DevOps, ensuring that quality is built into your CI/CD pipelines from the start.",
            metric: "CI/CD Mastery",
            color: "indigo",
            gradient: "from-indigo-600 to-indigo-500",
            features: [
                "YAML Pipeline Integration",
                "Automated Test Plans",
                "Release Validation",
                "Real-time Dashboards",
            ],
        },
        {
            icon: <FaCloudUploadAlt className="w-8 h-8" />,
            title: "Cloud Migration Specialists",
            shortTitle: "Migration Pros",
            description:
                "Our Azure migration testing services ensure a risk-free transition from on-premises to the cloud, validating data integrity at every step.",
            metric: "Risk-Free Migration",
            color: "sky",
            gradient: "from-sky-600 to-cyan-500",
            features: [
                "Data Integrity Checks",
                "Uptime Preservation",
                "Scale Validation",
                "Cloud-Native Tuning",
            ],
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Enterprise-Grade Security",
            shortTitle: "Security & Compliance",
            description:
                "We map our testing methodologies to global standards (ISO 27001, SOC2, HIPAA), providing compliance-driven Azure testing.",
            metric: "Global Compliance",
            color: "emerald",
            gradient: "from-emerald-600 to-teal-500",
            features: [
                "ISO 27001 / SOC2",
                "HIPAA Compliance",
                "Network Pen Testing",
                "IAM Configuration",
            ],
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6">
                            <FaAward />
                            <span className="text-sm font-bold uppercase tracking-wider">The Testriq Azure Advantage</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Why Trust Testriq for Your <span className="text-brand-blue">Azure QA Journey?</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Azure testing requires more than just standard QA; it demands a deep understanding of cloud architecture, distributed systems, and Microsoft&apos;s evolving ecosystem. Testriq&apos;s team of Azure-certified specialists provides a holistic approach to Azure DevOps QA, ensuring your cloud investments deliver maximum value with minimum risk.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-3xl font-black text-brand-blue mb-1">15+</div>
                                <div className="text-gray-600 text-sm font-bold uppercase">Years Excellence</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-3xl font-black text-brand-blue mb-1">100%</div>
                                <div className="text-gray-600 text-sm font-bold uppercase">Azure Focused</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {advantages.map((adv, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center text-white mb-6 transform transition-transform group-hover:rotate-6`}>
                                    {adv.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{adv.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {adv.description}
                                </p>
                                <ul className="space-y-2">
                                    {adv.features.slice(0, 3).map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                                            <FaCheckCircle className="text-emerald-500" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover Accent */}
                                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${adv.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact strip */}
                <div className="bg-brand-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-200">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Empowering Your Cloud Transformation</h3>
                        <p className="text-blue-50 opacity-90">Our managed Azure testing solutions empower your team to deliver seamless, secure, and high-performing cloud experiences, reducing technical debt and maximizing your Microsoft Azure investment.</p>
                    </div>
                    <Link href="/contact-us" className="whitespace-nowrap bg-white text-brand-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-3 cursor-pointer">
                        <span>Talk to a Strategist</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AzureTestingWhyTrust;
