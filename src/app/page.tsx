import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { organizationSchema, websiteSchema, homeFAQSchema, professionalServiceSchema } from "@/components/seo/StructuredData";

import HomeHeroSection from "@/components/sections/HomeHeroSection";

// These nine are Server Components, so dynamic() shipped no client JS to defer —
// it bought zero bundle saving while costing 9 real Suspense boundaries. `/` is
// prerendered with ISR and their markup is already in the static HTML, so those
// boundaries delivered no streaming benefit either: they only made the browser
// paint a grey skeleton and then swap it via $RC, forcing style recalc + layout.
// Importing them statically also emits their markup in correct DOM order rather
// than inside a hidden div relocated by JS, which is better for crawlers.
import HomeComprehensiveSoftwareTesting from "@/components/sections/HomeComprehensiveSoftwareTesting";
import HomeIndustryExpert from "@/components/sections/HomeIndustryExpert";
import HomeOurImpact from "@/components/sections/HomeOurImpact";
import HomeReadyToElevate from "@/components/sections/HomeReadyToElevate";
import HomeTechStack from "@/components/sections/HomeTechStack";
import HomeChooseTestriq from "@/components/sections/HomeChooseTestriq";
import HomeTrustedCompanies from "@/components/sections/HomeTrustedCompanies";
import HomeProcesses from "@/components/sections/HomeProcesses";
import HomeComplianceSection from "@/components/sections/HomeComplianceSection";

// The three below keep dynamic() for real reasons.

// Genuine "use client" components — dynamic() actually splits their hydration chunk.
const ClientRatingSection = dynamic(
  () => import("@/components/sections/HomeClientRatingSection"),
  {
    ssr: true,
    loading: () => <div className="h-[200px] animate-pulse bg-gray-50" />
  }
);

const HomeFAQSection = dynamic(
  () => import("@/components/sections/HomeFAQSection"),
  {
    ssr: true,
    loading: () => <div className="h-[700px] animate-pulse bg-gray-50" />
  }
);

// An async Server Component (it awaits getPosts(3)). A static import of an async
// component is a hard TS2786 build failure under @types/react 18, so dynamic() is
// what makes this type-check. It is also the only wrapper doing real I/O, so the
// Suspense boundary is worth keeping — it is last in the DOM and stops a slow
// Sanity fetch from ever blocking the shell.
const HomeInsightSection = dynamic(
  () => import("@/components/sections/HomeInsightSection"),
  {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50 shadow-sm" />
  }
);

export default function Home() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {/* Product schema removed: a testing SERVICE is not a Product. The
          price:0 / sku / mpn markup produced Product rich-result snippets that
          GSC showed at position ~43 with 0 clicks. Organization +
          ProfessionalService below are the correct entity types. */}
      <StructuredData data={homeFAQSchema} />
      <StructuredData data={professionalServiceSchema} />
      <MainLayout>
        <HomeHeroSection />
        <HomeComprehensiveSoftwareTesting />
        <HomeComplianceSection />
        <HomeProcesses />
        <HomeOurImpact />
        <ClientRatingSection />
        <HomeReadyToElevate />
        <HomeIndustryExpert />
        <HomeTechStack />
        <HomeTrustedCompanies />
        <HomeChooseTestriq />
        <HomeFAQSection />
        <HomeInsightSection />
      </MainLayout>
    </div>
  );
}
