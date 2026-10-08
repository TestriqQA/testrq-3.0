"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaHeartbeat,
  FaHome,
  FaHeadphones,
  FaChevronLeft,
  FaChevronRight,
  FaTrophy,
} from "react-icons/fa";

const SmartDeviceCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "HealthTech Wearables",
      industry: "Healthcare Technology",
      icon: <FaHeartbeat className="w-6 h-6" />,
      challenge: "Fitness Tracker Connectivity & Battery Optimization",
      solution:
        "Comprehensive connectivity testing and battery optimization for health monitoring wearables with 24/7 operation requirements.",
      metrics: [
        { label: "Battery Life", value: "7 days extended", progress: 100 },
        { label: "Connectivity", value: "99.8% uptime", progress: 99 },
        { label: "Accuracy", value: "98% sensor precision", progress: 98 },
        {
          label: "User Satisfaction",
          value: "95% rating increase",
          progress: 95,
        },
      ],
      testimonial:
        "Testriq's smart device testing helped us achieve medical-grade accuracy and reliability. The battery optimization exceeded our expectations.",
      timeline: [
        "Device Requirements Analysis",
        "Connectivity & Sensor Testing",
        "Battery Optimization",
        "Medical Compliance Validation",
      ],
      color: "green",
    },
    {
      id: 2,
      company: "SmartHome Solutions",
      industry: "Home Automation",
      icon: <FaHome className="w-6 h-6" />,
      challenge: "Smart Home Hub Integration & Security",
      solution:
        "End-to-end testing of smart home ecosystem including device interoperability, security protocols, and network reliability.",
      metrics: [
        {
          label: "Device Integration",
          value: "100% compatibility",
          progress: 100,
        },
        { label: "Security", value: "Zero vulnerabilities", progress: 100 },
        { label: "Response Time", value: "50ms average", progress: 95 },
        { label: "Network Stability", value: "99.9% uptime", progress: 99 },
      ],
      testimonial:
        "The comprehensive testing approach ensured our smart home devices work seamlessly together. Security validation was particularly thorough.",
      timeline: [
        "Ecosystem Analysis",
        "Interoperability Testing",
        "Security Assessment",
        "Performance Optimization",
      ],
      color: "blue",
    },
    {
      id: 3,
      company: "AudioTech Innovations",
      industry: "Consumer Electronics",
      icon: <FaHeadphones className="w-6 h-6" />,
      challenge: "Wireless Audio Device Quality & Latency",
      solution:
        "Advanced audio quality testing and latency optimization for wireless headphones with active noise cancellation features.",
      metrics: [
        { label: "Audio Quality", value: "Hi-Fi certified", progress: 100 },
        { label: "Latency", value: "20ms achieved", progress: 90 },
        { label: "Battery Life", value: "30hrs playback", progress: 100 },
        { label: "Connectivity", value: "99.5% stable", progress: 95 },
      ],
      testimonial:
        "Testriq's audio testing expertise helped us achieve audiophile-grade quality. The latency optimization was crucial for our gaming market.",
      timeline: [
        "Audio Requirements Analysis",
        "Quality & Latency Testing",
        "Battery Performance Testing",
        "Market Certification",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "bg-green-500",
        text: "text-green-600",
        border: "border-green-500",
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-500",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-500",
      },
    };
    return colors[color as keyof typeof colors];
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const currentCase = caseStudies[activeCase];
  const colorClasses = getColorClasses(currentCase.color);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Device Testing{" "}
            <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive <span className="text-brand-blue font-semibold">smart device testing</span> services have
            helped companies achieve remarkable improvements in <span className="text-brand-blue font-semibold">connectivity</span>,
            performance, and user satisfaction across various device categories.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center px-6 py-3 rounded-xl border-2 transition-all duration-300 ${activeCase === index
                  ? `${getColorClasses(caseStudy.color).bg
                  } text-white border-transparent shadow-lg`
                  : `bg-white ${getColorClasses(caseStudy.color).text} ${getColorClasses(caseStudy.color).border
                  } hover:bg-gray-50`
                } cursor-pointer`}
            >
              <div className="mr-3">{caseStudy.icon}</div>
              <div className="text-left">
                <div className="font-semibold text-sm">{caseStudy.company}</div>
                <div className="text-xs opacity-80">{caseStudy.industry}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study Display */}
        <div
          className={`bg-white border-2 ${colorClasses.border} rounded-2xl shadow-xl overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Case Details */}
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${colorClasses.bg} text-white`}
              >
                {currentCase.icon}
                <span className="ml-2">{currentCase.company}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentCase.company}
              </h3>
              <p className={`${colorClasses.text} font-semibold mb-4`}>
                {currentCase.industry}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-600 mb-4">{currentCase.challenge}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-600">{currentCase.solution}</p>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-l-green-500">
                <p className="text-gray-700 italic mb-3">
                  &quot;{currentCase.testimonial}&quot;
                </p>
              </div>
            </div>

            {/* Right Side - Metrics and Timeline */}
            <div>
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Key Results Achieved
                </h4>
                <div className="space-y-4">
                  {currentCase.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className={`font-semibold ${colorClasses.text}`}>
                          {metric.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${colorClasses.bg} transition-all duration-1000 ease-out`}
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Project Timeline
                </h4>
                <div className="space-y-3">
                  {currentCase.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${colorClasses.bg} mr-3`}
                      ></div>
                      <span className="text-gray-600">{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Badge */}
              <div className="mt-8 text-center">
                <div
                  className={`inline-flex items-center px-6 py-3 rounded-full ${colorClasses.bg} text-white font-semibold shadow-lg`}
                >
                  <span className="mr-2">✓</span>
                  Project Success
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-4 flex items-center justify-between">
            <button
              onClick={prevCase}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              <FaChevronLeft className="w-4 h-4 mr-2" />
              Previous Case
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCase === index ? colorClasses.bg : "bg-gray-300"
                    } cursor-pointer`}
                  aria-label={`Select case study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              Next Case
              <FaChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
              View All Case Studies
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceCaseStudies;
