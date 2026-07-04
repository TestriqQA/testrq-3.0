"use client";

import Link from "next/link";
import React from "react";
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaCalendarAlt,
    FaCheckCircle,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const AzureTestingCTA: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-900 overflow-hidden relative">
            {/* Decorative Cloud Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px] rounded-full -mr-1/4 -mt-1/4" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-500/10 blur-[120px] rounded-full -ml-1/4 -mb-1/4" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center text-white mb-16">
                    <div className="inline-flex items-center gap-2 bg-brand-blue px-4 py-2 rounded-full mb-6 text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-900/40">
                        <VscAzure className="animate-spin-slow" />
                        <span>Scale with Confidence</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        Elevate Your <span className="text-brand-blue">Cloud Quality</span> <br /> with Testriq
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Partner with global Azure testing specialists to secure your digital future. From comprehensive cloud migrations to continuous DevOps QA, we help you deliver excellence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Benefits */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-brand-blue pl-6">
                            The Testriq Azure Commitment
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                { title: "Azure-Certified Experts", desc: "Senior engineers with deep platform knowledge." },
                                { title: "Zero-Downtime Migration", desc: "Risk-free transitions for legacy systems." },
                                { title: "Full CI/CD Integration", desc: "Embedded quality in Azure DevOps pipelines." },
                                { title: "Enterprise Compliance", desc: "ISO 27001, SOC2, and HIPAA readiness." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-500 transition-colors">
                                        <FaCheckCircle className="text-emerald-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                                What to Expect in Your Session:
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Cloud Infrastructure Health Check",
                                    "QA Automation Feasibility Audit",
                                    "Security & Compliance Gap Analysis",
                                    "Performance Scalability Roadmap"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-300 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - CTA Card */}
                    <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-indigo-600" />

                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
                            Book Your Free Azure <br /> <span className="text-brand-blue">QA Strategy Session</span>
                        </h3>

                        <div className="space-y-6">
                            <Link href="/contact-us" className="w-full flex items-center justify-center gap-3 py-5 bg-brand-blue text-white font-black text-xl rounded-2xl hover:bg-brand-blue/90 transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-100 cursor-pointer">
                                <span>Request Session</span>
                                <FaArrowRight />
                            </Link>

                            <div className="relative flex items-center justify-center py-2">
                                <div className="absolute w-full h-px bg-gray-100" />
                                <span className="relative px-4 bg-white text-gray-400 font-bold uppercase tracking-widest text-xs">Direct Connect</span>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50 transition-all font-bold text-gray-700 cursor-pointer">
                                    <FaCalendarAlt className="text-brand-blue" />
                                    <span>Schedule on Calendar</span>
                                </Link>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <button onClick={() => window.location.href = "tel:+919152929343"} className="flex-1 flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50 transition-all font-bold text-gray-700 cursor-pointer">
                                        <FaPhone className="text-emerald-500" />
                                        <span>Call Experts</span>
                                    </button>
                                    <button onClick={() => window.location.href = "mailto:contact@testriq.com"} className="flex-1 flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50 transition-all font-bold text-gray-700 cursor-pointer">
                                        <FaEnvelope className="text-indigo-500" />
                                        <span>Email Us</span>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 mt-8">
                                <div className="flex justify-between items-center px-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-brand-blue">15+</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Years Exp</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-emerald-500">100%</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Azure Cert</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-indigo-500">24/7</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Global Support</div>
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

export default AzureTestingCTA;
