"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaDesktop,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";

const DesktopCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Enterprise CRM Desktop Application",
      client: "Fortune 500 Financial Services",
      industry: "Financial Services",
      challenge:
        "Complex desktop CRM application with multiple integrations needed comprehensive testing across Windows, macOS, and Linux platforms before enterprise rollout.",
      solution:
        "Implemented a comprehensive desktop application testing strategy covering functional, performance, security, and cross-platform compatibility testing across 15+ configurations.",
      results: [
        {
          metric: "Bug Detection",
          value: "99.2%",
          description: "Critical bugs identified before release",
        },
        {
          metric: "Performance",
          value: "40%",
          description: "Improvement in application response time",
        },
        {
          metric: "Time Saved",
          value: "6 weeks",
          description: "Faster deployment timeline",
        },
        {
          metric: "Cost Reduction",
          value: "45%",
          description: "Savings compared to in-house testing",
        },
      ],
      technologies: [
        "Windows 10/11",
        "macOS",
        "Ubuntu",
        ".NET Framework",
        "SQL Server",
      ],
      testimonial:
        "Testriq's comprehensive testing approach helped us identify critical issues that would have cost us millions in production. Their expertise in desktop testing is unmatched.",
      author: "CTO, Fortune 500 Financial Services",
    },
    {
      title: "Healthcare Management System",
      client: "Leading Healthcare Provider",
      industry: "Healthcare",
      challenge:
        "Mission-critical healthcare desktop application required HIPAA compliance testing and seamless integration with existing hospital systems.",
      solution:
        "Executed specialized healthcare testing including HIPAA compliance validation, data security testing, and integration testing with legacy systems.",
      results: [
        {
          metric: "Compliance",
          value: "100%",
          description: "HIPAA compliance achieved",
        },
        {
          metric: "Security",
          value: "Zero",
          description: "Security vulnerabilities found",
        },
        {
          metric: "Integration",
          value: "98%",
          description: "Successful system integrations",
        },
        {
          metric: "Uptime",
          value: "99.9%",
          description: "Application availability post-deployment",
        },
      ],
      technologies: [
        "Windows Server",
        "Oracle Database",
        "HL7 Integration",
        "DICOM",
        "Active Directory",
      ],
      testimonial:
        "The attention to detail in security and compliance testing was exceptional. Testriq ensured our application met all regulatory requirements while maintaining optimal performance.",
      author: "IT Director, Healthcare Provider",
    },
    {
      title: "Manufacturing Control Software",
      client: "Industrial Automation Company",
      industry: "Manufacturing",
      challenge:
        "Real-time manufacturing control desktop application needed rigorous performance testing and hardware compatibility validation across industrial environments.",
      solution:
        "Performed specialized industrial testing including real-time performance validation, hardware compatibility testing, and environmental stress testing.",
      results: [
        {
          metric: "Performance",
          value: "99.8%",
          description: "Real-time processing accuracy",
        },
        {
          metric: "Hardware",
          value: "25+",
          description: "Compatible hardware configurations",
        },
        {
          metric: "Reliability",
          value: "99.95%",
          description: "System uptime in production",
        },
        {
          metric: "Efficiency",
          value: "35%",
          description: "Improvement in manufacturing efficiency",
        },
      ],
      technologies: [
        "Windows IoT",
        "Industrial PCs",
        "Modbus",
        "OPC UA",
        "Real-time Systems",
      ],
      testimonial:
        "Testriq's understanding of industrial requirements and their thorough testing approach ensured our control software performs flawlessly in demanding manufacturing environments.",
      author: "Engineering Manager, Industrial Automation",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Desktop Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Case Studies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive desktop testing services have helped
            companies across various industries deliver high-quality
            applications and achieve their business goals.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCase === index
                  ? "bg-[theme(color.brand.blue)] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } cursor-pointer`}
            >
              {study.industry}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaDesktop className="w-6 h-6 text-[theme(color.brand.blue)]" />
                <span className="text-[theme(color.brand.blue)] font-semibold text-sm">
                  {caseStudies[activeCase].industry}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {caseStudies[activeCase].title}
              </h3>

              <p className="text-gray-600 mb-6">
                <strong>Client:</strong> {caseStudies[activeCase].client}
              </p>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudies[activeCase].solution}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeCase].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-[theme(color.brand.blue)] text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Results Achieved
              </h4>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {caseStudies[activeCase].results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-gray-600">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-[theme(color.brand.blue)]" />
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      &quot;{caseStudies[activeCase].testimonial}&quot;
                    </p>
                    <div className="text-sm text-gray-600">
                      <strong>{caseStudies[activeCase].author}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link href="/case-studies" className="inline-block">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg cursor-pointer transition-colors">
                    <span>View Full Case Study</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          {[
            {
              icon: <FaDesktop className="w-6 h-6" />,
              number: "500+",
              label: "Desktop Apps Tested",
            },
            {
              icon: <FaChartLine className="w-6 h-6" />,
              number: "99.8%",
              label: "Success Rate",
            },
            {
              icon: <FaClock className="w-6 h-6" />,
              number: "48hr",
              label: "Average Turnaround",
            },
            {
              icon: <FaCheckCircle className="w-6 h-6" />,
              number: "200+",
              label: "Happy Clients",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 text-[theme(color.brand.blue)] mx-auto">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed
              their desktop applications with our comprehensive testing
              services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us" className="px-8 py-3 cursor-pointer bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue transition-colors hover:scale-105">
                  Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopCaseStudies;
