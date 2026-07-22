// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaArrowRight,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import ISO42001Animation from "./ISO42001Animation";

const ISO42001HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-24 lg:pb-32 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            ISO/IEC 42001 Compliance Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaShieldAlt className="mr-2" />
              AI Governance Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
              <span className="text-brand-blue">ISO/IEC 42001:2023</span>{" "}
              Compliance Testing Services for Responsible{" "}
              <Link href="/ai-application-testing" className="hover:underline">
                AI Systems
              </Link>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                ISO/IEC 42001:2023 is the world&apos;s first international
                standard for{" "}
                <span className="font-semibold text-brand-blue">
                  Artificial Intelligence Management Systems (AIMS)
                </span>
                . Released in December 2023, it provides a certifiable framework
                for organizations that develop, deploy, or use AI — mandating
                responsible innovation, risk management, and ethical
                transparency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                Testriq delivers end-to-end compliance testing aligned with
                ISO/IEC 42001:2023 to help your organization demonstrate{" "}
                <Link
                  href="/security-testing"
                  className="text-brand-blue font-semibold underline"
                >
                  AI trustworthiness
                </Link>
                , satisfy regulatory requirements (EU AI Act, NIST AI RMF), and
                build stakeholder confidence across global markets including the{" "}
                <span className="font-semibold">US, UK, EU, and Asia</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4 w-full sm:w-auto">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Your AI Compliance Audit
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center">
                  View Pricing
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">
                  ISO
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  42001:2023 Aligned
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">
                  100+
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  AI Systems Audited
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  EU AI
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  Act Ready
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  Global
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  Compliance Reach
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Animation */}
          <div className="mt-8 lg:mt-0 flex justify-center items-start">
            <ISO42001Animation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001HeroSection;
