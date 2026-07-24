import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { sanityGetPostBySlug, sanityGetRelatedPosts, sanityGetCategories, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";
import { extractHeadings } from "@/lib/utils";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

import BlogPostContent from "@/components/sections/BlogPostContent";
import BlogPostHeroSection from "@/components/sections/BlogPostHeroSection";
import ResourceSidebar from "@/components/sections/ResourceSidebar";
import VisualTableOfContents from "@/components/sections/VisualTableOfContents";
// F-?? (blog -> service internal linking): routes authority from the 353 blog
// posts back to the commercial service pages. See src/lib/seo/blog-service-map.ts.
import RelatedServices from "@/components/sections/RelatedServices";

export const revalidate = 60; // Revalidate every minute
export const dynamicParams = true; // Allow rendering of new posts not generated at build time

export async function generateStaticParams() {
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash the build. Return empty list to skip prerender; pages will be
  // rendered on-demand at request time (dynamicParams = true).
  try {
    const slugs = await sanityGetAllPostSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch (err) {
    console.error('Sanity error fetching post slugs for generateStaticParams:', err);
    return [];
  }
}

// BlogPostContent is a Server Component and is now imported directly (top of
// file) rather than through next/dynamic. Wrapping a Server Component in
// dynamic() drags it across the client boundary: it ships as its own lazy
// client chunk, adds a Suspense boundary, and renders the skeleton fallback
// before the real article body — on the element that carries LCP on every blog
// post. Commit 41dfb86a removed the same anti-pattern from 9 homepage sections
// and cut TBT 270ms -> 74ms. Do not re-wrap this in dynamic().

// Custom Structured Data Component for Individual Posts
function PostStructuredData({ post }: { post: Post }) {
  // F-52: BlogPosting.author now points at the canonical author-page entity
  // (`/author/<slug>#person`) instead of the page-local `#author` interim
  // introduced by F-46. The `/author/[slug]` route emits the full Person
  // schema for that @id. We also surface `url` (author page) and combine
  // linkedin + author.sameAs[] for richer Person.sameAs, plus author
  // credentials → hasCredential. Posts without an author.slug (legacy/missing
  // Sanity data) fall back to the F-46 page-local @id so JSON-LD stays valid.
  const postUrl = `https://www.testriq.com/blog/post/${post.slug}`;
  const authorPageUrl = post.authorSlug
    ? `https://www.testriq.com/author/${post.authorSlug}`
    : null;
  const authorAtId = authorPageUrl ? `${authorPageUrl}#person` : `${postUrl}#author`;
  const isPlaceholderAuthorImage =
    !post.authorImage || post.authorImage.includes("placehold.co");
  const authorSameAs = Array.from(
    new Set(
      [post.authorLinkedin, ...(post.authorSameAs || [])].filter(
        (u): u is string => typeof u === "string" && u.length > 0
      )
    )
  );
  const author = {
    "@type": "Person",
    "@id": authorAtId,
    name: post.author,
    ...(authorPageUrl ? { url: authorPageUrl } : {}),
    ...(isPlaceholderAuthorImage ? {} : { image: post.authorImage }),
    ...(post.authorBio ? { description: post.authorBio } : {}),
    ...(authorSameAs.length ? { sameAs: authorSameAs } : {}),
    ...(post.authorCredentials && post.authorCredentials.length
      ? {
          hasCredential: post.authorCredentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Certification",
            name: c,
          })),
        }
      : {}),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seo.description,
    "image": post.image ? [post.image] : [],
    "datePublished": post.dateISO,
    "dateModified": post.modifiedISO,
    "author": [author],
    "publisher": {
      "@type": "Organization",
      // F-46: link publisher to the canonical site Organization @id (the
      // same anchor used by JobPosting.hiringOrganization in F-40, and the
      // anchor organizationSchema-side work in F-46.1 will need to define).
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab",
      "logo": {
        "@type": "ImageObject",
        // F-46: was /logo.png → 404 in production. /testriq-logo.png returns
        // 200. F-46.1 tracks the broader site-wide logo-URL audit (the same
        // broken /logo.png appears in organizationSchema + several other
        // schemas in StructuredData.tsx and BlogStructuredData.tsx).
        "url": "https://www.testriq.com/testriq-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  return <StructuredData data={articleSchema} />;
}

// F-42: BreadcrumbList for blog post pages.
// Chain: Home → Blog → {category} → {post}. The category step is skipped when
// the post has no real Sanity categories — the adapter falls back to a
// "technology-stack" slug for category-less posts, but that route 404s in
// production, so emitting it as a breadcrumb item would point Google at a
// dead URL. We only include the category step when post.categories[0] is a
// real entry from Sanity.
function PostBreadcrumbStructuredData({ post }: { post: Post }) {
  const items: Array<{ name: string; url: string }> = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Blog", url: "https://www.testriq.com/blog" },
  ];

  const primaryCategory = post.categories?.[0];
  if (primaryCategory?.slug && primaryCategory?.name) {
    items.push({
      name: primaryCategory.name,
      url: `https://www.testriq.com/blog/category/${primaryCategory.slug}`,
    });
  }

  items.push({
    name: post.title,
    url: `https://www.testriq.com/blog/post/${post.slug}`,
  });

  return <StructuredData data={createBreadcrumbSchema(items)} />;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // F-64: when draftMode is enabled (editor preview session), fetch via the
  // preview client so the metadata matches the draft body the page renders.
  const { isEnabled: draft } = await draftMode();
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to "Post Not Found" metadata + noindex.
  // ISR (revalidate: 60) will pick up real data on next request when Sanity recovers.
  let post: Post | null = null;
  try {
    post = await sanityGetPostBySlug(slug, draft);
  } catch (err) {
    console.error(`Sanity error fetching post metadata for "${slug}":`, err);
  }

  if (!post) {
    return {
      title: "Post Not Found | Testriq Blog",
      // ...
    };
  }

  // post is already adapted
  // use post....
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.seo.description,
      type: "article",
      publishedTime: post.dateISO,
      modifiedTime: post.modifiedISO,
      authors: [post.author],
      tags: post.tags,
      url: `https://www.testriq.com/blog/post/${post.slug}`,
      siteName: "Testriq",
      locale: "en_US",
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.seo.description,
      images: post.image ? [post.image] : [],
      creator: "@testriq",
      site: "@testriq",
    },
    category: "Technology",
    alternates: {
      canonical: post.seo.canonicalUrl || `https://www.testriq.com/blog/post/${post.slug}`,
      languages: {
        'en-US': post.seo.canonicalUrl || `https://www.testriq.com/blog/post/${post.slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // F-64: route through the preview client when in draftMode so editors see
  // the unpublished draft instead of (or in absence of) the published doc.
  const { isEnabled: isDraft } = await draftMode();
  // Wrap in try/catch so Sanity outages (e.g. plan_limit_reached 402) don't
  // crash prerender — fall back to notFound(). ISR (revalidate: 60) will
  // pick up real data on next request when Sanity recovers.
  let post: Post | null = null;
  try {
    post = await sanityGetPostBySlug(slug, isDraft);
  } catch (err) {
    console.error(`Sanity error fetching post data for "${slug}":`, err);
  }

  if (!post) {
    notFound();
  }

  // Fetch sidebar data — wrapped so failure just hides the sidebar rather
  // than crashing the whole page (main post content is more important).
  let relatedPosts: Awaited<ReturnType<typeof sanityGetRelatedPosts>> = [];
  let categories: Awaited<ReturnType<typeof sanityGetCategories>> = [];
  try {
    relatedPosts = await sanityGetRelatedPosts(post.id, 4);
  } catch (err) {
    console.error(`Sanity error fetching related posts for "${slug}":`, err);
  }
  try {
    categories = await sanityGetCategories();
  } catch (err) {
    console.error(`Sanity error fetching categories for blog post sidebar:`, err);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* F-64: visible-only-to-editors banner when draftMode is active.
          Server-rendered (no client JS), so it shows on initial paint. The
          "Exit preview" link hits /api/draft-mode/disable to clear the
          cookie. Slug ?slug=... so the user lands back here after exit. */}
      {isDraft && (
        <div className="sticky top-0 z-50 bg-amber-500 text-amber-950 text-sm font-medium px-4 py-2 flex items-center justify-center gap-3 shadow-md">
          <span aria-hidden="true">📝</span>
          <span>
            Preview mode active — you&apos;re viewing the latest draft from Sanity, not the published version.
          </span>
          <a
            href={`/api/draft-mode/disable?slug=/blog/post/${post.slug}`}
            className="ml-2 inline-block rounded bg-amber-950 px-3 py-1 text-xs font-semibold text-amber-50 hover:bg-amber-800 transition-colors"
          >
            Exit preview
          </a>
        </div>
      )}
      <MainLayout>
        {/* Custom Structured Data from WordPress */}
        <PostStructuredData post={post} />
        <PostBreadcrumbStructuredData post={post} />

        {/* Blog Post Hero Section with dynamic post data */}
        <BlogPostHeroSection post={post} />

        {/* Main Content - Three Column Layout */}
        <div id="main-content" className="relative max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Left: Visual TOC */}
            <div className="xl:col-span-3">
              <div className="sticky top-24">
                <VisualTableOfContents headings={extractHeadings(post.content)} />
              </div>
            </div>

            {/* Center: Content */}
            <div className="xl:col-span-6">
              <BlogPostContent post={post} />

              {/* Contextual links out to the matching service pages. Sits
                  directly under the article body so it reads as a natural
                  next step, and so the anchors land inside the main content
                  column rather than in sidebar boilerplate. */}
              <RelatedServices
                categorySlugs={post.categories?.map((c) => c.slug) ?? []}
                tags={post.tags ?? []}
                postTitle={post.title}
              />
            </div>

            {/* Right: Resource Sidebar */}
            <div className="xl:col-span-3">
              <ResourceSidebar
                tags={post.tags}
                relatedPosts={relatedPosts}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                categories={categories.map((c: any) => ({
                  name: c.name,
                  count: c.postCount || 0,
                  color: c.color,
                  slug: c.id
                }))}
              />
            </div>
          </div>
        </div>


      </MainLayout>
    </div>
  );
}
