"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const BlockchainFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are the key stages of blockchain application testing?",
            answer: "The key stages include functional testing (validating business logic), security testing (smart contract audits and penetration testing), performance testing (throughput and latency), and integration testing (wallet and API connectivity).",
        },
        {
            question: "Why is a smart contract audit necessary before deployment?",
            answer: "A smart contract audit is essential because once a contract is deployed to a blockchain, it is immutable. Any bugs or vulnerabilities cannot be easily fixed and can be exploited by malicious actors, leading to total loss of funds.",
        },
        {
            question: "How to ensure security in decentralized applications (dApps)?",
            answer: "Security in dApps is ensured through a combination of rigorous smart contract audits, secure wallet integration, front-end penetration testing, and continuous monitoring of on-chain activities.",
        },
        {
            question: "What is the difference between blockchain testing and traditional software testing?",
            answer: "Unlike traditional testing, blockchain testing must account for decentralized consensus, cryptographic security, gas costs, and the immutability of data. It requires specialized knowledge of peer-to-peer networking and distributed ledgers.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Blockchain QA <span className="text-brand-blue">Common Questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about securing your Web3 ecosystem.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-lg font-bold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 bg-brand-blue/10 w-8 h-8 rounded-full flex items-center justify-center text-brand-blue group">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlockchainFAQs;
