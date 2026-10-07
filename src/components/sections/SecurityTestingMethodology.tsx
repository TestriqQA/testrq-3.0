"use client";

// SEO handoff (Sept 2026) — PART E follow-up. This section previously listed
// the identical five stages as SecureGuardFramework on /security-testing
// (Reconnaissance & Threat Modeling -> Weakness Scanning -> Manual Penetration
// Testing -> Risk Analysis & Repair Support -> Re-Testing & Certification),
// including a "Manual Penetration Testing" stage on the page that is supposed
// to stop targeting penetration-testing queries. The handoff flagged three
// duplicated blocks between the two pages; this was a fourth.
//
// The stages are now the compliance-audit lifecycle this page actually sells.
// Layout, styling and step count are unchanged.
//
// The old subtitle cited ISO/IEC/IEEE 29119 — a software *testing* standard,
// not an auditing one. Replaced with a plain description of the process rather
// than swapping in another standard we would then have to substantiate.

import React from "react";
import {
    FaClipboardList,
    FaFolderOpen,
    FaCheckDouble,
    FaChartBar,
    FaCertificate,
} from "react-icons/fa";

const SecurityTestingMethodology: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Scoping & Control Mapping",
            description: "Agreeing which systems, data flows and business units are in scope, then mapping each to the controls your applicable frameworks require.",
            icon: <FaClipboardList className="text-2xl" />,
            color: "blue",
        },
        {
            number: "02",
            title: "Evidence Collection",
            description: "Gathering the policies, configurations, access records and process documentation that show how each control operates in practice.",
            icon: <FaFolderOpen className="text-2xl" />,
            color: "purple",
        },
        {
            number: "03",
            title: "Control Testing",
            description: "Testing each control against its requirement to establish whether it exists, is applied consistently, and works the way it is documented.",
            icon: <FaCheckDouble className="text-2xl" />,
            color: "red",
        },
        {
            number: "04",
            title: "Gap Analysis & Remediation Plan",
            description: "Marking every control met, partially met or not met, with a prioritised remediation plan sequenced against your audit or certification date.",
            icon: <FaChartBar className="text-2xl" />,
            color: "amber",
        },
        {
            number: "05",
            title: "Re-Audit & Reporting",
            description: "Re-checking remediated controls once your team has closed the gaps, and issuing a final audit report your stakeholders can act on.",
            icon: <FaCertificate className="text-2xl" />,
            color: "green",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-bold tracking-wider uppercase">
                        Our Process
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Compliance{" "}
                        <span className="text-brand-blue">Audit Methodology</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A transparent five-stage process, from agreeing scope through to
                        re-checking the controls your team has remediated.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div
      key={index}
      className="relative group h-full"
    >
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-100 z-0">
                                    <div className="absolute top-0 left-0 h-full bg-brand-blue transition-all duration-500 w-0 group-hover:w-full"></div>
                                </div>
                            )}

                            <div className="relative z-10 space-y-6 h-full flex flex-col items-center text-center">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3
                  ${step.color === 'blue' ? 'bg-blue-600' :
                                        step.color === 'purple' ? 'bg-purple-600' :
                                            step.color === 'red' ? 'bg-red-600' :
                                                step.color === 'amber' ? 'bg-amber-600' : 'bg-emerald-600'}`}
                                >
                                    {step.icon}
                                </div>

                                <div className="space-y-3 flex-grow">
                                    <span className="text-sm font-black text-gray-200 group-hover:text-brand-blue/20 transition-colors uppercase tracking-widest">{step.number}</span>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingMethodology;
