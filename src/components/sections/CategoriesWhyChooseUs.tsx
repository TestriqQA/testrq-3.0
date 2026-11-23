"use client";

import React, { useRef } from "react";
import {
    Award,
    BadgeCheck,
    Cpu,
    ShieldCheck,
    Users2,
    Layers,
} from "lucide-react";

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const features: FeatureItem[] = [
    {
        icon: <Award className="w-6 h-6" />,
        title: "16 Years Expertise",
        description:
            "Industry-leading experience across diverse domains and technologies",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: <BadgeCheck className="w-6 h-6" />,
        title: "Certified QA Engineers",
        description:
            "ISTQB certified professionals ensuring highest quality standards",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Automation First",
        description:
            "Modern automation frameworks for faster, reliable testing cycles",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Security Focused",
        description:
            "Comprehensive security testing integrated into every project",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: <Users2 className="w-6 h-6" />,
        title: "Scalable Teams",
        description:
            "Flexible team scaling to match your project requirements",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Proven Frameworks",
        description:
            "Battle-tested methodologies refined across 500+ projects",
        gradient: "from-cyan-500 to-blue-500",
    },
];

const CategoriesWhyChooseUs: React.FC = () => {
    const ref = useRef(null);    // Restyled to the light theme to match the rest of the site: white band,
    // brand-blue pill badge and accent word, white cards with sky icon tiles.
    // `feature.gradient` is no longer rendered.
    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
      className="text-center mb-16"
    >
                    <span className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">Why Choose Us</span>
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        The Testriq{" "}
                        <span className="text-[theme(color.brand.blue)]">
                            Advantage
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        What sets us apart as your trusted software testing partner
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
      key={feature.title}
      className="group relative"
    >
                            <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 h-full">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-[theme(color.brand.blue)] mb-5 group-hover:scale-110 transition-transform duration-300"
                                >
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesWhyChooseUs;
