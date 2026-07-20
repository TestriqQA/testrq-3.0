"use client";


import Link from "next/link";
import React, { useState } from "react";
import {
  FaBolt,
  FaRocket,
  FaShieldAlt,
  FaMobile,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";

const LaunchFastComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "rapid-functional",
      title: "Rapid Functional Testing",
      icon: <FaBolt className="text-2xl" />,
      percentage: "98%",
      color: "blue",
      description:
        "Lightning-fast functional validation for agile development cycles",
      features: [
        "Core feature testing",
        "User flow validation",
        "Critical path verification",
        "Regression testing",
        "Smoke testing",
        "Sanity testing",
      ],
      action: "blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa"
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      icon: <FaRocket className="text-2xl" />,
      percentage: "95%",
      color: "green",
      description: "Speed and scalability testing for optimal user experience",
      features: [
        "Load testing",
        "Stress testing",
        "Performance bottleneck identification",
        "Response time optimization",
        "Scalability validation",
        "Resource utilization testing",
      ],
      action: "blog/post/performance-optimization-for-pre-launch-software-testing#why-performance-optimization-matters-pre-launch"
    },
    {
      id: "security-validation",
      title: "Security Validation",
      icon: <FaShieldAlt className="text-2xl" />,
      percentage: "100%",
      color: "purple",
      description: "Essential security testing for secure product launches",
      features: [
        "Vulnerability assessment",
        "Authentication testing",
        "Data protection validation",
        "Input validation testing",
        "Session management testing",
        "Security compliance verification",
      ],
      action: "blog/post/security-validation-in-mvp-startup-qa-best-practices"
    },
    {
      id: "mobile-app-testing",
      title: "Mobile App Testing",
      icon: <FaMobile className="text-2xl" />,
      percentage: "97%",
      color: "orange",
      description: "Comprehensive mobile testing for successful app launches",
      features: [
        "Device compatibility testing",
        "OS version testing",
        "App store optimization",
        "Touch interface testing",
        "Battery performance testing",
        "Network connectivity testing",
      ],
      action: "/mobile-application-testing"
    },
    {
      id: "web-application-testing",
      title: "Web Application Testing",
      icon: <FaDesktop className="text-2xl" />,
      percentage: "99%",
      color: "teal",
      description:
        "Cross-browser compatibility and responsive design validation",
      features: [
        "Cross-browser compatibility",
        "Responsive design validation",
        "Web performance testing",
        "Accessibility testing",
        "SEO optimization testing",
        "Progressive web app testing",
      ],
      action: "/web-application-testing-services"
    },
    {
      id: "api-integration-testing",
      title: "API & Integration Testing",
      icon: <FaCloud className="text-2xl" />,
      percentage: "96%",
      color: "indigo",
      description: "Rapid API validation and integration testing",
      features: [
        "API endpoint testing",
        "Third-party integration testing",
        "Microservices communication",
        "Data validation testing",
        "Error handling testing",
        "Performance testing",
      ],
      action: "/api-testing"
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      teal: "text-teal-600 bg-teal-50 border-teal-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: "from-blue-600 to-blue-400",
      green: "from-green-600 to-green-400",
      purple: "from-purple-600 to-purple-400",
      orange: "from-orange-600 to-orange-400",
      teal: "from-teal-600 to-teal-400",
      indigo: "from-indigo-600 to-indigo-400",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete LaunchFast QA{" "}
            <span className="text-brand-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our LaunchFast QA services cover every aspect of rapid product development, delivering quality, <Link title="performance" href='performance-testing-services' className="text-[theme(color.brand.blue)] underline">performance</Link>, and <Link title="security" href='security-testing' className="text-[theme(color.brand.blue)] underline">security</Link> across all platforms with pre-launch testing, MVP QA, and go-to-market QA for successful launches.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {testingTypes.map((type, index) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${activeTab === index
                ? `${getColorClasses(type.color)} border-2`
                : "text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50"
                }`}
              aria-label={type.title}
            >
              <span className={activeTab === index ? "" : "text-gray-400"}>
                {type.icon}
              </span>
              <span className="hidden sm:inline">{type.title}</span>
              <span className="sm:hidden">{type.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(
                    testingTypes[activeTab].color
                  )}`}
                >
                  {testingTypes[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testingTypes[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {testingTypes[activeTab].description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {testingTypes[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${getProgressColor(
                          testingTypes[activeTab].color
                        )}`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link title={testingTypes[activeTab].title} href={testingTypes[activeTab].action}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${getColorClasses(
                  testingTypes[activeTab].color
                )} hover:shadow-lg`}
              >
                Explore {testingTypes[activeTab].title}
              </Link>
            </div>

            {/* Right Content - Visualization */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {testingTypes[activeTab].title}
                </h4>
                <div className="text-3xl font-bold text-gray-900">
                  {testingTypes[activeTab].percentage}
                  <span className="text-lg text-gray-600"> success rate</span>
                </div>
              </div>

              {/* Progress Visualization */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Test Coverage</span>
                    <span
                      className={`font-medium ${testingTypes[activeTab].color === "blue"
                        ? "text-blue-600"
                        : testingTypes[activeTab].color === "green"
                          ? "text-green-600"
                          : testingTypes[activeTab].color === "purple"
                            ? "text-purple-600"
                            : testingTypes[activeTab].color === "orange"
                              ? "text-orange-600"
                              : testingTypes[activeTab].color === "teal"
                                ? "text-teal-600"
                                : "text-indigo-600"
                        }`}
                    >
                      {testingTypes[activeTab].percentage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${getProgressColor(
                        testingTypes[activeTab].color
                      )} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: testingTypes[activeTab].percentage }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">48hr</div>
                    <div className="text-sm text-gray-600">Avg Turnaround</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Testing Coverage Visualization */}
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Testing Coverage Visualization
                </h5>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${getProgressColor(
                        testingTypes[activeTab].color
                      )} flex items-center justify-center text-white text-sm font-bold`}
                    >
                      ✓
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Validated</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm font-bold">
                      ⚡
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Optimized</div>
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

export default LaunchFastComprehensiveSlider;
