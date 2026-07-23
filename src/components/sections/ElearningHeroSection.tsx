"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,

  FaCheckCircle,
  FaPlay,
  FaBook,
  FaGlobe,
  FaArrowRight,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import ElearningTestingAnimation from "./ElearningTestingAnimation";

const ElearningHeroSection: React.FC = () => {

  const learningTypes = [
    { icon: FaBook, label: "Online Courses", color: "text-blue-500" },
    { icon: FaUsers, label: "Virtual Classrooms", color: "text-green-500" },
    { icon: FaPlay, label: "Video Learning", color: "text-red-500" },
    { icon: FaGlobe, label: "Global Training", color: "text-purple-500" },
  ];

  const complianceStandards = [
    "WCAG 2.1 AA Compliance",
    "Section 508 Standards",
    "SCORM 1.2 & 2004",
    "xAPI (Tin Can API)",
    "GDPR Privacy Compliance",
    "COPPA Educational Standards",
  ];

  return (
    <section className="relative w-full mx-auto pt-8 pb-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="flex flex-col text-center md:text-start relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-[theme(color.brand.blue)]">
            E-Learning Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaGraduationCap className="w-4 h-4" />
              <span className="text-sm font-semibold">
                E-Learning Testing Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empower Learning
              <span className="block text-brand-blue">Through Quality</span>
              E-Learning Testing
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure exceptional learner experiences with{" "}
              <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">
                comprehensive
              </Link>{" "}
              e-learning testing for LMS platforms, online learning systems, and
              educational applications. From{" "}
              <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
                WCAG accessibility compliance
              </Link>{" "}
              to{" "}
              <Link href="/performance-testing-services">
                performance testing
              </Link>{" "}
              and{" "}
              <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
                scalability
              </Link>
              , we help you deliver inclusive, secure education platforms that
              truly make an impact.
            </p>

            {/* Learning Types */}
            <div className="grid grid-cols-2 gap-4">
              {learningTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3">
                  <type.icon
                    className={`w-5 h-5 ${type.color} flex-shrink-0`}
                  />
                  <span className="text-gray-700 font-medium">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
                    WCAG 2.1 Compliance
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  SCORM Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/responsive-web-application-testing-ensuring-seamless-multi-device-compatibility">
                    Multi-Device Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                    Performance Optimization
                  </Link>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact-us"
                title="Start Free LMS Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-brand-blue text-white font-semibold rounded-lg shadow transition-colors duration-200
             hover:shadow-lg"
              >
                <span>Start Free LMS Audit</span>
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/contact-us"
                title="Schedule Demo – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue
             hover:bg-blue-50 transition-colors duration-200"
              >
                <FaPlay className="mr-2 w-4 h-4" />
                <span>Schedule Demo</span>
              </Link>
            </div>

            {/* Compliance Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading educational institutions worldwide
              </p>
              <div className="grid grid-cols-3 text-center gap-3 py-5">
                {complianceStandards.map((standard, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - E-Learning Testing Animation */}
          <div className="flex items-center justify-center">
            <ElearningTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your E-Learning Platform?
            </h2>
            <p className="text-indigo-100 mb-6 text-lg">
              Join 200+ educational institutions that trust Testriq for
              comprehensive e-learning QA solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Get Free Platform Assessment – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold rounded-xl
             hover:bg-gray-100 hover:scale-97 transition-all duration-300 ease-in-out"
              >
                Get Free Platform Assessment
              </Link>

              <Link
                href="/case-studies"
                title="View Success Stories – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-brand-blue font-semibold rounded-xl border border-white border-opacity-30
             hover:bg-opacity-30 hover:scale-97 transition-all duration-300 ease-in-out"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default ElearningHeroSection;
