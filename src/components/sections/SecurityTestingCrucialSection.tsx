"use client";

import React from "react";
import {
    FaExclamationTriangle,
    FaGavel,
    FaShieldAlt,
    FaMoneyBillWave,
    FaCheckCircle,
} from "react-icons/fa";
const SecurityTestingCrucialSection: React.FC = () => {
    const reasons = [
        {
            icon: <FaExclamationTriangle className="text-3xl text-red-500" />,
            title: "Identifies Weaknesses Before Exploitation",
            description:
                "Uncovers critical vulnerabilities in your applications, networks, and cloud infrastructure before malicious actors can exploit them.",
        },
        {
            icon: <FaGavel className="text-3xl text-blue-500" />,
            title: "Ensures Regulatory Compliance",
            description:
                "Helps your organization adhere to stringent global data protection regulations such as GDPR, HIPAA, PCI-DSS, and SOC2, avoiding hefty fines and legal repercussions.",
        },
        {
            icon: <FaShieldAlt className="text-3xl text-green-500" />,
            title: "Protects Brand Reputation & Customer Trust",
            description:
                "Demonstrates a commitment to data protection and privacy, building and maintaining invaluable customer trust.",
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-amber-500" />,
            title: "Minimizes Financial Losses",
            description:
                "Prevents costly data breaches, operational downtime, and the extensive recovery efforts associated with cyberattacks.",
        },
        {
            icon: <FaCheckCircle className="text-3xl text-emerald-500" />,
            title: "Validates Security Controls",
            description:
                "Verifies the effectiveness of your existing security measures and controls against real-world attack scenarios.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Why is Cyber Security Testing <span className="text-brand-blue">Crucial</span> for Your Business in 2026?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {/* SEO handoff (Sept 2026) PART B: the "$4.45 million" and
                                "82% of breaches" figures were IBM/Verizon 2023 numbers
                                presented as current. They are removed from
                                /security-testing by the handoff; the same figures were
                                hard-coded here, so they are removed on both pages rather
                                than left live on one. */}
                            The digital realm of 2026 presents a complex tapestry of opportunities and pervasive risks. With breach costs continuing to climb and an ever-larger share of sensitive data held in cloud environments, proactive information security measures are non-negotiable.
                        </p>
                        <div className="p-6 bg-blue-50 border-l-4 border-brand-blue rounded-r-xl">
                            <p className="text-gray-700 italic">
                                "Safeguarding your digital assets is not merely an option—it's a strategic imperative."
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid gap-6">
                        {reasons.map((reason, index) => (
                            <div
      key={index}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-5"
    >
                                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                                    {reason.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingCrucialSection;
