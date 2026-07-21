"use client";

import Link from "next/link";
import React, { JSX, useState } from "react";
import {
  FaSearch,
  FaCog,
  FaBolt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const LaunchFastProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: {
    id: number;
    title: string;
    duration: string;
    icon: JSX.Element;
    description: React.ReactNode;
    activities: React.ReactNode[];
    nextStep: string;
  }[] = [
      {
        id: 1,
        title: "4-Hour Rapid Assessment",
        duration: "4 hours",
        icon: <FaSearch className="text-2xl" />,
        description: "We analyze your MVP codebase and PRDs to identify 'Showstopper' risks and essential quality requirements.",
        activities: [
          "Codebase analysis",
          "PRD review",
          "High-priority risk mapping",
          "Showstopper identification",
        ],
        nextStep: "Lean Test Planning",
      },
      {
        id: 2,
        title: "Lean Test Planning (ISO 29119-6)",
        duration: "2-4 hours",
        icon: <FaCog className="text-2xl" />,
        description: "We create an iterative test plan that focuses on the Definition of Done (DoD) for each sprint, following ISO/IEC TR 29119-6 guidelines.",
        activities: [
          "Sprint goal alignment",
          "Lean test strategy development",
          "Definition of Done (DoD) setup",
          "Iterative scope planning",
        ],
        nextStep: "Smoke Suite Setup",
      },
      {
        id: 3,
        title: "Automated Smoke Suite Setup",
        duration: "2-6 hours",
        icon: <FaBolt className="text-2xl" />,
        description: "We deploy an 'Automated Smoke Suite' that runs in your CI/CD pipeline in under 5 minutes to catch critical issues early.",
        activities: [
          "CI/CD pipeline integration",
          "Critical path automation",
          "Rapid feedback loop setup",
          "Real-time failure alerting",
        ],
        nextStep: "Agile Testing Sprints",
      },
      {
        id: 4,
        title: "Agile Testing Sprints",
        duration: "Ongoing",
        icon: <FaRocket className="text-2xl" />,
        description: <>We embed our testers directly into your team for 24/7 support, executing <Link href="/regression-testing" className="text-[theme(color.brand.blue)] underline">regression testing</Link> in real-time as you ship code.</>,
        activities: [
          "Continuous QA integration",
          "Real-time bug reporting",
          "Regression testing execution",
          "Stand-up participation",
        ],
        nextStep: "Validation",
      },
      {
        id: 5,
        title: "Exploratory & UAT Validation",
        duration: "1 day",
        icon: <FaCheckCircle className="text-2xl" />,
        description: <>Automation covers the basics, but our experts perform deep <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline">User Acceptance Testing (UAT)</Link>. This ensures your product is &apos;delightful&apos; for early adopters.</>,
        activities: [
          "Persona-based testing",
          "High-level UAT validation",
          "Usability optimization",
          "Exploratory edge-case detection",
        ],
        nextStep: "Launch Sign-off",
      },
      {
        id: 6,
        title: "Rapid Go-to-Market Sign-off",
        duration: "2 hours",
        icon: <FaCheckCircle className="text-2xl" />,
        description: "A final Test Status Report providing the comprehensive data and confidence needed to hit 'Launch' into the global market.",
        activities: [
          "Final quality metrics review",
          "Test Status Report (TSR)",
          "Launch readiness check",
          "Investor-ready documentation",
        ],
        nextStep: "Complete",
      },
    ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven{" "}
            <span className="text-brand-blue">LaunchFast QA Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our streamlined approach enables <Link href="/exploratory-testing" className="text-[theme(color.brand.blue)] underline">rapid testing sprints</Link> and quality
            delivery, seamlessly aligned with <Link title="agile QA testing" href='blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa' className="text-[theme(color.brand.blue)] underline">agile QA testing</Link> and iterative
            development for a faster go-to-market.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeStep === step.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <span className="text-2xl">{step.id}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center text-white">
                  {steps[activeStep - 1].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Duration: {steps[activeStep - 1].duration}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {steps[activeStep - 1].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Activities:
                </h4>
                <div className="space-y-3">
                  {steps[activeStep - 1].activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeStep < steps.length && (
                <div className="flex items-center space-x-3 text-blue-600">
                  <span className="font-medium">Next Step</span>
                  <span>{steps[activeStep - 1].nextStep}</span>
                  <FaRocket className="text-sm" />
                </div>
              )}
            </div>

            {/* Right Content - Process Visualization */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                LaunchFast QA Workflow
              </h4>

              {/* Timeline Visualization */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center cursor-pointer space-x-4 p-3 rounded-lg transition-all duration-300 ${step.id === activeStep
                      ? "bg-blue-100 border-2 border-blue-300"
                      : step.id < activeStep
                        ? "bg-green-50 border-2 border-green-200"
                        : "bg-gray-50 border-2 border-gray-200"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step.id === activeStep
                        ? "bg-blue-600 text-white"
                        : step.id < activeStep
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-600"
                        }`}
                    >
                      {step.id < activeStep ? "✓" : step.id}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {step.duration}
                      </div>
                    </div>
                    {step.id === activeStep && (
                      <div className="text-blue-600 animate-pulse">
                        {steps[activeStep - 1].icon}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="text-blue-600 font-medium">
                    {Math.round((activeStep / steps.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(activeStep / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastProvenTestingProcess;
