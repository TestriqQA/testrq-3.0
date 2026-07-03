"use client";

import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const AutomationTestingReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-yellow-300">Accelerate Testing</span>{" "}
            with Intelligent Automation?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your testing strategy with our cutting-edge automation
            solutions. Reduce testing time by 80%, increase coverage, and
            deliver higher quality software faster with our expert automation
            testing services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">
              What You Get with Our Automation Testing Services
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    80% Faster Testing Cycles
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Accelerated testing with intelligent automation frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Comprehensive Test Coverage
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Web, mobile, API, and performance automation testing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    CI/CD Pipeline Integration
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Seamless integration with your development workflow
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Self-Healing Test Scripts
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Intelligent automation with minimal maintenance overhead
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Real-time Reporting & Analytics
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Comprehensive insights and actionable test metrics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-4">
                Free Automation Assessment Includes:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">
                    Automation feasibility analysis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">
                    ROI calculation and projections
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">
                    Tool and framework recommendations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">
                    Custom automation strategy design
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Your Automation Journey
            </h3>

            <div className="space-y-6">
              {/* Primary CTA */}
              <Link href="/contact-us">
                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Get Free Automation Assessment</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <div className="text-center text-gray-500">
                <span>or</span>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 gap-4">
                <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }>
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
                  Trusted for automation testing excellence
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-600">
                      1,200+
                    </div>
                    <div className="text-xs text-gray-500">
                      Projects Automated
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">80%</div>
                    <div className="text-xs text-gray-500">Time Reduction</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">300%</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
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
              Ready to Transform Your Testing with Automation?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust Testriq for comprehensive
              automation testing solutions. Let&apos;s discuss how we can
              accelerate your testing cycles and improve software quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-yellow-400 cursor-pointer text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                  Start Free Assessment
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                  View Success Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingReadyToEnsureQuality;
