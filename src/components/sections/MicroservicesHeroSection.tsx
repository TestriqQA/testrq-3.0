// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaNetworkWired, FaHome, FaChevronRight } from "react-icons/fa";
import MicroservicesAnimation from "./MicroservicesAnimation";

const MicroservicesHeroSection: React.FC = () => {
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
                        Microservices Testing
                    </span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                            <FaNetworkWired />
                            <span className="text-sm">Distributed Systems QA Experts</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Microservices <span className="text-[theme(color.brand.blue)]">Testing Services</span>
                            <br />
                            <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold">Ensuring Quality in Distributed Systems</span>
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
                            In 2026, distributed architectures are the backbone of modern enterprise. Testriq&apos;s <span className="text-[theme(color.brand.blue)] font-semibold">Microservices Testing Services</span> provide the validation needed to navigate complex network dependencies. From <Link href="/services/api-testing" className="text-[theme(color.brand.blue)] underline">API integrity</Link> to Kubernetes-native resilience, we ensure your services are secure and scalable.
                            <br /><br />
                            We mitigate the risks of independent deployment and service fragmentation. Our approach combines contract testing, chaos engineering, and observability-driven validation to guarantee seamless communication across your entire ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                title="Schedule a consultation"
                                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
                            >
                                <span className="text-base">Get Started Today</span>
                                <FaArrowRight className="w-4 h-5" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
                            {[
                                ["500+", "Microservices Validated"],
                                ["99.9%", "Uptime Verification"],
                                ["100%", "Contract Compliance"],
                                ["24/7", "Monitoring Support"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left">
                                    <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                                        {value}
                                    </p>
                                    <p className="text-gray-700 text-base">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Visual Animation */}
                    <div className="relative">
                        <MicroservicesAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroservicesHeroSection;
