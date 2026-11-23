"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaRocket, FaClock } from "react-icons/fa";

const CompatibilityTestingReadyToStart: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-gray-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
                <div
      className="space-y-6"
    >
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 text-blue-400 rounded-full text-sm font-bold border border-white/20">
                        <FaRocket className="mr-2" />
                        Launch Readiness
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Ready to Ensure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Universal Quality?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Partner with Testriq for expert Compatibility Testing. Safeguard your brand reputation and deliver flawless user experiences everywhere.
                    </p>
                </div>

                <div
      className="flex flex-col sm:flex-row items-center justify-center gap-6"
    >
                    <Link href="/contact-us" className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center group">
                        Start Your Free Consultation
                        <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform h-5 w-5" />
                    </Link>
                    <Link href="/contact-us" className="bg-white/5 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                        Get a Testing ROI Analysis
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                    <div className="flex items-center justify-center gap-4 text-gray-400">
                        <FaShieldAlt className="text-blue-400 text-2xl" />
                        <span className="font-medium text-sm">ISO 29119 Compliant</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                        <FaClock className="text-indigo-400 text-2xl" />
                        <span className="font-medium">Rapid Deployment</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900" />
                            ))}
                        </div>
                        <span className="font-medium">Expert Lead Engineers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompatibilityTestingReadyToStart;
