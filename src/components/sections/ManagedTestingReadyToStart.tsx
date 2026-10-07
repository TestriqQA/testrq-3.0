"use client";

import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaCalendarAlt,
    FaCheckCircle,
    FaSearch,
    FaBullseye,
    FaBalanceScale,
    FaHandshake,
    FaFileContract,
    FaRocket,
    FaChartLine,
} from "react-icons/fa";

const ManagedTestingReadyToStart: React.FC = () => {
    const roadmapSteps = [
        { icon: <FaSearch />, label: "Assess Current State" },
        { icon: <FaBullseye />, label: "Define Objectives" },
        { icon: <FaBalanceScale />, label: "Evaluate Options" },
        { icon: <FaHandshake />, label: "Select Provider" },
        { icon: <FaFileContract />, label: "Define SLAs" },
        { icon: <FaRocket />, label: "Implement" },
        { icon: <FaChartLine />, label: "Monitor & Optimize" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-indigo-700">
            <div className="max-w-7xl mx-auto">
                {/* Implementation Steps */}
                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Next Steps:{" "}
                        <span className="text-yellow-300">Implementing Managed Testing</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {roadmapSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur text-white flex items-center justify-center text-lg mb-2">
                                    {step.icon}
                                </div>
                                <span className="text-xs text-blue-200 font-medium text-center max-w-[80px]">{step.label}</span>
                            </div>
                            {index < roadmapSteps.length - 1 && (
                                <FaArrowRight className="text-white/40 text-xs mt-[-16px]" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Benefits */}
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-6">
                            Transform Your QA Function with Managed Testing
                        </h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Ready to transform your QA function through managed testing
                            services? Testriq&apos;s team of ISTQB-certified experts is ready
                            to help.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Free no-obligation assessment of your testing needs",
                                "Custom engagement model tailored to your requirements",
                                "SLA-backed quality outcomes — not just activity",
                                "Dedicated team that becomes an extension of your org",
                                "Continuous improvement and optimization over time",
                                "Global reach — US, UK, EU, India, Asia, UAE",
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-blue-100">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - CTA Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Contact Testriq
                        </h3>

                        <div className="space-y-6">
                            <Link href="/contact-us">
                                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-indigo-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                                    <span>Start Free Consultation</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="text-center text-gray-500">
                                <span>or reach us directly</span>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                                    <button className="flex w-full items-center cursor-pointer justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                                        <FaCalendarAlt className="text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-gray-700">Schedule a Call</span>
                                    </button>
                                </Link>

                                <button
                                    onClick={() => (window.location.href = "tel:+919152929343")}
                                    className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
                                >
                                    <FaPhone className="text-green-600 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-gray-700">(+91) 915-2929-343</span>
                                </button>

                                <button
                                    onClick={() => (window.location.href = "mailto:contact@testriq.com")}
                                    className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                                >
                                    <FaEnvelope className="text-purple-600 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-gray-700">contact@testriq.com</span>
                                </button>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="text-center text-sm text-gray-600 mb-4">
                                    Trusted by 500+ engineering teams worldwide
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-lg font-bold text-indigo-600">15+</div>
                                        <div className="text-xs text-gray-500">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-green-600">180+</div>
                                        <div className="text-xs text-gray-500">ISTQB Certified</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-cyan-600">100%</div>
                                        <div className="text-xs text-gray-500">Satisfaction</div>
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

export default ManagedTestingReadyToStart;
