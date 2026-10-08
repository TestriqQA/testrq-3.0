// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaHospital,
  FaMobile,
  FaHeartbeat,
  FaUserMd,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine,
  FaClock,
  FaAward,
} from "react-icons/fa";

const HealthcareCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaHospital,
      title: "Regional Hospital EHR System",
      challenge:
        "Legacy EHR system failing HIPAA compliance audits with critical security vulnerabilities and poor interoperability.",
      solution:
        "Comprehensive security testing, HIPAA compliance validation, and HL7 FHIR integration testing across 15 hospital locations.",
      results: [
        "100% HIPAA compliance achievement",
        "Zero security vulnerabilities post-deployment",
        "40% improvement in clinical workflow efficiency",
        "Successful integration with 25+ medical devices",
      ],
      metrics: {
        compliance: "100%",
        security: "Zero Breaches",
        efficiency: "+40%",
        integration: "25+ Devices",
      },
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaMobile,
      title: "Telemedicine Mobile App",
      challenge:
        "Mobile telehealth app needed FDA approval and HIPAA compliance for nationwide deployment across multiple states.",
      solution:
        "End-to-end mobile testing, FDA 21 CFR Part 820 validation, real-time video quality testing, and multi-state compliance verification.",
      results: [
        "FDA approval obtained in 6 months",
        "HIPAA compliance across all 50 states",
        "99.9% video call success rate",
        "5-star app store rating maintained",
      ],
      metrics: {
        approval: "6 Months",
        compliance: "50 States",
        uptime: "99.9%",
        rating: "5 Stars",
      },
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaHeartbeat,
      title: "Cardiac Monitoring IoT System",
      challenge:
        "IoT-based cardiac monitoring system required real-time data validation and FDA Class II medical device certification.",
      solution:
        "IoT device testing, real-time data integrity validation, FDA IEC 62304 compliance testing, and cybersecurity assessment.",
      results: [
        "FDA Class II certification achieved",
        "Real-time monitoring with <1ms latency",
        "100% data accuracy validation",
        "Zero false alarms in 6-month trial",
      ],
      metrics: {
        certification: "Class II FDA",
        latency: "<1ms",
        accuracy: "100%",
        reliability: "Zero False Alarms",
      },
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaUserMd,
      title: "Clinical Decision Support AI",
      challenge:
        "AI-powered diagnostic system needed clinical validation and regulatory approval for radiology departments.",
      solution:
        "AI algorithm testing, clinical accuracy validation, radiologist workflow integration testing, and FDA software validation.",
      results: [
        "95% diagnostic accuracy achieved",
        "FDA breakthrough device designation",
        "30% reduction in diagnosis time",
        "Integration with 100+ PACS systems",
      ],
      metrics: {
        accuracy: "95%",
        designation: "FDA Breakthrough",
        efficiency: "+30%",
        integration: "100+ PACS",
      },
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const successMetrics = [
    {
      icon: FaShieldAlt,
      value: "100%",
      label: "HIPAA Compliance Rate",
      description: "Perfect compliance record across all healthcare projects",
    },
    {
      icon: FaChartLine,
      value: "95%",
      label: "Average Performance Improvement",
      description: "Significant efficiency gains in clinical workflows",
    },
    {
      icon: FaClock,
      value: "50%",
      label: "Faster Time to Market",
      description: "Accelerated regulatory approval processes",
    },
    {
      icon: FaAward,
      value: "200+",
      label: "Healthcare Projects Delivered",
      description: "Extensive experience across healthcare domains",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaHospital className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Healthcare Testing
            <span className="block text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how our specialized healthcare testing
            services have helped organizations achieve regulatory compliance,
            improve patient data security, enhance patient safety, and
            accelerate time to market for their healthcare applications.
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
                  <button className="w-full bg-brand-blue text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
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
              Our Healthcare Testing Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable QA results that demonstrate our commitment to
              healthcare software quality, regulatory compliance, and patient
              safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-8 text-lg">
              Let us help you achieve similar results with our proven healthcare
              testing methodologies and deep industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Start Your Success Story – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg"
              >
                Start Your Success Story
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareCaseStudiesSection;
