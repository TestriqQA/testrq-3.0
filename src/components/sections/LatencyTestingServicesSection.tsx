"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaCloud,
  FaCubes,
  FaBolt,
  FaFlask,
} from "react-icons/fa";

const LatencyTestingServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "api-latency",
      title: "API Latency Testing",
      icon: <FaServer className="text-2xl" />,
      percentage: "97%",
      color: "blue",
      description:
        "Measure and optimize response times across your REST, GraphQL, and gRPC endpoints. Our API latency testing services profile every hop in the request lifecycle — from authentication and rate limiting to payload serialization — ensuring your APIs meet sub-100ms SLA targets under peak traffic.",
      features: [
        "REST, GraphQL & gRPC Endpoint Profiling",
        "Authentication & OAuth Latency Measurement",
        "Rate Limiting Threshold Validation",
        "Payload Serialization Optimization",
        "Gateway & Proxy Overhead Analysis",
        "API Versioning Performance Comparison",
      ],
      link: "/api-testing",
    },
    {
      id: "network-latency",
      title: "Network Latency Analysis",
      icon: <FaNetworkWired className="text-2xl" />,
      percentage: "95%",
      color: "purple",
      description:
        "Diagnose network-layer delays across your global infrastructure. We analyze DNS resolution times, TCP handshake durations, TLS negotiation overhead, and routing inefficiencies to ensure packets travel the fastest path between your users and servers worldwide.",
      features: [
        "DNS Resolution Time Optimization",
        "TCP/TLS Handshake Profiling",
        "Route Hop Analysis & Traceroute Mapping",
        "Packet Loss & Jitter Measurement",
        "CDN Edge Location Performance",
        "Cross-Region Latency Benchmarking",
      ],
      link: "/performance-testing-services",
    },
    {
      id: "database-latency",
      title: "Database Query Latency",
      icon: <FaDatabase className="text-2xl" />,
      percentage: "93%",
      color: "green",
      description:
        "Identify slow database queries, inefficient index strategies, and connection pool bottlenecks that silently degrade your application performance. We profile query execution plans, lock contention, and replication lag across SQL and NoSQL databases.",
      features: [
        "Query Execution Plan Analysis",
        "Index Strategy Optimization",
        "Connection Pool Configuration",
        "Lock Contention Detection",
        "Replication Lag Monitoring",
        "ORM N+1 Query Identification",
      ],
      link: "/etl-testing-services",
    },
    {
      id: "cdn-latency",
      title: "CDN & Edge Latency",
      icon: <FaCloud className="text-2xl" />,
      percentage: "96%",
      color: "orange",
      description:
        "Validate that your Content Delivery Network delivers assets with minimal latency across all target geographies. We test cache hit ratios, edge server selection, origin shield performance, and dynamic content acceleration from 40+ global locations.",
      features: [
        "Global Edge Server Response Testing",
        "Cache Hit Ratio Optimization",
        "Origin Shield Performance Analysis",
        "Dynamic Content Acceleration",
        "Asset Compression Efficiency",
        "Multi-CDN Comparison Testing",
      ],
      link: "/web-application-testing-services",
    },
    {
      id: "microservices-latency",
      title: "Microservices Latency",
      icon: <FaCubes className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description:
        "Map inter-service communication latency across your distributed architecture. We trace requests through service meshes, message queues, and event buses to identify cascading latency propagation and optimize critical path durations in your microservices ecosystem.",
      features: [
        "Distributed Tracing & Span Analysis",
        "Service Mesh Latency Profiling",
        "Message Queue Delay Measurement",
        "Circuit Breaker Response Validation",
        "Cascading Failure Latency Impact",
        "Service Dependency Heat Mapping",
      ],
      link: "/microservices-testing",
    },
    {
      id: "realtime-latency",
      title: "Real-Time App Latency",
      icon: <FaBolt className="text-2xl" />,
      percentage: "98%",
      color: "indigo",
      description:
        "Validate sub-millisecond response requirements for real-time applications including WebSocket connections, live streaming, gaming servers, and financial trading platforms. We measure jitter, frame drop rates, and event propagation delays under sustained concurrent connections.",
      features: [
        "WebSocket & SSE Latency Profiling",
        "Live Streaming Buffer Analysis",
        "Gaming Server Tick Rate Validation",
        "Financial Feed Latency Measurement",
        "Event Propagation Delay Testing",
        "Concurrent Connection Scalability",
      ],
      link: "/performance-testing-services",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Latency Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latency Testing{" "}
            <span className="text-brand-blue">Service Offerings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our end-to-end latency testing services cover every layer of your technology stack, from{" "}
            <Link href="/api-testing" className="text-brand-blue hover:underline">
              API endpoints
            </Link>{" "}
            to{" "}
            <Link href="/microservices-testing" className="text-brand-blue hover:underline">
              microservices architectures
            </Link>
            , ensuring optimal response times under any load.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <button
                  key={service.id}
                  aria-label={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === index
                      ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className={activeTab === index ? colors.text : "text-gray-400"}>
                      {service.icon}
                    </span>
                    <span className="hidden sm:inline text-xs">{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className={`${activeTab === index ? "block" : "hidden"} transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                          <span className={colors.text}>{service.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">Success Rate:</span>
                            <span className={`text-lg font-bold ${colors.text}`}>
                              {service.percentage}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        className="bg-brand-blue text-white inline-block px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Explore {service.title}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatencyTestingServicesSection;
