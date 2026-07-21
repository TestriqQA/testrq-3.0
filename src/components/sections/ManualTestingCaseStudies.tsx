"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaClock,
  FaTrophy,
} from "react-icons/fa";

const ManualTestingCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Quality Enhancement",
      client: "Global Retail Corporation",
      industry: "E-Commerce",
      challenge:
        (
          <>
            A major <Link href="/e-commerce-testing-services" className="text-brand-blue underline">e-commerce platform</Link> was experiencing high user abandonment rates due to critical
            usability issues and functional defects that automated testing couldn&apos;t detect.
          </>
        ),
      solution:
        "Our manual testing team conducted comprehensive exploratory testing, user journey validation, and cross-browser compatibility testing to identify and resolve critical issues.",
      results: [
        {
          metric: "User Abandonment Rate",
          improvement: "65% Reduction",
          icon: <FaChartLine />,
        },
        {
          metric: "Critical Defects Found",
          improvement: "127 Issues Resolved",
          icon: <FaCheckCircle />,
        },
        {
          metric: "Testing Timeline",
          improvement: "3 Weeks Completion",
          icon: <FaClock />,
        },
      ],
      testimonial:
        "Testriq's manual testing expertise helped us identify critical usability issues that were impacting our conversion rates. Their thorough approach and attention to detail resulted in a 40% increase in our conversion rate.",
      clientRole: "Head of Quality Assurance",
      color: "blue",
    },
    {
      id: 2,
      title: "Healthcare Application Compliance Testing",
      client: "Medical Software Company",
      industry: "Healthcare",
      challenge:
        (
          <>
            A <Link href="/healthcare-testing-services" className="text-brand-blue underline">healthcare management system</Link> needed rigorous manual testing to ensure HIPAA compliance
            and patient data security while maintaining optimal user experience.
          </>
        ),
      solution:
        "Our certified manual testers performed comprehensive security testing, compliance validation, and user acceptance testing with healthcare professionals.",
      results: [
        {
          metric: "Compliance Issues",
          improvement: "100% Resolution",
          icon: <FaCheckCircle />,
        },
        {
          metric: "Security Vulnerabilities",
          improvement: "23 Critical Fixes",
          icon: <FaChartLine />,
        },
        {
          metric: "User Satisfaction",
          improvement: "95% Approval Rate",
          icon: <FaClock />,
        },
      ],
      testimonial:
        "The manual testing team's expertise in healthcare compliance was invaluable. They ensured our application met all regulatory requirements while maintaining excellent usability for medical professionals.",
      clientRole: "Chief Technology Officer",
      color: "green",
    },
    {
      id: 3,
      title: "Banking Mobile App User Experience Optimization",
      client: "Regional Banking Institution",
      industry: "Financial Services",
      challenge:
        (
          <>
            A mobile <Link href="/banking-finance-industry-testing-services" className="text-brand-blue underline">banking application</Link> had complex user workflows that required extensive manual
            testing to ensure seamless customer experience and transaction security.
          </>
        ),
      solution:
        "Our manual testing specialists conducted end-to-end user journey testing, accessibility validation, and security testing across multiple mobile devices and platforms.",
      results: [
        {
          metric: "User Experience Issues",
          improvement: "89 Issues Fixed",
          icon: <FaCheckCircle />,
        },
        {
          metric: "Transaction Success Rate",
          improvement: "99.8% Reliability",
          icon: <FaChartLine />,
        },
        {
          metric: "Customer Satisfaction",
          improvement: "4.8/5 Rating",
          icon: <FaClock />,
        },
      ],
      testimonial:
        "Testriq's manual testing approach was crucial for our mobile banking app. Their attention to user experience details and security validation gave us confidence in our product quality.",
      clientRole: "Digital Banking Director",
      color: "purple",
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
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Manual Testing{" "}
            <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our comprehensive manual testing services have helped
            organizations across industries achieve <Link href="/blog/post/the-future-of-qa-trends-shaping-software-testing-in-2025" className="text-brand-blue underline">exceptional software
              quality</Link>, enhanced <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility" className="text-brand-blue underline">user experiences</Link>, and measurable business
            outcomes.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            return (
              <button
                key={study.id}
                aria-label={study.title}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCase === index
                  ? `${colors.bg} ${colors.text} ${colors.border} border-2`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                  }`}
              >
                {study.industry}
              </button>
            );
          })}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            return (
              <div
                key={study.id}
                className={`${activeCase === index ? "block" : "hidden"
                  } p-8 md:p-12`}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`${colors.accent} w-12 h-12 rounded-xl flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-lg">
                          {study.id}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {study.title}
                        </h3>
                        <p className={`${colors.text} font-medium`}>
                          {study.client} • {study.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">
                      Results Achieved
                    </h4>

                    <div className="space-y-4 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className={`${colors.bg} p-4 rounded-xl`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`${colors.text}`}>
                              {result.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {result.metric}
                              </div>
                              <div
                                className={`${colors.text} font-bold text-lg`}
                              >
                                {result.improvement}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-blue">
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        &quot;{study.testimonial}&quot;
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {study.client
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .substring(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {study.clientRole}
                          </div>
                          <div className="text-sm text-gray-600">
                            {study.client}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join these successful organizations and experience the difference
              comprehensive manual testing can make for your software quality
              and business outcomes.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto group">
                <span>Start Your Success Story</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingCaseStudies;
