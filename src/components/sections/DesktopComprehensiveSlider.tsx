"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDesktop,
  FaApple,
  FaLinux,
  FaWindows,
  FaTools,
} from "react-icons/fa";

const DesktopComprehensiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Windows Application Testing",
      description:
        "Comprehensive testing for Windows desktop applications across all versions and configurations.",
      icon: <FaWindows className="w-16 h-16" />,
      features: [
        "Windows 10/11 compatibility",
        "Legacy system support",
        ".NET framework testing",
        "Registry and file system validation",
        "Windows-specific UI testing",
      ],
      image: "/api/placeholder/600/400",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "macOS Application Testing",
      description:
        "Expert testing services for macOS desktop applications with native functionality validation.",
      icon: <FaApple className="w-16 h-16" />,
      features: [
        "macOS version compatibility",
        "Cocoa framework testing",
        "App Store compliance",
        "Security sandbox validation",
        "Native UI/UX testing",
      ],
      image: "/api/placeholder/600/400",
      color: "from-gray-600 to-gray-800",
    },
    {
      title: "Linux Application Testing",
      description:
        "Thorough testing for Linux desktop applications across multiple distributions and environments.",
      icon: <FaLinux className="w-16 h-16" />,
      features: [
        "Multi-distribution testing",
        "Package manager validation",
        "Desktop environment compatibility",
        "Command-line interface testing",
        "Open-source compliance",
      ],
      image: "/api/placeholder/600/400",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Cross-Platform Testing",
      description:
        "Ensure consistent functionality and user experience across all desktop platforms.",
      icon: <FaDesktop className="w-16 h-16" />,
      features: [
        "Multi-platform consistency",
        "Shared codebase validation",
        "Platform-specific feature testing",
        "Performance comparison",
        "User experience standardization",
      ],
      image: "/api/placeholder/600/400",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">
              Platform Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Desktop Testing Across{" "}
            <span className="text-brand-blue">All Platforms</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-2">
            Our comprehensive desktop testing services cover all major platforms
            and operating systems, ensuring your application works flawlessly
            everywhere.
          </p>
        </div>

        <div className="relative px-2 sm:px-6">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} text-white`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 md:p-20">
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-white opacity-80">
                            {slide.icon}
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                            {slide.title}
                          </h3>
                        </div>

                        <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="space-y-3 mb-6 sm:mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-2 text-sm sm:text-base"
                            >
                              <div className="w-2 h-2 mt-2 bg-white rounded-full"></div>
                              <span className="text-white opacity-90">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="w-64 h-48 sm:w-80 sm:h-60 bg-opacity-20 rounded-xl backdrop-blur-sm border border-white border-opacity-30 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                              <div className="mb-4">{slide.icon}</div>
                              <div className="text-white font-semibold">
                                <Link href='blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices'>Platform Testing</Link>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold">QA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-md cursor-pointer"
              aria-label="Previous Slide"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-md cursor-pointer"
              aria-label="Next Slide"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 pt-8 border-t border-gray-200">
          {[
            { number: "15+", label: "Platforms Supported" },
            { number: "500+", label: "Apps Tested" },
            { number: "99.8%", label: "Compatibility Rate" },
            { number: "24/7", label: "Testing Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-blue mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopComprehensiveSlider;
