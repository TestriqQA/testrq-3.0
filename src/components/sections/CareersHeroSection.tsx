"use client";

import Link from "next/link";
import React from "react";
import {
  FaRocket,
  FaUsers,
  FaGlobe,
  FaTrophy,
  FaArrowRight,
  FaStar,
  FaCode,
  FaShieldAlt,
  FaMobile,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";

const CareersHeroSection: React.FC = () => {
  const companyStats = [
    {
      icon: FaUsers,
      value: "180+",
      label: "Team Members",
      description: "QA experts worldwide",
    },
    {
      icon: FaGlobe,
      value: "25+",
      label: "Countries",
      description: "Global Service Delivery",
    },
    {
      icon: FaRocket,
      value: "500+",
      label: "Projects",
      description: "Successfully delivered",
    },
    {
      icon: FaTrophy,
      value: "98%",
      label: "Satisfaction",
      description: "Client satisfaction rate",
    },
  ];

  const floatingIcons = [
    { icon: FaCode, position: "top-20 left-20", delay: "0s" },
    { icon: FaShieldAlt, position: "top-32 right-32", delay: "1s" },
    { icon: FaMobile, position: "bottom-40 left-16", delay: "2s" },
    { icon: FaStar, position: "bottom-20 right-20", delay: "0.5s" },
  ];

  const scrollToOpenPostions = () => {
    const element = document.getElementById("open-positions-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <section className="relative bg-white pt-8 pb-16 overflow-hidden px-8 md:px-12 lg:px-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-white"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[theme(color.brand.blue)] to-brand-blue opacity-10 rounded-full transform translate-x-48 -translate-y-48 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400 to-[theme(color.brand.blue)] opacity-10 rounded-full transform -translate-x-40 translate-y-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden w-12 h-12 bg-white bg-opacity-80 rounded-xl shadow-lg xl:flex items-center justify-center animate-bounce lg:flex`}
          style={{ animationDelay: item.delay, animationDuration: "3s" }}
        >
          <item.icon className="w-6 h-6 text-[theme(color.brand.blue)]" />
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb */}
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
            Careers
          </span>
        </div>

        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-8">
            <FaRocket className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              We&apos;re Hiring!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Shape the Future of
            <span className="block text-brand-blue">
              Software Quality
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join a passionate team of QA professionals who are revolutionizing software <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">quality assurance</Link>. Work on cutting-edge test <Link href="/automation-testing-services">automation</Link> projects, enhance your skills in <Link href="/manual-testing-services">manual testing</Link>, <Link href="/performance-testing-services">performance testing</Link>, and <Link href="/security-testing">security testing</Link>, and make a real impact on product quality, regulatory compliance, and user experience across global software applications.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={scrollToOpenPostions}
              className="group bg-[theme(color.brand.blue)] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <FaUsers className="w-5 h-5" />
              View Open Positions
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHeroSection;
