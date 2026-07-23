// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaExclamationTriangle,
  FaWifi,
  FaSignal,
  FaMobile,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";

const TelecomChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaWifi,
      title: "5G Software Ecosystem Complexity",
      problem:
        "With 5G adoption, telecom software—from OSS/BSS platforms to customer-facing apps—must handle complex protocols, APIs, and service orchestration.",
      impact:
        (<>Misconfigured or poorly <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">integrated software</Link> can disrupt service delivery, causing revenue loss and customer dissatisfaction.</>),
      solution:
        (<>End-to-end testing of 5G-ready platforms, including <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">API validation</Link>, protocol handling, and service orchestration verification.</>),
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaSignal,
      title: "Massive IoT Software Integration",
      problem:
        (<>Billions of IoT devices rely on telecom platforms for provisioning, <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">data processing</Link>, and management—each with unique requirements.</>),
      impact:
        "Inadequate IoT platform validation can lead to data mismatches, device deactivation, and reduced customer trust.",
      solution:
        (<>Specialized <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">IoT application testing</Link> for device onboarding, data accuracy, and <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">seamless integration</Link> with backend systems.</>),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaMobile,
      title: "Digital Experience Performance",
      problem:
        "Customer portals, mobile apps, and self-service tools must perform flawlessly under high traffic and diverse device conditions.",
      impact:
        "Slow load times or broken workflows can cause significant drops in adoption and increase customer support costs.",
      solution:
        (<>UX-focused <Link href="/performance-testing-services">performance testing</Link> across devices, browsers, and operating systems to ensure smooth, consistent <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">user experiences</Link>.</>),
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaClock,
      title: "Real-Time Processing Demands",
      problem:
        "Telecom billing, order management, and service activation systems must process data in near real-time without errors.",
      impact:
        "Processing delays can lead to incorrect billing, failed activations, and missed SLAs.",
      solution:
        (<>Load and <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">stress testing</Link> for real-time transaction systems to validate <Link href="/blog/post/performance-testing-for-ai-applications">speed, accuracy, and stability </Link>under peak demand.</>),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: "Software Security Vulnerabilities",
      problem:
        "Customer data in telecom applications is a prime target for cyber attacks, especially in billing, CRM, and self-service systems.",
      impact:
        "Breaches can expose millions of records, trigger regulatory fines, and damage brand reputation.",
      solution:
        (<>Comprehensive application security testing, including vulnerability scanning, <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link>, and <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">compliance validation</Link>.</>),
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaCloud,
      title: "Cloud-Native Telecom Platforms",
      problem:
        "Migration to cloud-based OSS/BSS and service delivery platforms introduces new scalability and integration challenges.",
      impact:
        "Unoptimized cloud deployments can cause service instability and increased operational costs.",
      solution:
        "Cloud-native testing strategies covering scalability, failover, API performance, and multi-environment compatibility.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const industryStats = [
    { value: "10x", label: "More APIs in 5G Software", trend: "up" },
    { value: "50B", label: "IoT Devices by 2030", trend: "up" },
    { value: "40%", label: "Users Abandon Slow Apps", trend: "up" },
    {
      value: "2.5x",
      label: "Higher Cyber Attack Risk in Telecom Apps",
      trend: "up",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-700" />
            <span className="text-sm font-medium text-red-700">
              Telecom Software Challenges
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Critical Software Issues
            <span className="block text-[theme(color.brand.blue)]">
              That Impact Your Operations
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In today&apos;s hyper-connected telecom industry, <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">software platforms</Link> are
            at the heart of service delivery. From customer-facing apps to
            mission-critical OSS/BSS systems, our testing solutions ensure
            flawless <Link href="/performance-testing-services">performance</Link>, <Link href="/security-testing">security</Link>, and <Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">reliability</Link> before issues affect
            your customers and revenue.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Telecom Software Reality
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <challenge.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-2">
                    THE PROBLEM:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 text-sm mb-2">
                    BUSINESS IMPACT:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 text-sm mb-2">
                    OUR SOLUTION:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
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

        {/* Cost of Inaction */}
        <div className="bg-gradient-to-tr from-red-700 to-red-300 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12 text-white">
            <FaExclamationTriangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              The Cost of Ignoring These Software Issues
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Every day software problems persist, your telecom operation risks
              service interruptions, customer dissatisfaction, and lost market
              share.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 text-red-600 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Revenue Loss</h4>
              <p className="text-sm">
                Software downtime or errors in billing and provisioning can
                cause substantial revenue leakage and costly remediation.
              </p>
            </div>

            <div className="text-center p-6 text-red-600 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Customer Churn</h4>
              <p className="text-sm">
                Broken workflows and poor digital experiences drive customers to
                competitors offering smoother, more reliable platforms.
              </p>
            </div>

            <div className="text-center p-6 text-red-600 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaNetworkWired className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Operational Slowdown</h4>
              <p className="text-sm">
                Inefficient or unstable systems slow down service delivery,
                inflate costs, and hinder <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">scalability</Link>.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg">
                Prevent These Issues Now
              </button>
            </Link>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Don&apos;t Let Software Challenges Hold You Back
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive telecom software testing services ensure your
            applications, platforms, and <Link href="/blog/post/cross-platform-e-commerce-testing-delivering-seamless-shopping-experiences-everywhere">digital experiences</Link> perform flawlessly,
            enabling you to enhance customer satisfaction, maintain compliance,
            and lead the market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                Get Software Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomChallengesSection;
