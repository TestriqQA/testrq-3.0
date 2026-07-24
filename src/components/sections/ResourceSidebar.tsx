"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaDownload, FaTag, FaFolderOpen, FaNewspaper, FaChevronRight } from "react-icons/fa";
import { sanityImage } from "@/lib/sanity-image";

interface ResourceSidebarProps {
    relatedPosts?: {
        title: string;
        image: any;
        slug: string;
        category?: string;
        readTime?: string;
    }[];
    categories?: {
        name: string;
        count: number;
        color?: string;
        slug?: string;
    }[];
    tags?: string[];
}

const ResourceSidebar = ({ relatedPosts: propRelatedPosts, categories: propCategories, tags: propTags }: ResourceSidebarProps) => {
    const [email, setEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && email.includes("@")) {
            setSubscribeStatus("success");
            setEmail("");
            setTimeout(() => setSubscribeStatus("idle"), 3000);
        } else {
            setSubscribeStatus("error");
            setTimeout(() => setSubscribeStatus("idle"), 3000);
        }
    };

    // Related blog posts (Fallback to demo data)
    const relatedPosts = propRelatedPosts ? propRelatedPosts.map(p => {
        let imageUrl = "/blog-demo/metrics_comparison_visual_1769850381257.png";
        if (typeof p.image === 'string') {
            imageUrl = p.image;
        } else if (p.image) {
            imageUrl = sanityImage(p.image, { width: 400 });
        }

        return {
            title: p.title,
            image: imageUrl,
            category: p.category || "Performance",
            readTime: p.readTime || "5 min",
            url: `/blog/post/${p.slug}`
        };
    }) : [
        {
            title: "Load Testing Best Practices for 2026",
            image: "/blog-demo/metrics_comparison_visual_1769850381257.png",
            category: "Performance",
            readTime: "8 min",
            url: "/blog/post/load-testing-best-practices"
        },
        {
            title: "Automation Testing Tool Comparison",
            image: "/blog-demo/testing_tools_showcase_1769850418872.png",
            category: "Tools",
            readTime: "12 min",
            url: "/blog/post/automation-tools-comparison"
        },
        {
            title: "CI/CD Integration Guide",
            image: "/blog-demo/roadmap_timeline_1769850487593.png",
            category: "DevOps",
            readTime: "15 min",
            url: "/blog/post/cicd-integration-guide"
        }
    ];

    // Blog categories (Fallback to demo data)
    const categories = propCategories ? propCategories.map(c => ({
        ...c,
        color: c.color || "blue"
    })) : [
        { name: "Performance Testing", count: 24, color: "blue" },
        { name: "Automation", count: 18, color: "indigo" },
        { name: "Security Testing", count: 15, color: "violet" },
        { name: "Best Practices", count: 32, color: "emerald" },
        { name: "Tools & Frameworks", count: 21, color: "amber" },
        { name: "Case Studies", count: 12, color: "rose" }
    ];

    // Popular tags (Fallback to demo data)
    const tags = propTags || [
        "Performance", "Load Testing", "JMeter", "K6", "Gatling",
        "CI/CD", "Automation", "API Testing", "Monitoring",
        "DevOps", "Best Practices", "Test Strategy", "Scalability",
        "Stress Testing", "Benchmarking"
    ];

    const getCategoryColor = (color: string) => {
        const colors: { [key: string]: string } = {
            blue: "bg-blue-50 text-blue-700 border-blue-200",
            indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
            violet: "bg-violet-50 text-violet-700 border-violet-200",
            emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
            amber: "bg-amber-50 text-amber-700 border-amber-200",
            rose: "bg-rose-50 text-rose-700 border-rose-200"
        };
        return colors[color] || colors.blue;
    };

    return (
        <aside className="sticky top-24 space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#93c5fd #f1f5f9' }}>
            {/* Related Blog Posts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <FaNewspaper className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Related Articles</h3>
                </div>

                <div className="space-y-4">
                    {relatedPosts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.url}
                            className="group block rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                            <div className="relative h-32 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 left-2">
                                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-3">
                                <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <div className="flex items-center justify-between text-xs text-slate-500">
                                    <span>{post.readTime} read</span>
                                    <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Blog Categories */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <FaFolderOpen className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Categories</h3>
                </div>

                <div className="space-y-2">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={`/blog/category/${category.slug || category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${getCategoryColor(category.color || 'blue')}`}>
                                    <FaFolderOpen className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                                    {category.name}
                                </span>
                            </div>
                            {/* slate-600, not slate-500: slate-500 (#62748e) on the
                                slate-100 pill (#f1f5f9) measures 4.34:1, just under the
                                4.5:1 AA minimum for this 12px text, and this list renders
                                once per category — 12 of the 13 color-contrast failures on
                                every blog post came from this one span. slate-600
                                (#475569) on the same pill measures 6.92:1. */}
                            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                                {category.count}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FaTag className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Popular Tags</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Link
                            key={index}
                            href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 transition-all"
                        >
                            <FaTag className="w-3 h-3" />
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center">
                        <FaDownload className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Free Resources</h3>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Performance Testing Checklist", type: "PDF", size: "2.4 MB" },
                        { name: "Load Test Script Templates", type: "ZIP", size: "5.1 MB" },
                        { name: "Metrics Dashboard Template", type: "XLSX", size: "1.2 MB" }
                    ].map((resource, index) => (
                        <button
                            key={index}
                            className="group w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <FaDownload className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {resource.name}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {resource.type} • {resource.size}
                                    </div>
                                </div>
                            </div>
                            <FaChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ResourceSidebar;
