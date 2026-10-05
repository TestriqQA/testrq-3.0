import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createBreadcrumbSchema,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata, buildCanonicalUrl, SITE_URL } from "@/lib/seo/metadata";

import NewYorkHeroSection from "@/components/sections/NewYorkHeroSection";
import NewYorkOvernightCycleSection from "@/components/sections/NewYorkOvernightCycleSection";
import NewYorkRealEstateSection from "@/components/sections/NewYorkRealEstateSection";
import NewYorkScopeSection from "@/components/sections/NewYorkScopeSection";
import NewYorkUSRequirementsSection from "@/components/sections/NewYorkUSRequirementsSection";
import NewYorkFAQSection, { newYorkFaqs } from "@/components/sections/NewYorkFAQSection";
import NewYorkNextStepSection from "@/components/sections/NewYorkNextStepSection";

// Static route, matching the /software-qa-testing-services-in-london pattern.
// It previously resolved through the [slug] catch-all off the "new-york" entry
// in CityData.tsx, which renders the nine generic CityTesting* sections. An
// overnight ET/IST timeline, a what-we-don't-test boundary and five US
// regulatory cards have no representation in the CityData shape. Next.js
// resolves a static segment ahead of [slug], so the URL is unchanged and no
// redirect is needed; the old CityData entry was deleted in the same commit so
// one file owns the URL.
//
// INDEXING — this reverses a documented decision. CityData.tsx recorded
// new-york among the cities "Deliberately NOT restored ... (pos 23.1) ... rank
// too deep to earn clicks — a market-presence problem, not a content one". The
// same policy block requires "real, unique local content" before a city is
// restored to the index. This page is not a name-swapped template, so that
// condition is met and the page is index,follow per the content brief. If it
// still fails to earn clicks after a fair window, noindex is a one-line change
// here rather than an edit to the city policy.
const PATHNAME = "/software-qa-testing-services-in-new-york";
const CANONICAL = buildCanonicalUrl(PATHNAME);

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: PATHNAME,
    title: "Software QA Testing Services for New York Teams | Testriq",
    description:
      "Overnight QA for New York software teams: builds tested while you sleep, results in your tracker by morning. Automation, API, performance and security testing.",
    // en_US is the site default, but it is set explicitly here so the pairing
    // with the London page's en_GB is visible rather than implied.
    locale: "en_US",
    ogImage: {
      url: `${SITE_URL}/OG/New-york-og-image.webp`,
      // Real pixel size of the asset on disk.
      width: 1376,
      height: 768,
      alt: "Software Testing and QA Services for New York Teams - Testriq",
      type: "image/webp",
    },
    keywords: [
      "software testing services new york",
      "qa testing company new york",
      "overnight qa testing",
      "offshore qa for us teams",
      "nydfs 23 nycrr 500 testing",
      "soc 2 security testing evidence",
      "nyc local law 144 bias audit testing",
      "wcag 2.1 aa accessibility testing",
      "api and microservices testing",
      "performance testing new york",
    ],
  });
}

// Service entity, transcribed from the content brief. areaServed is a City
// rather than the provider being a LocalBusiness in New York: the page states
// plainly that there is no New York office, and claiming a local business
// presence that does not exist is exactly the kind of schema that earns a
// manual action.
//
// No aggregateRating — the brief says "No fake ratings", and the Clutch reviews
// referenced on the page live on a third-party profile rather than being
// collected here.
const newYorkServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Testing and QA Services for New York Teams",
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
  areaServed: { "@type": "City", name: "New York" },
  url: CANONICAL,
};

export default function NewYorkTestingServicesPage() {
  // Three items, matching the trail NewYorkHeroSection renders.
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Locations We Serve", url: `${SITE_URL}/locations-we-serve` },
    { name: "New York", url: CANONICAL },
  ]);

  // Built from the same array the FAQ section renders, using its plain-text
  // field so the markup carries no JSX.
  const faqSchema = createFaqPageSchema(
    newYorkFaqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <div>
      <StructuredData data={newYorkServiceSchema} />
      <StructuredData data={breadcrumb} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <NewYorkHeroSection />
        <NewYorkOvernightCycleSection />
        <NewYorkRealEstateSection />
        <NewYorkScopeSection />
        <NewYorkUSRequirementsSection />
        <NewYorkFAQSection />
        <NewYorkNextStepSection />
      </MainLayout>
    </div>
  );
}
