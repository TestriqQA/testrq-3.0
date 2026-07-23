// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaSignal,
  FaNetworkWired,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const TelecomToolsFrameworksSection: React.FC = () => {
  const toolCategories = [
    {
      icon: FaWifi,
      title: "Functional Testing Tools",
      description:
        "Advanced platforms for validating core telecom software features, workflows, and integrations across systems.",
      tools: [
        {
          name: (<><Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium</Link></>),
          description: "Automated web UI testing for portals and dashboards",
        },
        { name: "Postman", description: (<><Link href="/api-testing">API testing</Link> and validation</>) },
        {
          name: "TestComplete",
          description: "Functional test automation for desktop and web apps",
        },
        {
          name: "Katalon Studio",
          description: "Cross-platform functional testing",
        },
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaSignal,
      title: (<><Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">Performance & Load Testing</Link></>),
      description:
        "Tools to ensure telecom software scales under heavy load and delivers consistent performance.",
      tools: [
        {
          name: (<><Link href="/blog/post/how-to-use-jmeter-for-performance-testing-step-by-step-guide-2">JMeter</Link></>),
          description: "Load testing for APIs, apps, and services",
        },
        {
          name: (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">LoadRunner</Link></>),
          description: "Enterprise-grade performance testing",
        },
        { name: "Gatling", description: "High-performance load testing tool" },
        { name: "BlazeMeter", description: "Cloud-based performance testing" },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: (<><Link href="/security-testing">Security Testing</Link></>),
      description:
        "Solutions for identifying vulnerabilities and securing telecom applications against threats.",
      tools: [
        { name: (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP ZAP</Link></>), description: "Web application security scanning" },
        {
          name: (<><Link href="/blog/post/using-burp-suite-for-security-testing-beginner-to-pro">Burp Suite</Link></>),
          description: "Security testing for APIs and apps",
        },
        {
          name: "SonarQube",
          description: "Code quality and security analysis",
        },
        { name: "Fortify", description: "Static and dynamic security testing" },
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaMobile,
      title: (<><Link href="/mobile-application-testing">Mobile App Testing</Link></>),
      description:
        "Comprehensive validation of mobile apps for customer portals, self-care, and field operations.",
      tools: [
        { name: (<><Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest">Appium</Link></>), description: "Cross-platform mobile app automation" },
        { name: "Espresso", description: "Android UI testing" },
        { name: "XCUITest", description: "iOS automation testing" },
        { name: "BrowserStack", description: "Real device cloud testing" },
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaNetworkWired,
      title: "Integration & API Testing",
      description:
        "Ensuring seamless interoperability between OSS, BSS, billing, and other telecom platforms.",
      tools: [
        { name: "ReadyAPI", description: "Comprehensive API testing suite" },
        { name: "REST Assured", description: "Java-based API automation" },
        { name: "Karate", description: "API testing with BDD" },
        {
          name: (<><Link href="/blog/post/soap-api-testing-methodology-ensuring-legacy-system-reliability">SoapUI</Link></>),
          description: "Functional testing for SOAP and REST APIs",
        },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaCloud,
      title: "Automation & CI/CD",
      description:
        "Streamlined test automation integrated with telecom software development pipelines.",
      tools: [
        { name: "Jenkins", description: "Continuous integration and delivery" },
        { name: "GitLab CI", description: "CI/CD with integrated testing" },
        { name: "Azure DevOps", description: "Testing in DevOps workflows" },
        { name: "CircleCI", description: "Cloud-based CI/CD pipelines" },
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const frameworkBenefits = [
    {
      icon: FaCheckCircle,
      title: "End-to-End Validation",
      description:
        "Covers the entire software lifecycle from development to production",
    },
    {
      icon: FaCheckCircle,
      title: "High Scalability",
      description: "Supports testing for enterprise-scale telecom platforms",
    },
    {
      icon: FaCheckCircle,
      title: "Automation First",
      description: "Accelerates delivery cycles with automated testing",
    },
    {
      icon: FaCheckCircle,
      title: "Actionable Insights",
      description: "Generates detailed reports to drive quality improvements",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools & Frameworks</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced{" "}
            <span className="text-[theme(color.brand.blue)]">
              Software Testing Tools
            </span>
            <span className="block">for Telecom Applications</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We use industry-leading <Link href="/technology-stack">testing tools</Link> and frameworks to validate
            every aspect of telecom software, from mobile apps and portals to
            OSS/BSS platforms, ensuring <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">performance</Link>, reliability, and <Link href="/security-testing">security</Link>
            {" "}at scale.
          </p>
        </div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-xl"
                  >
                    <FaLaptopCode className="w-4 h-4 text-[theme(color.brand.blue)] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/technology-stack" className="text-sky-700 font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore Tools
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Toolset Delivers Results
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our curated software QA toolkit enables us to validate telecom
              platforms with precision, covering <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">scalability</Link>, security,{" "}
              <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">performance</Link>, and integration in complex, <Link href="/blog/post/etl-testing-for-big-data">multi-system
                environments</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h4 className="text-lg font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Framework Showcase */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Custom Telecom QA Framework
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We have built a proprietary QA framework for telecom software,
                integrating <Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">functional</Link>, performance, security, and automation
                testing to ensure every application meets industry standards and
                delivers a flawless user experience.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Automated functional and <Link href="/regression-testing">regression testing</Link>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    <Link href="/api-testing">API</Link> and integration validation across OSS/BSS
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Scalable load and <Link href="/performance-testing-services">performance testing</Link>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed reporting with actionable insights
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Framework Highlights</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm">Automated Test Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">API Scenarios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-sm">Automation Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Monitoring & Reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Telecom QA?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover how our advanced software testing toolkit and custom
            framework can improve the quality, performance, and reliability of
            your telecom applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Request Demo
              </button>
            </Link>
            {/* <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download QA Framework Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomToolsFrameworksSection;
