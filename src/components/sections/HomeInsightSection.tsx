// F-75: was a 'use client' component that fetched ALL 338 posts via
// `sanityGetPosts()` in useEffect, then `posts.slice(0, 3)` to use the
// top 3. Network capture confirmed React 19 strict-mode double-mount in dev
// fired the query twice (Phase 11 finding: "all 338 posts ×2"). In prod the
// fetch ran once but still returned 338 posts of payload to render 3.
//
// Converted to async server component:
//   - sanityGetPosts(3) uses GROQ `[0...3]` slice server-side (helper
//     already supported the optional `limit` arg — caller wasn't passing it)
//   - No useState / useEffect / 'use client' → no client-side waterfall,
//     no double-mount, posts in initial HTML for SEO + faster LCP

import Link from "next/link";
import React from "react";
import { sanityGetPosts as getPosts } from "@/lib/sanity-data-adapter";

const HomeInsightSection = async () => {
    const heading = {
        title: "Latest Insights & Best Practices",
        info: "Stay updated with the latest trends, best practices, and insights from our testing experts.",
    };

    const renderTitle = () => {
        const formattedTitle = heading.title
            .replace(
                "Insights",
                '<span class="text-[theme(color.brand.blue)]">Insights</span>'
            )
            .replace(
                "Practices",
                '<span class="text-[theme(color.brand.blue)]">Practices</span>'
            );
        return <span dangerouslySetInnerHTML={{ __html: formattedTitle }} />;
    };

    // F-75: server-side fetch with GROQ slice — pull only the 3 we render.
    // Wrapped so Sanity outages (plan_limit_reached 402) don't crash the
    // HOMEPAGE prerender — falls back to empty list (section renders header
    // + empty grid). ISR picks up real data on next request when Sanity recovers.
    let blogPosts: Awaited<ReturnType<typeof getPosts>> = [];
    try {
        blogPosts = await getPosts(3);
    } catch (err) {
        console.error('Sanity error fetching homepage insight posts:', err);
    }

    return (
        <section className="flex flex-col w-full mx-auto md:px-8 px-8 xl:px-24 py-10 gap-y-15">
            <div className="flex flex-col gap-y-5 text-center">
                <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
                <p className="text-lg text-gray-500 mx-auto max-w-2xl">
                    {heading.info}
                </p>
            </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
                {blogPosts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            className="flex flex-col justify-start items-start ring-sky-200 ring-1 rounded-lg p-5 md:p-5 h-auto gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* blue-700: blue-400 (#51a2ff) on bg-sky-100 (#dff2fe) measured
                                2.29:1. blue-600 only reaches 4.56:1, too close to the
                                threshold to be safe; blue-700 is 5.94:1. */}
                            <p className="text-xs text-blue-700 p-1.5 py-1 rounded-2xl bg-sky-100">
                                {post.category}
                            </p>
                            <div className="flex text-sm text-gray-500 space-x-3">
                                <p>{post.date}</p> <span>.</span> <p>{post.readTime}</p>
                            </div>
                            <h2 className="text-xl">{post.title}</h2>
                            <p className="text-gray-500 text-sm">{post.excerpt.substring(0, 100)}...</p>
                            <Link
                                href={`/blog/post/${post.slug}`}
                                className="text-sm text-[theme(color.brand.blue)] hover:underline"
                            >
                                Read More <span>&#8594;</span>
                            </Link>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center">
                <Link href="/blog">
                    <button className="flex justify-center items-center p-2 ring-sky-300 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white w-50 rounded-lg">
                        View All Articles &nbsp;<span className="text-2xl">&#8594;</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HomeInsightSection;
