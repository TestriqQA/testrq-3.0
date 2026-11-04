"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import FaqJsonLd from "@/components/seo/FaqJsonLd";

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
        // Added 2026-11-04. The four above answer "what is this and why",
        // which left the page with no answer to the questions a team actually
        // arrives with. These five cover the mechanics. They are deliberately
        // written as domain answers rather than as claims about our timelines
        // or pricing, which date badly and cannot be checked by the reader.
        {
            question: "What are the most common smart contract vulnerabilities?",
            answer: "The recurring ones are reentrancy, integer overflow and underflow, broken access control on privileged functions, unchecked return values from external calls, and front-running or MEV exposure on a public mempool. Most are design flaws rather than typos, which is why reading the code line by line is not enough — the contract has to be reviewed against its intended economic behaviour as well as its syntax.",
        },
        {
            question: "How do you test gas consumption and transaction costs?",
            answer: "Gas is profiled per function against realistic input sizes, then compared against the block gas limit so that no code path can become unexecutable as data grows. Costs are re-measured after every optimisation, because a change that saves gas in one function often moves it into another. Loops over unbounded arrays are the usual cause behind a sudden fee spike in production.",
        },
        {
            question: "Can a blockchain app be tested before it goes to mainnet?",
            answer: "Yes, and it should be. A local chain gives fast, deterministic runs for unit and integration tests; a public testnet exercises real consensus timing and wallet behaviour; and a forked mainnet reproduces live contract state, so integrations with existing protocols can be tested against the data they will actually meet. Each layer catches a different class of defect, so none of them replaces the others.",
        },
        {
            question: "What is checked when testing a crypto wallet integration?",
            answer: "Key handling and signing flows, network and chain-switching behaviour, transaction states from pending through confirmed to failed, nonce handling when several transactions are sent at once, and what the interface does when a user rejects a prompt or loses connectivity mid-transaction. Wallet defects rarely lose funds outright — more often they leave the user unable to tell whether a transaction happened at all.",
        },
        {
            question: "Does an audit guarantee that a smart contract is safe?",
            answer: "No, and a provider who says otherwise is overselling. An audit substantially reduces risk by finding known vulnerability classes and logic errors, but it is a point-in-time review of one specific version of the code. Changes made after the audit, upgradeable proxy patterns, and the behaviour of external protocols a contract depends on all sit outside that snapshot and need their own coverage.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            {/* Built from the same array rendered below, so the markup and
                the visible questions cannot drift apart. */}
            <FaqJsonLd faqs={faqs} />
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

                            <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white" hidden={openIndex !== index}>
                                    {faq.answer}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlockchainFAQs;
