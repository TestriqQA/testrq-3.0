// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaCogs, FaShieldAlt, FaRocket, FaClock } from "react-icons/fa";

const EmbeddedComplexity: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        The Unseen Complexity: <br />
                        <span className="text-brand-blue">Guaranteeing Flawless Performance</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        Embedded systems are the silent workhorses of our modern world, powering everything from smart devices to advanced aerospace technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Their seamless operation is critical, often impacting safety, security, and mission success. However, the intricate interplay of hardware and software, coupled with real-time constraints and stringent regulatory demands, makes their development and validation exceptionally challenging.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                            This is where specialized Embedded Testing Services become indispensable.
                        </p>
                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed italic">
                                Testriq, a global independent QA and testing house with over 30 years of experience, stands at the forefront of ensuring the precision and reliability of your embedded systems.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <FaCogs className="text-brand-blue" />,
                                title: "Hardware-Software Interplay",
                                desc: "Managing the complex interaction between physical components and operational logic."
                            },
                            {
                                icon: <FaClock className="text-green-500" />,
                                title: "Real-Time Constraints",
                                desc: "Ensuring deterministic behavior and latency-critical performance."
                            },
                            {
                                icon: <FaShieldAlt className="text-red-500" />,
                                title: "Regulatory Demands",
                                desc: "Navigating stringent safety standards like ISO 26262 and DO-178C."
                            },
                            {
                                icon: <FaRocket className="text-orange-500" />,
                                title: "Mission Criticality",
                                desc: "Validating systems where failure is not an option for safety or success."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                <div className="text-2xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmbeddedComplexity;
