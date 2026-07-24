"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaSearch, FaArrowRight, FaClock, FaCalendarAlt, FaBookOpen, FaUsers, FaAward, FaStar, FaCode, FaShieldAlt, FaRocket, FaMobile, FaDesktop, FaCloud, FaCog, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  sanityGetTotalPostCount as getTotalPostCount,
  sanityGetTotalCategoryCount as getTotalCategoryCount,
  sanityGetPosts as getLatestPosts,
  sanityGetCategories as getCategories,
  Post,
  Category
} from "@/lib/sanity-data-adapter";
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

// Category icons mapping
const categoryIcons: Record<string, React.ReactElement> = {
  'test automation': <FaCode className="w-3.5 h-3.5" />,
  'automation': <FaCode className="w-3.5 h-3.5" />,
  'performance testing': <FaRocket className="w-3.5 h-3.5" />,
  'performance': <FaRocket className="w-3.5 h-3.5" />,
  'security testing': <FaShieldAlt className="w-3.5 h-3.5" />,
  'security': <FaShieldAlt className="w-3.5 h-3.5" />,
  'mobile testing': <FaMobile className="w-3.5 h-3.5" />,
  'mobile': <FaMobile className="w-3.5 h-3.5" />,
  'web testing': <FaDesktop className="w-3.5 h-3.5" />,
  'web': <FaDesktop className="w-3.5 h-3.5" />,
  'cloud testing': <FaCloud className="w-3.5 h-3.5" />,
  'cloud': <FaCloud className="w-3.5 h-3.5" />,
  'qa analytics': <FaChartLine className="w-3.5 h-3.5" />,
  'analytics': <FaChartLine className="w-3.5 h-3.5" />,
  'all': <FaLayerGroup className="w-3.5 h-3.5" />,
  'default': <FaCog className="w-3.5 h-3.5" />
};

const getCategoryIcon = (categoryName: string): React.ReactElement => {
  const lowerName = categoryName.toLowerCase();
  if (lowerName === 'all posts') return categoryIcons.all;
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (lowerName.includes(key)) return icon;
  }
  return categoryIcons.default;
};

const BlogHeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [latestPost, setLatestPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  void (canScrollLeft);
  void (canScrollRight);

  const animatedPosts = useCountUp(totalPosts, 2500);
  const animatedCategories = useCountUp(totalCategories, 2500);

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [postCount, categoryCount, latestPosts, wpCategories] = await Promise.all([
        getTotalPostCount(),
        getTotalCategoryCount(),
        getLatestPosts(1),
        getCategories(),
      ]);
      setTotalPosts(postCount);
      setTotalCategories(categoryCount);
      if (latestPosts.length > 0) {
        setLatestPost(latestPosts[0]);
      }

      // Categories are already adapted
      const adaptedCategories = wpCategories;
      const totalPostsCount = adaptedCategories.reduce((sum: number, cat: Category) => sum + cat.postCount, 0);

      const allCategory: Category = {
        id: "all",
        name: "All Posts",
        description: "Browse all articles",
        color: "from-slate-500 to-slate-600",
        icon: "🏷️",
        postCount: totalPostsCount,
        subscribers: Math.floor(totalPostsCount * 25),
        tags: ["All"],
        featuredTools: [],
        seo: { title: "", description: "", keywords: "" }
      };

      setCategories([allCategory, ...adaptedCategories]);
      setIsLoaded(true);
    } catch {
      setTotalPosts(200);
      setTotalCategories(15);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [categories, checkScrollPosition]);

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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-scan" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs - Top Section */}
        <div className="pt-8 pb-4">
          <div className="flex flex-wrap gap-5 items-center">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                href={category.id === "all" ? "/blog" : `/blog/category/${category.id}`}
                className="group/card flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
              >
                <span className="text-blue-400 group-hover/card:text-blue-300 transition-colors">
                  {getCategoryIcon(category.name)}
                </span>
                <span className="text-sm font-medium text-slate-200 whitespace-nowrap group-hover/card:text-white transition-colors">
                  {category.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 group-hover/card:bg-blue-500/20 group-hover/card:text-blue-300 transition-all">
                  {category.postCount}
                </span>
              </Link>
            ))}

            {/* View All Categories Button */}
            <Link
              href="/blog/categories"
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-blue-300 whitespace-nowrap group-hover/btn:text-blue-200 transition-colors">
                View All Categories
              </span>
              <FaArrowRight className="w-3 h-3 text-blue-400 group-hover/btn:translate-x-0.5 group-hover/btn:text-blue-300 transition-all" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[85vh] items-start py-8 lg:py-0">

          {/* Left Side - Content (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 py-4">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex w-fit items-center gap-2"
            >
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              {/* Chevron */}
              <ChevronRightIcon className="w-4 h-4 text-[theme(color.brand.blue)]" />

              <span className="text-[theme(color.brand.blue)] font-semibold tracking-wide">
                Blog
              </span>
            </nav>


            {/* Premium Badge */}
            <div className="relative mt-2 w-fit inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 shadow-brand-blue shadow-sm animate-pulse overflow-hidden group">

              {/* Animated Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-indigo-500/30 opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />

              {/* Pulse Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
              </span>

              {/* Star Icon */}
              <FaStar className="relative w-4 h-4 text-cyan-300 drop-shadow-sm" />

              {/* Text */}
              <span className="relative text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                16+ Years of Testing Excellence
              </span>
            </div>


            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                Insights & Expertise in{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 animate-gradient">
                    Software Testing
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full blur-sm"></span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Discover expert articles, hands-on tutorials, and proven best practices
                from our ISTQB-certified QA professionals.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} role="search" className="w-full max-w-2xl">
              <label htmlFor="blogHero-search" className="sr-only">
                Search blog articles
              </label>
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.01]' : ''}`}>
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-2xl transition-all duration-300 ${isSearchFocused ? 'opacity-30 blur-lg' : 'opacity-0'}`} />
                <div className="relative flex items-center bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  <div className="pl-5 pr-3">
                    <FaSearch className="w-5 h-5 text-slate-400" aria-hidden="true" />
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
                    className="w-full px-2 py-4 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base"
                  />
                  <button
                    type="submit"
                    className="m-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 whitespace-nowrap shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <FaBookOpen className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{animatedPosts}+</div>
                      <div className="text-sm text-slate-400">Articles</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                      <FaAward className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{animatedCategories}+</div>
                      <div className="text-sm text-slate-400">Topics</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-violet-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-violet-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-xl flex items-center justify-center border border-violet-500/30">
                      <FaUsers className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-sm text-slate-400">Readers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <Link
                href="#all-articles"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Explore Articles</span>
                <FaArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/50 backdrop-blur-sm text-slate-200 font-semibold rounded-xl border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 shadow-lg"
              >
                Talk to Experts
              </Link>
            </div>
          </div>

          {/* Right Side - Latest Post Card (5 columns) */}
          <div className="lg:col-span-5 mt-4 flex items-center justify-center lg:justify-end">
            {latestPost && isLoaded ? (
              <div className="relative group w-full max-w-md lg:max-w-none">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

                {/* Main card */}
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/10 hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col">
                  {/* Latest badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-600/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      Latest Post
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <Image
                      src={latestPost.image}
                      alt={latestPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                    <div className="space-y-2">
                      {/* Category */}
                      <Link href={`/blog/category/${latestPost.categorySlug}`}>
                        <span className="inline-block mb-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                          {latestPost.category}
                        </span>
                      </Link>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                        <Link href={`/blog/post/${latestPost.id}`}>{latestPost.title}</Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-400 line-clamp-2 text-sm lg:text-base leading-relaxed">
                        {cleanExcerpt(latestPost.excerpt)}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <Image
                          src={latestPost.authorImage}
                          alt={latestPost.author}
                          width={40}
                          height={40}
                          className="rounded-full ring-2 ring-blue-500/30"
                        />
                        <div>
                          <div className="font-semibold text-white text-sm">{latestPost.author}</div>
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="w-3 h-3" />
                              {latestPost.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaClock className="w-3 h-3" />
                              {latestPost.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/blog/post/${latestPost.id}`}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 group/btn"
                        aria-label="Read article"
                      >
                        <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Enhanced skeleton loader
              <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl h-full animate-pulse w-full max-w-md lg:max-w-none">
                <div className="h-56 sm:h-64 lg:h-72 bg-slate-800/50" />
                <div className="p-6 lg:p-8 space-y-4">
                  <div className="h-5 bg-slate-800/50 rounded-full w-20" />
                  <div className="space-y-2">
                    <div className="h-6 bg-slate-800/50 rounded-lg w-full" />
                    <div className="h-6 bg-slate-800/50 rounded-lg w-3/4" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800/30 rounded-lg w-full" />
                    <div className="h-4 bg-slate-800/30 rounded-lg w-2/3" />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 bg-slate-800/50 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-slate-800/50 rounded w-24" />
                      <div className="h-3 bg-slate-800/30 rounded w-32" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      {/* The <style jsx> block that lived here (scan + gradient keyframes) now
          sits in globals.css. styled-jsx injects its CSS from a client runtime at
          hydration, which prevented /blog from being server-rendered. */}
    </section>
  );
};

export default BlogHeroSection;