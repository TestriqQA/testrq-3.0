// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaRocket, FaArrowRight, FaStar } from "react-icons/fa";

const EcommerceCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      industry: "Leading Fashion Retail Brand",
      challenge: "High cart abandonment rate and mobile conversion issues",
      solution: "Comprehensive checkout optimization and mobile testing",
      results: [
        {
          metric: "Cart Abandonment",
          improvement: "-35%",
          color: "text-green-600",
        },
        {
          metric: "Mobile Conversions",
          improvement: "+52%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "Testriq's testing helped us identify critical issues in our checkout flow. The results exceeded our expectations.",
    },
    {
      industry: "Prominent Electronics Brand",
      challenge: "Payment gateway failures and security vulnerabilities",
      solution: "Payment integration testing and security assessment",
      results: [
        {
          metric: "Payment Success Rate",
          improvement: "+99.8%",
          color: "text-green-600",
        },
        {
          metric: "Security Score",
          improvement: "+95%",
          color: "text-green-600",
        },
        {
          metric: "Customer Trust",
          improvement: "+40%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "The security testing revealed vulnerabilities we didn't know existed. Now our customers shop with confidence.",
    },
    {
      industry: "Renowned Home & Garden Brand",
      challenge: "Poor site performance during peak sales periods",
      solution: "Performance optimization and load testing",
      results: [
        {
          metric: "Page Load Time",
          improvement: "-60%",
          color: "text-green-600",
        },
        {
          metric: "Peak Traffic Handling",
          improvement: "+300%",
          color: "text-green-600",
        },
        {
          metric: "Sales During Peak",
          improvement: "+180%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "Our Black Friday sales went smoothly for the first time in years. No crashes, no lost sales.",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaStar className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Success Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Real Results from
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">
              Real E-Commerce Businesses
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our end-to-end e-commerce testing services have helped
            businesses increase revenue, improve user experience, and achieve
            their e-commerce growth goals.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Company Info & Challenge */}
                <div>
                  <div className="mb-8">
                    <p className="text-[theme(color.brand.blue)] font-semibold mb-4">
                      {study.industry}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Challenge:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Solution:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[theme(color.brand.blue)]">
                    <p className="text-gray-700 italic mb-4">
                      &quot;{study.testimonial}&quot;
                    </p>
                  </div>

                  <div className="mt-8 text-center">
                    <Link href="/case-studies" className="inline-block">
                      <button className="bg-gradient-to-l from-[theme(color.brand.blue)] via-sky-600 to-blue-400 text-white px-6 py-3 rounded-xl font-semibold hover:scale-95 transition-all duration-300 ease-in-out flex items-center gap-2 mx-auto cursor-pointer">
                        Read Full Case Study
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Results Achieved
                  </h4>

                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div
                          className={`text-3xl font-bold ${result.color} mb-2`}
                        >
                          {result.improvement}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] via-sky-600 to-blue-500 rounded-3xl p-12 text-white text-center">
          <FaRocket className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join these successful e-commerce businesses and start optimizing
            your platform today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              title="Start Your Success Story – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-95 transition-all duration-300 ease-in-out"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/case-studies"
              title="View More Case Studies – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] bg-white bg-opacity-20 text-brand-blue rounded-2xl font-semibold text-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-95 transition-all duration-300 ease-in-out"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceCaseStudiesSection;
