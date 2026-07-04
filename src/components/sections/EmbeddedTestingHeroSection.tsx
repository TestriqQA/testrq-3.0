"use client";

import React, { useState } from "react";
import { FaArrowRight, FaMicrochip, FaPlay } from "react-icons/fa";
import Link from "next/link";
import Lightbox from "../VideoLightBox";
import Breadcrumb from "@/components/ui/Breadcrumb";

const EmbeddedTestingHeroSection: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb items={[{ label: "Embedded Testing Services" }]} />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center mx-auto xl:text-left xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaMicrochip />
                            <span className="text-sm">Embedded QA Specialists</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            <span className="text-brand-blue">
                                Embedded Testing Services:&nbsp;
                            </span>
                            <br className="md:hidden" />
                            Ensuring Precision and Reliability in Connected Systems with Testriq
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
                            From automotive and medical devices to IoT and aerospace, Testriq ensures your embedded systems function flawlessly. With over 15 years of experience, we provide comprehensive verification and validation (V&V) services that guarantee safety, security, and peak performance in mission-critical environments.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Contact Us – Testriq QA Lab"
                                className="inline-flex items-center justify-center bg-brand-blue text-white min-h-[44px] min-w-[44px] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                Get Started Today
                                <FaArrowRight className="ml-2" />
                            </Link>
                            <button
                                onClick={openLightbox}
                                className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                            >
                                <FaPlay className="w-4 h-4 mr-2" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                            {[
                                ["30+", "Years Experience"],
                                ["100%", "Safety Compliance"],
                                ["ISO", "26262 & DO-178C"],
                                ["V&V", "Expertise"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left">
                                    <p className="text-brand-blue font-bold text-2xl md:text-3xl">
                                        {value}
                                    </p>
                                    <p className="text-gray-700 text-base">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - SVG Animation */}
                    <div className="hidden lg:flex items-center justify-center relative overflow-hidden">
                        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 relative shadow-xl border border-blue-200 flex items-center justify-center">
                            <svg viewBox="0 0 800 500" className="w-full h-full absolute inset-0 z-10">
                                <defs>
                                    <filter id="embed-shadow" x="-10%" y="-10%" width="120%" height="120%">
                                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                                    </filter>
                                    <filter id="embed-glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                
                                {/* Background Pulse */}
                                <circle cx="400" cy="250" r="140" fill="#25A8E0" opacity="0.1">
                                    <animate attributeName="opacity" values="0.05; 0.15; 0.05" dur="3s" repeatCount="indefinite" />
                                </circle>

                                {/* Orbital Nodes */}
                                <g>
                                    <animateTransform attributeName="transform" type="rotate" from="0 400 250" to="360 400 250" dur="10s" repeatCount="indefinite" />
                                    
                                    <circle cx="400" cy="80" r="12" fill="#25A8E0" filter="url(#embed-shadow)" />
                                    <circle cx="400" cy="420" r="12" fill="#22c55e" filter="url(#embed-shadow)" />
                                    <circle cx="230" cy="250" r="12" fill="#ef4444" filter="url(#embed-shadow)" />
                                    <circle cx="570" cy="250" r="12" fill="#eab308" filter="url(#embed-shadow)" />
                                    
                                    <path d="M 400 80 A 170 170 0 1 1 399.9 80" fill="none" stroke="#25A8E0" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                                </g>
                            </svg>
                            <FaMicrochip className="text-9xl text-brand-blue z-20 relative bg-white rounded-xl shadow-lg p-4" style={{ width: '160px', height: '160px' }} />
                        </div>
                    </div>
                </div>

                <Lightbox
                    isOpen={isLightboxOpen}
                    videoLink="https://yourvideolink.com"
                    onClose={closeLightbox}
                />
            </div>
        </section>
    );
};

export default EmbeddedTestingHeroSection;
