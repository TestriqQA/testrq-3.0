import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { sanityGetAdaptedCategoryData } from "@/lib/sanity-data-adapter";
import { normalizeBlogSlug } from "@/lib/blog-slug";

export const revalidate = 60; // Revalidate every minute
export const dynamicParams = true; // Allow on-demand rendering for new/unknown categories

export async function generateStaticParams() {
  try {
    const { sanityGetCategories } = await import("@/lib/sanity-data-adapter");
    const categories = await sanityGetCategories();
    return categories
      .filter((cat) => cat.postCount > 0)
      .map((cat) => ({ category: cat.id }));
  } catch {
    return [];
  }
}

const CategoryHeroSection = dynamic(
  () => import("@/components/sections/CategoryHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CategoryPostsGrid = dynamic(
  () => import("@/components/sections/CategoryPostsGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CategorySidebar = dynamic(
  () => import("@/components/sections/CategorySidebar"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

type Props = {
  params: Promise<{ category: string }>;
};

// F-48.1 — Removed `searchParams` param from generateMetadata. Previously
// the `?page=N` read promoted this route to Dynamic Rendering and silently
// overrode F-48 Layer 1 Cache-Control headers. Pagination is fully client-
// driven inside CategoryPostsGrid; the canonical URL always points at the
// base category page regardless of which page the visitor is on.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  // F-66 + F-34: aggressive normalisation that strips WP-import artifacts
  // (Title-Case spaces, ampersands, etc.). The page-default branch
  // permanentRedirect()s when normalised differs from incoming, so the
  // metadata branch is only reached for canonical URLs — but we recompute
  // the same `normalizedCategory` for the Sanity lookup + canonical URL.
  const normalizedCategory = normalizeBlogSlug(category);

  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to "Category Not Found" metadata + noindex.
  // ISR (revalidate: 60) will pick up the real data on next request when Sanity recovers.
  let categoryData: Awaited<ReturnType<typeof sanityGetAdaptedCategoryData>> = null;
  try {
    categoryData = await sanityGetAdaptedCategoryData(normalizedCategory);
  } catch (err) {
    console.error(`Sanity error fetching category metadata for "${normalizedCategory}":`, err);
  }

  if (!categoryData) {
    return {
      title: "Category Not Found | Testriq Blog",
      // ...
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  const categoryName = categoryData.category.name;
  const categoryDescription = categoryData.category.description || `Explore expert articles and insights about ${categoryName} testing. Learn best practices, tutorials, and industry insights from Testriq's ISTQB certified experts.`;

  // F-66 + F-34: emit canonical URL using the normalised slug, not the raw
  // request param. F-48.1: no `?page=` variant — pagination is a UX
  // affordance, not a separate indexable resource.
  const canonicalUrl = `https://www.testriq.com/blog/category/${normalizedCategory}`;

  return {
    title: `${categoryName} | Insights & Best Practices`,
    description: categoryDescription,
    keywords: `${categoryName.toLowerCase()} testing, ${categoryName.toLowerCase()} qa, software testing, ${categoryName.toLowerCase()} best practices, ${categoryName.toLowerCase()} tutorials, testing guides, qa insights, ISTQB certified experts`,
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
      title: `${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`,
      description: categoryDescription,
      url: `https://www.testriq.com/blog/category/${normalizedCategory}`,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          // Shared blog card. Per-category art was never produced, and the per-slug
          // path this used to build 404d on all ~69 categories — a broken og:image
          // renders an empty box, which is worse than a text-only card. Swap this for
          // a category-specific file if that art is ever made.
          url: "https://www.testriq.com/OG/blog-og.jpg",
          width: 1200,
          height: 630,
          alt: `${categoryName} Testing Articles - Testriq Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`,
      description: categoryDescription,
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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  // F-66 + F-34: aggressive slug normalisation that strips WP-import
  // artifacts (Title-Case spaces, ampersands, etc.). If the incoming URL
  // slug isn't already canonical, 308-redirect to the canonical form.
  const normalizedCategory = normalizeBlogSlug(category);
  if (normalizedCategory !== category) {
    permanentRedirect(`/blog/category/${normalizedCategory}`);
  }
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to notFound(). ISR (revalidate: 60) will
  // pick up the real data on next request when Sanity recovers.
  let categoryData: Awaited<ReturnType<typeof sanityGetAdaptedCategoryData>> = null;
  try {
    categoryData = await sanityGetAdaptedCategoryData(normalizedCategory);
  } catch (err) {
    console.error(`Sanity error fetching category data for "${normalizedCategory}":`, err);
  }

  if (!categoryData) {
    notFound();
  }

  const categoryName = categoryData.category.name;
  const categoryDescription = categoryData.category.description || `Explore expert articles and insights about ${categoryName} testing. Learn best practices, tutorials, and industry insights from Testriq's ISTQB certified experts.`;

  return (
    <div>
      <MainLayout>
        <BlogStructuredData
          type="category"
          title={`${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`}
          description={categoryDescription}
          url={`https://www.testriq.com/blog/category/${normalizedCategory}`}
          categoryName={categoryName}
          postCount={categoryData.posts.length}
        />

        <CategoryHeroSection category={categoryData.category} />
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CategoryPostsGrid category={categoryData.category} posts={categoryData.posts} />
            </div>
            <div className="lg:col-span-1">
              <CategorySidebar category={categoryData.category} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}