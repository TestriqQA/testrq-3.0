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
}> = ({ icon, value, label, sublabel, gradient, delay, shouldAnimate }) => {
  const count = useCountUp(value, 2500, shouldAnimate);

  return (
    <div
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
      />

      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl p-5 lg:p-6 hover:border-blue-500/30 transition-all duration-500">
        {/* Icon */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl lg:rounded-2xl blur-md opacity-40`}
          />
          <div
            className={`relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white`}
          >
            {icon}
          </div>
        </div>

        {/* Value */}
        <div className="text-3xl lg:text-4xl font-black text-white mb-1">
          {count.toLocaleString()}
          <span className="text-blue-400">+</span>
        </div>

        {/* Labels */}
        <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-0.5">
          {label}
        </div>
        <div className="text-xs text-slate-500">{sublabel}</div>
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

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] lg:min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/80 to-slate-900 overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs - simplified for performance */}
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
          style={{ animation: "pulse 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"
          style={{ animation: "pulse 8s ease-in-out infinite 2s" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

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
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Home</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-white/20" />
            </li>
            <li>
              <Link
                href="/blog"
                className="text-white/60 hover:text-white transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-white/20" />
            </li>
            <li>
              <span className="text-white font-semibold">Categories</span>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-lg opacity-50" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center gap-2 border border-blue-400/30">
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Knowledge Base
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div
      className="space-y-4"
    >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Enterprise-Grade{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                  Testing Expertise
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
                >
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-sm font-medium text-slate-300">
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
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

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Keyframe animation for pulse */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoriesHeroSection;