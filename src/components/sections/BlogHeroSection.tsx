"use client";

import React, { useEffect, useState } from "react";
import { FaSearch, FaArrowRight, FaCalendarAlt, FaBookOpen, FaUsers, FaAward, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// `import type` on purpose — see the note in CategorySidebar.tsx. A value
// import from the adapter would pull its 20 MB content-snapshot import into
// this client component's browser bundle.
import type { Post } from "@/lib/sanity-data-adapter";
import { decodeHtmlEntities } from "@/lib/utils";
import { ChevronRight as ChevronRightIcon, Home } from "lucide-react";

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;
    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

// The category chips ("Browse by topic") and everything that fed them — the
// icon map, the All Posts pseudo-category and the categories prop — were
// removed: the sticky BlogCategoryNav bar above the page now does that job.

interface BlogHeroSectionProps {
  /** Total published posts, counted by the server page. */
  totalPosts: number;
  /** Total categories, counted by the server page. */
  totalCategories: number;
  /** Most recent post, or null when none could be loaded. */
  latestPost: Post | null;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({
  totalPosts,
  totalCategories,
  latestPost,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();

  const animatedPosts = useCountUp(totalPosts, 2500);
  const animatedCategories = useCountUp(totalCategories, 2500);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const cleanExcerpt = (excerpt: string) => {
    const textOnly = excerpt.replace(/<[^>]*>?/gm, '');
    return decodeHtmlEntities(textOnly);
  };

  // Light theme to match the rest of the site (white hero, brand-blue accents,
  // gray-900 headings — same tokens as CaseStudiesHeroSection / HomeProcesses).
  // The dark navy "futuristic" treatment (gradient orbs, grid, scan line) was
  // the only one of its kind on the site. Copy, links, the single <h1> and the
  // search form are unchanged; only the styling moved.
  return (
    <section className="relative bg-white text-gray-900 pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[theme(color.brand.blue)]">Blog</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Side - Content (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full">
              <FaStar className="w-3.5 h-3.5" />
              <span className="text-sm">16+ Years of Testing Excellence</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Insights & Expertise in{" "}
                <span className="text-[theme(color.brand.blue)]">Software Testing</span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
                Discover expert articles, hands-on tutorials, and proven best practices
                from our ISTQB-certified QA professionals.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} role="search" className="w-full max-w-2xl">
              <label htmlFor="blogHero-search" className="sr-only">
                Search blog articles
              </label>
              <div
                className={`flex items-center bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${isSearchFocused
                  ? "border-[theme(color.brand.blue)] ring-2 ring-sky-100"
                  : "border-gray-200"
                  }`}
              >
                <div className="pl-4 pr-2">
                  <FaSearch className="w-4 h-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="blogHero-search"
                  type="search"
                  name="q"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search articles, tutorials, guides..."
                  className="w-full px-2 py-3.5 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-base"
                />
                <button
                  type="submit"
                  className="m-1.5 px-6 py-2.5 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 w-full max-w-2xl">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <FaBookOpen className="w-5 h-5 text-[theme(color.brand.blue)]" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">{animatedPosts}+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <FaAward className="w-5 h-5 text-[theme(color.brand.blue)]" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">{animatedCategories}+</div>
                  <div className="text-sm text-gray-600">Topics</div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-[theme(color.brand.blue)]" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">10K+</div>
                  <div className="text-sm text-gray-600">Readers</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#all-articles"
                className="group inline-flex items-center justify-center gap-2 py-3 px-6 bg-[theme(color.brand.blue)] text-white font-semibold text-base rounded-md hover:shadow-xl transition-all duration-200"
              >
                Explore Articles
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-[theme(color.brand.blue)] font-semibold text-base rounded-md border border-[theme(color.brand.blue)] hover:bg-sky-50 transition-colors duration-200"
              >
                Talk to Experts
              </Link>
            </div>
          </div>

          {/* Right Side - Latest Post Card (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            {latestPost ? (
              <div className="group relative w-full max-w-md lg:max-w-none bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 flex flex-col">
                {/* Latest badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-full shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Latest Post
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
                  <Image
                    src={latestPost.image}
                    alt={latestPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-2">
                    {/* Category */}
                    <Link href={`/blog/category/${latestPost.categorySlug}`}>
                      <span className="inline-block mb-2 px-3 py-1 bg-sky-50 text-[theme(color.brand.blue)] text-xs font-medium rounded-full border border-sky-100 hover:bg-sky-100 transition-colors">
                        {latestPost.category}
                      </span>
                    </Link>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-[theme(color.brand.blue)] transition-colors leading-tight">
                      <Link href={`/blog/post/${latestPost.id}`}>{latestPost.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 line-clamp-2 text-sm lg:text-base leading-relaxed">
                      {cleanExcerpt(latestPost.excerpt)}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <Image
                        src={latestPost.authorImage}
                        alt={latestPost.author}
                        width={40}
                        height={40}
                        className="rounded-full ring-2 ring-sky-100"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{latestPost.author}</div>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            {latestPost.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/post/${latestPost.id}`}
                      className="flex items-center justify-center w-11 h-11 bg-[theme(color.brand.blue)] rounded-xl text-white hover:bg-sky-800 transition-colors group/btn"
                      aria-label="Read article"
                    >
                      <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              // Skeleton loader
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full animate-pulse w-full max-w-md lg:max-w-none">
                <div className="h-56 sm:h-60 bg-gray-200" />
                <div className="p-5 space-y-4">
                  <div className="h-5 bg-gray-200 rounded-full w-20" />
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded-lg w-full" />
                    <div className="h-6 bg-gray-200 rounded-lg w-3/4" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded-lg w-full" />
                    <div className="h-4 bg-gray-100 rounded-lg w-2/3" />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-24" />
                      <div className="h-3 bg-gray-100 rounded w-32" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* The <style jsx> block that lived here (scan + gradient keyframes) now
          sits in globals.css. styled-jsx injects its CSS from a client runtime at
          hydration, which prevented /blog from being server-rendered. */}
    </section>
  );
};

export default BlogHeroSection;
