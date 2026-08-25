import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { sanityGetPostsByTag, sanityGetTags } from "@/lib/sanity-data-adapter";
import { normalizeBlogSlug } from "@/lib/blog-slug";

export const revalidate = 60; // Revalidate every minute
export const dynamicParams = true; // Allow on-demand rendering for new tags

export async function generateStaticParams() {
  try {
    const tags = await sanityGetTags();
    return tags.map((tag) => ({ tag: tag.slug }));
  } catch {
    return [];
  }
}

const TagHeroSection = dynamic(
  () => import("@/components/sections/TagHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagPostsGrid = dynamic(
  () => import("@/components/sections/TagPostsGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagSidebar = dynamic(
  () => import("@/components/sections/TagSidebar"),
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
  params: Promise<{ tag: string }>;
};

// F-48.1 — Removed `searchParams` param from generateMetadata. Previously
// the `?page=N` read promoted this route to Dynamic Rendering and silently
// overrode F-48 Layer 1 Cache-Control headers. Pagination is fully client-
// driven inside the tag posts grid; the canonical URL always points at
// the base tag page regardless of which page the visitor is on.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  // F-66 + F-34: aggressive normalisation that strips WP-import artifacts
  // (parens, ampersands, periods, mixed case). The page-default branch
  // permanentRedirect()s when normalised differs from incoming, so the
  // metadata branch is only reached for canonical URLs — but we recompute
  // the same `normalizedTag` here for the Sanity lookup + canonical URL.
  const normalizedTag = normalizeBlogSlug(tag);

  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to "Tag Not Found" metadata + noindex.
  // ISR (revalidate) will pick up the real data on next request when Sanity recovers.
  let tagData: Awaited<ReturnType<typeof sanityGetPostsByTag>> = { tag: null, posts: [] };
  try {
    tagData = await sanityGetPostsByTag(normalizedTag);
  } catch (err) {
    console.error(`Sanity error fetching tag metadata for "${normalizedTag}":`, err);
  }

  if (!tagData.tag) {
    return {
      title: "Tag Not Found | Testriq Blog",
      description: "The requested blog tag could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const tagName = tagData.tag.name;
  const tagDescription = tagData.tag.description || `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName} from Testriq's ISTQB certified experts.`;

  // F-66 + F-34: emit canonical URL using the normalised slug, not the raw
  // request param — guards against case-variant or punctuation-variant
  // duplicates self-canonicalising to their own URL. F-48.1: no `?page=`
  // variant — pagination is a UX affordance, not a separate indexable resource.
  const canonicalUrl = `https://www.testriq.com/blog/tag/${normalizedTag}`;

  return {
    title: `${tagName}|Testriq Blog`,
    description: tagDescription,
    keywords: `${tagName.toLowerCase()}, ${tagName.toLowerCase()} testing, ${tagName.toLowerCase()} qa, software testing, ${tagName.toLowerCase()} best practices, ${tagName.toLowerCase()} tutorials, testing guides, qa insights, ISTQB certified experts`,
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
      title: `${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`,
      description: tagDescription,
      url: `https://www.testriq.com/blog/tag/${normalizedTag}`,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          // Shared blog card — see the note on the category route. The per-slug path
          // this replaced 404d on all ~360 tag pages.
          url: "https://www.testriq.com/OG/blog-og.jpg",
          width: 1200,
          height: 630,
          alt: `${tagName} Articles - Testriq Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`,
      description: tagDescription,
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

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  // F-66 + F-34: aggressive slug normalisation that strips WP-import
  // artifacts (parens, ampersands, periods, mixed case). If the incoming
  // URL slug isn't already canonical, 308-redirect to the canonical form
  // so all crawler / GSC / inbound traffic resolves to one URL per tag.
  const normalizedTag = normalizeBlogSlug(tag);
  if (normalizedTag !== tag) {
    permanentRedirect(`/blog/tag/${normalizedTag}`);
  }
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to notFound(). ISR (revalidate) will pick up
  // the real data on next request when Sanity recovers.
  let tagData: Awaited<ReturnType<typeof sanityGetPostsByTag>> = { tag: null, posts: [] };
  try {
    tagData = await sanityGetPostsByTag(normalizedTag);
  } catch (err) {
    console.error(`Sanity error fetching tag data for "${normalizedTag}":`, err);
  }

  // Only 404 if the tag itself doesn't exist in Sanity.
  // If the tag exists but has 0 posts, render an empty state page (preserves SEO equity).
  if (!tagData.tag) {
    notFound();
  }

  const adaptedPosts = tagData.posts;
  const tagName = tagData.tag.name;
  const tagDescription = tagData.tag.description || `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName} from Testriq's ISTQB certified experts.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <BlogStructuredData
          type="tag"
          title={`${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`}
          description={tagDescription}
          url={`https://www.testriq.com/blog/tag/${normalizedTag}`}
          tagName={tagName}
          postCount={adaptedPosts.length}
        />

        <TagHeroSection tag={tagData.tag} postCount={adaptedPosts.length} />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <TagPostsGrid tag={tagData.tag} posts={adaptedPosts} />
            </div>
            <div className="lg:col-span-1">
              <TagSidebar tag={tagData.tag} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
