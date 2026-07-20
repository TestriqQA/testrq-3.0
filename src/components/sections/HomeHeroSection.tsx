import React from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import ImageSlider from "../ImageSlider";
import { FaCertificate } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <span className="flex items-center gap-2 text-[theme(color.brand.blue)]">
            <FaHome className="text-lg" />
            Home
          </span>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          {/* Left Section */}
          <div className="w-full md:w-full text-center md:content-center xl:text-left">
            <div className="flex flex-wrap justify-center xl:justify-start gap-2">
              <div className="inline-flex items-center bg-brand-blue px-5 py-2 rounded-full gap-2">
                <FaCertificate className="text-white" />
                <span className="text-white text-base md:text-sm">
                  ISTQB Certified
                </span>
              </div>
              <div className="inline-flex items-center bg-brand-blue px-5 py-2 rounded-full gap-2">
                <FaCertificate className="text-white" />
                <span className="text-white text-base md:text-sm">
                  ISO 9001
                </span>
              </div>
              <div className="inline-flex items-center bg-brand-blue px-5 py-2 rounded-full gap-2">
                <FaCertificate className="text-white" />
                <span className="text-white text-base md:text-sm">
                  ISO 27001
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 mt-3">
              Global{" "}
              <span className="text-[theme(color.brand.blue)]">
                Software Testing
              </span>{" "}
              Services & QA Solutions
            </h1>

            <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-2xl mx-auto">
              With global regulations tightening and AI evolving rapidly, software needs more than just basic testing. Testriq delivers end-to-end <Link title="Quality Assurance Solutions" href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline">Quality Assurance</Link> to ensure your rapid development never compromises on reliability.
              We use DevSecOps and advanced quality engineering to reduce risk for global enterprises. As an ISTQB Certified partner, we serve clients across the US, UK, EU, India, Asia, and the UAE.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
              <Link title="contact-us" href="/contact-us">
                <button className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:scale-105 cursor-pointer w-full sm:w-auto">
                  <span className="text-base">Get Started Today</span>
                  <FaArrowRight className="w-4 h-5" />
                </button>
              </Link>
              {/* <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
                <FaPlay className="w-4 h-4" />
                Watch Demo
              </button> */}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
              {[
                ["15+", "Years of Experience"],
                ["500K", "Test Cases Executed"],
                ["180", "Certified Experts"],
                ["100%", "Client Satisfaction"],
                ["24/7", "Availability"],
              ].map(([value, label], i) => (
                <div key={i} className="text-center">
                  <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-gray-700 text-base ">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center text-center mt-20 md:mt-24 xl:mt-20 xl:w-1/2 lg:[my-10] md:my-10">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
