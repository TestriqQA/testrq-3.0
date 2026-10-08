// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaNetworkWired,
  FaWifi,
  FaSignal,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCog,
} from "react-icons/fa";

const TelecomSoftwareTestingSection: React.FC = () => {
  const softwareTypes = [
    {
      icon: FaWifi,
      title: "5G Software Platforms",
      description:
        "End-to-end software testing for 5G applications, orchestration tools, and network management systems with a focus on reliability and scalability.",
      testingAreas: [
        "API & Integration Testing",
        "OSS/BSS Validation",
        "Network Orchestration Tools",
        "Edge Computing Applications",
      ],
      benefits: [
        "Improved service availability",
        "Stable software releases",
        "Faster time-to-market",
        "Optimized 5G application performance",
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaSignal,
      title: "LTE/4G Software",
      description:
        "Comprehensive validation of LTE software systems including VoLTE apps, signaling platforms, and network management tools.",
      testingAreas: [
        "VoLTE Application Testing",
        "Core Integration Validation",
        "Performance Benchmarking",
        "Regression & Upgrade Testing",
      ],
      benefits: [
        "Seamless voice/data services",
        "Reduced production defects",
        "Stable feature rollouts",
        "High customer satisfaction",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaGlobe,
      title: "Core Network Software",
      description:
        "Validation of EPC, IMS, and 5G Core software stacks ensuring stability, interoperability, and compliance with telecom standards.",
      testingAreas: [
        "EPC & 5GC Application Testing",
        "IMS Feature Validation",
        "Interoperability Checks",
        "Virtual Network Function Testing",
      ],
      benefits: [
        "Reliable core applications",
        "Standard-compliant systems",
        "Reduced downtime risk",
        "Smooth network operations",
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaCloud,
      title: "Cloud-Native Telecom Apps",
      description:
        "Testing of microservices-based telecom software, containerized applications, and service mesh integrations.",
      testingAreas: [
        "Microservices Validation",
        "Container Orchestration Testing",
        "API Gateway Performance",
        "Service Mesh Security",
      ],
      benefits: [
        "Rapid deployment cycles",
        "Auto-healing capabilities",
        "Improved fault tolerance",
        "Lower operational costs",
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const testingMethodologies = [
    {
      phase: "Planning",
      description:
        "Analyzing telecom software requirements and preparing a detailed test strategy.",
      activities: [
        "Requirement Review",
        (<><Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">Test Case Design</Link></>),
        "Tool Setup",
        "Environment Provisioning",
      ],
    },
    {
      phase: (<><Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">Functional Testing</Link></>),
      description:
        "Validating core features, APIs, and workflows of telecom applications.",
      activities: [
        "Feature Validation",
        (<><Link href="/api-testing">API Testing</Link></>),
        (<><Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">Integration Testing</Link></>),
        "UI/UX Verification",
      ],
    },
    {
      phase: "Performance Testing",
      description:
        "Measuring and optimizing software responsiveness under varying load conditions.",
      activities: [
        (<><Link href="/blog/post/data-loading-testing-etl-performance-testing">Load Simulation</Link></>),
        (<><Link href="/blog/post/stress-testing-applications-identifying-breaking-points">Stress Testing</Link></>),
        "Scalability Checks",
        "Response Time Analysis",
      ],
    },
    {
      phase: (<><Link href="/security-testing">Security Testing</Link></>),
      description:
        "Ensuring telecom software is secure and compliant with industry regulations.",
      activities: [
        "Vulnerability Scanning",
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Penetration Testing</Link></>),
        "Access Control Validation",
        "Data Security Checks",
      ],
    },
    {
      phase: "Optimization",
      description:
        "Enhancing application performance, reliability, and maintainability.",
      activities: [
        "Code Optimization",
        "Configuration Tuning",
        "Monitoring Setup",
        "Reporting & Feedback",
      ],
    },
  ];

  const softwareMetrics = [
    {
      metric: "Defect Detection Rate",
      value: "96%",
      description: "Early identification of software issues",
    },
    {
      metric: "Performance Improvement",
      value: "70%",
      description: "Boost in application efficiency",
    },
    {
      metric: "Release Stability",
      value: "99%",
      description: "Stable production deployments",
    },
    {
      metric: "Time-to-Market Reduction",
      value: "50%",
      description: "Faster delivery of new features",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaNetworkWired className="w-4 h-4" />
            <span className="text-sm">Telecom Software Testing Expertise</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced{" "}
            <span className="text-[theme(color.brand.blue)]">
              Software Testing
            </span>
            <span className="block">for Telecom Applications</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From 5G orchestration software to OSS/BSS and legacy systems, we
            validate telecom software to ensure high performance, reliability,
            and compliance with global telecom standards.
          </p>
        </div>

        {/* Software Testing Metrics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Software Testing Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {softwareMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.metric}
                </div>
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {softwareTypes.map((software, index) => (
            <div
              key={index}
              className={`${software.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${software.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <software.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {software.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {software.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">
                    TESTING AREAS:
                  </h4>
                  <div className="space-y-2">
                    {software.testingAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center gap-2">
                        <FaCog className="w-3 h-3 text-[theme(color.brand.blue)] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">
                    KEY BENEFITS:
                  </h4>
                  <div className="space-y-2">
                    {software.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
{/* 
              <div className="pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Testing Methodology */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Software Testing Methodology
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured process to ensure telecom applications meet
              functional, performance, and security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {testingMethodologies.map((methodology, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">
                  {methodology.phase}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {methodology.description}
                </p>
                <div className="space-y-1">
                  {methodology.activities.map((activity, activityIndex) => (
                    <div
                      key={activityIndex}
                      className="text-xs text-gray-500 bg-white rounded-lg px-2 py-1"
                    >
                      {activity}
                    </div>
                  ))}
                </div>
                {index < testingMethodologies.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-[theme(color.brand.blue)] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Software Testing Benefits */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Software Testing Matters in Telecom
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                In telecom, software stability drives service reliability.
                Validating telecom applications ensures seamless connectivity,
                high service quality, and compliance with evolving telecom
                standards.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Risk Prevention
                    </h4>
                    <p className="text-sm text-gray-600">
                      Catch software bugs before they impact live telecom
                      services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Performance Assurance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensure applications deliver consistent, high-quality
                      service under peak loads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Faster Releases
                    </h4>
                    <p className="text-sm text-gray-600">
                      Accelerate software deployment without sacrificing
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">
                Software Testing Impact
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Production Defects Reduction</span>
                  <span className="font-bold text-2xl">-90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Experience Boost</span>
                  <span className="font-bold text-2xl">+45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Release Cycle Reduction</span>
                  <span className="font-bold text-2xl">-50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Operational Efficiency Gain</span>
                  <span className="font-bold text-2xl">+35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Improve Your Telecom Software Quality?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our telecom software testing experts help you deliver stable,
            secure, and high-performing applications to your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Software Testing
              </button>
            </Link>
            {/* <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30 cursor-pointer">
              Download Testing Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomSoftwareTestingSection;
