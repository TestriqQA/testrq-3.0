import { Suspense } from "react";
// Semrush audit (05 Oct 2026) issue 103 "Missing h1" = 1 page, and that page
// is this one. BlogHeroSection owns the only <h1> on /blog (line 272 of the
// section), but it was reached through client-wrappers/BlogClientComponents,
// where it is wrapped in next/dynamic with a `loading` fallback. dynamic() is
// invoked inside a "use client" module, so the hero resolves in the browser
// and never lands in the server payload: `curl https://www.testriq.com/blog`
// returned 120,759 bytes whose only headings were the footer's three <h3>s —
// no h1, and not even the "Loading..." fallback.
//
// Imported directly instead. A "use client" component imported into a Server
// Component is still server-rendered and then hydrated, so the h1 is back in
// the initial HTML with no change to behaviour or appearance. Same trap as the
// next/script JSON-LD note in (services)/agile-testing-services/page.tsx:
// markup a crawler cannot see may as well not exist.
import BlogHeroSection from "@/components/sections/BlogHeroSection";
import BlogPostsGrid from "@/components/sections/BlogPostsGrid";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { sanityGetPostsBySlugs, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";

export const revalidate = 60; // Revalidate every minute

// F-48.1 — Make /blog Static. We removed the server-side `searchParams.page`
// read (which previously auto-promoted this route to Dynamic Rendering and
// silently overrode F-48 Layer 1 Cache-Control headers). The server now
// always renders page 1; pagination is fully client-driven via
// useSearchParams + the existing getBlogPosts Server Action inside
// BlogPostsGrid. Result: route becomes Static → next.config.ts's
// `public, s-maxage=60, stale-while-revalidate=86400` finally applies →
// Vercel-Cache flips from MISS to HIT.
export async function generateMetadata(): Promise<Metadata> {
  // Canonical always points at the base `/blog` URL. Pagination is a UX
  // affordance, not a separate indexable resource — Google should treat
  // `?page=2` URLs as variants of `/blog`, not standalone canonicals.
  const canonicalUrl = "https://www.testriq.com/blog";

  return {
    title: "Software Testing Blog | QA Insights & Best Practices",
    description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
    keywords: "software testing blog, QA insights, test automation, performance testing, security testing, mobile testing, API testing, regression testing, manual testing, testing best practices, ISTQB certified experts, software quality assurance",
    authors: [{ name: "Testriq QA Lab" }],
    creator: "Testriq QA Lab",
    publisher: "Testriq QA Lab",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
      description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
      url: "https://www.testriq.com/blog",
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.testriq.com/OG/blog-og.jpg",
          width: 1200,
          height: 630,
          alt: "Testriq Software Testing Blog - Expert QA Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
      description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
      images: ["https://www.testriq.com/OG/blog-og.jpg"],
      creator: "@testriq",
      site: "@testriq",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    category: "Technology",
  };
}
// F-48.1 — No `searchParams` prop. Always renders page 1's posts. Client
// component (BlogPostsGrid) handles per-page navigation via the getBlogPosts
// Server Action triggered by useSearchParams changes.
// Fallback for the BlogPostsGrid boundary. Deliberately plain markup: the
// moment this calls useSearchParams (directly or through a child) the CSR
// bailout escalates past this boundary and takes the whole page's HTML with
// it — see the note on the Suspense below. Mirrors the card geometry in
// blog/loading.tsx so the grid does not shift when the real one hydrates.
function BlogPostsGridSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-5">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-3" />
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse mb-1" />
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function BlogPage() {
  const postsPerPage = 9;

  let currentPosts: Post[] = [];
  let totalPages = 0;
  let featuredPosts: Post[] = [];
  let trendingPosts: Post[] = [];

  try {
    // 1. Get total count using lightweight slug fetch
    const allSlugs = await sanityGetAllPostSlugs();
    totalPages = Math.ceil(allSlugs.length / postsPerPage);

    // 2. Page 1 slugs only — pagination is client-driven from here
    const pageSlugs = allSlugs.slice(0, postsPerPage);

    // 3. Fetch posts by slugs — sanity adapter returns ADAPTED posts
    if (pageSlugs.length > 0) {
      currentPosts = await sanityGetPostsBySlugs(pageSlugs);
    }

    // 4. Featured + Trending are page-1 only by design (above-the-fold UX)
    featuredPosts = currentPosts.filter(p => p.featured);
    trendingPosts = currentPosts.filter(p => p.trending);

  } catch (error) {
    console.error("Error fetching paginated posts:", error);
  }

  return (
    <MainLayout>
      <BlogStructuredData
        type="blog"
        title="Software Testing Blog | Expert QA Insights & Best Practices | Testriq"
        description="Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts."
        url="https://www.testriq.com/blog"
      />
      <BlogHeroSection />

      {/* F-48.1 — Suspense boundary is REQUIRED because BlogPostsGrid uses
          useSearchParams(); without this, the whole route would silently
          opt back into Dynamic Rendering and the Cache-Control header win
          would be lost.

          The fallback used to render BlogPostsGrid itself, pre-filled with
          page-1 data, on the reasoning that an identical grid means no
          visible loading state. It cost the entire page instead: a fallback
          that calls useSearchParams cannot satisfy the CSR bailout, so Next
          escalated to the next boundary up — blog/loading.tsx — and
          prerendered *that* as the whole route. Verified in
          .next/server/app/blog.html, which held 78 animate-pulse skeleton
          divs and zero <h1>, while about-us.html held its h1 normally. That
          is Semrush issue 103 "Missing h1" = 1, and this was the page: the
          hero, the h1 and the JSON-LD all existed only after hydration.
          Removing loading.tsx to test it made the build fail outright with
          "useSearchParams() should be wrapped in a suspense boundary at
          page /blog", which confirmed the escalation.

          The fallback is now markup that does not touch useSearchParams, so
          the bailout resolves here and the shell above — hero, h1 and
          structured data — prerenders into the static HTML. Only the grid
          stays client-rendered. Post links are unaffected for discovery:
          sitemap.ts, /website-map and the category/tag pages all link them
          server-side. */}
      <Suspense fallback={<BlogPostsGridSkeleton />}>
        <BlogPostsGrid
          initialPosts={currentPosts}
          totalPages={totalPages}
          featuredPosts={featuredPosts}
          trendingPosts={trendingPosts}
        />
      </Suspense>
    </MainLayout>
  );
}