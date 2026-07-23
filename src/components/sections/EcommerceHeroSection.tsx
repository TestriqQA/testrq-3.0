"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import EcommerceTestingAnimation from "./EcommerceTestingAnimation";

const EcommerceHeroSection: React.FC = () => {

  const trustBadges = [
    "PCI DSS Compliant Testing",
    "GDPR Privacy Compliance",
    "SOC 2 Type II Certified",
    "ISO 27001 Security Standards",
  ];

  return (
    <section className="relative w-full mx-auto pt-8 pb-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
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
            E-Commerce Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaShoppingCart color="white" className="w-4 h-4]" />
              <span className="text-sm font-semibold text-white">
                E-Commerce Testing Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global E-Commerce Testing Services:
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 bg-clip-text text-transparent">
                Optimizing Conversions and Security for 2026
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              In 2026, a one-second delay or a checkout glitch can ruin your brand&apos;s reputation. Testriq provides enterprise-grade e-commerce testing that balances fast deployment with total reliability. We don&apos;t just check functions; we build a <span className="font-semibold text-brand-blue">&quot;Conversion-First&quot; strategy</span> to protect your global revenue.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              We stop transaction failures with rigorous payment testing and slash cart abandonment through better usability. Testriq is your trusted commerce partner for scaling <span className="font-semibold text-brand-blue">US Black Friday sales</span> and meeting complex <Link href="/qa-documentation-services" className="font-semibold text-brand-blue underline">EU GDPR requirements</Link>.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
                    Secure Payment Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/mobile-application-testing" className="hover:text-brand-blue hover:underline">
                    Mobile Commerce Optimization
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/performance-testing-services" className="hover:text-brand-blue hover:underline">
                    Performance Under Load
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                    Cross-Platform
                  </Link>{" "}
                  Compatibility
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Start Free E-Commerce Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center px-4 py-4 min-h-[44px] min-w-[44px]
                 bg-brand-blue text-white font-semibold rounded-lg shadow-lg
                 hover:shadow-xl transition-colors duration-200"
              >
                Start Free E-Commerce Audit
                <FaArrowRight className="ml-2" />
              </Link>

              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                title="Schedule Consultation – Testriq QA Lab"
                className=" inline-flex items-center justify-start px-4 py-4 min-h-[44px]
                 bg-white text-brand-blue font-semibold rounded-lg border-2 border-brand-blue
                 hover:bg-blue-50 transition-colors duration-200"
              >
                <FaPlay className="mr-2" />
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by leading e-commerce brands worldwide
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

          {/* Right Column - Animated E-commerce Dashboard */}
          <div className="py-10">
            <EcommerceTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Optimize Your E-Commerce Platform?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join 500+ e-commerce businesses that trust Testriq for
              comprehensive{" "}
              <Link href="/blog/post/final-reporting-in-desktop-app-testing-qa-metrics-benchmarks-continuous-improvement">
                QA testing
              </Link>{" "}
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Get Free Testing Strategy – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
                 bg-white text-[theme(color.brand.blue)] font-semibold rounded-xl
                 hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out"
              >
                Get Free Testing Strategy
              </Link>

              <Link
                href="/case-studies"
                title="View Case Studies – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
                 bg-white bg-opacity-20 text-[theme(color.brand.blue)] font-semibold rounded-xl
                 hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out
                 border border-white border-opacity-30"
              >
                View Case Studies
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

export default EcommerceHeroSection;
