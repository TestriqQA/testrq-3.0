"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaSearch,
  FaArrowRight,
  FaPlay,
  FaHome,
  FaChevronRight
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import ExploratoryTestingAnimation from "./ExploratoryTestingAnimation";

const ExploratoryTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
          <span className="text-brand-blue">
            Exploratory Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaSearch />
              <span className="text-sm">Exploratory Testing Specialists</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Exploratory Testing in Software Testing: Uncovering Critical Risks Through
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Human Intuition
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              In an era of hyper-automation, the human element remains the most
              powerful tool for uncovering deep-seated defects. Exploratory
              testing is more than just &apos;clicking around.&apos; Exploratory
              testing combines learning, test design, and execution into a
              single, sophisticated process. At Testriq, our{" "}
              <Link href="exploratory-testing" className="text-[theme(color.brand.blue)] underline">
                exploratory testing software
              </Link>{" "}
              solutions bridge the gap between scripted coverage and real-world
              unpredictability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Contact Us – Testriq QA Lab"
                className="inline-flex items-center justify-center bg-brand-blue text-white min-h-[44px] min-w-[44px] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Get Started Today
                <FaArrowRight className="ml-2" />
              </Link>
              <button
                onClick={openLightbox}
                className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="w-4 h-4 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  2,500+
                </div>
                <div className="text-sm text-gray-600">Bugs Discovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  95%
                </div>
                <div className="text-sm text-gray-600">
                  Issue Detection Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Applications Explored
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Exploratory Testing Dashboard */}
          <div className="relative">
            <ExploratoryTestingAnimation />
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

export default ExploratoryTestingHeroSection;
