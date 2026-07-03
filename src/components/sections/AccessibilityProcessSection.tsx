"use client";

import React from "react";
import { FaGraduationCap, FaTools, FaUniversalAccess, FaUserCheck, FaCode } from "react-icons/fa";

const AccessibilityProcessSection: React.FC = () => {
    const pillars = [
        {
            icon: FaGraduationCap,
            title: "Deep Understanding of Standards",
            text: "Expert knowledge of WCAG 2.1 AA standards, Section 508, and other global accessibility guidelines."
        },
        {
            icon: FaTools,
            title: "Comprehensive Testing Approach",
            text: "A balanced blend of Automated solutions (WAVE, Axe) and Manual testing by certified experts."
        },
        {
            icon: FaUniversalAccess,
            title: "Assistive Technology Proficiency",
            text: "Extensive experience with various tools, including JAWS and NVDA screen reader compatibility testing."
        },
        {
            icon: FaUserCheck,
            title: "Focus on UX for Disabled Users",
            text: "Beyond compliance, we prioritize the real-world experience of users with diverse needs."
        },
        {
            icon: FaCode,
            title: "Technical Depth",
            text: "Meticulous analysis of Semantic HTML, ARIA roles, Keyboard navigation, and Color contrast analysis."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-brand-blue text-white overflow-x-clip relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            The Testriq <span className="text-white">Advantage</span>: Unparalleled Expertise in Digital Accessibility
                        </h2>
                        <p className="text-xl text-white leading-relaxed mb-10">
                            With over three decades at the forefront of independent QA and testing, Testriq brings unparalleled Experience, Expertise, Authoritativeness, and Trustworthiness to the field of digital accessibility.
                        </p>
                        <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                            <span className="font-bold text-2xl block text-white">15+ Years</span>
                            <span className="text-white text-sm italic">Woven into every service we provide</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-300/20 flex items-center justify-center">
                                    <pillar.icon className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                                    <p className="text-white leading-relaxed">{pillar.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessibilityProcessSection;
