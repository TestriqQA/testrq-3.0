// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaChartLine,
  FaArrowRight,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import DataAnalysisAnimation from "./DataAnalysisAnimation";

const DataAnalysisHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 pt-8 pb-16 overflow-hidden px-8 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto">
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
            Data Analysis Services
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
              <FaChartLine className="mr-2" />
              Professional Data Analysis Services
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Global Data Analysis Services: Driving{" "}
                <span className="text-brand-blue">Prescriptive Intelligence</span> Through Advanced Data Evaluation
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Accuracy is the new competitive edge in 2026. We analyze complex data sets to help you make smarter business decisions. Our <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">data analytics services</Link> bridge the gap between your data silos and your long-term business goals.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We analyze your data to provide everything from initial trends to <span className="font-bold underline decoration-brand-blue">prescriptive insights</span>. Our team of certified scientists uses an <Link href="/qa-documentation-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">ISO-aligned framework</Link> to ensure your data is accurate and <Link href="/security-testing" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">globally compliant</Link>. Whether you are a startup or a global firm, Testriq delivers the <Link href="/technology-stack" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">technical depth</Link> you need. We help you win in a data-first economy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg">
                  Start Data Analysis
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Analytics Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">
                  Data Points Analyzed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.5%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Data Monitoring</div>
              </div>
            </div>
          </div>
          {/* Right Content - Animated Analytics Dashboard */}
          <div className="relative">
            <DataAnalysisAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisHeroSection;
