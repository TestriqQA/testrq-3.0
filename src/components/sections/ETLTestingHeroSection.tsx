"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaExchangeAlt,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import ETLTestingAnimation from "./ETLTestingAnimation";

const ETLTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>

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
            ETL Testing
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaExchangeAlt />
              <span className="text-sm">ETL Testing Specialists</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-base md:text-sm"></div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global ETL Testing Services:{" "}
              <span className="text-brand-blue">Ensuring Data Integrity</span> in
              a Zettabyte Era
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                With the ETL market hitting <span className="font-semibold text-brand-blue">$8.8 billion</span> this year, data integrity is more critical than ever. At Testriq, we provide <Link href="/blog/post/data-quality-testing-in-etl" className="text-brand-blue underline">enterprise ETL testing</Link> to ensure your data pipelines are accurate, scalable, and audit-ready. We go beyond simple record counts to validate complex business logic through deep <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability" className="text-brand-blue underline">data integration testing</Link>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Testriq bridges the gap between raw data and actionable intelligence. We specialize in high-velocity <Link href="/blog/post/data-loading-testing-etl-performance-testing" className="text-brand-blue underline">ETL automation</Link> and complex cloud migrations like <span className="font-semibold">Snowflake</span>. Whether you&apos;re focused on scalability or global compliance, we ensure your data is zero-defect and always audit-ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Get Started Today – Testriq QA Lab"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <button
                onClick={openLightbox}
                className="inline-flex items-center justify-center w-full sm:w-auto border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <span className="mr-2">▶</span>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">
                  $8.8B
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  ETL Market 2026
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">
                  Zero
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  Defect Data Flow
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
                  SOC2
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  <Link href="/security-testing" className="text-gray-600 font-semibold hover:text-brand-blue hover:underline">Compliance Ready</Link>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  Audit
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  Airtight Accuracy
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - ETL Testing Dashboard */}
          <div className="relative">
            <ETLTestingAnimation />
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default ETLTestingHeroSection;
