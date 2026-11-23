"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
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

  // One featured post gets the wide horizontal card; two share the row.
  // Plain derived value, not a hook — safe with the hydration note above.
  const singleFeatured = featuredPosts.slice(0, 2).length === 1;

  // Light theme to match the rest of the site: #F5F5F5 band under the white
  // hero, white rounded cards, centred section headings with the brand-blue
  // pill badge (same pattern as HomeProcesses). Markup order, links, hooks and
  // aria labels are unchanged — see the hydration note at the top of the file.
  return (
    <section className="relative bg-[theme(color.background.gray)] py-16 lg:py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Featured Posts */}
        {page === 1 && featuredPosts.length > 0 && (
          <div className="mb-16 lg:mb-20">
            <div className="text-center mb-10 lg:mb-12">
              <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
                <FaStar className="w-3.5 h-3.5" />
                <span className="text-sm">Handpicked by our editors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Featured <span className="text-[theme(color.brand.blue)]">Articles</span>
              </h2>
            </div>

            {/* flex-wrap + justify-center rather than a grid, so a single
                featured post sits centred instead of leaving an empty column
                beside it (page 1 often has just one).

                Compact layout: a lone featured post is a wide horizontal card
                (image left, text right) from md up, instead of a 600px-tall
                stacked card. With two, each is a shorter stacked card. */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 flex flex-col ${singleFeatured
                    ? "w-full max-w-5xl md:flex-row"
                    : "w-full lg:w-[calc(50%-1rem)]"
                    }`}
                >
                  <div
                    className={`relative overflow-hidden bg-gray-100 shrink-0 ${singleFeatured ? "h-52 md:h-auto md:w-1/2 md:min-h-[17rem]" : "h-52"
                      }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-sm">
                        <FaStar className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-5 lg:p-6 flex flex-col flex-1 justify-center">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs text-gray-500">
                      <Link href={`/blog/category/${post.categorySlug}`} className="w-fit">
                        <span className="inline-block px-2.5 py-0.5 bg-sky-50 text-[theme(color.brand.blue)] font-semibold rounded-full border border-sky-100 hover:bg-sky-100 transition-colors">
                          {post.category}
                        </span>
                      </Link>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-[theme(color.brand.blue)] transition-colors leading-snug mb-2">
                      <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${singleFeatured ? "line-clamp-3" : "line-clamp-2"}`}>
                      {cleanExcerpt(post.excerpt)}
                    </p>

                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full ring-2 ring-sky-100 shrink-0"
                        />
                        <div className="text-sm font-semibold text-gray-900 truncate">
                          {post.authorSlug ? (
                            <Link
                              href={`/author/${post.authorSlug}`}
                              className="hover:text-[theme(color.brand.blue)] hover:underline transition-colors"
                            >
                              {post.author}
                            </Link>
                          ) : (
                            post.author
                          )}
                        </div>
                      </div>
                      <Link
                        href={`/blog/post/${post.id}`}
                        className="w-9 h-9 shrink-0 flex items-center justify-center bg-[theme(color.brand.blue)] text-white rounded-lg hover:bg-sky-800 transition-colors group/btn"
                        aria-label="Read article"
                      >
                        <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Trending Section */}
        {page === 1 && trendingPosts.length > 0 && (
          <div className="mb-16 lg:mb-20">
            <div className="text-center mb-10 lg:mb-12">
              <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
                <FaFire className="w-3.5 h-3.5" />
                <span className="text-sm">Most popular this week</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Trending <span className="text-[theme(color.brand.blue)]">Now</span>
              </h2>
            </div>

            {/* Same centring as Featured, for when fewer than three are trending. */}
            <div className="flex flex-wrap justify-center gap-6">
              {trendingPosts.slice(0, 3).map((post, index) => (
                <article
                  key={post.id}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Rank badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="w-9 h-9 bg-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md ring-4 ring-white/70">
                      {index + 1}
                    </div>
                  </div>

                  {/* Compact: shorter image, and the category pill sits on the
                      image instead of taking its own row. */}
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <Link href={`/blog/category/${post.categorySlug}`} className="absolute bottom-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-white/95 text-[theme(color.brand.blue)] text-xs font-semibold rounded-full shadow-sm hover:bg-white transition-colors">
                        {post.category}
                      </span>
                    </Link>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[theme(color.brand.blue)] transition-colors leading-snug">
                      <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                    </h3>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div id="all-articles" className="scroll-mt-28">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
              <FaRocket className="w-3.5 h-3.5" />
              <span className="text-sm">Browse our complete collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              All <span className="text-[theme(color.brand.blue)]">Articles</span>
            </h2>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-[22rem] animate-pulse border border-gray-100" />
              ))}
            </div>
          ) : currentPosts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-7xl mb-6 opacity-50">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
              <p className="text-gray-600 text-lg">Check back later for new content.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Compact card: shorter image, category pill on the image
                        instead of its own row, tighter padding and footer.
                        Was 477px tall at desktop width. */}
                    <div className="relative h-44 overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      <Link href={`/blog/category/${post.categorySlug}`} className="absolute bottom-3 left-3">
                        <span className="inline-block px-2.5 py-1 bg-white/95 text-[theme(color.brand.blue)] text-xs font-semibold rounded-full shadow-sm hover:bg-white transition-colors">
                          {post.category}
                        </span>
                      </Link>

                      {post.trending && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1.5 bg-white text-orange-500 text-xs font-bold rounded-full flex items-center gap-1 shadow-sm">
                            <FaFire className="w-3 h-3" />
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[theme(color.brand.blue)] transition-colors leading-snug">
                        <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-normal flex-1">
                        {cleanExcerpt(post.excerpt)}
                      </p>

                      <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-2 min-w-0">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={24}
                            height={24}
                            className="rounded-full ring-2 ring-sky-100 shrink-0"
                          />
                          <span className="text-sm text-gray-800 font-medium truncate">
                            {post.authorSlug ? (
                              <Link
                                href={`/author/${post.authorSlug}`}
                                className="hover:text-[theme(color.brand.blue)] hover:underline transition-colors"
                              >
                                {post.author}
                              </Link>
                            ) : (
                              post.author
                            )}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 shrink-0 whitespace-nowrap">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPagesState > 1 && (
                <div className="flex justify-center mt-14">
                  <nav className="inline-flex items-center gap-1.5 p-2 bg-white rounded-2xl border border-gray-200 shadow-sm" aria-label="Pagination">
                    {page > 1 ? (
                      <button
                        onClick={() => handlePageChange(page - 1)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-600 hover:bg-sky-50 hover:text-[theme(color.brand.blue)] transition-colors cursor-pointer"
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
                      <span className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-300 cursor-not-allowed">
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
                        return <span key={pageNum} className="px-2 text-gray-400">...</span>;
                      }
                      if (!showPage && pageNum === totalPagesState - 1 && page < totalPagesState - 2) {
                        return <span key={pageNum} className="px-2 text-gray-400">...</span>;
                      }
                      if (!showPage) return null;

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          disabled={isLoading}
                          className={`relative w-11 h-11 flex items-center justify-center rounded-xl font-semibold transition-colors ${isActive
                            ? "bg-[theme(color.brand.blue)] text-white"
                            : "text-gray-600 hover:bg-sky-50 hover:text-[theme(color.brand.blue)]"
                            } cursor-pointer`}
                        >
                          <span className="relative z-10">{pageNum}</span>
                        </button>
                      );
                    })}

                    {page < totalPagesState ? (
                      <button
                        onClick={() => handlePageChange(page + 1)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-600 hover:bg-sky-50 hover:text-[theme(color.brand.blue)] transition-colors cursor-pointer"
                        disabled={isLoading}
                        aria-label={`Go to next page, page ${page + 1}`}
                      >
                        <FaChevronRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <span className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-300 cursor-not-allowed">
                        <FaChevronRight className="w-4 h-4" />
                      </span>
                    )}
                  </nav>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer CTA — brand-blue band, same treatment as the CTA sections on
            the service and case-study pages. Compact strip: text left, buttons
            right from lg up (stacked and centred below that), so it no longer
            takes a full screen-height block at the end of the page. */}
        <div className="mt-14 lg:mt-16 bg-gradient-to-br from-brand-blue to-sky-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="px-6 py-8 md:px-10 lg:py-9 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-10 text-center lg:text-left text-white">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 border border-white/25 rounded-full mb-3">
                <FaTrophy className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">ISTQB Certified Team</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                Need Expert QA Assistance?
              </h3>
              <p className="text-sky-50 text-sm md:text-base leading-relaxed">
                Our ISTQB-certified professionals are ready to help you deliver flawless software with comprehensive testing solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[theme(color.brand.blue)] font-bold rounded-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
              >
                Get Free Consultation
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white/70 hover:bg-white/10 transition-colors duration-200 whitespace-nowrap"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The <style jsx> block that lived here overrode @keyframes pulse. It now
          lives in globals.css as `blog-orb-pulse` (a distinct name, so it cannot
          clash with Tailwind's own animate-pulse). Nothing on this section uses
          it any more since the light-theme restyle; the keyframes are left in
          globals.css in case another blog section picks them up. */}
    </section>
  );
};

export default BlogPostsGrid;
