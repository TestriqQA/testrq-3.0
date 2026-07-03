"use client";

import React from "react";
import { FaCheckCircle, FaLaptopCode, FaMobileAlt, FaHandSparkles, FaSearch, FaCogs, FaUserCheck, FaShoppingCart, FaUserLock, FaHospital, FaShieldAlt, FaBookOpen, FaGlobe } from "react-icons/fa";

const AccessibilityServicesListSection: React.FC = () => {
    const services = [
        { icon: FaLaptopCode, name: "Web App Accessibility Testing" },
        { icon: FaMobileAlt, name: "Mobile App Accessibility Testing" },
        { icon: FaHandSparkles, name: "Outsourced Testing Services" },
        { icon: FaSearch, name: "Enterprise Accessibility Audits" },
        { icon: FaUserCheck, name: "WCAG 2.2 Compliance Testing" },
        { icon: FaCogs, name: "Automated Testing Solutions" },
        { icon: FaUserCheck, name: "Manual Expert Evaluation" },
        { icon: FaShoppingCart, name: "E-commerce Accessibility" },
        { icon: FaUserLock, name: "VPAT Documentation Services" },
        { icon: FaHospital, name: "Healthcare Portal Testing" },
        { icon: FaShieldAlt, name: "Managed Accessibility Services" },
        { icon: FaLaptopCode, name: "Accessibility as a Service (AaaS)" },
        { icon: FaCogs, name: "SaaS Platform Accessibility" },
        { icon: FaBookOpen, name: "Document & PDF Accessibility" },
        { icon: FaGlobe, name: "Government Website Testing" },
        { icon: FaHandSparkles, name: "Startup Focused Solutions" },
        { icon: FaCogs, name: "CI/CD Pipeline Integration" },
        { icon: FaBookOpen, name: "Educational Platform QA" }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
                        <span className="text-sm">● Our Services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Comprehensive <span className="text-brand-blue">Accessibility</span> Testing Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your Partner for an Inclusive Digital World. We leverage a blend of automated and manual techniques to ensure your digital products meet the highest standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
      key={index}
      className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
    >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <FaCheckCircle className="text-brand-blue" />
                            </div>
                            <span className="font-semibold text-gray-800 text-lg">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccessibilityServicesListSection;
