// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaSearch,
  FaCog,
  FaShieldAlt,
  FaCloud,
  FaSync,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
  FaNetworkWired,
  FaBatteryHalf,
  FaPlay,
} from "react-icons/fa";

const IoTTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "IoT Architecture Analysis",
      description:
        "Comprehensive analysis of IoT ecosystem architecture, device types, and communication protocols",
      details: [
        "Device Inventory",
        (<><Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more">Protocol Analysis</Link></>),
        "Network Topology",
        (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Security Assessment</Link></>),
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaCog,
      title: "Test Environment Setup",
      description:
        "Configuration of testing environments that replicate real-world IoT deployment conditions",
      details: [
        "Device Lab Setup",
        "Network Simulation",
        (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">Cloud Environment</Link></>),
        "Monitoring Tools",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaNetworkWired,
      title: (<><Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">Connectivity Testing</Link></>),
      description:
        "Validation of device connectivity across different protocols and network conditions",
      details: [
        (<><Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more">Protocol Testing</Link></>),
        "Network Resilience",
        "Edge Case Scenarios",
        "Connection Recovery",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaShieldAlt,
      title: "Security Validation",
      description:
        "Comprehensive security testing to identify and address IoT-specific vulnerabilities",
      details: [
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing</Link></>),
        "Vulnerability Scanning",
        (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Data Encryption</Link></>),
        "Access Control",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: FaSync,
      title: (<><Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">Data Flow Testing</Link></>),
      description:
        "Validation of data synchronization between devices, edge systems, and cloud platforms",
      details: [
        "Real-time Sync",
        (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Data Integrity</Link></>),
        "Offline Capabilities",
        "Conflict Resolution",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FaBatteryHalf,
      title: (<><Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">Performance Optimization</Link></>),
      description:
        "Testing and optimization of power consumption, latency, and system performance",
      details: [
        (<><Link href="/blog/post/battery-power-testing-for-smart-devices-optimization-guide">Battery Life Testing</Link></>),
        "Latency Optimization",
        "Resource Management",
        (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing</Link></>),
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaCloud,
      title: "Cloud Integration Testing",
      description:
        "End-to-end testing of IoT device integration with cloud platforms and services",
      details: [
        (<><Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">API Integration</Link></>),
        (<><Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">Scalability Testing</Link></>),
        "Service Reliability",
        "Data Pipeline",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: FaRocket,
      title: "Deployment Validation",
      description:
        "Final validation and monitoring setup for successful IoT system deployment",
      details: [
        "Production Testing",
        "Monitoring Setup",
        "Rollback Planning",
        "Support Documentation",
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const testingMethodologies = [
    {
      icon: FaWifi,
      title: (<><Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more">Protocol Testing</Link></>),
      description: "Comprehensive validation of IoT communication protocols",
    },
    {
      icon: FaShieldAlt,
      title: (<><Link href="/security-testing">Security Testing</Link></>),
      description: "Advanced security validation and vulnerability assessment",
    },
    {
      icon: FaChartLine,
      title: (<><Link href="/performance-testing-services">Performance Testing</Link></>),
      description: "Load testing and performance optimization",
    },
    {
      icon: FaSync,
      title: (<Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">Integration Testing</Link>),
      description: "End-to-end system integration and data flow validation",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm">Testing Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our IoT Testing
            <span className="block text-brand-blue">Process & Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, security-first IoT testing approach designed
            specifically for IoT ecosystems, ensuring <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">reliable device
            connectivity</Link>, <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">robust IoT security</Link>, and <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">seamless integration</Link> across
            edge-to-cloud architecture and diverse IoT platforms.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-brand-blue hover:ring-3 hover:border-opacity-30 h-full">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, title) => (
                    <div key={title} className="flex items-center gap-2">
                      <FaCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Methodologies */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
              <FaPlay className="w-4 h-4" />
              <span className="text-sm">Testing Excellence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT-Focused Methodologies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized IoT testing approach ensures that every aspect of
              IoT system testing meets the highest standards of reliability, IoT
              security, and <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">optimized performance</Link> across diverse connected
              devices and edge-to-cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingMethodologies.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Security-First Approach
            </h3>
            <p className="text-gray-600">
              Every test is designed with security as the primary concern,
              protecting against <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">IoT-specific threats</Link> and vulnerabilities.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Scalable Solutions
            </h3>
            <p className="text-gray-600">
              Our testing process scales from prototype validation to massive
              IoT deployments with millions of connected devices.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaSync className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Real-World Testing
            </h3>
            <p className="text-gray-600">
              Testing in actual deployment conditions with real network
              constraints, environmental factors, and usage patterns.
            </p>
          </div>
        </div>

        {/* Process Statistics */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Proven IoT Testing Results
            </h3>
            <p className="text-lg max-w-2xl mx-auto">
              Our systematic IoT testing process delivers measurable results
              that ensure reliable, secure, and scalable IoT deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div>Device Uptime</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div>Security Issue Reduction</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">75%</div>
              <div><Link href="/performance-testing-services">Performance</Link> Improvement</div>
            </div>
            <div className="text-center p-6 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div>Faster Deployment</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your IoT Testing Journey?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Let our IoT testing experts guide you through a comprehensive,
                <Link href="/security-testing">security-focused testing</Link> process that ensures your IoT
                ecosystem&apos;s success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="w-fit mx-auto sm:mx-0">
                  <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-98 transition-all duration-300">
                    Start Your IoT Project
                  </button>
                </Link>
                <Link href="/contact-us" className="bg-gray-100 cursor-pointer text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:text-brand-blue hover:scale-98 hover:ring-brand-blue hover:ring-1 transition-all">
                  Learn More About Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTTestingProcessSection;
