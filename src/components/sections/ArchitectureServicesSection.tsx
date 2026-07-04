"use client";

import React from "react";
import { FaNetworkWired, FaServer, FaCode, FaRocket, FaExchangeAlt } from "react-icons/fa";

const ArchitectureServicesSection: React.FC = () => {
    const services = [
        {
            icon: <FaNetworkWired className="text-4xl text-brand-blue" />,
            title: "1. Microservices & Distributed Systems Review",
            description: "Navigate the complexities of distributed computing with our microservices architecture inspection. We evaluate service boundaries, communication patterns, and data consistency models to ensure your system remains loosely coupled and highly scalable.",
        },
        {
            icon: <FaServer className="text-4xl text-indigo-500" />,
            title: "2. Cloud-Native & Serverless Validation",
            description: "Optimize your cloud investment with our cloud-native architecture review. We inspect your infrastructure-as-code (IaC), container orchestration, and serverless configurations to ensure cost-efficiency, resilience, and high availability.",
        },
        {
            icon: <FaCode className="text-4xl text-emerald-500" />,
            title: "3. Technical Debt & Codebase Health Audit",
            description: "Regain your development velocity with our technical debt assessment services. We perform deep-dive audits of your codebase and design patterns to identify 'architectural rot' and provide clear strategies for refactoring and modernization.",
        },
        {
            icon: <FaRocket className="text-4xl text-amber-500" />,
            title: "4. Scalability & Performance Inspection",
            description: "Prepare for hyper-growth with our scalability architecture review. We identify potential bottlenecks in your data layer, caching strategies, and load balancing configurations, ensuring your system can handle 10x traffic increases without failure.",
        },
        {
            icon: <FaExchangeAlt className="text-4xl text-rose-500" />,
            title: "5. Legacy Modernization & Migration Audit",
            description: "Transition from monolith to modern with confidence. Our legacy application modernization audit provides a risk-assessed roadmap for breaking down monolithic systems into agile, modern architectures.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/3 relative lg:sticky lg:top-24 z-10 bg-white lg:bg-transparent">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Comprehensive <span className="text-brand-blue">Architecture Inspection</span> Solutions
                        </h2>
                        <p className="text-gray-600 text-lg mb-12">
                            Testriq offers a full suite of services to ensure your application architecture is a catalyst for growth, not a constraint.
                        </p>
                        <div className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <p className="text-indigo-900 font-semibold mb-2">Architectural Excellence</p>
                            <p className="text-indigo-800 text-sm">
                                Engineering resilience into your digital core requires a holistic approach to system design and technical debt management.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <div
      key={index}
      className="group relative flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md"
    >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureServicesSection;
