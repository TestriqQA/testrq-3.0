"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCode,
  FaChartLine,
  FaNetworkWired,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

const ApiComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "REST API Testing",
      description:
        "Our industry-standard REST testing validates HTTP methods and ensures precise JSON or XML data. We verify that every endpoint meets your business logic and performance goals.",
      features: [
        "HTTP Method Validation",
        "JSON/XML Precision Checks",
        "Business Logic Mapping",
        "Performance Benchmarking",
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      action: "/blog/post/rest-api-testing-guide-endpoints-methods-best-practices"
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Graph-QL & SOAP Testing",
      description:
        "We test complex Graph-QL queries and mutations to prevent over-fetching. For legacy systems, we provide rigorous SOAP/XML testing following all protocol rules.",
      features: [
        "Query & Mutation Security",
        "Legacy SOAP/XML Integrity",
        "Over-fetching Prevention",
        "Protocol Rule Adherence",
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      action: "/blog/post/graphql-api-testing-strategies-for-queries-mutations-performance"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "API Performance & Load",
      description:
        "Using JMeter and k6, we simulate high-traffic events to find latency and throughput issues before they impact your global users.",
      features: [
        "JMeter Traffic Simulation",
        "k6 Scalability Testing",
        "Latency Bottleneck Discovery",
        "Throughput Optimization",
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      action: "/performance-testing-services"
    },
  ];
  // Static map instead of bg-${type.color}-600: Tailwind only compiles classes it
  // sees as literal text, so runtime-built names silently produce NO styling if the
  // literal never appears elsewhere. Also per-hue: white text passes on blue/purple
  // at -600 (5.25 / 5.54) but orange needs -700 (#ca3500, 5.2) — -600 is only 3.6.
  const activeTabBg: Record<string, string> = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    orange: "bg-orange-700",
  };


  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Our Comprehensive API Testing Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            End-to-End <span className="text-[theme(color.brand.blue)]">API QA</span> for Global Markets
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide specialized API testing tailored for <Link href="/locations-we-serve" className="text-brand-blue underline">global markets</Link>, including the US, UK, and EU, ensuring your services are secure and high-performing.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === index
                ? `${activeTabBg[type.color] ?? "bg-blue-600"} text-white shadow-lg`
                : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {type.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testingTypes[activeTab].gradient} rounded-xl text-white mb-6`}
              >
                {testingTypes[activeTab].icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {testingTypes[activeTab].title}
              </h3>

              <p className="text-gray-700 text-lg mb-6">
                {testingTypes[activeTab].description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {testingTypes[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-2 h-2 bg-${testingTypes[activeTab].color}-500 rounded-full mr-3`}
                    ></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="w-40">
                <Link href={testingTypes[activeTab].action}
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${testingTypes[activeTab].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`} aria-label={`Learn more about ${testingTypes[activeTab].title}`}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side - Visual Representation */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 p-8 rounded-2xl border border-${testingTypes[activeTab].color}-200`}
              >
                {/* Dynamic Visual Based on Active Tab */}
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">GET /api/users</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          200 OK
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">POST /api/auth</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          201 Created
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">PUT /api/profile</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          200 OK
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-green-600 text-4xl mb-4">📄</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        WSDL Validation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        XML Schema & Protocol Testing
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-purple-600 font-mono text-sm">
                        query GetUser($id: ID!) {"{"}
                        <br />
                        &nbsp;&nbsp;user(id: $id) {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;name, email
                        <br />
                        &nbsp;&nbsp;{"}"}
                        <br />
                        {"}"}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-red-600 text-4xl mb-4">🔒</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Security Shield
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Authentication & Authorization
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">Load Test</span>
                        <span className="text-orange-600 font-bold">
                          1000 RPS
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 5 && (
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-teal-600 text-4xl mb-4">🔗</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Integration Hub
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Microservices & Third-party APIs
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiComprehensiveSlider;
