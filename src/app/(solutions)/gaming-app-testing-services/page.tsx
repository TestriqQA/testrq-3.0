import React from "react";
import GamingHeroSection from "@/components/sections/GamingHeroSection";
import GamingChallengesSection from "@/components/sections/GamingChallengesSection";
import GamingTestingServicesSection from "@/components/sections/GamingTestingServicesSection";
import GamingTestingProcessSection from "@/components/sections/GamingTestingProcessSection";
import GamingPlatformsSection from "@/components/sections/GamingPlatformsSection";
import GamingToolsFrameworkSection from "@/components/sections/GamingToolsFrameworkSection";
import GamingROISection from "@/components/sections/GamingROISection";
import GamingFAQSection from "@/components/sections/GamingFAQSection";
import GamingContactSection from "@/components/sections/GamingContactSection";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, gamingTestingServiceSchema } from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gaming App Testing Services" ,
  description: "Launch flawless, secure, and immersive games. Testriq offers expert gaming app testing services across platforms for peak performance and player satisfaction.",
  keywords: [
    "game testing services",
    "mobile game QA",
    "console game testing",
    "VR game testing",
    "multiplayer testing",
    "performance testing",
    "anti-cheat testing",
    "AR game testing",
    "cloud game QA",
    "game launch readiness"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/gaming-app-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/gaming-app-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Gaming App Testing Solutions | Mobile Game QA & Performance Testing | Testriq',
    description: 'Testriq offers specialized game QA for mobile, console, and VR games—ensuring flawless gameplay, performance, and player retention. Trusted by 500+ gaming studios.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Gaming-App-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Gaming QA Testing Services | Testriq'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Gaming App Testing Solutions | Mobile Game QA & Performance Testing | Testriq',
    description: 'Deliver immersive, high-quality gaming experiences with Testriq’s expert QA testing—covering mobile, console, VR, and multiplayer games.',
    images: ['https://www.testriq.com/OG/Gaming-App-Testing-Service-Twitter.webp'],
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



const GamingTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div>
      <StructuredData data={gamingTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/gaming-app-testing-services",
          "Gaming Testing Service"
        )}
      />
    <main className="min-h-screen bg-white">
      <GamingHeroSection />
      <GamingChallengesSection />
      <GamingTestingServicesSection />
      <GamingTestingProcessSection />
      <GamingPlatformsSection />
      <GamingToolsFrameworkSection />
      {/* <GamingCaseStudiesSection /> */}
      <GamingROISection />
      <GamingFAQSection />
      <GamingContactSection />
    </main>
    </div>
  );
};

export default GamingTestingPage;

