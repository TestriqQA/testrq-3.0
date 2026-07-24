"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaFire,
  FaStar,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
  FaTrophy,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/lib/sanity-data-adapter";
import { getBlogPosts } from "@/app/blog/actions";
import { decodeHtmlEntities } from "@/lib/utils";

// F-48.1 — `currentPage` prop removed. Initial render is always page 1;
// pagination state derives from the URL via `useSearchParams()` so the
// server component (page.tsx) can stay Static. The component reads
// `?page=N` on mount + on every history change; whenever it differs from
// the currently-rendered page, it fires the getBlogPosts Server Action
// and swaps in the new posts.
//
// ---------------------------------------------------------------------------
// OPEN BUG — /blog server-renders NOTHING, and this is why. (Investigated
// 2026-07-23; every attempted fix reverted. Read before touching this.)
//
// `useSearchParams()` bails the nearest Suspense boundary out to client-side
// rendering. page.tsx wraps this component in a boundary whose fallback is
// ANOTHER <BlogPostsGrid> — so the fallback bails too and the bailout escalates
// to the whole route. The served HTML is a BAILOUT_TO_CLIENT_SIDE_RENDERING
// marker and nothing else: no hero, no <h1>, no posts. Confirmed on deployed
// staging, so it long predates this note. Cost, measured on staging (LH 13,
// mobile): Performance 64, LCP 5.0s, TBT 660ms — the LCP <h1> only comes into
// existence after the JS bundle downloads and runs.
//
// Removing the bailout DOES work — SSR HTML goes 62KB -> 94KB and the <h1>
// appears — but the entire page subtree then fails to hydrate: hero, <h1>,
// search input and #all-articles all end up with ZERO React fiber keys, with no
// console error, no error digest, and every chunk returning 200. The search box
// and pagination would be silently dead. Four variants were tried and all four
// failed identically:
//   1. hero data lifted to the server + hero imported directly + boundary
//      removed + useSearchParams removed
//   2. useSearchParams removed, nothing else
//   3. useSearchParams + boundary removed, hero untouched
//   4. as (3), plus BOTH <style jsx> blocks moved into globals.css (the
//      styled-jsx-runtime theory — disproved) and the hero's dynamic() wrapper
//      removed (the nested-Suspense theory — also disproved)
//
// Controls that make the above trustworthy: local /blog at baseline DOES hydrate
// (h1=2 hero=2 input=3 grid=2), and /dating-app-certification (also inside
// MainLayout) plus /qa-documentation-services hydrate fine in the same builds.
// NB: staging is NOT a valid control — it is fully client-rendered because of
// the bailout, so React renders everything there and fiber keys appear for an
// entirely different reason.
//
// Whoever picks this up: the remaining suspects are the RSC flight payload for
// this segment (a working page emits ~44 `__next_f.push` calls, /blog only ~13)
// and MainLayout's children boundary. Verify fiber keys after ANY change here —
// server HTML that never hydrates looks perfect in a screenshot and is dead.
// ---------------------------------------------------------------------------
interface BlogPostsGridProps {
  initialPosts: Post[];
  totalPages: number;
  featuredPosts: Post[];
  trendingPosts: Post[];
}

