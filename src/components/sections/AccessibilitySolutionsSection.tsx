"use client";

import React from "react";
import { FaGlobe, FaHandshake, FaBullseye } from "react-icons/fa";

const AccessibilitySolutionsSection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                            The Imperative of <span className="text-brand-blue">Digital Inclusion</span>: Making Technology Accessible to All
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            In today&apos;s digital-first world, access to information and services online is a fundamental right. Yet, countless websites, mobile applications, and software platforms remain inaccessible to individuals with disabilities.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            This not only excludes a significant portion of the population but also exposes organizations to legal risks and missed market opportunities. This is where robust <span className="font-semibold text-brand-blue">Accessibility Testing Services</span> become paramount.
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 border border-blue-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <FaGlobe className="text-8xl text-blue-100 opacity-50" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Testriq&apos;s Dedicated Mission</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
                            Testriq, a global independent QA and testing house with over 30 years of experience, is dedicated to fostering a truly inclusive digital landscape. We specialize in comprehensive Web accessibility testing and WCAG compliance testing, ensuring your digital products are usable by everyone, regardless of their abilities.
                        </p>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-brand-blue">30+</span>
                                <span className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Years Experience</span>
                            </div>
                            <div className="w-px h-12 bg-blue-200"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-brand-blue">Indep.</span>
                                <span className="text-sm text-gray-600 uppercase tracking-wider font-semibold">QA House</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilitySolutionsSection;
