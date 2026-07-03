"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCertificate,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaBrain,
  FaAward,
} from "react-icons/fa";

const AIWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Global Standards",
      shortTitle: "Global ISO",
      description:
        "We use ISO/IEC/IEEE 29119. This is the gold standard for managing AI risks and validating models globally.",
      stats: "ISO/IEC/IEEE 29119",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Risk Management",
        "Model Validation",
        "Global Compliance",
        "Standardized Testing",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "USA Standards",
      shortTitle: "USA NIST",
      description:
        "Our process implements the NIST AI RMF to guarantee high standards for AI risk management and safety.",
      stats: "NIST AI RMF",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Risk Management Framework",
        "Safety Guarantee",
        "Transparency",
        "Accountability",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Europe Standards",
      shortTitle: "EU AI Act",
      description:
        "We secure regulatory alignment with the EU AI Act (2026). We execute mandatory validation for high-risk systems.",
      stats: "EU AI Act Compliant",
      color: "red",
      gradient: "from-red-500 to-red-600",
      features: [
        "Regulatory Alignment",
        "High-Risk Validation",
        "Conformity Assessment",
        "Monitoring Protocols",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Asia Standards",
      shortTitle: "Asia Compliance",
      description:
        "We align your security with guidelines from Japan and Singapore, ensuring Gen-AI tools follow international ISO rules.",
      stats: "Japan/Singapore ISO",
      color: "green",
      gradient: "from-green-500 to-green-600",
      features: [
        "Regional Guidelines",
        "Gen-AI Security",
        "International Rules",
        "Cross-Border Compliance",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Assurance",
      shortTitle: "Security",
      description: (
        <>
          Testriq follows strict <Link href="/security-testing" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">security rules</Link>. We align with SOC2 Type II, ISO 27001, and GDPR to protect <Link href="/data-analysis-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">sensitive data</Link>.
        </>
      ),
      stats: "SOC2 / ISO 27001",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      features: [
        "SOC2 Type II",
        "ISO 27001 Certified",
        "GDPR Compliant",
        "Data Protection",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Global Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meeting Global{" "}
            <span className="text-[theme(color.brand.blue)]">AI Standards</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Global market entry requires more than just <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">functional code</Link>; it requires adherence to regional legal frameworks. Our services are benchmarked against key global frameworks.
          </p>
        </div>

        {/* Interactive Neural Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 transform hover:scale-105 ${hoveredCard === index ? "z-10" : ""
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* AI Neural Node Card */}
              <div
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${hoveredCard === index ? "shadow-2xl" : "hover:shadow-xl"
                  }`}
              >
                {/* Neural Node Header */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs font-medium">
                          AI Metric
                        </div>
                        <div className="text-white font-bold text-sm">
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Neural Network Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="relative w-full h-full">
                      {/* Neural nodes */}
                      <div className="w-3 h-3 bg-white rounded-full absolute top-4 right-8"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-8 right-12"></div>
                      <div className="w-4 h-4 bg-white rounded-full absolute top-12 right-6"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-16 right-10"></div>
                      {/* Neural connections */}
                      <div className="w-px h-8 bg-white absolute top-6 right-9 transform rotate-45"></div>
                      <div className="w-px h-6 bg-white absolute top-10 right-11 transform -rotate-45"></div>
                      <div className="w-px h-4 bg-white absolute top-14 right-8 transform rotate-12"></div>
                    </div>
                  </div>
                </div>

                {/* AI Capabilities */}
                <div className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center">
                      <FaBrain
                        className={`w-3 h-3 text-${benefit.color}-500 mr-2`}
                      />
                      AI Capabilities:
                    </h4>
                    {benefit.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center pl-5"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-${benefit.color}-400 rounded-full mr-3 animate-pulse`}
                        ></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Interactive Hover State */}
                {/* AI Interactive Hover State */}
                <div
                  className={`absolute inset-0 z-10 bg-gradient-to-r ${benefit.gradient
                    } 
     transition-opacity duration-500 ease-in-out flex items-center justify-center
     ${hoveredCard === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <div className="text-center text-white p-6 transform transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm relative">
                      {React.cloneElement(benefit.icon, {
                        className: "w-8 h-8",
                      })}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {benefit.shortTitle}
                    </h3>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-white/80 text-xs">
                        AI Achievement
                      </div>
                      <div className="text-white font-bold">
                        {benefit.stats}
                      </div>
                    </div>
                    <Link
                      href="/contact-us"
                      className="flex justify-center items-center gap-2 mx-auto bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                    >
                      <span>Explore AI Testing</span>
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* AI Status Indicator */}
                <div
                  className={`absolute top-4 left-4 flex items-center space-x-1`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-500 ${hoveredCard === index
                      ? "bg-white animate-pulse"
                      : `bg-${benefit.color}-500`
                      }`}
                  ></div>
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${hoveredCard === index
                      ? "bg-white/80 animate-pulse"
                      : `bg-${benefit.color}-400`
                      }`}
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className={`w-1 h-1 rounded-full transition-colors duration-500 ${hoveredCard === index
                      ? "bg-white/60 animate-pulse"
                      : `bg-${benefit.color}-300`
                      }`}
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Intelligence Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <FaBrain className="w-6 h-6 text-purple-600 mr-2" />
              AI Testing Intelligence Network
            </h3>
            <p className="text-gray-600">
              <Link href="blog/post/ai-testing-learning-guide">
                Machine learning
              </Link>{" "}
              models and AI systems we&apos;ve successfully validated
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="relative">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700 text-sm">AI Models</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-700 text-sm">Bias Detection</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-700 text-sm">Avg Accuracy</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                48hr
              </div>
              <div className="text-gray-700 text-sm">Response Time</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA with AI Theme */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <FaBrain className="w-6 h-6 mr-2" />
                Ready to Unleash AI Excellence?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Join the companies who trust our AI testing expertise. Get
                started with a comprehensive AI model assessment and ensure your
                intelligent systems are accurate, fair, and reliable.
              </p>
              <Link
                href="/contact-us"
                title="Get Started with AI Testing – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Get Started with AI Testing
              </Link>
            </div>

            {/* AI Neural Network Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {/* Neural nodes */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-4 right-12 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-12 left-16 w-4 h-4 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "2.5s" }}
              ></div>

              {/* Neural connections */}
              <div className="absolute top-10 left-10 w-16 h-px bg-white transform rotate-45 animate-pulse"></div>
              <div
                className="absolute bottom-14 right-14 w-12 h-px bg-white transform -rotate-45 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/3 w-20 h-px bg-white transform rotate-12 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWhyChooseTestriq;
