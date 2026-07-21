"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import Lightbox from "../VideoLightBox";
import SmartDeviceTestingAnimation from "./SmartDeviceTestingAnimation";

const SmartDeviceTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 pt-8 pb-16 px-8 md:px-12 lg:px-24">
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
            Smart Device Testing
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <MdDevicesOther />
              <span className="text-sm">Smart Device Testing Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global Smart Device Testing Services:{" "}
              <span className="text-brand-blue">Engineering Trust</span> in the
              IoT Era
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2026, <Link href="blog/post/how-to-test-iot-devices-for-reliability-2" className="text-brand-blue font-semibold underline">smart device testing</Link> is a requirement for market entry, not a luxury. Testriq provides the quality assurance needed to navigate today’s connected world. We ensure your hardware—from sensors to chips—works perfectly to deliver a seamless user experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-brand-blue pl-4">
                &quot;Secure global certifications with our expert smart device validation. At Testriq, we validate everything from long-life health wearables to industrial IoT sensors. Our testing ensures your hardware is reliable and market-ready.&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Get Started Today – Testriq QA Lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-brand-blue transition-all duration-300"
              >
                <span>Get Started Today</span>
                <FaArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
              <button
                onClick={openLightbox}
                className="border cursor-pointer border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaPlay className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">
                  ISO
                </div>
                <Link href="/qa-documentation-services" className="text-gray-600 text-sm font-semibold hover:text-brand-blue hover:underline">29119-3 Compliant</Link>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">
                  99.8%
                </div>
                <div className="text-gray-600 text-sm font-semibold">
                  Uptime Reliability
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
                  $2.17B
                </div>
                <div className="text-gray-600 text-sm font-semibold">IoT QA Market</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  Global
                </div>
                <div className="text-gray-600 text-sm font-semibold">Expert Validation</div>
              </div>
            </div>
          </div>

          {/* Right Side - Smart Device Testing Illustration */}
          <div className="relative">
            <SmartDeviceTestingAnimation />
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

export default SmartDeviceTestingHeroSection;
