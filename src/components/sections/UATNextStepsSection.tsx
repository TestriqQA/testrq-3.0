"use client";

import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGlobeAmericas, FaArrowRight } from "react-icons/fa";

const UATNextStepsSection: React.FC = () => {
    const steps = [
        "Assess UAT Needs: Evaluate your software deployment and UAT requirements",
        "Define UAT Scope: Identify business processes and workflows that need validation",
        "Contact Testriq: Reach out with your requirements and timeline",
        "Develop Plan: Work with us to develop a comprehensive UAT plan",
        "Execute UAT: Conduct testing with Testriq facilitation",
        "Obtain Sign-Off: Secure formal business approval for deployment"
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                            Your Path to <span className="text-brand-blue underline underline-offset-8">Production</span>
                        </h2>
                        <div className="space-y-4">
                            {steps.map((step, idx) => (
                                <div
      key={idx}
      className="flex items-center gap-4 group"
    >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 border border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-700 font-medium">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[40px] p-8 lg:p-12 text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-3xl" />

                        <div>
                            <h3 className="text-3xl font-bold mb-6">Contact Testriq for UAT Services</h3>
                            <p className="text-slate-400 mb-10 leading-relaxed italic">
                                Ready to ensure successful software deployment through comprehensive user acceptance testing?
                                Our experienced facilitators are ready to help.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:contact@testriq.com" className="flex items-center gap-4 hover:text-brand-blue transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                        <FaEnvelope />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Us</p>
                                        <p className="font-bold">contact@testriq.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919152929343" className="flex items-center gap-4 hover:text-brand-blue transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Call Us</p>
                                        <p className="font-bold">(+91) 915-2929-343</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                        <FaGlobeAmericas />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Offices</p>
                                        <p className="font-bold">US, UK, EU, India, Asia, UAE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="/contact-us">
                                <button className="w-full bg-brand-blue hover:bg-white hover:text-brand-blue transition-all py-4 rounded-2xl font-black uppercase tracking-[2px] shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 cursor-pointer">
                                    Free Consultation <FaArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATNextStepsSection;
