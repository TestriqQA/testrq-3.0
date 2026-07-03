"use client";

import React from "react";
import {
    FaMobileAlt,
    FaLaptop,
    FaBinoculars,
    FaSatelliteDish,
    FaRobot,
    FaStethoscope,
    FaWallet,
    FaCloud,
    FaArrowRight
} from "react-icons/fa";

const UsabilityTestingServicesGrid: React.FC = () => {
    const services = [
        {
            title: "Mobile App Usability Testing",
            desc: "Gesture analysis, real-device testing, and performance assessments to guarantee a seamless platform experience.",
            icon: <FaMobileAlt className="text-brand-blue" />,
            color: "bg-brand-blue/10"
        },
        {
            title: "Website Conversion Optimization",
            desc: "Optimizing navigation, content clarity, and eCommerce purchase funnels geared directly toward higher conversions.",
            icon: <FaLaptop className="text-emerald-600" />,
            color: "bg-emerald-50"
        },
        {
            title: "UX Audit & Heuristic Evaluation",
            desc: "Rapid expert-led assessment against established principles to pinpoint critical design flaws with actionable recommendations.",
            icon: <FaBinoculars className="text-amber-600" />,
            color: "bg-amber-50"
        },
        {
            title: "Remote Usability Testing Agent",
            desc: "Gathering diverse user feedback globally to understand real-world usage scenarios across different cultures.",
            icon: <FaSatelliteDish className="text-purple-600" />,
            color: "bg-purple-50"
        },
        {
            title: "AI-Driven UX Solutions",
            desc: "Advanced eye-tracking simulations and predictive modeling to identify pain points with unprecedented data precision.",
            icon: <FaRobot className="text-red-600" />,
            color: "bg-red-50"
        }
    ];

    const industryVerticals = [
        { name: "Healthcare Software", icon: <FaStethoscope /> },
        { name: "FinTech & Payments", icon: <FaWallet /> },
        { name: "SaaS Platforms", icon: <FaCloud /> },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Comprehensive <span className="text-brand-blue">Usability Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Testriq offers a full spectrum of usability testing services designed to uncover critical insights and optimize your digital products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
      key={index}
      className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all group h-full flex flex-col"
    >
                            <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-xs cursor-pointer">
                                Learn More <FaArrowRight />
                            </button>
                        </div>
                    ))}

                    {/* Special Industry Card */}
                    <div
      className="bg-brand-blue p-10 rounded-2xl text-white flex flex-col justify-between shadow-2xl"
    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Specialized Industry Usability Testing</h3>
                            <div className="space-y-4">
                                {industryVerticals.map((industry, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                                        <span className="text-xl">{industry.icon}</span>
                                        <span className="font-bold">{industry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-blue-100 italic">
                            Tailored strategies for Healthcare, FinTech, and SaaS ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsabilityTestingServicesGrid;
