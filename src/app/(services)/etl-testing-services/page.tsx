import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  etlTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ETLTestingHeroSection from "@/components/sections/ETLTestingHeroSection";
import ETLComprehensiveSlider from "@/components/sections/ETLComprehensiveSlider";
import ETLProvenTestingProcess from "@/components/sections/ETLProvenTestingProcess";
import ETLWhyChooseTestriq from "@/components/sections/ETLWhyChooseTestriq";
import ETLToolsFramework from "@/components/sections/ETLToolsFramework";
import ETLCaseStudies from "@/components/sections/ETLCaseStudies";
import ETLFAQs from "@/components/sections/ETLFAQs";
import ETLAnyQuestions from "@/components/sections/ETLAnyQuestions";
import ETLComplianceTable from "@/components/sections/ETLComplianceTable";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/etl-testing-services",
    title: "Cloud ETL Testing Services & Data Integrity | Testriq",
    description:
      "Validate cloud ETL pipelines with Testriq's testing services. ISO 8000-1 quality, source-to-target mapping QA, and Snowflake/Databricks migration validation.",
    ogImage: {
      url: "https://www.testriq.com/OG/ETL-Testing-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "ETL Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "cloud etl testing services",
      "data integrity testing",
      "iso 8000-1 compliance",
      "etl automation testing",
      "snowflake data migration validation",
      "source-to-target mapping qa",
      "big data performance testing",
      "data warehouse testing services",
      "etl performance benchmarking",
      "enterprise data quality assurance",
      "icedq and querysurge validation",
    ],
  });
}

export default function ETLTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped " USA" geo-restriction — was "Cloud
  // ETL Testing Services & Data Integrity USA | Testriq" which hurt
  // global SEO. Description rewritten — was ~226 chars with "2026
  // zettabyte era" time anchor; now 157, action-verb start, drops time
  // anchor, surfaces Snowflake/Databricks. twitter:image unified with
  // og:image (was a separate -Twitter.webp with mixed-case typo
  // "ETL-TesTing-Service-Twitter.webp"). ogImage.type "image/webp"
  // added. "Data Integrity USA" keyword normalized. Keywords lowercased.
  // Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1 batch 2: plain-text mirror of ETLFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "How to perform ETL testing step by step?",
      answer: "To perform ETL testing, start by analyzing the source-to-target mapping and validating source data. Next, test the transformation logic in the staging area before finally reconciling the data in the target system. Our methodology follows this ISO 8000 aligned flow to ensure 100% data integrity.",
    },
    {
      question: "What are the best automated ETL testing tools in 2026?",
      answer: "Different ETL tools excel at different tasks. In 2026, Query-Surge dominated high-volume data warehouse testing, while iceDQ specialized in real-time, in-memory validation. For visual test case building, Datagaps ETL Validator remains the top choice. These tools reduce manual effort by up to 80% and are essential for modern DataOps.",
    },
    {
      question: "What is the difference between ETL testing and database testing?",
      answer: "The difference between ETL testing and database testing lies in the scope. Database testing verifies static storage elements like tables and stored procedures. ETL testing ensures data stays accurate as it transforms and flows from multiple sources into a central warehouse.",
    },
    {
      question: "What technical challenges define ETL testing within massive-scale data environments?",
      answer: "Testing high-volume data pipelines presents challenges across three core dimensions: volume, variety, and velocity. To validate billions of real-time records, teams must deploy scalable ETL frameworks. This automation eliminates the 'sampling errors' that often compromise manual data re-conciliation.",
    },
    {
      question: "Why is an ETL testing checklist for data migration important?",
      answer: "An ETL testing checklist provides complete migration coverage. It systematically tracks every phase, from initial metadata validation to final production support. It serves as a guide for ensuring data quality assurance and regulatory compliance during large-scale enterprise transitions.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={etlTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/etl-testing-services", "ETL Testing")}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <ETLTestingHeroSection />
      <ETLComplianceTable />
      <ETLComprehensiveSlider />
      <ETLProvenTestingProcess />
      <ETLWhyChooseTestriq />
      <ETLToolsFramework />
      <ETLCaseStudies />
      <ETLFAQs />
      <ETLAnyQuestions />
    </main>
  );
}
