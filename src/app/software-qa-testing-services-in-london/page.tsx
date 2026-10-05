import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createBreadcrumbSchema,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata, buildCanonicalUrl, SITE_URL } from "@/lib/seo/metadata";

import LondonHeroSection from "@/components/sections/LondonHeroSection";
import LondonUKRequirementsSection from "@/components/sections/LondonUKRequirementsSection";
import LondonClockChangeSection from "@/components/sections/LondonClockChangeSection";
import LondonToolsSection from "@/components/sections/LondonToolsSection";
import LondonFirstTwoWeeksSection from "@/components/sections/LondonFirstTwoWeeksSection";
import LondonOverlapSection from "@/components/sections/LondonOverlapSection";
import LondonEvidenceSection from "@/components/sections/LondonEvidenceSection";
import LondonFAQSection, { londonFaqs } from "@/components/sections/LondonFAQSection";
import LondonNextStepSection from "@/components/sections/LondonNextStepSection";

// A static route segment, deliberately, even though the URL looks like a city
// slug. It previously resolved through the [slug] catch-all off the "london"
// entry in CityData.tsx, which renders the nine generic CityTesting* sections.
// This page's content — a five-row UK regulatory table, a day-by-day onboarding
// plan, a reviewer byline, a third-party reviews block — has no representation
// in the CityData shape, and bending that shape for one city would have
// complicated nine components shared by ~86 other pages.
//
// Next.js resolves a static segment ahead of [slug], so the public URL is
// unchanged and no redirect is needed. The old CityData "london" entry was
// deleted in the same commit: leaving it would have left two files claiming the
// same URL, with only one of them rendering.
//
// Unlike the catch-all city pages this route is index,follow. Those are
// noindex under the H1 thin-content policy (INDEXED_CITY_SLUGS); this page is
// not thin and not templated, so that policy does not apply to it.
const PATHNAME = "/software-qa-testing-services-in-london";
const CANONICAL = buildCanonicalUrl(PATHNAME);

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: PATHNAME,
    title: "Software QA Testing Services for London Teams | Testriq",
    description:
      "Software testing for UK teams, built around UK GDPR, Open Banking, NHS and accessibility requirements. ISTQB-certified engineers, delivered from Mumbai.",
    // en_GB rather than the site default en_US: the page is written in British
    // English for a UK audience and names UK-only regimes.
    locale: "en_GB",
    ogImage: {
      url: `${SITE_URL}/OG/London-og-image.webp`,
      // Real pixel size of the asset on disk, not a rounded 1200x630 — receivers
      // size the preview box from these before the image loads.
      width: 1376,
      height: 768,
      alt: "Software Testing and QA Services for London Teams - Testriq",
      type: "image/webp",
    },
    keywords: [
      "software testing services london",
      "qa testing company london",
      "software testing uk",
      "uk gdpr compliance testing",
      "open banking api testing",
      "nhs software testing",
      "wcag 2.2 aa accessibility testing",
      "istqb certified qa engineers",
      "fca test evidence",
      "uk release testing",
    ],
  });
}

// Service entity for the page. Transcribed from the brief that accompanied this
// content, with the URL derived from the same PATHNAME the canonical uses so
// the two cannot drift.
//
// No aggregateRating. The ratings shown on this page come from third-party
// profiles rather than reviews collected here, and a self-serving rating on a
// Service entity is not eligible for rich results — attaching one risks a
// manual action rather than a star snippet.
const londonServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Testing and QA Services for London Teams",
  serviceType: "Software quality assurance and testing",
  provider: {
    "@type": "Organization",
    name: "Testriq QA Lab LLP",
    url: `${SITE_URL}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
      addressLocality: "Mira Bhayandar, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "401107",
      addressCountry: "IN",
    },
    telephone: "+91-915-2929-343",
    email: "contact@testriq.com",
  },
  areaServed: { "@type": "City", name: "London" },
  url: CANONICAL,
};

export default function LondonTestingServicesPage() {
  // Three items, matching the trail LondonHeroSection actually renders
  // (Home -> Locations We Serve -> London). createCanonicalBreadcrumb is the
  // 2-item helper for service/solution pages; using it here would have produced
  // markup that disagrees with the visible breadcrumb.
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Locations We Serve", url: `${SITE_URL}/locations-we-serve` },
    { name: "London", url: CANONICAL },
  ]);

  // Built from the same array the FAQ section renders, so the markup cannot
  // claim a question the page does not show.
  const faqSchema = createFaqPageSchema(
    londonFaqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <div>
      <StructuredData data={londonServiceSchema} />
      <StructuredData data={breadcrumb} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <LondonHeroSection />
        <LondonUKRequirementsSection />
        <LondonClockChangeSection />
        <LondonToolsSection />
        <LondonFirstTwoWeeksSection />
        <LondonOverlapSection />
        <LondonEvidenceSection />
        <LondonFAQSection />
        <LondonNextStepSection />
      </MainLayout>
    </div>
  );
}
