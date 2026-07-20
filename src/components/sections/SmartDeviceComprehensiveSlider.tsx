"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaWifi, FaShieldAlt, FaChartLine, FaMobile, FaFlask } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";

const SmartDeviceComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "fragmentation",
      title: "Mass Device Fragmentation",
      icon: <FaMobile className="w-6 h-6" />,
      coverage: "ISO 29119-3 Compliant",
      description: (
        <>
          The exponential growth of wearables, home appliances, and sensors has created a fragmentation crisis. To ensure global compatibility, organizations must expand their validation scope beyond a limited selection of flagship devices. Our Fix: We implement <Link href="/qa-documentation-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">ISO/IEC/IEEE 29119-3</Link> standardized test design. Our team maps coverage across hundreds of hardware configurations using a real device cloud, preventing failures before you launch.
        </>
      ),
      features: [
        "ISO 29119-3 Test Design",
        "Real Device Cloud Mapping",
        "Hardware-Level Validation",
        "Niche Device Compatibility"
      ],
      color: "green",
      action: "blog/post/user-experience-testing-for-smart-devices-usability-accessibility"
    },
    {
      id: "security",
      title: "Cyber-security Defense",
      icon: <FaShieldAlt className="w-6 h-6" />,
      coverage: "ISO 27001 & NTIA Baselines",
      description: (
        <>
          Security is the top restraint for IoT growth in 2026. With unpatched firmware and weak encryption being the primary attack vectors, distributed networks are more vulnerable than ever. Our Fix: Our IoT security protocols align with ISO/IEC 27001 and emerging NTIA baselines. We identify vulnerabilities using OWASP ZAP, Burp Suite, and Nmap, performing deep <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">penetration testing</Link> on your hardware.
        </>
      ),
      features: [
        "Firmware Hardening Audits",
        "OWASP ZAP Penetration Testing",
        "NTIA Baseline Compliance",
        "Deep Local Attack Defense"
      ],
      color: "red",
      action: "/security-testing"
    },
    {
      id: "network",
      title: "Multi-Protocol Stability",
      icon: <FaWifi className="w-6 h-6" />,
      coverage: "5G & Wi-Fi 6 Optimized",
      description: "99.8% uptime targets are difficult to hit as 5G, Wi-Fi 6, Bluetooth, and Zigbee compete for bandwidth. Stability testing must account for latency, interference, and handoffs. Our Fix: Using Wireshark and iPerf3, we validate Machine-to-Machine (M2M) communication stability. We simulate 'noisy' real-world environments to guarantee your hardware remains connected.",
      features: [
        "Wireshark Protocol Analysis",
        "M2M Stability Validation",
        "Noisy Environment Simulation",
        "Latency & Handoff Testing"
      ],
      color: "blue",
      action: "blog/post/connectivity-testing-for-smart-devices-wifi-bluetooth-nfc"
    },
    {
      id: "scalability",
      title: "Massive Scalability",
      icon: <FaChartLine className="w-6 h-6" />,
      coverage: "Millions of Connections",
      description: "Analysts project the IoT testing market will hit $2.17B as demand for seamless compatibility surges. Systems must scale to support millions of concurrent connections without performance degradation. Our Fix: We leverage JMeter and Gatling for high-tier performance testing. Our end-to-end validation ensures that data processing remains stable under maximum load at both device and edge levels.",
      features: [
        "JMeter Scaling Validation",
        "Edge Computing Stress Tests",
        "High-density Connection QA",
        "Concurrent Performance Audits"
      ],
      color: "indigo",
      action: "/performance-testing-services"
    },
    {
      id: "battery",
      title: "Battery & Env Durability",
      icon: <FaBatteryFull className="w-6 h-6" />,
      coverage: "Long-life Optimization",
      description: "For wearables and battery-powered sensors, power management is the ultimate KPI. Inefficient firmware validation can drain a 7-day battery in hours. Our Fix: Using Battery Historian and Instruments, we perform deep-dive battery life optimization. We validate device durability under extreme heat, humidity, and vibration to guarantee sensor precision in the field.",
      features: [
        "Battery Historian Analysis",
        "Extreme Condition Durability",
        "Firmware Power Profile QA",
        "Thermal Throttling Audits"
      ],
      color: "orange",
      action: "blog/post/battery-power-testing-for-smart-devices-optimization-guide"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      green: isActive ? "bg-green-500 text-white" : "bg-green-50 text-green-600 hover:bg-green-100",
      red: isActive ? "bg-red-500 text-white" : "bg-red-50 text-red-600 hover:bg-red-100",
      orange: isActive ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600 hover:bg-orange-100",
      blue: isActive ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-600 hover:bg-blue-100",
      purple: isActive ? "bg-purple-500 text-white" : "bg-purple-50 text-purple-600 hover:bg-purple-100",
      indigo: isActive ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      green: "border-green-200",
      red: "border-red-200",
      orange: "border-orange-200",
      blue: "border-blue-200",
      purple: "border-purple-200",
      indigo: "border-indigo-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Navigating the 2026 <span className="text-brand-blue">Global Challenges</span> in Smart Device QA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To ensure top-tier performance, we address the <span className="font-semibold text-brand-blue">five critical barriers</span> to global IoT success, facilitating smooth market entry and building consumer trust.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${getColorClasses(type.color, activeTab === index)} ${getBorderColor(type.color)}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">{type.icon}</div>
                <div className="font-semibold text-sm">{type.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                {testingTypes[activeTab].coverage}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className={`mr-3 p-2 rounded-lg ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                  {testingTypes[activeTab].icon}
                </span>
                {testingTypes[activeTab].title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {testingTypes[activeTab].description}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {testingTypes[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={testingTypes[activeTab].action}
                className={`
    mt-4 sm:mt-6
    w-full sm:w-auto
    inline-flex items-center justify-center

    px-4 sm:px-6 md:px-8
    py-2.5 sm:py-3 md:py-3.5

    text-sm sm:text-base md:text-lg
    font-semibold

    rounded-lg
    transition-all duration-300

    ${getColorClasses(testingTypes[activeTab].color, true)}
    hover:opacity-90
    active:scale-95
  `}
              >
                Explore {testingTypes[activeTab].title}
              </Link>

            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 ${getBorderColor(testingTypes[activeTab].color)}`}>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${getColorClasses(testingTypes[activeTab].color, false)}`}>
                    <div className="text-3xl">
                      {testingTypes[activeTab].icon}
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2">
                    {testingTypes[activeTab].title}
                  </h4>

                  <div className={`text-sm font-semibold`}>
                    {testingTypes[activeTab].coverage}
                  </div>

                  {/* Progress Visualization */}
                  <div className="mt-6 space-y-3">
                    {testingTypes[activeTab].features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="text-left">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{feature}</span>
                          <span className={`font-semibold ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[1]}`}>
                            {96 + index * 2}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getColorClasses(testingTypes[activeTab].color, true).split(' ')[0]}`}
                            style={{ width: `${96 + index * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartDeviceComprehensiveSlider;

