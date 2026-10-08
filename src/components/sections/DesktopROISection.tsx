"use client";

import Link from "next/link";
import React from "react";
import { FaDollarSign, FaClock, FaUsers, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

const DesktopROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      value: "40%",
      description: "Average reduction in testing costs compared to traditional methods",
      details: "Save on infrastructure, tools, and resource allocation"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Time to Market",
      value: "60%",
      description: "Faster time to market with accelerated testing cycles",
      details: "Parallel testing across multiple platforms simultaneously"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "User Satisfaction",
      value: "95%",
      description: "Improvement in user satisfaction scores post-testing",
      details: "Enhanced user experience through comprehensive testing"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Bug Prevention",
      value: "85%",
      description: "Reduction in post-release bugs and issues",
      details: "Proactive testing prevents costly production fixes"
    }
  ];

  const costComparison = [
    {
      category: "In-House Testing",
      setup: "$50,000",
      monthly: "$15,000",
      annual: "$230,000",
      limitations: ["Limited platform coverage", "High infrastructure costs", "Resource constraints"]
    },
    {
      category: "Testriq Testing",
      setup: "$0",
      monthly: "$1200",
      annual: "$14,400",
      limitations: ["Full platform coverage", "No infrastructure costs", "Expert resources included"]
    }
  ];

  const scrollToROICalculator = () => {
    document.querySelector("#calculate-ROI")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">
              Return on Investment
            </span>
          </div>
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">

          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Maximize Your{" "}
            <span className="text-[theme(color.brand.blue)]">Testing ROI</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our desktop testing services deliver measurable business value through cost reduction,
            faster time to market, and improved user satisfaction.
          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 text-[theme(color.brand.blue)] mx-auto">
                {metric.icon}
              </div>

              <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                {metric.value}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {metric.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {metric.description}
              </p>

              <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                {metric.details}
              </div>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Cost Comparison: In-House vs Testriq
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {costComparison.map((option, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border-2 ${index === 1
                    ? 'border-[theme(color.brand.blue)] bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                  }`}
              >
                <div className="text-center mb-6">
                  <h4 className={`text-xl font-bold mb-2 ${index === 1 ? 'text-[theme(color.brand.blue)]' : 'text-gray-900'
                    }`}>
                    {option.category}
                  </h4>
                  {index === 1 && (
                    <span className="inline-block bg-[theme(color.brand.blue)] text-white text-xs px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setup Cost:</span>
                    <span className="font-semibold text-gray-900">{option.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly Cost:</span>
                    <span className="font-semibold text-gray-900">{option.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-gray-900 font-semibold">Annual Total:</span>
                    <span className={`font-bold text-xl ${index === 1 ? 'text-[theme(color.brand.blue)]' : 'text-gray-900'
                      }`}>
                      {option.annual}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {option.limitations.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-2">
              Save $215,600 Annually
            </div>
            <div className="text-green-700">
              Choose Testriq and reduce your testing costs by 58% while improving quality
            </div>
          </div>
        </div>

        {/* Business Impact */}
        <div id="calculate-ROI" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Business Impact Beyond Cost Savings
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <FaRocket className="w-6 h-6" />,
                  title: "Faster Product Launch",
                  description: "Accelerate your go-to-market strategy with parallel testing across multiple platforms"
                },
                {
                  icon: <FaChartLine className="w-6 h-6" />,
                  title: "Improved Market Position",
                  description: "Higher quality applications lead to better user reviews and market positioning"
                },
                {
                  icon: <FaShieldAlt className="w-6 h-6" />,
                  title: "Risk Mitigation",
                  description: "Comprehensive testing reduces the risk of costly post-release issues and patches"
                },
                {
                  icon: <FaUsers className="w-6 h-6" />,
                  title: "Enhanced Brand Reputation",
                  description: "Deliver consistently high-quality applications that build customer trust and loyalty"
                }
              ].map((impact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[theme(color.brand.blue)]">
                    {impact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{impact.title}</h4>
                    <p className="text-gray-600 text-sm">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - ROI Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              ROI Calculator
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Current Testing Cost (Annual)</span>
                <span className="font-semibold">$230,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Testriq Cost (Annual)</span>
                <span className="font-semibold text-[theme(color.brand.blue)]">$14,400</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700 font-semibold">Annual Savings</span>
                <span className="font-bold text-green-600 text-xl">$215,600</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                583%
              </div>
              <div className="text-gray-600 mb-4">
                Return on Investment in Year 1
              </div>
              <Link href="/roi-calculator" className="inline-block">
                <button className="w-full px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  Calculate Your ROI
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Start Maximizing Your Testing ROI Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their testing approach
              and achieved significant cost savings with Testriq.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={scrollToROICalculator} className="px-8 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Get ROI Analysis
              </button>
              <Link href="/contact-us" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopROISection;

