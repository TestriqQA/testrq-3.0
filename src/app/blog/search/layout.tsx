import { Metadata } from "next";
import BlogStructuredData from "@/components/seo/BlogStructuredData";

export const metadata: Metadata = {
  title: "Search Testing Articles | Find QA Insights & Best Practices | Testriq Blog",
  description: "Search and find relevant articles, tutorials, and expert insights on software testing and QA. Discover best practices, testing guides, and industry knowledge from Testriq's ISTQB certified experts.",
  keywords: "blog search, software testing articles, QA insights search, test automation tutorials, performance testing guides, security testing resources, mobile testing articles, API testing guides, testing best practices search",
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
    title: "Search Testing Articles | Find QA Insights & Best Practices | Testriq Blog",
    description: "Search and find relevant articles, tutorials, and expert insights on software testing and QA. Discover best practices, testing guides, and industry knowledge from Testriq's ISTQB certified experts.",
    url: "https://www.testriq.com/blog/search",
    siteName: "Testriq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.testriq.com/OG/blog-search-og.jpg",
        width: 1200,
        height: 630,
        alt: "Search Testriq Blog - Find Testing Articles & QA Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Testing Articles | Find QA Insights & Best Practices | Testriq Blog",
    description: "Search and find relevant articles, tutorials, and expert insights on software testing and QA. Discover best practices, testing guides, and industry knowledge from Testriq's ISTQB certified experts.",
    images: ["https://www.testriq.com/OG/blog-search-og.jpg"],
    creator: "@testriq",
    site: "@testriq",
  },
  alternates: {
    canonical: "https://www.testriq.com/blog/search",
  },
  category: "Technology",
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogStructuredData
        type="search"
        title="Search Testing Articles | Find QA Insights & Best Practices | Testriq Blog"
        description="Search and find relevant articles, tutorials, and expert insights on software testing and QA. Discover best practices, testing guides, and industry knowledge from Testriq's ISTQB certified experts."
        url="https://www.testriq.com/blog/search"
      />
      {children}
    </>
  );
}
