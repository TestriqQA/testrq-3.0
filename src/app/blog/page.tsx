import { Suspense } from "react";
import { BlogHeroSection } from "@/components/client-wrappers/BlogClientComponents";
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
          would be lost. The fallback uses the same posts grid pre-rendered
          with page-1 data — visually identical, so users never see a
          loading state on first paint. */}
      <Suspense
        fallback={
          <BlogPostsGrid
            initialPosts={currentPosts}
            totalPages={totalPages}
            featuredPosts={featuredPosts}
            trendingPosts={trendingPosts}
          />
        }
      >
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