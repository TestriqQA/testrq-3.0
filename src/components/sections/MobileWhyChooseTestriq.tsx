// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";

const MobileWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Global Compliance First",
      description: (
        <>
          Adhering to{" "}
          <Link href="/blog/post/what-is-mobile-application-testing-an-in-depth-guide" className="text-brand-blue underline">
            ISO/IEC/IEEE 29119
          </Link>
          , SOC2 Type II, and GDPR for enterprise-grade security and regulated industry requirements.
        </>
      ),
      stats: "ISO 29119 Standardized"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Singapore Hub Architecture",
      description: (
        <>
          Delivering global{" "}
          <Link href="/automation-testing-services" className="text-brand-blue underline">
            Android and iOS QA
          </Link>{" "}
          from our specialized hubs, utilizing international benchmarks for software excellence.
        </>
      ),
      stats: "Global Delivery Model"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "2026 Readiness",
      description: (
        <>
          Specialized in testing for{" "}
          <Link href="/blog/post/5g-mobile-app-testing-strategies-for-smooth-performance-in-2025" className="text-brand-blue underline">
            5G
          </Link>
          , edge computing, AR/VR, and the latest iOS 19/Android 15 features across 24,000+ devices.
        </>
      ),
      stats: "5G & XR Optimized"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Real Device Cloud",
      description: (
        <>
          Exhaustive coverage using{" "}
          <Link href="/blog/post/solving-the-top-5-challenges-in-mobile-application-testing" className="text-brand-blue underline">
            BrowserStack and AWS Device Farm
          </Link>
          , ensuring UI consistency that emulators often miss.
        </>
      ),
      stats: "24,000+ Device Combos"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Benchmarking",
      description: (
        <>
          In-depth CPU, RAM, and battery usage analysis to prevent thermal throttling and ensure smooth{" "}
          <Link href="/performance-testing-services" className="text-brand-blue underline">
            mid-range performance
          </Link>
          .
        </>
      ),
      stats: "Deep Diagnostics"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Penetration Testing",
      description: (
        <>
          Elite{" "}
          <Link href="/security-testing" className="text-brand-blue underline">
            mobile application security
          </Link>{" "}
          mapped to OWASP Mobile Top 10, protecting against the rise in ransomware.
        </>
      ),
      stats: "OWASP Standardized"
    }
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Testriq for{" "}
            <span className="text-[theme(color.brand.blue)]">Mobile Testing?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine mobile QA expertise, <Link href='/technology-stack'>industry-leading tools</Link>, and proven testing methodologies to deliver full-cycle mobile application testing services that ensure faster <Link href='/blog/post/mobile-testing-environment-setup' className="text-brand-blue underline">time-to-market</Link> and app store success.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 text-[theme(color.brand.blue)] group-hover:bg-[theme(color.brand.blue)] group-hover:text-white transition-colors duration-300">
                {advantage.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="text-[theme(color.brand.blue)] font-semibold text-sm">
                {advantage.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Testing Comparison */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Testriq vs Traditional Mobile Testing
              </h3>

              <div className="space-y-6">
                {[
                  {
                    feature: "Testing Precision",
                    testriq: "ISO 29119 Compliant",
                    traditional: "Unstructured Ad-hoc",
                    advantage: "Regulated Quality"
                  },
                  {
                    feature: "OS & Device Support",
                    testriq: "iOS 19 & Android 15",
                    traditional: "Legacy Versions Only",
                    advantage: "Next-Gen Ready"
                  },
                  {
                    feature: "Security Framework",
                    testriq: "OWASP & SOC2",
                    traditional: "Basic OWASP Only",
                    advantage: "Enterprise Secure"
                  },
                  {
                    feature: "Network Testing",
                    testriq: "5G & Edge Simulation",
                    traditional: "Basic Wi-Fi Only",
                    advantage: "42% Less Crashes"
                  }
                ].map((comparison, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-1">
                        {comparison.feature}
                      </div>
                      <div className="text-sm text-gray-600">
                        Testriq: <span className="text-[theme(color.brand.blue)] font-semibold">{comparison.testriq}</span> vs
                        Traditional: <span className="text-gray-500">{comparison.traditional}</span>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      {comparison.advantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Mobile Success Metrics */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Global QA Benchmarks
                  </h4>
                  <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                    99.8%
                  </div>
                  <div className="text-gray-600">Cross-Platform Stability Rate</div>
                </div>

                {/* Success Metrics */}
                <div className="space-y-4">
                  {[
                    { label: "ISO 29119 Compliance", percentage: 100 },
                    { label: "Android 15 Compatibility", percentage: 100 },
                    { label: "Security Vetting (OWASP)", percentage: 99 },
                    { label: "5G UX Performance", percentage: 98 }
                  ].map((rating, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{rating.label}</span>
                        <span>{rating.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Testimonial */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic mb-2">
                    &quot;Testriq&apos;s 2026-ready frameworks helped us scale our 5G-native app across 40 countries without a single network-related crash.&quot;
                  </p>
                  <div className="text-xs text-gray-600">
                    - Principal Architect, Global Fintech Leader
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[theme(color.brand.blue)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Global Standards
              </div>
            </div>
          </div>
        </div>

        {/* Device Lab Showcase */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Global Mobile Device Lab
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">24k+</div>
              <div className="text-gray-600 text-sm">Device Combos</div>
              <div className="text-xs text-gray-500 mt-1">Real Hardware Cloud</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">ISO</div>
              <div className="text-gray-600 text-sm">29119 Standard</div>
              <div className="text-xs text-gray-500 mt-1">Verified Process</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">5G</div>
              <div className="text-gray-600 text-sm">Native Simulation</div>
              <div className="text-xs text-gray-500 mt-1">Latency & Throttling</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">OWASP</div>
              <div className="text-gray-600 text-sm">Penetration Testing</div>
              <div className="text-xs text-gray-500 mt-1">Mobile Top 10</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileWhyChooseTestriq;

