import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { sanityGetPosts as getAllPosts, sanityGetCategories as getAllCategories, sanityGetTags as getAllTags, Post, Category, Tag } from "@/lib/sanity-data-adapter";
import { Metadata } from "next";
// F-31: replace the hardcoded 13-entry `manualLinks` array (which already
// listed only 6 of 45 services + 1 of 7 solutions) with auto-discovery from
// the App Router filesystem, mirroring the same fix PR #15 applied to the
// XML sitemap. Same `discoverRoutes` helper now powers both — single source
// of truth, no more drift when a new service/solution lands.
import { discoverRoutes, slugToTitle } from "@/lib/seo/discover-routes";

// Match sitemap.ts revalidation cadence — the HTML sitemap is a low-volatility
// page that benefits from caching but should pick up filesystem changes within
// the hour.
export const revalidate = 3600;

export const metadata: Metadata = {
    // `absolute` bypasses the root layout's "%s | Testriq" template,
    // which would otherwise print the brand twice (F-71).
    title: { absolute: "Sitemap | Testriq QA Lab" },
    description: "Complete list of pages, services, solutions, articles, categories, and tags on Testriq.com",
};

// Top-level routes that aren't part of an App Router group like `(services)`
// or `(solutions)` and so don't show up in `discoverRoutes`. These are the
// stable evergreen routes — keep this list tight and curated.
const corePages: { slug: string; title: string }[] = [
    { slug: "about-us", title: "About Us" },
    { slug: "our-team", title: "Our Team" },
    { slug: "contact-us", title: "Contact Us" },
    { slug: "careers", title: "Careers" },
    { slug: "technology-stack", title: "Technology Stack" },
    { slug: "case-studies", title: "Case Studies" },
    { slug: "pricing", title: "Pricing" },
    { slug: "roi-calculator", title: "ROI Calculator" },
    { slug: "locations-we-serve", title: "Locations We Serve" },
];

export default async function SitemapPage() {
    // Fetch all content recursively. Wrapped so Sanity outages don't crash
    // the HTML sitemap — falls back to empty lists (sitemap will show only
    // static + filesystem-discovered routes, no Sanity content).
    let posts: Post[] = [];
    let categories: Category[] = [];
    try {
        posts = await getAllPosts();
    } catch (err) {
        console.error('Sanity error fetching posts for /website-map:', err);
    }
    try {
        categories = await getAllCategories();
    } catch (err) {
        console.error('Sanity error fetching categories for /website-map:', err);
    }
    let tags: Tag[] = [];
    try {
        tags = await getAllTags();
    } catch (err) {
        console.error('Sanity error fetching tags for /website-map:', err);
    }

    // Group posts by category for better UX
    const postsByCategory: Record<string, Post[]> = {};
    posts.forEach((post: Post) => {
        if (!postsByCategory[post.category]) {
            postsByCategory[post.category] = [];
        }
        postsByCategory[post.category].push(post);
    });

    // Auto-discovered service + solution route slugs (45 services + 7
    // solutions on disk as of Sprint 2). slugToTitle handles QA/IoT/AI/SaaS
    // acronyms so display strings read naturally.
    const services = discoverRoutes("src/app/(services)").map((slug) => ({
        slug,
        title: slugToTitle(slug),
    }));
    const solutions = discoverRoutes("src/app/(solutions)").map((slug) => ({
        slug,
        title: slugToTitle(slug),
    }));

    return (
        <MainLayout>
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
                        <p className="text-gray-600 mb-12 max-w-2xl">
                            Quickly navigate to any section of our website. This page lists all categories, tags, articles, and services available on Testriq.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Column 1: Core Pages, Services, Solutions, Categories & Tags */}
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Core Pages
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{corePages.length}</span>
                                    </h2>
                                    <ul className="space-y-2">
                                        {corePages.map((page) => (
                                            <li key={page.slug}>
                                                <Link
                                                    href={`/${page.slug}`}
                                                    className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-2 text-sm block py-1 font-medium"
                                                >
                                                    {page.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Services
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{services.length}</span>
                                    </h2>
                                    <ul className="space-y-2">
                                        {services.map((service) => (
                                            <li key={service.slug}>
                                                <Link
                                                    href={`/${service.slug}`}
                                                    className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-2 text-sm block py-1 font-medium"
                                                >
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Industry Solutions
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{solutions.length}</span>
                                    </h2>
                                    <ul className="space-y-2">
                                        {solutions.map((solution) => (
                                            <li key={solution.slug}>
                                                <Link
                                                    href={`/${solution.slug}`}
                                                    className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-2 text-sm block py-1 font-medium"
                                                >
                                                    {solution.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Categories
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{categories.length}</span>
                                    </h2>
                                    <ul className="space-y-3">
                                        {categories.map((cat: Category) => (
                                            <li key={cat.id}>
                                                <Link
                                                    href={`/blog/category/${cat.id}`}
                                                    className="flex items-center justify-between group p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                >
                                                    <span className="text-gray-700 font-medium group-hover:text-blue-600">{cat.name}</span>
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-blue-100">{cat.postCount}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Popular Tags
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{tags.length}</span>
                                    </h2>
                                    <ul className="flex flex-wrap gap-2">
                                        {tags.map((tag: Tag) => (
                                            <li key={tag.id}>
                                                <Link
                                                    href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
                                                    className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                                >
                                                    {tag.name} <span className="opacity-60 ml-1 text-xs">({tag.count})</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Column 2 & 3: Articles */}
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Articles by Category
                                    <span className="text-sm font-normal text-gray-500 ml-2">({posts.length} total)</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
                                        <div key={category} className="mb-8 break-inside-avoid">
                                            <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                                                {category}
                                                <span className="h-px bg-blue-100 flex-1"></span>
                                            </h3>
                                            <ul className="space-y-2">
                                                {categoryPosts.map((post: Post) => (
                                                    <li key={post.id}>
                                                        <Link
                                                            href={`/blog/post/${post.slug}`}
                                                            className="text-gray-600 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-2 text-sm block py-1"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
