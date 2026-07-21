import React from "react";
import Link from "next/link";
import {
    FaUsers,
    FaBuilding,
    FaClock,
    FaUserPlus,
    FaArrowRight,
} from "react-icons/fa";

const QAOutsourcingEngagementModels: React.FC = () => {
    const models = [
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Dedicated QA Team",
            color: "indigo",
            description:
                "a testing team that works exclusively on your product, as an extension of your own team, with full-time focus and continuity.",
            href: "/dedicated-qa-team",
        },
        {
            icon: <FaBuilding className="text-3xl" />,
            title: "Managed Testing Services",
            color: "cyan",
            description:
                "we own your entire QA function end-to-end, from strategy to execution to reporting, against agreed quality goals.",
            href: "/managed-testing-services",
        },
        {
            icon: <FaClock className="text-3xl" />,
            title: "On-Demand / Project-Based QA",
            color: "green",
            description:
                "flexible testing for a specific release, sprint, or launch — scale up for launches, scale down after.",
            href: "/qa-engineer-on-demand",
        },
        {
            icon: <FaUserPlus className="text-3xl" />,
            title: "QA Staff Augmentation",
            color: "orange",
            description:
                "add individual ISTQB-certified QA engineers to your existing team to fill skill or capacity gaps.",
            href: "/staff-augmentation",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { gradient: string; light: string; text: string } } = {
            indigo: { gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50", text: "text-indigo-600" },
            cyan: { gradient: "from-cyan-500 to-cyan-600", light: "bg-cyan-50", text: "text-cyan-600" },
            green: { gradient: "from-green-500 to-green-600", light: "bg-green-50", text: "text-green-600" },
            orange: { gradient: "from-orange-500 to-orange-600", light: "bg-orange-50", text: "text-orange-600" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Engagement Models</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        QA Outsourcing{" "}
                        <span className="text-brand-blue">Engagement Models</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose the engagement model that fits how you build and release.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {models.map((model, index) => {
                        const colors = getColorClasses(model.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                            >
                                <div className={`bg-gradient-to-r ${colors.gradient} p-5 text-white`}>
                                    <div className="flex items-center gap-4">
                                        {model.icon}
                                        <h3 className="text-lg font-bold">{model.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 text-sm mb-4 flex-1">{model.description}</p>
                                    <Link
                                        href={model.href}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} hover:underline`}
                                    >
                                        Learn more
                                        <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-gray-600 mt-8">
                    Not sure which model fits? You can also{" "}
                    <Link href="/hire-qa-engineer" className="text-brand-blue font-semibold underline">
                        hire QA engineers
                    </Link>{" "}
                    individually.
                </p>
            </div>
        </section>
    );
};

export default QAOutsourcingEngagementModels;
