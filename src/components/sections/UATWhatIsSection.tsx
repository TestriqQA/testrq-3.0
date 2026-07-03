"use client";

import React from "react";
import { FaCheckCircle, FaUsers, FaArrowRight, FaBriefcase, FaLightbulb } from "react-icons/fa";

const UATWhatIsSection: React.FC = () => {
    const characteristics = [
        { icon: <FaBriefcase />, text: "Business-focused: Validates requirements, not just technical specs." },
        { icon: <FaUsers />, text: "End-user involvement: Actual users conduct the testing." },
        { icon: <FaLightbulb />, text: "Real-world scenarios: Uses realistic workflows and business data." },
        { icon: <FaCheckCircle />, text: "Final validation: The last line of defense before production." },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div
      className="space-y-6"
    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-8 border-brand-blue pl-6">
                            What Is <span className="text-brand-blue">User Acceptance Testing?</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            User Acceptance Testing (UAT) is fundamentally different from technical testing phases. While technical testing validates that software works according to technical specifications, UAT validates that software works according to business requirements and enables users to accomplish their objectives.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            UAT services involve end-users testing the system in realistic business scenarios to confirm it supports their workflows, meets their expectations, and delivers tangible business value.
                        </p>

                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {characteristics.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:border-brand-blue group">
                                    <div className="mt-1 text-brand-blue group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
      className="bg-white rounded-2xl p-8 shadow-2xl shadow-blue-900/10 border border-brand-blue/20"
    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center text-xl">QA</span>
                            The Final Validation Phase
                        </h3>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">01</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Acceptance Criteria</h4>
                                    <p className="text-sm text-gray-600">Testing validates predefined criteria established by business stakeholders.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">02</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Business Impact Focus</h4>
                                    <p className="text-sm text-gray-600">Identifies critical issues that directly affect business outcomes and ROI.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">03</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Sign-off Requirement</h4>
                                    <p className="text-sm text-gray-600">Successful UAT results in formal business sign-off for global production deployment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <button className="w-full flex items-center justify-between text-brand-blue font-bold group cursor-pointer">
                                <span>Download UAT Checklist</span>
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UATWhatIsSection;
