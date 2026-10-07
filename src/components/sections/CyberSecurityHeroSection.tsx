"use client";

// SEO handoff (Sept 2026) — PART E. This page and /security-testing were
// competing for the same penetration-testing queries, which is why neither
// ranked. This page is now narrowed to compliance auditing only:
//   - H1 no longer contains "Penetration Testing".
//   - The SecurityTestingAnimation widget is removed — it was rendered
//     identically on /security-testing. The right column now carries the
//     frameworks this page actually audits against.
//   - Hero copy rewritten to audit intent, and hands penetration-testing
//     intent off to /security-testing with an exact-match anchor.
//   - Reviewer byline added (ISO 27001 Lead Auditor, matching the page's
//     subject). Not on /our-team as an individual profile, so the link points
//     at the team page itself rather than a 404 anchor.
//
// The "15+ Years" / "100% Audit" stat cards are deliberately untouched — they
// are on the owner-decision hold list in docs/seo-audit/fix-backlog.md (C-5/C-6).

import Link from "next/link";
import React, { useState } from "react";
import {
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
    FaBalanceScale,
    FaCheckCircle,
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";

const frameworks = [
    { name: "GDPR", detail: "EU & UK data protection" },
    { name: "HIPAA", detail: "US healthcare data" },
    { name: "PCI DSS", detail: "Cardholder data environments" },
    { name: "SOC 2", detail: "Trust services criteria" },
    { name: "ISO 27001", detail: "Information security management" },
];

const CyberSecurityHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-brand-blue">
                        Cyber Security Testing Services
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-brand-blue rounded-full text-sm font-bold border border-blue-100 uppercase tracking-wide">
                            <FaBalanceScale className="mr-2" />
                            ISO 27001 &amp; GDPR Compliance Audits
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Cyber Security{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                Compliance Audit
                            </span>{" "}
                            Services
                        </h1>

                        {/* Reviewer byline — E-E-A-T signal */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Reviewed by{" "}
                            <Link
                                href="/our-team"
                                className="text-gray-600 underline decoration-gray-300 underline-offset-2 hover:text-brand-blue hover:decoration-brand-blue transition-colors"
                            >
                                Mansi Borade
                            </Link>
                            , ISO 27001:2022 Lead Auditor · DPDP Act 2023
                            <br />
                            Security Tester, Testriq QA Lab
                            <br />
                            Last updated:{" "}
                            <time dateTime="2026-09-10">September 10, 2026</time>
                        </p>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Audited Against the Frameworks Your Customers Ask About
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Testriq audits your systems, controls and documentation
                                against GDPR, HIPAA, PCI DSS, SOC 2 and ISO 27001. You
                                receive a gap analysis for each control in scope, evidence of
                                what already passes, and a prioritised remediation plan for
                                what does not.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A compliance audit establishes whether your controls exist
                                and operate as documented. If you need engineers to actively
                                attempt to break in and prove what an attacker could reach,
                                that is a different engagement — see our{" "}
                                <Link
                                    href="/security-testing"
                                    className="text-brand-blue font-semibold hover:underline decoration-brand-blue"
                                >
                                    penetration testing services
                                </Link>
                                .
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Get Started Today
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="w-full sm:w-auto border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats Summary */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">15+ Years</div>
                                <div className="text-sm text-gray-500 font-medium">Domain expertise</div>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">100% Audit</div>
                                <div className="text-sm text-gray-500 font-medium">Compliance success</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content — frameworks in scope. Replaces the shared
                        SecurityTestingAnimation widget that also rendered on
                        /security-testing. */}
                    <div className="relative top-10">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-[120px] opacity-20 scale-150"></div>
                        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
                            <p className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6">
                                Frameworks We Audit Against
                            </p>
                            <ul className="space-y-5">
                                {frameworks.map((framework) => (
                                    <li
                                        key={framework.name}
                                        className="flex items-start gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0"
                                    >
                                        <FaCheckCircle className="text-brand-blue text-xl flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="block text-lg font-bold text-gray-900">
                                                {framework.name}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {framework.detail}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://www.youtube.com/embed/your-video-id"
                onClose={closeLightbox}
            />
        </section>
    );
};

export default CyberSecurityHeroSection;
