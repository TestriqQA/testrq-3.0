import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaLinkedinIn, FaGithub, FaGlobe, FaLink, FaHome, FaChevronRight, FaArrowRight, FaCertificate } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";
import {
  sanityGetAuthorBySlug,
  sanityGetAllAuthorSlugs,
  sanityGetPostsByAuthor,
  Author,
  Post,
} from "@/lib/sanity-data-adapter";
import { sanityImage } from "@/lib/sanity-image";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  // Wrap in try/catch so Sanity outages (plan_limit_reached 402, network)
  // don't crash the build. Returns empty list — pages render on-demand at
  // request time via dynamicParams = true.
  try {
    const slugs = await sanityGetAllAuthorSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (err) {
    console.error('Sanity error fetching author slugs for generateStaticParams:', err);
    return [];
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://www.testriq.com";

function authorPageUrl(slug: string) {
  return `${SITE_URL}/author/${slug}`;
}

function clip(text: string, max = 160): string {
  if (!text) return "";
  const collapsed = text.replace(/\s+/g, " ").trim();
  if (collapsed.length <= max) return collapsed;
  return collapsed.slice(0, max - 1).trimEnd() + "…";
}

// Combine linkedin + sameAs array; dedupe; drop falsy.
function buildSameAs(author: Author): string[] {
  const all = [author.linkedin, ...author.sameAs].filter(
    (u): u is string => typeof u === "string" && u.length > 0
  );
  return Array.from(new Set(all));
}

function sameAsIcon(url: string) {
  let host = "";
  try {
    host = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return { Icon: FaLink, label: "Profile" };
  }
  if (host.includes("linkedin.")) return { Icon: FaLinkedinIn, label: "LinkedIn" };
  if (host === "x.com" || host.includes("twitter.")) return { Icon: FaXTwitter, label: "X (Twitter)" };
  if (host.includes("github.")) return { Icon: FaGithub, label: "GitHub" };
  if (host.includes("orcid.")) return { Icon: FaCertificate, label: "ORCID" };
  if (host.includes("testriq.")) return { Icon: FaGlobe, label: "Testriq" };
  return { Icon: FaGlobe, label: host };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Wrap in try/catch so Sanity outages don't crash prerender — fall back
  // to "Author Not Found" metadata + noindex. ISR picks up real data on
  // next request when Sanity recovers.
  let author: Author | null = null;
  try {
    author = await sanityGetAuthorBySlug(slug);
  } catch (err) {
    console.error(`Sanity error fetching author metadata for "${slug}":`, err);
  }

  if (!author) {
    return {
      title: "Author Not Found | Testriq",
      robots: { index: false, follow: false },
    };
  }

  // Root layout's title.template = "%s | Testriq" appends the brand, so the
  // page title intentionally omits "| Testriq". OG / Twitter titles bypass
  // the template, so they get the branded variant.
  const pageTitle = `${author.name} — QA Author & Software Testing Expert`;
  const brandedTitle = `${pageTitle} | Testriq`;
  const description = clip(
    author.bio ||
      `Articles by ${author.name} on software testing, QA strategy, and quality engineering — published by Testriq, an ISTQB / ISO 9001 / ISO 27001 certified QA partner.`,
    160
  );
  const canonicalUrl = authorPageUrl(author.slug);
  const ogImage = author.imageRaw
    ? sanityImage(author.imageRaw, { width: 1200, height: 630, quality: 90 })
    // /testriq-logo.png is 7959x2178; receivers crop to ~1.91:1 and show a zoomed
    // slab of the wordmark. This is the same mark already laid out on a 1200x630
    // canvas, which is what the root layout serves.
    : `${SITE_URL}/OG/testriq-logo-og.png`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: brandedTitle,
      description,
      type: "profile",
      url: canonicalUrl,
      siteName: "Testriq",
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: author.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [ogImage],
      creator: "@testriq",
      site: "@testriq",
    },
  };
}

