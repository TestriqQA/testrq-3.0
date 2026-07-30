import Link from "next/link";
import React from "react";
import { FaClock, FaArrowRight, FaTachometerAlt, FaCheckCircle, FaBolt } from "react-icons/fa";

const PerformanceTestingLatencySection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 border border-brand-blue/40 text-blue-300 rounded-full text-sm font-semibold">
              <FaClock className="text-brand-blue" />
              <span>Specialized Latency Optimization</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Eliminate Network &amp; API Delays with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Precision Latency Testing
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Every 100ms of response time delay impacts conversion rates and user retention. Our specialized latency testing services break down every phase of request execution — from DNS resolution to database query response — ensuring sub-50ms target P95 latency across global user nodes.
            </p>

            {/* Key Feature Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <FaBolt className="text-yellow-400 mt-1 flex-shrink-0 text-lg" />
                <div>
                  <h4 className="font-bold text-white text-sm">P95 / P99 Tail Latency</h4>
                  <p className="text-xs text-gray-400 mt-1">Measure worst-case user response percentiles</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <FaTachometerAlt className="text-green-400 mt-1 flex-shrink-0 text-lg" />
                <div>
                  <h4 className="font-bold text-white text-sm">API &amp; Microservices</h4>
                  <p className="text-xs text-gray-400 mt-1">Trace multi-hop service communication delays</p>
                </div>
              </div>
            </div>

            {/* Redirect CTA Button */}
            <div className="pt-4">
              <Link
                href="/performance-testing-services/latency-testing"
                className="inline-flex items-center gap-3 bg-brand-blue hover:bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
              >
                <span>Explore Dedicated Latency Testing</span>
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-700/80 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <span className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                Live Request Latency Distribution
              </span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800">
                SLA Target: &lt;50ms
              </span>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>DNS &amp; TLS Handshake</span>
                  <span className="text-green-400 font-mono">18ms</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: "22%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>API Gateway &amp; Auth</span>
                  <span className="text-blue-400 font-mono">24ms</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{ width: "30%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>Microservices Execution (TTFB)</span>
                  <span className="text-yellow-400 font-mono">42ms</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" style={{ width: "52%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>Database Query Response</span>
                  <span className="text-orange-400 font-mono">12ms</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" style={{ width: "16%" }} />
                </div>
              </div>
            </div>

            {/* Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-700 text-center">
                <div className="text-xs text-gray-400">P50 Latency</div>
                <div className="text-lg font-bold text-green-400 font-mono mt-0.5">32ms</div>
              </div>
              <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-700 text-center">
                <div className="text-xs text-gray-400">P95 Latency</div>
                <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">48ms</div>
              </div>
              <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-700 text-center">
                <div className="text-xs text-gray-400">P99 Latency</div>
                <div className="text-lg font-bold text-yellow-400 font-mono mt-0.5">85ms</div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-4 flex items-center justify-between text-xs text-blue-200">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-brand-blue text-sm" />
                ISO 29119-compliant latency benchmarking
              </span>
              <Link
                href="/performance-testing-services/latency-testing"
                className="text-cyan-300 hover:text-white font-semibold underline underline-offset-2"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingLatencySection;
