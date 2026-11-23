"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import Link from "next/link";
import { performSearch } from "@/actions/search-actions";
import type { Post } from "@/lib/sanity-data-adapter";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaLightbulb } from "react-icons/fa";

// Loading component
export const SearchResultsLoading = () => (
    <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[theme(color.brand.blue)]"></div>
    </div>
);

// Blog Search Hub - now only renders the search bar
const BlogSearchHub: React.FC<{ searchQuery: string; setSearchQuery: (value: string) => void; handleSearch: (e: React.FormEvent) => void }> = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search testing topics, tools, or best practices..."
                            className="w-full pl-12 pr-32 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 border border-gray-200 shadow-sm focus:border-[theme(color.brand.blue)] focus:ring-2 focus:ring-sky-100 focus:outline-none transition"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-[theme(color.brand.blue)] hover:bg-sky-800 rounded-lg text-white font-semibold transition cursor-pointer"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


// Search Insights component
export const SearchInsights: React.FC = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[theme(color.background.gray)] animate-fade-in">
            <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in text-center max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Discover Expert QA Insights
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Use our <strong>software testing search</strong> to find <strong>QA blog search</strong> resources,
                    including <strong>test automation best practices</strong>, <strong>Agile testing methodologies</strong>,
                    and more. Explore suggested topics below to dive into Testriq&apos;s expert content.
                </p>

                {/* Enhanced Introduction Section */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-12 text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Gateway to Comprehensive QA Knowledge</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Search Capabilities</h3>
                            <p className="text-gray-700 mb-4">
                                Our intelligent search system is designed to understand the nuances of software testing terminology and concepts. Whether you&apos;re looking for specific tools like Selenium WebDriver, methodologies like Behavior-Driven Development (BDD), or industry-specific testing approaches, our search engine delivers precisely what you need.
                            </p>
                            <p className="text-gray-700 mb-4">
                                The search functionality goes beyond simple keyword matching. It understands synonyms, related concepts, and contextual relationships within the QA domain. For instance, searching for &quot;automation&quot; will also surface content about CI/CD integration, framework design, and test orchestration.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Curated Content Categories</h3>
                            <p className="text-gray-700 mb-4">
                                Our content is meticulously organized into categories that reflect the real-world structure of software testing projects. From foundational concepts for beginners to advanced techniques for seasoned professionals, every piece of content is tagged and categorized for maximum discoverability.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Each category contains in-depth articles, practical tutorials, case studies, and tool comparisons that provide comprehensive coverage of the topic. This systematic approach ensures that whether you&apos;re troubleshooting a specific issue or planning a complete testing strategy, you&apos;ll find relevant, actionable information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12 relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue"></div>
                <div className="flex items-center justify-center mb-8">
                    <FaLightbulb className="w-10 h-10 text-[theme(color.brand.blue)] mr-3" />
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
                        Unlock QA Excellence with Testriq
                    </h2>
                </div>

                <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                    Testriq&apos;s <strong className="text-[theme(color.brand.blue)]">software testing search</strong> hub is your go-to resource for <strong className="text-[theme(color.brand.blue)]">QA blog search</strong> and expert insights. Discover why our blog is trusted by professionals worldwide:
                </p>

                {/* Enhanced Features Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Testing Coverage</h3>
                        <ul className="space-y-3 text-gray-700 text-base">
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Find <strong className="text-[theme(color.brand.blue)]">test automation best practices</strong> and tools like <Link href="/blog/search?q=selenium" className="text-[theme(color.brand.blue)] hover:text-sky-800 underline">Selenium</Link>, Cypress, and Playwright for streamlined QA workflows.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Explore <strong className="text-[theme(color.brand.blue)]">Agile testing methodologies</strong> and <strong className="text-[theme(color.brand.blue)]">best practices for QA search</strong> in CI/CD pipelines and DevOps environments.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Access actionable guides on <strong className="text-[theme(color.brand.blue)]">test-driven development (TDD)</strong>, <strong className="text-[theme(color.brand.blue)]">integration testing strategies</strong>, and performance testing tools like <Link href="/blog/search?q=jmeter" className="text-[theme(color.brand.blue)] hover:text-sky-800 underline">JMeter</Link>.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Dive into <strong className="text-[theme(color.brand.blue)]">search QA insights</strong> for <Link href="/blog/search?q=security" className="text-[theme(color.brand.blue)] hover:text-sky-800 underline">security testing</Link>, API testing, and AI-driven testing trends.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Expertise</h3>
                        <ul className="space-y-3 text-gray-700 text-base">
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Content authored by ISTQB-certified professionals with extensive industry experience across multiple domains and technologies.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Real-world case studies and examples from successful testing implementations in fintech, healthcare, e-commerce, and enterprise software.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Up-to-date coverage of emerging trends including AI testing, IoT device testing, blockchain application testing, and cloud-native testing strategies.
                            </li>
                            <li>
                                <span className="text-[theme(color.brand.blue)] mr-2">•</span>
                                Practical tutorials with step-by-step instructions, code examples, and downloadable resources for immediate implementation.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Search Tips Section */}
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Maximize Your Search Results</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Effective Keywords</h4>
                            <p className="text-gray-700 text-sm mb-3">
                                Use specific terms like &quot;automation frameworks&quot;, &quot;manual testing tips&quot;, &quot;performance bottlenecks&quot;, or &quot;security vulnerabilities&quot; to find targeted content.
                            </p>
                            <div className="bg-white border border-gray-200 rounded p-3">
                                <p className="text-xs text-gray-600 font-mono">
                                    Examples: &quot;selenium grid setup&quot;, &quot;api testing postman&quot;, &quot;mobile testing appium&quot;
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Search Operators</h4>
                            <p className="text-gray-700 text-sm mb-3">
                                Use quotes for exact phrases, OR for multiple terms, and minus (-) to exclude terms from your search results.
                            </p>
                            <div className="bg-white border border-gray-200 rounded p-3">
                                <p className="text-xs text-gray-600 font-mono">
                                    &quot;test automation&quot; OR &quot;automated testing&quot; -manual
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Topic Categories</h4>
                            <p className="text-gray-700 text-sm mb-3">
                                Browse by categories like automation, performance, security, or mobile testing to discover comprehensive topic coverage.
                            </p>
                            <div className="bg-white border border-gray-200 rounded p-3">
                                <p className="text-xs text-gray-600 font-mono">
                                    Categories: Tools, Methodologies, Best Practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-gray-700 mb-8 text-center">
                    Optimize your <strong className="text-[theme(color.brand.blue)]">QA blog search</strong> experience by combining specific keywords with our advanced filtering options. Whether you&apos;re looking for beginner tutorials, advanced techniques, or industry-specific solutions, our comprehensive search system will connect you with the most relevant and valuable content.
                </p>

                {/* Popular Search Terms */}
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Popular Search Terms</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'selenium automation',
                            'api testing',
                            'performance testing',
                            'mobile testing',
                            'security testing',
                            'test automation frameworks',
                            'agile testing',
                            'continuous testing',
                            'test data management',
                            'defect management',
                            'test planning',
                            'regression testing'
                        ].map((term, index) => (
                            <Link
                                key={index}
                                href={`/blog/search?q=${encodeURIComponent(term)}`}
                                className="bg-sky-50 hover:bg-sky-100 text-[theme(color.brand.blue)] border border-sky-100 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                            >
                                {term}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/blog" className="inline-block bg-[theme(color.brand.blue)] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-xl mr-4">
                        Explore More QA Insights
                    </Link>
                    <Link href="/case-studies" className="inline-block bg-white border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold py-3 px-8 rounded-md hover:bg-sky-50 transition-all duration-300">
                        View Success Stories
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Search results component
export const SearchResults: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [searchResults, setSearchResults] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(query);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 20;

    useEffect(() => {
        const performSearchAction = async () => {
            if (!query.trim()) {
                setSearchResults([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const results = await performSearch(query.trim());
                setSearchResults(results);
                setCurrentPage(1);
            } catch (error) {
                console.error("Search error:", error);
                setSearchResults([]);
            } finally {
                setLoading(false);
            }
        };

        performSearchAction();
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/blog/search?q=${encodeURIComponent(searchQuery.trim())}`;
        }
    };

    // const formatDate = (dateString: string) => {
    //     return new Date(dateString).toLocaleDateString("en-US", {
    //         year: "numeric",
    //         month: "long",
    //         day: "numeric",
    //     });
    // };



    const totalResults = searchResults.length;
    const totalPages = Math.ceil(totalResults / postsPerPage);
    const currentPosts = searchResults.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <>
            <BlogStructuredData
                type="search"
                title={query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog"}
                description={query
                    ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog. Explore software testing search, QA best practices, test automation tools, and more.`
                    : "Search Testriq's blog for software testing search, QA blog search, and expert insights on test automation, best practices for QA search, and Agile testing methodologies."
                }
                url={`https://www.testriq.com/blog/search${query ? `?q=${encodeURIComponent(query)}` : ''}`}
            />
            <div className="min-h-screen bg-[theme(color.background.gray)]">
                {/* Search Header */}
                {/* Restyled to the light theme to match the rest of the site: white search
                    band (was dark navy with a noise overlay), gray results area, white cards. */}
                <div className="bg-white border-b border-gray-100 py-8 px-6 md:px-12 lg:px-24 relative">
                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Blog Search Hub - Contains the remaining search bar */}
                        <BlogSearchHub searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
                    </div>
                </div>

                {/* Search Results */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    {query && (
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            {loading ? "Searching..." : `${totalResults} Results Found for "${query}"`}
                        </h2>
                    )}
                    {loading ? (
                        <SearchResultsLoading />
                    ) : (
                        <>
                            {currentPosts.length > 0 ? (
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {currentPosts.map((post) => (
                                        <article
                                            key={post.id}
                                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="p-6">
                                                {post.category && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {/* 
                                                          Wait, sanity adapter 'category' field is a string (primary category). 
                                                          But 'adaptSanityPost' logic:
                                                          category: categoryName (string)
                                                          categorySlug: slug
                                                          
                                                          It seemingly lacks the full 'categories' array in the transformed output?
                                                          Let's check 'adaptSanityPost' in 'sanity-data-adapter.ts' again.
                                                          I see: "tags: ...", "category: ...".
                                                          It DOES NOT export a full categories array in the Post interface!
                                                          It flattens it to a single 'category'.
                                                          
                                                          However, 'sanity-queries.ts' fetches all categories.
                                                          'adaptSanityPost' logic:
                                                          const primaryCategory = sanityPost.categories?.[0];
                                                          
                                                          So 'Post' interface has 'category' (string) and 'categorySlug' (string).
                                                          It does NOT have 'categories' array.
                                                          
                                                          I need to verify the 'Post' interface in 'wordpress-data-adapter.ts' which sanity adapter re-exports.
                                                          If I need to display multiple categories, I might need to update the interface AND adapter.
                                                          But for now, I should use the primary 'category' field available.
                                                        */}
                                                        <Link
                                                            href={`/blog/category/${post.categorySlug}`}
                                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-[theme(color.brand.blue)] border border-sky-100 hover:bg-sky-100 transition-colors"
                                                        >
                                                            <FaTag className="w-3 h-3 mr-1" />
                                                            {post.category}
                                                        </Link>
                                                    </div>
                                                )}
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[theme(color.brand.blue)] transition-colors">
                                                    <Link href={`/blog/post/${post.slug}`}>
                                                        {post.title}
                                                    </Link>
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                                    <div className="flex items-center">
                                                        <FaCalendar className="w-4 h-4 mr-2 text-[theme(color.brand.blue)]" />
                                                        {post.date}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <FaUser className="w-4 h-4 mr-2 text-[theme(color.brand.blue)]" />
                                                        {post.author}
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <Link
                                                    href={`/blog/post/${post.slug}`}
                                                    className="inline-flex items-center text-[theme(color.brand.blue)] hover:text-sky-800 font-medium transition-colors"
                                                >
                                                    Read More <FaArrowRight className="ml-2" />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : query ? (
                                <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-2xl mx-auto">
                                    <FaSearch className="w-16 h-16 text-[theme(color.brand.blue)] mx-auto mb-6" />
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        No Results Found
                                    </h3>
                                    <p className="text-gray-600 mb-6 px-8">
                                        We couldn&apos;t find any articles matching &quot;{query}&quot;. Try different keywords or explore our categories below.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-[theme(color.brand.blue)] text-white font-semibold py-3 px-8 rounded-md hover:shadow-xl transition-all duration-300"
                                    >
                                        Browse All Articles
                                    </Link>
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-2xl mx-auto">
                                    <FaSearch className="w-16 h-16 text-[theme(color.brand.blue)] mx-auto mb-6" />
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        Start Your Search
                                    </h3>
                                    <p className="text-gray-600 px-8">
                                        Enter keywords in the search bar above to discover our comprehensive collection of software testing articles and QA insights.
                                    </p>
                                </div>
                            )}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-12">
                                    <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full shadow-sm p-2">
                                        <button
                                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 rounded-full text-gray-600 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                        >
                                            Previous
                                        </button>
                                        {[...Array(totalPages)].map((_, index) => (
                                            <button
                                                key={index + 1}
                                                onClick={() => setCurrentPage(index + 1)}
                                                className={`px-4 py-2 rounded-full font-semibold transition-colors ${currentPage === index + 1
                                                    ? "bg-[theme(color.brand.blue)] text-white"
                                                    : "text-gray-600 hover:bg-sky-50"
                                                    } cursor-pointer`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                            }
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 rounded-full text-gray-600 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
