"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

const ApiCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "FinTech Solutions Inc.",
      industry: "Financial Technology",
      challenge: "Payment API Security & Performance",
      solution:
        (<>Comprehensive <Link href="/security-testing" className="text-blue-600 underline">API security testing</Link> and performance optimization for payment processing systems.</>),
      results: {
        security: "100% vulnerability resolution",
        performance: "75% faster response times",
        reliability: "99.9% uptime achieved",
        cost: "40% reduction in security incidents",
      },
      metrics: [
        {
          label: "API Endpoints Tested",
          value: "150+",
          icon: <FaCode className="w-4 h-4" />,
        },
        {
          label: "Security Issues Found",
          value: "23",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Performance Improvement",
          value: "75%",
          icon: <FaRocket className="w-4 h-4" />,
        },
        {
          label: "Response Time",
          value: "45ms",
          icon: <FaClock className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's API testing expertise helped us achieve bank-grade security and performance. Their thorough testing approach identified critical vulnerabilities we missed.",

      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      icon: "💳",
    },
    {
      id: 2,
      company: "E-Commerce Platform",
      industry: "Retail Technology",
      challenge: "Microservices API Integration",
      solution:
        (<>End-to-end testing of <Link href="/api-testing" className="text-green-600 underline">microservices architecture</Link> with comprehensive API integration validation.</>),
      results: {
        integration: "99.8% API compatibility",
        deployment: "60% faster releases",
        errors: "85% reduction in production bugs",
        scalability: "10x traffic handling capacity",
      },
      metrics: [
        {
          label: "Microservices Tested",
          value: "45",
          icon: <FaCode className="w-4 h-4" />,
        },
        {
          label: "Integration Points",
          value: "120+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Bug Reduction",
          value: "85%",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
        {
          label: "Deployment Speed",
          value: "60%",
          icon: <FaRocket className="w-4 h-4" />,
        },
      ],
      testimonial:
        "The comprehensive microservices testing approach transformed our deployment process. We now ship features with confidence knowing our APIs are rock-solid.",

      color: "green",
      gradient: "from-green-500 to-green-600",
      icon: "🛒",
    },
    {
      id: 3,
      company: "Healthcare Data Systems",
      industry: "Healthcare Technology",
      challenge: "HIPAA Compliant API Testing",
      solution:
        (<>Specialized healthcare API testing with <Link href="/qa-documentation-services" className="text-red-600 underline">HIPAA compliance validation</Link> and data security assessment.</>),
      results: {
        compliance: "100% HIPAA compliance",
        security: "Zero data breaches",
        performance: "50% improved data processing",
        audit: "Perfect audit scores",
      },
      metrics: [
        {
          label: "Patient Records API",
          value: "500K+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "Compliance Tests",
          value: "200+",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
        {
          label: "Data Processing",
          value: "50%",
          icon: <FaChartLine className="w-4 h-4" />,
        },
        {
          label: "Security Score",
          value: "A+",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
      ],
      testimonial:
        "Testriq's healthcare-focused API testing ensured our patient data APIs meet the highest security and compliance standards. Exceptional expertise!",
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
            <span className="text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            API Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive API testing services have helped
            companies achieve remarkable improvements in <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats" className="text-brand-blue underline">security</Link>, <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently" className="text-brand-blue underline">performance</Link>,{" "}
            and <Link href="/blog/post/soap-api-testing-methodology-ensuring-legacy-system-reliability" className="text-brand-blue underline">reliability</Link>.
          </p>
        </div>

        {/* Interactive Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCase === index
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
            </button>
          ))}
        </div>

        {/* Active Case Study Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Case Study Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseStudies[activeCase].gradient} text-white flex items-center justify-center text-2xl mr-4 shadow-lg`}
                >
                  {caseStudies[activeCase].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p
                    className={`text-${caseStudies[activeCase].color}-600 font-semibold`}
                  >
                    {caseStudies[activeCase].industry}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-700 mb-4">
                  {caseStudies[activeCase].challenge}
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-700 mb-6">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {caseStudies[activeCase].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 rounded-lg border border-${caseStudies[activeCase].color}-200`}
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
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div
                className={`bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-white p-6 rounded-xl border-l-4 border-${caseStudies[activeCase].color}-500`}
              >
                <blockquote className="text-gray-700 italic mb-3">
                  &quot;{caseStudies[activeCase].testimonial}&quot;
                </blockquote>
              </div>
            </div>

            {/* Right Side - Results Visualization */}
            <div className="space-y-6">
              <div
                className={`bg-gradient-to-br from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 p-8 rounded-2xl border border-${caseStudies[activeCase].color}-200`}
              >
                <h4 className="font-bold text-gray-900 mb-6 text-center">
                  Key Results Achieved
                </h4>

                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCase].results).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md"
                      >
                        <div className="flex justify-between items-center mb-2 flex-col xl:flex-row">
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
                      </div>
                    )
                  )}
                </div>

                {/* Success Badge */}
                <div className="text-center mt-6">
                  <div
                    className={`inline-flex items-center gap-2 bg-${caseStudies[activeCase].color}-600 text-white px-4 py-2 rounded-full font-semibold`}
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Project Success</span>
                  </div>
                </div>
              </div>

              {/* Timeline Visualization */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">
                  Project Timeline
                </h4>
                <div className="space-y-3">
                  {[
                    "Analysis & Planning",
                    "Test Execution",
                    "Performance Testing",
                    "Delivery & Support",
                  ].map((phase, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full mr-3 animate-pulse`}
                      ></div>
                      <span className="text-gray-700 text-sm">{phase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() =>
              setActiveCase(
                activeCase > 0 ? activeCase - 1 : caseStudies.length - 1
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            <FaArrowRight className="w-4 h-4 transform rotate-180" />
            <span>Previous Case</span>
          </button>
          <button
            onClick={() =>
              setActiveCase(
                activeCase < caseStudies.length - 1 ? activeCase + 1 : 0
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
          >
            <span>Next Case</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our API testing experts help you achieve the same level of
              success. Get started with a comprehensive API assessment today.
            </p>
            <Link href="/contact-us">
              <button className="bg-white text-[theme(color.brand.blue)] cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
                Start Your Success Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiCaseStudies;
