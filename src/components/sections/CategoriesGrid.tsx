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

  return (
    <section ref={ref} id="categories" className="scroll-mt-20">
      {/* Search & Filter Bar */}
      <div
      className="mb-10"
    >
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Sort by:
              </span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer shadow-sm"
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
        <div className="mt-4 text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {sortedCategories.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-700">
            {categories.length}
          </span>{" "}
          categories
          {searchTerm && (
            <span>
              {" "}
              for &ldquo;
              <span className="font-semibold text-slate-900">{searchTerm}</span>
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
            {/* Hover glow effect */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
            />

            <Link
              href={`/blog/category/${category.id}`}
              className="relative block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 h-full"
            >
              {/* Card Header with Gradient */}
              <div
                className={`relative bg-gradient-to-r ${category.color} p-5 overflow-hidden`}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Icon */}
                <div className="relative flex items-center justify-between">
                  {(() => {
                    const IconComponent = getCategoryIcon(category.name);
                    return (
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    );
                  })()}
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <BookOpen className="w-3.5 h-3.5 text-white" />
                    <span className="text-sm font-bold text-white">
                      {category.postCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                  {category.description.replace(/<[^>]*>?/gm, "")}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
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
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            No categories found
          </h3>
          <p className="text-slate-500 mb-6">
            Try adjusting your search terms or browse all categories.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div
      className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white"
    >
        <h3 className="text-2xl font-bold mb-3">
          Can&apos;t find what you&apos;re looking for?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Our comprehensive testing blog covers everything from basic concepts
          to advanced techniques. Explore our latest articles or suggest a topic.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
        >
          Browse All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CategoriesGrid;
