import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, ourTeamPageSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Testriq QA Leadership Team |Software Testing Experts",
  description: "Meet the leadership team at Testriq QA Lab—visionaries driving excellence in software testing, automation, security, and innovation across global projects.",
  keywords: [
    "Testriq team",
    "QA experts",
    "ISTQB certified testers",
    "software testing professionals",
    "automation testing team",
    "performance testing experts",
    "mobile testing engineers",
    "manual testing specialists",
    "AI testing team",
    "cybersecurity testers"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/our-team',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/our-team',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Meet Our Team - Certified QA Experts | Testriq',
    description: 'Meet Testriq’s team of ISTQB-certified QA professionals with decades of software testing experience. Get to know the leaders and departments behind our testing excellence.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Our_Team_og.webp',
        width: 1200,
        height: 800,
        alt: 'Testriq Certified QA Experts Team',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Meet Our Team - Certified QA Experts | Testriq',
    description: 'Meet Testriq’s team of ISTQB-certified QA professionals with decades of software testing experience. Get to know the leaders and departments behind our testing excellence.',
    images: ['https://www.testriq.com/OG/Out_Team_Twitter.webp'],
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
};


const TeamHeroSection = dynamic(
  () => import("@/components/sections/TeamHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamLeadershipSection = dynamic(
  () => import("@/components/sections/TeamLeadershipSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamMembersSection = dynamic(
  () => import("@/components/sections/TeamMembersSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamCultureSection = dynamic(
  () => import("@/components/sections/TeamCultureSection"),
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

export default function OurTeam() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node — wrong section
  // entirely, this is a non-service page — pointing at /our-team) to 2 canonical
  // items; URL now structurally derived from pathname.
  return (
    <div>
        <StructuredData data={ourTeamPageSchema } />
        <StructuredData
          data={createCanonicalBreadcrumb("/our-team", "Our Team")}
        />
      <MainLayout>
        <TeamHeroSection />
        <TeamLeadershipSection />
        <TeamMembersSection />
        <TeamCultureSection />
        <HomeReadyToElevate />
      </MainLayout>
    </div>
  );
}

