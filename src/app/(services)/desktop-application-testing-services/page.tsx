import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  desktopAppTestingSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import DesktopTestingHeroSection from "@/components/sections/DesktopTestingHeroSection";
import DesktopChallenges from "@/components/sections/DesktopChallenges";
import DesktopCompliance from "@/components/sections/DesktopCompliance";
import DesktopTechStack from "@/components/sections/DesktopTechStack";
import DesktopCardSlider from "@/components/sections/DesktopCardSlider";
import DesktopWhyChooseTestriq from "@/components/sections/DesktopWhyChooseTestriq";
import DesktopFAQs from "@/components/sections/DesktopFAQs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/desktop-application-testing-services",
    title: "Desktop Application Testing | Cross-Platform QA | Testriq",
    description:
      "Validate desktop apps across Windows, macOS, and Linux with Testriq's testing. Installer, performance, and security QA for enterprise software.",
    ogImage: {
      url: "https://www.testriq.com/OG/Desktop-Application-Service-OG.webp",
      width: 1200,
      height: 630,
      alt: "Desktop Application Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "desktop application testing",
      "desktop app qa services",
      "windows app testing",
      "macos application testing",
      "linux desktop testing",
      "cross-platform desktop testing",
      "wpf and winforms testing",
      "desktop performance testing",
      "exe and msi installer testing",
      "offline functionality testing",
      "desktop security testing",
      "enterprise software qa",
    ],
  });
}

export default function DesktopAppTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. New title surfaces full primary keyword "Desktop
  // Application Testing Services" (was abbreviated to "Desktop App
  // Testing & QA Services"). Description rewritten — was ~236 chars
  // (well over Google's snippet cutoff), now 144 with action-verb start.
  // twitter:image unified with og:image (was a separate -Twitter.webp).
  // ogImage.type "image/webp" added. Keywords lowercased. 7 dynamic()
  // imports converted to direct ES imports. Breadcrumb already migrated
  // in PR-3 — unchanged.
  // F-44.1 batch 3: plain-text mirror of DesktopFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What are the best practices for desktop application performance testing?",
      answer: "To test desktop performance effectively, we first establish a baseline on a 'clean' OS. We then simulate resource-heavy background tasks and monitor for memory leaks during extended 'soak' periods, ensuring optimal performance.",
    },
    {
      question: "How to test desktop software without an internet connection?",
      answer: "To ensure a reliable user experience, we test local data caching and offline stability. We then confirm that all data syncs correctly the moment the application reconnects to the internet.",
    },
    {
      question: "What is the difference between .EXE and .MSI package testing?",
      answer: ".EXE and .MSI package testing focus on different installers. Our MSI testing evaluates database-driven logic and rollback safety. Meanwhile, we validate EXE files by focusing on custom wrapper scripts and user-permission prompts.",
    },
    {
      question: "Can I use Selenium for desktop app testing?",
      answer: "Selenium is primarily for web browsers. Appium (WinAppDriver) and TestComplete are our preferred tools for Windows 11 UI automation. They provide the deep integration needed to handle native desktop elements.",
    },
    {
      question: "Why is hardware compatibility (RAM, CPU, GPU) testing important?",
      answer: "Desktop applications interact directly with local system resources. Hardware compatibility testing is essential for enterprise software to ensure stability across legacy CPUs and diverse GPU configurations.",
    },
  ];

  return (
    <div>
      <StructuredData data={desktopAppTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/desktop-application-testing-services",
          "Desktop Application Service"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <DesktopTestingHeroSection />
        <DesktopChallenges />
        <DesktopCompliance />
        <DesktopTechStack />
        <DesktopCardSlider />
        <DesktopWhyChooseTestriq />
        <DesktopFAQs />
      </MainLayout>
    </div>
  );
}
