import { notFound } from 'next/navigation';
import { getCityData, getAllCities, CityData, isCityIndexed } from '@/app/lib/CityData';
import { sanityGetCaseStudyBySlug, sanityGetAllCaseStudySlugs, sanityGetRelatedCaseStudies, CaseStudy } from '@/lib/sanity-data-adapter';
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { createBreadcrumbSchema, createFAQSchema } from "@/components/seo/StructuredData";
import CityTestingHeroSection from '@/components/sections/CityTestingHeroSection';
import CityTestingServicesSection from '@/components/sections/CityTestingServicesSection';
import CityTestingProcessSection from '@/components/sections/CityTestingProcessSection';
import CityTestingToolsFrameworkSection from '@/components/sections/CityTestingToolsFrameworkSection';
import CityTestingWhyChooseSection from '@/components/sections/CityTestingWhyChooseSection';
import CityTestingCaseStudiesSection from '@/components/sections/CityTestingCaseStudiesSection';
import CityTestingFAQsSection from '@/components/sections/CityTestingFAQsSection';
import CityTestingCTASection from '@/components/sections/CityTestingCTASection';
import CityTestingTrendingServicesSection from '@/components/sections/CityTestingTrendingServicesSection';

// All eleven CaseStudy* sections are Server Components, so they are imported
// directly rather than through next/dynamic.
//
// Wrapping a Server Component in dynamic() is counter-productive: it forces the
// component across the client boundary into its own lazy client chunk, adds a
// Suspense boundary, and paints the `loading` fallback first. Here that fallback
// was `h-screen` — a full viewport of "Loading..." per section, eleven of them —
// which delays the real content and puts a placeholder where the LCP element
// should be. Commit 41dfb86a removed exactly this pattern from 9 homepage
// sections and cut TBT 270ms -> 74ms. Do not re-wrap these in dynamic().
import CaseStudyHeroSection from "@/components/sections/CaseStudyHeroSection";
import CaseStudyOverviewSection from "@/components/sections/CaseStudyOverviewSection";
import CaseStudyChallengeSection from "@/components/sections/CaseStudyChallengeSection";
import CaseStudySolutionSection from "@/components/sections/CaseStudySolutionSection";
import CaseStudyResultsSection from "@/components/sections/CaseStudyResultsSection";
import CaseStudyTestimonialSection from "@/components/sections/CaseStudyTestimonialSection";
import CaseStudyTechnologiesSection from "@/components/sections/CaseStudyTechnologiesSection";
import CaseStudyRelatedSection from "@/components/sections/CaseStudyRelatedSection";
import CaseStudyCallToActionSection from "@/components/sections/CaseStudyCallToActionSection";
import CaseStudyPlatformSection from "@/components/sections/CaseStudyPlatformSection";
import CaseStudyJourneySection from "@/components/sections/CaseStudyJourneySection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to generate Case Study JSON-LD schema
function generateCaseStudySchema(caseStudy: CaseStudy) {
  return { // <-- RETURNS A SINGLE OBJECT
    "@context": "https://schema.org",
    "@type": ["TechArticle", "Product"], // Dual type allows for Review Stars
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.testriq.com/${caseStudy.slug}`
    },
    "headline": caseStudy.metadata.title || caseStudy.title,
    "description": caseStudy.metadata.description || caseStudy.description,
    "image": caseStudy.image
      ? `https://www.testriq.com${caseStudy.image}`
      : "https://www.testriq.com/og-image.png",

    // TRUST SIGNALS (E-E-A-T)
    "author": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "url": "https://www.testriq.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/testriq-logo.png"
      }
    },

    // CONTENT SIGNALS
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split("T")[0],
    "proficiencyLevel": "Expert",
    "genre": "Case Study",
    "keywords": caseStudy.metadata?.keywords?.join(", "),

    // KNOWLEDGE GRAPH CONNECTIONS (Simplified mentions)
    "about": {
      "@type": "Thing",
      "name": "Software Testing",
      "sameAs": "https://en.wikipedia.org/wiki/Software_testing"
    },
    "mentions": [ // <-- Replaced undefined variables
      {
        "@type": "Organization",
        "name": caseStudy.client
      },
      {
        "@type": "Thing",
        "name": caseStudy.industry
      }
    ],

    // VISUAL SNIPPETS (The Stars)
    "name": caseStudy.title,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": caseStudy.testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": caseStudy.testimonial.author
      },
      "reviewBody": caseStudy.testimonial.quote
    },

  };
}

