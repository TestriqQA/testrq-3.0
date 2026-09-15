"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaLock } from "react-icons/fa";
const CyberSecurityCTASection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div
      className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
    >
                    {/* Inner decorative icon */}
                    <div className="absolute top-0 right-0 p-12 text-[15rem] text-white/5 pointer-events-none">
                        <FaLock />
                    </div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
                            Ready to Fortify Your <span className="text-blue-200">Digital Future?</span>
                        </h2>

                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            Don't let evolving cyber threats compromise your business. Partner with Testriq for unparalleled Cyber Security Testing Services that deliver peace of mind.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-blue font-black rounded-2xl hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center uppercase tracking-widest text-sm">
                                    Free Consultation
                                    <FaArrowRight className="ml-3" />
                                </button>
                            </Link>

                            <p className="text-blue-200 text-sm font-medium">
                                ISTQB & CEH Certified Team Available 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberSecurityCTASection;
