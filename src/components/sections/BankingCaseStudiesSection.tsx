// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaUniversity,
  FaCreditCard,
  FaMobile,
  FaChartLine,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const BankingCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaUniversity,
      industry: "Investment Banking",
      challenge:
        "Legacy core banking system modernization with zero downtime requirement",
      solution:
        "Comprehensive testing strategy including parallel testing, data migration validation, and phased rollout",
      results: [
        { metric: "Zero downtime", description: "during system migration" },
        { metric: "99.99%", description: "system availability maintained" },
        { metric: "50%", description: "reduction in processing time" },
        { metric: "100%", description: "regulatory compliance achieved" },
      ],
      testimonial:
        "Testriq's expertise in banking system testing was instrumental in our successful core banking modernization. Their comprehensive approach ensured zero business disruption.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaCreditCard,
      industry: "Payment Processing",
      challenge:
        "PCI DSS compliance for new payment gateway with high-volume transaction processing",
      solution:
        "Security-focused testing including penetration testing, vulnerability assessment, and load testing",
      results: [
        { metric: "PCI DSS Level 1", description: "certification achieved" },
        { metric: "10M+", description: "transactions tested daily" },
        { metric: "Zero", description: "security vulnerabilities" },
        { metric: "99.9%", description: "transaction success rate" },
      ],
      testimonial:
        "The security testing expertise provided by Testriq helped us achieve PCI DSS compliance ahead of schedule while maintaining our high transaction volumes.",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      industry: "Digital Banking",
      challenge:
        "Mobile banking app security and performance optimization for 5M+ users",
      solution:
        "Mobile-first testing approach with device compatibility, security testing, and performance optimization",
      results: [
        { metric: "5M+", description: "users supported seamlessly" },
        { metric: "4.8/5", description: "app store rating achieved" },
        { metric: "60%", description: "faster app load times" },
        { metric: "Zero", description: "security incidents" },
      ],
      testimonial:
        "Our mobile banking app's success is largely due to Testriq's comprehensive mobile testing strategy. The performance improvements exceeded our expectations.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const successMetrics = [
    { value: "20+", label: "Banking Projects Completed" },
    { value: "100%", label: "Compliance Success Rate" },
    { value: "Zero", label: "Security Breaches" },
    { value: "99.9%", label: "Client Satisfaction" },
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
              Banking Success
            </span>
            <span className="block">Stories</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading financial institutions have transformed their
            operations and achieved full regulatory compliance with our
            comprehensive banking and finance testing solutions, including
            compliance testing, security validation, and performance assurance
            for financial applications.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Track Record
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Content */}
                <div className="space-y-15">
                  <div className="flex items-center gap-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl text-gray-600 font-medium">
                        {study.industry}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
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
                    <Link href="/case-studies" className="inline-block">
                      <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                        Read Full Case Study
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us help your financial institution achieve similar results with
            our proven banking testing methodologies and expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Your Success Story
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingCaseStudiesSection;
