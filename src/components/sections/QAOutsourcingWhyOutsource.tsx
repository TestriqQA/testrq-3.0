import React from "react";
import {
    FaDollarSign,
    FaRocket,
    FaCheckCircle,
    FaLayerGroup,
    FaSearch,
    FaCogs,
} from "react-icons/fa";

const QAOutsourcingWhyOutsource: React.FC = () => {
    const benefits = [
        {
            icon: <FaDollarSign className="text-xl" />,
            title: "Lower QA costs",
            color: "indigo",
            description:
                "no hiring, training, tooling, or infrastructure overhead. Pay only for the testing you need.",
        },
        {
            icon: <FaRocket className="text-xl" />,
            title: "Ship faster",
            color: "cyan",
            description:
                "a ready team starts testing quickly, so releases don't wait on QA hiring.",
        },
        {
            icon: <FaCheckCircle className="text-xl" />,
            title: "Certified expertise",
            color: "green",
            description:
                "ISTQB-certified engineers across manual, automation, performance, and security testing.",
        },
        {
            icon: <FaLayerGroup className="text-xl" />,
            title: "Scale on demand",
            color: "orange",
            description:
                "add or reduce testers as your roadmap changes, without HR friction.",
        },
        {
            icon: <FaSearch className="text-xl" />,
            title: "Independent, unbiased testing",
            color: "purple",
            description:
                "an external team surfaces issues an internal team may overlook.",
        },
        {
            icon: <FaCogs className="text-xl" />,
            title: "Focus on your product",
            color: "indigo",
            description: "your developers build; we own quality.",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string } } = {
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
            green: { bg: "bg-green-50", text: "text-green-600" },
            orange: { bg: "bg-orange-50", text: "text-orange-600" },
            purple: { bg: "bg-purple-50", text: "text-purple-600" },
        };
        return colorMap[color] || colorMap.indigo;
    };

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Benefits</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why <span className="text-brand-blue">Outsource Your QA</span> to Testriq?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const colors = getColorClasses(benefit.color);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                            >
                                <div className="p-6 flex-1 flex flex-col">
                                    <div
                                        className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QAOutsourcingWhyOutsource;
