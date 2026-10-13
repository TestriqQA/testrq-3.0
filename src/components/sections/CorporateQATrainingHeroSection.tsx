// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaArrowRight,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import CorporateQATrainingAnimation from "./CorporateQATrainingAnimation";

const CorporateQATrainingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Corporate QA Training
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaGraduationCap className="mr-2" />
              Corporate Training Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global Corporate QA Training:
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Future-Proofing Teams
              </span>
              <span className="text-transparent block bg-clip-text bg-brand-blue">
                {" "}
                for 2026 & Beyond
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Upskill your QA team with Testriq’s corporate training programs. From manual testing fundamentals to <Link href="/blog" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">software QA training</Link>, <Link href="/automation-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">advanced quality engineering</Link>, and <Link href="/ai-application-testing" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">AI, hyper-automation</Link>, we customize curriculums to align with your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Start Training Program
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  300+
                </div>
                <div className="text-sm text-gray-600">
                  Professionals Trained
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  99.5%
                </div>
                <div className="text-sm text-gray-600">
                  Training Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  50+
                </div>
                <div className="text-sm text-gray-600">Companies Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Learning Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Training Dashboard */}
          <div className="relative">
            <CorporateQATrainingAnimation />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-10 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-10 animate-spin-reverse-slow"></div>
    </section>
  );
};

export default CorporateQATrainingHeroSection;
