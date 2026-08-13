import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { sanityGetCategories, type Category } from "@/lib/sanity-data-adapter";

// Hero Section - SSR for above-the-fold content
import CategoriesHeroSection from "@/components/sections/CategoriesHeroSection";

// Trust Strip - immediately after hero
const CategoriesTrustStrip = dynamic(
  () => import("@/components/sections/CategoriesTrustStrip"),
  {
    ssr: true,
    loading: () => (
      <div className="h-32 bg-slate-900 animate-pulse" />
    ),
  }
);

// Featured Categories Section
const FeaturedCategoriesSection = dynamic(
  () => import("@/components/sections/FeaturedCategoriesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 bg-white animate-pulse rounded-2xl" />
    ),
  }
);

// Categories Grid - main content
const CategoriesGrid = dynamic(
  () => import("@/components/sections/CategoriesGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-72 bg-slate-100 animate-pulse rounded-2xl" />
        ))}
      </div>
    ),
  }
);

// Category Highlights Section
const CategoriesHighlightSection = dynamic(
  () => import("@/components/sections/CategoriesHighlightSection"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[600px] bg-white animate-pulse" />
    ),
  }
);

// Process Section
const CategoriesProcessSection = dynamic(
  () => import("@/components/sections/CategoriesProcessSection"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 bg-slate-50 animate-pulse" />
    ),
  }
);

// Why Choose Us Section
const CategoriesWhyChooseUs = dynamic(
  () => import("@/components/sections/CategoriesWhyChooseUs"),
  {
    ssr: true,
    loading: () => (
      <div className="h-96 bg-white animate-pulse" />
    ),
  }
);

// Trusted Companies Section - reuse from home
const HomeTrustedCompanies = dynamic(
  () => import("@/components/sections/HomeTrustedCompanies"),
  {
    ssr: true,
    loading: () => (
      <div className="h-40 bg-white animate-pulse" />
    ),
  }
);

// CTA Section
const CategoriesCTASection = dynamic(
  () => import("@/components/sections/CategoriesCTASection"),
  {
    ssr: true,
    loading: () => (
      <div className="h-80 bg-slate-900 animate-pulse" />
    ),
  }
);

export const metadata: Metadata = {
  title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
  description:
    "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
  keywords:
    "testing categories, qa categories, software testing topics, test automation guides, performance testing tutorials, security testing best practices, mobile testing resources, API testing guides, regression testing, manual testing categories",
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
    title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
    description:
      "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
    url: "https://www.testriq.com/blog/categories",
    siteName: "Testriq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.testriq.com/OG/Blog-OG-Img.webp",
        width: 1200,
        height: 800,
        alt: "Testriq Blog Categories - Software Testing & QA Topics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
    description:
      "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
    images: ["https://www.testriq.com/OG/Blog-Twitter-Img.webp"],
    creator: "@testriq",
    site: "@testriq",
  },
  alternates: {
    canonical: "https://www.testriq.com/blog/categories",
  },
  category: "Technology",
};

export default async function CategoriesPage() {
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to empty list (page renders the hero +
  // process sections but no category grid). ISR picks up real data on next
  // request when Sanity recovers.
  let allCategories: Awaited<ReturnType<typeof sanityGetCategories>> = [];
  try {
    allCategories = await sanityGetCategories();
  } catch (err) {
    console.error('Sanity error fetching categories for /blog/categories:', err);
  }
  const categories = allCategories.filter(
    (cat: Category) => cat.postCount > 0
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <MainLayout>
        <BlogStructuredData
          type="category"
          title="Testing Categories | Software Testing & QA Topics | Testriq Blog"
          description="Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more."
          url="https://www.testriq.com/blog/categories"
          postCount={categories.length}
        />

        {/* 1. Hero Section */}
        <CategoriesHeroSection />

        {/* 2. Trust & Credibility Strip */}
        <CategoriesTrustStrip />

        {/* Main Content Area */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* 3. Featured Categories */}
          {categories.length > 0 && (
            <div className="mb-16">
              <FeaturedCategoriesSection categories={categories} />
            </div>
          )}

          {/* 4. All Categories Grid */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-slate-100 mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  All Categories
                </h2>
                <p className="text-slate-500 mt-1">
                  Browse our complete collection of testing topics
                </p>
              </div>
            </div>
            <CategoriesGrid categories={categories} />
          </div>
        </div>

        {/* 5. Category Highlights Section */}
        {categories.length >= 4 && (
          <CategoriesHighlightSection categories={categories} />
        )}

        {/* 6. Process Flow Section */}
        <CategoriesProcessSection />

        {/* 7. Why Choose Us Section */}
        <CategoriesWhyChooseUs />

        {/* 8. Trusted Companies */}
        <HomeTrustedCompanies />

        {/* 9. Final CTA Section */}
        <CategoriesCTASection />
      </MainLayout>
    </div>
  );
}