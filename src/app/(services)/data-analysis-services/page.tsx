import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  dataAnalysisServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import DataAnalysisHeroSection from "@/components/sections/DataAnalysisHeroSection";
import DataAnalysisChallenges from "@/components/sections/DataAnalysisChallenges";
import DataAnalysisComprehensiveSlider from "@/components/sections/DataAnalysisComprehensiveSlider";
import DataAnalysisProvenTestingProcess from "@/components/sections/DataAnalysisProvenTestingProcess";
import DataAnalysisWhyChooseTestriq from "@/components/sections/DataAnalysisWhyChooseTestriq";
import DataAnalysisToolsFramework from "@/components/sections/DataAnalysisToolsFramework";
import DataAnalysisFAQs from "@/components/sections/DataAnalysisFAQs";
import DataAnalysisReadyToEnsureQuality from "@/components/sections/DataAnalysisReadyToEnsureQuality";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/data-analysis-services",
    title: "Data Analysis Services | QA Metrics & Analytics | Testriq",
    description:
      "Turn QA data into action with Testriq's data analysis services. Predictive modeling, ISO 8000-1 quality, and ETL diagnostics for data-driven engineering teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Data-Analysis-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "Testriq - Professional Data Analysis Services",
      type: "image/webp",
    },
    keywords: [
      "data analysis services",
      "qa data analytics",
      "prescriptive intelligence",
      "iso 8000 data quality",
      "testing metrics analysis",
      "predictive modeling for qa",
      "etl process services",
      "zettabyte scalability analytics",
      "machine learning integration",
      "diagnostic analytics",
    ],
  });
}

const DataAnalysisPage = () => {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. New title leads with primary keyword "Data Analysis
  // Services" (was "Analyze QA Data & Testing Metrics" — wordy, weak SEO).
  // og:title and twitter:title now mirror page title (were a longer
  // "Professional Data Analysis Services - Analytics, Insights & Reporting").
  // twitter:image unified with og:image (was a separate -Twitter.webp).
  // Description rewritten — was ~191 chars, now 159, action-verb start.
  // "zebabtyte" keyword typo fixed to "zettabyte". Other keywords
  // lowercased. 8 dynamic() imports converted to direct ES imports.
  // Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1 batch 3: plain-text mirror of DataAnalysisFAQs UI content for FAQPage JSON-LD.
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={dataAnalysisServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/data-analysis-services",
          "Data Analysis Services"
        )}
      />
      <DataAnalysisHeroSection />
      <ServiceDirectAnswer slug="data-analysis-services" />
      <DataAnalysisChallenges />
      <DataAnalysisComprehensiveSlider />
      <DataAnalysisProvenTestingProcess />
      <DataAnalysisWhyChooseTestriq />
      <DataAnalysisToolsFramework />
      <ServiceTeamSection />
      <ServiceLastUpdated slug="data-analysis-services" />
      <ServiceEngagementModels />
      <DataAnalysisFAQs />
      <DataAnalysisReadyToEnsureQuality />
      <ServiceCta slug="data-analysis-services" />
    </div>
  );
};

export default DataAnalysisPage;
