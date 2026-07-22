"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClipboardList, FaBug, FaProjectDiagram, FaDesktop, FaChartLine, FaUsers, FaTools } from "react-icons/fa";

const ManualTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("test-management");

  const toolCategories = [
    {
      id: "test-management",
      title: "Test Management",
      icon: <FaClipboardList className="text-2xl" />,
      color: "blue",
      description: "Advanced test case management and planning for organized QA workflows",
      tools: [
        { name: "TestRail", description: "Comprehensive test case management", logo: "🚂" },
        { name: "Zephyr", description: "Enterprise-grade test management", logo: "⚡" },
        { name: "Xray", description: "Native Jira test management", logo: "🩻" },
        { name: "Jira", description: "Industry-standard task tracking", logo: "🔷" }
      ]
    },
    {
      id: "defect-tracking",
      title: "Defect Tracking",
      icon: <FaBug className="text-2xl" />,
      color: "red",
      description: "Meticulous bug tracking and lifecycle management tools",
      tools: [
        { name: "Jira", description: "Advanced issue and bug tracking", logo: "🔷" },
        { name: "Mantis", description: "Efficient web-based bug tracking", logo: "🦗" },
        { name: "Bugzilla", description: "Robust open-source defect tracking", logo: "🐛" }
      ]
    },
    {
      id: "api-integration",
      title: "API & Integration",
      icon: <FaProjectDiagram className="text-2xl" />,
      color: "purple",
      description: "Technical validation of back-end services and connectivity",
      tools: [
        { name: "Postman", description: (<>Comprehensive <Link href="/api-testing" className="underline text-purple-600">API development & testing</Link></>), logo: "🚀" },
        { name: "Charles Proxy", description: "Web debugging proxy tool", logo: "🛡️" },
        { name: "Swagger", description: "API documentation and validation", logo: "📖" }
      ]
    },
    {
      id: "compatibility",
      title: "Compatibility",
      icon: <FaDesktop className="text-2xl" />,
      color: "orange",
      description: "Cross-platform and multi-device validation platforms",
      tools: [
        { name: "BrowserStack", description: "Real device cloud testing", logo: "📱" },
        { name: "Sauce Labs", description: "Scalable cloud testing platform", logo: "🧪" },
        { name: "LambdaTest", description: "Cross-browser testing cloud", logo: "λ" }
      ]
    },
    {
      id: "performance-monitoring",
      title: "Performance & Monitoring",
      icon: <FaChartLine className="text-2xl" />,
      color: "green",
      description: (<>Ensuring application <Link href="/performance-testing-services" className="underline text-green-600">speed, stability</Link>, and health</>),
      tools: [
        { name: "JMeter", description: "Open-source load testing", logo: "🏎️" },
        { name: "New Relic", description: "Observability and APM platform", logo: "📊" },
        { name: "Datadog", description: "Modern monitoring and security", logo: "🐕" }
      ]
    },
    {
      id: "collaboration",
      title: "Collaboration",
      icon: <FaUsers className="text-2xl" />,
      color: "teal",
      description: "Unified communication for seamless client-tester sync",
      tools: [
        { name: "Confluence", description: "Team documentation and workspace", logo: "📚" },
        { name: "Slack", description: "Real-time team communication", logo: "💬" },
        { name: "Microsoft Teams", description: "Enterprise communication hub", logo: "👥" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", hover: "hover:bg-red-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hover: "hover:bg-teal-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const activeCategory_data = toolCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">
              Tools & Frameworks
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Testriq <span className="text-brand-blue">Manual Testing Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our manual testing uses a modern tech stack to keep our work fast and transparent. We leverage industry-leading tools for test management, defect tracking, and performance monitoring.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200">
            {toolCategories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 text-center transition-all duration-300 ${activeCategory === category.id
                    ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                    : `text-gray-600 ${colors.hover}`
                    }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <span className={activeCategory === category.id ? colors.text : "text-gray-400"}>
                      {category.icon}
                    </span>
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category Content */}
          <div className="p-8">
            {activeCategory_data && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeCategory_data.title}</h3>
                  <p className="text-gray-600 text-lg">{activeCategory_data.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCategory_data.tools.map((tool, index) => {
                    const colors = getColorClasses(activeCategory_data.color);
                    return (
                      <div
                        key={index}
                        className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{tool.logo}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                              {tool.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Framework Methodology */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Testing Framework Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and proven methodologies to ensure consistent, reliable, and efficient manual testing processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Agile Testing</h4>
              <p className="text-sm text-gray-600">Iterative testing approach aligned with agile development cycles</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk-Based Testing</h4>
              <p className="text-sm text-gray-600">Prioritized testing based on risk assessment and business impact</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Testing</h4>
              <p className="text-sm text-gray-600">Ongoing testing throughout the development lifecycle</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data-Driven Testing</h4>
              <p className="text-sm text-gray-600">Evidence-based testing decisions using comprehensive metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingToolsFramework;

