"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaClipboardList,
  FaCogs,
  FaPlay,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

const AutomationTestingProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Test Planning & Strategy",
      duration: "2-3 days",
      icon: <FaClipboardList className="text-2xl" />,
      description:
        "We align automation goals with business risk. Our team ranks tests based on impact to select smoke and regression suites with the highest ROI.",
      activities: [
        (<Link key={1} href="/manual-testing-services" className="text-brand-blue underline">Risk-Based Prioritization</Link>),
        "Business Goal Alignment",
        "ROI-Focused Case Selection",
        "Strategy Formalization",
      ],
      nextStep: "Test Design & Implementation",
    },
    {
      id: 2,
      title: "Test Design & Implementation",
      duration: "3-5 days",
      icon: <FaCogs className="text-2xl" />,
      description: (
        <>
          Using ISO 29119-4 standards <span className='italic'>(formal design techniques, boundary values, decision tables)</span>, we build modular, reusable testware and select the optimal tools for your infrastructure.
        </>
      ),
      activities: [
        (<Link key={2} href="/qa-documentation-services" className="text-brand-blue underline">ISO 29119-4 Design Standards</Link>),
        "Toolchain Selection",
        "Modular Component Building",
        "Reusable Library Setup",
      ],
      nextStep: "Environment & Data Management",
    },
    {
      id: 3,
      title: "Environment & Data Management",
      duration: "3-4 days",
      icon: <FaDatabase className="text-2xl" />,
      description:
        "We establish production-like test environments to mitigate flaky tests caused by service dependencies and inconsistent data.",
      activities: [
        "Production-Like Replication",
        "Dependency Mapping",
        "Mock Service Implementation",
        "Data Integrity Controls",
      ],
      nextStep: "Test Execution & Feedback",
    },
    {
      id: 4,
      title: "Test Execution & Continuous Testing",
      duration: "Continuous",
      icon: <FaPlay className="text-2xl" />,
      description: (
        <>
          Integrating suites into your CI/CD pipeline for immediate developer feedback <span className='italic'>(continuous testing)</span> and scheduled nightly runs.
        </>
      ),
      activities: [
        "CI/CD Integration Pipeline",
        "Immediate Feedback Loops",
        "Scheduled Nightly Builds",
        (<Link key="failover" href="/security-testing" className="text-brand-blue underline">Automated Failover Checks</Link>),
      ],
      nextStep: "Completion & Reporting",
    },
    {
      id: 5,
      title: "Test Completion & Reporting",
      duration: "Automated",
      icon: <FaCheckCircle className="text-2xl" />,
      description: (
        <>
          Automated result synthesis <span className='italic'>(Automate combining results)</span> providing stakeholders with real-time visibility into software health and overall risk.
        </>
      ),
      activities: [
        "Automated Result Synthesis",
        "Real-Time Health Dashboard",
        "Risk Assessment Reports",
        "Stakeholder Visibility",
      ],
      nextStep: "Process Complete",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Global QA <span className="text-brand-blue">Automation Methodology</span>: The ISO 29119-2 Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We utilize the <Link href="/blog/post/automated-etl-testing" className="text-brand-blue font-semibold underline">ISO/IEC/IEEE 29119-2</Link> generic test process to ensure your automation is repeatable, traceable, and integrates seamlessly into your CI/CD pipeline.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-brand-blue rounded-full items-center justify-center z-10">
                  <span className="text-brand-blue font-bold text-lg flex justify-center pt-1">
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <div className={`w-full lg:w-5/12`}>
                  <div
                    className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${activeStep === step.id ? "ring-2 ring-brand-blue" : ""
                      }`}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-brand-blue w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-white">{step.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-sm text-brand-blue font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Activities:
                      </h4>
                      {step.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Next Step Indicator */}
                    {step.nextStep !== "Process Complete" && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Next: </span>
                        <span className="text-sm font-medium text-brand-blue">
                          {step.nextStep}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {step.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Accelerate Your Release Cycle?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t let manual bottlenecks or flaky scripts slow down your time-to-market. Partner with our <span className="font-semibold text-brand-blue uppercase">Lead Global SEO Consultant</span> and QA expert to transform your testing strategy. Our <span className="italic font-medium">a1qa automation testing services comparisons</span> show that Testriq is ready to scale with you globally.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Transform Your Strategy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingProvenTestingProcess;
