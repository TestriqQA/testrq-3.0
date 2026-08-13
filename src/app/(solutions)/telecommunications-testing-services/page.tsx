import React from "react";
import TelecomHeroSection from "@/components/sections/TelecomHeroSection";
import TelecomChallengesSection from "@/components/sections/TelecomChallengesSection";
import TelecomTestingServicesSection from "@/components/sections/TelecomTestingServicesSection";
import TelecomToolsFrameworksSection from "@/components/sections/TelecomToolsFrameworksSection";
import TelecomNetworkTestingSection from "@/components/sections/TelecomNetworkTestingSection";
import TelecomROISection from "@/components/sections/TelecomROISection";
import TelecomFAQSection from "@/components/sections/TelecomFAQSection";
import TelecomContactSection from "@/components/sections/TelecomContactSection";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, telecommunicationTestingSchema } from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Telecommunication Testing Services",
  description: "Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization.Ensure seamless connectivity with Testriq’s telecom testing services: performance, security, and compliance testing for telecom systems.",
  keywords: [
    "telecommunication testing",
    "5G network testing",
    "VoIP testing",
    "IoT connectivity testing",
    "network performance testing",
    "NFV testing",
    "SDN testing",
    "network security testing",
    "latency optimization",
    "mobile network QA"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/telecommunications-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/telecommunications-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Telecommunication Testing Solutions | 5G & Network QA Services | Testriq',
    description: 'Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization. Ensure seamless connectivity and superior network performance with Testriq.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Telecommunication-Testing-Service-Og.webp',
        width: 1200,
        height: 800,
        alt: 'Telecommunication Testing Solutions by Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Telecommunication Testing Solutions | 5G & Network QA Services | Testriq',
    description: 'Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization. Ensure seamless connectivity and superior network performance with Testriq.',
    images: ['https://www.testriq.com/OG/Telecommunication-Testing-Service-Twitter.webp'],
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



const TelecommunicationTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL;
  // terminal item had trailing whitespace) to 2 canonical items with trimmed name;
  // URL now structurally derived from pathname.
  return (
    <div>
            <StructuredData data={telecommunicationTestingSchema} />
            <StructuredData
              data={createCanonicalBreadcrumb(
                "/telecommunications-testing-services",
                "Telecommunication Testing"
              )}
            />
    <main className="min-h-screen bg-white">
      <TelecomHeroSection />
      <TelecomChallengesSection />
      <TelecomTestingServicesSection />
      <TelecomToolsFrameworksSection />
      <TelecomNetworkTestingSection />
      {/* <TelecomCaseStudiesSection /> */}
      <TelecomROISection />
      <TelecomFAQSection />
      <TelecomContactSection />
    </main>
    </div>
  );
};

export default TelecommunicationTestingPage;

