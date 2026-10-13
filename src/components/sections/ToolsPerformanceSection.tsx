import Link from "next/link";
import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaServer,
  FaChartBar,
  FaCloud,
  FaMobile,
} from "react-icons/fa";

const ToolsPerformanceSection = () => {
  const performanceTools = [
    {
      icon: FaTachometerAlt,
      category: (<><Link href="/blog/post/performance-load-testing-for-e-commerce-sites">Load Testing</Link></>),
      title: "Apache JMeter",
      description:
        "Industry-standard load testing tool for web applications and services",
      features: [
        "GUI and command-line modes",
        "Distributed testing",
        "Protocol support",
        "Real-time monitoring",
      ],
      useCases: [
        "Web application load testing",
        "API performance testing",
        "Database stress testing",
      ],
      metrics: "Up to 10,000 concurrent users",
    },
    {
      icon: FaUsers,
      category: "User Load Simulation",
      title: (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">LoadRunner</Link></>),
      description:
        "Enterprise-grade performance testing platform for complex applications",
      features: [
        "Protocol recording",
        "Cloud integration",
        "Advanced analytics",
        "Enterprise reporting",
      ],
      useCases: [
        "Enterprise application testing",
        "SAP performance testing",
        "Legacy system testing",
      ],
      metrics: "Millions of virtual users",
    },
    {
      icon: FaServer,
      category: (<><Link href="/blog/post/graphql-api-testing-strategies-for-queries-mutations-performance">API Performance</Link></>),
      title: "K6",
      description:
        "Modern load testing tool built for developers and DevOps teams",
      features: [
        "JavaScript scripting",
        "CI/CD integration",
        "Cloud execution",
        "Threshold validation",
      ],
      useCases: [
        "API load testing",
        "Microservices testing",
        "DevOps integration",
      ],
      metrics: "Developer-friendly scripting",
    },
    {
      icon: FaChartBar,
      // Semrush audit (05 Oct 2026) issue 214 "Permanent redirects". This
      // label linked to a deleted post that redirects to
      // /desktop-application-testing-services — a desktop-testing service
      // page reached from the "Performance Monitoring" label on a Gatling
      // card, which is both a 308 hop and the wrong topic. Repointed to the
      // performance service page: it exists, it matches the label and the
      // surrounding section, and it keeps the internal link rather than
      // dropping it. Swap in a replacement article if one is written.
      category: (<><Link href="/performance-testing-services">Performance Monitoring</Link></>),
      title: "Gatling",
      description:
        "High-performance load testing framework with detailed reporting",
      features: [
        "Scala-based DSL",
        "Real-time monitoring",
        "Detailed reports",
        "CI integration",
      ],
      useCases: [
        "High-performance testing",
        "Continuous performance testing",
        "Detailed analysis",
      ],
      metrics: "High throughput testing",
    },
    {
      icon: FaCloud,
      category: (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">Cloud Testing</Link></>),
      title: "BlazeMeter",
      description:
        "Cloud-based performance testing platform with global infrastructure",
      features: [
        "Global test execution",
        "Auto-scaling",
        "Real-time monitoring",
        "Team collaboration",
      ],
      useCases: [
        "Global performance testing",
        "Scalable load testing",
        "Team collaboration",
      ],
      metrics: "Global test execution",
    },
    {
      icon: FaMobile,
      category: (<><Link href="/blog/post/performance-testing-for-mobile-apps-challenges-tools">Mobile Performance</Link></>),
      title: "Mobile Performance Suite",
      description:
        "Specialized tools for mobile application performance testing",
      features: [
        "Device-specific testing",
        "Network simulation",
        "Battery usage analysis",
        "Memory profiling",
      ],
      useCases: [
        "Mobile app performance",
        "Network condition testing",
        "Device compatibility",
      ],
      metrics: "Real device testing",
    },
  ];

  const performanceMetrics = [
    {
      metric: (<><Link href="/blog/post/performance-testing-for-robotics-load-handling-precision-uptime">Response Time</Link></>),
      description: "Time taken to process and respond to requests",
      target: "< 2 seconds",
      tools: ["JMeter", "LoadRunner", "K6"],
    },
    {
      metric: "Throughput",
      description: "Number of requests processed per unit time",
      target: "> 1000 RPS",
      tools: ["Gatling", (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">JMeter</Link></>), "K6"],
    },
    {
      metric: "Concurrent Users",
      description: "Maximum number of simultaneous active users",
      target: "10,000+ users",
      tools: [(<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">LoadRunner</Link></>), "BlazeMeter", "JMeter"],
    },
    {
      metric: "Resource Utilization",
      description: "CPU, memory, and network resource consumption",
      target: "< 80% usage",
      tools: ["New Relic", "AppDynamics", "Dynatrace"],
    },
    {
      metric: "Error Rate",
      description: "Percentage of failed requests under load",
      target: "< 1% errors",
      tools: [(<><Link href="/blog/post/performance-testing-for-mobile-apps-challenges-tools">All testing tools</Link></>), "Monitoring platforms"],
    },
    {
      metric: "Scalability",
      description: "System's ability to handle increased load",
      target: "Linear scaling",
      tools: ["Cloud platforms", "Container orchestration"],
    },
  ];

  const testingScenarios = [
    {
      type: (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing</Link></>),
      description: "Normal expected load conditions",
      purpose: "Validate system performance under typical usage",
      duration: "30-60 minutes",
      users: "Expected peak users",
    },
    {
      type: (<><Link href="/blog/post/stress-testing-applications-identifying-breaking-points">Stress Testing</Link></>),
      description: "Beyond normal capacity limits",
      purpose: "Find breaking point and failure modes",
      duration: "Until failure",
      users: "Gradually increasing",
    },
    {
      type: (<><Link href="/blog/post/spike-testing-handling-sudden-traffic-surges">Spike Testing</Link></>),
      description: "Sudden load increases",
      purpose: "Test system resilience to traffic spikes",
      duration: "Short bursts",
      users: "Rapid increase/decrease",
    },
    {
      type: (<><Link href="/blog/post/volume-testing-managing-high-data-loads-efficiently">Volume Testing</Link></>),
      description: "Large amounts of data processing",
      purpose: "Validate data handling capabilities",
      duration: "Extended periods",
      users: "Data-intensive operations",
    },
    {
      type: (<><Link href="/blog/post/endurance-testing-validating-long-term-application-stability">Endurance Testing</Link></>),
      description: "Extended period under normal load",
      purpose: "Identify memory leaks and degradation",
      duration: "8-24 hours",
      users: "Sustained load",
    },
  ];

  return (
    <section className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
            <FaTachometerAlt />
            <span className="text-sm">Performance Testing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced{" "}
            <span className="text-[theme(color.brand.blue)]">
              Performance Testing
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Comprehensive performance testing solutions to ensure your
            applications can handle real-world user traffic, scale efficiently,
            and deliver optimal user experiences leveraging tools like <Link href="/blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide">JMeter</Link>,
            <Link href="/blog/post/mobile-testing-environment-setup"> BlazeMeter</Link>, Loader.io, and Neustar for <Link href="/blog/post/load-testing-in-performance-testing-complete-guide">load testing</Link>, <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">stress testing</Link>,
            and scalability validation, with commercial tool licenses provided
            by the client.
          </p>
        </div>

        {/* Performance Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {performanceTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-brand-blue rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {tool.category}
                    </span>
                    <h3 className="font-bold text-gray-900">{tool.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-800 mb-2">
                    Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-1"
                      >
                        <div className="w-1 h-1 bg-[theme(color.brand.blue)] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-800 mb-2">
                    Use Cases:
                  </h4>
                  <div className="space-y-1">
                    {tool.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className="inline-block bg-blue-50 text-[theme(color.brand.blue)] text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 text-green-700 text-xs px-3 py-2 rounded-lg font-medium">
                  {tool.metrics}
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Performance Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 ring-1 ring-brand-blue hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 mb-2">
                  {metric.metric}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {metric.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">Target:</span>
                  <span className="text-sm font-semibold text-[theme(color.brand.blue)]">
                    {metric.target}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-500 mb-2 block">
                    Tools:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {metric.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Scenarios */}
        <div className="bg-[theme(color.background.gray)] rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Performance Testing Scenarios
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingScenarios.slice(0, 3).map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  {scenario.type}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {scenario.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Purpose:</span>
                    <span className="text-gray-700 text-right flex-1 ml-2">
                      {scenario.purpose}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-[theme(color.brand.blue)] font-medium">
                      {scenario.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Users:</span>
                    <span className="text-[theme(color.brand.blue)] font-medium">
                      {scenario.users}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {testingScenarios.slice(3).map((scenario, index) => (
              <div key={index + 3} className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  {scenario.type}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {scenario.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Purpose:</span>
                    <span className="text-gray-700 text-right flex-1 ml-2">
                      {scenario.purpose}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-[theme(color.brand.blue)] font-medium">
                      {scenario.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Users:</span>
                    <span className="text-[theme(color.brand.blue)] font-medium">
                      {scenario.users}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Testing Benefits */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Performance Testing Impact
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our comprehensive performance testing ensures your applications
              deliver exceptional user experiences under any load condition.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100 text-sm">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2x</div>
              <p className="text-blue-100 text-sm">Faster Response</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50%</div>
              <p className="text-blue-100 text-sm">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-blue-100 text-sm">Scalability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPerformanceSection;
