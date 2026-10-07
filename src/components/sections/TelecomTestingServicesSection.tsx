// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaWifi,
  FaSignal,
  FaMobile,
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaCog,
  FaChartLine,
  FaCheckCircle,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";

const TelecomTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaWifi,
      title: "5G Software Ecosystem Testing",
      description:
        "Validation of 5G-enabled telecom applications, APIs, and orchestration platforms — ensuring seamless integration, scalability, and performance for next-gen services.",
      features: [
        (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">API Validation</Link></>),
        "Service Orchestration Testing",
        "Scalability Checks",
        "Performance Benchmarking",
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaSignal,
      title: (<><Link href="/iot-appliances-and-apps-testing-services">IoT Application Testing</Link></>),
      description:
        "Comprehensive testing of IoT-enabled telecom platforms, device management software, and data integration layers for reliability and accuracy.",
      features: [
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Platform Compatibility</Link></>),
        "Protocol Handling",
        "Data Validation",
        (<><Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">Performance Monitoring</Link></>),
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaPhone,
      title: "VoIP/VoLTE Application Testing",
      description:
        "Ensuring flawless voice communication software by validating call flows, codec performance, and platform stability for VoIP and VoLTE services.",
      features: [
        "Voice Quality (MOS)",
        "Call Flow Testing",
        "Codec Verification",
        "Session Stability",
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      title: "Telecom Mobile App Testing",
      description:
        "Functional and usability testing for customer-facing and internal telecom mobile applications, ensuring smooth user journeys and compatibility across devices.",
      features: [
        "Functional Validation",
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-Device Testing</Link></>),
        "UI/UX Checks",
        (<><Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">Integration Testing</Link></>),
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaShieldAlt,
      title: "Telecom Software Security Testing",
      description:
        "Security assessment for telecom applications, portals, and platforms including vulnerability scanning, authentication checks, and compliance validation.",
      features: [
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing</Link></>),
        "Vulnerability Assessment",
        "Access Control Validation",
        "Threat Modeling",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaChartLine,
      title: "Telecom Platform Performance Testing",
      description:
        "Load, stress, and scalability testing for telecom business systems, billing platforms, and OSS/BSS solutions to ensure peak performance.",
      features: [
        (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing</Link></>),
        (<><Link href="/blog/post/stress-testing-applications-identifying-breaking-points">Stress Testing</Link></>),
        "Scalability Analysis",
        "Throughput Measurement",
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: FaCloud,
      title: "Cloud-Native Telecom Software Testing",
      description:
        "Validation of cloud-based OSS/BSS, NFV, and SDN software implementations for reliability, deployment automation, and seamless integration.",
      features: [
        (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">Cloud Integration</Link></>),
        "Orchestration Testing",
        "Resilience Validation",
        "Deployment Testing",
      ],
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: FaCog,
      title: "Telecom Test Automation",
      description:
        "Automated testing frameworks for continuous validation of telecom software, regression testing, and CI/CD pipeline integration.",
      features: [
        (<><Link href="/blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence">Test Automation</Link></>),
        "CI/CD Integration",
        (<><Link href="/regression-testing">Regression Testing</Link></>),
        "Continuous Monitoring",
      ],
      color: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50",
    },
  ];

  const serviceStats = [
    { value: "99.9%", label: "Software Uptime Achieved" },
    { value: "85%", label: "Error Reduction Post-Release" },
    { value: "70%", label: "Faster Deployment Cycles" },
    { value: "24/7", label: "Automated Monitoring" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaNetworkWired className="w-4 h-4" />
            <span className="text-sm">Telecom Software Testing Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            End-to-End{" "}
            <span className="text-[theme(color.brand.blue)]">
              Telecom Software
            </span>
            <span className="block">Testing Solutions</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete testing services for telecom applications, platforms, and{"  "}
            digital ecosystems - ensuring <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">functionality</Link>, <Link href="/performance-testing-services">performance</Link>, and
            <Link href="/security-testing">security</Link> across the entire software lifecycle.
          </p>
        </div>

        {/* Service Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Software Quality Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-sm mb-3">
                  KEY FEATURES:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
{/* 
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Telecom Software Testing?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We ensure telecom software runs flawlessly, scales efficiently,
              and delivers seamless customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Global Telecom Software Expertise
              </h4>
              <p className="text-sm text-gray-600">
                20+ years of experience validating telecom software platforms
                worldwide with deep knowledge of industry standards and{" "}
                <Link href="/blog/post/api-test-automation-strategy-faster-releases-reliable-integrations">integrations</Link>.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaWifi className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                5G & Next-Gen Application Ready
              </h4>
              <p className="text-sm text-gray-600">
                Expertise in testing 5G-era telecom applications, IoT management
                systems, and emerging digital platforms.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaCog className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Proven Testing Methodologies
              </h4>
              <p className="text-sm text-gray-600">
                Structured, repeatable testing approaches tailored for telecom
                application <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">ecosystems</Link> and complex integrations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Telecom Software Quality?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you enhance <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">performance</Link>, <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">security</Link>, and {" "}
            <Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">reliability</Link> across your telecom software landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href={BOOKING_URL} target={ "_blank" }>
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Your Software Assessment
              </button>
            </Link>
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                Schedule Expert Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomTestingServicesSection;
