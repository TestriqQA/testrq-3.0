import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  roboticTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import RoboticTestingHeroSection from "@/components/sections/RoboticTestingHeroSection";
import RoboticComprehensiveSlider from "@/components/sections/RoboticComprehensiveSlider";
import RoboticProvenTestingProcess from "@/components/sections/RoboticProvenTestingProcess";
import RoboticWhyChooseTestriq from "@/components/sections/RoboticWhyChooseTestriq";
import RoboticToolsFramework from "@/components/sections/RoboticToolsFramework";
import RoboticFAQs from "@/components/sections/RoboticFAQs";
import RoboticAnyQuestions from "@/components/sections/RoboticAnyQuestions";
import RoboticComplianceTable from "@/components/sections/RoboticComplianceTable";
import RoboticRPAServices from "@/components/sections/RoboticRPAServices";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/robotics-testing-services",
    title: "Enterprise RPA & Robotics Testing Services | Testriq",
    description:
      "Validate autonomous systems with Testriq's robotics and RPA testing. ISO 10218 compliance, Sim2Real validation, and AI path planning for industrial robots.",
    ogImage: {
      url: "https://www.testriq.com/OG/Robotics-Testing-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "Robotic Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "enterprise rpa testing services",
      "robotic quality assurance",
      "iso 10218 compliance",
      "rpa testing services",
      "physical ai testing",
      "sim2real robotics validation",
      "ros2 middleware testing",
      "autonomous agent qa",
      "collaborative robot safety testing",
      "uipath and blue prism validation",
    ],
  });
}

export default function RoboticTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped " USA" geo-restriction (hurt global
  // SEO) and added "Robotics" alongside "RPA" for symmetric coverage.
  // Description rewritten — was ~163 chars with "2026 automation era"
  // time anchor; now 156 chars, action-verb start, drops time anchor.
  // twitter:image unified with og:image (was a separate
  // Robotics-Testing-service-twitter.webp). ogImage.type "image/webp"
  // added. Keyword "ISO 10218-1:2026 Compliance" generalized to "iso
  // 10218 compliance" (the dated version is not yet a published
  // standard). Other keywords lowercased. Section components were
  // already direct imports — no dynamic→direct conversion needed.
  // Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1 batch 4: plain-text mirror of RoboticFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the difference between RPA and traditional test automation?",
      answer: "The differences between RPA and traditional test automation lie in their integration level. RPA copies human actions directly through the user interface, making it perfect for legacy systems. Traditional automation integrates directly into backend APIs and scripts for long-term stability in the SDLC.",
    },
    {
      question: "How do you implement robotic testing for legacy enterprise systems?",
      answer: "When implementing robotic testing for legacy enterprise systems, we use RPA bots to interact with the presentation layer. We provide complete workflow automation and data validation for your systems. This approach avoids the high cost and risk of changing your backend code.",
    },
    {
      question: "What are the benefits of ISO 10218-1:2026 for my business?",
      answer: "The updated ISO 10218-1:2026 standard makes functional safety requirements explicit rather than implied. This process prepares your robots for global export and reduces the risk of expensive recalls and safety incidents.",
    },
    {
      question: "Can robotic testing validate data from end to end?",
      answer: "Yes. To validate data from end to end, we configure bots to extract information from emails, ERPs, and spreadsheets, then verify that the data remains consistent across all your software systems. Our data validation protocols ensure 100% integrity.",
    },
    {
      question: "What is 'Physical AI' in 2026 robotics?",
      answer: "Physical AI refers to the trend where robots use Generative AI and simulation to 'train' themselves in virtual environments. Fixed code is replaced by learned experience, making robots much more adaptable in changing, real-world environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={roboticTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/robotics-testing-services",
          "Robotic Testing Services"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <RoboticTestingHeroSection />
      <RoboticComplianceTable />
      <RoboticComprehensiveSlider />
      <RoboticProvenTestingProcess />
      <RoboticRPAServices />
      <RoboticWhyChooseTestriq />
      <RoboticToolsFramework />
      <RoboticFAQs />
      <RoboticAnyQuestions />
    </div>
  );
}