// Helper function to generate City Page JSON-LD schema.
//
// This models each city page honestly as a Service that Testriq PROVIDES to
// that city — not as a LocalBusiness physically located there.
//
// The previous version emitted "@type": "LocalBusiness" for all ~87 cities,
// which asserts a physical storefront in each one. Testriq has a single office
// (Mira Bhayandar, Maharashtra). Claiming a branch in Mumbai, Toronto, Sydney,
// Abu Dhabi, etc. — every one pinned to "geo": 0,0 (Null Island in the Gulf of
// Guinea) and hardcoded "addressCountry": "IN" even for UAE/Canada/UK cities —
// is a structured-data spam signal and actively undermines the "near me"
// intent these pages target.
//
// The Service model keeps the local-relevance signal via `areaServed` while
// the only physical address is the real HQ, carried on `provider`, which
// references the canonical Organization @id so Google consolidates the entity.
function generateCitySchema(cityData: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Software Testing & QA Services in ${cityData.name}`,
    "serviceType": "Software Testing and Quality Assurance",
    "description": `Professional software testing and QA services for ${cityData.name}, ${cityData.state}. Expert manual testing, automation testing, and quality assurance delivered by Testriq's ISTQB-certified engineers.`,
    "url": `https://www.testriq.com/${cityData.slug}`,
    "provider": {
      "@type": "Organization",
      // Canonical site Organization @id — same anchor used by the blog
      // publisher schema and JobPosting.hiringOrganization, so all city pages
      // reinforce one entity rather than minting 87 separate businesses.
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab",
      "url": "https://www.testriq.com/",
      "telephone": "+91 915-2929-343",
      "email": "contact@testriq.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/testriq-logo.png"
      },
      // The one real, verifiable Testriq address. Kept identical to the
      // Organization address in StructuredData.tsx.
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar",
        "addressLocality": "Mira Bhayandar",
        "addressRegion": "Maharashtra",
        "postalCode": "401107",
        "addressCountry": "IN"
      }
    },
    // Local-relevance signal without claiming a physical presence in the city.
    "areaServed": {
      "@type": "City",
      "name": cityData.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Software Testing Services in ${cityData.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manual Testing",
            "description": `Professional manual testing services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation Testing",
            "description": `Test automation services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Testing",
            "description": `Performance and load testing services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Testing",
            "description": `Security testing and vulnerability assessment in ${cityData.name}`
          }
        }
      ]
    }
  };
}

/**
 * Slug -> OG card filename, one entry per city that has artwork.
 *
 * This used to derive the filename from the slug by capitalising every word
 * (`greater-noida` -> `Greater-Noida-og-image.webp`). The files on disk
 * capitalise only the first word, so 15 cities resolved to a name that does
 * not exist. Windows and macOS have case-insensitive filesystems and served
 * them locally; Vercel's Linux filesystem 404s them, and a 404 under /OG/
 * returns HTML, so crawlers were handed a web page where an image should be.
 * Six more pointed at overrides for artwork that was never uploaded.
 *
 * Filenames here are copied verbatim from `git ls-files public/OG` and are
 * deliberately inconsistent in case (`pune-` vs `Pune-`, `Ahemdabad` for
 * Ahmedabad) because that is what the assets are actually called. Do not
 * "tidy" them without renaming the files in the same commit.
 *
 * Cities absent from this map fall back to CITY_OG_FALLBACK.
 */
const CITY_OG_IMAGE: Record<string, string> = {
  "agra":          "Agra-og-image.webp",
  "ahmedabad":     "Ahemdabad-og-image.webp",
  "ajman":         "Ajman-og-image.webp",
  "ajmer":         "Ajmer-og-image.webp",
  "al-ain":        "Al-ain-og-image.webp",
  "amritsar":      "Amritsar-og-image.webp",
  "ar-rams":       "Ar-Rams-og-image.webp",
  "auckland":      "Auckland-og-image.webp",
  "bangalore":     "Bengaluru-og-image.webp",
  "bhopal":        "Bhopal-og-image.webp",
  "bhubaneswar":   "Bhubaneswar-og-image.webp",
  "brisbane":      "Brisbane-og-image.webp",
  "chandigarh":    "chandigarh-og-image.webp",
  "chennai":       "Chennai-og-image.webp",
  "chicago":       "Chicago-og-image.webp",
  "coimbatore":    "coimbatore-og-image.webp",
  "dehradun":      "Dehradun-og-image.webp",
  "delhi":         "Delhi-og-image.webp",
  "dhaid":         "Dhaid-og-image.webp",
  "dibba-al-hisn": "Dibba-al-hisn-og-image.webp",
  "edinburgh":     "Edinburgh-og-image.webp",
  "ernakulam":     "Ernakulam-og-image.webp",
  "faridabad":     "Faridabad-og-image.webp",
  "fujairah":      "Fujairah-og-image.webp",
  "gandhinagar":   "Gandhinagar-og-image.webp",
  "ghaziabad":     "Ghariabad-og-image.webp",
  "goa":           "Goa-og-image.webp",
  "gorakhpur":     "Gorakhpur-og-image.webp",
  "greater-noida": "Greater-noida-og-image.webp",
  "gurgaon":       "Gurgaon-og-image.webp",
  "guwahati":      "Guwahati-og-image.webp",
  "gwalior":       "Gwalior-og-image.webp",
  "hatta":         "Hatta-og-image.webp",
  "hyderabad":     "Hyderabad-og-image.webp",
  "indore":        "indore-og-image.webp",
  "jaipur":        "Jaipur-og-image.webp",
  "jalandhar":     "Jalandhar-og-image.webp",
  "jammu":         "jammu-og-image.webp",
  "jebel-ali":     "Jebel-ali-og-image.webp",
  "jodhpur":       "Jodhpur-og-image.webp",
  "kalba":         "Kalba-og-image.webp",
  "kanpur":        "Kanpur-og-image.webp",
  "kochi":         "Kochi-og-image.webp",
  "kolkata":       "Kolkata-og-image.webp",
  "liwa-oasis":    "Liwa-oasis-og-image.webp",
  "london":        "London-og-image.webp",
  "los-angeles":   "Los-Angeles-og-image.webp",
  "lucknow":       "Lucknow-og-image.webp",
  "ludhiana":      "Ludhiana-og-image.webp",
  "manchester":    "Manshester-og-image.webp",
  "mangalore":     "Mangalore-og-image.webp",
  "meerut":        "Meerut-og-image.webp",
  "melbourne":     "Melbourn-og-image.webp",
  "montreal":      "Montreal-og-image.webp",
  "moradabad":     "Moradabad-og-image.webp",
  "mumbai":        "Mumbai-og-image.webp",
  "nagpur":        "Nagpur-og-image.webp",
  "nashik":        "Nashik-og-image.webp",
  "new-york":      "New-york-og-image.webp",
  "noida":         "Noida-og-image.webp",
  "patna":         "Patna-og-image.webp",
  "pune":          "pune-og-image.webp",
  "raipur":        "Raipur-og-image.webp",
  "rajkot":        "Rajkot-og-image.webp",
  "ranchi":        "Ranchi-og-image.webp",
  "ras-al-khaimah": "Ras-al-khaimah-og-image.webp",
  "sharjah":       "Sharjah-og-image.webp",
  "shimla":        "Shimla-og-image.webp",
  "surat":         "Surat-og-image.webp",
  "sydney":        "Sydney-og-image.webp",
  "toronto":       "Toronto-og-image.webp",
  "trivandrum":    "Trivandrum-og-image.webp",
  "udaipur":       "Udaipur-og-image.webp",
  "umm-al-quwain": "Umm-al-Quwain-og-image.webp",
  "vadodara":      "vadodra-og-image.webp",
  "vancouver":     "Vancouver-og-image.webp",
  "wellington":    "wellington-og-image.webp",
};

/**
 * Shared card for cities with no artwork of their own. 1200x630 JPEG, 96 KB —
 * correct shape and comfortably inside every platform's size cap.
 *
 * Replaces a reference to `/og-image.png`, which does not exist in `public/`.
 * Because `[slug]` matches any single-segment path, that URL fell through to
 * this very route and answered 200 with HTML instead of 404 — so the card was
 * not merely missing, it was an HTML document served as an image.
 *
 * Currently used by: abu-dhabi, al-dhannah, al-jazirah-al-hamra,
 * christchurch, ghayathi, jamshedpur, madurai, navi-mumbai, secunderabad.
 * navi-mumbai 308-redirects to /software-qa-testing-services-in-mumbai, so
 * it never actually renders this card.
 */
const CITY_OG_FALLBACK = "OG/locations-we-serve-og.jpg";

/**
 * Real pixel dimensions of the city cards, so `og:image:width` / `height`
 * describe the file that is actually served. Receivers size the preview box
 * from these numbers before the image arrives; a wrong pair renders the card
 * letterboxed or cropped. Same contract as F-71's "declare real og:image
 * dimensions" pass — these were all declared 1200x630 while every asset is
 * 1376x768.
 */
const CITY_OG_SIZE = { width: 1376, height: 768 } as const;
/** Guwahati's card was exported at a different size to the other 76. */
const CITY_OG_SIZE_OVERRIDE: Record<string, { width: number; height: number }> = {
  "Guwahati-og-image.webp": { width: 2848, height: 1504 },
};
/** The shared fallback is a true 1200x630 card. */
const CITY_OG_FALLBACK_SIZE = { width: 1200, height: 630 } as const;

type CityOgImage = { url: string; width: number; height: number };

function getCityOgImage(slug: string): CityOgImage {
  const cityKey = slug.replace("software-qa-testing-services-in-", "");
  const filename = CITY_OG_IMAGE[cityKey];

  if (!filename) {
    return {
      url: `https://www.testriq.com/${CITY_OG_FALLBACK}`,
      ...CITY_OG_FALLBACK_SIZE,
    };
  }

  return {
    url: `https://www.testriq.com/OG/${filename}`,
    ...(CITY_OG_SIZE_OVERRIDE[filename] ?? CITY_OG_SIZE),
  };
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;

  // First check if it's a case study
  let caseStudy = null;
  try {
    caseStudy = await sanityGetCaseStudyBySlug(resolvedParams.slug);
  } catch {
    // Sanity unreachable during build - treat as city page
  }
  if (caseStudy) {
    const metadata = caseStudy.metadata;
    // Fixed: Use unique title for each case study to avoid duplicate title tags
    const pageTitle = metadata?.title || `${caseStudy.title} - Case Study | Testriq QA Lab`;
    const pageDescription = metadata?.description || caseStudy.description;
    const canonicalUrl = `https://www.testriq.com/${caseStudy.slug}`;

    return {
      // Bypass root layout's title.template ("%s | Testriq") because pageTitle
      // already ends with "| Testriq QA Lab" / "| Testriq" — without `absolute`
      // the title becomes "...Case Study | Testriq QA Lab | Testriq" (F-71).
      title: { absolute: pageTitle },
      description: pageDescription,
      keywords: metadata?.keywords || ["software testing", "QA", "case study", caseStudy.industry.toLowerCase(), caseStudy.client.toLowerCase()],
      authors: metadata?.authors || [{ name: "Testriq QA Lab" }],
      creator: metadata?.creator || "Testriq QA Lab",
      publisher: metadata?.publisher || "Testriq QA Lab",
      formatDetection: { telephone: false, address: false, email: false },
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        type: "article",
        publishedTime: "2024-01-01", // Replace with actual published date if available
        authors: ["Testriq QA Lab"],
        images: [
          {
            url: `https://www.testriq.com${caseStudy.image}`,
            width: 1200,
            height: 630,
            alt: `${caseStudy.client} Case Study - ${caseStudy.title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [`https://www.testriq.com${caseStudy.image}`],
      },
      verification: metadata?.verification,
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
    };
  }

  // Fall back to city data
  const cityData = getCityData(resolvedParams.slug);

  if (!cityData) {
    return {};
  }

  const pageTitle = cityData.metadata.title;
  const pageDescription = cityData.metadata.description;
  const canonicalUrl = `https://www.testriq.com/${cityData.slug}`;
  const ogImage = getCityOgImage(resolvedParams.slug);
  // H1 thin-content cleanup: only lead-generating cities stay indexed; every
  // other city page is noindex (still follow, so internal links are crawled).
  const cityIndexed = isCityIndexed(cityData.slug);

  return {
    // Bypass root layout's title.template — CityData entries already end with
    // "| Testriq", so without `absolute` the rendered <title> doubles to
    // "...| Testriq | Testriq" (F-71, verified live on /pune etc.).
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: cityData.metadata.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage.url],
    },
    robots: {
      index: cityIndexed,
      follow: true,
      googleBot: {
        index: cityIndexed,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// 1 hour ISR window. The old comment here claimed case studies refresh
// instantly "via Sanity webhooks" — no such webhook route exists in this
// repo (checked src/app/api/**), so a Sanity edit is invisible on the live
// page for up to this full hour, not instantly. A real fix would add a
// /api/revalidate route (verifying Sanity's webhook signature) that calls
// revalidatePath for the edited slug. Until then, force a fresh deploy to
// bust the cache immediately.
export const revalidate = 3600;

export default async function SlugPage({ params }: PageProps) {
  const resolvedParams = await params;

  // First check if it's a case study
  let caseStudy = null;
  try {
    caseStudy = await sanityGetCaseStudyBySlug(resolvedParams.slug);
  } catch {
    // Sanity unreachable - fall through to city page
  }
  if (caseStudy) {
    const caseStudySchema = generateCaseStudySchema(caseStudy);
    // F-43: BreadcrumbList for case study pages — Home → Case Studies → {title}.
    const caseStudyBreadcrumb = createBreadcrumbSchema([
      { name: "Home", url: "https://www.testriq.com/" },
      { name: "Case Studies", url: "https://www.testriq.com/case-studies" },
      { name: caseStudy.title, url: `https://www.testriq.com/${caseStudy.slug}` },
    ]);
    // Wrapped — failure here just hides the related-studies sidebar block
    // rather than crashing the whole case-study page.
    let relatedCaseStudies: Awaited<ReturnType<typeof sanityGetRelatedCaseStudies>> = [];
    try {
      relatedCaseStudies = await sanityGetRelatedCaseStudies(caseStudy.slug, 2);
    } catch (err) {
      console.error(`Sanity error fetching related case studies for "${caseStudy.slug}":`, err);
    }

    return (
      <div>
        <StructuredData data={caseStudySchema} />
        <StructuredData data={caseStudyBreadcrumb} />
        <MainLayout>
          <CaseStudyHeroSection caseStudy={caseStudy} />
          <CaseStudyOverviewSection caseStudy={caseStudy} />
          <CaseStudyPlatformSection caseStudy={caseStudy} />
          <CaseStudyChallengeSection caseStudy={caseStudy} />
          <CaseStudySolutionSection caseStudy={caseStudy} />
          <CaseStudyResultsSection caseStudy={caseStudy} />
          <CaseStudyJourneySection caseStudy={caseStudy} />
          <CaseStudyTestimonialSection caseStudy={caseStudy} />
          <CaseStudyTechnologiesSection caseStudy={caseStudy} />
          <CaseStudyRelatedSection relatedCaseStudies={relatedCaseStudies} />
          <CaseStudyCallToActionSection />
        </MainLayout>
      </div>
    );
  }

  // Fall back to city data
  // NB: do not console.log(cityData) here. It serialises the entire city record
  // on every single request to all ~87 city pages, adding server work and log
  // volume directly on the TTFB path for zero benefit.
  const cityData = getCityData(resolvedParams.slug);

  if (!cityData) {
    notFound();
  }

  const citySchema = generateCitySchema(cityData);
  // F-43: BreadcrumbList for city pages — Home → Locations We Serve → {city}.
  // /locations-we-serve is the live cities hub (verified 200) — also the 308
  // redirect target for the F-68 broken-city URLs, so it's the right parent.
  const cityBreadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Locations We Serve", url: "https://www.testriq.com/locations-we-serve" },
    { name: cityData.name, url: `https://www.testriq.com/${cityData.slug}` },
  ]);
  // F-43: FAQPage for city pages — drawn from the FAQ section the page already
  // renders (CityTestingFAQsSection). Skip if a city has no FAQ entries (defensive).
  const cityFAQSchema =
    cityData.faqsContent?.faqs && cityData.faqsContent.faqs.length > 0
      ? createFAQSchema(cityData.faqsContent.faqs)
      : null;

  return (
    <div className="city-page">
      <StructuredData data={citySchema} />
      <StructuredData data={cityBreadcrumb} />
      {cityFAQSchema && <StructuredData data={cityFAQSchema} />}
      <CityTestingHeroSection cityData={cityData} />
      <CityTestingServicesSection cityData={cityData} />
      <CityTestingProcessSection cityData={cityData} />
      <CityTestingToolsFrameworkSection cityData={cityData} />
      <CityTestingWhyChooseSection cityData={cityData} />
      <CityTestingCaseStudiesSection cityData={cityData} />
      <CityTestingTrendingServicesSection cityData={cityData} />
      <CityTestingFAQsSection cityData={cityData} />
      <CityTestingCTASection cityData={cityData} />
    </div>
  );
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const cities = getAllCities();

  let caseStudySlugs: string[] = [];
  try {
    caseStudySlugs = await sanityGetAllCaseStudySlugs();
    console.log("Generated case study slugs:", caseStudySlugs);
  } catch (err) {
    console.warn("Could not fetch case study slugs from Sanity (network error during build). Case study pages will be rendered on-demand.", err);
  }

  console.log("Generated city slugs:", cities.map((city) => city.slug));

  // Combine both city and case study slugs
  const allSlugs = [
    ...cities.map((city) => ({ slug: city.slug })),
    ...caseStudySlugs.map((slug: string) => ({ slug }))
  ];

  return allSlugs;
}

