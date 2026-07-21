"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaServer,
  FaCloud,
  FaFlask,
} from "react-icons/fa";

const PerformanceTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const performanceTypes = [
    {
      id: "load-testing",
      title: "Load Testing Services",
      icon: <FaTachometerAlt className="text-2xl" />,
      percentage: "95%",
      color: "blue",
      description:
        "Our website load testing simulates expected concurrent user traffic to verify response times and system behavior under normal conditions. This ensures your application performance testing services deliver a seamless user experience.",
      features: [
        "Concurrent User Traffic Simulation",
        "Response Time Verification",
        "Normal Load System Behavior",
        "SLA Compliance Check",
        "Baseline Performance Analysis",
        "Capacity Assessment",
      ],
      action: "/load-testing-in-performance-testing-complete-guide",
    },
    {
      id: "stress-testing",
      title: "Stress Testing Solutions",
      icon: <FaUsers className="text-2xl" />,
      percentage: "98%",
      color: "purple",
      description:
        "We push your system beyond its limits to find the break point. Our stress testing solutions identify how the system recovers from failure, ensuring 'graceful degradation' during extreme traffic spikes.",
      features: [
        "Breaking Point Identification",
        "Failure Recovery Analysis",
        "Graceful Degradation Check",
        "Extreme Traffic Spike Simulation",
        "System Stability Limits",
        "Resource Exhaustion Stress",
      ],
      action: "/stress-testing-applications-identifying-breaking-points",
    },
    {
      id: "endurance-testing",
      title: "Endurance & Soak Testing",
      icon: <FaCloud className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description:
        "To catch memory leaks and resource exhaustion, we perform endurance testing. By maintaining a consistent load over long periods, we ensure your infrastructure stays stable during sustained high-usage events.",
      features: [
        "Memory Leak Detection",
        "Resource Exhaustion Monitoring",
        "Sustained Load Verification",
        "Long-term Stability Analysis",
        "System Reliability over Time",
        "Infrastructure Durability Check",
      ],
      action: "/endurance-testing-validating-long-term-application-stability",
    },
    {
      id: "scalability-testing",
      title: "Spike & Scalability Testing",
      icon: <FaChartLine className="text-2xl" />,
      percentage: "92%",
      color: "green",
      description:
        "We evaluate your system’s vertical and horizontal scalability. Our team verifies how your infrastructure handles increased load by adding resources or expanding nodes. Our scalability testing services evaluate how resource usage changes as user volume increases, providing a clear map for infrastructure investment.",
      features: [
        "Vertical & Horizontal Scaling",
        "Expanding Nodes Verification",
        "Resource Usage vs Volume",
        "Infrastructure Investment Mapping",
        "Elasticity Assessment",
        "Auto-scaling Policy Validation",
      ],
      action: "/scalability-testing-ensuring-growth-ready-applications",
    },
    {
      id: "volume-testing",
      title: "Volume Testing",
      icon: <FaServer className="text-2xl" />,
      percentage: "96%",
      color: "orange",
      description:
        "Our team measures system performance using ISO 29119-1 protocols. We verify that your backend database remains responsive while processing massive data volumes and heavy queries.",
      features: [
        "ISO 29119-1 Protocol Testing",
        "Backend Database Responsiveness",
        "Massive Data Volume Processing",
        "Heavy Query Performance",
        "Data Growth Impact Analysis",
        "Storage Capacity Validation",
      ],
      action: "/volume-testing-managing-high-data-loads-efficiently",
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
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
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
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Performance Testing{" "}
            <span className="text-brand-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive performance testing services designed to
            ensure your applications are fast, scalable, and stable under any
            load. Our solutions focus on application <Link href='blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently'>performance, scalability
              testing</Link>, and load simulation to deliver high-speed, reliable digital
            experiences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {performanceTypes.map((type, index) => {
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
            {performanceTypes.map((type, index) => {
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
                        href={`blog/post${performanceTypes[activeTab].action}`}
                        className="bg-brand-blue text-white inline-block px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Explore {performanceTypes[activeTab].title}
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

export default PerformanceTestingComprehensiveSlider;
