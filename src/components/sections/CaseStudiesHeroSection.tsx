'use client'
import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaAward,
  FaTrophy,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

const scrollToCaseStudies = () => {
  const element = document.getElementById("case-studies-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const CaseStudiesHeroSection = () => {
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
            Case Studies
          </span>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          {/* Left Section */}
          <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
              <FaTrophy />
              <span className="text-sm">Proven Success Stories</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {/* Desktop Text */}
              <span className="hidden md:block">
                <span className="text-[theme(color.brand.blue)]">
                  Real-World Software Testing <br />
                </span>
                Case Studies
              </span>
              {/* Mobile Text */}
              <span className="md:hidden">
                Client{" "}
                <span className="text-[theme(color.brand.blue)]">
                  Success Stories & Case Studies
                </span>
              </span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
              Discover how our comprehensive software testing services have
              transformed businesses across industries. From startups to Fortune 500
              companies, explore real results, measurable improvements, and success
              stories that showcase our expertise in delivering exceptional QA
              solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
              <button onClick={scrollToCaseStudies} className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-xl transition-all duration-200 cursor-pointer w-full sm:w-auto">
                <span className="text-base">View Case Studies</span>
                <FaArrowRight className="w-4 h-5" />
              </button>

            </div>

            {/* Stats */}
            {/* 5 stats in one row from lg up. Was flex-wrap, which fitted four and
                dropped "24/7 Support Success" onto a second line on its own. A
                fixed 5-column grid keeps them on one line and keeps the columns
                aligned; the long labels wrap inside their own cell instead. */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center xl:justify-items-start lg:mx-0">
              {[
                ["500+", "Successful Projects"],
                ["99%", "Bug Reduction Rate"],
                ["75%", "Faster Time-to-Market"],
                ["100%", "Client Satisfaction"],
                ["24/7", "Support Success"],
              ].map(([value, label], i) => (
                <div key={i} className="text-center">
                  <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-gray-700 text-base">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Success Icons */}
          <div className="w-full mt-20 md:w-2/3 xl:w-2/3 lg:my-10 md:my-10 max-w-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <FaChartLine className="w-12 h-12 text-[theme(color.brand.blue)] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Growth</h3>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <FaUsers className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Clients</h3>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <FaAward className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHeroSection;
