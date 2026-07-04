"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

const BlockchainCTA: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div
      className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-12 md:p-20 text-white overflow-hidden shadow-2xl"
    >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -ml-48 -mb-48" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                            <FaShieldAlt className="text-white text-3xl" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl leading-[1.1]">
                            Ready to Secure Your <span className="text-blue-300">Blockchain Innovation?</span>
                        </h2>

                        <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed opacity-90">
                            Partner with Testriq, a premier dApp testing company, to fortify your decentralized infrastructure. Our managed blockchain testing services ensure your protocol is secure, compliant, and ready for global scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-3 py-5 px-10 bg-white text-blue-800 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg w-full sm:w-auto cursor-pointer"
                            >
                                <span>Get a ROI-Focused Audit</span>
                                <FaArrowRight />
                            </Link>
                            <Link
                                href="tel:+919152929343"
                                className="inline-flex items-center justify-center gap-3 py-5 px-10 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                            >
                                Talk to a Web3 Expert
                            </Link>
                        </div>

                        <div className="mt-12 text-blue-300 text-sm font-semibold tracking-wide uppercase">
                            Trusted by 150+ Leading Enterprises
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainCTA;
