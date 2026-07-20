"use client";

import React, { useState } from "react";
import { FaArrowRight, FaLaptopCode, FaPlay } from "react-icons/fa";
import Link from "next/link";
import Lightbox from "../VideoLightBox";
import Breadcrumb from "@/components/ui/Breadcrumb";
import WebAppTestingAnimation from "@/components/sections/WebAppTestingAnimation";

const WebappTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="bg-white text-black pt-8 pb-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Web Application Testing" }]} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center mx-auto xl:text-left xl:mx-0">

            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaLaptopCode />
              <span className="text-sm">Web Application Testing Experts</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-[theme(color.brand.blue)]">
                Global Web Application Testing Services:&nbsp;
              </span><br className="md:hidden" />
              Engineering Secure and Scalable Digital Experiences
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              In the digital-first economy of 2026, a web application is only as strong as its weakest line of code. At Testriq, we provide comprehensive <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline">web application testing</Link>. Our manual specialists and automated frameworks ensure your platform stays secure, high-performing, and resilient. As a premier testing partner, we bridge the gap between <Link href="/launchfast-qa" className="text-[theme(color.brand.blue)] underline">rapid development</Link> and reliability through continuous software testing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
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
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["50+", "Web Apps Tested"],
                ["99.9%", "Bug Detection Rate"],
                ["48 hr", "Average Turnaround"],
                ["24/7", "Support Available"],
              ].map(([value, label], i) => (
                <div key={i} className="text-center xl:text-left">
                  <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-gray-700 text-base">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Web App Testing Animation */}
          <div className="hidden lg:block p-6">
            <WebAppTestingAnimation />
          </div>
        </div>
        {/* Lightbox Modal */}
        <Lightbox
          isOpen={isLightboxOpen}
          videoLink="https://yourvideolink.com"
          onClose={closeLightbox}
        />
      </div>
    </section>
  );
};

export default WebappTestingHeroSection;