const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({
  initialPosts,
  totalPages,
  featuredPosts,
  trendingPosts
}) => {
  const router = useRouter();
  // KNOWN PERFORMANCE BUG, deliberately left in place — see the note at the top
  // of this file. useSearchParams() bails this route to client-side rendering,
  // so /blog server-renders NOTHING (measured: Perf 64, LCP 5.0s). Replacing it
  // with a window.location read does remove the bailout, but the page then fails
  // to hydrate. Do not "fix" this without re-verifying React fiber keys.
  const searchParams = useSearchParams();
  const urlPage = Number(searchParams.get("page")) || 1;

  // Client-side state for pagination. `page` reflects what's currently
  // RENDERED — it converges to `urlPage` via the effect below.
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState<number>(1);
  const [totalPagesState, setTotalPages] = useState(totalPages);
  const [isLoading, setIsLoading] = useState(false);

  // F-48.1 — On mount + every time the `?page=` query param changes
  // (browser back/forward, deep link, manual navigation), refetch.
  // Skipped when the URL says page 1 because the server already
  // rendered page 1 into initialPosts.
  useEffect(() => {
    if (urlPage === page) return;
    if (urlPage < 1 || urlPage > totalPagesState) return;

    let cancelled = false;
    setIsLoading(true);

    getBlogPosts(urlPage)
      .then(({ posts: newPosts, totalPages: newTotalPages }) => {
        if (cancelled) return;
        setPosts(newPosts);
        setPage(urlPage);
        setTotalPages(newTotalPages);
      })
      .catch((err) => {
        console.error("Failed to change page:", err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage === page || newPage < 1 || newPage > totalPagesState) return;

    // URL-sync the new page. The effect above watches for this and does
    // the actual data fetch + scroll, so we keep the click handler purely
    // declarative (just changes the URL, doesn't fetch).
    const params = new URLSearchParams(searchParams.toString());
    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }
    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : "?", { scroll: false });

    // Scroll to grid section so the new page's posts are immediately in view.
    const gridSection = document.getElementById("all-articles");
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentPosts = posts;

  const cleanExcerpt = (excerpt: string) => {
    const textOnly = excerpt.replace(/<[^>]*>?/gm, '');
    return decodeHtmlEntities(textOnly);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blog-orb-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blog-orb-pulse" style={{ animationDelay: '1s' }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Featured Posts */}
        {page === 1 && featuredPosts.length > 0 && (
          <div className="mb-16 lg:mb-24">
            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
                <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg">
                  <FaStar className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1">Featured Articles</h2>
                <p className="text-slate-400">Handpicked by our editors</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl hover:border-amber-500/30 transition-all duration-500">
                    <div className="relative overflow-hidden h-72 lg:h-80">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                      <div className="absolute top-5 left-5 flex items-center gap-2">
                        <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-lg shadow-amber-500/30">
                          <FaStar className="w-3 h-3" />
                          Featured
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <Link href={`/blog/category/${post.categorySlug}`}>
                          <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-medium rounded-full border border-blue-400/30 mb-3 hover:bg-blue-500/30 transition-colors">
                            {post.category}
                          </span>
                        </Link>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white line-clamp-2 group-hover:text-amber-400 transition-colors leading-tight">
                          <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <p className="text-slate-300 mb-6 line-clamp-2 text-sm lg:text-base leading-relaxed">
                        {cleanExcerpt(post.excerpt)}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={44}
                            height={44}
                            className="rounded-full ring-2 ring-amber-500/30"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {post.authorSlug ? (
                                <Link
                                  href={`/author/${post.authorSlug}`}
                                  className="hover:text-amber-400 hover:underline transition-colors"
                                >
                                  {post.author}
                                </Link>
                              ) : (
                                post.author
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <span>{post.date}</span>
                              <span>·</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/blog/post/${post.id}`}
                          className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30 group/btn"
                          aria-label="Read article"
                        >
                          <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Trending Section */}
        {page === 1 && trendingPosts.length > 0 && (
          <div className="mb-16 lg:mb-24">
            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
                <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg">
                  <FaFire className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1">Trending Now</h2>
                <p className="text-slate-400">Most popular this week</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingPosts.slice(0, 3).map((post, index) => (
                <article
                  key={post.id}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-brand-blue/20 via-brand-blue/20 to-brand-blue/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl hover:border-brand-blue/30 transition-all duration-500">
                    {/* Rank badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-md" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </div>

                    <div className="p-6">
                      <Link href={`/blog/category/${post.categorySlug}`}>
                        <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full border border-brand-blue/20 mb-3 hover:bg-brand-blue/20 transition-colors">
                          {post.category}
                        </span>
                      </Link>

                      <h3 className="text-lg lg:text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-brand-blue transition-colors leading-tight">
                        <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                      </h3>

                      <div className="flex items-center justify-between text-sm text-slate-400 pt-4 border-t border-slate-700/50">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1.5">
                          <FaClock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div id="all-articles">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1">All Articles</h2>
              <p className="text-slate-400">Browse our complete collection</p>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-900/40 rounded-3xl h-96 animate-blog-orb-pulse border border-slate-800" />
              ))}
            </div>
          ) : currentPosts.length === 0 ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl blur-2xl" />
              <div className="relative text-center py-24 bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-700/50">
                <div className="text-7xl mb-6 opacity-50">📝</div>
                <h3 className="text-2xl font-bold text-white mb-3">No articles found</h3>
                <p className="text-slate-400 text-lg">Check back later for new content.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative"
                  >
                    {/* Subtle glow on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <Link href={`/blog/category/${post.categorySlug}`}>
                            <span className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-medium rounded-full border border-blue-400/30 shadow-lg hover:bg-blue-500/30 transition-colors">
                              {post.category}
                            </span>
                          </Link>
                        </div>

                        {post.trending && (
                          <div className="absolute top-4 right-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-red-500 rounded-full blur-md" />
                              <span className="relative px-2.5 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                                <FaFire className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                          <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                        </h3>

                        <p className="text-slate-400 mb-5 line-clamp-2 text-sm leading-relaxed flex-1">
                          {cleanExcerpt(post.excerpt)}
                        </p>

                        <div className="flex items-center justify-between pt-5 border-t border-slate-700/50 mt-auto">
                          <div className="flex items-center gap-2.5">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              width={32}
                              height={32}
                              className="rounded-full ring-2 ring-blue-500/20"
                            />
                            <span className="text-sm text-slate-300 font-medium">
                              {post.authorSlug ? (
                                <Link
                                  href={`/author/${post.authorSlug}`}
                                  className="hover:text-blue-400 hover:underline transition-colors"
                                >
                                  {post.author}
                                </Link>
                              ) : (
                                post.author
                              )}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <FaClock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPagesState > 1 && (
                <div className="flex justify-center mt-16">
                  <nav className="inline-flex items-center gap-2 p-2 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl" aria-label="Pagination">
                    {page > 1 ? (
                      <button
                        onClick={() => handlePageChange(page - 1)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all duration-300"
                        disabled={isLoading}
                        aria-label={`Go to previous page, page ${page - 1}`}
                      >
                        {/* react-icons Fa* do not bake role="img", so without the
                            label above this button has no accessible name at all.
                            That failed agent-accessibility-tree and held /blog's
                            Agentic Browsing score at 67. */}
                        <FaChevronLeft className="w-4 h-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <span className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 cursor-not-allowed">
                        <FaChevronLeft className="w-4 h-4" />
                      </span>
                    )}

                    {[...Array(totalPagesState)].map((_, index) => {
                      const pageNum = index + 1;
                      const isActive = page === pageNum;

                      // Show only 5 page numbers with ellipsis
                      const showPage =
                        pageNum === 1 ||
                        pageNum === totalPagesState ||
                        (pageNum >= page - 1 && pageNum <= page + 1);

                      if (!showPage && pageNum === 2 && page > 3) {
                        return <span key={pageNum} className="px-2 text-slate-600">...</span>;
                      }
                      if (!showPage && pageNum === totalPagesState - 1 && page < totalPagesState - 2) {
                        return <span key={pageNum} className="px-2 text-slate-600">...</span>;
                      }
                      if (!showPage) return null;

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          disabled={isLoading}
                          className={`relative w-11 h-11 flex items-center justify-center rounded-xl font-semibold transition-all duration-300 ${isActive
                            ? "text-white"
                            : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                            }`}
                        >
                          {isActive && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-md opacity-50" />
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl" />
                            </>
                          )}
                          <span className="relative z-10">{pageNum}</span>
                        </button>
                      );
                    })}

                    {page < totalPagesState ? (
                      <button
                        onClick={() => handlePageChange(page + 1)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all duration-300"
                        disabled={isLoading}
                        aria-label={`Go to next page, page ${page + 1}`}
                      >
                        <FaChevronRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <span className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 cursor-not-allowed">
                        <FaChevronRight className="w-4 h-4" />
                      </span>
                    )}
                  </nav>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 lg:mt-28 relative">
          {/* Enhanced glow effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20 rounded-[3rem] blur-3xl" />

          <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/50 overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-6">
                <FaTrophy className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">ISTQB Certified Team</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Need Expert QA Assistance?
              </h3>
              <p className="text-slate-300 mb-8 lg:mb-10 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
                Our ISTQB-certified professionals are ready to help you deliver flawless software with comprehensive testing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Get Free Consultation</span>
                  <FaArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 font-semibold rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 shadow-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      {/* The <style jsx> block that lived here overrode @keyframes pulse. It now
          lives in globals.css as `blog-orb-pulse` (a distinct name, so it cannot
          clash with Tailwind's own animate-pulse), applied via
          `animate-blog-orb-pulse` on the three elements that relied on it. */}
    </section>
  );
};

export default BlogPostsGrid;