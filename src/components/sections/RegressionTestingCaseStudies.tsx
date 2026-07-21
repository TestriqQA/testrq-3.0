"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaChartLine, FaClock, FaTrophy } from "react-icons/fa";

const RegressionTestingCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Application Quality Enhancement",
      client: "Fortune 500 Technology Company",
      industry: "Technology",
      challenge: (
        <>Complex <Link href='blog/post/regression-impact-analysis-optimizing-test-coverage'>enterprise application</Link> required comprehensive Regression testing to ensure optimal performance and reliability.</>
      ),
      solution: "Our expert team implemented advanced Regression testing strategies with cutting-edge tools and methodologies.",
      results: [
        { metric: "Quality Improvement", improvement: "85% Enhancement", icon: <FaChartLine /> },
        { metric: "Issues Resolved", improvement: "156 Critical Fixes", icon: <FaCheckCircle /> },
        { metric: "Project Timeline", improvement: "4 Weeks Completion", icon: <FaClock /> }
      ],
      testimonial: "Testriq's Regression testing expertise delivered exceptional results, significantly improving our application quality and user satisfaction.",
      clientRole: "Head of Quality Engineering",
      color: "blue"
    },
    {
      id: 2,
      title: "Financial Services Platform Optimization",
      client: "Leading Financial Institution",
      industry: "Financial Services",
      challenge: (
        <>Mission-critical <Link href='banking-finance-industry-testing-services'>financial platform</Link> needed rigorous Regression testing to ensure security and compliance.</>
      ),
      solution: "Comprehensive Regression testing approach with industry-specific compliance validation and security protocols.",
      results: [
        { metric: "Compliance Achievement", improvement: "100% Success Rate", icon: <FaCheckCircle /> },
        { metric: "Performance Gain", improvement: "75% Improvement", icon: <FaChartLine /> },
        { metric: "User Satisfaction", improvement: "4.9/5 Rating", icon: <FaClock /> }
      ],
      testimonial: "The Regression testing services provided by Testriq exceeded our expectations and ensured our platform met all regulatory requirements.",
      clientRole: "Chief Technology Officer",
      color: "green"
    },
    {
      id: 3,
      title: "Healthcare System Quality Assurance",
      client: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: (
        <><Link href='healthcare-testing-services'>Healthcare management</Link> system required extensive Regression testing to ensure patient data security and system reliability.</>
      ),
      solution: "Specialized Regression testing with healthcare compliance focus and comprehensive validation protocols.",
      results: [
        { metric: "Security Validation", improvement: "Zero Vulnerabilities", icon: <FaCheckCircle /> },
        { metric: "System Reliability", improvement: "99.9% Uptime", icon: <FaChartLine /> },
        { metric: "Compliance Score", improvement: "100% HIPAA Compliant", icon: <FaClock /> }
      ],
      testimonial: "Testriq's Regression testing approach was instrumental in achieving our healthcare compliance goals while maintaining excellent system performance.",
      clientRole: "Director of Product Engineering",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; accent: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", accent: "bg-blue-600" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", accent: "bg-green-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", accent: "bg-purple-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Regression Testing <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our comprehensive Regression testing services have helped organizations achieve <Link href='blog/post/the-future-of-software-testing-embracing-the-trends-of-2024-and-beyond'> exceptional software quality</Link> and significant business outcomes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            return (
              <button
                key={study.id}
                aria-label={study.title}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCase === index
                    ? `${colors.bg} ${colors.text} ${colors.border} border-2`
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
                }`}
              >
                {study.industry}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            return (
              <div
                key={study.id}
                className={`${activeCase === index ? "block" : "hidden"} p-8 md:p-12`}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`${colors.accent} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{study.id}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                        <p className={`${colors.text} font-medium`}>{study.client} • {study.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Results Achieved</h4>
                    
                    <div className="space-y-4 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className={`${colors.bg} p-4 rounded-xl`}>
                          <div className="flex items-center space-x-4">
                            <div className={`${colors.text}`}>
                              {result.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{result.metric}</div>
                              <div className={`${colors.text} font-bold text-lg`}>{result.improvement}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-blue">
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        &quot;{study.testimonial}&quot;
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {study.client.split(' ').map(word => word[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{study.clientRole}</div>
                          <div className="text-sm text-gray-600">{study.client}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join these successful organizations and experience the difference comprehensive Regression testing can make.
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

export default RegressionTestingCaseStudies;
