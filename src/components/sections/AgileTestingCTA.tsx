// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";

const AgileTestingCTA: React.FC = () => {
    const benefits = [
        "Sprint-level automation readiness",
        "CI/CD pipeline integration",
        "Shift-left quality culture",
        "Real-time visibility & metrics",
        "Expert Agile consultation",
        "15+ years of global QA experience",
    ];

    return (
        <section className="bg-gradient-to-br from-brand-blue to-indigo-700 text-white py-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-sky-50 text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest border border-white/20 shadow-xl">
                            <FaRocket className="mr-2 animate-bounce" />
                            Scale Your Sprint Velocity
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Ready to Embed <span className="text-sky-300">Continuous Quality</span> Into Your Agile Process?
                        </h2>

                        <p className="text-sky-100 text-xl leading-relaxed max-w-xl">
                            Don&apos;t wait for the end of the sprint to find bugs. Transform your QA with Testriq&apos;s 2026-ready Agile testing architecture and deliver with confidence every single time.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="p-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors">
                                        <FaCheckCircle className="w-5 h-5 text-sky-200" />
                                    </div>
                                    <span className="text-sky-50 font-bold text-sm tracking-tight">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-brand-blue font-black rounded-xl hover:bg-gray-100 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 active:scale-95 text-lg cursor-pointer"
                            >
                                <span>Start Your Sprint</span>
                                <FaArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Visual Metrics Card */}
                    <div className="relative group">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-indigo-500"></div>

                            <div className="space-y-10">
                                <div className="text-center">
                                    <div className="text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Quality Maturity</div>
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 break-words">Tier 1 Compliance</div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "Automation Readiness", val: 100, color: "bg-brand-blue" },
                                        { label: "Deployment Velocity", val: 95, color: "bg-blue-600" },
                                        { label: "Regression Speed", val: 98, color: "bg-indigo-600" },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between font-black text-xs text-gray-400 uppercase tracking-tight">
                                                <span>{item.label}</span>
                                                <span className="text-brand-blue">{item.val}%</span>
                                            </div>
                                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                                                <div
                                                    className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left`}
                                                    style={{ width: `${item.val}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100 flex justify-between gap-2 items-center text-center">
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-gray-900">150+</div>
                                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Clients</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-gray-900">2026</div>
                                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Framework</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-black text-gray-900">4hr</div>
                                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase">Audit Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional floating design element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-8 md:-right-8 md:w-32 md:h-32 bg-indigo-500 rounded-full text-white flex flex-col items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 border-[6px] md:border-8 border-indigo-600">
                            <div className="text-xl md:text-2xl font-black leading-none italic">LIVE</div>
                            <div className="text-[6px] md:text-[8px] font-bold uppercase tracking-tighter">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgileTestingCTA;