function AuthorPersonStructuredData({ author, postCount }: { author: Author; postCount: number }) {
  const url = authorPageUrl(author.slug);
  const sameAs = buildSameAs(author);
  const image = author.imageRaw
    ? sanityImage(author.imageRaw, { width: 512, height: 512, quality: 90 })
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: author.name,
    url,
    ...(image ? { image } : {}),
    ...(author.bio ? { description: author.bio } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(author.credentials.length
      ? {
          hasCredential: author.credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Certification",
            name: c,
          })),
        }
      : {}),
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Testriq QA Lab",
    },
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": url,
    },
    ...(postCount > 0
      ? {
          subjectOf: {
            "@type": "CreativeWork",
            name: `${postCount} article${postCount === 1 ? "" : "s"} published`,
          },
        }
      : {}),
  };

  return <StructuredData data={schema} />;
}

function AuthorBreadcrumbStructuredData({ author }: { author: Author }) {
  const items = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: author.name, url: authorPageUrl(author.slug) },
  ];
  return <StructuredData data={createBreadcrumbSchema(items)} />;
}

function PostCard({ post }: { post: Post }) {
  const cover = post.mainImage
    ? sanityImage(post.mainImage, { width: 640, height: 360, quality: 80 })
    : post.image || "/blog-demo/hero_performance_dashboard_1769850360523.png";
  const category = post.categories?.[0];
  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
      <Link href={`/blog/post/${post.slug}`} aria-label={post.title}>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <Image
            src={cover}
            alt={post.mainImageAlt || post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-[1.02] transition-transform"
          />
        </div>
      </Link>
      <div className="p-5">
        {category?.name && (
          <Link
            href={`/blog/category/${category.slug}`}
            className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-blue mb-2 hover:underline"
          >
            {category.name}
          </Link>
        )}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          <Link href={`/blog/post/${post.slug}`} className="hover:text-brand-blue transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  // Wrap in try/catch so Sanity outages don't crash prerender — fall back
  // to notFound(). ISR picks up real data on next request when Sanity recovers.
  let author: Author | null = null;
  try {
    author = await sanityGetAuthorBySlug(slug);
  } catch (err) {
    console.error(`Sanity error fetching author data for "${slug}":`, err);
  }
  if (!author) {
    notFound();
  }

  // Posts list — wrapped so failure just shows empty list rather than
  // crashing the whole author page.
  let posts: Post[] = [];
  try {
    posts = await sanityGetPostsByAuthor(author.slug);
  } catch (err) {
    console.error(`Sanity error fetching posts by author "${author.slug}":`, err);
  }
  const sameAs = buildSameAs(author);
  const heroImage = author.imageRaw
    ? sanityImage(author.imageRaw, { width: 320, height: 320, quality: 90 })
    : null;

  return (
    <MainLayout>
      <AuthorPersonStructuredData author={author} postCount={posts.length} />
      <AuthorBreadcrumbStructuredData author={author} />

      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                  <FaHome className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true"><FaChevronRight className="w-3 h-3 text-gray-400" /></li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
              </li>
              <li aria-hidden="true"><FaChevronRight className="w-3 h-3 text-gray-400" /></li>
              <li>
                <span className="text-gray-700 font-medium">{author.name}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={author.name}
                  width={160}
                  height={160}
                  className="rounded-full ring-4 ring-brand-blue/10 object-cover"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-brand-blue to-indigo-600 flex items-center justify-center text-white text-5xl font-bold ring-4 ring-brand-blue/10">
                  {author.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{author.name}</h1>

              {author.credentials.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {author.credentials.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <FaCertificate className="w-3 h-3 mr-1.5" />
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {author.bio && (
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 max-w-2xl">{author.bio}</p>
              )}

              {sameAs.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-gray-500">Find {author.name.split(" ")[0]} on:</span>
                  {sameAs.map((url) => {
                    const { Icon, label } = sameAsIcon(url);
                    return (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer me"
                        aria-label={`${author.name} on ${label}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-brand-blue hover:border-brand-blue transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Articles by {author.name}
              <span className="ml-2 text-base font-normal text-gray-500">
                ({posts.length})
              </span>
            </h2>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:underline"
            >
              All articles <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-gray-600 mb-4">No published articles yet from {author.name}.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
              >
                Browse all articles <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
