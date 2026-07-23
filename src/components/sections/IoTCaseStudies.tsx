"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBluetooth, FaMobileAlt, FaTachometerAlt, FaCheckCircle, FaShieldAlt, FaLock, FaBell, FaVideo, FaTrophy, FaWifi, FaArrowRight } from 'react-icons/fa';

const HUB_BG: Record<string, string> = {
  blue: "bg-blue-600",
  green: "bg-green-700",
  purple: "bg-purple-600",
};

const IoTCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Hamilton Housewares Pvt Ltd.",
      industry: "Homewares",
      challenge: "Ensuring Quality and Reliability of Smart Hydration Product",
      solution: (
        <>
          Comprehensive testing of the MILTON Smart Stainless Steel Water Bottle and its{" "}
          <Link href='blog/post/ios-vs-android-testing-key-differences-every-qa-should-know' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">iOS/Android apps</Link>, focusing on <Link href='blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">connectivity</Link>, functionality, and measurement accuracy.
        </>
      ),
      results: {
        connectivity: "Significantly improved stability across devices",
        accuracy: "Enhanced measurement precision",
        quality: "Top-tier product performance",
      },
      metrics: [
        {
          label: "Devices Tested",
          value: "20+",
          icon: <FaMobileAlt className="w-4 h-4" />,
        },
        {
          label: "Connectivity Protocols",
          value: "Bluetooth",
          icon: <FaBluetooth className="w-4 h-4" />,
        },
        {
          label: "Measurement Accuracy",
          value: "Improved precision",
          icon: <FaTachometerAlt className="w-4 h-4" />,
        },
        {
          label: "Quality Standards",
          value: "Met high standards",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
      ],
      testimonial: "Testriq’s rigorous testing ensured our MILTON Smart Stainless Steel Water Bottle and app met the highest quality standards, enhancing user experience and reliability.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      icon: "💧",
      action: "/milton-case-study"
    },
    {
      id: 2,
      company: "Indo Wings Private Limited",
      industry: "Aerospace and UAV Technology",
      challenge: "Validating Secure Drone Communication System",
      solution: (
        <>
          Comprehensive <Link href='security-testing' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">security</Link> and <Link href='performance-testing-services' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">performance testing</Link> of encrypted drone-to-ground communication and Android-based ground control app, in collaboration with Audix Technologies.
        </>
      ),
      results: {
        security: "100% secure communication protocols",
        apkResilience: "Strong resistance to tampering",
        performance: "Stable with no latency issues",
        compliance: "Certified by Audix Technologies",
      },
      metrics: [
        {
          label: "Security Protocols Tested",
          value: "Multiple",
          icon: <FaShieldAlt className="w-4 h-4" />,
        },
        {
          label: "APK Security",
          value: "Tamper-resistant",
          icon: <FaLock className="w-4 h-4" />,
        },
        {
          label: "Performance Stability",
          value: "No latency issues",
          icon: <FaTachometerAlt className="w-4 h-4" />,
        },
        {
          label: "Compliance",
          value: "Certified",
          icon: <FaCheckCircle className="w-4 h-4" />,
        },
      ],
      testimonial: "Testriq's rigorous testing and partnership with Audix Technologies ensured our drone communication system was secure and market-ready.",
      color: "green",
      gradient: "from-green-500 to-green-600",
      icon: "🚁",
      action: "/indo-wings-case-study"
    },
    {
      id: 3,
      company: "Confidential",
      industry: "Home Automation",
      challenge: "Ensuring Seamless Smart Video Doorbell Performance",
      solution: (
        <>
          End-to-end QA testing of mobile apps, <Link href='api-testing' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">APIs</Link>, <Link href='blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core' className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">cloud integration</Link>, and device communication for a smart video doorbell system.
        </>
      ),
      results: {
        streaming: "Stable with minimal delay",
        notifications: "100% success rate for alerts",
        compatibility: "Consistent across Android and iOS",
        security: "No vulnerabilities in data sync",
      },
      metrics: [
        {
          label: "Devices Tested",
          value: "20+",
          icon: <FaMobileAlt className="w-4 h-4" />,
        },
        {
          label: "Notification Success",
          value: "100%",
          icon: <FaBell className="w-4 h-4" />,
        },
        {
          label: "Streaming Stability",
          value: "Minimal delay",
          icon: <FaVideo className="w-4 h-4" />,
        },
        {
          label: "Security",
          value: "Secure data sync",
          icon: <FaLock className="w-4 h-4" />,
        },
      ],
      testimonial: "Testriq’s thorough QA process ensured our smart doorbell app was reliable, secure, and ready for market launch.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      icon: "🔔",
      action: "/smart-doorbell-case-study"
    },
  ];


  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IoT Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive IoT testing services have helped
            companies achieve remarkable improvements in connectivity, security,
            and device reliability.
          </p>
        </div>

        {/* Interactive IoT Device Selector */}
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

              {/* IoT Connection Indicator */}
              <div
                className={`absolute top-2 right-2 w-2 h-2 rounded-full ${activeCase === index
                  ? "bg-white animate-pulse"
                  : `bg-${study.color}-500`
                  }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Active IoT Case Study Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - IoT Case Study Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseStudies[activeCase].gradient} text-white flex items-center justify-center text-2xl mr-4 shadow-lg relative`}
                >
                  {caseStudies[activeCase].icon}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudies[activeCase].company}
                  </h3>
                  <p
                    className={`text-${caseStudies[activeCase].color}-600 font-semibold flex items-center`}
                  >
                    <FaWifi className="w-4 h-4 mr-2" />
                    {caseStudies[activeCase].industry}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2`}
                  ></div>
                  IoT Challenge:
                </h4>
                <p className="text-gray-700 mb-4">
                  {caseStudies[activeCase].challenge}
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <div
                    className={`w-2 h-2 bg-${caseStudies[activeCase].color}-500 rounded-full mr-2`}
                  ></div>
                  IoT Solution:
                </h4>
                <p className="text-gray-700 mb-6">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* IoT Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {caseStudies[activeCase].metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`w-auto p-1 md:p-4 -mx-1 bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 rounded-lg border border-${caseStudies[activeCase].color}-200 relative`}
                  >
                    <div className="flex items-center mb-2 ">
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
                    <div
                      className={`absolute hidden md:block top-2 right-2 w-1.5 h-1.5 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* IoT Testimonial */}
              <div
                className={`bg-gradient-to-r from-${caseStudies[activeCase].color}-50 to-white p-6 rounded-xl border-l-4 border-${caseStudies[activeCase].color}-500 relative`}
              >
                <div
                  className={`absolute top-4 right-4 w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full animate-ping opacity-50`}
                ></div>
                <blockquote className="text-gray-700 italic mb-3">
                  &quot;{caseStudies[activeCase].testimonial}&quot;
                </blockquote>
              </div>
              <div>
                <Link href={caseStudies[activeCase].action} className="inline-flex items-center gap-2 text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors">
                  Read Full Case Study
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side - IoT Results Visualization */}
            <div className="space-y-6">
              <div
                className={`bg-gradient-to-br from-${caseStudies[activeCase].color}-50 to-${caseStudies[activeCase].color}-100 p-8 rounded-2xl border border-${caseStudies[activeCase].color}-200 relative`}
              >
                <h4 className="font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <FaWifi className="w-5 h-5 mr-2" />
                  IoT Results Achieved
                </h4>

                <div className="space-y-4">
                  {Object.entries(caseStudies[activeCase].results).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md relative"
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
                        <div
                          className={`absolute top-2 right-2 w-1 h-1 bg-${caseStudies[activeCase].color}-500 rounded-full animate-pulse`}
                        ></div>
                      </div>
                    )
                  )}
                </div>

                {/* IoT Success Badge */}
                <div className="text-center mt-6">
                  <div
                    className={`inline-flex items-center gap-2 bg-${caseStudies[activeCase].color}-600 text-white px-4 py-2 rounded-full font-semibold`}
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    <span>IoT Success</span>
                  </div>
                </div>

                {/* IoT Connection Pattern */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div
                    className={`w-3 h-3 bg-${caseStudies[activeCase].color}-500 rounded-full animate-ping`}
                  ></div>
                </div>
              </div>

              {/* IoT Device Network Visualization */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FaWifi className="w-4 h-4 mr-2" />
                  IoT Network Topology
                </h4>
                <div className="relative">
                  {/* Central Hub */}
                  <div className="flex justify-center mb-4">
                    {/* Static literal map, not `bg-${color}-500`: Tailwind only compiles
                        classes it can see as literal text, and white on a -500 fill is
                        only 3.76:1 (needs 4.5). These -600/-700 fills clear it — white on
                        blue-600 5.25, green-700 4.95, purple-600 5.54. */}
                    <div
                      className={`w-8 h-8 ${HUB_BG[caseStudies[activeCase].color] ?? "bg-blue-600"} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      HUB
                    </div>
                  </div>

                  {/* Connected Devices */}
                  <div className="grid grid-cols-4 gap-2">
                    {["📱", "💡", "🔒", "🌡️"].map((device, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg mb-1">{device}</div>
                        <div
                          className={`w-2 h-2 bg-${caseStudies[activeCase].color}-400 rounded-full mx-auto animate-pulse`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IoT Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setActiveCase(
                activeCase > 0 ? activeCase - 1 : caseStudies.length - 1
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:shadow-lg cursor-pointer text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            <FaArrowRight className="w-4 h-4 transform rotate-180" />
            <span>Previous IoT Case</span>
          </button>
          <button
            onClick={() =>
              setActiveCase(
                activeCase < caseStudies.length - 1 ? activeCase + 1 : 0
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] cursor-pointer text-white rounded-lg font-semibold hover:shadow-lg transition-colors duration-300"
          >
            <span>Next IoT Case</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTCaseStudies;
