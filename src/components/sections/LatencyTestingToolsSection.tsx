"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaChartLine,
  FaNetworkWired,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const LatencyTestingToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("load-tools");

  const toolCategories = [
    {
      id: "load-tools",
      title: "Protocol & Load Tools",
      icon: <FaTachometerAlt className="text-2xl" />,
      color: "blue",
      description:
        "Enterprise-grade tools for generating realistic latency test scenarios across HTTP, WebSocket, gRPC, and custom protocols.",
      tools: [
        {
          name: "Apache JMeter",
          description: "Open-source protocol-level latency profiling",
          logo: "⚡",
        },
        {
          name: "k6 (Grafana)",
          description: "Modern developer-first load & latency testing",
          logo: "📊",
        },
        {
          name: "Gatling",
          description: "High-performance Scala/Java latency analysis",
          logo: "🎯",
        },
        {
          name: "Locust",
          description: "Python-based distributed latency simulation",
          logo: "🦗",
        },
      ],
    },
    {
      id: "apm-monitoring",
      title: "APM & Monitoring",
      icon: <FaChartLine className="text-2xl" />,
      color: "purple",
      description: (
        <>
          Application Performance Monitoring tools for real-time latency visibility,{" "}
          <Link href="/data-analysis-services" className="text-brand-blue hover:underline decoration-brand-blue">
            deep performance analytics
          </Link>
          , and distributed trace correlation.
        </>
      ),
      tools: [
        {
          name: "New Relic",
          description: "Full-stack observability with latency SLI/SLO",
          logo: "📈",
        },
        {
          name: "Dynatrace",
          description: "AI-powered latency anomaly detection",
          logo: "🤖",
        },
        {
          name: "Datadog",
          description: "Cloud-scale APM with P99 dashboards",
          logo: "🐕",
        },
        {
          name: "Grafana + Tempo",
          description: "Open-source tracing & latency visualization",
          logo: "📊",
        },
      ],
    },
    {
      id: "network-analysis",
      title: "Network Analysis",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "orange",
      description:
        "Specialized network-layer tools for diagnosing DNS, routing, packet-level latency, and cross-region connectivity issues.",
      tools: [
        {
          name: "Wireshark",
          description: "Packet-level latency inspection & analysis",
          logo: "🦈",
        },
        {
          name: "PingPlotter",
          description: "Visual network route & jitter analysis",
          logo: "📡",
        },
        {
          name: "MTR (My Traceroute)",
          description: "Combined ping + traceroute diagnostics",
          logo: "🗺️",
        },
        {
          name: "iperf3",
          description: "Bandwidth & network latency benchmarking",
          logo: "⏱️",
        },
      ],
    },
    {
      id: "cloud-cdn",
      title: "Cloud & CDN Analytics",
      icon: <FaCloud className="text-2xl" />,
      color: "green",
      description: (
        <>
          Cloud-native monitoring and{" "}
          <Link href="/technology-stack" className="text-brand-blue hover:underline decoration-brand-blue">
            CDN performance analytics
          </Link>{" "}
          for measuring edge-to-origin latency, cache hit ratios, and global content delivery speed.
        </>
      ),
      tools: [
        {
          name: "AWS CloudWatch",
          description: "AWS infrastructure latency metrics",
          logo: "☁️",
        },
        {
          name: "Cloudflare Analytics",
          description: "Edge performance & TTFB monitoring",
          logo: "🌐",
        },
        {
          name: "Google Cloud Monitoring",
          description: "GCP latency SLO tracking & alerting",
          logo: "📊",
        },
        {
          name: "Akamai mPulse",
          description: "Real-user latency measurement (RUM)",
          logo: "🔍",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    };
    return colorMap[color] || colorMap.blue;
  };

  const activeToolCategory = toolCategories.find((c) => c.id === activeCategory) || toolCategories[0];
  const activeColors = getColorClasses(activeToolCategory.color);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools aria-hidden="true" />
            <span className="text-sm">Tools &amp; Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latency Testing{" "}
            <span className="text-brand-blue">Tools &amp; Technology</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We leverage industry-leading{" "}
            <Link href="/technology-stack" className="text-brand-blue underline hover:no-underline font-semibold">
              latency measurement tools
            </Link>{" "}
            and monitoring platforms — from protocol-level profilers to cloud-native APM solutions — to deliver precise, actionable latency insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            {toolCategories.map((category) => {
              const colors = getColorClasses(category.color);
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left cursor-pointer px-4 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 min-h-[48px] ${
                    isActive
                      ? `${colors.bg} ${colors.text} shadow-md border ${colors.border}`
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-transparent"
                  }`}
                >
                  <span className={isActive ? colors.text : "text-gray-500"} aria-hidden="true">
                    {category.icon}
                  </span>
                  <span className="font-semibold text-sm">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="lg:col-span-3">
            <div className={`${activeColors.bg} rounded-2xl p-6 mb-6 border ${activeColors.border}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {activeToolCategory.title}
              </h3>
              <div className="text-gray-700 font-medium">{activeToolCategory.description}</div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeToolCategory.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl" aria-hidden="true">{tool.logo}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-700 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingToolsSection;
