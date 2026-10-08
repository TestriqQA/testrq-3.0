"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaDatabase,
  FaChartLine,
  FaCloudUploadAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTrophy,
} from "react-icons/fa";

const ETLCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "FinanceFlow Analytics",
      industry: "Financial Services",
      icon: <FaDatabase className="w-6 h-6" />,
      challenge: "Real-time Financial Data Integration & Compliance",
      solution:
        "Comprehensive ETL testing for real-time financial data processing with regulatory compliance validation and risk management integration.",
      metrics: [
        { label: "Data Accuracy", value: "99.9% precision", progress: 100 },
        { label: "Processing Speed", value: "5x faster", progress: 100 },
        { label: "Compliance", value: "100% regulatory", progress: 100 },
        { label: "Cost Reduction", value: "40% savings", progress: 95 },
      ],
      testimonial:
        "Testriq's ETL testing ensured our financial data pipelines meet strict regulatory requirements while maintaining real-time performance.",
      timeline: [
        "Requirements & Compliance Analysis",
        "ETL Pipeline Testing",
        "Performance Optimization",
        "Regulatory Validation",
      ],
      color: "blue",
    },
    {
      id: 2,
      company: "RetailMax Intelligence",
      industry: "E-commerce & Retail",
      icon: <FaChartLine className="w-6 h-6" />,
      challenge: "Multi-source Retail Data Integration & Analytics",
      solution:
        "End-to-end ETL testing for complex retail data integration from multiple sources including POS, inventory, and customer data systems.",
      metrics: [
        {
          label: "Data Integration",
          value: "15 sources unified",
          progress: 100,
        },
        { label: "Processing Time", value: "70% reduction", progress: 98 },
        { label: "Data Quality", value: "99.7% accuracy", progress: 99 },
        { label: "Analytics Speed", value: "3x faster insights", progress: 95 },
      ],
      testimonial:
        "The comprehensive ETL testing approach transformed our data integration capabilities and accelerated our analytics insights significantly.",
      timeline: [
        "Multi-source Analysis",
        "Integration Testing",
        "Performance Validation",
        "Analytics Optimization",
      ],
      color: "green",
    },
    {
      id: 3,
      company: "HealthData Systems",
      industry: "Healthcare Technology",
      icon: <FaCloudUploadAlt className="w-6 h-6" />,
      challenge: "Healthcare Data Migration & HIPAA Compliance",
      solution:
        "Secure ETL testing for healthcare data migration with HIPAA compliance validation and patient data protection protocols.",
      metrics: [
        { label: "Data Migration", value: "10M records", progress: 100 },
        { label: "Security Compliance", value: "100% HIPAA", progress: 100 },
        { label: "Data Integrity", value: "Zero data loss", progress: 100 },
        { label: "Migration Speed", value: "50% faster", progress: 92 },
      ],
      testimonial:
        "Testriq's expertise in healthcare ETL testing ensured our data migration was secure, compliant, and completed ahead of schedule.",

      timeline: [
        "HIPAA Compliance Analysis",
        "Security Testing",
        "Migration Validation",
        "Data Integrity Verification",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-500",
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-600",
        border: "border-green-500",
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
            ETL Testing <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive ETL testing services have helped
            companies achieve significant improvements in <span className="text-brand-blue font-semibold">data quality</span>, processing speed, and <span className="text-brand-blue font-semibold">regulatory compliance</span> across diverse industries and data ecosystems.
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
              aria-label="Previous Case Study"
            >
              <FaChevronLeft className="w-4 h-4 mr-2" />
              Previous Case
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-5 h-5 rounded-full transition-all duration-300 ${activeCase === index ? colorClasses.bg : "bg-gray-300"
                    } cursor-pointer`}
                  aria-label={`Select Case Study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              aria-label="Next Case Study"
            >
              Next Case
              <FaChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            title="View All Case Studies – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ETLCaseStudies;
