"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaCode,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";

const SecurityTestingToolsFramework: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("static-testing");

  const toolCategories = [
    {
      id: "static-testing",
      title: "Static Testing (SAST)",
      icon: <FaCode className="text-2xl" />,
      color: "blue",
      description: "Analyzing source code to find SQL Injection (SQLi) and Cross-Site Scripting (XSS) before deployment.",
      tools: [
        {
          name: "SonarQube & Snyk",
          description: "Full scan results for code-level vulnerabilities and secure coding principles.",
          features: ["SAST Analysis", "OWASP Top 10", "PII Exposure check", "Vulnerability Fix guidance"],
        },
        {
          name: "Checkmarx",
          description: "Enterprise source code analysis for modern web and mobile applications.",
          features: ["In-line remediation", "CI/CD integration", "Incremental scans", "Policy enforcement"],
        }
      ],
    },
    {
      id: "dynamic-testing",
      title: "Dynamic Testing (DAST)",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "red",
      description: "Simulating real-world attacks on running applications to find system weaknesses in live environment.",
      tools: [
        {
          name: "Burp Suite Professional",
          description: "The industry standard for manual and automated dynamic security testing.",
          features: ["Automated Scanning", "Manual Proxy Tools", "Repeater & Intruder", "Vulnerability validation"],
        },
        {
          name: "Acunetix",
          description: "Advanced web application security scanner for identifying live server gaps.",
          features: ["Fast DAST scans", "IAST capabilities", "Network security audit", "Exploit verification"],
        },
      ],
    },
    {
      id: "mobile-security",
      title: "Mobile Security",
      icon: <FaMobileAlt className="text-2xl" />,
      color: "purple",
      description: <>Comparing automated tools like Quokka with manual ethical hacking depth for <Link href="/mobile-application-testing" className="text-brand-blue hover:underline decoration-brand-blue">iOS security testing</Link>.</>,
      tools: [
        {
          name: "Quokka & MobSF",
          description: "Automated mobile security platforms for standard integration scans.",
          features: ["APK/IPA Analysis", "Local storage review", "Malware detection", "Automated hardening"],
        },
        {
          name: "Manual Ethical Hacking",
          description: <>Human-led <Link href="/manual-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">deep analysis</Link> of mobile logic flows and bypass techniques.</>,
          features: ["Runtime manipulation", "Session hijacking", "Biometric bypass", "iOS Security Depth"],
        },
      ],
    },
    {
      id: "enterprise-power",
      title: "Enterprise Power",
      icon: <FaTools className="text-2xl" />,
      color: "orange",
      description: "Leveraging machine learning defense and AI security features for large-scale firms.",
      tools: [
        {
          name: "Fortify AI",
          description: "AI security features for large-scale firms protecting legacy and modern code.",
          features: ["Machine Learning defense", "Critical risk prioritization", "Enterprise scalability", "Evolving threat guard"],
        },
        {
          name: "WhiteHat Security",
          description: "Continuous dynamic application security testing as a service.",
          features: ["Sentry monitoring", "Expert manual verified", "Asset discovery", "Always-on DAST"],
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        bg: string;
        text: string;
        border: string;
        accent: string;
      };
    } = {
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        accent: "bg-red-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-600",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        accent: "bg-indigo-600",
      },
    };
    return colorMap[color] || colorMap.red;
  };

  const activeCategoryData = toolCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Specialized Tech Stack <span className="text-brand-blue">& Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our team employs a multi-layered tool stack to provide total security coverage. We integrate industry-leading platforms involving a layered defense strategy involving platforms like <span className="font-bold text-brand-blue">Fortify</span>, <span className="font-bold text-brand-blue">Quokka</span>, and dedicated ethical hacking deep analysis.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {toolCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${activeCategory === category.id
                  ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  } cursor-pointer`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={
                      activeCategory === category.id
                        ? colors.text
                        : "text-gray-400"
                    }
                  >
                    {category.icon}
                  </span>
                  <span className="text-sm font-medium">{category.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeCategoryData && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`${getColorClasses(activeCategoryData.color).accent
                    } w-16 h-16 px-2 rounded-2xl flex items-center justify-center`}
                >
                  <span className="text-white">{activeCategoryData.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeCategoryData.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {activeCategoryData.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeCategoryData.tools.map((tool, index) => {
                  const colors = getColorClasses(activeCategoryData.color);
                  return (
                    <div
                      key={index}
                      className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${colors.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {tool.description}
                          </p>

                          <div className="space-y-2">
                            {tool.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-2"
                              >
                                <div
                                  className={`w-1.5 h-1.5 ${colors.accent} rounded-full`}
                                ></div>
                                <span className="text-gray-700 text-sm">
                                  {feature}
                                </span>
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
          )}
        </div>

        {/* Security Testing Methodology */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Security Testing Methodology
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow industry-standard security testing methodologies and
              frameworks to ensure comprehensive coverage and consistent results
              across all security assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                OWASP Testing Guide
              </h4>
              <p className="text-sm text-gray-600">
                Comprehensive <Link href="/blog/post/whats-the-best-tool-for-security-testing-of-web-applications">web application security testing</Link> methodology
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                NIST Framework
              </h4>
              <p className="text-sm text-gray-600">
                Cybersecurity framework for risk management and protection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                PTES Standard
              </h4>
              <p className="text-sm text-gray-600">
                Penetration Testing Execution Standard for systematic testing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                SANS Guidelines
              </h4>
              <p className="text-sm text-gray-600">
                Industry best practices for security testing and assessment
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Leverage Advanced Security Testing Tools?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive <Link href="/blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities">security testing toolkit</Link> ensures thorough
              vulnerability assessment and protection against the latest cyber
              threats.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingToolsFramework;
