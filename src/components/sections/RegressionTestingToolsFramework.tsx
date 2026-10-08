"use client";

import React, { useState } from "react";
import { FaSyncAlt, FaBug, FaCodeBranch, FaChartLine, FaCloud, FaCogs, FaTools } from "react-icons/fa";

const RegressionTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("automation-tools");

  const toolCategories = [
    {
      id: "automation-tools",
      title: "Automation Tools",
      icon: <FaSyncAlt className="text-2xl" />,
      color: "blue",
      description: "Advanced automation tools for efficient regression testing",
      tools: [
        { name: "Selenium WebDriver", description: "Web application regression automation", logo: "🌐" },
        { name: "TestComplete", description: "Desktop and web application testing", logo: "✅" },
        { name: "Cypress", description: "Modern web testing framework", logo: "🌲" },
        { name: "Playwright", description: "Cross-browser automation testing", logo: "🎭" },
        { name: "Appium", description: "Mobile application regression testing", logo: "📱" },
        { name: "Robot Framework", description: "Generic automation framework", logo: "🤖" }
      ]
    },
    {
      id: "test-management",
      title: "Test Management",
      icon: <FaBug className="text-2xl" />,
      color: "green",
      description: "Comprehensive test management and tracking tools",
      tools: [
        { name: "TestRail", description: "Test case management and reporting", logo: "🚂" },
        { name: "Zephyr", description: "Test management for Jira", logo: "⚡" },
        { name: "qTest", description: "Agile test management platform", logo: "📋" },
        { name: "PractiTest", description: "End-to-end test management", logo: "🎯" },
        { name: "TestLink", description: "Open-source test management", logo: "🔗" },
        { name: "Azure Test Plans", description: "Microsoft test management solution", logo: "🔷" }
      ]
    },
    {
      id: "ci-cd-tools",
      title: "CI/CD Integration",
      icon: <FaCodeBranch className="text-2xl" />,
      color: "purple",
      description: "Continuous integration and deployment tools for regression testing",
      tools: [
        { name: "Jenkins", description: "Open-source automation server", logo: "👨‍💼" },
        { name: "GitLab CI", description: "Built-in CI/CD for GitLab", logo: "🦊" },
        { name: "Azure DevOps", description: "Microsoft DevOps platform", logo: "🔷" },
        { name: "GitHub Actions", description: "CI/CD integrated with GitHub", logo: "🐙" },
        { name: "CircleCI", description: "Continuous integration platform", logo: "⭕" },
        { name: "TeamCity", description: "JetBrains CI/CD server", logo: "🏗️" }
      ]
    },
    {
      id: "analysis-tools",
      title: "Analysis & Reporting",
      icon: <FaChartLine className="text-2xl" />,
      color: "orange",
      description: "Advanced analysis and reporting tools for regression insights",
      tools: [
        { name: "Allure", description: "Test reporting framework", logo: "📊" },
        { name: "ExtentReports", description: "Interactive test reports", logo: "📈" },
        { name: "ReportPortal", description: "AI-powered test automation dashboard", logo: "🚪" },
        { name: "TestNG", description: "Testing framework with reporting", logo: "🧪" },
        { name: "JUnit", description: "Java testing framework", logo: "☕" },
        { name: "Cucumber", description: "BDD testing with reports", logo: "🥒" }
      ]
    },
    {
      id: "impact-analysis",
      title: "Impact Analysis",
      icon: <FaCogs className="text-2xl" />,
      color: "teal",
      description: "Tools for analyzing change impact and test optimization",
      tools: [
        { name: "SonarQube", description: "Code quality and coverage analysis", logo: "🔍" },
        { name: "Codecov", description: "Code coverage reporting", logo: "📋" },
        { name: "JaCoCo", description: "Java code coverage library", logo: "☕" },
        { name: "Istanbul", description: "JavaScript code coverage tool", logo: "🏙️" },
        { name: "Cobertura", description: "Code coverage measurement", logo: "🐍" },
        { name: "OpenCover", description: ".NET code coverage framework", logo: "🔓" }
      ]
    },
    {
      id: "cloud-platforms",
      title: "Cloud Platforms",
      icon: <FaCloud className="text-2xl" />,
      color: "indigo",
      description: "Cloud-based platforms for scalable regression testing",
      tools: [
        { name: "BrowserStack", description: "Real device cloud testing", logo: "☁️" },
        { name: "Sauce Labs", description: "Continuous testing cloud", logo: "🧪" },
        { name: "LambdaTest", description: "Cross-browser testing platform", logo: "λ" },
        { name: "TestingBot", description: "Automated browser testing", logo: "🤖" },
        { name: "CrossBrowserTesting", description: "Live and automated testing", logo: "🌐" },
        { name: "Perfecto", description: "Continuous testing platform", logo: "💎" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hover: "hover:bg-teal-100" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hover: "hover:bg-indigo-100" }
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
            Our Advanced <span className="text-brand-blue">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage a world-class tech stack to deliver scalable regression testing. Our team uses leading frameworks like <span className="font-bold">Selenium</span> and <span className="font-bold">Playwright</span>. We integrate these with CI/CD tools, including <span className="font-bold">Jenkins</span> and <span className="font-bold">GitHub Actions</span>, for seamless delivery. To ensure global reach, we utilize cloud labs like <span className="font-bold">Browser Stack</span> and <span className="font-bold">AWS Device Farm</span>.
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
                    } cursor-pointer`}
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
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Regression Testing Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow proven methodologies and best practices to ensure comprehensive regression testing that maintains software quality and stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk-Based Approach</h4>
              <p className="text-sm text-gray-600">Prioritizing tests based on risk assessment and business impact</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Integration</h4>
              <p className="text-sm text-gray-600">Automated regression testing integrated with CI/CD pipelines</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Impact Analysis</h4>
              <p className="text-sm text-gray-600">Intelligent analysis of code changes to optimize test selection</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Reporting</h4>
              <p className="text-sm text-gray-600">Detailed insights and metrics for continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingToolsFramework;

