import { MetadataRoute } from 'next';
import {
  sanityGetPosts,
  sanityGetCategories,
  sanityGetTags,
  sanityGetPages,
  sanityGetAllCaseStudies,
  CaseStudy
} from '@/lib/sanity-data-adapter';
import { getAllCities, CityData, isCityIndexed } from '@/app/lib/CityData';
import { redirects } from '@/lib/redirects';
// F-31: discoverRoutes extracted to a shared lib so /website-map (HTML
// sitemap) can use the same auto-discovery instead of a hardcoded
// manualLinks array that drifts out of sync.
import { discoverRoutes } from '@/lib/seo/discover-routes';

// Revalidate the sitemap every hour (matches service page revalidation)
export const revalidate = 3600;

// Function to determine change frequency based on content type and last modified date
function getChangeFrequency(contentType: 'home' | 'page' | 'post' | 'category' | 'tag' | 'service' | 'solution' | 'city' | 'case-study', lastModified?: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  const now = new Date();
  const modifiedDate = lastModified ? new Date(lastModified) : now;
  const daysSinceModified = Math.floor((now.getTime() - modifiedDate.getTime()) / (1000 * 60 * 60 * 24));

  switch (contentType) {
    case 'home':
      return 'weekly';
    case 'post':
      return daysSinceModified < 30 ? 'weekly' : 'monthly';
    case 'category':
    case 'tag':
      return 'weekly';
    case 'service':
    case 'solution':
      return 'monthly';
    case 'city':
      return 'monthly';
    case 'case-study':
      return 'yearly';
    case 'page':
    default:
      return daysSinceModified < 90 ? 'monthly' : 'yearly';
  }
}

// Function to determine priority based on content type and importance
function getPriority(contentType: 'home' | 'page' | 'post' | 'category' | 'tag' | 'service' | 'solution' | 'city' | 'case-study', slug?: string): number {
  switch (contentType) {
    case 'home':
      return 1.0;
    case 'service':
      return 0.9;
    case 'solution':
      return 0.8;
    case 'city':
      return 0.7;
    case 'case-study':
      return 0.6;
    case 'page':
      if (slug && ['about-us', 'contact-us', 'careers'].includes(slug)) {
        return 0.8;
      }
      return 0.7;
    case 'post':
      return 0.7;
    case 'category':
      return 0.6;
    case 'tag':
      return 0.5;
    default:
      return 0.5;
  }
}

