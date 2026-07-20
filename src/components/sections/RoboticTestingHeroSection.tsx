// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";
import RoboticTestingAnimation from "./RoboticTestingAnimation";

const RoboticTestingHeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24">
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
            Robotic Testing
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaRobot />
              <span className="text-sm">Robotic Testing Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Robotics Testing Services:{" "}
              <span className="text-brand-blue">
                Engineering Safety & Performance
              </span>{" "}
              for the 2026 Automation Era
            </h1>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                As robotics transforms the global economy, Testriq ensures your <Link href="/ai-application-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">autonomous systems</Link> stay ahead. We provide specialized testing to guarantee safety and compliance in even the most un-predictable environments. From industrial co-bots to service-oriented humanoids, our <span className="text-[theme(color.brand.blue)] font-semibold">robotic testing</span> methodology bridges the gap between <Link href="/data-analysis-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">digital simulation</Link> and physical deployment.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed italic font-medium">
                &quot;Companies must analyze robotics rigorously as the industry moves toward &apos;Physical AI&apos; and advanced automation. Our team of specialized robotics technicians leverages decades of experience to deliver testing solutions that satisfy both technical performance and stringent international safety standards.&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                title="Start Your Robotics Project – Testriq"
                className="inline-flex items-center gap-2 px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-brand-blue transition-all duration-300"
              >
                <span>Get Started Today</span>
                <FaArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 text-center xl:text-left">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  ISO
                </div>
                <div className="text-gray-600 text-xs font-semibold">10218-1:2026</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
                  99.8%
                </div>
                <div className="text-gray-600 text-xs font-semibold">Deployment Success</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  Physical
                </div>
                <div className="text-gray-600 text-xs font-semibold">AI Driven QA</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-green-500">
                  HAZOP
                </div>
                <div className="text-gray-600 text-xs font-semibold">Risk Validated</div>
              </div>
            </div>
          </div>

          {/* Right Side - Robotic Testing Illustration */}
          <div className="relative">
            <RoboticTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticTestingHeroSection;
