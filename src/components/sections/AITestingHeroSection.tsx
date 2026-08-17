// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRobot, FaHome, FaChevronRight } from "react-icons/fa";
import AITestingAnimation from "./AITestingAnimation";

const AITestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black pt-8 pb-24 lg:pb-32 px-8 md:px-12 lg:px-24 overflow-x-clip">
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
            AI Application Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaRobot />
              <span className="text-sm">AI Application Testing Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Global <span className="text-[theme(color.brand.blue)]">AI Application Testing</span> Services
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700">Reliable Systems for the Future</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              By 2026, the global AI testing market has grown to over $757 billion. The rise of Generative AI fuels this growth. As companies move from small pilots to full-scale use, <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">traditional software quality assurance</Link> is no longer enough. The &quot;black box&quot; nature of AI means we must move from simple bug-hunting to advanced, risk-based validation.
              <br /><br />
              At Testriq, our <span className="text-[theme(color.brand.blue)] font-semibold">AI Application Testing Services</span> help you make sure your models are safe, fair, and compliant. We connect ML Ops with Quality Assurance. This provides the clear tracking you need for high-stakes AI in sectors like <Link href="/banking-finance-industry-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Finance</Link>, <Link href="/healthcare-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Healthcare</Link>, and Critical Infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/contact-us"
                title="Get Started Today – Testriq QA Lab"
                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
              >
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["150+", "AI Models Tested"],
                ["99.5%", "Bias Detection Rate"],
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

          {/* Right Content - AI Model Testing Dashboard */}
          <div className="relative mt-8 xl:mt-0 flex justify-center">
            <AITestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITestingHeroSection;
