"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaClock,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";

const LatencyTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <Link
            href="/performance-testing-services"
            className="hover:text-brand-blue transition-colors"
          >
            Performance Testing
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Latency Testing
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaClock className="mr-2" />
              Latency Testing Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Enterprise{" "}
              <Link href="/performance-testing-services" className="hover:underline decoration-brand-blue">
                Latency Testing Services
              </Link>
              :{" "}
              <span className="text-transparent bg-clip-text bg-brand-blue">
                Measure, Analyze &amp; Optimize Response Times
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Every millisecond counts. A 100ms increase in latency can reduce conversion rates by 7% and cost enterprises millions annually. Testriq&apos;s latency testing services identify, measure, and eliminate response-time bottlenecks across your entire application stack — from network layer to database queries.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              As an{" "}
              <Link href="/about-us" className="text-brand-blue hover:underline decoration-brand-blue">
                independent QA laboratory
              </Link>
              , we deliver end-to-end latency analysis for enterprises in the USA, UK, EU, and Asia. Our methodology ensures compliance with{" "}
              <span className="font-semibold text-brand-blue">
                <Link href="/qa-documentation-services" className="hover:underline decoration-brand-blue">
                  ISO 29119 standards
                </Link>
              </span>{" "}
              and provides actionable P95/P99 latency optimization roadmaps.
            </p>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[48px] min-w-[48px]"
              >
                Get Latency Assessment
                <FaArrowRight className="ml-2" />
              </Link>

              <button
                onClick={() => setIsLightboxOpen(!isLightboxOpen)}
                className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  &lt;50ms
                </div>
                <div className="text-sm text-gray-600">Target P95 Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">Apps Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  85%
                </div>
                <div className="text-sm text-gray-600">Latency Reduced</div>
              </div>
            </div>
          </div>

          {/* Right Content — Animated Latency Dashboard */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 font-mono">latency-monitor.testriq.com</span>
              </div>

              {/* Latency Bars */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>DNS Lookup</span>
                    <span className="text-green-400">12ms</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" style={{ width: "15%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>TCP Handshake</span>
                    <span className="text-green-400">23ms</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse" style={{ width: "28%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>TLS Negotiation</span>
                    <span className="text-yellow-400">45ms</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse" style={{ width: "55%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>TTFB (Server)</span>
                    <span className="text-orange-400">89ms</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Content Transfer</span>
                    <span className="text-red-400">134ms</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-pulse" style={{ width: "92%" }} />
                  </div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-800/80 rounded-lg p-3 text-center border border-gray-700">
                  <div className="text-lg font-bold text-green-400 font-mono">P50</div>
                  <div className="text-xl font-bold text-white font-mono">42ms</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-3 text-center border border-gray-700">
                  <div className="text-lg font-bold text-yellow-400 font-mono">P95</div>
                  <div className="text-xl font-bold text-white font-mono">89ms</div>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-3 text-center border border-gray-700">
                  <div className="text-lg font-bold text-red-400 font-mono">P99</div>
                  <div className="text-xl font-bold text-white font-mono">134ms</div>
                </div>
              </div>

              {/* Status line */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live monitoring active
                </span>
                <span className="font-mono">Region: US-East-1</span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Latency Optimized</div>
                  <div className="text-xs text-gray-500">Response time reduced by 67%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingHeroSection;
