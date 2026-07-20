// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaBullseye, FaUsers, FaChartLine } from "react-icons/fa";

const ManagedTestingWhatAre: React.FC = () => {
    const comparisonRows = [
        { aspect: "Accountability", traditional: "Client owns testing strategy and outcomes", managed: "Vendor owns testing strategy, execution, and outcomes" },
        { aspect: "Engagement Model", traditional: "Staff augmentation (renting headcount)", managed: "Strategic partnership (buying quality assurance)" },
        { aspect: "Pricing Model", traditional: "Time & materials or fixed headcount", managed: "Outcome-based or SLA-backed pricing" },
        { aspect: "Governance", traditional: "Client manages vendor activities", managed: "Vendor manages testing process with client oversight" },
        { aspect: "Scalability", traditional: "Limited by fixed headcount", managed: "Scales with business needs automatically" },
        { aspect: "Risk Transfer", traditional: "Client bears testing risk", managed: "Vendor bears testing risk through SLAs" },
        { aspect: "Process Ownership", traditional: "Client defines and owns processes", managed: "Vendor owns and optimizes processes" },
        { aspect: "Reporting", traditional: "Activity-based (hours, test cases)", managed: "Outcome-based (quality metrics, defect rates)" },
    ];

    const pillars = [
        {
            icon: <FaBullseye className="text-3xl" />,
            title: "Strategic Ownership",
            color: "indigo",
            description: "The vendor doesn't simply execute tests — they own the testing strategy. This includes designing the test approach aligned with your business objectives, identifying the highest-risk areas, optimizing test coverage, and continuously improving the testing process.",
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Resource Management",
            color: "cyan",
            description: "The vendor manages all QA resources, including hiring, training, retention, and scaling. You don't need to recruit QA engineers, manage team dynamics, or handle turnover. This eliminates the infrastructure and overhead costs of maintaining an in-house team.",
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: "Outcome Accountability",
            color: "green",
            description: "Unlike staff augmentation where you pay for hours worked, managed QA services are governed by Service Level Agreements (SLAs) and KPIs. The vendor is accountable for defect detection rates, test coverage, MTTD, and other quality metrics.",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-600" },
            green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-green-600" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Understanding the Model</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Are <span className="text-brand-blue">Managed Testing Services</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A fundamental departure from traditional{" "}
                        <Link
                            href="/qa-outsourcing-services"
                            className="text-brand-blue hover:underline"
                        >
                            QA outsourcing
                        </Link>{" "}
                        — shifting risk, responsibility, and strategy ownership to your
                        testing partner.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-16">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="px-6 py-4 text-left text-sm font-semibold">Aspect</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    <span className="text-red-300">Traditional QA Outsourcing</span>
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">
                                    <span className="text-green-300">Managed Testing Services</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                                        } hover:bg-gray-50 transition-colors`}
                                >
                                    <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{row.aspect}</td>
                                    <td className="px-6 py-4 text-red-600 text-sm">{row.traditional}</td>
                                    <td className="px-6 py-4 text-green-600 text-sm font-medium">{row.managed}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Three Pillars */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                        The Three Pillars of <span className="text-brand-blue">Managed Testing</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => {
                        const colors = getColorClasses(pillar.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {pillar.icon}
                                        <div>
                                            <div className="text-xs text-white/70 font-semibold">Pillar {index + 1}</div>
                                            <h4 className="text-lg font-bold">{pillar.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ManagedTestingWhatAre;
