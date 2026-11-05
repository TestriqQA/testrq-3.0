import Link from "next/link";
import React from "react";
import { FaUsers, FaGraduationCap, FaGlobe, FaHome, FaChevronRight } from "react-icons/fa";

const TeamHeroSection = () => {
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
            Our Team
          </span>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaUsers />
              <span className="text-sm">
                Meet Our Team
              </span>
            </div>


            <h1 className="text-3xl md:block sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Exceptional{" "}
              <span className="text-[theme(color.brand.blue)]">
                Talent <br className="block 2xl:hidden" /> Driving&nbsp;
              </span>
              Innovation
            </h1>

            <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
              At Testriq QA Lab, our ISTQB-certified team brings decades of
              real-world experience in <Link title="automation testing services" href='automation-testing-services'>automation</Link>, <Link title="manual testing" href='/manual-testing-services'>manual</Link>, and <Link title="performance testing services" href='performance-testing-services'>performance testing</Link>.
              We&apos;re passionate about helping companies <Link title="launch faster" href='launchfast-qa'>launch faster</Link>, safer,
              and smoother software.
            </p>

            {/* Team Highlights */}
            <div className="space-y-3 max-w-xl mx-auto xl:mx-0">
              {[
                "ISTQB Certified Testing Professionals",
                "Average 8+ Years Industry Experience",
                "Expertise Across Multiple Domains",
                "Continuous Learning & Development Culture",
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-sm my-5 xl:mx-0">
              {[
                { icon: FaUsers, number: "180+", label: "Team Members" },
                { icon: FaGraduationCap, number: "40+", label: "Certifications" },
                { icon: FaGlobe, number: "15+", label: "Countries" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Team Visual */}
          <div className="w-full xl:w-1/2 mt-8 xl:mt-0 flex justify-center">
            <div className="relative">
              {/* Main Team Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Team Icon */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-white w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Our Team
                  </h2>
                  <p className="text-gray-600 text-sm px-4">
                    United by passion for quality and excellence
                  </p>
                </div>

                {/* Floating Team Member Avatars */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                </div>
                <div className="absolute top-12 right-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-16 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-8 -right-4 bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-sm text-white">Avg Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
