// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaAward, FaBrain, FaSearchPlus, FaShieldAlt, FaTools, FaCheckDouble, FaMicrochip } from "react-icons/fa";

const EmbeddedTestriqAdvantage: React.FC = () => {
    const advantages = [
        { icon: <FaBrain />, title: "Deep Domain Knowledge", text: "Profound understanding of automotive, medical, and aerospace embedded testing challenges." },
        { icon: <FaTools />, title: "Advanced Testing Techniques", text: "Expertise in MIL, SIL, and HIL testing for comprehensive validation." },
        { icon: <FaSearchPlus />, title: "Hardware-Software Integration", text: "Meticulous testing of firmware validation and microcontroller interactions." },
        { icon: <FaShieldAlt />, title: "Safety-Critical Software Focus", text: "Dedicated processes for compliance with standards like ISO 26262 and DO-178C." },
        { icon: <FaAward />, title: "Test Bench Development", text: "Capabilities in advanced debugging and robust test bench creation." },
        { icon: <FaCheckDouble />, title: "Code Coverage Analysis", text: "Utilizing advanced tools to ensure thorough testing of every line of code." }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        The Testriq Advantage: <br />
                        <span className="text-brand-blue">Unparalleled Expertise in Embedded Systems QA</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto italic">
                        With over three decades at the forefront of independent QA, we bring unparalleled Experience, Expertise, Authoritativeness, and Trustworthiness to your complex systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((adv, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-blue text-2xl mb-6 shadow-sm">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{adv.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-brand-blue rounded-3xl text-white flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">System-on-Chip (SoC) Testing</h3>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Our roadmap includes specialized expertise in validating complex System-on-Chip (SoC) testing architectures, ensuring your next-gen silicon performs exactly as engineered.
                        </p>
                    </div>
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <FaMicrochip className="text-4xl text-white animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmbeddedTestriqAdvantage;
