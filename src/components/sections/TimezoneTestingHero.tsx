// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaClock, FaHome, FaChevronRight } from "react-icons/fa";
import TimezoneTestingAnimation from "./TimezoneTestingAnimation";

const TimezoneTestingHero: React.FC = () => {
    return (
        <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
                    >
                        <FaHome className="text-lg" />
                        Home
                    </Link>
                    <FaChevronRight className="text-xs text-gray-400" />
                    <span className="text-[theme(color.brand.blue)]">
                        Testing in Your Time Zone
                    </span>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5 text-sm">
                            <FaClock />
                            <span>Real-Time Quality for Global Innovation</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Timezone Testing Services: <br />
                            <span className="text-[theme(color.brand.blue)]">Time Zone Aligned</span> <br />
                            QA Excellence in 2026
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-medium">
                            In the hyper-velocity digital economy of 2026, time is the ultimate arbiter of market leadership. Direct real-time collaboration is no longer a luxury—it&apos;s a requirement.
                            <br /><br />
                            As a world-class independent QA house with over 15 years of experience, Testriq provides <span className="text-[theme(color.brand.blue)] font-semibold">Testing in Your Time Zone</span> services engineered to synchronize your quality with your development velocity.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-10 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Get Started Today – Testriq QA Lab"
                                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
                            >
                                <span className="text-base">Synchronize Your QA</span>
                                <FaArrowRight className="w-4 h-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-8 border-t border-gray-100 pt-8">
                            {[
                                ["Zero-Lag", "Communication"],
                                ["24/7", "QA Coverage"],
                                ["15+", "Years Experience"],
                                ["Real-Time", "Bug Reporting"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left">
                                    <p className="text-[theme(color.brand.blue)] font-extrabold text-2xl">
                                        {value}
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex items-start justify-center xl:-mt-5 xl:-translate-y-1">
                        <TimezoneTestingAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimezoneTestingHero;
