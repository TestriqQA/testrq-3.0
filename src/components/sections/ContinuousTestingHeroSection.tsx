"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
    FaRocket,
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
} from "react-icons/fa";

const Lightbox = dynamic(() => import("../VideoLightBox"), { ssr: false });
import ContinuousTestingAnimation from "./ContinuousTestingAnimation";

const ContinuousTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-cyan-50 to-indigo-50 overflow-hidden">
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
                    <span className="text-brand-blue">Continuous Testing</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
                            <FaRocket className="mr-2" />
                            CI/CD Quality Engineering
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
                            <span className="text-brand-blue">Continuous Testing</span>{" "}
                            Services: Accelerate Your CI/CD Pipeline with Confidence
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                In the modern era of rapid software delivery,{" "}
                                <span className="font-semibold text-brand-blue">
                                    speed is nothing without quality
                                </span>
                                . As a global independent QA and testing house, Testriq
                                provides world-class Continuous Testing Services designed to
                                integrate seamlessly into your{" "}
                                <Link
                                    href="/automation-testing-services"
                                    className="text-brand-blue underline"
                                >
                                    DevOps ecosystem
                                </Link>
                                .
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                We help organizations{" "}
                                <span className="font-semibold">shift quality to the left</span>
                                , ensuring that every code commit is a step toward a more
                                reliable, high-performing product.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4 w-full sm:w-auto">
                            <Link href="/contact-us">
                                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                    Get Started Today
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-cyan-600">
                                    10x
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Faster Releases
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                                    DORA
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Elite Metrics
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                                    99.6%
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Test Pass Rate
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-green-600">
                                    24/7
                                </div>
                                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                                    Pipeline Testing
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - CI/CD Animation */}
                    <div className="relative">
                        <ContinuousTestingAnimation />
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

export default ContinuousTestingHeroSection;
