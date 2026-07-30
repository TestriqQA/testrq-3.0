import Link from "next/link";
import React from "react";
import {
  FaSearch,
  FaChartBar,
  FaBug,
  FaMicroscope,
  FaRocket,
  FaSatelliteDish,
  FaProjectDiagram,
} from "react-icons/fa";

const LatencyTestingMethodologySection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Latency Baseline Establishment",
      description:
        "We begin by profiling your application's current response times across all critical user journeys and API endpoints. This establishes P50, P95, and P99 baseline metrics against which all optimizations are measured.",
      icon: <FaChartBar className="text-xl" />,
      color: "blue",
      deliverable: "Baseline Latency Report",
    },
    {
      number: "02",
      title: "Traffic Pattern Analysis",
      description:
        "We analyze real production traffic patterns — peak hours, geographic distribution, device types, and request frequency — to design latency test scenarios that accurately mirror your production environment.",
      icon: <FaSearch className="text-xl" />,
      color: "purple",
      deliverable: "Traffic Model Document",
    },
    {
      number: "03",
      title: "Multi-Layer Bottleneck Identification",
      description:
        "Using distributed tracing and APM instrumentation, we identify latency hotspots across network, application, and database layers. Each bottleneck is categorized by severity and business impact.",
      icon: <FaBug className="text-xl" />,
      color: "orange",
      deliverable: "Bottleneck Heat Map",
    },
    {
      number: "04",
      title: "Root Cause Analysis",
      description:
        "For each identified bottleneck, we perform deep-dive root cause analysis — profiling CPU flamegraphs, database query plans, garbage collection pauses, and connection pool saturation to determine the precise source of delay.",
      icon: <FaMicroscope className="text-xl" />,
      color: "red",
      deliverable: "RCA Technical Report",
    },
    {
      number: "05",
      title: "Optimization & Validation",
      description:
        "We implement targeted optimizations — from query index tuning and connection pooling to CDN configuration and payload compression — then validate each change with A/B latency comparison testing.",
      icon: <FaRocket className="text-xl" />,
      color: "green",
      deliverable: "Optimization Runbook",
    },
    {
      number: "06",
      title: "Continuous Latency Monitoring",
      description:
        "We establish ongoing latency monitoring dashboards with automated alerting thresholds, ensuring any regression is detected and addressed before users are impacted. Integration with your CI/CD pipeline prevents latency-introducing deployments.",
      icon: <FaSatelliteDish className="text-xl" />,
      color: "teal",
      deliverable: "Monitoring Dashboard",
    },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { bg: string; text: string; iconBg: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-600" },
      red: { bg: "bg-red-50", text: "text-red-600", iconBg: "bg-red-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-600" },
    };
    return map[color] || map.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaProjectDiagram aria-hidden="true" />
            <span className="text-sm">Proven Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Latency Testing{" "}
            <span className="text-brand-blue">Methodology</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A systematic, ISO 29119-aligned six-phase approach that moves from latency measurement through root cause analysis to ongoing optimization — ensuring every millisecond of improvement is measurable and sustainable.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>

                <div className={`${colors.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                  <span className="text-white">{step.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm font-medium">
                  {step.description}
                </p>

                <div className={`${colors.bg} ${colors.text} px-3 py-2 rounded-lg text-sm font-semibold inline-block`}>
                  📄 {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology Note */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ISO 29119-Aligned Latency Engineering
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every phase of our latency testing methodology follows{" "}
                <Link href="/qa-documentation-services" className="text-brand-blue underline hover:no-underline font-semibold">
                  ISO/IEC/IEEE 29119 standards
                </Link>{" "}
                for test documentation and processes. This ensures traceable, repeatable results that satisfy enterprise audit requirements across regulated industries globally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-brand-blue">6</div>
                <div className="text-xs text-gray-600">Testing Phases</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-600">Documented</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600">ISO</div>
                <div className="text-xs text-gray-600">29119 Aligned</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingMethodologySection;
