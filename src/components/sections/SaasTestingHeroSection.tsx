"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
    FaCloud,
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
} from "react-icons/fa";

const Lightbox = dynamic(() => import("../VideoLightBox"), { ssr: false });
import SaasTestingAnimation from "./SaasTestingAnimation";

const SaasTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-sky-50 to-violet-50 overflow-hidden">
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
                    <span className="text-brand-blue">SaaS Testing</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
                            <FaCloud className="mr-2" />
                            Cloud-First QA Experts
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
                            Premium <span className="text-brand-blue">SaaS Testing</span>{" "}
                            Services for Cloud-First Companies
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                Cloud-native SaaS applications operate under fundamentally
                                different constraints than traditional software.{" "}
                                <span className="font-semibold text-brand-blue">
                                    Multi-tenant architectures, continuous deployment cycles, and
                                    distributed infrastructure
                                </span>{" "}
                                create testing challenges that on-premise solutions never
                                encounter.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                Testriq specializes in SaaS testing services designed
                                specifically for these environments, with proven methodologies
                                across{" "}
                                <Link
                                    href="/healthcare-testing-services"
                                    className="text-brand-blue underline"
                                >
                                    healthcare
                                </Link>
                                ,{" "}
                                <Link
                                    href="/banking-finance-industry-testing-services"
                                    className="text-brand-blue underline"
                                >
                                    fintech
                                </Link>
                                ,{" "}
                                <Link
                                    href="/e-commerce-testing-services"
                                    className="text-brand-blue underline"
                                >
                                    e-commerce
                                </Link>
                                , and enterprise software sectors.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4 w-full sm:w-auto">
                            <Link href="/contact-us">
                                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                    Get SaaS QA Assessment
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-cyan-600">
                                    99.9%
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Uptime Validated
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-violet-600">
                                    SOC2
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Compliant QA
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                                    500+
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    SaaS Apps Tested
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-green-600">
                                    400%
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Average ROI
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative">
                        <SaasTestingAnimation />
                    </div>
                </div>
            </div>
            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://youtu.be/4i5_1aKqwYg?si=GWrxFYuBeMk8SXzU"
                onClose={closeLightbox}
            />
        </section>
    );
};

export default SaasTestingHeroSection;
