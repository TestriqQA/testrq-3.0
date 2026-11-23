"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaHome, FaChevronRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Post } from "@/lib/sanity-data-adapter";
import { sanityImage } from "@/lib/sanity-image";
import { decodeHtmlEntities } from "@/lib/utils";

interface BlogPostHeroSectionProps {
    post?: Post;
}

const BlogPostHeroSection = ({ post }: BlogPostHeroSectionProps) => {
    // Scroll to main content functionality (preserved)
    const scrollToContent = () => {
        const element = document.getElementById(post ? "main-content" : "introduction");
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    // Helper function to strip HTML tags from text
    const stripHtmlTags = (html: string): string => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    };

    // Derived values from post data (preserved logic)
    const title = post?.title || "The Complete Guide to Performance Testing";
    const rawDescription = post?.excerpt || post?.seo?.description || "Master enterprise-grade performance testing with proven methodologies, industry best practices, and real-world strategies trusted by Fortune 500 companies.";
    // Clean the description by stripping HTML tags and decoding HTML entities
    const description = decodeHtmlEntities(stripHtmlTags(rawDescription));
    const imageUrl = post?.mainImage ? sanityImage(post.mainImage, { width: 1600, quality: 90 }) : (post?.image || "/blog-demo/hero_performance_dashboard_1769850360523.png");
    const author = post?.author || "Testriq QA Team";
    const authorSlug = post?.authorSlug;
    const authorImage = post?.authorImageRaw ? sanityImage(post.authorImageRaw, { width: 96 }) : (post?.authorImage || null);
    const authorBio = post?.authorBio;
    const authorLinkedin = post?.authorLinkedin;
    const date = post?.date || "January 31, 2026";
    const category = post?.categories?.[0]?.name || "Performance Testing";
    const categorySlug = post?.categories?.[0]?.slug || post?.categorySlug || "performance-testing";

    // Share URL for social buttons — deferred to client to avoid hydration mismatch
    const [shareUrl, setShareUrl] = useState('');
    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    return (
        <section className="bg-white">
            {/* ============================================
                HERO SECTION - Content First Design
                Clean, professional layout inspired by 
                Medium, Stripe, Vercel, Smashing Magazine
            ============================================ */}

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

                {/* --------------------------------
                    1. BREADCRUMB NAVIGATION
                    Subtle, small, lightweight
                -------------------------------- */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                        <li>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors"
                            >
                                <FaHome className="w-4 h-4" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li aria-hidden="true">
                            <FaChevronRight className="w-3 h-3 text-gray-400" />
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-gray-900 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                        <li aria-hidden="true">
                            <FaChevronRight className="w-3 h-3 text-gray-400" />
                        </li>
                        <li>
                            <Link
                                href={`/blog/category/${categorySlug}`}
                                className="hover:text-gray-900 transition-colors"
                            >
                                {category}
                            </Link>
                        </li>
                        <li aria-hidden="true" className="hidden sm:block">
                            <FaChevronRight className="w-3 h-3 text-gray-400" />
                        </li>
                        <li className="hidden sm:block">
                            <span className="text-gray-700 font-medium truncate max-w-[200px] block">
                                {title.length > 30 ? title.substring(0, 30) + "..." : title}
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* --------------------------------
                    2. CATEGORY BADGE
                    Pill-style, high-contrast but soft
                -------------------------------- */}
                <div className="mb-4">
                    <Link
                        href={`/blog/category/${categorySlug}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                        {category}
                    </Link>
                </div>

                {/* --------------------------------
                    3. BLOG TITLE (H1)
                    Large, bold, readable
                    Max width for optimal line length
                -------------------------------- */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight tracking-tight mb-6">
                    {title}
                </h1>

                {/* --------------------------------
                    4. SHORT DESCRIPTION / EXCERPT
                    1-2 lines, slightly muted tone
                -------------------------------- */}
                <p className="text-lg sm:text-xl text-[#4A4A4A] leading-[1.7] mb-8 w-full">
                    {description}
                </p>

                {/* --------------------------------
                    5. META INFORMATION ROW
                    Author avatar, name, role, date, read time
                    Horizontal on desktop, stacked on mobile
                -------------------------------- */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-gray-100">
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                            {authorImage ? (
                                <Image
                                    src={authorImage}
                                    alt={author}
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-lg">
                                    {author.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="font-semibold text-gray-900 flex items-center gap-2">
                                {authorSlug ? (
                                    <Link
                                        href={`/author/${authorSlug}`}
                                        className="hover:text-brand-blue hover:underline transition-colors"
                                    >
                                        {author}
                                    </Link>
                                ) : (
                                    author
                                )}
                                {authorLinkedin && (
                                    <a
                                        href={authorLinkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${author}'s LinkedIn Profile`}
                                        className="text-[#0077b5] hover:text-[#006097] transition-colors"
                                    >
                                        <FaLinkedinIn className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className="text-sm text-gray-500">{authorBio}</div>
                        </div>
                    </div>

                    {/* Separator - Desktop only */}
                    <div className="hidden sm:block w-px h-8 bg-gray-200" aria-hidden="true" />

                    {/* Date (read time removed: the estimate came out as "1 min read" on almost every post) */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <time dateTime={post?.dateISO || "2026-01-31"}>
                            {date}
                        </time>
                    </div>
                </div>
            </div>

            {/* --------------------------------
                6. FEATURED IMAGE
                Large, responsive, lazy-loaded
                Rounded corners, aspect ratio preserved
                Full-width container
            -------------------------------- */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <figure className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-transform duration-500 hover:scale-[1.01]">
                    <Image
                        src={imageUrl}
                        alt={post?.mainImageAlt || title}
                        title={post?.mainImageTitle || title}
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                        priority
                    />
                    {post?.mainImageCaption && (
                        <figcaption className="mt-4 px-4 py-2 text-center text-sm italic text-gray-500 border-l-2 border-blue-500/30 bg-gray-50/50">
                            {post.mainImageCaption}
                        </figcaption>
                    )}
                </figure>
            </div>

            {/* --------------------------------
                7. SOCIAL SHARE ACTIONS
                LinkedIn, X (Twitter), Facebook
                Below image on mobile, can be sticky on desktop
            -------------------------------- */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <div className="flex items-center gap-4 py-4 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-500">Share:</span>
                    <div className="flex items-center gap-2">
                        {/* LinkedIn */}
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>

                        {/* X (Twitter) */}
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on X (Twitter)"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-colors"
                        >
                            <FaXTwitter className="w-4 h-4" />
                        </a>

                        {/* Facebook */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostHeroSection;