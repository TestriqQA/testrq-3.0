"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaTrophy,
  FaCheckCircle,
  FaPlay,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import GamingTestingAnimation from "./GamingTestingAnimation";

const GamingHeroSection: React.FC = () => {

  const trustBadges = [
    "Unity Certified Testing",
    "Unreal Engine Expertise",
    "Cross-Platform Validation",
    "Performance Optimization",
  ];

  return (
    <section className="relative w-full mx-auto px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 hidden xl:block overflow-hidden">
        <div className="absolute top-32 xl:top-20 left-2/3 md:left-1/2 lg:left-1/3 2xl:left-1/3 animate-float">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <FaGamepad className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute top-64 md:top-46 lg:top-56 right-1/4 md:right-1/5 lg:right-6/12 xl:right-6/12 animate-float delay-1000">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <FaTrophy className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 left-2/4 md:left-1/4 lg:left-3/4 lg:bottom-96 animate-float delay-2000">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <FaMobile className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 lg:bottom-3/12 left-1/6 md:right-1/6 lg:left-1/2 animate-float delay-3000">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <FaDesktop className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
      </div>

      <div className="relative pt-8 pb-16">
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
            Gaming App Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-3 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaGamepad className="w-4 h-4" />
              <span className="text-sm">Gaming App Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Level Up Your
              <span className="block text-[theme(color.brand.blue)]">
                Gaming Experience
              </span>
              with Expert Game QA
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Deliver flawless gaming experiences across all platforms with our
              comprehensive{" "}
              <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
                game testing
              </Link>{" "}
              services. From mobile games to AAA titles, our gaming software
              testing solutions ensure optimal{" "}
              <Link href="/performance-testing-services">performance</Link>,
              engaging gameplay, and reliable launches through{" "}
              <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                cross-platform compatibility
              </Link>
              , gameplay mechanics testing, and{" "}
              <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
                security-focused game QA
              </Link>
              .
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                    Cross-Platform Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                    Performance Optimization
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Multiplayer Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  AR/VR Game Testing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link
                href="/contact-us"
                title="Start Game Testing – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px]
             bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white
             font-semibold text-lg rounded-2xl hover:shadow-lg hover:scale-105
             transition-all duration-300"
              >
                <FaPlay className="w-5 h-5" />
                Start Game Testing
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by leading game studios worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 text-center gap-3 items-center">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual & Animation */}
          <div className="relative">
            <GamingTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Launch Your Next Hit Game?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join 50+ game studios that trust Testriq for{" "}
              <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">
                comprehensive
              </Link>{" "}
              gaming QA testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <Link
                href="/contact-us"
                title="Get Free Game Analysis – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
             bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 hover:scale-98
             transition-all duration-200"
              >
                Get Free Game Analysis
              </Link>

              <Link
                href="/case-studies"
                title="View Gaming Case Studies – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-black rounded-2xl font-semibold border border-white border-opacity-30
             hover:bg-opacity-30 hover:scale-98 transition-all duration-200"
              >
                View Gaming Case Studies
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

export default GamingHeroSection;
