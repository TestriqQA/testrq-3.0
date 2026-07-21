"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaRobot, FaCogs, FaMobileAlt, FaCloud, FaChartLine, FaFlask } from "react-icons/fa";

const AutomationTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const automationTypes = [
    {
      id: "selenium-automation",
      title: "Selenium Automation Testing Services",
      icon: <FaRobot className="text-2xl" />,
      percentage: "95%",
      color: "blue",
      description: "Industry standard for web applications. We build robust Selenium frameworks using Java, Python, or C# supporting cross-browser testing at scale.",
      features: [
        "Java/Python/C# Support",
        "Cross-Browser Scaling",
        "Sturdy Web Frameworks",
        "Grid Execution",
        "Legacy App Support",
        "Maven/PyTest Integration"
      ],
      action: "/test-automation-web-applications"
    },
    {
      id: "playwright-cypress",
      title: "Playwright & Cypress Automation",
      icon: <FaCogs className="text-2xl" />,
      percentage: "98%",
      color: "purple",
      description: "Modern automation for React, Vue, and Angular. These tools deliver faster execution and superior debugging for modern web stacks.",
      features: [
        "React/Vue/Angular Ready",
        "Auto-Waiting & Resilience",
        "Time-Travel Debugging",
        "Fast Parallel Runs",
        "Shadow DOM Support",
        "Zero Flakiness Goals"
      ],
      action: "/api-test-automation-strategy-faster-releases-reliable-integrations"
    },
    {
      id: "appium-mobile",
      title: "Appium Mobile Automation",
      icon: <FaMobileAlt className="text-2xl" />,
      percentage: "92%",
      color: "green",
      description: "Ensure your apps work across thousands of device combinations. We provide high-fidelity testing for both iOS and Android.",
      features: [
        "iOS & Android Coverage",
        "Real Device Testing",
        "Cloud Hub Integration",
        "Native & Hybrid Apps",
        "Gesture Validation",
        "OS Version Testing"
      ],
      action: "/mobile-automation-testing-guide-android-ios-frameworks"
    },
    {
      id: "api-regression",
      title: "API & Regression Automation",
      icon: <FaCloud className="text-2xl" />,
      percentage: "96%",
      color: "orange",
      description: "Automating the 'invisible' layer to ensure business logic remains stable and new code doesn't break existing features.",
      features: [
        "Business Logic Stability",
        "Regression Protection",
        "Security Layer QA",
        "Protocol Validation",
        "Schema Integrity",
        "Rapid Feedback Loops"
      ],
      action: "/cloud-automation-testing-scalable-cost-effective-qa-in-the-cloud"
    },
    {
      id: "performance-automation",
      title: "Performance Automation",
      icon: <FaChartLine className="text-2xl" />,
      percentage: "93%",
      color: "indigo",
      description: "Automated performance testing for optimal application responsiveness and stability under high-load conditions.",
      features: [
        "Load & Stress Tests",
        "ISO 29119-5 MBT",
        "k6 & JMeter Scripts",
        "Throughput Monitoring",
        "Latency Benchmarks",
        "Resource Profiling"
      ],
      action: "/automation-performance-testing-load-speed-and-continuous-validation"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colorMap[color] || colorMap.blue;
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
            <span className="text-brand-blue">Enterprise-Grade </span> Automation Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive automation testing services built to accelerate testing cycles, enhance test efficiency, and deliver superior software quality across <Link href="/web-application-testing-services" className="text-brand-blue underline">web</Link>, <Link href="/mobile-application-testing" className="text-brand-blue underline">mobile</Link>, and <Link href="/api-testing" className="text-brand-blue underline">API platforms</Link>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {automationTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                    ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <span className={activeTab === index ? colors.text : "text-gray-400"}>
                      {type.icon}
                    </span>
                    <span className="hidden sm:inline">{type.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {automationTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <div
                  key={type.id}
                  className={`${activeTab === index ? "block" : "hidden"} transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                          <span className={colors.text}>{type.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">Success Rate:</span>
                            <span className={`text-lg font-bold ${colors.text}`}>{type.percentage}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {type.description}
                      </p>
                      <Link href={`/blog/post${automationTypes[activeTab].action}`} className="bg-brand-blue text-white inline-block px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Explore {automationTypes[activeTab].title}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gray-400 rounded-full`}></div>
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

export default AutomationTestingComprehensiveSlider;

