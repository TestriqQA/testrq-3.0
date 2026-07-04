// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCogs, FaHome, FaChevronRight } from "react-icons/fa";
import ArchitectureAnimation from "./ArchitectureAnimation";

const ArchitectureHeroSection: React.FC = () => {
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
                        Application Architecture Inspection Services
                    </span>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaCogs />
                            <span className="text-sm">Engineering for Scalability and Resilience</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Application Architecture <span className="text-brand-blue">Inspection Services</span>
                            <br />
                            <span className="text-2xl md:text-3xl text-gray-700">Engineering Resilience in 2026</span>
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
                            In the hyper-scale digital economy of 2026, your application&apos;s architecture is the ultimate arbiter of your business agility. As systems transition toward cloud-native paradigms, the cost of structural inefficiency has never been higher.
                            <br /><br />
                            As a world-class independent QA house with over 15 years of global delivery experience, Testriq provides high-impact <span className="text-brand-blue font-semibold">Application Architecture Inspection services</span> engineered to fortify your digital core.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Get Started Today – Testriq QA Lab"
                                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold text-base md:text-lg rounded-lg hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
                            >
                                <span className="text-base">Get Started Today</span>
                                <FaArrowRight className="w-4 h-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                            {[
                                ["15+", "Years Engineering"],
                                ["Cloud", "Review Experts"],
                                ["100%", "Security-First"],
                                ["Actionable", "Roadmaps"],
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

                    {/* Right Content - Architecture Animation */}
                    <div className="relative mt-8 xl:mt-0 flex justify-center">
                        <ArchitectureAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureHeroSection;
