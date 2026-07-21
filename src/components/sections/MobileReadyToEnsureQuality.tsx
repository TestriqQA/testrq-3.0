// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const MobileReadyToEnsureQuality: React.FC = () => {
  const benefits = [
    "iOS 19 & Android 15 ready",
    "24,000+ real device combinations",
    "AI-driven self-healing automation",
    "5G latency & thermal stress testing",
    "ISO 29119 compliance certification",
    "SOC2 & GDPR data privacy audits",
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-700 bg-opacity-30 text-blue-100 text-sm px-4 py-2 rounded-full mb-6">
              Global Quality Assurance 2026
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Scale Your Mobile Application{" "}
              <span className="text-blue-200">Across Global Markets?</span>
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Transform your mobile application with our 2026-ready testing architecture. We ensure your app delivers exceptional <Link href="/performance-testing-services" className="text-blue-200 hover:underline">performance</Link> on 5G, bulletproof <Link href="/security-testing" className="text-blue-200 hover:underline">security</Link> against ransomware, and <Link href="/blog/post/what-is-mobile-application-testing-an-in-depth-guide" className="text-blue-200 hover:underline">ISO-compliant</Link> quality globally.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Start Your Global Project – Testriq"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px] bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span>Start Your Global Project</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-2">
                  Global QA Standards
                </h3>
                <p className="text-blue-600 font-medium tracking-wide">ISO/IEC/IEEE 29119 Compliant</p>
              </div>

              {/* Device Icons */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="w-16 h-24 bg-gray-900 rounded-xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-blue-600 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-white text-[10px] uppercase font-bold mb-1 tracking-tighter">Latest</span>
                    <span className="text-white text-xs font-bold font-mono">iOS 19</span>
                  </div>
                </div>
                <div className="w-16 h-24 bg-gray-800 rounded-xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-green-700 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-white text-[10px] uppercase font-bold mb-1 tracking-tighter">Latest</span>
                    <span className="text-white text-xs font-bold font-mono">Android 15</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center text-brand-blue">
                  <div className="text-3xl font-bold mb-1">24k+</div>
                  <div className="text-xs text-blue-600 uppercase tracking-widest font-semibold">Device Combos</div>
                </div>
                <div className="text-center text-brand-blue">
                  <div className="text-3xl font-bold mb-1">99.8%</div>
                  <div className="text-xs text-blue-600 uppercase tracking-widest font-semibold">Stability Score</div>
                </div>
                <div className="text-center text-brand-blue">
                  <div className="text-3xl font-bold mb-1">5G</div>
                  <div className="text-xs text-blue-600 uppercase tracking-widest font-semibold">Optimized</div>
                </div>
                <div className="text-center text-brand-blue">
                  <div className="text-3xl font-bold mb-1">OWASP</div>
                  <div className="text-xs text-blue-600 uppercase tracking-widest font-semibold">Verified</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: <Link href="/manual-testing-services" className="hover:underline">Functional Testing</Link>, percentage: 99 },
                  { label: <Link href="/performance-testing-services" className="hover:underline">Performance Testing</Link>, percentage: 96 },
                  { label: <Link href="/security-testing" className="hover:underline">Security Testing</Link>, percentage: 98 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-blue-700 mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full border border-blue-800 bg-opacity-50 rounded-full h-2.5">
                      <div
                        className="bg-blue-800 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-yellow-900 font-bold text-lg">QA</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <FaCheckCircle className="w-6 h-6 text-green-900" />
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 bg-opacity-20 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-300 bg-opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileReadyToEnsureQuality;
