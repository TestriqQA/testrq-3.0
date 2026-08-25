import React, { Suspense } from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { SearchResults, SearchInsights, SearchResultsLoading } from "./SearchContent";

export const revalidate = 60; // Revalidate every minute

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q as string || "";

  const canonicalUrl = query
    ? `https://www.testriq.com/blog/search?q=${query}`
    : "https://www.testriq.com/blog/search";

  return {
    title: query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog",
    description: query
      ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog. Explore software testing search, QA best practices, test automation tools, and more.`
      : "Search Testriq's blog for software testing search, QA blog search, and expert insights on test automation, best practices for QA search, and Agile testing methodologies.",
    alternates: {
      canonical: canonicalUrl,
    },
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
      title: query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog",
      description: query
        ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog.`
        : "Search Testriq's blog for software testing search, QA blog search, and expert insights.",
      url: canonicalUrl,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      // Repeated here rather than inherited: Next.js replaces openGraph wholesale
      // when a child defines it, so this block shadows the one in layout.tsx and
      // the layout's images never reach the page. Keep the two in sync.
      images: [
        {
          url: "https://www.testriq.com/OG/blog-search-og.jpg",
          width: 1200,
          height: 630,
          alt: "Search Testriq's Software Testing Blog",
        },
      ],
    },
  };
}

export default function SearchPage() {
  return (
    <MainLayout>
      <Suspense fallback={<SearchResultsLoading />}>
        <SearchResults />
      </Suspense>
      <SearchInsights />
    </MainLayout>
  );
}