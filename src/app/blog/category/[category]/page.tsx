import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { sanityGetAdaptedCategoryData, sanityGetCategories, sanityGetTags } from "@/lib/sanity-data-adapter";
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
      // `absolute` bypasses the root layout's "%s | Testriq" template,
      // which would otherwise print the brand twice (F-71).
      title: { absolute: "Category Not Found | Testriq Blog" },
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

  // Same threshold the tag archives use. See the note on `robots` below for
  // why this changed on 2026-11-04 and why `follow` stays true regardless.
  const isIndexable = categoryData.posts.length >= 2;

  return {
    title: `${categoryName} | Insights & Best Practices`,
    description: categoryDescription,
    keywords: `${categoryName.toLowerCase()} testing, ${categoryName.toLowerCase()} qa, software testing, ${categoryName.toLowerCase()} best practices, ${categoryName.toLowerCase()} tutorials, testing guides, qa insights, ISTQB certified experts`,
    authors: [{ name: "Testriq QA Lab" }],
    creator: "Testriq QA Lab",
    publisher: "Testriq QA Lab",
    // 2026-11-04 — categories now follow the same threshold as tags: a
    // category archive listing fewer than 2 posts is noindex, follow.
    //
    // This reverses the 2026-10-28 decision recorded below, on the user's
    // instruction. The measurement behind it, taken 2026-11-04: of 73
    // categories, 6 hold no posts at all and 31 hold exactly one, leaving 36
    // with two or more. An archive with zero posts is an empty page, and one
    // holding a single post is a thinner duplicate of that post — neither is
    // a useful search result, whatever its navigational role. (The 2026-10-28
    // note below counted 31 single-post categories as well; the figure of 30
    // quoted during the 2026-11-04 review was one short.)
    //
    // `follow` is the important half. Noindex does NOT remove these pages
    // from the site: they stay linked from /blog/categories, from the post
    // sidebar and from every breadcrumb, they still render, and they still
    // pass link equity to the posts they list. Users navigate through them
    // exactly as before. Only the archive's own thin page stops competing in
    // the index — which is the objection below answered rather than ignored.
    //
    // Expressed as a rule, not as today's list of 36: counts drift as posts
    // are published, and a hardcoded list would quietly rot. The matching
    // exclusion in src/app/sitemap.ts uses the same threshold, so a noindexed
    // category is never advertised in the sitemap.
    //
    // ---- Superseded, kept for the reasoning ----
    // Categories stay indexed regardless of how few posts they hold, and that
    // is deliberate — do not copy the tag rule here.
    //
    // /blog/tag/[tag] noindexes any tag archive listing fewer than 2 posts
    // (656 of 937 of them). 31 category archives list exactly one post and so
    // look like the same case, but they are not: categories are the blog's
    // navigation — they are linked from /blog/categories, from the post
    // sidebar and from each post's own breadcrumb — whereas tags are a flat
    // keyword index with no navigational role. Noindexing a category removes
    // a page users actually navigate through.
    //
    // Reviewed and decided on 2026-10-28. A thin category is better answered
    // by giving it more posts, or by merging it into a sibling, than by
    // hiding it from the index.
    robots: {
      index: isIndexable,
      follow: true,
      googleBot: {
        index: isIndexable,
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

  // Sidebar data is fetched here rather than inside CategorySidebar. That is a
  // "use client" component, and importing the adapter from it pulled the
  // adapter's 20 MB content-snapshot import into the browser bundle. Fetching
  // server-side also puts the related-category and tag links into the
  // server-rendered HTML, where a crawler can see them.
  //
  // Same try/catch posture as the fetch above: a Sanity outage degrades the
  // sidebar to empty rather than failing the whole page. Both calls are already
  // memoised behind unstable_cache in the adapter, so this adds no Sanity cost.
  let allCategories: Awaited<ReturnType<typeof sanityGetCategories>> = [];
  let allTags: Awaited<ReturnType<typeof sanityGetTags>> = [];
  try {
    [allCategories, allTags] = await Promise.all([sanityGetCategories(), sanityGetTags()]);
  } catch (err) {
    console.error("Sanity error fetching category sidebar data:", err);
  }

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
              <CategorySidebar
                category={categoryData.category}
                categories={allCategories}
                tags={allTags}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}