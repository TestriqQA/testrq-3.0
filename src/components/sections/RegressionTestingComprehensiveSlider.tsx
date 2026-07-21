"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaSyncAlt,
  FaCheckCircle,
  FaChartLine,
  FaFlask,
} from "react-icons/fa";

const RegressionTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const regressionTypes = [
    {
      id: "full-vs-partial",
      title: "Full vs. Partial",
      icon: <FaSyncAlt className="text-2xl" />,
      percentage: "100%",
      color: "blue",
      description:
        "Full Regression for major structural shifts vs. Partial Regression targeting only impacted modules to cut testing windows.",
      features: [
        "Major Release Integrity",
        "Targeted Impact Mapping",
        "Module-Level Isolation",
        "Execution Window Reduction",
        "Risk-Based Selection",
        "Resource Optimization",
      ],
      action: "/regression-impact-analysis-optimizing-test-coverage",
    },
    {
      id: "smoke-vs-regression",
      title: "Smoke vs. Regression",
      icon: <FaFlask className="text-2xl" />,
      percentage: "99%",
      color: "purple",
      description: "Smoke testing for build stability vs. Deep Regression to ensure no legacy feature breaks.",
      features: [
        "Critical Path Verification",
        "Build Stability Checks",
        "Legacy Feature Integrity",
        "Subtle Bug Detection",
        "Deep Protocol Testing",
        "Regression Scripting",
      ],
      action: "/manual-regression-testing-which-to-choose",
    },
    {
      id: "sanity-vs-regression",
      title: "Sanity vs. Regression",
      icon: <FaCheckCircle className="text-2xl" />,
      percentage: "98%",
      color: "green",
      description:
        "Sanity testing for quick logic verification vs. Full regression for system-wide stability.",
      features: [
        "Bug Fix Verification",
        "Logic Change Validation",
        "Stability Pre-checks",
        <Link key={1} href="/performance-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">System-Wide Stability</Link>,
        "Rapid Feedback Loops",
        "Subset Selection",
      ],
      action: "/automated-regression-testing-faster-smarter-qa-cycles",
    },
    {
      id: "uat-vs-regression",
      title: "UAT vs. Regression",
      icon: <FaChartLine className="text-2xl" />,
      percentage: "97%",
      color: "orange",
      description:
        "Technical stability focus vs. Business-critical flow validation for seamless end-user journeys.",
      features: [
        "End-User Journey Mapping",
        "Business Flow Validation",
        <Link key={2} href="/manual-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">User Acceptance Testing</Link>,
        "Technical Stability checks",
        "Persona-Based Testing",
        "Flow-Aligned Suites",
      ],
      action: "/risk-based-regression-testing-smarter-test-optimization",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string; border: string };
    } = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Strategy & Precision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Multi-Tiered <span className="text-brand-blue">Regression</span> Testing Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a flexible range of QA regression testing models tailored to your specific deployment needs. From build smoke to deep functional regression.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {regressionTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  aria-label={type.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                    ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <span
                      className={
                        activeTab === index ? colors.text : "text-gray-400"
                      }
                    >
                      {type.icon}
                    </span>
                    <span className="hidden sm:inline py-1">{type.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {regressionTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <div
                  key={type.id}
                  className={`${activeTab === index ? "block" : "hidden"
                    } transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}
                        >
                          <span className={colors.text}>{type.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {type.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">
                              Success Rate:
                            </span>
                            <span
                              className={`text-lg font-bold ${colors.text}`}
                            >
                              {type.percentage}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {type.description}
                      </p>
                      <Link
                        href={`blog/post${regressionTypes[activeTab].action}`}
                        className="bg-brand-blue text-white inline-block px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Explore {regressionTypes[activeTab].title}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <div
                              className={`w-2 h-2 bg-gray-400 rounded-full`}
                            ></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingComprehensiveSlider;
