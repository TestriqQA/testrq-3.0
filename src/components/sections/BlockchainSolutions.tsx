"use client";

import React from "react";
import { FaFileCode, FaAppStoreIos, FaGem, FaWallet, FaExchangeAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const BlockchainSolutions: React.FC = () => {
    const solutions = [
        {
            icon: <FaFileCode />,
            title: "Smart Contract Audit",
            description: "Code audit with automated formal verification to identify logic flaws and gas optimization issues.",
            features: ["Manual Code Review", "Formal Verification", "Gas Optimization"],
            color: "bg-brand-blue",
        },
        {
            icon: <FaAppStoreIos />,
            title: "dApp Quality Assurance",
            description: "End-to-end testing for usability, smart contract integration, and wallet connectivity.",
            features: ["Frontend Testing", "Integration Testing", "UX Validation"],
            color: "bg-indigo-600",
        },
        {
            icon: <FaGem />,
            title: "Performance & Load",
            description: "Simulating thousands of TPS to validate consensus latency and network throughput.",
            features: ["Throughput Analysis", "Scalability Testing", "Stress Simulation"],
            color: "bg-brand-blue/80",
        },
        {
            icon: <FaWallet />,
            title: "Wallet & Exchange Security",
            description: "Validating private key encryption, multi-sig logic, and robust API security.",
            features: ["Key Management", "Multi-sig Logic", "Penetration Testing"],
            color: "bg-cyan-600",
        },
        {
            icon: <FaExchangeAlt />,
            title: "Interoperability Testing",
            description: "Security audits for cross-chain bridge protocols and atomic swap mechanisms.",
            features: ["Bridge Audits", "Cross-chain Assets", "Atomic Swaps"],
            color: "bg-sky-600",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Comprehensive <span className="text-brand-blue">Blockchain Testing</span> Solutions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Testriq provides an immutable standard of quality for your decentralized infrastructure, ensuring integrity at every node.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all duration-300 group whitespace-nowrap"
                    >
                        Explore all solutions <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
      key={index}
      className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-brand-blue/20"
    >
                            <div className={`${solution.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                {solution.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                            <p className="text-gray-600 mb-8 line-clamp-3">
                                {solution.description}
                            </p>
                            <ul className="space-y-3">
                                {solution.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Custom Card for "Start Audit" */}
                    <div
      className="bg-brand-blue rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white"
    >
                        <h3 className="text-2xl font-bold mb-4">NFT Marketplace Security?</h3>
                        <p className="mb-8 opacity-90">We offer specialized audits for creators and collectors to ensure safe trading environments.</p>
                        <Link
                            href="/contact-us"
                            className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            Secure Your Marketplace
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainSolutions;
