"use client";

import React from "react";
import { FaFingerprint, FaHistory, FaBullseye } from "react-icons/fa";

const UsabilityTestingCrucialSection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div
      className="space-y-8"
    >
                        <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-xl text-sm font-bold uppercase tracking-widest">
                            The 2026 Mandate
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            The Imperative of Usability: <span className="text-brand-blue">Elevating Digital Experiences</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                In today's hyper-competitive digital landscape, a flawless user experience (UX) is no longer a luxury—it's a critical differentiator.
                            </p>
                            <p>
                                As a world-class independent QA and testing house with over <span className="font-bold text-gray-900 underline decoration-brand-blue decoration-4 underline-offset-4">15 years of proven experience</span>, Testriq understands that superior software functionality must be complemented by intuitive design and effortless interaction.
                            </p>
                            <p>
                                Our usability testing services are meticulously crafted to ensure your applications, websites, and digital products not only perform flawlessly but also delight your users, driving higher engagement and conversion rates.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        <div
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
    >
                            <div className="flex-shrink-0 w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue text-2xl">
                                <FaFingerprint />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Unique Identity</h3>
                                <p className="text-gray-600">Establish your product as a market leader through superior user-centric design and intuitive workflows.</p>
                            </div>
                        </div>

                        <div
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
    >
                            <div className="flex-shrink-0 w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-2xl">
                                <FaHistory />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years Domain Power</h3>
                                <p className="text-gray-600">Leverage our deep archival knowledge of user behavior patterns gathered over a decade of testing.</p>
                            </div>
                        </div>

                        <div
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
    >
                            <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl">
                                <FaBullseye />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Conversion Focused</h3>
                                <p className="text-gray-600">Turn visitors into loyal customers by eliminating friction points and optimizing calls-to-action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsabilityTestingCrucialSection;
