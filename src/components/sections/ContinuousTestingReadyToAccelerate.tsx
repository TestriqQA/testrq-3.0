"use client";

import Link from "next/link";
import React from "react";
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaCalendarAlt,
} from "react-icons/fa";

const ContinuousTestingReadyToAccelerate: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
            <div className="max-w-7xl mx-auto">
                <div className="text-center text-white mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to{" "}
                        <span className="text-yellow-300">Accelerate Your Pipeline</span>{" "}
                        with Continuous Testing?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Transform your CI/CD pipeline with world-class continuous testing
                        services. Eliminate bottlenecks, shift quality left, and deliver
                        faster with confidence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-6">
                            What You Get with Our Continuous Testing Services
                        </h3>

                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Zero-Touch Pipeline Integration",
                                    desc: "Seamless integration with Jenkins, GitLab, Azure DevOps & more",
                                },
                                {
                                    title: "Instant Feedback on Every Commit",
                                    desc: "Developers know within minutes if changes introduce defects",
                                },
                                {
                                    title: "DORA Elite Metrics Achievement",
                                    desc: "Optimized for deployment frequency and lead time for changes",
                                },
                                {
                                    title: "AI-Driven Test Orchestration",
                                    desc: "Intelligent test selection and prioritization for faster cycles",
                                },
                                {
                                    title: "Environmental Parity Guarantee",
                                    desc: "Tests run in environments that perfectly mirror production",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-purple-900 text-sm font-bold">
                                            ✓
                                        </span>
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
                                Free Pipeline Assessment Includes:
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    "CI/CD pipeline health analysis",
                                    "Test automation coverage gap assessment",
                                    "DORA metrics benchmarking",
                                    "Custom continuous testing strategy",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - CTA Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Accelerate Your Pipeline Today
                        </h3>

                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <Link href="/contact-us">
                                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                                    <span>Get Free Pipeline Assessment</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="text-center text-gray-500">
                                <span>or</span>
                            </div>

                            {/* Contact Options */}
                            <div className="grid grid-cols-1 gap-4">
                                <Link
                                    href="https://calendar.app.google/uUHn8prcXbdqcvVb6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="flex w-full items-center cursor-pointer justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                                        <FaCalendarAlt className="text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-gray-700">
                                            Schedule a Call
                                        </span>
                                    </button>
                                </Link>

                                <button
                                    onClick={() =>
                                        (window.location.href = "tel:+919152929343")
                                    }
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
                                    Trusted for continuous testing excellence
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-lg font-bold text-cyan-700">
                                            500+
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Pipelines Optimized
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-green-700">
                                            10x
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Faster Releases
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-indigo-600">
                                            99.6%
                                        </div>
                                        <div className="text-xs text-gray-500">Test Pass Rate</div>
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
                            Ready to Transform Your CI/CD Pipeline?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join industry leaders who trust Testriq for comprehensive
                            continuous testing solutions. Let&apos;s discuss how we can
                            eliminate your testing bottlenecks and accelerate releases.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <Link href="/contact-us">
                                <button className="bg-yellow-400 cursor-pointer text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                                    Start Free Assessment
                                </button>
                            </Link>
                            <Link href="/case-studies">
                                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                                    View Success Stories
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContinuousTestingReadyToAccelerate;
