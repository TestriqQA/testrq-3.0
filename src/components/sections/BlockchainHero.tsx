// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLink, FaHome, FaChevronRight } from "react-icons/fa";
import BlockchainAnimation from "./BlockchainAnimation";

const BlockchainHero: React.FC = () => {
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
                        Blockchain App Testing
                    </span>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
                        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5 shadow-md">
                            <FaLink />
                            <span className="text-sm font-semibold">Engineering Trust in Web3</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Blockchain <span className="text-brand-blue">App Testing Services</span>
                            <br />
                            <span className="text-2xl md:text-3xl text-gray-700 font-bold italic">Securing the Future of Web3</span>
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                            In the rapidly evolving Web3 landscape, security is high-stakes. Our blockchain app testing services ensure your <span className="text-brand-blue font-semibold">smart contracts, dApps, and decentralized protocols</span> are resilient, scalable, and secure. We bring over 15 years of proven excellence in independent QA to the immutable world of blockchain.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-10 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-brand-blue text-white font-bold text-lg rounded-lg hover:bg-brand-blue/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto cursor-pointer"
                            >
                                <span>Request a Web3 Audit</span>
                                <FaArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            {[
                                ["15+", "Years Experience"],
                                ["100%", "Security Assurance"],
                                ["24/7", "Network Monitoring"],
                                ["Top 1%", "Security Auditors"],
                            ].map(([value, label], i) => (
                                <div key={i} className="text-center xl:text-left transition-all duration-300">
                                    <p className="text-brand-blue font-bold text-2xl md:text-3xl mb-1">
                                        {value}
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Blockchain Dashboard Animation */}
                    <div className="relative w-full mt-8 xl:mt-0 flex justify-center">
                        <BlockchainAnimation />
                        {/* Subtle glow effect behind animation */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-blue/20 rounded-full blur-[100px] opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainHero;
