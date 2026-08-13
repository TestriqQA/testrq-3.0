import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  exploratoryTestingSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ExploratoryTestingHeroSection from "@/components/sections/ExploratoryTestingHeroSection";
import ExploratoryChallenges from "@/components/sections/ExploratoryChallenges";
import ExploratoryVsScripted from "@/components/sections/ExploratoryVsScripted";
import ExploratoryProvenTestingProcess from "@/components/sections/ExploratoryProvenTestingProcess";
import ExploratoryCompliance from "@/components/sections/ExploratoryCompliance";
import ExploratoryWhyChooseTestriq from "@/components/sections/ExploratoryWhyChooseTestriq";
import ExploratoryToolsFramework from "@/components/sections/ExploratoryToolsFramework";
import ExploratoryCaseStudies from "@/components/sections/ExploratoryCaseStudies";
import ExploratoryFAQs from "@/components/sections/ExploratoryFAQs";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/exploratory-testing",
    title: "Exploratory Testing Services | ISO 29119-2 & ISTQB | Testriq",
    description:
      "Find defects automated tests miss with Testriq's exploratory testing. ISO 29119-2 standards, ISTQB-certified experts, and session-based test management.",
    ogImage: {
      url: "https://www.testriq.com/OG/Exploratory-Testing-OG.webp",
      width: 1200,
      height: 800,
      alt: "Exploratory Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "exploratory testing services",
      "exploratory testing in software testing",
      "session-based testing management",
      "iso 29119-2 compliance",
      "manual exploratory testing",
      "human intuition in testing",
      "test design and execution",
      "uncovering deep-seated defects",
      "agile exploratory testing",
      "rapid reporter tools",
    ],
  });
}

export default function ExploratoryTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Triple-brand-ish title fixed
  // via title.absolute. Previous title ended with "| Testriq QA Lab"
  // and root template "%s | Testriq" produced "... | Testriq QA Lab |
  // Testriq". New title surfaces ISO 29119-2 + ISTQB-Led as the
  // differentiators. Description rewritten — was ~191 chars, now 152.
  // og:title and twitter:title now mirror page title. twitter:image
  // unified with og:image (was a separate -Twitter.webp). ogImage.type
  // "image/webp" added. Keywords lowercased. Section components were
  // already direct imports — no dynamic→direct conversion needed.
  // Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1 batch 2: plain-text mirror of ExploratoryFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the primary benefit of exploratory testing in agile development?",
      answer: "The benefits of exploratory testing in agile development lie in its flexibility. Exploratory testing adapts to mid-sprint changes better than scripted tests. This flexibility helps uncover usability issues and logic flaws that standard 'passing' scripts often miss.",
    },
    {
      question: "How do you perform session-based exploratory testing (SBTM)?",
      answer: "Session-based exploratory testing begins with a specific charter and a 60-90 minute time-box. You then document every action and finding in a dedicated session sheet. The process concludes with a debriefing session to evaluate the 'information gain.'",
    },
    {
      question: "What are some common exploratory testing examples?",
      answer: "An exploratory testing example would be a tester 'touring' a new mobile app's payment gateway. Exploratory testers ignore scripts to find real-world bugs. They might trigger a low-battery alert or switch from Wi-Fi to 5G mid-transaction. They also use 'error guessing' to test the CVV field with invalid data.",
    },
    {
      question: "What are the best practices for documenting exploratory testing sessions?",
      answer: "Effective documentation begins with time-stamped notes and visual evidence. We use Rapid Reporter to capture session details and summarize all findings in an ISO 29119-3 compliant report.",
    },
    {
      question: "Can you automate exploratory testing?",
      answer: "AI tools enhance exploratory testing by crawling applications for broken links and UI flaws. While they cannot replicate human intuition for usability or business logic, they amplify a tester's reach by accelerating low-value repetitive checks.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={exploratoryTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/exploratory-testing",
          "Exploratory Testing"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <ExploratoryTestingHeroSection />
      <ExploratoryChallenges />
      <ExploratoryVsScripted />
      <ExploratoryProvenTestingProcess />
      <ExploratoryCompliance />
      <ExploratoryWhyChooseTestriq />
      <ExploratoryToolsFramework />
      <ExploratoryCaseStudies />
      <ExploratoryFAQs />
    </div>
  );
}
