// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaTag, FaBookOpen, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Tag } from "@/lib/sanity-data-adapter";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface TagHeroSectionProps {
  tag: Tag;
  postCount: number;
}

const TagHeroSection: React.FC<TagHeroSectionProps> = ({ tag, postCount }) => {
  // Light hero to match the rest of the site (white, brand-blue accents,
  // gray-900 heading). It used to be a purple/indigo gradient with pink
  // accents, a colour scheme used nowhere else on the site. Text, h1,
  // breadcrumb and both links are unchanged.
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden border-b border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: tag.name },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Tag Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 shrink-0 bg-sky-50 border border-sky-100 rounded-2xl">
                <FaTag className="w-7 h-7 text-[theme(color.brand.blue)]" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <span className="text-[theme(color.brand.blue)]">#</span>{tag.name}
                </h1>
                <p className="text-gray-700 text-lg">
                  Explore articles tagged with {tag.name}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-gray-700">
              <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full">
                <FaBookOpen className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span className="text-sm font-medium">
                  {postCount} {postCount === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full">
                <FaTag className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span className="text-sm font-medium">
                  {tag.count} Total Posts
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] bg-white font-semibold rounded-md hover:bg-sky-50 transition-colors duration-200"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <Link
              href="/blog/categories"
              className="flex items-center justify-center px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-md hover:shadow-xl transition-all duration-200"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Tag Description */}
        <div className="mt-8 max-w-3xl">
          <div className="bg-[theme(color.background.gray)] rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              Discover comprehensive guides, tutorials, and best practices related to{" "}
              <span className="font-semibold text-gray-900">{tag.name}</span>.
              Our expert-written articles cover everything from basic concepts to advanced techniques,
              helping you master this important aspect of software testing and quality assurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagHeroSection;

