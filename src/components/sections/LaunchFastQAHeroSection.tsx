"use client";

import React, { useState } from "react";
import {
  FaBolt,
} from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import LaunchFastQAAnimation from "./LaunchFastQAAnimation";

const LaunchFastQAHeroSection: React.FC = () => {
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
            LaunchFast QA
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaBolt />
              <span className="text-sm">LaunchFast QA Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Launch-Fast QA: Rapid QA Testing Services for
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Startup MVP Success
              </span>
            </h1>

            <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
              <p>
                Speed is critical for 2026 startups, but moving too fast without quality creates technical debt. This often leads to investor skepticism during funding rounds. Testriq’s{" "}
                <Link title="Launch-Fast QA" href="/launchfast-qa" className="text-[theme(color.brand.blue)] underline font-medium">
                  Launch-Fast QA
                </Link>{" "}
                provides the specialized testing your early-stage team needs. We ensure you maintain velocity without compromising your product’s integrity.
              </p>
              <p>
                We don&apos;t just find bugs; we accelerate your software release cycle. Our agile and continuous QA practices accelerate your journey from code commit to MVP launch. Whether you require on-demand testing for feature pivots or affordable sprints, Testriq provides essential &quot;Quality Discipline.&quot; We ensure your startup has the structural integrity to scale rather than stall.
              </p>
            </div>

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
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  48hr
                </div>
                <div className="text-sm text-gray-600">Rapid Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  99.5%
                </div>
                <div className="text-sm text-gray-600">Launch Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  20+
                </div>
                <div className="text-sm text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Agile Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - LaunchFast QA Animation */}
          <div className="relative flex justify-center items-center">
            <LaunchFastQAAnimation />
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

export default LaunchFastQAHeroSection;
