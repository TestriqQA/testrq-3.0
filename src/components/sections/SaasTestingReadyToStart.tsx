"use client";

import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaCalendarAlt,
} from "react-icons/fa";

const SaasTestingReadyToStart: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-indigo-700">
            <div className="max-w-7xl mx-auto">
                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Secure Your{" "}
                        <span className="text-yellow-300">SaaS Application</span> with
                        Expert Testing?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Transform your SaaS quality assurance with multi-tenant testing,
                        compliance validation, performance engineering, and security
                        audits designed for cloud-first companies.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-6">
                            Next Steps: Implementing SaaS Testing
                        </h3>
                        <div className="space-y-4 mb-8">
                            {[
                                { step: "1", title: "Assess Current State", desc: "Evaluate existing testing practices and identify gaps" },
                                { step: "2", title: "Define Testing Strategy", desc: "Prioritize testing efforts based on business risk" },
                                { step: "3", title: "Build Test Infrastructure", desc: "Establish CI/CD pipelines and test environments" },
                                { step: "4", title: "Implement Automation", desc: "Start with critical paths and expand coverage" },
                                { step: "5", title: "Monitor & Optimize", desc: "Track metrics and continuously improve effectiveness" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-indigo-900 text-sm font-bold">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{item.title}</h4>
                                        <p className="text-blue-100 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Get Your SaaS QA Assessment
                        </h3>

                        <div className="space-y-6">
                            <Link href="/contact-us">
                                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-indigo-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                                    <span>Start Free Assessment</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="text-center text-gray-500">
                                <span>or</span>
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
                                    <span className="font-medium text-gray-700">Call: (+91) 915-2929-343</span>
                                </button>

                                <button
                                    onClick={() => (window.location.href = "mailto:contact@testriq.com")}
                                    className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                                >
                                    <FaEnvelope className="text-purple-600 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-gray-700">Email: contact@testriq.com</span>
                                </button>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="text-center text-sm text-gray-600 mb-4">
                                    Global offices across US, UK, EU, India, Asia, and UAE
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-lg font-bold text-cyan-600">500+</div>
                                        <div className="text-xs text-gray-500">SaaS Apps Tested</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-green-600">400%</div>
                                        <div className="text-xs text-gray-500">Average ROI</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-indigo-600">99.9%</div>
                                        <div className="text-xs text-gray-500">Uptime Validated</div>
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

export default SaasTestingReadyToStart;
