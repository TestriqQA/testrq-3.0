import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  automationTestingServiceSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AutomationTestingHeroSection from "@/components/sections/AutomationTestingHeroSection";
import AutomationTestingROISection from "@/components/sections/AutomationTestingROISection";
import AutomationComplianceTable from "@/components/sections/AutomationComplianceTable";
import AutomationTestingReadyToEnsureQuality from "@/components/sections/AutomationTestingReadyToEnsureQuality";
import AutomationTestingComprehensiveSlider from "@/components/sections/AutomationTestingComprehensiveSlider";
import AutomationTestingProvenTestingProcess from "@/components/sections/AutomationTestingProvenTestingProcess";
import AutomationTestingToolsFramework from "@/components/sections/AutomationTestingToolsFramework";
import AutomationTestingCaseStudies from "@/components/sections/AutomationTestingCaseStudies";
import AutomationTestingFAQs from "@/components/sections/AutomationTestingFAQs";
import ManualTestingFrameworkArchitecture from "@/components/sections/ManualTestingFrameworkArchitecture";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/automation-testing-services",
    title: "Automation Testing Services | ISO 29119-5 & SOC2 | Testriq",
    description:
      "Scale releases with Testriq's automation testing services. Playwright, Selenium, and Cypress frameworks; ISO 29119-5 and SOC2-aligned QA for enterprise teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Automation-testing-service-og-image.webp",
      width: 2752,
      height: 1536,
      alt: "Automation Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "automation testing services",
      "iso 29119-5 compliance",
      "soc2 certified qa automation",
      "selenium automation frameworks",
      "playwright testing experts",
      "cypress qa automation",
      "ai-augmented testing solutions",
      "enterprise test automation strategy",
      "mobile automation appium",
      "continuous testing ci/cd",
    ],
  });
}

export default function AutomationTestingServices() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. New title adds "Services" (was just "Automation
  // Testing" — missing primary keyword suffix). Description trimmed
  // from ~199 chars to 159, action-verb start, key tools listed first.
  // ogImage.type "image/webp" added. og:title and twitter:title now
  // mirror page title. 9 dynamic() imports converted to direct ES
  // imports (1 was already direct — kept as-is). Breadcrumb already
  // migrated in PR-3 — unchanged.

  // F-44.1: plain-text mirror of AutomationTestingFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the difference between Manual and Automation testing in 2026?",
      answer: "By 2026, the line is clear: Automation testing handles repetitive, data-heavy regression and cross-browser suites, while manual experts focus on UX, exploratory testing, and complex edge cases that require human intuition.",
    },
    {
      question: "Why is ISO 29119-5:2024 important for my business?",
      answer: "ISO 29119-5 is the international standard for test automation. Adherence ensures your QA process is globally recognized, scalable, and follows a structured framework that reduces long-term maintenance costs.",
    },
    {
      question: "How do you calculate automation ROI for micro-services?",
      answer: "We measure ROI by tracking the reduction in code-to-release time and the decrease in defect leakage. For micro-services, we specifically focus on how automation reduces the complexity of integration and data-flow validation.",
    },
    {
      question: "Can you integrate automation with our existing CI/CD pipelines?",
      answer: "Absolutely. Our engineers are experts in Jenkins, GitLab CI, Azure DevOps, and GitHub Actions. We implement a 'Shift-Left' approach, ensuring that every code commit triggers automated smoke and regression tests.",
    },
  ];

  return (
    <div>
      <StructuredData data={automationTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/automation-testing-services",
          "Automation Testing Services"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <AutomationTestingHeroSection />
        <AutomationComplianceTable />
        <AutomationTestingROISection />
        <AutomationTestingComprehensiveSlider />
        <AutomationTestingProvenTestingProcess />
        <ManualTestingFrameworkArchitecture />
        <AutomationTestingToolsFramework />
        <AutomationTestingCaseStudies />
        <AutomationTestingFAQs />
        <AutomationTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
