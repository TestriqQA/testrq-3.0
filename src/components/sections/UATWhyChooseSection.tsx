"use client";

import React from "react";
import { FaGraduationCap, FaGlobe, FaCertificate, FaCrown, FaCheckDouble } from "react-icons/fa";

const UATWhyChooseSection: React.FC = () => {
    const reasons = [
        {
            icon: <FaGraduationCap />,
            title: "Experienced Facilitators",
            desc: "Our ISTQB-certified professionals bring deep domain expertise to every UAT engagement."
        },
        {
            icon: <FaCertificate />,
            title: "Business-Focused",
            desc: "We focus on your actual workflows and business ROI, not just checkboxes."
        },
        {
            icon: <FaCheckDouble />,
            title: "Validated Methodology",
            desc: "A structured approach that has executed over 500,000 UAT test cases globally."
        },
        {
            icon: <FaGlobe />,
            title: "Global Reach",
            desc: "Expert support across US, UK, EU, India, and UAE for distributed enterprise teams."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[150px] -z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-brand-blue font-black tracking-widest uppercase text-[10px] mb-6">
                            <FaCrown /> Why Testriq
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">
                            Elevating the Standard of <span className="text-brand-blue">UAT Services</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                            With 15+ years of experience in high-stakes software validation, we don&apos;t just test—we ensure
                            your software is a business success from day one.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((item, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-blue/20 text-brand-blue flex items-center justify-center text-xl">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-white uppercase text-xs tracking-wider">{item.title}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div
      className="aspect-square bg-slate-800 rounded-[60px] border border-slate-700 p-12 flex flex-col justify-center text-center shadow-2xl relative overflow-hidden"
    >
                            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-brand-blue -translate-x-4 -translate-y-4 rounded-tl-[60px]" />

                            <h3 className="text-6xl md:text-8xl font-black text-brand-blue mb-4 tracking-tighter italic">100%</h3>
                            <p className="text-2xl font-bold text-white mb-2 underline decoration-brand-blue underline-offset-8">Client Satisfaction</p>
                            <p className="text-slate-400 uppercase font-black tracking-widest text-xs">With UAT Outcomes & Deployments</p>

                            <div className="mt-12 flex justify-center gap-6">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-white">500K+</p>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Cases Managed</p>
                                </div>
                                <div className="w-px h-12 bg-slate-700" />
                                <div className="text-center">
                                    <p className="text-3xl font-black text-white">15+ Yrs</p>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Industry Legacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATWhyChooseSection;
