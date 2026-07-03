"use client";

import React from "react";
import { FaMicrochip, FaGlobeAmericas, FaAward, FaCalendarCheck } from "react-icons/fa";

const UsabilityTestingAdvantage: React.FC = () => {
    const advantages = [
        {
            icon: <FaCalendarCheck />,
            title: "15+ Years of Dedicated QA Experience",
            desc: "Our deep understanding of software development lifecycles (SDLC) allows us to integrate Agile usability testing seamlessly into your processes."
        },
        {
            icon: <FaAward />,
            title: "ISTQB Certified Professionals",
            desc: "Our team comprises highly skilled, ISTQB certified professionals, ensuring rigorous, standardized, and globally recognized testing practices."
        },
        {
            icon: <FaMicrochip />,
            title: "AI-Driven Predictive Insights",
            desc: "Leveraging advanced analytics and proprietary AI tools, we provide predictive insights into user behavior, identifying potential issues before they arise."
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Global Reach & Nuance",
            desc: "With a strategic presence across US, UK, EU, India, Asia, and UAE, we cater to diverse cultural, linguistic, and regional nuances."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        The Testriq <span className="text-brand-blue">Advantage</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Testriq, we go beyond surface-level checks. Our approach to UX testing is holistic, combining human-led insights with cutting-edge AI-driven methodologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((item, index) => (
                        <div
      key={index}
      className="bg-gray-50 p-10 rounded-2xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col"
    >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue text-2xl mb-8 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsabilityTestingAdvantage;
