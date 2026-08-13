import dynamic from "next/dynamic";
import { Metadata } from "next";
import StructuredData, { caseStudiesSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";
import { sanityGetAllCaseStudies } from "@/lib/sanity-data-adapter";

const MainLayout = dynamic(
  () => import("@/components/layout/MainLayout"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Software Testing & QA Case Studies | Testriq QA Lab",
  description:
    "Explore our library of software testing case studies. See how Testriq helped Canva, Ragnar, and fintech startups ship higher-quality releases with our Manual & Automation testing strategies.",
  keywords:
    "client case studies, success stories, software testing results, QA case studies, testing testimonials, client testimonials, software quality results, testing ROI, QA success metrics",
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/case-studies",
  },
  openGraph: {
    title:
      "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description:
      "Explore our client success stories and case studies showcasing real results from our software testing services.",
    type: "website",
    url: "https://www.testriq.com/case-studies",
    images: [
      {
        url: "https://www.testriq.com/OG/case-study-og.webp",
        width: 1200,
        height: 800,
        alt: "Testriq Case Studies & Client Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description:
      "Explore our client success stories and case studies showcasing real results from our software testing services.",
    images: [
      "https://www.testriq.com/OG/case-study-twitter.webp",
    ],
  },
};


const CaseStudiesHeroSection = dynamic(
  () => import("@/components/sections/CaseStudiesHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesOverviewSection = dynamic(
  () => import("@/components/sections/CaseStudiesOverviewSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesFeaturedSection = dynamic(
  () => import("@/components/sections/CaseStudiesFeaturedSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesIndustrySection = dynamic(
  () => import("@/components/sections/CaseStudiesIndustrySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesResultsSection = dynamic(
  () => import("@/components/sections/CaseStudiesResultsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesTestimonialsSection = dynamic(
  () => import("@/components/sections/CaseStudiesTestimonialsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesProcessSection = dynamic(
  () => import("@/components/sections/CaseStudiesProcessSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesReadyToStartSection = dynamic(
  () => import("@/components/sections/CaseStudiesReadyToStartSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default async function CaseStudiesPage() {
  // Wrapped so Sanity outages (plan_limit_reached 402) don't crash the
  // page — falls back to empty list (renders the page with hero + filter
  // chips but no case-study cards). ISR picks up real data on next request.
  let caseStudies: Awaited<ReturnType<typeof sanityGetAllCaseStudies>> = [];
  try {
    caseStudies = await sanityGetAllCaseStudies();
  } catch (err) {
    console.error('Sanity error fetching case studies for /case-studies:', err);
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Case Studies", url: "https://www.testriq.com/case-studies" }
  ];

  return (
    <div>
      <StructuredData data={caseStudiesSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <CaseStudiesHeroSection />
        <CaseStudiesOverviewSection />
        <CaseStudiesFeaturedSection caseStudies={caseStudies} />
        <CaseStudiesIndustrySection />
        <CaseStudiesResultsSection />
        <CaseStudiesTestimonialsSection />
        <CaseStudiesProcessSection />
        <CaseStudiesReadyToStartSection />
      </MainLayout>
    </div>
  );
}
