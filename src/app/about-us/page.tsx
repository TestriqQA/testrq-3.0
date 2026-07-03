import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { aboutPageSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About Testriq | ISO 9001 Certified Software Testing Company",

  description: "Testriq QA Lab is a globally trusted software testing company with 15+ years of experience. We provide ISTQB certified QA solutions, Automation, and Security testing.",
  keywords: [
    "about Testriq",
    "software testing company",
    "QA company India",
    "ISTQB certified testers",
    "QA team certifications",
    "QA company profile",
    "quality assurance partner",
    "software testing experts",
    "QA journey",
    "Testriq story"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/about-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/about-us',
    siteName: 'Testriq QA Lab',
    title: 'About Testriq | ISO 9001 Certified Software Testing Company',
    description: '15+ years of QA expertise. ISTQB-certified experts partnering with global teams to ship reliable, well-tested software.',
    images: [
      {
        url: 'https://www.testriq.com/OG/About-Us-og.webp',
        width: 1200,
        height: 630,
        alt: 'About Testriq QA Lab - Trusted Software Testing Company',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'About Us - Testriq QA Lab | Trusted Software Testing Company',
    description: 'Learn about Testriq QA Lab – a globally trusted software testing company with 14+ years of experience. Discover our mission, values, journey, certifications, and why top companies trust our QA excellence.',
    images: ['https://www.testriq.com/OG/About-us-twitter.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
  },
};



const AboutHeroSection = dynamic(
  () => import("@/components/sections/AboutHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutStorySection = dynamic(
  () => import("@/components/sections/AboutStorySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutMissionSection = dynamic(
  () => import("@/components/sections/AboutMissionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutValuesSection = dynamic(
  () => import("@/components/sections/AboutValuesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutAchievementsSection = dynamic(
  () => import("@/components/sections/AboutAchievementsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeReadyToElevate = dynamic(
  () => import("@/components/sections/HomeReadyToElevate"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutFAQ = dynamic(
  () => import("@/components/sections/AboutFAQ"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AboutUs() {
  // F-44.2: terminal name was "about Page" (lowercase + redundant "Page"
  // suffix) — long-standing typo flagged in PR-3 audit. Fixed to sentence
  // case "About Us" matching the page title. The matching aboutPageSchema
  // BreadcrumbList block was also removed in this PR so /about-us emits
  // exactly one canonical BreadcrumbList instead of two.
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "About Us", url: "https://www.testriq.com/about-us" }
  ];
  return (
    <div>
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutAchievementsSection />
        <HomeReadyToElevate />
        <AboutFAQ />
      </MainLayout>
    </div>
  );
}

