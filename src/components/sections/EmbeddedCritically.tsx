// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaUserShield, FaRobot, FaMicrochip, FaChartLine, FaCheckCircle } from "react-icons/fa";

const EmbeddedCritically: React.FC = () => {
    const points = [
        {
            icon: <FaShieldAlt className="text-red-600" />,
            title: "Ensure Safety-Critical Reliability",
            desc: "Validate that systems perform flawlessly in environments where failure is not an option (e.g., medical devices, automotive)."
        },
        {
            icon: <FaUserShield className="text-brand-blue" />,
            title: "Guarantee Security",
            desc: "Identify and mitigate vulnerabilities in embedded software and firmware to protect against cyber threats."
        },
        {
            icon: <FaChartLine className="text-green-600" />,
            title: "Optimize Performance",
            desc: "Verify real-time responsiveness, power efficiency, and resource utilization under various operating conditions."
        },
        {
            icon: <FaCheckCircle className="text-emerald-600" />,
            title: "Achieve Regulatory Compliance",
            desc: "Ensure adherence to stringent industry standards such as ISO 26262 for automotive and DO-178C for aerospace."
        },
        {
            icon: <FaRocket className="text-indigo-600" />,
            title: "Accelerate Time-to-Market",
            desc: "Streamline the testing process to bring innovative embedded products to market faster and with greater confidence."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
                            Why Embedded Testing is Critical: <br />
                            <span className="text-brand-blue">Beyond Functionality, Towards Safety and Security</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Testing embedded systems goes far beyond traditional software QA. It requires a deep understanding of hardware-software integration, real-time operating systems, and safety-critical applications.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            The consequences of failure in an embedded system can range from minor malfunctions to catastrophic events, making rigorous testing a non-negotiable requirement.
                        </p>
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                        {points.map((point, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="mt-1 text-2xl">{point.icon}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{point.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import { FaShieldAlt, FaRocket } from "react-icons/fa";

export default EmbeddedCritically;
