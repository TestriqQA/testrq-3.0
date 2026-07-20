import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaHome, FaChevronRight } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";

const AboutHeroSection = () => {
  return (
    <section className="bg-white pt-8 pb-16 px-8 md:px-12 lg:px-24">
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
            About Us
          </span>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-4">
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

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Pioneering{" "}
              <span className="text-[theme(color.brand.blue)]">
                Quality <br /> Assurance&nbsp;
              </span>
              Excellence
            </h1>

            <p className="mt-4 xl:mt-0 text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
              Testriq QA Lab LLP is a globally trusted software testing company with
              over 15 years of experience. We deliver <Link title="QA Outsourcing Services" href="/qa-outsourcing-services">expert-led QA solutions</Link> across
              the <Link title="Understanding SDLC & STLC in QA Process" href="blog/post/understanding-the-sdlc-and-stlc-in-qa">SDLC</Link>, combining ISTQB-certified talent, <Link title="agile practices" href="blog/post/how-does-exploratory-testing-align-with-agile-methodology">agile practices</Link>, and a
              commitment to innovation and software quality.
            </p>

            {/* Key Points */}
            <div className="flex flex-col gap-3 mb-8 max-w-xl mx-auto xl:mx-0">
              {[
                "ISTQB Certified Testing Professionals",
                "500K+ Test Cases Successfully Executed",
                "15+ Years of  Testing Industry Experience",
                "Trusted by Startups to Enterprise Leaders",
              ].map((point, index) => (
                <div key={index} className="flex items-center md:justify-center xl:justify-start gap-3 text-left">
                  <FaCheckCircle className="text-[theme(color.brand.blue)] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image/Visual */}
          <div className="w-full xl:w-1/2 mt-8 xl:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-white w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Quality First
                  </h2>
                  <p className="text-gray-600 text-sm px-4">
                    Every project we undertake is driven by our commitment to
                    excellence
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    500K+
                  </div>
                  <div className="text-sm text-gray-600">Test Cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
