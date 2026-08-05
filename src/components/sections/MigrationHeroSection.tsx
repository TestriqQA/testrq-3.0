// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDatabase } from "react-icons/fa";
import MigrationAnimation from "./MigrationAnimation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBreadcrumbLabel } from "@/lib/seo/breadcrumb-labels";

const MigrationHeroSection: React.FC = () => {
    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <Breadcrumb items={[{ label: getBreadcrumbLabel("/migration-testing", "Migration Testing") }]} />

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
                            Zero Data Loss, Zero Downtime
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Migration Testing Services: <span className="text-brand-blue underline decoration-blue-100 underline-offset-8">Ensure Seamless Transitions</span>
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed max-w-xl italic font-medium">
                            Maximize value and mitigate risks. Testriq ensures your digital assets are transitioned flawlessly to the cloud or new platforms.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <FaDatabase className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Data Integrity</div>
                                    <div className="text-xs text-gray-500 font-medium">100% Accuracy Verified</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Global Delivery</div>
                                    <div className="text-xs text-gray-500 font-medium">Over 15+ Years Experience</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                href="/contact-us"
                                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform flex items-center justify-center gap-2"
                            >
                                Plan Your Migration
                                <FaArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors text-center"
                            >
                                View Expert Solutions
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2 w-full">
                        <MigrationAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MigrationHeroSection;
