"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaCog,
  FaCloud,
  FaRocket,
  FaCheckCircle,
  FaMicrochip,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import IoTApplianceTestingAnimation from "./IoTApplianceTestingAnimation";

const IoTHeroSection: React.FC = () => {

  const trustBadges = [
    "Edge-to-Cloud Testing",
    <>
      <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">
        IoT Security Validation
      </Link>
    </>,
    "Protocol Compliance",
    <>
      <Link href="/blog/post/how-to-test-iot-devices-for-reliability">
        Industrial IoT Expertise
      </Link>
    </>,
  ];

  return (
    <section className="relative w-full mx-auto px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 lg:top-22 xl:top-20 left-2/3 md:left-1/2 lg:left-1/3 xl:left-1/4 2xl:left-1/4 animate-float">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaWifi className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute top-64 md:top-46 lg:top-56 right-1/4 md:right-1/5 lg:right-6/12 xl:right-6/12 animate-float delay-1000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaCloud className="w-8 h-8 text-cyan-500" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 left-2/4 md:left-1/4 lg:left-3/4 lg:bottom-96 animate-float delay-2000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaCog className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 lg:bottom-3/12 left-1/6 md:right-1/6 lg:left-1/2 animate-float delay-3000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaMicrochip className="w-8 h-8 text-teal-500" />
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
            IoT Appliance Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaWifi className="w-4 h-4" />
              <span className="text-sm">IoT Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect Your
              <span className="block text-brand-blue">Smart Ecosystem</span>
              with Expert IoT Testing
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure seamless{" "}
              <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
                connectivity
              </Link>
              , robust IoT security, and{" "}
              <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                optimized performance
              </Link>{" "}
              across your entire IoT ecosystem. From{" "}
              <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">
                smart devices
              </Link>{" "}
              to industrial IoT systems, we validate every connection in your
              edge-to-cloud architecture through advanced IoT testing services.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
                    Device Connectivity Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">
                    IoT Security Validation
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Edge Computing Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Protocol Interoperability
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <Link href="/contact-us">
                <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaRocket className="w-5 h-5" />
                  Start IoT Assessment
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by IoT innovators worldwide
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
          <div className="relative">
            <IoTApplianceTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Scale Your IoT Ecosystem?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join 30+ IoT companies that trust Testriq for comprehensive
              connected device testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Get Free IoT Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px] 
             bg-white text-black rounded-xl font-semibold text-base 
             hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all"
              >
                Get Free IoT Audit
              </Link>

              <Link href="/case-studies">
                <button className="bg-white cursor-pointer bg-opacity-20 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  View IoT Case Studies
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

export default IoTHeroSection;
