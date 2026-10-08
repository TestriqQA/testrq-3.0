"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
    FaCheckDouble,
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
} from "react-icons/fa";

const Lightbox = dynamic(() => import("../VideoLightBox"), { ssr: false });
import CompatibilityTestingAnimation from "./CompatibilityTestingAnimation";

const CompatibilityTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

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
                    <span className="text-brand-blue">Compatibility Testing</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
                            <FaCheckDouble className="mr-2" />
                            Cross-Platform QA Specialists
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Compatibility <span className="text-brand-blue">Testing Services</span>: Seamless Experiences Everywhere
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                In today&apos;s fragmented digital world, your software must perform flawlessly across every device, browser, and OS. A single failure on one platform can lead to churn and brand damage.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed text-left">
                                Testriq delivers comprehensive <span className="font-semibold text-brand-blue">Cross-Browser and Device Testing</span> solutions, ensuring your application reaches the widest audience with universal performance and visual perfection.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/contact-us">
                                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
                                    Get Started Today
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto cursor-pointer"
                            >
                                <FaPlay className="mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-blue-100">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">24k+</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Device Combinations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">UI Consistency</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">Global</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Market Reach</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">ISO</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Certified QA</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative">
                        <CompatibilityTestingAnimation />
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

export default CompatibilityTestingHeroSection;
