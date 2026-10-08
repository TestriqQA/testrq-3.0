// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaIndustry,
  FaHome,
  FaCar,
  FaHeartbeat,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine,
  FaClock,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

const IoTCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaIndustry,
      title: "Smart Manufacturing Platform",
      challenge:
        "Large-scale manufacturing facility needed IoT solution to monitor 10,000+ machines across 50 production lines with real-time predictive maintenance capabilities.",
      solution:
        "Comprehensive IoT testing including sensor validation, edge computing performance, cloud scalability, and real-time data synchronization across the entire manufacturing ecosystem.",
      results: [
        "99.9% system uptime achieved",
        "40% reduction in unplanned downtime",
        "$2.5M annual savings from predictive maintenance",
        "Real-time monitoring of 10,000+ connected devices",
      ],
      metrics: {
        devices: "10,000+",
        uptime: "99.9%",
        savings: "$2.5M",
        downtime: "-40%",
      },
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaHome,
      title: "Smart City Infrastructure",
      challenge:
        "City-wide IoT deployment for smart streetlights, traffic management, and environmental monitoring across 500 square miles with 100,000+ connected devices.",
      solution:
        "End-to-end IoT ecosystem testing including device interoperability, network resilience, data security, and scalable cloud infrastructure to support massive device deployment.",
      results: [
        "100,000+ devices successfully deployed",
        "30% reduction in energy consumption",
        "50% improvement in traffic flow efficiency",
        "Zero security breaches in 2 years",
      ],
      metrics: {
        devices: "100K+",
        energy: "-30%",
        traffic: "+50%",
        security: "Zero Breaches",
      },
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaCar,
      title: "Connected Vehicle Fleet",
      challenge:
        "Fleet management system for 50,000 vehicles requiring real-time tracking, predictive maintenance, and driver safety monitoring across multiple countries.",
      solution:
        "Comprehensive testing of vehicle telematics, cellular connectivity, edge processing, cloud analytics, and mobile applications with focus on reliability and data security.",
      results: [
        "50,000 vehicles connected globally",
        "25% reduction in fuel consumption",
        "60% decrease in vehicle breakdowns",
        "Real-time fleet visibility achieved",
      ],
      metrics: {
        vehicles: "50,000",
        fuel: "-25%",
        breakdowns: "-60%",
        visibility: "Real-time",
      },
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaHeartbeat,
      title: "Remote Patient Monitoring",
      challenge:
        "IoT-based remote patient monitoring system for 25,000 patients with chronic conditions, requiring HIPAA compliance and 24/7 reliability.",
      solution:
        "Healthcare-specific IoT testing including medical device validation, data privacy compliance, real-time alerting systems, and integration with hospital management systems.",
      results: [
        "25,000 patients monitored remotely",
        "35% reduction in hospital readmissions",
        "99.8% system availability maintained",
        "Full HIPAA compliance achieved",
      ],
      metrics: {
        patients: "25,000",
        readmissions: "-35%",
        availability: "99.8%",
        compliance: "HIPAA Certified",
      },
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const successMetrics = [
    {
      icon: FaShieldAlt,
      value: "99.9%",
      label: "System Reliability",
      description: "Average uptime across all IoT deployments",
    },
    {
      icon: FaChartLine,
      value: "75%",
      label: "Performance Improvement",
      description: "Average efficiency gains from IoT implementations",
    },
    {
      icon: FaClock,
      value: "50%",
      label: "Faster Deployment",
      description: "Reduced time to market through comprehensive testing",
    },
    {
      icon: FaAward,
      value: "1M+",
      label: "Devices Tested",
      description: "IoT devices successfully validated and deployed",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTrophy className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IoT Testing
            <span className="block text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real-world examples of how our comprehensive IoT testing services
            have enabled successful IoT deployments across diverse industries,
            delivering measurable business value through secure connectivity,
            regulatory compliance, and optimized performance of connected IoT
            solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              {/* Header */}
              <div className={`${study.bgColor} p-8 pb-6`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Results
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(
                    ([key, value], metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-3 bg-gray-50 rounded-xl"
                      >
                        <div className="text-lg font-bold text-gray-900">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}
                <Link href="/case-studies" className="inline-block">
                  <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                    View Full Case Study
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IoT Testing Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to IoT testing
              excellence and successful IoT deployments across diverse
              industries, use cases, and connected device ecosystems, ensuring
              performance optimization, regulatory compliance, and business
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IoT Industry Coverage */}
        <div className="bg-gradient-to-r from-gray-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Tested Across All IoT Industries
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Our IoT testing expertise spans every industry, from smart homes
              to industrial automation, ensuring reliable and secure connected
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Smart Homes",
              "Industrial IoT",
              "Healthcare",
              "Automotive",
              "Smart Cities",
              "Agriculture",
              "Retail",
              "Energy",
              "Logistics",
              "Security",
              "Environmental",
              "Wearables",
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white text-brand-blue bg-opacity-10 rounded-2xl hover:bg-opacity-20 transition-all"
              >
                <div className="text-sm font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our IoT Success Stories?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Let us help you achieve similar results with our proven IoT
              testing methodologies and deep expertise across all connected
              device ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                  Start Your IoT Success Story
                </button>
              </Link>
              {/* <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                Download IoT Case Studies
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTCaseStudiesSection;
