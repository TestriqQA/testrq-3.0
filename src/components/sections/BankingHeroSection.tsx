"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaCheckCircle,
  FaUniversity,
  FaLock,
  FaUsers,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import BankingTestingAnimation from "./BankingTestingAnimation";
const BankingHeroSection: React.FC = () => {

  const trustBadges = [
    "PCI DSS Level 1 Certified",
    "SOX Compliance Testing",
    "GDPR Privacy Compliant",
    "ISO 27001 Security Standards",
  ];

  return (
    <section className="relative w-full mx-auto pt-8 pb-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
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
            Banking & Finance
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2">
              <FaUniversity className="w-4 h-4" />
              <span className="text-sm">
                Banking & Finance Testing Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Banking & Financial Services (BFSI)
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                Testing Services
              </span>
              Ensuring Security and Compliance
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Threat actors target financial services at <span className="font-semibold">300x the rate</span> of other industries. With data breaches costing an average of <span className="font-semibold">5.85 million USD</span>, our QA strategies are designed to safeguard multi-billion dollar transaction ecosystems and ensure <span className="font-semibold">100% audit pass rates</span> for your institution.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
                    Regulatory Compliance
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/security-testing">
                    Advanced Security Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Core Banking Validation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Mobile Banking QA
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link
                href="/contact-us"
                title="Start Free Security Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px]
             bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white
             rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-98 transition-all duration-300"
              >
                <FaLock className="w-5 h-5" />
                Start Free Security Audit
              </Link>

              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                title="Schedule Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px]
             border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg
             hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)]
             transition-all duration-300"
              >
                <FaUsers className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by leading financial institutions worldwide
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

          {/* Right Column - Animated Banking Dashboard */}
          <div className="py-10">
            <BankingTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Fortify Your Fintech Platform?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join 200+ financial institutions that trust Testriq for
              comprehensive BFSI testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <Link href="/contact-us" className="w-fit">
                <button className="bg-white cursor-pointer px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                  Get Free Compliance Assessment
                </button>
              </Link>
              <Link href="/case-studies" className="w-fit">
                <button className="bg-white cursor-pointer bg-opacity-20 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                  View Banking Case Studies
                </button>
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

export default BankingHeroSection;
