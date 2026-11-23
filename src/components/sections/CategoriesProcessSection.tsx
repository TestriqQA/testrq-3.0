"use client";

import React, { useRef } from "react";
import {
    ClipboardList,
    FileText,
    PenTool,
    Play,
    BarChart3,
    RefreshCw,
} from "lucide-react";

interface ProcessStep {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const processSteps: ProcessStep[] = [
    {
        icon: <ClipboardList className="w-6 h-6" />,
        title: "Requirement Analysis",
        description: "Deep dive into your testing needs and business objectives",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Test Planning",
        description: "Strategic test plan aligned with your delivery timeline",
        color: "from-indigo-500 to-indigo-600",
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Test Design",
        description: "Comprehensive test cases covering all scenarios",
        color: "from-violet-500 to-violet-600",
    },
    {
        icon: <Play className="w-6 h-6" />,
        title: "Execution",
        description: "Systematic testing with real-time defect tracking",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Reporting",
        description: "Detailed reports with actionable insights",
        color: "from-fuchsia-500 to-fuchsia-600",
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "Continuous Improvement",
        description: "Ongoing optimization of testing processes",
        color: "from-pink-500 to-pink-600",
    },
];

const CategoriesProcessSection: React.FC = () => {
    const ref = useRef(null);    // Restyled to the light theme to match the rest of the site: #F5F5F5 band,
    // brand-blue pill badge and accent word, white cards with sky icon tiles and
    // HomeProcesses-style numbered markers. `step.color` is no longer rendered.
    return (
        <section ref={ref} className="py-20 bg-[theme(color.background.gray)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
      className="text-center mb-16"
    >
                    <span className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Our Process</span>
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Proven Testing{" "}
                        <span className="text-[theme(color.brand.blue)]">
                            Methodology
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Our systematic approach ensures comprehensive coverage and reliable
                        results for every project.
                    </p>
                </div>

                {/* Process Steps - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connector Line */}
                    <div className="absolute top-16 left-0 right-0 h-0.5 bg-sky-100" />

                    <div className="grid grid-cols-6 gap-4">
                        {processSteps.map((step, index) => (
                            <div
      key={step.title}
      className="relative group"
    >
                                {/* Step Number Badge */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-sky-50 text-[theme(color.brand.blue)] border border-sky-100 flex items-center justify-center text-sm font-black z-10 group-hover:border-[theme(color.brand.blue)] transition-colors">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 mt-6 h-full">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-[theme(color.brand.blue)] mb-4 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        {step.icon}
                                    </div>

                                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Steps - Mobile/Tablet */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {processSteps.map((step, index) => (
                        <div
      key={step.title}
      className="relative group"
    >
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
                                {/* Step Number */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-50 text-[theme(color.brand.blue)] border border-sky-100 flex items-center justify-center text-sm font-black group-hover:border-[theme(color.brand.blue)] transition-colors">
                                    {index + 1}
                                </div>

                                <div className="flex-1">
                                    {/* Icon */}
                                    <div
                                        className="w-10 h-10 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-[theme(color.brand.blue)] mb-3"
                                    >
                                        {step.icon}
                                    </div>

                                    <h3 className="text-base font-bold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesProcessSection;
