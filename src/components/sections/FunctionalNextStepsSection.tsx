"use client";

import React from "react";
import Link from "next/link";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";

const FunctionalNextStepsSection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
            <div className="max-w-7xl mx-auto">
                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to{" "}
                        <span className="text-yellow-300">Guarantee</span> Flawless
                        Performance?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Partner with our expert functional testing team to deliver software that
                        exceeds user expectations. Get comprehensive testing coverage,
                        detailed insights, and reliable quality assurance for your
                        applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-6">
                            What You Get with Our Functional Testing Services
                        </h3>

                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Comprehensive Test Coverage", desc: "Functional, integration, system, and acceptance testing" },
                                { title: "Expert Quality Assurance", desc: "ISTQB certified testers with domain expertise" },
                                { title: "Detailed Reporting", desc: "Comprehensive test reports with actionable insights" },
                                { title: "Flexible Engagement", desc: "Dedicated teams, project-based, or on-demand testing" },
                                { title: "24/7 Support", desc: "Round-the-clock support for critical testing needs" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-900 text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{item.title}</h4>
                                        <p className="text-blue-100 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="text-lg font-semibold mb-4">
                                Service Roadmap
                            </h4>
                            <div className="space-y-3">
                                {[
                                    { step: "01", title: "Discovery", text: "Requirement analysis & goal setting." },
                                    { step: "02", title: "Strategy", text: "Custom test plan development." },
                                    { step: "03", title: "Execution", text: "Rigorous testing & bug fixing." },
                                    { step: "04", title: "Deployment", text: "Final validation & sign-off." }
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-yellow-300 font-bold text-lg">{s.step}</span>
                                        <div>
                                            <h4 className="font-semibold text-sm">{s.title}</h4>
                                            <p className="text-blue-100 text-xs">{s.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - CTA */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Start Your Functional Testing Journey
                        </h3>

                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <Link href="/contact-us">
                                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                                    <span>Get Free Consultation</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="text-center pt-4 text-gray-500">
                                <span>or</span>
                            </div>

                            {/* Contact Options */}
                            <div className="grid grid-cols-1 gap-4">
                                <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}>
                                    <button className="flex w-full items-center cursor-pointer justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                                        <FaCalendarAlt className="text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-gray-700">
                                            Schedule a Call
                                        </span>
                                    </button>
                                </Link>

                                <button
                                    onClick={() => (window.location.href = "tel:+919152929343")}
                                    className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
                                >
                                    <FaPhone className="text-green-600 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-gray-700">
                                        Call Now: (+91) 915-2929-343
                                    </span>
                                </button>

                                <button
                                    onClick={() =>
                                        (window.location.href = "mailto:contact@testriq.com")
                                    }
                                    className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                                >
                                    <FaEnvelope className="text-purple-600 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-gray-700">
                                        Email: contact@testriq.com
                                    </span>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="text-center text-sm text-gray-600 mb-4">
                                    Trusted by companies worldwide
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-lg font-bold text-blue-600">30+</div>
                                        <div className="text-xs text-gray-500">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-green-600">800+</div>
                                        <div className="text-xs text-gray-500">Apps Tested</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-purple-600">100%</div>
                                        <div className="text-xs text-gray-500">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Ready to Transform Your Software Quality?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join leading companies who trust Testriq for comprehensive functional
                            testing services. Let&apos;s discuss how we can help ensure your
                            software delivers exceptional user experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us">
                                <button className="bg-yellow-400 cursor-pointer text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                                    Start Free Consultation
                                </button>
                            </Link>
                            <Link href="/case-studies">
                                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-brand-blue transition-all duration-300">
                                    View Case Studies
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalNextStepsSection;
