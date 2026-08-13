import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  mobileAppTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MobileTestingHeroSection from "@/components/sections/MobileTestingHeroSection";
import MobileComprehensiveSection from "@/components/sections/MobileComprehensive";
import MobileReadyToEnsureQuality from "@/components/sections/MobileReadyToEnsureQuality";
import MobileComprehensiveSlider from "@/components/sections/MobileComprehensiveSlider";
import MobileCardSlider from "@/components/sections/MobileCardSlider";
import MobileProvenTestingProcess from "@/components/sections/MobileProvenTestingProcess";
import MobileWhyChooseTestriq from "@/components/sections/MobileWhyChooseTestriq";
import MobileFAQs from "@/components/sections/MobileFAQs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/mobile-application-testing",
    title:
      "Mobile Application Testing | iOS & Android QA | Testriq",
    description:
      "Validate iOS and Android performance with Testriq's mobile testing services. 5G optimization, security pen-testing, and ISO 29119-compliant QA for global teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Mobile_Application-Services-og.webp",
      width: 1200,
      height: 800,
      alt: "Global Mobile App Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "mobile application testing services",
      "ios app testing",
      "android app testing",
      "5g mobile performance testing",
      "mobile app security testing",
      "appium automation testing",
      "iso 29119-3 compliance",
      "mobile qa services",
      "owasp mobile top 10",
      "fintech mobile qa",
    ],
  });
}

export default function MobileAppTesting() {
  // TODO(seo phase-2-followup): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed — was "Ship
  // Faster with Expert Mobile Test Automation | Testriq" + root layout's title
  // template ("%s | Testriq") producing "...Testriq | Testriq". New title leads
  // with the primary keyword "Mobile Application Testing Services". Description
  // rewritten to drop the "2026" time anchor. ogImage.type added; twitter image
  // unified with og:image. 9 dynamic() imports converted to direct ES imports.
  // Breadcrumb was already migrated in PR-3 via createCanonicalBreadcrumb.
  // F-44.1: plain-text mirror of MobileFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What are the best mobile app testing strategies for startups 2026?",
      answer: "The best mobile app testing strategies for startups in 2026 involve a 'Shift-Left' approach. We integrate automated testing directly into your CI/CD pipeline and utilize our Real Device Cloud to maximize coverage while optimizing costs.",
    },
    {
      question: "How to test mobile apps on multiple screen sizes and resolutions?",
      answer: "To test mobile apps on multiple screen sizes and resolutions, we utilize real device cloud testing platforms. These allow us to run automated mobile testing using Appium across hundreds of physical devices simultaneously, identifying UI glitches that emulators miss.",
    },
    {
      question: "Why is mobile application security testing critical for Fintech?",
      answer: "A security testing checklist for fintech mobile applications is vital because these apps handle PII and financial transactions. Our mobile application penetration testing service ensures that encryption, biometric login, and API endpoints are bulletproof.",
    },
    {
      question: "How do you perform performance testing for mobile apps under poor network conditions?",
      answer: "We use network simulation tools to replicate latency, jitter, and packet loss. We test app performance on weak networks to prevent crashes, ensuring a smooth move between 5G, 4G, and offline modes.",
    },
    {
      question: "What is the difference between APK and IPA file testing?",
      answer: "APK and IPA file testing refers to the binary validation of Android and iOS apps, respectively. We audit file integrity and permissions before launch, finding security flaws in the code before your app hits the store using our standardized risk reporting.",
    },
  ];

  return (
    <div>
      <StructuredData data={mobileAppTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/mobile-application-testing",
          "Mobile Application Testing"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <MobileTestingHeroSection />
        <MobileComprehensiveSection />
        <MobileReadyToEnsureQuality />
        <MobileComprehensiveSlider />
        <MobileCardSlider />
        <MobileProvenTestingProcess />
        <MobileWhyChooseTestriq />
        <MobileFAQs />
      </MainLayout>
    </div>
  );
}
