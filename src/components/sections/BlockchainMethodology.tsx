"use client";

import React from "react";
import { FaSearch, FaCode, FaVial, FaBug, FaFileAlt } from "react-icons/fa";

const BlockchainMethodology: React.FC = () => {
    const steps = [
        {
            icon: <FaSearch />,
            title: "Strategic Analysis",
            text: "We define the network architecture and identify potential attack surfaces specific to your protocol and consensus layer.",
        },
        {
            icon: <FaCode />,
            title: "Formal Verification",
            text: "Using mathematical models to prove the absolute correctness of smart contract logic and prevent logic-based exploits.",
        },
        {
            icon: <FaVial />,
            title: "Testnet Validation",
            text: "Executing comprehensive tests on Ropsten, Sepolia, or regional testnets to observe real-world decentralized behavior.",
        },
        {
            icon: <FaBug />,
            title: "Penetration Testing",
            text: "Attempting to breach the protocol using the latest Web3 exploit techniques, including oracle manipulation and 51% attacks.",
        },
        {
            icon: <FaFileAlt />,
            title: "Audit & Remediation",
            text: "Delivering a detailed report with risk findings, followed by thorough re-testing after developer fixes are implemented.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The Immutable <span className="text-blue-400">Standard</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Our rigorous, five-stage methodology ensures total quality assurance for decentralized innovations.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-900/50 hidden lg:block -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
      key={index}
      className="flex flex-col items-center text-center group"
    >
                                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 border-2 border-slate-700 group-hover:border-blue-400 group-hover:bg-blue-600 transition-all duration-300 relative">
                                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-900">
                                        {index + 1}
                                    </span>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockchainMethodology;
