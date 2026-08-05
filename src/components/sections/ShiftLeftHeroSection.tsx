// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import ShiftLeftAnimation from "./ShiftLeftAnimation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBreadcrumbLabel } from "@/lib/seo/breadcrumb-labels";

const ShiftLeftHeroSection: React.FC = () => {
    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <Breadcrumb items={[{ label: getBreadcrumbLabel("/shift-left-testing", "Shift-Left Testing") }]} />

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                            Accelerate Quality, Reduce Costs
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Shift-Left Testing Services: <span className="text-brand-blue italic">Deliver Flawless Software, Faster</span>
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                            Embed quality at the initial stages of design and development. Proactively identify and eliminate vulnerabilities before they become critical issues.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <FaClock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Fast Cycles</div>
                                    <div className="text-xs text-gray-500 font-medium">Early Feedback Loops</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Cost Efficient</div>
                                    <div className="text-xs text-gray-500 font-medium">100x Cheaper Fixes</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform flex items-center justify-center gap-2"
                            >
                                Schedule a Consultation
                                <FaArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors text-center"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Static for now, could be animated */}
                    <div className="lg:w-1/2 w-full">
                        <ShiftLeftAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShiftLeftHeroSection;
