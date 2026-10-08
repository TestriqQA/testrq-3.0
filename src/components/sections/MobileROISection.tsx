// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaDollarSign, FaClock, FaUsers, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";
import Link from "next/link";

const MobileROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      value: "50%",
      description: "Average reduction in mobile testing costs compared to traditional methods",
      details: "Save on device procurement, infrastructure, and resource allocation"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Time to Market",
      value: "70%",
      description: "Faster time to market with accelerated mobile testing cycles",
      details: "Parallel testing across multiple devices and platforms simultaneously"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "User Satisfaction",
      value: "98%",
      description: "Improvement in app store ratings and user satisfaction scores",
      details: "Enhanced user experience through comprehensive mobile testing"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "App Store Success",
      value: "99.5%",
      description: "First-time app store approval rate for tested applications",
      details: "Proactive compliance testing prevents costly rejections"
    }
  ];

  const costComparison = [
    {
      category: "In-House Mobile Testing",
      setup: "$50,000",
      monthly: "$15,000",
      annual: "$230,000",
      limitations: ["Limited device coverage", "High device procurement costs", "Maintenance overhead"]
    },
    {
      category: "Testriq Mobile Testing",
      setup: "$0",
      monthly: "$1,200",
      annual: "$14,400",
      limitations: ["50+ real devices included", "No procurement costs", "Expert mobile QA team"]
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Maximize Your{" "}
            <span className="text-[theme(color.brand.blue)]">Mobile Testing ROI</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our mobile testing services deliver measurable business value through cost reduction, faster app store approvals, increased testing automation, real device coverage, and improved user satisfaction across iOS, Android, and cross-platform apps.
          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            Cost Comparison: In-House vs Testriq Mobile Testing
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
              Choose Testriq and reduce your mobile testing costs by 62% while improving quality
            </div>
          </div>
        </div>

        {/* Mobile App Success Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mobile App Success Beyond Cost Savings
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <FaRocket className="w-6 h-6" />,
                  title: "Faster App Store Launch",
                  description: "Accelerate your app launch with comprehensive testing that ensures first-time approval"
                },
                {
                  icon: <FaChartLine className="w-6 h-6" />,
                  title: "Higher App Store Rankings",
                  description: "Better app quality leads to higher ratings, more downloads, and improved visibility"
                },
                {
                  icon: <FaShieldAlt className="w-6 h-6" />,
                  title: "Reduced Post-Launch Issues",
                  description: "Comprehensive testing reduces the risk of costly post-launch bugs and negative reviews"
                },
                {
                  icon: <FaUsers className="w-6 h-6" />,
                  title: "Enhanced User Retention",
                  description: "High-quality mobile apps result in better user retention and increased lifetime value"
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

          {/* Right Content - Mobile ROI Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Mobile Testing ROI Calculator
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Current Testing Cost (Annual)</span>
                <span className="font-semibold">$315,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Testriq Cost (Annual)</span>
                <span className="font-semibold text-[theme(color.brand.blue)]">$120,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700 font-semibold">Annual Savings</span>
                <span className="font-bold text-green-600 text-xl">$195,000</span>
              </div>
            </div>

            {/* Additional Mobile Benefits */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">App Store Success Rate:</span>
                <span className="font-semibold text-green-600">+15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">User Rating Improvement:</span>
                <span className="font-semibold text-green-600">+0.8 stars</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time to Market:</span>
                <span className="font-semibold text-green-600">-70%</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                625%
              </div>
              <div className="text-gray-600 mb-4">
                Return on Investment in Year 1
              </div>
              <Link href="/roi-calculator" className="inline-block">
                <button className="w-full px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  Calculate Your Mobile ROI
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileROISection;

