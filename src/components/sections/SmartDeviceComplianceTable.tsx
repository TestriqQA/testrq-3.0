// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const SmartDeviceComplianceTable: React.FC = () => {
    const standards = [
        {
            standard: "ISO/IEC/IEEE 29119-3",
            focus: "Hardware Documentation",
            relevance: "Embedded testing & result logging for global hardware standards.",
        },
        {
            standard: "SOC2 Type II",
            focus: (<>Processing <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Integrity</Link></>),
            relevance: "Secure data handling during device QA cycles.",
        },
        {
            standard: "GDPR & CCPA",
            focus: (<Link href="/data-analysis-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Data Privacy</Link>),
            relevance: "Encrypting sensitive sensor data for health & home tech.",
        },
        {
            standard: "HIPAA Compliance",
            focus: "Healthcare Regulatory",
            relevance: "Secure storage & transmission for wearable health trackers.",
        },
        {
            standard: "NTIA Baselines",
            focus: "IoT Security Baselines",
            relevance: "Protecting against sophisticated firmware attack vectors.",
        },
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <FaShieldAlt />
                        <span className="text-sm">Global Standards & Compliance</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Engineering Trust <span className="text-brand-blue">Through Compliance</span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Testriq operates under a &quot;Compliance-First&quot; methodology, ensuring your smart devices satisfy both technical performance and stringent international safety and privacy standards.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Standard</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Focus Area</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Relevance for 2026</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {standards.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-brand-blue">{item.standard}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.focus}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 italic">{item.relevance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SmartDeviceComplianceTable;
