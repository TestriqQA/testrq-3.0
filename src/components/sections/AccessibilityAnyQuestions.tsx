"use client";

import React from "react";
import { FaUniversalAccess, FaChevronRight } from "react-icons/fa";

const AccessibilityAnyQuestions: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 lg:p-20 text-white relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <FaUniversalAccess className="text-[15rem] rotate-12" />
                    </div>

                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            Ready to Ensure Digital Inclusion for Everyone?
                        </h2>
                        <p className="text-xl text-white mb-12 leading-relaxed italic">
                            Don&apos;t exclude potential users due to accessibility barriers. Contact Testriq today for a comprehensive accessibility audit and ensure your digital presence is usable by all.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <button
                                onClick={() => (window.location.href = "/contact-us")}
                                className="px-10 py-5 bg-white text-brand-blue font-bold text-lg rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                            >
                                Schedule Free Consultation
                                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex flex-col justify-center">
                                <span className="text-sm uppercase tracking-widest font-bold text-white mb-1">Response Time</span>
                                <span className="font-bold">Under 24 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilityAnyQuestions;
