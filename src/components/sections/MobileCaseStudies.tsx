"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaMobile,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";

const MobileCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "E-commerce Mobile App",
      client: "Leading Retail Chain",
      industry: "E-commerce",
      challenge:
        "Multi-platform e-commerce mobile app needed comprehensive testing across iOS and Android devices before nationwide launch during peak shopping season.",
      solution:
        "Implemented a comprehensive mobile app testing strategy that included functional validation, performance optimization, security testing, and usability analysis across 50+ real devices, custom screen sizes, and multiple OS versions using real device testing.",
      results: [
        {
          metric: "App Store Rating",
          value: "4.8/5",
          description: "Average rating across both platforms",
        },
        {
          metric: "Performance",
          value: "60%",
          description: "Improvement in app loading speed",
        },
        {
          metric: "Conversion Rate",
          value: "35%",
          description: "Increase in mobile conversions",
        },
        {
          metric: "Crash Rate",
          value: "0.02%",
          description: "Post-launch crash rate",
        },
      ],
      technologies: [
        "React Native",
        "iOS 14-17",
        "Android 9-14",
        "Payment Gateways",
        "Push Notifications",
      ],
      testimonial:
        "Testriq's mobile testing expertise helped us launch flawlessly during Black Friday. The comprehensive device coverage caught critical issues that would have cost us millions in lost sales.",
      author: "CTO, Leading Retail Chain",
    },
    {
      title: "Healthcare Mobile Platform",
      client: "Telemedicine Startup",
      industry: "Healthcare",
      challenge:
        "HIPAA-compliant telemedicine mobile app required rigorous security testing and seamless video calling functionality across diverse mobile devices.",
      solution:
        "Executed specialized healthcare mobile testing including HIPAA compliance validation, real-time video testing, and accessibility compliance across iOS and Android platforms.",
      results: [
        {
          metric: "HIPAA Compliance",
          value: "100%",
          description: "Full compliance achieved",
        },
        {
          metric: "Video Quality",
          value: "99.5%",
          description: "Successful video call rate",
        },
        {
          metric: "User Adoption",
          value: "250%",
          description: "Increase in active users",
        },
        {
          metric: "App Store Approval",
          value: "1st Try",
          description: "Both iOS and Android approved",
        },
      ],
      technologies: [
        "Flutter",
        "WebRTC",
        "HIPAA Compliance",
        "Biometric Auth",
        "Real-time Messaging",
      ],
      testimonial:
        "The attention to detail in security and accessibility testing was exceptional. Testriq ensured our telemedicine app met all regulatory requirements while providing excellent user experience.",
      author: "Founder, Telemedicine Startup",
    },
    {
      title: "Gaming Mobile App",
      client: "Mobile Game Studio",
      industry: "Gaming",
      challenge:
        "High-performance mobile game needed extensive performance testing and optimization across various device configurations and network conditions.",
      solution:
        "Performed specialized mobile gaming testing including performance optimization, battery usage analysis, and multiplayer functionality testing across diverse mobile hardware.",
      results: [
        {
          metric: "Performance",
          value: "99.9%",
          description: "Smooth gameplay across devices",
        },
        {
          metric: "Battery Life",
          value: "40%",
          description: "Improvement in battery efficiency",
        },
        {
          metric: "User Retention",
          value: "85%",
          description: "7-day user retention rate",
        },
        {
          metric: "Revenue",
          value: "200%",
          description: "Increase in in-app purchases",
        },
      ],
      technologies: [
        "Unity",
        "Multiplayer Networking",
        "In-App Purchases",
        "Social Integration",
        "Analytics",
      ],
      testimonial:
        "Testriq's gaming expertise and performance testing helped us create a mobile game that runs smoothly on all devices. Our user retention and revenue exceeded all expectations.",
      author: "Game Director, Mobile Game Studio",
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
            Mobile Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Case Studies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our comprehensive mobile app testing services helped
            companies across industries achieve faster app store approvals,
            reduce post-launch bugs, and deliver exceptional user experiences
            through real device testing and QA expertise.
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
                <FaMobile className="w-6 h-6 text-[theme(color.brand.blue)]" />
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
                  <button className="flex items-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue cursor-pointer hover:shadow-lg transition-colors">
                    <span>View Full Case Study</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Testing Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          {[
            {
              icon: <FaMobile className="w-6 h-6" />,
              number: "100+",
              label: "Mobile Apps Tested",
            },
            {
              icon: <FaChartLine className="w-6 h-6" />,
              number: "99.5%",
              label: "App Store Success Rate",
            },
            {
              icon: <FaClock className="w-6 h-6" />,
              number: "12hr",
              label: "Average Turnaround",
            },
            {
              icon: <FaCheckCircle className="w-6 h-6" />,
              number: "500+",
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

        {/* App Store Success Showcase */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              App Store Success Stories
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our mobile testing has helped apps achieve top rankings and
              millions of downloads across both iOS App Store and Google Play
              Store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">#1</div>
              <div className="text-gray-300 text-sm">App Store Ranking</div>
              <div className="text-xs text-gray-400 mt-1">
                E-commerce Category
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                4.9★
              </div>
              <div className="text-gray-300 text-sm">Average Rating</div>
              <div className="text-xs text-gray-400 mt-1">Gaming App</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Mobile Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our growing list of successful mobile apps who have achieved
              app store success with our comprehensive mobile testing services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                title="Start Your Mobile Project – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Mobile Project
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCaseStudies;
