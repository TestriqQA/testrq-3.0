import { notFound } from 'next/navigation';
import { getCityData, getAllCities, CityData, isCityIndexed } from '@/app/lib/CityData';
import { sanityGetCaseStudyBySlug, sanityGetAllCaseStudySlugs, sanityGetRelatedCaseStudies, CaseStudy } from '@/lib/sanity-data-adapter';
import dynamic from "next/dynamic";
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

// Dynamic imports for case study components
const CaseStudyHeroSection = dynamic(
  () => import("@/components/sections/CaseStudyHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyOverviewSection = dynamic(
  () => import("@/components/sections/CaseStudyOverviewSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyChallengeSection = dynamic(
  () => import("@/components/sections/CaseStudyChallengeSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudySolutionSection = dynamic(
  () => import("@/components/sections/CaseStudySolutionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyResultsSection = dynamic(
  () => import("@/components/sections/CaseStudyResultsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyTestimonialSection = dynamic(
  () => import("@/components/sections/CaseStudyTestimonialSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyTechnologiesSection = dynamic(
  () => import("@/components/sections/CaseStudyTechnologiesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyRelatedSection = dynamic(
  () => import("@/components/sections/CaseStudyRelatedSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyCallToActionSection = dynamic(
  () => import("@/components/sections/CaseStudyCallToActionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyPlatformSection = dynamic(
  () => import("@/components/sections/CaseStudyPlatformSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyJourneySection = dynamic(
  () => import("@/components/sections/CaseStudyJourneySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

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

// Map slugs to their specific OG image filenames. Includes overrides for typos in uploaded filenames.
function getCityOgImage(slug: string): string {
  const cityKey = slug.replace("software-qa-testing-services-in-", "");
  
  const overrides: Record<string, string> = {
    "ahmedabad": "Ahemdabad-og-image.webp",
    "ghaziabad": "Ghariabad-og-image.webp",
    "jamshedpur": "Jameshdpur-og-image.webp", // Usually a typo like this
    "manchester": "Manshester-og-image.webp",
    "melbourne": "Melbourn-og-image.webp",
    "christchurch": "Christchurc-og-image.webp",
    "vadodara": "Vadodra-og-image.webp",
    "bangalore": "Bengaluru-og-image.webp",
    "secunderabad": "Secundarabad-og-image.webp",
    "madurai": "Madurai-og-image.webp",
    "ghayathi": "Ghayathi-og-image.webp",
  };

  // Cities with explicitly NO images uploaded
  const noImageCities = ["abu-dhabi", "navi-mumbai", "al-jazirah-al-hamra"];
  
  if (noImageCities.includes(cityKey)) {
    return "https://www.testriq.com/og-image.png";
  }

  // Capitalize first letter of each word to match filename convention (e.g., al-ain -> Al-ain)
  const formatName = (name: string) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
  };

  const filename = overrides[cityKey] || `${formatName(cityKey)}-og-image.webp`;
  
  return `https://www.testriq.com/OG/${filename}`;
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
  const ogImageUrl = getCityOgImage(resolvedParams.slug);
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
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
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

export const revalidate = 3600; // 1 hour — city pages are static, case studies update via Sanity webhooks

export default async function SlugPage({ params }: PageProps) {
  const resolvedParams = await params;
  console.log("SlugPage resolvedParams:", resolvedParams);

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
  const cityData = getCityData(resolvedParams.slug);
  console.log("SlugPage cityData:", cityData);

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

