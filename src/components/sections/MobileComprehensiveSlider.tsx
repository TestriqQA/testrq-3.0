"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMobile,
  FaTabletAlt,
  FaTools,
} from "react-icons/fa";

const MobileComprehensiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (<Link href='blog/post/what-are-the-testing-tools-for-ios-app-testing'>iOS Application Testing</Link>),
      description:
        "Comprehensive testing for iOS applications across all Apple devices and iOS versions.",
      icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Apple Logo" viewBox="0 0 24 24" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path></svg>,
      features: [
        "iPhone & iPad compatibility",
        "iOS version testing (12.0 - 17.x)",
        "App Store compliance",
        "TestFlight beta testing",
        "Native iOS UI/UX validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-gray-700 to-gray-900",
    },
    {
      title: (<Link href='blog/post/ios-vs-android-testing-key-differences-every-qa-should-know'>Android Application Testing</Link>),
      description:
        "Expert testing services for Android applications across diverse devices and Android versions.",
      icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" aria-label="Android Logo" viewBox="0 0 24 24" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"></path></svg>,
      features: [
        "Multi-device compatibility",
        "Android 7.0 - 14.0 testing",
        "Google Play Store compliance",
        "Custom ROM testing",
        "Material Design validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-green-500 to-green-700",
    },
    {
      title: (<Link href='blog/post/cross-platform-regression-testing-ensuring-consistency-across-devices-os'>Cross-Platform Testing</Link>),
      description:
        "Ensure consistent functionality and user experience across both iOS and Android platforms.",
      icon: <FaMobile className="w-12 h-12" />,
      features: [
        "React Native & Flutter apps",
        "Xamarin & Ionic testing",
        "Hybrid app validation",
        "Platform-specific feature testing",
        "Consistent UX validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: (<Link href='blog/post/battery-power-testing-for-smart-devices-optimization-guide'>Tablet & Wearable Testing</Link>),
      description:
        "Specialized testing for tablets, smartwatches, and other mobile form factors.",
      icon: <FaTabletAlt className="w-12 h-12" />,
      features: [
        "iPad & Android tablet testing",
        "Apple Watch & Wear OS",
        "Responsive design validation",
        "Touch & gesture testing",
        "Screen orientation testing",
      ],
      image: "/api/placeholder/600/400",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Platform Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mobile Testing Across{" "}
            <span className="text-[theme(color.brand.blue)]">
              All Platforms
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our comprehensive mobile app testing services cover all major
            platforms and devices, ensuring your application performs flawlessly
            across the <Link href='blog/post/what-are-the-testing-tools-for-ios-app-testing'>iOS</Link>, <Link href='blog/post/ios-vs-android-testing-key-differences-every-qa-should-know'>Android</Link>, and cross-platform app mobile ecosystem.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} text-white`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 lg:p-20">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-white opacity-80">
                            {slide.icon}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold">
                            {slide.title}
                          </h3>
                        </div>

                        <p className="text-lg mb-8 opacity-90 leading-relaxed">
                          {slide.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-white opacity-90">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit cursor-pointer">
                          Learn More
                        </button>
                      </div>

                      {/* Right Content - Visual */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Mobile Device Mockups */}
                          <div className="flex justify-center gap-4">
                            <div className="w-24 h-44 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-30 p-2">
                              <div className="w-full h-full bg-white bg-opacity-30 rounded-xl flex items-center justify-center">
                                <div className="text-black opacity-60">
                                  {slide.icon}
                                </div>
                              </div>
                            </div>
                            <div className="w-24 h-44 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-30 p-2 mt-4">
                              <div className="w-full h-full bg-white bg-opacity-30 rounded-xl flex items-center justify-center">
                                <div className="text-black font-bold opacity-60 text-sm">
                                  Testing
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold">QA</span>
                          </div>

                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold text-xs">
                              ✓
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1 lg:left-4 top-10 lg:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 lg:right-4 top-10 lg:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Next Slide"
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                ? "bg-[theme(color.brand.blue)] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
                } cursor-pointer`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          {[
            { number: "50+", label: "Device Models" },
            { number: "1000+", label: "Apps Tested" },
            { number: "99.9%", label: "Compatibility Rate" },
            { number: "12hr", label: "Average Turnaround" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileComprehensiveSlider;
