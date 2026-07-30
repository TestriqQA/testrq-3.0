import Link from "next/link";
import React from "react";
import { FaTachometerAlt, FaCheckCircle, FaAward, FaShieldAlt } from "react-icons/fa";

const LatencyTestingWhyChooseSection: React.FC = () => {
  const advantages = [
    {
      icon: <FaTachometerAlt className="text-3xl" />,
      title: "ISO/IEC/IEEE 29119 Alignment",
      description: (
        <>
          Our latency testing processes follow{" "}
          <Link href="/qa-documentation-services" className="text-brand-blue hover:underline decoration-brand-blue">
            Part 2 for test processes
          </Link>{" "}
          and Part 3 for standardized documentation. Every latency metric, threshold, and optimization recommendation is risk-based, traceable, and audit-ready.
        </>
      ),
      stats: "ISO Aligned",
      color: "blue",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "GDPR & Data Privacy Compliance",
      description: (
        <>
          All latency test data is anonymized and PII-scrubbed before analysis. Our{" "}
          <Link href="/privacy-policy" className="text-brand-blue hover:underline decoration-brand-blue">
            privacy-first approach
          </Link>{" "}
          ensures complete data protection during global load generation across USA, UK, EU, and Asia testing regions.
        </>
      ),
      stats: "PII Protected",
      color: "purple",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "SOC2 & ISO 27001 Security",
      description: (
        <>
          Our{" "}
          <Link href="/security-testing" className="text-brand-blue hover:underline decoration-brand-blue">
            security-hardened testing labs
          </Link>{" "}
          follow SOC2 Type II and ISO 27001 protocols to protect your source code, API keys, and infrastructure credentials throughout the latency engineering lifecycle.
        </>
      ),
      stats: "Secure Lab",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward aria-hidden="true" />
            <span className="text-sm">
              Global Standards &amp; Compliance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Testriq for{" "}
            <span className="text-brand-blue">Latency Testing</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            As a specialized{" "}
            <Link href="/about-us" className="text-brand-blue underline hover:no-underline font-semibold">
              independent QA laboratory
            </Link>
            , Testriq brings deep expertise in latency optimization for enterprises operating across regulated markets. Our compliance-first approach ensures audit-ready documentation alongside measurable performance gains.
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200`}
              >
                <div
                  className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <span className="text-white">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <div className="text-gray-700 leading-relaxed mb-4 text-sm font-medium">
                  {advantage.description}
                </div>
                <div className={`${colors.text} font-bold text-lg`}>
                  {advantage.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Latency Testing Success Metrics
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering measurable latency improvements that directly impact user experience, conversion rates, and revenue for enterprises worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Applications Optimized
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                85%
              </div>
              <div className="text-gray-600 font-medium">
                Average Latency Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-medium">
                Latency Tests Executed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">
                SLA Compliance Rate
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Testriq Latency Advantage
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlike generic performance testing vendors, we specialize in granular latency analysis. Our engineers combine protocol-level instrumentation with application-layer profiling to deliver optimization gains that generic load testing misses entirely.
            </p>

            <div className="space-y-4">
              {[
                "P50, P95, P99 Percentile Latency Analysis",
                "Multi-Region Global Latency Benchmarking",
                "Database Query Plan Optimization",
                "CDN Edge Performance Validation",
                "Microservices Distributed Tracing",
                "Real-Time WebSocket Latency Profiling",
                "CI/CD Latency Regression Gate",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Latency Testing Excellence
            </h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Full-Stack Latency Profiling
                  </h5>
                  <p className="text-sm text-gray-600">
                    End-to-end visibility from DNS resolution to final byte delivery across every infrastructure layer
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Actionable Optimization Reports
                  </h5>
                  <p className="text-sm text-gray-600">
                    <Link href="/data-analysis-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">
                      Data-driven insights
                    </Link>{" "}
                    with prioritized recommendations and expected latency improvement per fix
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Continuous Latency Monitoring
                  </h5>
                  <p className="text-sm text-gray-600">
                    Ongoing dashboards with automated alerting to prevent latency regressions in production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingWhyChooseSection;
