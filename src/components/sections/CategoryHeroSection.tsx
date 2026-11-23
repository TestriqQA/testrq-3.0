// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface CategoryHeroSectionProps {
  category: Category;
}

// Helper to strip HTML tags from description
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>?/gm, "").trim();
};


const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({
  category,
}) => {

  // Light hero to match the rest of the site (white, brand-blue badge and
  // accent word, gray-900 heading — same as the /blog and case-studies heroes).
  // It used to be a dark gray-to-blue gradient with blurred orbs, the only dark
  // band on an otherwise light page. Text, h1 and breadcrumb are unchanged.
  return (
    <section className="bg-white text-gray-900 pt-8 pb-16 px-8 md:px-12 lg:px-24 relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}

        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: category.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Category Icon and Badge */}
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const IconComponent = getCategoryIcon(category.name);
                return (
                  <div className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-[theme(color.brand.blue)]" />
                  </div>
                );
              })()}
              <span className="px-4 py-2 bg-brand-blue text-white text-sm font-semibold rounded-full">
                {category.name} Category
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {category.name}{" "}
              <span className="text-[theme(color.brand.blue)]">
                Insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              {stripHtml(category.description)}
            </p>
          </div>

          {/* Right Content - Abstract Insight Visualization (light version) */}
          <div className="relative flex items-center justify-center p-2">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-100 shadow-sm flex items-center justify-center animate-fade-in overflow-hidden">
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-[theme(color.brand.blue)] rounded-full animate-spin-slow opacity-20"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border-2 border-sky-400 rounded-full animate-spin-reverse-slow opacity-30"></div>
              </div>

              {/* Data points/nodes */}
              <div className="absolute top-1/4 left-1/4 w-7 h-7 bg-brand-blue rounded-full shadow-md opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/4 w-7 h-7 bg-sky-400 rounded-full shadow-md"></div>
              <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-sky-300 rounded-full shadow-md"></div>
              <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-brand-blue rounded-full shadow-md opacity-60"></div>

              {/* Text overlay */}
              <div className="relative z-10 text-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Deep Insights
                </h3>
                <p className="text-[theme(color.brand.blue)] text-base">Unlocking Knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeroSection;
