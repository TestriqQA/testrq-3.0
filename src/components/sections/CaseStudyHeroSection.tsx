import React from "react";
import { FaCalendarAlt, FaIndustry, FaHome, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { CaseStudy } from "@/lib/sanity-data-adapter";
import Image from "next/image";

interface CaseStudyHeroSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({
  caseStudy,
}) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <Link
            href="/case-studies"
            className="hover:text-[theme(color.brand.blue)] transition-colors"
          >
            Case Studies
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-[theme(color.brand.blue)] truncate max-w-[200px] sm:max-w-md">
            {caseStudy.title}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[theme(color.brand.blue)] px-4 py-2 rounded-full shadow-sm">
                <FaIndustry className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {caseStudy.industry}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[theme(color.brand.blue)] px-4 py-2 rounded-full shadow-sm">
                <FaCalendarAlt className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {caseStudy.duration}
                </span>
              </div>
            </div>

            {/* Title - Fixed: Changed from h1 to h2 to avoid duplicate H1 tags */}
            {/* The page title (H1) is now handled by the document head/metadata */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            {/* Client */}
            <p className="text-xl text-gray-600 mb-6">
              Client:{" "}
              <span className="font-semibold text-gray-800">
                {caseStudy.client}
              </span>
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Key Results Preview */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.bugReduction}
                </div>
                <div className="text-sm text-gray-600">Bug Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.performanceImprovement}
                </div>
                <div className="text-sm text-gray-600">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.roi}
                </div>
                <div className="text-sm text-gray-600">ROI</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className={`rounded-2xl p-8 h-96 flex items-center justify-center ${caseStudy.id === 'caseStudy-ragnar-case-study'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900'
              : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
              {/* `justify-center` centers along a flex-col's main axis
                  (vertical) — it does nothing for horizontal alignment.
                  `items-center` is the cross-axis property that actually
                  centers the logo/caption pair. Without it, a logo whose
                  object-contain width comes out narrower than the 300px box
                  (any client mark that isn't itself ~3:2) sits flush against
                  one edge instead of centered — invisible for a logo that
                  happens to fill the full width, visible for one that doesn't. */}
              <div className="flex justify-center items-center flex-col text-center">
                <Image
                  title={caseStudy.client}
                  src={caseStudy.image}
                  alt={`${caseStudy.client} Case Study - ${caseStudy.title}`}
                  width={300}
                  height={200}
                  className="object-contain"
                  priority
                />
                <p className="text-gray-600 text-xl py-5">
                  {caseStudy.industry} Success Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroSection;

