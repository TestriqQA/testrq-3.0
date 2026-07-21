"use client";

import React from "react";
import Link from "next/link";
import {
    FaArrowRight,
    FaCheckCircle,
    FaHome,
    FaChevronRight,
} from "react-icons/fa";
import FunctionalAnimation from "./FunctionalAnimation";

const FunctionalHeroSection: React.FC = () => {
    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-brand-blue">
                        Functional Testing
                    </span>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm mb-4">
                                <FaCheckCircle className="mr-2" />
                                15+ Years of QA Excellence
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Functional Testing Services:{" "}
                                <span className="text-transparent block bg-clip-text bg-brand-blue">
                                    Ensuring Flawless Software Performance
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed font-semibold mt-4">
                                Deliver software that simply works. Every time.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                We specialize in comprehensive functional testing that aligns perfectly with your business requirements and user expectations. Our expert team validates every user journey meticulously, leveraging <Link href="/qa-documentation-services" className="text-brand-blue underline">ISO 29119 standards</Link> to ensure your web, mobile, and enterprise applications perform flawlessly across all platforms.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <Link href="/contact-us">
                                    <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                        Get Started Today
                                        <FaArrowRight className="ml-2" />
                                    </button>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-600">
                                        15+
                                    </div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-purple-600">
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-600">Requirement Traceability</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-green-600">
                                        800+
                                    </div>
                                    <div className="text-sm text-gray-600">Applications Tested</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-orange-600">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-600">Expert Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Animation */}
                    <div className="relative">
                        <div>
                            <FunctionalAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionalHeroSection;
