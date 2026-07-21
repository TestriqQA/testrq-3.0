"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaSync,
  FaFlask,
} from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const MobileComprehensive: React.FC = () => {
  const testingServices = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Mastering Device & OS Fragmentation",
      description: (
        <>
          As Android 15 rolls out alongside{" "}
          <Link href="/blog/post/ios-vs-android-testing-key-differences-every-qa-should-know" className="text-brand-blue underline">
            iOS 18/19
          </Link>
          , we validate your app across diverse hardware including foldables,{" "}
          <Link href="/smart-device-testing-services" className="text-brand-blue underline">
            wearables
          </Link>
          , and dual-screen devices to prevent 20-30% configuration crashes.
        </>
      ),
      features: [
        "ISO 29119-3 Compliance",
        "Foldable & Wearable QA",
        "Dynamic Resolution Testing",
        "Risk-Based Device Matrix",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Advanced Security & Pen Testing",
      description: (
        <>
          Mapping to{" "}
          <Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp" className="text-brand-blue underline">
            OWASP Mobile Top 10
          </Link>
          , we defend against the 150% rise in mobile ransomware with deep{" "}
          <Link href="/security-testing" className="text-brand-blue underline">
            APK/IPA file audits
          </Link>{" "}
          and biometric (FaceID) validation.
        </>
      ),
      features: [
        "OWASP Mobile Top 10",
        "Biometric Identity Checks",
        "API Endpoint Audits",
        "ISO 29119 Incident Reports",
      ],
    },
    {
      icon: <BsLightningCharge className="w-8 h-8" />,
      title: "5G & Performance Optimization",
      description: (
        <>
          Testing real-world{" "}
          <Link href="/blog/post/5g-mobile-app-testing-strategies-for-smooth-performance-in-2025" className="text-brand-blue underline">
            5G/Wi-Fi 6
          </Link>{" "}
          handovers. We replicate latency and throttling to prevent the 42% of crashes caused by network-edge connectivity shifts.
        </>
      ),
      features: [
        "5G Latency Simulation",
        "Thermal Throttling Checks",
        "4G/5G/Offline Handovers",
        "Battery Consumption Benchmarks",
      ],
    },
    {
      icon: <FaSync className="w-8 h-8" />,
      title: "AI-Driven Test Automation",
      description: (
        <>
          Utilizing{" "}
          <Link href="/blog/post/which-types-of-mobile-apps-can-be-tested-by-appium" className="text-brand-blue underline">
            Appium
          </Link>{" "}
          &{" "}
          <Link href="/blog/post/web-application-automation-testing-tools-frameworks-best-practices" className="text-brand-blue underline">
            Selenium
          </Link>{" "}
          with{" "}
          <Link href="/ai-application-testing" className="text-brand-blue underline">
            AI-driven self-healing tools
          </Link>{" "}
          and Model-Based Testing (MBT) to reduce scripting overhead and handle high-velocity UI updates.
        </>
      ),
      features: [
        "Self-Healing Frameworks",
        "Appium & XCUI Automation",
        "Model-Based Testing (MBT)",
        "CI/CD Pipeline Integration",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Global Usability & UX Validation",
      description: (
        <>
          Facilitating{" "}
          <Link href="/blog/post/what-is-mobile-application-testing-an-in-depth-guide" className="text-brand-blue underline">
            mobile usability testing
          </Link>{" "}
          on real hardware to ensure touch gestures (swipe, pinch, zoom) and AR/VR features meet human expectations globally.
        </>
      ),
      features: [
        "Gesture Responsiveness",
        "AR/VR UX Validation",
        "Accessibility Compliance",
        "Real-Device UAT Sessions",
      ],
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: "Compliance-First QA",
      description: (
        <>
          Rigorous data privacy checks for high-stakes apps. Specialized QA for{" "}
          <Link href="/banking-finance-industry-testing-services" className="text-brand-blue underline">
            banking
          </Link>
          ,{" "}
          <Link href="/healthcare-testing-services" className="text-brand-blue underline">
            healthcare
          </Link>
          , and fintech platforms requiring SOC2, GDPR, and HIPAA compliance.
        </>
      ),
      features: [
        "SOC2 Type II Assurance",
        "GDPR & CCPA Audits",
        "HIPAA Health-Tech QA",
        "Fintech Security Checklist",
      ],
    },
  ];

  const scrollToProcess = () => {
    document.querySelector("#mobile-process-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Engineering Global Trust</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Navigating the 2026 Mobile QA Landscape:{" "}
            <span className="text-[theme(color.brand.blue)]">
              5 Global Challenges
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Testriq delivers global testing excellence across the US, UK, EU, and Asia through our &apos;Compliance-First&apos; methodology and ISO 29119 standardized frameworks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 text-[theme(color.brand.blue)]">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Support */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Advanced Platform & Device Coverage (2026)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* iOS Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Apple Logo" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  <Link href="/blog/post/what-are-the-testing-tools-for-ios-app-testing">
                    iOS & Apple Ecosystem
                  </Link>
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iPhone 13 to 17 Pro Max</li>
                    <li>• iPad Pro (M2/M3 chips)</li>
                    <li>• Apple Watch Ultra</li>
                    <li>• Vision Pro (Extended Reality)</li>
                  </ul>
                </div>
                <div>
                  <strong>OS Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• iOS 15.0 - 19.x</li>
                    <li>• iPadOS 15.0 - 19.x</li>
                    <li>• watchOS 8.0 - 11.x</li>
                    <li>• visionOS (Latest)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Android Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Android Logo" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"></path></svg>
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  <Link href="/blog/post/what-do-you-need-for-mobile-automation-testing">
                    Android & Fragmented OS
                  </Link>
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Devices:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Samsung Z Fold/Flip 6</li>
                    <li>• Google Pixel 8 & 9 Pro</li>
                    <li>• Xiaomi & OnePlus (Global)</li>
                    <li>• 24,000+ Device Combinations</li>
                  </ul>
                </div>
                <div>
                  <strong>OS Versions:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Android 11.0 - 15.0</li>
                    <li>• Custom UI (OneUI, HyperOS)</li>
                    <li>• Wear OS 4.0/5.0</li>
                    <li>• Android Automotive OS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Ensure Your Mobile App&apos;s Quality?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a comprehensive testing strategy tailored to your mobile
              application&apos;s specific needs and target audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                title="Start Free Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors cursor-pointer"
              >
                Start Free Consultation
              </Link>
              <button
                onClick={scrollToProcess}
                className="cursor-pointer px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Testing Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileComprehensive;
