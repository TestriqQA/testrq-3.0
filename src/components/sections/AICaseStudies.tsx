"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaBrain,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

const AICaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "AI-Powered Recruiting Platform",
      industry: "Human Resources Technology",
      challenge: (<Link href='blog/post/bias-fairness-testing-for-ai'>AI Bias Detection & Fairness</Link>),
      solution:
        "Comprehensive AI bias testing and fairness validation for recruitment algorithms to ensure equal opportunity hiring.",
      results: {
        bias: "99.8% bias elimination",
        fairness: "100% demographic parity",
        accuracy: "94% hiring prediction accuracy",
        compliance: "Full EEOC compliance",
      },
      metrics: [
        {
          label: "AI Models Tested",
          value: "25+",
          icon: <FaBrain className="w-4 h-4" />,
        },
        {
          label: "Bias Tests Conducted",
          value: "500+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Accuracy Improvement",
          value: "15%",
          icon: <FaRocket className="w-4 h-4" />,
        },
        {
          label: "Compliance Score",
          value: "100%",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's AI bias testing transformed our hiring platform into a truly fair and compliant system. Their expertise in ethical AI is exceptional.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      icon: "👥",
    },
    {
      id: 2,
      company: "Autonomous Vehicle Systems",
      industry: "Automotive Technology",
      challenge: (<Link href='blog/post/ai-security-testing'>AI Safety & Reliability Testing</Link>),
      solution: (
        <>
          End-to-end AI model validation for <Link href="/robotics-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">autonomous driving systems</Link> with comprehensive safety and performance testing.
        </>
      ),
      results: {
        safety: "99.99% safety validation",
        performance: "Sub-millisecond response time",
        reliability: "Zero critical failures",
        accuracy: "96% object detection accuracy",
      },
      metrics: [
        {
          label: "AI Models Validated",
          value: "50+",
          icon: <FaBrain className="w-4 h-4" />,
        },
        {
          label: "Safety Scenarios",
          value: "10K+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Response Time",
          value: "0.8ms",
          icon: <FaClock className="w-4 h-4" />,
        },
        {
          label: "Detection Accuracy",
          value: "96%",
          icon: <FaChartLine className="w-4 h-4" />,
        },
      ],
      testimonial:
        "The comprehensive AI testing provided by Testriq gave us the confidence to deploy our autonomous systems safely. Outstanding technical expertise!",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      icon: "🚗",
    },
    {
      id: 3,
      company: "Medical Diagnosis AI",
      industry: "Healthcare Technology",
      challenge: (<Link href='blog/post/explainability-testing-in-ai'>Medical AI Accuracy & Explainability</Link>),
      solution: (
        <>
          Specialized medical AI testing with <Link href="/healthcare-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">FDA compliance</Link> validation and explainability assessment for diagnostic algorithms.
        </>
      ),
      results: {
        accuracy: "98.5% diagnostic accuracy",
        explainability: "100% decision transparency",
        compliance: "FDA 510(k) clearance",
        reliability: "24/7 continuous operation",
      },
      metrics: [
        {
          label: "Medical AI Models",
          value: "15+",
          icon: <FaBrain className="w-4 h-4" />,
        },
        {
          label: "Patient Cases",
          value: "100K+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Diagnostic Accuracy",
          value: "98.5%",
          icon: <FaChartLine className="w-4 h-4" />,
        },
        {
          label: "FDA Compliance",
          value: "100%",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's medical AI testing ensured our diagnostic systems meet the highest medical standards. Their regulatory expertise is unmatched in healthcare AI.",
      color: "red",
      gradient: "from-red-500 to-red-600",
      icon: "🏥",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive AI testing services have helped
            companies achieve remarkable improvements in accuracy, fairness, and
            reliability of their <Link href='blog/post/testing-ai-powered-applications-navigating-the-maze-with-a-smile'>intelligent
              systems</Link>.
          </p>
        </div>

        {/* Interactive AI Model Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 relative ${activeCase === index
                ? `bg-gradient-to-r ${study.gradient} text-white shadow-lg`
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-md"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{study.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{study.company}</div>
                  <div
                    className={`text-xs ${activeCase === index ? "text-white/80" : "text-gray-500"
                      }`}
                  >
                    {study.industry}
                  </div>
                </div>
              </div>

              {/* AI Neural Activity Indicator */}
              <div className="absolute top-2 right-2 flex space-x-1">
                <div
                  className={`w-1 h-1 rounded-full ${activeCase === index
                    ? "bg-white animate-pulse"
                    : `bg-${study.color}-500`
                    }`}
                ></div>
                <div
                  className={`w-1 h-1 rounded-full ${activeCase === index
                    ? "bg-white/80 animate-pulse"
                    : `bg-${study.color}-400`
                    }`}
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className={`w-1 h-1 rounded-full ${activeCase === index
                    ? "bg-white/60 animate-pulse"
                    : `bg-${study.color}-300`
                    }`}
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </button>
          ))}
        </div>

        {/* Active AI Case Study Display */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - AI Case Study Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseStudies[activeCase].gradient} text-white flex items-center justify-center text-2xl mr-4 shadow-lg relative`}
                >
                  {caseStudies[activeCase].icon}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p
                    className={`text-${caseStudies[activeCase].color}-600 font-semibold flex items-center`}
                  >
                    <FaBrain className="w-4 h-4 mr-2" />
                    {caseStudies[activeCase].industry}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2 animate-pulse`}
                  ></div>
                  AI Challenge:
                </h4>
                <p className="text-gray-700 mb-4">
                  {caseStudies[activeCase].challenge}
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2 animate-pulse`}
                  ></div>
                  AI Solution:
                </h4>
                <p className="text-gray-700 mb-6">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* AI Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {caseStudies[activeCase].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`p-2 md:p-4 bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 rounded-lg border border-${caseStudies[activeCase].color}-200 relative`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`text-${caseStudies[activeCase].color}-600 mr-2`}
                      >
                        {metric.icon}
                      </div>
                      <div
                        className={`text-${caseStudies[activeCase].color}-800 font-bold text-lg`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <div className="text-gray-700 text-sm font-medium">
                      {metric.label}
                    </div>
                    {/* Neural Activity Indicators */}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <div
                        className={`w-1 h-1 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                      ></div>
                      <div
                        className={`w-1 h-1 bg-${caseStudies[activeCase].color}-400 rounded-full animate-pulse`}
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Testimonial */}
              <div
                className={`bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-white p-6 rounded-xl border-l-4 border-${caseStudies[activeCase].color}-500 relative`}
              >
                <div
                  className={`absolute top-4 right-4 w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full animate-ping opacity-50`}
                ></div>
                <blockquote className="text-gray-700 italic mb-3">
                  &quot;{caseStudies[activeCase].testimonial}&quot;
                </blockquote>
                <cite
                  className={`text-${caseStudies[activeCase].color}-600 font-semibold text-sm flex items-center`}
                >
                </cite>
              </div>
            </div>

            {/* Right Side - AI Results Visualization */}
            <div className="space-y-6">
              <div
                className={`bg-gradient-to-br from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 p-8 rounded-2xl border border-${caseStudies[activeCase].color}-200 relative`}
              >
                <h4 className="font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <FaBrain className="w-5 h-5 mr-2" />
                  AI Results Achieved
                </h4>

                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCase].results).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md relative"
                      >
                        <div className="flex justify-between items-center mb-2 flex-col md:flex-row">
                          <span className="font-semibold text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span
                            className={`text-${caseStudies[activeCase].color}-600 font-bold`}
                          >
                            {value}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${caseStudies[activeCase].gradient} h-2 rounded-full animate-pulse`}
                            style={{ width: `${85 + index * 5}%` }}
                          ></div>
                        </div>
                        {/* AI Processing Indicator */}
                        <div className="absolute top-2 right-2 flex space-x-1">
                          <div
                            className={`w-1 h-1 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                          ></div>
                          <div
                            className={`w-1 h-1 bg-${caseStudies[activeCase].color}-400 rounded-full animate-pulse`}
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* AI Success Badge */}
                <div className="text-center mt-6">
                  <div
                    className={`inline-flex items-center gap-2 bg-${caseStudies[activeCase].color}-600 text-white px-4 py-2 rounded-full font-semibold`}
                  >
                    <FaBrain className="w-4 h-4" />
                    <span>AI Success</span>
                  </div>
                </div>

                {/* AI Neural Network Pattern */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="relative w-6 h-6">
                    <div
                      className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full absolute top-0 left-2 animate-ping`}
                    ></div>
                    <div
                      className={`w-1.5 h-1.5 bg-${caseStudies[activeCase].color}-400 rounded-full absolute top-2 left-0 animate-ping`}
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className={`w-1.5 h-1.5 bg-${caseStudies[activeCase].color}-400 rounded-full absolute top-2 right-0 animate-ping`}
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className={`w-1 h-1 bg-${caseStudies[activeCase].color}-300 rounded-full absolute bottom-0 left-2 animate-ping`}
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* AI Model Architecture Visualization */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FaBrain className="w-4 h-4 mr-2" />
                  AI Model Performance
                </h4>
                <div className="space-y-3">
                  {[
                    "Input Layer",
                    "Hidden Layers",
                    "Output Layer",
                    "Validation",
                  ].map((layer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-3 animate-pulse`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        ></div>
                        <span className="text-gray-700 text-sm">{layer}</span>
                      </div>
                      <div
                        className={`text-${caseStudies[activeCase].color}-600 text-xs font-semibold`}
                      >
                        {95 + index}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() =>
              setActiveCase(
                activeCase > 0 ? activeCase - 1 : caseStudies.length - 1
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer transition-colors duration-300"
          >
            <FaArrowRight className="w-4 h-4 transform rotate-180" />
            <span>Previous AI Case</span>
          </button>
          <button
            onClick={() =>
              setActiveCase(
                activeCase < caseStudies.length - 1 ? activeCase + 1 : 0
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white rounded-lg font-semibold hover:shadow-lg cursor-pointer transition-colors duration-300"
          >
            <span>Next AI Case</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AICaseStudies;
