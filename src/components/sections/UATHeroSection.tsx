// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaUserCheck, FaHome, FaChevronRight } from "react-icons/fa";
import UATAnimation from "./UATAnimation";

const UATHeroSection: React.FC = () => {
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
                        User Acceptance Testing
                    </span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-[theme(color.brand.blue)] gap-2 text-white px-3 py-2 rounded-full mb-5 transition-transform hover:scale-105">
                            <FaUserCheck />
                            <span className="text-sm font-semibold tracking-wide uppercase">Business Validation Specialists</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            <span className="text-[theme(color.brand.blue)]">User Acceptance Testing&nbsp;</span>
                            Services: Business-Driven Quality Validation for Enterprise Software
                        </h1>

                        <div className="space-y-4">
                            <p className="text-gray-700 text-base md:text-lg max-w-xl">
                                Does your software actually meet business needs and enable users to perform real-world tasks? <strong>UAT</strong> represents the final, critical phase where actual end-users validate production readiness through the lens of business value.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg max-w-xl italic border-l-4 border-brand-blue pl-4 bg-gray-50 py-2 rounded-r-lg">
                                &ldquo;Failed UAT often reveals critical business process misalignments that technical testing never identifies.&rdquo;
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mt-8 mb-8 w-full sm:w-auto">
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <button className="group flex items-center justify-center gap-2 py-3 px-6 bg-[theme(color.brand.blue)] text-white font-semibold text-lg rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden relative cursor-pointer">
                                    <span className="relative z-10 transition-transform group-hover:scale-105">Ensure Deployment Success</span>
                                    <FaArrowRight className="w-4 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-8 mt-4">
                            {[
                                ["15+", "Years Experience"],
                                ["500K+", "UAT Cases Executed"],
                                ["100%", "Client Satisfaction"],
                                ["ISTQB", "Certified Experts"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left group cursor-default">
                                    <p className="text-[theme(color.brand.blue)] font-extrabold text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                                        {value}
                                    </p>
                                    <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex justify-center items-start lg:-mt-8 lg:-translate-y-8">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50" />
                        <UATAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATHeroSection;
