"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  FaRobot,

  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight
} from "react-icons/fa";

const Lightbox = dynamic(() => import("../VideoLightBox"), { ssr: false });
import AutomationTestingAnimation from "./AutomationTestingAnimation";

const AutomationTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="relative pt-8 pb-24 lg:pb-32 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
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
            Automation Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaRobot className="mr-2" />
              Test Automation Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
              Scalable <span className="text-brand-blue">Test Automation</span> Services: Global QA Solutions for 2026
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                The demand for fast software testing is peaking. By 2026, many firms will automate over half of their QA. However, <span className="font-semibold text-brand-blue">process complexities for global teams make it hard to show <Link href="/roi-calculator" className="hover:underline">ROI</Link> or manage flaky tests</span>. At Testriq, we provide test automation services that go <span className="italic">beyond simple script writing</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                We align our automated testing frameworks with the latest international standards, including <Link href="/qa-documentation-services" className="text-brand-blue font-semibold underline">ISO 29119-5:2024</Link>. This ensures our solutions are scalable, easy to maintain, and built for complex <Link href="/api-testing" className="text-brand-blue underline">micro-services</Link> across the <span className="font-semibold">US, UK, EU, and Asia</span>.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-4 w-full sm:w-auto">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <button onClick={openLightbox} className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center">
                <FaPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  50%
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Automated by 2026</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  ISO
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">29119-5:2024</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  High
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Performance Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  Global
                </div>
                <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">QA Standards</div>
              </div>
            </div>
          </div>

          {/* Right Content - Automation Testing Dashboard */}
          <div className="mt-8 lg:mt-0 flex justify-center items-start">
            <AutomationTestingAnimation />
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox isOpen={isLightboxOpen} videoLink="https://youtu.be/4i5_1aKqwYg?si=GWrxFYuBeMk8SXzU" onClose={closeLightbox} />
    </section>
  );
};

export default AutomationTestingHeroSection;
