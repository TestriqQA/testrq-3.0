// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaDatabase,
  FaMobile,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const BankingToolsFrameworksSection: React.FC = () => {
  const toolCategories = [
    {
      icon: FaCode,
      title: "Automation Engines",
      description: "Driving efficiency through high-performance automation frameworks.",
      tools: [
        { name: "Selenium", description: "Open-source web automation" },
        { name: "Appium", description: "Mobile application testing" },
        { name: "Playwright", description: "Next-gen web testing" },
        { name: "RPA Tools", description: "UiPath / BluePrism for banking bots" },
      ],
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaRocket,
      title: "Performance & Load",
      description: "Managing heavy transaction volumes for global financial leaders.",
      tools: [
        { name: "Apache JMeter", description: "Load and stress testing" },
        { name: "Locust", description: "Scalable user simulation" },
        { name: "Gatling", description: "High-concurrency performance" },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Protecting blockchain assets and core financial data.",
      tools: [
        { name: "Burp Suite", description: "VAPT depth assessments" },
        { name: "OWASP ZAP", description: "Dynamic security scanning" },
        { name: "Smart Contract Auditing", description: "Blockchain security tools" },
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaDatabase,
      title: "Data Management",
      description: "Ensuring environment integrity without risking customer info.",
      tools: [
        { name: "Synthetic Data Gen", description: "Mimicking real-world loads" },
        { name: "Data Masking", description: "PII protection for GDPR/CCPA" },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaMobile,
      title: "Infrastructure",
      description: "Cross-device validation for digital-first banking.",
      tools: [
        { name: "BrowserStack", description: "Real device cloud apps" },
        { name: "Sauce Labs", description: "Continuous mobile testing" },
      ],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const frameworkBenefits = [
    {
      icon: FaCheckCircle,
      title: "Regulatory Compliance",
      description:
        "Frameworks designed to meet banking regulations and audit requirements",
    },
    {
      icon: FaCheckCircle,
      title: "Scalable Architecture",
      description:
        "Tools that scale with your banking infrastructure and transaction volumes",
    },
    {
      icon: FaCheckCircle,
      title: "Security Integration",
      description:
        "Built-in security testing capabilities for financial applications",
    },
    {
      icon: FaCheckCircle,
      title: "Real-time Monitoring",
      description:
        "Continuous monitoring and alerting for banking system performance",
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
            Cutting-Edge{" "}
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>
            <span className="block">for Banking QA</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading testing tools and frameworks
            specifically chosen for banking and financial services testing,
            ensuring comprehensive test coverage, <Link href="/mobile-application-testing">application security</Link>, and
            strict <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">regulatory compliance</Link> with standards like PCI DSS, SOX, and
            GDPR.
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
                <Link href="/technology-stack" className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
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
              Why Our Tool Selection Matters
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our carefully curated banking QA <Link href="/technology-stack">toolkit</Link> ensures comprehensive
              testing coverage while meeting the stringent, security,{" "}
              <Link href="/performance-testing-services">performance</Link>, and regulatory compliance requirements of the banking
              and financial services industry.
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
                Our Custom Banking Test Framework
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;ve developed a proprietary banking QA framework
                specifically designed for the banking and financial services
                industry, incorporating industry best practices, regulatory
                compliance standards like PCI DSS, SOX, and GDPR, and supporting
                secure, high-performance financial application testing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Built-in compliance validation for major banking regulations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Automated security testing integrated into CI/CD <Link href="/blog/post/etl-security-testing">pipelines</Link>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Real-time monitoring and alerting for critical banking
                    functions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comprehensive reporting for audit and compliance purposes
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Framework Features</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">Pre-built Test Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Banking Scenarios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm">Automation Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Continuous Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Leverage Our Advanced Testing Toolkit?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts demonstrate how our comprehensive <Link href="/technology-stack">toolkit</Link> can
            enhance your banking testing capabilities and ensure regulatory
            compliance.
          </p>

          <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
            <Link href="/contact-us" className="w-fit">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Request Toolkit Demo
              </button>
            </Link>
            {/* <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Framework Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingToolsFrameworksSection;
