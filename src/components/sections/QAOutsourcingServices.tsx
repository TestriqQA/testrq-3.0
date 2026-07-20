import React from "react";
import Link from "next/link";
import {
    FaClipboardCheck,
    FaCogs,
    FaTachometerAlt,
    FaShieldAlt,
    FaCode,
    FaMobileAlt,
    FaGlobe,
    FaBug,
} from "react-icons/fa";

const QAOutsourcingServices: React.FC = () => {
    const services = [
        {
            icon: <FaClipboardCheck className="text-xl" />,
            title: "Manual Testing",
            href: "/manual-testing-services",
            color: "indigo",
        },
        {
            icon: <FaCogs className="text-xl" />,
            title: "Test Automation",
            href: "/automation-testing-services",
            color: "cyan",
        },
        {
            icon: <FaTachometerAlt className="text-xl" />,
            title: "Performance & Load Testing",
            href: "/performance-testing-services",
            color: "green",
        },
        {
            icon: <FaShieldAlt className="text-xl" />,
            title: "Security Testing (VAPT)",
            href: "/security-testing",
            color: "orange",
        },
        {
            icon: <FaCode className="text-xl" />,
            title: "API Testing",
            href: "/api-testing",
            color: "purple",
        },
        {
            icon: <FaMobileAlt className="text-xl" />,
            title: "Mobile App Testing",
            href: "/mobile-application-testing",
            color: "indigo",
        },
        {
            icon: <FaGlobe className="text-xl" />,
            title: "Web Application Testing",
            href: "/web-application-testing-services",
            color: "cyan",
        },
        {
            icon: <FaBug className="text-xl" />,
            title: "Regression Testing",
            href: "/regression-testing",
            color: "green",
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
                        <span className="text-sm">● Services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        QA Services <span className="text-brand-blue">We Deliver</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        End-to-end testing coverage across every layer of your product.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const colors = getColorClasses(service.color);
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex items-center gap-4 group"
                            >
                                <div
                                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                                >
                                    <span className={colors.text}>{service.icon}</span>
                                </div>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QAOutsourcingServices;
