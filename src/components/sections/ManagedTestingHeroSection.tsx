"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaHandshake, FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";

const Lightbox = dynamic(() => import("../VideoLightBox"), { ssr: false });
import ManagedTestingAnimation from "./ManagedTestingAnimation";

const ManagedTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link href="/" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                        <FaHome className="text-lg" /> Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <Link href="/" className="hover:text-brand-blue transition-colors">Services</Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-brand-blue">Managed Testing</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
                            <FaHandshake className="mr-2" />
                            Strategic QA Partnership
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
                            <span className="text-brand-blue">Managed Testing</span> Services:
                            Strategic QA Partnership for Enterprise Growth
                        </h1>

                        <p className="text-lg text-gray-700 leading-relaxed text-left">
                            Transfer your entire testing function to a specialized partner who
                            owns the strategy, resources, tools, and outcomes. Unlike
                            traditional QA outsourcing,{" "}
                            <span className="font-semibold text-brand-blue">
                                managed testing shifts from &quot;renting headcount&quot; to
                                &quot;buying quality assurance as a strategic function.&quot;
                            </span>
                        </p>

                        <p className="text-base text-gray-600 leading-relaxed text-left">
                            With 15+ years managing testing for 50+ enterprises across
                            healthcare, fintech, e-commerce, and SaaS sectors — we deliver
                            consistent quality while reducing costs and accelerating
                            time-to-market.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4">
                            <Link href="/contact-us">
                                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                    Get Free QA Assessment <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={() => setIsLightboxOpen(true)}
                                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                            >
                                <FaPlay className="mr-2" /> Watch Demo
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-indigo-600">15+</div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-cyan-600">500K+</div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Tests Executed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-green-600">180+</div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">ISTQB Certified</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-purple-600">50+</div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Enterprise Clients</div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        <ManagedTestingAnimation />
                    </div>
                </div>
            </div>
            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://youtu.be/4i5_1aKqwYg?si=GWrxFYuBeMk8SXzU"
                onClose={() => setIsLightboxOpen(false)}
            />
        </section>
    );
};

export default ManagedTestingHeroSection;
