"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaTachometerAlt, FaChartLine, FaCloud, FaCogs, FaTools } from "react-icons/fa";

const PerformanceTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("protocol-testing");

  const toolCategories = [
    {
      id: "protocol-testing",
      title: "Protocol-Based Testing",
      icon: <FaTachometerAlt className="text-2xl" />,
      color: "blue",
      description: "Enterprise-grade tools for protocol-heavy performance validation.",
      tools: [
        { name: "Apache JMeter", description: "Open-source protocol testing", logo: "⚡" },
        { name: "LoadRunner Pro", description: "Lead enterprise performance platform", logo: "🏃" },
        { name: "Gatling", description: "High-performance Scala/Java testing", logo: "🎯" }
      ]
    },
    {
      id: "developer-centric",
      title: "Developer-Centric Tools",
      icon: <FaCogs className="text-2xl" />,
      color: "purple",
      description: <>Modern tools designed for <Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">CI/CD</Link> and developer workflows.</>,
      tools: [
        { name: "k6", description: "Grafana-backed modern load testing", logo: "📊" },
        { name: "Locust", description: "Python-based distributed user test", logo: "🦗" },
        { name: "Playwright", description: "Browser-based performance validation", logo: "🎭" }
      ]
    },
    {
      id: "cloud-generation",
      title: "Cloud Load Generation",
      icon: <FaCloud className="text-2xl" />,
      color: "orange",
      description: <>Global load generation using leading <Link href="/technology-stack" className="text-brand-blue hover:underline decoration-brand-blue">cloud laboratories</Link>.</>,
      tools: [
        { name: "AWS", description: "Scalable cloud infrastructure load", logo: "☁️" },
        { name: "Browser-Stack", description: "Real-device performance grid", logo: "📱" },
        { name: "Sauce Labs", description: "Continuous testing cloud grid", logo: "🧪" },
        { name: "Blaze Meter", description: "Continuous performance lab", logo: "🔥" }
      ]
    },
    {
      id: "monitoring-visibility",
      title: "Monitoring & Visibility",
      icon: <FaChartLine className="text-2xl" />,
      color: "green",
      description: "APM tools for deep-dive performance metrics and visibility.",
      tools: [
        { name: "New Relic", description: "Full-stack observability platform", logo: "📈" },
        { name: "Dynatrace", description: "AI-powered APM and observability", logo: "🤖" },
        { name: "AppDynamics", description: "Real-time application performance", logo: "📊" },
        { name: "Datadog", description: "Cloud-scale monitoring and security", logo: "🐕" }
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
            Performance Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage <Link href='/technology-stack'>industry-leading performance testing tools and frameworks</Link> such as Apache <Link href='blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide'>JMeter</Link>, Gatling, K6, Prometheus, New Relic, and Grafana to deliver comprehensive, accurate, and efficient performance validation that ensures optimal application performance, speed, and scalability across all environments.

          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
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
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Performance Testing Methodology</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow proven methodologies and best practices to ensure comprehensive performance testing that optimizes application speed, scalability, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Load Simulation</h4>
              <p className="text-sm text-gray-600">Realistic user load simulation covering all performance scenarios</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h4>
              <p className="text-sm text-gray-600">Continuous performance monitoring with advanced analytics</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bottleneck Analysis</h4>
              <p className="text-sm text-gray-600">Systematic identification and analysis of performance bottlenecks</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-600">Actionable recommendations for performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingToolsFramework;

