"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaUserAstronaut,
    FaArrowRight,
    FaPlay,
    FaHome,
    FaChevronRight,
    FaMagic
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
const UsabilityTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6 font-sans">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-brand-blue">
                        Usability Testing Services
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div
      className="inline-flex items-center px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold border border-brand-blue/20 uppercase tracking-wide"
    >
                            <FaMagic className="mr-2" />
                            Elevate User Experience & Drive Conversions
                        </div>

                        <h1
      className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
    >
                            Usability Testing <span className="text-brand-blue">Services</span>
                        </h1>

                        <div
      className="space-y-6"
    >
                            <p className="text-xl md:text-2xl font-bold text-gray-800 italic border-l-4 border-brand-blue pl-4">
                                Boost user satisfaction & conversions with Testriq's expert usability testing lab.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                We offer AI-driven UX audits, mobile app usability testing, and comprehensive user research to transform your digital products into intuitive, high-performing assets.
                            </p>
                        </div>

                        <div
      className="flex flex-col sm:flex-row gap-4 pt-4"
    >
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-brand-blue cursor-pointer text-white px-8 py-5 rounded-2xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg">
                                    Get Free UX Audit
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="w-full sm:w-auto border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-5 rounded-2xl font-bold hover:bg-brand-blue/10 transition-all duration-300 flex items-center justify-center text-lg"
                            >
                                <FaPlay className="mr-2" />
                                Watch UX Lab Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Visual Representation */}
                    <div
      className="relative"
    >
                        <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="relative z-10 p-4 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1470"
                                alt="UX Testing Lab"
                                className="rounded-[2.5rem] w-full h-[500px] object-cover shadow-inner"
                            />

                            {/* Floating UI Elements */}
                            <div
      className="absolute top-1/2 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block"
    >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-bold">
                                        +42%
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Conversion Lift</div>
                                        <div className="text-xs text-gray-500">Post UX Optimization</div>
                                    </div>
                                </div>
                            </div>

                            <div
      className="absolute bottom-12 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block"
    >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                                        <FaUserAstronaut />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">User Satisfaction</div>
                                        <div className="text-xs text-gray-500">98.5% Positivity Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                isOpen={isLightboxOpen}
                videoLink="https://www.youtube.com/embed/your-video-id"
                onClose={closeLightbox}
            />
        </section>
    );
};

export default UsabilityTestingHeroSection;
