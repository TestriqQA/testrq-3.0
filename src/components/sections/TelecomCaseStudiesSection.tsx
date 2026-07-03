// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaSignal,
  FaMobile,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaGlobe,
} from "react-icons/fa";

const TelecomCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaWifi,
      title: "Global Telecom Software Provider",
      industry: "5G Service Management Platform",
      challenge:
        "Launching a nationwide 5G service management platform with strict latency targets for critical applications",
      solution:
        "End-to-end software testing including API validation, orchestration logic verification, and real-time monitoring dashboards",
      results: [
        { metric: "Sub-1s", description: "transaction processing time" },
        { metric: "99.99%", description: "platform uptime" },
        { metric: "40%", description: "faster service activation" },
        { metric: "0", description: "critical software bugs post-launch" },
      ],
      testimonial:
        "Testriq’s deep telecom software testing expertise ensured our 5G service management platform launched flawlessly, exceeding all KPIs ahead of schedule.",
      author: "CTO, Global Telecom Solutions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaSignal,
      title: "IoT Device Management Platform",
      industry: "IoT Service Enablement",
      challenge:
        "Validating a software platform managing over 10 million IoT devices across multiple protocols and APIs",
      solution:
        "Custom test automation for API performance, device onboarding workflows, and multi-protocol interoperability",
      results: [
        { metric: "10M+", description: "devices successfully validated" },
        { metric: "99.7%", description: "API success rate" },
        { metric: "35%", description: "reduced support tickets" },
        { metric: "24/7", description: "automated monitoring" },
      ],
      testimonial:
        "With Testriq’s automated testing framework, we achieved unmatched reliability and drastically reduced post-deployment issues for our IoT platform.",
      author: "VP Engineering, IoT SaaS Provider",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      title: "Mobile Operator Self-Service App",
      industry: "Customer Experience",
      challenge:
        "Frequent crashes and slow response times in a mobile self-service app affecting millions of subscribers",
      solution:
        "Comprehensive functional, performance, and UX testing with focus on payment workflows, plan upgrades, and real-time usage tracking",
      results: [
        { metric: "90%", description: "crash rate reduction" },
        { metric: "4.9/5", description: "app store rating" },
        { metric: "65%", description: "faster page loads" },
        { metric: "30%", description: "increase in active users" },
      ],
      testimonial:
        "The improvements in our app’s performance and stability after Testriq’s testing were remarkable — customer engagement has never been higher.",
      author: "Product Head, Regional Mobile Operator",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const successMetrics = [
    { value: "300+", label: "Telecom Software Platforms Tested" },
    { value: "99.99%", label: "Average Platform Uptime Achieved" },
    { value: "1B+", label: "Transactions Validated" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaChartLine className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven{" "}
            <span className="text-[theme(color.brand.blue)]">
              Telecom Software
            </span>
            <span className="block">Testing Success</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how leading telecom companies have improved reliability,
            accelerated launches, and enhanced user experience through our
            specialized software testing for telecom applications, platforms,
            and customer-facing systems.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Software Testing Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`${study.bgColor} rounded-3xl p-12 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {study.industry}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-700 text-sm mb-2">
                        CHALLENGE:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm mb-2">
                        SOLUTION:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white bg-opacity-60 rounded-2xl p-6 border-l-4 border-[theme(color.brand.blue)]">
                    <FaQuoteLeft className="w-6 h-6 text-[theme(color.brand.blue)] mb-4" />
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      — {study.author}
                    </p>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 text-lg mb-6">
                      RESULTS ACHIEVED:
                    </h4>
                    <div className="grid grid-cols-1 gap-6">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="bg-white bg-opacity-80 rounded-2xl p-6 text-center shadow-lg"
                        >
                          <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                      Read Full Case Study
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our telecom software testing expertise is recognized by global
              telecom bodies for excellence in application performance,
              interoperability validation, and compliance with standards like
              3GPP, ETSI, and TM Forum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaWifi className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                Telecom Software Innovation Award
              </h4>
              <p className="text-sm text-gray-600">
                Honored for outstanding software testing solutions for 5G
                service platforms by the Global Mobile Suppliers Association
                (GSA).
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                Strong Customer Satisfaction
              </h4>
              <p className="text-sm text-gray-600">
                Consistently strong satisfaction ratings across our telecom
                software QA engagements.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">
                Global Testing Partner
              </h4>
              <p className="text-sm text-gray-600">
                Selected as a preferred QA partner by international telecom
                organizations for digital service testing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Telecom Software?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to ensure your telecom applications deliver
            unmatched performance, reliability, and user satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Your Success Story
              </button>
            </Link>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomCaseStudiesSection;
