import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";
import { buildCareersPageSchema } from "@/components/seo/jobPostingSchema";
import { sanityGetAllJobOpenings } from "@/lib/sanity-data-adapter";

// ISR: revalidate every 60 seconds
export const revalidate = 60;

const CareersHeroSection = dynamic(
  () => import("@/components/sections/CareersHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CareersValuesSection = dynamic(
  () => import("@/components/sections/CareersValuesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CareersOpenPositions = dynamic(
  () => import("@/components/sections/CareersOpenPositions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CareersBenefitsSection = dynamic(
  () => import("@/components/sections/CareersBenefitsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// const CareersCultureSection = dynamic(
//   () => import("@/components/sections/CareersCultureSection"),
//   {
//     ssr: true,
//     loading: () => (
//       <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     ),
//   }
// );

const CareersApplicationProcessSection = dynamic(
  () => import("@/components/sections/CareersApplicationProcessSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Careers | Join Our QA Testing Team at Testriq",

  description: "Discover a workplace that values growth, collaboration, and excellence. Unleash your potential with testriq Careers.. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.",
  keywords: [
    "QA careers",
    "software testing jobs",
    "automation testing jobs",
    "remote QA jobs",
    "QA engineer openings",
    "join Testriq",
    "QA hiring",
    "manual testing jobs",
    "performance testing roles",
    "AI testing jobs",
    "Testriq jobs",
    "QA analyst jobs"
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
    canonical: 'https://www.testriq.com/careers',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/careers',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Careers | Join Our QA Testing Team at Testriq | Testriq',
    description: 'Explore QA career opportunities at Testriq. Join a global team of software testing professionals. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Careers-Og.webp',
        width: 1200,
        height: 800,
        alt: 'Careers at Testriq - QA Testing Jobs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Careers | Join Our QA Testing Team at Testriq | Testriq',
    description: 'Explore QA career opportunities at Testriq. Join a global team of software testing professionals. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.',
    images: ['https://www.testriq.com/OG/Careers-Twitter.webp'],
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


const CareersPage = async () => {
  // Fetch job openings from Sanity (server-side, with ISR). Wrapped so
  // Sanity outages (plan_limit_reached 402) don't crash the page — falls
  // back to empty list (renders the careers page without job postings).
  let jobOpenings: Awaited<ReturnType<typeof sanityGetAllJobOpenings>> = [];
  try {
    jobOpenings = await sanityGetAllJobOpenings();
  } catch (err) {
    console.error('Sanity error fetching job openings for /careers:', err);
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Careers Page", url: "https://www.testriq.com/careers" }
  ];
  return (
    <div>
      <StructuredData data={buildCareersPageSchema(jobOpenings)} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <main className="min-h-screen bg-gray-50">
        <CareersHeroSection />
        <CareersValuesSection />
        <CareersOpenPositions jobOpenings={jobOpenings} />
        <CareersBenefitsSection />
        {/* <CareersCultureSection /> */}
        <CareersApplicationProcessSection />
      </main>
    </div>
  );
};

export default CareersPage;

