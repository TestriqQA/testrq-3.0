"use client";

import React, { useState } from "react";
import { FaArrowRight, FaPlay, FaMobile, FaHome, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Lightbox from "../VideoLightBox";
import MobileTestingAnimation from "./MobileTestingAnimation";

const MobileTestingHeroSection: React.FC = () => {
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
            Mobile Application Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaMobile />
              <span className="text-sm">Mobile Application Testing Experts</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 text-left">
              Global{" "}
              <span className="text-[theme(color.brand.blue)]">
                Mobile-App Testing&nbsp;
              </span>
              Services: Ensuring Cross-Platform Excellence in 2026
            </h1>

            <div className="space-y-4 mb-6 text-left">
              <p className="text-gray-700 text-base md:text-lg">
                In the hyper-competitive mobile landscape of 2026, a single crash can lead to an <span className="font-semibold">88% uninstall rate</span> within the first 72 hours. At Testriq, we provide comprehensive <Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest" className="text-brand-blue underline">mobile app testing</Link> and <Link href="/automation-testing-services" className="text-brand-blue underline">application quality assurance</Link> designed to safeguard your digital presence. Our team specializes in mobile app QA for a global market, managing the testing challenges of over 24,000 <Link href="/blog/post/solving-the-top-5-challenges-in-mobile-application-testing" className="text-brand-blue underline">Android device combinations</Link> alongside the <Link href="/blog/post/ios-vs-android-testing-key-differences-every-qa-should-know" className="text-brand-blue underline">newest iOS 18/19 versions</Link>.
              </p>
              <p className="text-gray-700 text-base md:text-lg">
                Testriq uses global benchmarks to deliver secure, <Link href="/performance-testing-services" className="text-brand-blue underline">high-performance</Link> mobile apps. Our methodology defends against the 150% rise in mobile ransomware and optimizes software for <Link href="/blog/post/5g-mobile-app-testing-strategies-for-smooth-performance-in-2025" className="text-brand-blue underline">5G</Link> and edge computing. From our Singapore hub, we deliver global <Link href="/security-testing" className="text-brand-blue underline">Android security and penetration testing</Link>. Our strategies ensure a flawless launch in any market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/contact-us"
                title="Get Started Today – Testriq QA Lab"
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
                ["1000+", "Mobile Apps Tested"],
                ["99.9%", "Bug Detection Rate"],
                ["12 hr", "Average Turnaround"],
              ].map(([stat, label], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    {stat}
                  </div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="flex justify-center xl:justify-end">
            <div className="relative w-full max-w-lg">
              <MobileTestingAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <span className="text-sm text-gray-500">
            Trusted by leading mobile app companies
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-6">
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">App Store</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Play Store</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Enterprise</span>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Startups</span>
            </div>
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

export default MobileTestingHeroSection;
