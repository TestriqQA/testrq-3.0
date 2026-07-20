"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaMobile,
  FaDesktop,
} from "react-icons/fa";

const ExploratoryCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: (<><Link href='e-commerce-testing-services' className="text-[theme(color.brand.blue)] underline">E-commerce</Link> Platform UX Discovery</>),
      industry: (<>Retail & <Link href='e-commerce-testing-services' className="text-[theme(color.brand.blue)] underline">E-commerce</Link></>),
      icon: <FaDesktop className="text-2xl" />,
      challenge:
        (<>An <Link href='e-commerce-testing-services' className="text-[theme(color.brand.blue)] underline">e-commerce</Link> platform was experiencing high cart abandonment rates and poor user engagement despite passing all functional tests.</>),
      solution:
        "We conducted comprehensive exploratory testing with a focus on user journey exploration, usability investigation, and checkout flow analysis to uncover hidden friction points and critical UX issues.",
      results: [
        {
          metric: "Cart Abandonment",
          value: "45%",
          improvement: "Reduced from 78%",
        },
        {
          metric: "UX Issues Found",
          value: "23",
          improvement: "Critical usability problems",
        },
        {
          metric: "User Satisfaction",
          value: "85%",
          improvement: "Increased from 62%",
        },
      ],
      testimonial: {
        quote:
          "The exploratory testing revealed critical UX issues that our automated tests completely missed. The insights transformed our user experience.",
      },
      timeline: "4 weeks of systematic exploration and optimization",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: (<><Link href='banking-finance-industry-testing-services' className="text-[theme(color.brand.blue)] underline">Banking App Security & Usability</Link></>),
      industry: (<><Link href='banking-finance-industry-testing-services' className="text-[theme(color.brand.blue)] underline">Financial Services</Link></>),
      icon: <FaMobile className="text-2xl" />,
      challenge:
        (<>A <Link href='banking-finance-industry-testing-services' className="text-[theme(color.brand.blue)] underline">mobile banking app</Link> needed comprehensive security and usability validation before launch to ensure regulatory compliance and user adoption.</>),
      solution:
        "Implemented session-based exploratory testing with focus on security edge cases, accessibility evaluation, and persona-based testing.",
      results: [
        {
          metric: "Security Issues",
          value: "12",
          improvement: "Critical vulnerabilities found",
        },
        {
          metric: "Accessibility Score",
          value: "98%",
          improvement: "WCAG 2.1 AA compliance",
        },
        {
          metric: "User Flow Issues",
          value: "18",
          improvement: "Navigation problems resolved",
        },
        {
          metric: "Launch Success",
          value: "100%",
          improvement: "Zero post-launch security issues",
        },
      ],
      testimonial: {
        quote:
          "The exploratory testing approach uncovered security and usability issues that could have been catastrophic post-launch. Exceptional work.",
      },
      timeline: "6 weeks from exploration to launch readiness",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      id: 3,
      title: (<><Link href='healthcare-testing-services' className="text-[theme(color.brand.blue)] underline">Healthcare SaaS Edge Case Discovery</Link></>),
      industry: (<><Link href='healthcare-testing-services' className="text-[theme(color.brand.blue)] underline">Healthcare Technology</Link></>),
      icon: <FaSearch className="text-2xl" />,
      challenge:
        (<>A <Link href='healthcare-testing-services' className="text-[theme(color.brand.blue)] underline">healthcare management SaaS platform</Link> needed thorough edge case testing to ensure reliability in critical healthcare workflows.</>),
      solution:
        "Deployed heuristic evaluation and systematic bug hunting focusing on data integrity, workflow edge cases, and integration points.",
      results: [
        {
          metric: "Edge Cases Found",
          value: "34",
          improvement: "Critical workflow issues",
        },
        {
          metric: "Data Integrity Issues",
          value: "8",
          improvement: "Prevented data corruption",
        },
        {
          metric: "Integration Bugs",
          value: "15",
          improvement: "Third-party API issues",
        },
        {
          metric: "Compliance Score",
          value: "100%",
          improvement: "HIPAA compliance achieved",
        },
      ],
      testimonial: {
        quote:
          "The systematic exploration approach identified edge cases that could have compromised patient data. Their expertise was invaluable.",
      },
      timeline: "8 weeks of comprehensive exploration and validation",
      technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
    },
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploratory Testing{" "}
            <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our exploratory testing services help companies uncover
            critical issues, enhance user experiences, and prevent costly
            critical issues, enhance user experiences, and prevent costly
            <Link href='blog/post/web-application-automation-testing-tools-frameworks-best-practices' className="text-[theme(color.brand.blue)] underline"> post-release bugs</Link> through systematic investigation and deep
            application insight.
            application insight.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCase === index
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              Case {study.id}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white">
                  {currentCase.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentCase.title}
                  </h3>
                  <p className="text-green-600 font-medium">
                    {currentCase.industry}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Exploratory Testing Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Timeline
                  </h4>
                  <p className="text-green-600 font-medium">
                    {currentCase.timeline}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Key Results Achieved
              </h4>

              <div className="space-y-4 mb-6">
                {currentCase.results.map((result, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-gray-700 font-medium">
                        {result.metric}
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        {result.value}
                      </span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {result.improvement}
                    </div>
                    {/* Progress bar for visual impact */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(
                            parseInt(result.value) || 90,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  &quot;{currentCase.testimonial.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={prevCase}
            className="bg-white border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-all duration-300"
            aria-label="Previous Case Study"
          >
            <FaChevronLeft />
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Case Study</div>
            <div className="text-lg font-semibold text-gray-900">
              {activeCase + 1} of {caseStudies.length}
            </div>
          </div>

          <button
            onClick={nextCase}
            className="bg-white border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-all duration-300"
            aria-label="Next Case Study"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">
            Exploratory Testing Impact Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-green-100">Bugs Discovered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-green-100">Issue Detection Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Applications Explored</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-green-100">Bug Prevention Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6">
            Let exploratory testing help you uncover critical issues and improve
            your product quality through systematic investigation.
          </p>
          <Link href="/contact-us">
            <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Exploration
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryCaseStudies;
