"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  FolderKanban,
  Users,
  Rocket,
  Home,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
// No adapter import at all now. This is a "use client" component, and a value
// import from the adapter pulls its 20 MB content-snapshot import into the
// browser bundle — see the note in CategorySidebar.tsx. The two counts arrive
// as props from the server page instead.

interface CategoriesHeroSectionProps {
  /** Total published posts, counted by the server page. */
  totalArticles: number;
  /** Total categories, counted by the server page. */
  totalCategories: number;
}

// Custom hook for animated counting
const useCountUp = (
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart || end === 0) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

// Stats card component
const StatCard: React.FC<{
  icon: React.ReactNode;
  value: number;
  label: string;
  sublabel: string;
  gradient: string;
  delay: number;
  shouldAnimate: boolean;
}> = ({ icon, value, label, sublabel, delay, shouldAnimate }) => {
  // `gradient` stays on the props type (and in the stats data) but is no
  // longer read: the light theme uses one brand-blue icon tile for every stat.
  const count = useCountUp(value, 2500, shouldAnimate);

  return (
    <div
      className="group relative"
    >
      <div className="relative bg-white border border-gray-100 rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300">
        {/* Icon */}
        <div className="relative mb-4">
          <div
            className="relative w-12 h-12 lg:w-14 lg:h-14 bg-sky-50 border border-sky-100 rounded-xl lg:rounded-2xl flex items-center justify-center text-[theme(color.brand.blue)]"
          >
            {icon}
          </div>
        </div>

        {/* Value */}
        <div className="text-3xl lg:text-4xl font-bold text-[theme(color.brand.blue)] mb-1">
          {count.toLocaleString()}
          <span className="text-[theme(color.brand.blue)]">+</span>
        </div>

        {/* Labels */}
        <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-0.5">
          {label}
        </div>
        <div className="text-xs text-gray-500">{sublabel}</div>
      </div>
    </div>
  );
};

const CategoriesHeroSection: React.FC<CategoriesHeroSectionProps> = ({
  totalArticles,
  totalCategories,
}) => {
  const ref = useRef(null);
  // The two counts used to be fetched here in a useEffect; they arrive as
  // props now, so the hardcoded error fallback (500 / 15) is gone with the
  // fetch that could fail.

  const stats = [
    {
      icon: <BookOpen className="w-6 h-6 lg:w-7 lg:h-7" />,
      value: totalArticles,
      label: "Articles",
      sublabel: "Expert guides",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FolderKanban className="w-6 h-6 lg:w-7 lg:h-7" />,
      value: totalCategories,
      label: "Categories",
      sublabel: "Testing domains",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />,
      value: 200,
      label: "QA Experts",
      sublabel: "ISTQB certified",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Rocket className="w-6 h-6 lg:w-7 lg:h-7" />,
      value: 500,
      label: "Projects",
      sublabel: "Delivered globally",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  // Light theme to match the rest of the site (white hero, brand-blue accents,
  // gray-900 headings — same tokens as BlogHeroSection / CaseStudiesHeroSection).
  // The dark navy treatment (glow orbs, grid overlay, pulse keyframes) is gone;
  // copy, links, the single <h1> and the stats are unchanged.
  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] lg:min-h-screen bg-white text-gray-900 overflow-hidden flex items-center"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Breadcrumb */}
        <nav
      aria-label="Breadcrumb"
      className="flex items-center mb-8 lg:mb-12"
    >
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[theme(color.brand.blue)] transition-colors group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-[theme(color.brand.blue)] transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </li>
            <li>
              <span className="text-[theme(color.brand.blue)] font-semibold">Categories</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div
      className="inline-flex items-center gap-2 mx-auto lg:mx-0"
    >
              <div className="relative">
                <div className="relative inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">
                    Knowledge Base
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div
      className="space-y-4"
    >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                Enterprise-Grade{" "}
                <span className="text-[theme(color.brand.blue)]">
                  Testing Expertise
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Access comprehensive guides, proven methodologies, and industry
                best practices across all areas of software testing and quality
                assurance.
              </p>
            </div>

            {/* Feature pills */}
            <div
      className="flex flex-wrap gap-3 justify-center lg:justify-start"
    >
              {[
                "Expert-Verified Content",
                "Real-World Case Studies",
                "Step-by-Step Tutorials",
                "Industry Standards",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full"
                >
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  <span className="text-sm font-medium text-[theme(color.brand.blue)]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    >

              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[theme(color.brand.blue)] text-white font-semibold rounded-md hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Free Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-5">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                delay={0.3 + index * 0.1}
                shouldAnimate={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHeroSection;