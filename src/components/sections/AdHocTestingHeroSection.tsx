// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaChevronRight, FaRocket, FaClock, FaDollarSign, FaBolt } from "react-icons/fa";
import AdHocTestingAnimation from "./AdHocTestingAnimation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBreadcrumbLabel } from "@/lib/seo/breadcrumb-labels";

const AdHocTestingHeroSection: React.FC = () => {
    const stats = [
        { icon: <FaClock className="text-indigo-400" />, label: "Rapid Turnaround", value: "< 24 Hours" },
        { icon: <FaBolt className="text-yellow-400" />, label: "Response Time", value: "Instant" },
        { icon: <FaDollarSign className="text-green-400" />, label: "Cost Efficiency", value: "Up to 50%" },
        { icon: <FaRocket className="text-brand-blue" />, label: "Release Speed", value: "Accelerated" },
    ];

    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-blue/10 blur-[100px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-50/50 blur-[100px] -z-10 rounded-full"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        {/* Breadcrumbs */}
                        <Breadcrumb items={[{ label: getBreadcrumbLabel("/ad-hoc-testing", "Ad-Hoc Testing") }]} />

                        {/* Title & Description */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                            Ad-Hoc Testing Services:{" "}
                            <span className="text-brand-blue">Rapid QA</span> for Hotfixes
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                            Catch critical bugs that structured testing misses. Our ad-hoc QA experts provide rapid,
                            intuitive feedback for unplanned scenarios, emergency patches, and mobile app stability.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/contact-us">
                                <button className="cursor-pointer px-8 py-4 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue/90 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
                                    Get Rapid Feedback
                                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="https://calendar.app.google/uUHn8prcXbdqcvVb6" target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-brand-blue hover:text-brand-blue transition-all flex items-center justify-center gap-2">
                                    Schedule a Call
                                </button>
                            </Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors">
                                    <div className="mb-2">{stat.icon}</div>
                                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-8 lg:mt-0 flex justify-center">
                        {/* Featured Animation Wrapper */}
                        <div className="relative z-10 w-full max-w-xl mx-auto">
                            <AdHocTestingAnimation />
                        </div>

                        {/* Decorative floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <FaBolt />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Immediate Deployment</div>
                                    <div className="text-xs text-gray-500">On-demand QA availability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingHeroSection;
