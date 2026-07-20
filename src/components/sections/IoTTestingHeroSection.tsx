"use client";
import { FaNetworkWired, FaArrowRight, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import Lightbox from "../VideoLightBox";
import IoTTestingAnimation from "./IoTTestingAnimation";

const IoTTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
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
          <span className="text-[theme(color.brand.blue)]">
            IoT Device Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaNetworkWired />
              <span className="text-sm">IoT Device Testing Experts</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Global{" "}
              <span className="text-[theme(color.brand.blue)]">
                IoT Testing Services:&nbsp;
              </span>
              Ensuring Reliability in a 21.1 Billion Connected Ecosystem
            </h1>

            <div className="space-y-4 mb-6">
              <p className="text-gray-700 text-base md:text-lg">
                The Internet of Things (IoT) landscape has reached a critical inflection point in 2026. As the number of global connected devices reaches <span className="font-semibold">21.1 billion</span>, providing seamless integrated testing services has become increasingly difficult. At Testriq, we offer expert <Link href="/iot-appliances-and-apps-testing-services" className="text-[theme(color.brand.blue)] underline">IoT testing</Link> to stop device failures and network lag, securing your hardware against major security breaches.
              </p>
              <p className="text-gray-700 text-base md:text-lg italic font-medium">
                &quot;Our smart device testing methodology goes beyond simple functional checks. From firmware & protocols to <Link href="/api-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">cloud APIs</Link> & edge computing, we deliver deep technical expertise across consumer wearables and industrial systems.&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/contact-us"
                title="Start Your IoT Project – Testriq"
                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-brand-blue hover:shadow-lg w-full sm:w-auto transition-colors"
              >
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
              </Link>
              <button
                onClick={openLightbox}
                className="flex justify-center items-center gap-2 py-2 px-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer sm:w-auto"
              >
                <FaPlay className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["21.1B+", "Connected Devices"],
                ["99.8%", "Stability Rate"],
                ["36 hr", "Turnaround Cycle"],
                ["ISO", "29119 Standards"],
              ].map(([value, label], i) => (
                <div key={i} className="text-center xl:text-left">
                  <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-gray-700 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - IoT Ecosystem Illustration */}
          <div className="relative">
            <IoTTestingAnimation />
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

export default IoTTestingHeroSection;
