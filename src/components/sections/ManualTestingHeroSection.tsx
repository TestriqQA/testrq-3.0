// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaUser,
  FaArrowRight,
  FaHome,
  FaChevronRight
} from "react-icons/fa";
import ManualTestingAnimation from "./ManualTestingAnimation";

const ManualTestingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
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
            Manual Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaUser className="mr-2" />
              Manual Testing Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global Manual Testing Services:
              <span className="text-transparent block bg-clip-text bg-brand-blue">
                {" "}
                Strategic Software QA for 2026
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed font-semibold">
              Use ISO 29119 Standards and Human Intelligence to navigate complex micro-services and rapid CI/CD releases.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              As we move into 2026, the role of manual software testing is undergoing a fundamental shift. <Link href="/automation-testing-services" className="text-brand-blue underline">Automation and AI testing</Link> are expanding, but the State of Testing™ report reveals a critical reality. Organizations now find that balancing automation with manual testing is the only way to achieve true quality in 2026.
              <br /><br />
              Automation is growing fast. By 2026, 30% of companies will automate over half of their QA, making manual testing harder to justify. Testriq solves this by using ISO 29119 standards. We put human insight where it matters most—focusing on the risky logic and complex paths that AI can’t handle yet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  5,000+
                </div>
                <div className="text-sm text-gray-600">Test Cases Executed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  98%
                </div>
                <div className="text-sm text-gray-600">Bug Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  800+
                </div>
                <div className="text-sm text-gray-600">Applications Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Manual Testing Dashboard */}
          <div className="relative">
            <ManualTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingHeroSection;
