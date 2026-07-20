"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  FaSearch,
  FaCog,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const SmartDeviceProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps = [
    {
      id: 1,
      title: "Requirement Analysis & Mapping",
      description:
        "We analyze device requirements by mapping OS dependencies, hardware specifications, and compatibility standards.",
      icon: <FaSearch className="w-6 h-6" />,
      activities: [
        "OS Dependency Mapping",
        "Hardware Specs Audit",
        "Compatibility Benchmarking",
        "Market Entry Research",
      ],
      duration: "2-3 days",
      color: "blue",
    },
    {
      id: 2,
      title: "Firmware Validation & Hardening",
      description:
        "Testing the low-level software on the chip to prevent OTA (Over-the-Air) update failures and secure the device foundation.",
      icon: <FaShieldAlt className="w-6 h-6" />,
      activities: [
        "Low-level Software Testing",
        "OTA Failure Prevention",
        "Chipset Logic Validation",
        "Chipset Logic Validation",
        (<Link key={1} href="/security-testing" className="text-gray-600 hover:text-brand-blue hover:underline">Firmware Security Audits</Link>),
      ],
      duration: "3-4 days",
      color: "red",
    },
    {
      id: 3,
      title: "Sensor and Edge Computing Validation",
      description: (
        <>
          We test the accuracy of motion, light, and temperature sensors while confirming precise and efficient <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">edge-level data processing</Link>.
        </>
      ),
      icon: <FaCog className="w-6 h-6" />,
      activities: [
        "Sensor Accuracy Benchmarks",
        "Edge Logic Verification",
        "Data Processing Efficiency",
        "Calibration Validation",
      ],
      duration: "4-5 days",
      color: "green",
    },
    {
      id: 4,
      title: "Protocol & Network Validation",
      description:
        "Stress-testing MQTT, CoAP, and HTTP protocols over 5G and Wi-Fi 6 to ensure stable and rapid device communication.",
      icon: <FaChartLine className="w-6 h-6" />,
      activities: [
        "MQTT/CoAP Stress Testing",
        "5G Connectivity Audits",
        "Wi-Fi 6 Bandwidth Tests",
        "M2M Protocol Validation",
      ],
      duration: "3-4 days",
      color: "purple",
    },
    {
      id: 5,
      title: "Performance & Battery Life Optimization",
      description:
        "Profiling latency and throughput while measuring thermal throttling under high-load scenarios.",
      icon: <FaChartLine className="w-6 h-6" />,
      activities: [
        "Latency & Throughput Profiling",
        "Thermal Throttling Assessment",
        "Battery drain monitoring",
        "High-load Power Profiling",
      ],
      duration: "4-5 days",
      color: "orange",
    },
    {
      id: 6,
      title: "Simulated Real-World Conditions",
      description:
        "Our team simulates real-world conditions to test your product's usability. We confirm that your device's 'smart' functionality translates into a seamless experience for every user.",
      icon: <FaCheckCircle className="w-6 h-6" />,
      activities: [
        "Usability Simulation",
        "UX Accessibility Audits",
        "Seamless UX Validation",
        "Real-world Scenario QA",
      ],
      duration: "2-3 days",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-white",
      red: "bg-red-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white",
      indigo: "bg-indigo-500 text-white",
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "border-blue-500",
      red: "border-red-500",
      green: "border-green-500",
      purple: "border-purple-500",
      orange: "border-orange-500",
      indigo: "border-indigo-500",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Smart Device Testing{" "}
            <span className="text-brand-blue">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures comprehensive smart device testing
            coverage, delivering <Link href='blog/post/performance-testing-for-ai-applications'>reliable</Link>, <Link href='security-testing'>secure</Link>, and high-performance
            connected devices for your users.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative"
                ref={(el) => { stepRefs.current[index] = el; }}
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${activeStep === index
                      ? getColorClasses(step.color)
                      : "bg-gray-300 text-gray-600"
                      }`}
                  >
                    <span className="font-bold text-sm">{step.id}</span>
                  </button>
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Left/Right Content */}
                  <div
                    className={`${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                      }`}
                  >
                    <div
                      className={`inline-block p-4 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${activeStep === index
                        ? `${getColorClasses(step.color)} shadow-lg scale-105`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      onClick={() => setActiveStep(index)}
                    >
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Step {step.id}: {step.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${activeStep === index
                        ? getColorClasses(step.color)
                        : "bg-gray-200 text-gray-600"
                        }`}
                    >
                      Duration: {step.duration}
                    </div>
                  </div>

                  {/* Activities Panel */}
                  <div
                    className={`${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                  >
                    {activeStep === index && (
                      <div
                        className={`bg-white border-2 ${getBorderColor(
                          step.color
                        )} rounded-xl p-6 shadow-lg animate-fadeIn`}
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${getColorClasses(step.color).split(" ")[0]
                              }`}
                          ></span>
                          Key Activities:
                        </h4>

                        <ul className="space-y-3">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 mr-3 ${getColorClasses(step.color).split(" ")[0]
                                  }`}
                              ></div>
                              <span className="text-gray-600">{activity}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Next Step
                            </span>
                            {index < processSteps.length - 1 ? (
                              <button
                                onClick={() => {
                                  setActiveStep(index + 1);
                                  setTimeout(() => {
                                    stepRefs.current[index + 1]?.scrollIntoView(
                                      { behavior: "smooth", block: "center" }
                                    );
                                  }, 100);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm min-h-[44px] min-w-[44px] font-semibold transition-colors duration-300 ${getColorClasses(
                                  step.color
                                )} hover:opacity-90`}
                                aria-label={`Go to ${processSteps[index + 1].title}`}
                              >
                                {processSteps[index + 1].title}
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setActiveStep(0);
                                  setTimeout(() => {
                                    stepRefs.current[0]?.scrollIntoView({
                                      behavior: "smooth",
                                      block: "center",
                                    });
                                  }, 100);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${getColorClasses(
                                  step.color
                                )} hover:opacity-90`}
                              >
                                Restart from Step 1
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Process Flow */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Device Testing Workflow
            </h3>
            <p className="text-gray-600">
              Visualizing our comprehensive smart device testing methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${getColorClasses(
                    step.color
                  )}`}
                >
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Step {step.id}
                </div>
                <div className="text-xs text-gray-600">{step.title}</div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block mt-4">
                    <div className="w-full h-0.5 bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-400 rounded-full transform translate-x-1 -translate-y-0.5"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceProvenTestingProcess;
