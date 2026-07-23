"use client";
// F-21.1 — REVERTED. This file uses styled-jsx (<style jsx>), which only
// works inside Client Components. The F-21.1 heuristic missed this pattern.
// Keeping "use client" so styled-jsx can register its runtime style injection.
import Link from "next/link";
import React from "react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaMobile,
  FaUserMd,
  FaRocket,
  FaUsers,
  FaCheckCircle,

  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import HealthcareTestingAnimation from "./HealthcareTestingAnimation";

const HealthcareHeroSection: React.FC = () => {


  const trustBadges = [
    "HIPAA Compliant Testing",
    "FDA Validation Support",
    "SOC 2 Type II Certified",
    "ISO 27001 Security Standards",
  ];

  return (
    <section className="relative w-full mx-auto pt-8 pb-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-32 lg:top-22 xl:top-20 left-2/3 md:left-1/2 lg:left-1/3 xl:left-1/4 2xl:left-1/4 animate-float">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaHeartbeat className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute top-64 md:top-46 lg:top-56 right-1/4 md:right-1/5 lg:right-6/12 xl:right-6/12 animate-float delay-1000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaShieldAlt className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 left-2/4 md:left-1/4 lg:left-3/4 lg:bottom-96 animate-float delay-2000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaUserMd className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 lg:bottom-3/12 left-1/6 md:right-1/6 lg:left-1/2 animate-float delay-3000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaMobile className="w-8 h-8 text-teal-500" />
          </div>
        </div>
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
            Healthcare Testing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaHeartbeat className="w-4 h-4" />
              <span className="text-sm">Healthcare Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure Your
              <span className="block text-brand-blue">Healthcare Software</span>
              with Expert Medical QA
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure{" "}
              <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
                patient safety
              </Link>
              , regulatory compliance, and healthcare data security with our
              specialized healthcare testing services. From{" "}
              <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">
                EHR system
              </Link>{" "}
              testing to medical software QA, we validate your healthcare
              solutions meet{" "}
              <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
                HIPAA compliance
              </Link>
              , FDA regulations, and other industry standards.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  HIPAA Compliance Testing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
                    FDA Validation
                  </Link>{" "}
                  Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
                    Medical Device Testing
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  EHR Integration Testing
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <Link
                href="/contact-us"
                title="Start Healthcare Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px]
             bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white
             font-semibold text-lg rounded-2xl
             hover:shadow-2xl hover:scale-98 transition-all duration-300"
              >
                <FaRocket className="w-5 h-5" />
                Start Healthcare Audit
              </Link>

              <Link
                href="/contact-us"
                title="Schedule Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[44px] min-w-[44px]
             ring-2 ring-brand-blue text-brand-blue font-semibold text-lg rounded-2xl
             hover:scale-98 hover:ring-3 hover:text-sky-600 transition-all duration-300"
              >
                <FaUsers className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">
                Trusted by healthcare organizations worldwide
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

          {/* Right Column - Healthcare Testing Animation */}
          <div className="flex items-center justify-center">
            <HealthcareTestingAnimation />
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Secure Your Healthcare Software?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join 200+ healthcare organizations that trust Testriq for
              comprehensive medical software testing.
            </p>
            <div className="flex flex-col text-[theme(color.brand.blue)] sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Get Free Security Assessment – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px] 
             bg-white text-brand-blue font-semibold rounded-xl 
             hover:bg-gray-100 hover:scale-98 transition-all"
              >
                Get Free Security Assessment
              </Link>
              <Link
                href="/case-studies"
                title="View Healthcare Case Studies – Testriq QA Lab"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-brand-blue font-semibold rounded-xl
             hover:bg-opacity-30 hover:scale-98 transition-all
             border border-white border-opacity-30"
              >
                View Healthcare Case Studies
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

export default HealthcareHeroSection;
