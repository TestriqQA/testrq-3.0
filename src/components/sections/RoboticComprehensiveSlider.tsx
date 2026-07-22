"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaRobot, FaShieldAlt, FaChartLine, FaNetworkWired, FaFlask } from "react-icons/fa";

const RoboticComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "compliance",
      title: "ISO 10218:2026 Compliance",
      icon: <FaShieldAlt className="w-6 h-6" />,
      coverage: "Traceable Functional Safety",
      description: (
        <>
          Unlike <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">traditional software QA</Link> (which follows ISO/IEC 29119), robotics has historically lacked a unified testing framework. This often leads to inconsistent validation across multi-vendor co-bot integrations. Our Fix: To ensure global compliance, we test according to ISO 10218-1:2026 (Manufacturers) and ISO 10218-2:2026 (Integrators). We provide structured test case specifications that go beyond implied safety, making functional requirements explicit and traceable.
        </>
      ),
      features: [
        "ISO 10218-1 Manufacturers QA",
        "ISO 10218-2 Integrators Audit",
        "Traceable Test Specifications",
        "Co-bot Multi-Vendor Integration"
      ],
      color: "blue",
      action: "/robotic-safety-testing-meeting-iso-10218-13482-and-beyond",
    },
    {
      id: "sim2real",
      title: "Sim2Real Gap Validation",
      icon: <FaChartLine className="w-6 h-6" />,
      coverage: "40-60% Reliability Gain",
      description: "Standard simulations like Gazebo or We-bots fail to account for un-predictable lighting and human movement. This causes a 40–60% performance drop in real-world deployments. Our Fix: We implement \"Physical AI\" training using Digital Twin technology. By modeling environmental stress factors as per ISO 10218, we identify potential mechanical failures virtually before they occur in the physical test environment setup.",
      features: [
        "Digital Twin Stress Modeling",
        "Physical AI Predictive QA",
        "Real-world Lighting Simulation",
        "Unpredictable Movement Logic"
      ],
      color: "green",
      action: "/robotic-software-testing-ros2-gazebo-and-motion-planning-validation"
    },
    {
      id: "hw-sw",
      title: "HW-SW Integration",
      icon: <FaNetworkWired className="w-6 h-6" />,
      coverage: "Zero Sensor Drift",
      description: "Synchronizing sensors, actuators, and ROS/ROS2 middleware introduces latency issues that affect 25% of all robotic tests. Our Fix: We use FMEA and HAZOP frameworks to prevent risks like sensor drift and timer failures. Our services ensure that software-to-hardware communication is smooth and reliable.",
      features: [
        "ROS/ROS2 Middleware Audits",
        "FMEA Risk Mitigation",
        "HAZOP Framework Security",
        "Sensor-to-Actuator Sync"
      ],
      color: "purple",
      action: "/system-integration-testing-for-robotic-systems-ensuring-seamless-operation"
    },
    {
      id: "ai-consistency",
      title: "AI/ML Path Consistency",
      icon: <FaRobot className="w-6 h-6" />,
      coverage: "Deterministic AI Behavior",
      description: (
        <>
          AI-driven path planning (via Move It) is often non-deterministic, complicating traditional regression testing. Our Fix: Our methodology classifies robots as <Link href="/ai-application-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">autonomous AI agents</Link>. To guarantee collaborative safety, we test speed and distance to keep system behavior within ISO 13482:2014 limits.
        </>
      ),
      features: [
        "Move It Path Validation",
        "ISO 13482 Personal Care Safety",
        "Autonomous Agent Classification",
        "Speed & Distance Monitoring"
      ],
      color: "orange",
      action: "/testing-autonomous-robots-navigation-perception-and-real-world-qa"
    },
    {
      id: "regulatory",
      title: "Global Regulatory Safety",
      icon: <FaFlask className="w-6 h-6" />,
      coverage: "ANSI/UL 3100 Certified",
      description: "With robotics incidents rising 15% in regulated sectors, meeting updated safety mandates is no longer optional. Our Fix: Our safety-first protocols include proximity and force interaction testing. We ensure your system meets ANSI/RIA R15.06 and UL 3100 standards immediately. Our team validates all safety hardware, including Emergency Stops, Light Curtains, and Force-Torque Sensors.",
      features: [
        "Emergency Stop Precision",
        "Light Curtain Validation",
        "Force-Torque Sensor Audits",
        "3D Vision Safety Interlocks"
      ],
      color: "red",
      action: "/robotic-safety-testing-meeting-iso-10218-13482-and-beyond"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-600 hover:bg-blue-100",
      green: isActive ? "bg-green-500 text-white" : "bg-green-50 text-green-600 hover:bg-green-100",
      purple: isActive ? "bg-purple-500 text-white" : "bg-purple-50 text-purple-600 hover:bg-purple-100",
      orange: isActive ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600 hover:bg-orange-100",
      red: isActive ? "bg-red-500 text-white" : "bg-red-50 text-red-600 hover:bg-red-100",
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: "border-blue-200",
      green: "border-green-200",
      purple: "border-purple-200",
      orange: "border-orange-200",
      red: "border-red-200",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Navigating 2026 <span className="text-brand-blue">Global Robotics Hurdles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The complexity of robotic systems has reached a critical point where traditional software QA is no longer sufficient. Testriq addresses the <span className="font-semibold text-brand-blue">five biggest global hurdles</span> in robotics testing.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={type.id}
              aria-label={type.title}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${getColorClasses(type.color, activeTab === index)} ${getBorderColor(type.color)}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">{type.icon}</div>
                <div className="font-semibold text-sm">{type.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                {testingTypes[activeTab].coverage}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className={`mr-3 p-2 rounded-lg ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                  {testingTypes[activeTab].icon}
                </span>
                {testingTypes[activeTab].title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {testingTypes[activeTab].description}
              </p>

              <div className="space-y-3 mb-4">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {testingTypes[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`blog/post${testingTypes[activeTab].action}`}
                className={`
    mt-4 sm:mt-6
    px-4 sm:px-6 md:px-8
    py-2.5 sm:py-3
    rounded-lg
    text-sm sm:text-base md:text-lg
    font-semibold
    inline-flex items-center justify-center
    w-full sm:w-auto
    transition-all duration-300
    ${getColorClasses(testingTypes[activeTab].color, true)}
    hover:opacity-90
    active:scale-95
  `}
              >
                Explore {testingTypes[activeTab].title}
              </Link>

            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 ${getBorderColor(testingTypes[activeTab].color)}`}>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                    <div className="text-3xl">
                      {testingTypes[activeTab].icon}
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2">
                    {testingTypes[activeTab].title}
                  </h4>

                  <div className="text-sm font-semibold text-gray-700">
                    {testingTypes[activeTab].coverage}
                  </div>

                  {/* Progress Visualization */}
                  <div className="mt-6 space-y-3">
                    {testingTypes[activeTab].features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="text-left">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{feature}</span>
                          <span className="font-semibold text-gray-700">
                            {95 + index * 2}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}
                            style={{ width: `${95 + index * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoboticComprehensiveSlider;

