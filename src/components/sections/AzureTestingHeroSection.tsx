// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaHome, FaChevronRight, FaCloud } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import AzureTestingAnimation from "./AzureTestingAnimation";

const AzureTestingHeroSection: React.FC = () => {
    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24 overflow-x-clip">
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
                        Azure Testing Services
                    </span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-blue-100">
                            <VscAzure className="animate-pulse" />
                            <span className="text-sm font-bold tracking-wide uppercase">Azure Cloud Testing Specialists</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Navigating the <span className="text-brand-blue">Cloud Frontier:</span>
                            <br />
                            <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700">Azure Excellence in 2026</span>
                        </h1>

                        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                            In the hyper-scale digital landscape of 2026, Azure is more than a platform—it is the backbone of enterprise innovation. As a world-class independent QA and testing house with over <span className="text-brand-blue font-bold">15 years of global delivery experience</span>, Testriq provides high-impact Azure testing services engineered to secure and optimize your cloud ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-6 mb-12 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-3 py-4 px-8 bg-brand-blue text-white font-bold text-lg rounded-full hover:bg-brand-blue/90 transition-all transform hover:scale-105 shadow-xl shadow-blue-200 cursor-pointer"
                            >
                                <span>Start Your Cloud Journey</span>
                                <FaArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-8 border-t border-gray-100 pt-8 w-full">
                            {[
                                ["Azure", "Certified Experts"],
                                ["15+ Years", "Global Delivery"],
                                ["Continuous", "DevOps QA"],
                                ["ISO/SOC2", "Compliant"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left">
                                    <p className="text-brand-blue font-bold text-2xl md:text-3xl">
                                        {value}
                                    </p>
                                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Cloud Animation */}
                    <div className="relative w-full flex items-center justify-center mt-8 xl:mt-0">
                        <AzureTestingAnimation />
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AzureTestingHeroSection;