// Helper to reliably escape ampersands in image URLs for XML compatibility
function escapeImage(url: string | null | undefined): string {
  if (!url) return '';
  // Only replace & if it's not already escaped
  return url.replace(/&(?!(amp;|lt;|gt;|quot;|apos;))/g, '&amp;');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.testriq.com';

  // Stable lastmod for code-defined pages (static / service / solution / city /
  // case-study / category / tag). Previously these used `new Date()`, so every
  // hourly sitemap regeneration advertised "modified today" for ~200 URLs —
  // which trains Google to distrust the lastmod signal entirely. This constant
  // only changes when the team ships a meaningful content update to those
  // pages; bump it then. Sanity-sourced pages/posts keep their real per-doc
  // modified dates (see the `page.date` / `post.modifiedISO` usages below).
  const STATIC_LASTMOD = new Date('2026-07-22T00:00:00Z');

  try {
    // Static Next.js pages
    const staticNextJSPages = [
      { slug: '', title: 'Home' },
      { slug: 'about-us', title: 'About Us' },
      { slug: 'our-team', title: 'Our Team' },
      { slug: 'careers', title: 'Careers' },
      { slug: 'contact-us', title: 'Contact Us' },
      { slug: 'case-studies', title: 'Case Studies' },
      { slug: 'technology-stack', title: 'Tools' },
      { slug: 'roi-calculator', title: 'ROI Calculator' },
      { slug: 'locations-we-serve', title: 'Locations We Serve' },
      { slug: 'privacy-policy', title: 'Privacy Policy' },
      { slug: 'terms-of-service', title: 'Terms of Service' },
      { slug: 'cookies-policy', title: 'Cookies Policy' },
      { slug: 'blog', title: 'Blog' },
      { slug: 'blog/categories', title: 'Blog Categories' },
      { slug: 'blog/search', title: 'Blog Search' },
    ];

    const staticPages = staticNextJSPages.map(page => ({
      url: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency(page.slug === '' ? 'home' : 'page'),
      priority: getPriority(page.slug === '' ? 'home' : 'page', page.slug),
    }));

    // Service pages — auto-discovered from src/app/(services)/ filesystem.
    // Previously a hardcoded 24-entry array that drifted out of sync with
    // reality: as of 2026-05-13 the filesystem held 45 services but only
    // 24 were in the sitemap (21 pages invisible to Google sitemap-based
    // discovery despite all going through metadata/breadcrumb cleanup in
    // Phases 1-4). Auto-discovery via discoverRoutes() eliminates the drift.
    const servicePages = discoverRoutes('src/app/(services)').map(service => ({
      url: `${baseUrl}/${service}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('service'),
      priority: getPriority('service'),
    }));

    // Solution pages — auto-discovered from src/app/(solutions)/ filesystem.
    // Was already in sync (7 hardcoded / 7 on disk) but converted for
    // consistency and to prevent future drift.
    const solutionPages = discoverRoutes('src/app/(solutions)').map(solution => ({
      url: `${baseUrl}/${solution}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('solution'),
      priority: getPriority('solution'),
    }));

    // Dynamic City Pages
    // H1 thin-content cleanup: only indexed (lead-gen) cities go in the sitemap;
    // the noindexed city pages are excluded so we don't advertise them to Google.
    const allCities = getAllCities().filter((city: CityData) => isCityIndexed(city.slug));
    const cityPages = allCities.map((city: CityData) => ({
      url: `${baseUrl}/${encodeURIComponent(city.slug)}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('city'),
      priority: getPriority('city'),
    }));

    // Dynamic Case Study Pages (from Sanity)
    const allCaseStudies = await sanityGetAllCaseStudies();
    const caseStudyPages = allCaseStudies.map((caseStudy: CaseStudy) => ({
      url: `${baseUrl}/${encodeURIComponent(caseStudy.slug)}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('case-study'),
      priority: getPriority('case-study'),
      images: caseStudy.image ? [escapeImage(caseStudy.image.startsWith('http') ? caseStudy.image : `${baseUrl}${caseStudy.image}`)] : undefined,
    }));

    // Sanity Pages
    const sanityPagesData = await sanityGetPages();
    const sanityPages = sanityPagesData.map((page) => ({
      url: `${baseUrl}/${encodeURIComponent(page.slug)}`,
      lastModified: new Date(page.date || STATIC_LASTMOD),
      changeFrequency: getChangeFrequency('page'),
      priority: getPriority('page', page.slug),
      images: page.image ? [escapeImage(page.image)] : undefined,
    }));

    // Sanity Blog Posts
    const sanityPostsData = await sanityGetPosts();
    const blogPosts = sanityPostsData
      .filter((post) => {
        // Filter out posts that have a custom canonical URL different from their own URL
        // uniqueEntriesMap will deduplicate based on URL, but this filter prevents "Non-canonical" error
        // for pages that point elsewhere.
        const postUrl = `${baseUrl}/blog/post/${encodeURIComponent(post.slug)}`;
        if (post.seo?.canonicalUrl && post.seo.canonicalUrl !== postUrl) {
          return false;
        }
        return true;
      })
      .map((post) => ({
        url: `${baseUrl}/blog/post/${encodeURIComponent(post.slug)}`,
        lastModified: new Date(post.modifiedISO || post.dateISO),
        changeFrequency: getChangeFrequency('post', post.modifiedISO),
        priority: getPriority('post'),
        images: post.image ? [escapeImage(post.image)] : undefined,
      }));

    // Sanity Categories
    const sanityCategoriesData = await sanityGetCategories();
    const categoryPages = sanityCategoriesData.map((category) => ({
      url: `${baseUrl}/blog/category/${encodeURIComponent(category.id)}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('category'),
      priority: getPriority('category'),
    }));

    // Sanity Tags
    const sanityTagsData = await sanityGetTags();
    const tagPages = sanityTagsData.map((tag) => ({
      url: `${baseUrl}/blog/tag/${encodeURIComponent(tag.slug)}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: getChangeFrequency('tag'),
      priority: getPriority('tag'),
    }));

    // Combine all sitemap entries
    const allSitemapEntries = [
      ...staticPages,
      ...servicePages,
      ...solutionPages,
      ...cityPages,
      ...caseStudyPages,
      ...sanityPages,
      ...blogPosts,
      ...categoryPages,
      ...tagPages,
    ];

    // Deduplicate entries based on URL
    const uniqueEntriesMap = new Map<string, MetadataRoute.Sitemap[number]>();

    allSitemapEntries.forEach(entry => {
      // Normalize URL to avoid subtle dupes (e.g. trailing slash logic if needed, but strict here)
      const url = entry.url;

      if (!uniqueEntriesMap.has(url)) {
        uniqueEntriesMap.set(url, entry);
      } else {
        // Conflict resolution: keep the one with higher priority, or if equal, the newer one
        const existing = uniqueEntriesMap.get(url)!;

        // If strict priority check needed:
        if ((entry.priority || 0.5) > (existing.priority || 0.5)) {
          uniqueEntriesMap.set(url, entry);
        }
      }
    });

    const uniqueSitemapEntries = Array.from(uniqueEntriesMap.values());

    // Sort by priority (highest first) and then by lastModified (newest first)
    uniqueSitemapEntries.sort((a, b) => {
      if (b.priority! !== a.priority!) {
        return b.priority! - a.priority!;
      }
      return new Date(b.lastModified!).getTime() - new Date(a.lastModified!).getTime();
    });

    // ---------------------------------------------------------------------------
    // FILTERING LOGIC: Remove Redirected & Broken URLs
    // ---------------------------------------------------------------------------

    // 1. Create a Set of all redirect sources (normalized)
    const redirectSources = new Set(redirects.map((r) => r.source));

    // 2. Define Manual Blocklist for known broken URLs (relative paths)
    const BLOCKED_PATHS = new Set([
      '/blog/tag/Regression-Testing',        // User reported redirect
    ]);

    const finalSitemapEntries = uniqueSitemapEntries.filter((entry) => {
      try {
        const urlObj = new URL(entry.url);
        const path = urlObj.pathname;

        // Check if path is in redirects
        if (redirectSources.has(path)) {
          // console.log(`[Sitemap] Excluding Redirected URL: ${entry.url}`);
          return false;
        }

        // Check if path is in manual blocklist
        if (BLOCKED_PATHS.has(path)) {
          // console.log(`[Sitemap] Excluding Blocked URL: ${entry.url}`);
          return false;
        }

        // Specific check for encoded slugs if needed, but pathname is usually decoded by browser/console 
        // but here we deal with what we generated.
        // We generated with encodeURIComponent. 
        // URL.pathname is usually decoded. Let's match against exact generation if possible
        // Or just check strictly against the source string from redirects which are like "/foo"

        // Double check against unencoded path just in case
        if (redirectSources.has(decodeURIComponent(path))) {
          return false;
        }

        return true;
      } catch (e) {
        // If URL parsing fails, keep it or log error (unlikely here as we perform construction)
        return true;
      }
    });

    return finalSitemapEntries;

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [
      {
        url: baseUrl,
        lastModified: STATIC_LASTMOD,
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
    ];
  }
}