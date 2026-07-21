"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa";


const SapProvenTestingProcess: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: "System Readiness Assessment",
            description: (
                <>
                    We use SAP <Link href="/qa-documentation-services" className="text-brand-blue underline">Readiness Checks</Link> and Custom Code Migration Guides to evaluate your current ECC landscape before the move.
                </>
            ),
            duration: "Phase 1",
            activities: [
                "ECC Landscape audit",
                "Readiness check analysis",
                "Custom code migration guide",
                "Potential gap identification",
            ],
            nextStep: "Risk Strategy",
        },
        {
            id: 2,
            title: "Risk-Based Test Strategy",
            description:
                "We define testing goals based on business impact, focusing on 'Critical, Complex, and Changing' modules.",
            duration: "Phase 2",
            activities: [
                "3C module assessment",
                "Business impact analysis",
                "Testing goal definition",
                "Resource allocation plan",
            ],
            nextStep: "Data Setup",
        },
        {
            id: 3,
            title: "Test Data Setup & Masking",
            description: (
                <>
                    Provisioning compliant, high-integrity data for SAP functional testing using <Link href="/data-analysis-services" className="text-brand-blue underline">Test Data Setup</Link> and automated masking.
                </>
            ),
            duration: "Phase 3",
            activities: [
                "Data provisioning",
                "Compliant PII masking",
                "High-integrity data set setup",
                "Functional test data prep",
            ],
            nextStep: "Automation Build",
        },
        {
            id: 4,
            title: "Automated Regression Suite Build",
            description: (
                <>
                    Deploying cost-effective SAP <Link href="/automation-testing-services" className="text-brand-blue underline">Automated Regression</Link> solutions for B2B to cover core business processes.
                </>
            ),
            duration: "Phase 4",
            activities: [
                "B2B core process mapping",
                "Automation build deploy",
                "Regression suite setup",
                "Maintenance framework build",
            ],
            nextStep: "Integration & Perf",
        },
        {
            id: 5,
            title: "Integration & Performance Validation",
            description: (
                <>
                    Running <Link href="/performance-testing-services" className="text-brand-blue underline">Performance Validation</Link> on OData services and middleware (SAP CPI) for high-scale validation.
                </>
            ),
            duration: "Phase 5",
            activities: [
                "OData service stress testing",
                "SAP CPI middleware validation",
                "End-to-end integration check",
                "Performance bottleneck fix",
            ],
            nextStep: "UAT & Sign-off",
        },
        {
            id: 6,
            title: "UAT & Global Sign-off",
            description:
                "We manage SAP User Acceptance Testing with stakeholders across all time zones to ensure system is 'business-ready'.",
            duration: "Phase 6",
            activities: [
                "Cross-timezone UAT mgmt",
                "Stakeholder sign-off",
                "Business-ready validation",
                "Post-go-live readiness",
            ],
            nextStep: "Project Complete",
        },
    ];

    const currentStep = processSteps[activeStep];

    return (
        <section className="py-16 px-6 sm:px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Testriq Advantage: A Structured,{" "}
                        <span className="text-brand-blue">Risk-Based Approach</span> to SAP QA
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Our strategic approach ensures that your most critical business processes are tested first and tested thoroughly, minimizing risk and maximizing ROI.
                    </p>
                </div>

                {/* Interactive Timeline */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl mx-auto">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col lg:flex-row items-center w-full"
                            >
                                <button
                                    onClick={() => setActiveStep(index)}
                                    className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-300 z-10 ${activeStep === index
                                        ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-110"
                                        : activeStep > index
                                            ? "bg-green-500 text-white border-green-500"
                                            : "bg-white text-gray-400 border-gray-300 hover:border-blue-300"
                                        }`}
                                    aria-label={`Step ${step.id}: ${step.title}`}
                                >
                                    {activeStep > index ? "✓" : step.id}
                                    {activeStep === index && (
                                        <div className="absolute -inset-2 bg-blue-200 rounded-full animate-ping opacity-75"></div>
                                    )}
                                </button>

                                {index < processSteps.length - 1 && (
                                    <div
                                        className={`hidden lg:block flex-1 h-2 mx-4 rounded transition-colors duration-300 ${activeStep > index ? "bg-green-500" : "bg-gray-300"
                                            }`}
                                    ></div>
                                )}
                                {index < processSteps.length - 1 && (
                                    <div
                                        className={`block lg:hidden w-2 h-12 my-2 rounded transition-colors duration-300 ${activeStep > index ? "bg-green-500" : "bg-gray-300"
                                            }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Step Details */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl py-8 px-4 border border-blue-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Step Information */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                                    {currentStep.id}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {currentStep.title}
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                        Phase: {currentStep.duration}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {currentStep.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Key Activities:
                                </h4>
                                <div className="space-y-2">
                                    {currentStep.activities.map((activity, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            <span className="text-gray-600">{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {currentStep.nextStep !== "Project Complete" && (
                                <div className="flex items-center text-blue-600 font-semibold">
                                    <span className="mr-2">Next Step</span>
                                    <FaChevronRight className="w-4 h-4 mr-2" />
                                    <span>{currentStep.nextStep}</span>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Visual Process Flow */}
                        <div>
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    Strategic Workflow
                                </h4>
                                <div className="space-y-4">
                                    {processSteps.map((step, index) => (
                                        <div
                                            key={step.id}
                                            onClick={() => setActiveStep(index)}
                                            className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${activeStep === index
                                                ? "bg-blue-100 border-l-4 border-blue-500"
                                                : activeStep > index
                                                    ? "bg-green-50 border-l-4 border-green-500"
                                                    : "bg-gray-50 border-l-4 border-gray-300"
                                                }`}
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${activeStep === index
                                                    ? "bg-blue-500 text-white"
                                                    : activeStep > index
                                                        ? "bg-green-500 text-white"
                                                        : "bg-gray-300 text-gray-600"
                                                    }`}
                                            >
                                                {activeStep > index ? "✓" : step.id}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm text-gray-900">
                                                    {step.title}
                                                </div>
                                            </div>
                                            {activeStep === index && (
                                                <FaPlay className="w-4 h-4 text-blue-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SapProvenTestingProcess;
