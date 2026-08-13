import React from "react";
import ElearningHeroSection from "@/components/sections/ElearningHeroSection";
import ElearningChallengesSection from "@/components/sections/ElearningChallengesSection";
import ElearningTestingServicesSection from "@/components/sections/ElearningTestingServicesSection";
import ElearningPlatformsSection from "@/components/sections/ElearningPlatformsSection";
import ElearningAccessibilitySection from "@/components/sections/ElearningAccessibilitySection";
import ElearningPerformanceSection from "@/components/sections/ElearningPerformanceSection";
import ElearningFAQSection from "@/components/sections/ElearningFAQSection";
import ElearningContactSection from "@/components/sections/ElearningContactSection";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, elearningTestingServiceSchema } from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "E-Learning Testing Services",
  description:
    "Deliver a flawless online learning experience. Testriq’s e-learning testing services ensure your LMS is functional, secure, accessible, and high-performing.",
  keywords: [
    "e-learning testing",
    "LMS testing services",
    "educational platform QA",
    "online course testing",
    "virtual classroom testing",
    "mobile learning QA",
    "SCORM testing",
    "WCAG 2.1 accessibility testing",
    "xAPI testing",
    "GDPR compliance in education",
    "FERPA security testing",
    "video content QA",
    "multi-device learning testing",
    "education application testing",
    "e-learning QA company"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: "https://www.testriq.com/e-learning-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/e-learning-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title: "E-Learning Testing Services | LMS & Educational Platform QA | Testriq",
    description:
      "Deliver inclusive, scalable, and high-performing learning platforms with Testriq's e-learning testing services. We ensure compliance, security, mobile usability, and engaging learning experiences across devices.",
    images: [
      {
        url: "https://www.testriq.com/OG/E-Learing-Testing-Service-Og.webp",
        width: 1200,
        height: 800,
        alt: "E-Learning Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "E-Learning Testing Services | LMS & Educational Platform QA | Testriq",
    description:
      "Comprehensive e-learning QA including LMS testing, WCAG accessibility, SCORM/xAPI validation, performance optimization, and secure educational platforms.",
    images: ["https://www.testriq.com/OG/E-Learing-Testing-Service-Twitter.webp"],
  },
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

const ElearningTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with a 404
  // URL containing extra trailing "s") to 2 canonical items; URL now structurally
  // derived from pathname.
  return (
    <div>
      <StructuredData data={ elearningTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/e-learning-testing-services",
          "E-Learning Testing"
        )}
      />
    <main className="min-h-screen bg-white">
      <ElearningHeroSection />
      <ElearningChallengesSection />
      <ElearningTestingServicesSection />
      <ElearningPlatformsSection />
      <ElearningAccessibilitySection />
      <ElearningPerformanceSection />
      {/* <ElearningCaseStudiesSection /> */}
      <ElearningFAQSection />
      <ElearningContactSection />
    </main>
    </div>
  );
};

export default ElearningTestingPage;

