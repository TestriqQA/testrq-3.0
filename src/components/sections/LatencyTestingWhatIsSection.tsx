import Link from "next/link";
import React from "react";
import { FaNetworkWired, FaCheckCircle } from "react-icons/fa";

const LatencyTestingWhatIsSection: React.FC = () => {
  const latencyTypes = [
    {
      title: "Network Latency",
      description:
        "Time for data packets to travel between client and server, influenced by geographic distance, routing hops, and network congestion.",
      color: "blue",
      metric: "5–100ms",
    },
    {
      title: "Application Latency",
      description:
        "Processing time within your application logic, including middleware execution, request parsing, and business logic computation.",
      color: "purple",
      metric: "10–500ms",
    },
    {
      title: "Database Latency",
      description:
        "Query execution time including connection pooling, index lookups, join operations, and result serialization back to the application layer.",
      color: "green",
      metric: "1–200ms",
    },
    {
      title: "API Latency",
      description:
        "End-to-end response time for API calls, encompassing authentication, rate limiting, payload serialization, and inter-service communication.",
      color: "orange",
      metric: "20–300ms",
    },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; iconBg: string; border: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-600", border: "border-orange-200" },
    };
    return map[color] || map.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — Explanation */}
          <div>
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaNetworkWired />
              <span className="text-sm">Understanding Latency</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Is <span className="text-brand-blue">Latency Testing</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Latency testing is a specialized form of{" "}
              <Link href="/performance-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">
                performance testing
              </Link>{" "}
              that measures the time delay between a user&apos;s action and the system&apos;s response. Unlike throughput testing, which measures volume, latency testing focuses on the <strong>speed of individual transactions</strong> — from DNS resolution to the final byte delivered to the client.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Modern{" "}
              <Link href="/web-application-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">
                web applications
              </Link>{" "}
              and{" "}
              <Link href="/api-testing" className="text-brand-blue hover:underline decoration-brand-blue">
                APIs
              </Link>{" "}
              must meet strict SLA thresholds — typically sub-100ms P95 latency — to maintain user satisfaction and competitive advantage. Our latency testing services dissect every layer of your stack to pinpoint where milliseconds are lost.
            </p>

            <div className="space-y-3">
              {[
                "Identifies bottlenecks across network, application, and database layers",
                "Measures P50, P95, and P99 percentile response times",
                "Validates SLA compliance under real-world traffic conditions",
                "Maps latency distribution across global regions",
                "Provides actionable optimization roadmaps with priority ranking",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Latency Breakdown Diagram */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Anatomy of a Request — Latency Breakdown
            </h3>
            <div className="space-y-3">
              {[
                { label: "DNS Resolution", time: "5–50ms", width: "12%", color: "from-blue-400 to-blue-500" },
                { label: "TCP Connection", time: "10–80ms", width: "25%", color: "from-indigo-400 to-indigo-500" },
                { label: "TLS Handshake", time: "20–100ms", width: "38%", color: "from-purple-400 to-purple-500" },
                { label: "Request Sent", time: "1–10ms", width: "5%", color: "from-pink-400 to-pink-500" },
                { label: "TTFB (Server Processing)", time: "50–500ms", width: "75%", color: "from-orange-400 to-orange-500" },
                { label: "Content Transfer", time: "10–300ms", width: "55%", color: "from-red-400 to-red-500" },
              ].map((step, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{step.label}</span>
                    <span className="text-gray-500 font-mono text-xs">{step.time}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                      style={{ width: step.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Total End-to-End Latency</span>
                <span className="text-lg font-bold text-brand-blue font-mono">96–1,040ms</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Each layer contributes to total response time. Optimizing the largest contributors (TTFB, TLS, content transfer) yields the greatest user-experience improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Latency Types Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Four Dimensions of <span className="text-brand-blue">Application Latency</span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latencyTypes.map((type, index) => {
            const colors = getColorClasses(type.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-6 rounded-2xl border ${colors.border} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`${colors.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FaNetworkWired className="text-white text-lg" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {type.description}
                </p>
                <div className={`${colors.text} font-bold text-sm`}>
                  Typical Range: {type.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingWhatIsSection;
