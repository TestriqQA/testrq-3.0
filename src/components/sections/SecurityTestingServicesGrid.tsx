"use client";

// SEO handoff (Sept 2026) — PART E. This section previously led with an
// eight-item VAPT service list (Web / Network / API / External / Internal
// penetration testing) plus a SAST/DAST/IAST block. Both competed directly with
// /security-testing, which is the page that now owns penetration-testing
// intent. Per the handoff, this page keeps compliance-audit content only, so
// the VAPT and AST blocks are removed and the audit block that was tucked into
// the third column is promoted and expanded to name each framework explicitly.
//
// Framework descriptions are scope-descriptive only. Note the deliberate
// wording on SOC 2 and ISO 27001: Testriq performs readiness assessment and
// control review, not the certification examination itself — only a licensed
// CPA firm (SOC 2) or accredited certification body (ISO 27001) can issue those.

import React from "react";
import {
    FaUserShield,
    FaHeartbeat,
    FaCreditCard,
    FaFileContract,
    FaCertificate,
    FaServer,
    FaSearchPlus,
    FaShieldVirus,
} from "react-icons/fa";

const SecurityTestingServicesGrid: React.FC = () => {
    const frameworkAudits = [
        {
            title: "GDPR Compliance Audit",
            icon: <FaUserShield />,
            desc: "Data protection impact assessments, lawful-basis review, subject-rights handling and breach-notification procedures.",
        },
        {
            title: "HIPAA Compliance Audit",
            icon: <FaHeartbeat />,
            desc: "Administrative, physical and technical safeguards for protected health information, plus business associate agreements.",
        },
        {
            title: "PCI DSS Compliance Audit",
            icon: <FaCreditCard />,
            desc: "Cardholder data environment scoping, network segmentation validation and control testing across the twelve requirements.",
        },
        {
            title: "SOC 2 Readiness Assessment",
            icon: <FaFileContract />,
            desc: "Control review against the Trust Services Criteria with evidence mapping, ahead of your auditor's formal examination.",
        },
        {
            title: "ISO 27001 Control Review",
            icon: <FaCertificate />,
            desc: "ISMS scope, risk treatment, Statement of Applicability and Annex A control review, ahead of certification.",
        },
    ];

    const supportingAudits = [
        {
            title: "Infrastructure Security Audit",
            icon: <FaServer />,
            desc: "Reviewing IT infrastructure for security gaps.",
        },
        {
            title: "Cyber Risk Assessment Services",
            icon: <FaSearchPlus />,
            desc: "Identifying and evaluating potential cyber risks.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Comprehensive{" "}
                        <span className="text-brand-blue">Compliance Audit</span> Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Meticulously tailored to the frameworks that apply to your
                        organisation and the markets you operate in.
                    </p>
                </div>

                {/* Framework audits */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                            1. Compliance Framework Audits
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {frameworkAudits.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 group hover:border-brand-blue transition-all h-full"
                            >
                                <div className="text-2xl text-brand-blue p-3 bg-blue-50 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 leading-snug mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supporting audits */}
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                                2. Supporting Security Audits
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {supportingAudits.map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
                                >
                                    <div className="text-2xl text-purple-600 p-3 bg-purple-50 rounded-xl">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">
                                            {service.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-10 w-2 bg-brand-blue rounded-full"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 italic">
                                3. What Every Audit Delivers
                            </h3>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 group-hover:text-white/10 transition-colors">
                                <FaShieldVirus />
                            </div>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">
                                            Control-by-control gap analysis
                                        </strong>
                                        <span className="text-gray-400 text-sm">
                                            Every control in scope marked as met, partially met or
                                            not met.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">Evidence register</strong>
                                        <span className="text-gray-400 text-sm">
                                            The artefacts supporting each control that already
                                            passes.
                                        </span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 h-2 w-2 bg-brand-blue rounded-full"></div>
                                    <div>
                                        <strong className="block text-lg">
                                            Prioritised remediation plan
                                        </strong>
                                        <span className="text-gray-400 text-sm">
                                            What to fix first, sequenced against your audit or
                                            certification date.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityTestingServicesGrid;
