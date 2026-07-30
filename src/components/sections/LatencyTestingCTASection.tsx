"use client";

import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const LatencyTestingCTASection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-yellow-300">Eliminate Latency</span>{" "}
            from Your Application?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Every millisecond of latency costs you users and revenue. Partner with Testriq to implement a comprehensive latency optimization strategy — from baseline measurement to continuous monitoring. We act as an extension of your engineering team, delivering measurable improvements aligned with your SLA targets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">
              Industry-Specific Latency Optimization
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    E-Commerce &amp; Retail Latency
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Sub-100ms checkout flows, product search optimization, and payment gateway latency reduction for peak traffic events like Black Friday.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    FinTech &amp; Trading Platforms
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Microsecond-precision latency testing for order matching engines, market data feeds, and real-time portfolio calculations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    SaaS &amp; API Providers
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Multi-tenant API latency profiling, rate limiting validation, and SLA compliance testing for B2B platform providers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-4">
                Your Latency Assessment Includes:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Full-Stack Latency Baseline Report",
                  "P50/P95/P99 Percentile Analysis",
                  "Bottleneck Heat Map with Priority Ranking",
                  "Optimization Roadmap with Expected Gains",
                  "CI/CD Latency Regression Gate Setup",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content — CTA Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Latency Optimization
            </h3>

            <div className="space-y-6">
              {/* Primary CTA */}
              <Link href="/contact-us">
                <button className="w-full cursor-pointer bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Get Free Latency Assessment</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <div className="text-center text-gray-500">
                <span>or</span>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="https://calendar.app.google/uUHn8prcXbdqcvVb6"
                  target="_blank"
                >
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
                  Trusted for latency optimization excellence
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-brand-blue">500+</div>
                    <div className="text-xs text-gray-500">Apps Optimized</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">85%</div>
                    <div className="text-xs text-gray-500">Latency Reduced</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">99.9%</div>
                    <div className="text-xs text-gray-500">SLA Compliance</div>
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
              Ready to Achieve Sub-50ms Response Times?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust Testriq for comprehensive latency testing and optimization. Let&apos;s discuss how we can transform your application&apos;s responsiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-yellow-400 cursor-pointer text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                  Start Latency Assessment
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

export default LatencyTestingCTASection;
