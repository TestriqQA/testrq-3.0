"use client";

import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const RegressionTestingReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-yellow-300">stabilize</span> your release cycle?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ensure your software remains stable as you scale. Partner with Testriq to implement an API and regression testing strategy aligned with global standards. We provide a scalable model that grows with your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">
              The Benefits of Partnering with Testriq
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Reduced Time-to-Market
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Automated suites cut execution time from days to minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Cost-Efficiency
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Vital for startups, focusing on high-risk areas first.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Boost Confidence
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Eliminating &apos;flaky&apos; tests with data-driven strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Scalability
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Frameworks grow with your cases (up to 100,000+ scenarios).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-4">
                Specialized Regression Solutions:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-semibold">E-commerce:</span>
                  <span className="text-sm">Checkout, Payment & Inventory sync protection.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-semibold">Mobile Apps:</span>
                  <span className="text-sm">iOS/Android backward compatibility matrix.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-semibold">End-to-End Suites:</span>
                  <span className="text-sm">Frontend UI, API, and Backend database journey.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Your Regression Testing
            </h3>

            <div className="space-y-6">
              {/* Primary CTA */}
              <Link href="/contact-us">
                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Get Free Regression Assessment</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <div className="text-center text-gray-500">
                <span>or</span>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 gap-4">
                <Link href={BOOKING_URL} target={"_blank"}>
                  <button className="flex w-full items-center cursor-pointer justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                    <FaCalendarAlt className="text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-700">
                      Schedule a Call
                    </span>
                  </button>
                </Link>

                <button
                  onClick={() => (window.location.href = "tel:+919152929343")}
                  className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 group"
                >
                  <FaPhone className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">
                    Call Now: (+91) 915-2929-343
                  </span>
                </button>

                <button
                  onClick={() =>
                    (window.location.href = "mailto:contact@testriq.com")
                  }
                  className="flex w-full items-center justify-center cursor-pointer space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                >
                  <FaEnvelope className="text-purple-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">
                    Email: contact@testriq.com
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600 mb-4">
                  Trusted by 40+ companies for regression testing excellence
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">800+</div>
                    <div className="text-xs text-gray-500">Apps Tested</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">99.8%</div>
                    <div className="text-xs text-gray-500">Stability Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-teal-600">95%</div>
                    <div className="text-xs text-gray-500">
                      Defect Detection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to stabilize your release cycle?
            </h3>
            <p className="text-blue-100 mb-6 max-w-4xl mx-auto">
              Ensure your software remains stable as you scale. Partner with Testriq to implement an API and regression testing strategy aligned with global standards. We provide a scalable model that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-yellow-400 cursor-pointer text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                  Start Free Assessment
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="border-2 border-white cursor-pointer text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegressionTestingReadyToEnsureQuality;
