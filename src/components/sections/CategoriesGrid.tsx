"use client";

import React, { useState, useRef } from "react";
import { Search, SlidersHorizontal, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface CategoriesGridProps {
  categories: Category[];
}

const CategoriesGrid: React.FC<CategoriesGridProps> = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const ref = useRef(null);  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "posts", label: "Most Articles" },
    { value: "name", label: "Alphabetical" },
    { value: "subscribers", label: "Most Readers" },
  ];

  // Filter categories
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "posts":
        return b.postCount - a.postCount;
      case "name":
        return a.name.localeCompare(b.name);
      case "subscribers":
        return (b.subscribers || 0) - (a.subscribers || 0);
      default:
        return (
          (b.postCount || 0) * 10 +
          (b.subscribers || 0) -
          ((a.postCount || 0) * 10 + (a.subscribers || 0))
        );
    }
  });

  // Restyled to the light theme to match the rest of the site: #F5F5F5 band,
  // white cards with a brand-blue icon tile (no per-category gradients), sky
  // chips and brand-blue buttons. Text on the grey band is gray-600 or darker
  // (gray-500 on #F5F5F5 is 4.43:1 and fails AA).
  return (
    <section ref={ref} id="categories" className="scroll-mt-20 bg-[theme(color.background.gray)] rounded-2xl p-4 sm:p-6">
      {/* Search & Filter Bar */}
      <div
      className="mb-10"
    >
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-[theme(color.brand.blue)] focus:ring-2 focus:ring-sky-100 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-600">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Sort by:
              </span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-900 focus:border-[theme(color.brand.blue)] focus:ring-2 focus:ring-sky-100 focus:outline-none cursor-pointer shadow-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {sortedCategories.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {categories.length}
          </span>{" "}
          categories
          {searchTerm && (
            <span>
              {" "}
              for &ldquo;
              <span className="font-semibold text-gray-900">{searchTerm}</span>
              &rdquo;
            </span>
          )}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sortedCategories.map((category, index) => (
          <div
      key={category.id}
      className="group relative"
    >
            <Link
              href={`/blog/category/${category.id}`}
              className="relative block bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Card Header */}
              <div
                className="relative p-5 pb-0"
              >
                {/* Icon */}
                <div className="relative flex items-center justify-between">
                  {(() => {
                    const IconComponent = getCategoryIcon(category.name);
                    return (
                      <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl text-[theme(color.brand.blue)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    );
                  })()}
                  <div className="flex items-center gap-1.5 bg-sky-50 text-[theme(color.brand.blue)] border border-sky-100 rounded-full px-3 py-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="text-sm font-bold">
                      {category.postCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                  {category.description.replace(/<[^>]*>?/gm, "")}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-sky-50 text-[theme(color.brand.blue)] border border-sky-100 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[theme(color.brand.blue)]">
                  <span>Explore Articles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedCategories.length === 0 && (
        <div
      className="text-center py-16"
    >
          <div className="w-16 h-16 bg-sky-50 border border-sky-100 rounded-2xl text-[theme(color.brand.blue)] flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No categories found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or browse all categories.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-md hover:shadow-xl transition-all cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div
      className="mt-12 bg-[theme(color.brand.blue)] rounded-2xl p-8 text-center text-white shadow-sm"
    >
        <h3 className="text-2xl font-bold mb-3">
          Can&apos;t find what you&apos;re looking for?
        </h3>
        <p className="text-sky-50 mb-6 max-w-2xl mx-auto">
          Our comprehensive testing blog covers everything from basic concepts
          to advanced techniques. Explore our latest articles or suggest a topic.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-md hover:shadow-xl transition-all"
        >
          Browse All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesGrid;
