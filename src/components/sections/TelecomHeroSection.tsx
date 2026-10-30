// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaSignal,
  FaCheckCircle,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import TelecomTestingAnimation from "./TelecomTestingAnimation";

const TelecomHeroSection: React.FC = () => {

  const trustBadges = [
    "Telecom App QA Specialists",
    (<><Link href="/blog/post/continuous-regression-testing-ensuring-quality-in-agile-devops">Agile Testing Processes</Link></>),
    "Security & Compliance Ready",
    (<><Link href="/blog/post/robotic-safety-testing-meeting-iso-10218-13482-and-beyond">ISO 27001 Certified</Link></>),
  ];

  return (
    <section className="relative w-full mx-auto pt-8 pb-16 px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative">
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
            Telecom Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaWifi className="w-4 h-4" />
              <span className="text-sm">Telecom Software Testing Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ensuring Flawless
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              with Telecommunications Testing Services
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We specialize in ensuring the quality and <Link href="/performance-testing-services">performance</Link> of telecom
              software through <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">comprehensive testing services</Link>. Our approach
              guarantees that every system runs smoothly, meets high performance
              standards, and provides a reliable, <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">seamless experience</Link> for end
              users.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Telecom App QA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  OSS/BSS Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Billing & CRM Validation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Performance & <Link href="/security-testing">Security Testing</Link>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaSignal className="w-5 h-5" />
                  Request a Free QA Audit
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by leading telecom software teams
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 text-center gap-3 items-center">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual & Animation */}
          <div className="relative py-10">
            <TelecomTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomHeroSection;
