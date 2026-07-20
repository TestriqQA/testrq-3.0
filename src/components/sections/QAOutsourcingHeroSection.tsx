import React from "react";
import Link from "next/link";
import { FaHome, FaChevronRight, FaHandshake, FaArrowRight } from "react-icons/fa";

const QAOutsourcingHeroSection: React.FC = () => {
    return (
        <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
                        <Link href="/" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                            <FaHome className="text-lg" /> Home
                        </Link>
                        <FaChevronRight className="text-xs text-gray-400" />
                        <span className="text-brand-blue">QA Outsourcing</span>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm mb-4">
                        <FaHandshake className="mr-2" />
                        ISTQB-Certified QA Teams
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                        <span className="text-brand-blue">QA Outsourcing</span> Services
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Plug in dedicated, ISTQB-certified QA teams that test faster, catch more
                        defects, and cut your quality-assurance costs &mdash; without the overhead
                        of hiring in-house.
                    </p>

                    <p className="text-base text-gray-600 leading-relaxed mb-8">
                        Testriq is a pure-play QA outsourcing company. We take on your software
                        testing end-to-end &mdash; manual, automation, performance, security, API,
                        mobile, and web &mdash; so your engineers can focus on building the product
                        while we make sure it ships reliably.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="https://calendar.app.google/uUHn8prcXbdqcvVb6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                                Book a Free Consultation <FaArrowRight className="ml-2" />
                            </button>
                        </Link>
                        <Link href="/contact-us">
                            <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center">
                                Get a Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QAOutsourcingHeroSection;
