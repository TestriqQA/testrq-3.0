"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCog, FaShieldAlt, FaRocket, FaMobile, FaDesktop, FaCloud, FaCode, FaChartLine, FaChevronLeft, FaChevronRight, FaLayerGroup } from "react-icons/fa";
import Link from "next/link";
import { sanityGetCategories as getCategories, Category } from "@/lib/sanity-data-adapter";

const BlogCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categoryIcons: Record<string, React.ReactElement> = {
    'test automation': <FaCode className="w-4 h-4" />,
    'automation': <FaCode className="w-4 h-4" />,
    'performance testing': <FaRocket className="w-4 h-4" />,
    'performance': <FaRocket className="w-4 h-4" />,
    'security testing': <FaShieldAlt className="w-4 h-4" />,
    'security': <FaShieldAlt className="w-4 h-4" />,
    'mobile testing': <FaMobile className="w-4 h-4" />,
    'mobile': <FaMobile className="w-4 h-4" />,
    'web testing': <FaDesktop className="w-4 h-4" />,
    'web': <FaDesktop className="w-4 h-4" />,
    'cloud testing': <FaCloud className="w-4 h-4" />,
    'cloud': <FaCloud className="w-4 h-4" />,
    'qa analytics': <FaChartLine className="w-4 h-4" />,
    'analytics': <FaChartLine className="w-4 h-4" />,
    'all': <FaLayerGroup className="w-4 h-4" />,
    'default': <FaCog className="w-4 h-4" />
  };

  const getCategoryIcon = (categoryName: string): React.ReactElement => {
    const lowerName = categoryName.toLowerCase();
    if (lowerName === 'all posts') return categoryIcons.all;
    for (const [key, icon] of Object.entries(categoryIcons)) {
      if (lowerName.includes(key)) return icon;
    }
    return categoryIcons.default;
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const wpCategories = await getCategories();
        const adaptedCategories = wpCategories;
        const totalPosts = adaptedCategories.reduce((sum: number, cat: Category) => sum + cat.postCount, 0);

        const allCategory: Category = {
          id: "all",
          name: "All Posts",
          description: "Browse all articles",
          color: "from-slate-500 to-slate-600",
          icon: "🏷️",
          postCount: totalPosts,
          subscribers: Math.floor(totalPosts * 25),
          tags: ["All"],
          featuredTools: [],
          seo: { title: "", description: "", keywords: "" }
        };

        setCategories([allCategory, ...adaptedCategories]);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([{
          id: "all",
          name: "All Posts",
          description: "Browse all articles",
          color: "from-slate-500 to-slate-600",
          icon: "🏷️",
          postCount: 156,
          subscribers: 3900,
          tags: ["All"],
          featuredTools: [],
          seo: { title: "", description: "", keywords: "" }
        }]);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [categories]);

  if (loading) {
    return (
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-slate-500">Loading categories...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog-categories" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Browse by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Category
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore our testing resources organized by specialization
          </p>
        </div>

        {/* Scrollable Categories */}
        <div className="relative group">
          {canScrollLeft && (
            <button
              onClick={() => scrollBy('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}

          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.slice(0, 15).map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <Link
                  key={category.id}
                  href={category.id === "all" ? "/blog" : `/blog/category/${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-600/25'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                >
                  <span className={isActive ? 'text-blue-100' : 'text-slate-400'}>
                    {getCategoryIcon(category.name)}
                  </span>
                  <span className="font-medium whitespace-nowrap">{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {category.postCount}
                  </span>
                </Link>
              );
            })}
          </div>

          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          )}

          {canScrollRight && (
            <button
              onClick={() => scrollBy('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog/categories"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group"
          >
            View all categories
            <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
