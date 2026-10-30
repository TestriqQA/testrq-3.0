import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  qaServicesServiceSchema,
  createFaqPageSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import QAServicesHeroSection from "@/components/sections/QAServicesHeroSection";
import QAServicesCoverageSection from "@/components/sections/QAServicesCoverageSection";
import QAServicesProcessSection from "@/components/sections/QAServicesProcessSection";
import ServiceTeamSection, { AI_TEAM } from "@/components/sections/ServiceTeamSection";
import QAServicesFAQs, { qaServicesFaqs } from "@/components/sections/QAServicesFAQs";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/quality-assurance-services",
    title: "Quality Assurance Services | ISTQB-Certified | Testriq",
    description:
      "Quality assurance services covering functional, automation, performance, security, accessibility and UAT. ISTQB-certified engineers inside your sprints.",
    ogImage: {
      // Was /og-image.png, which is not in public/. It answers 200 today only
      // because [slug] matches any single-segment path and serves HTML for it
      // — so the card was an HTML document pretending to be an image, and it
      // would start returning the 404 page the moment that route stopped
      // catching it. Pointed at a card that actually exists; 1200x630 is this
      // file's real size, not a hopeful guess.
      url: "https://www.testriq.com/OG/testriq-logo-og.png",
      width: 1200,
      height: 630,
      alt: "Software QA Services - Testriq QA Lab",
      type: "image/png",
    },
    keywords: [
      "software qa services",
      "quality assurance services",
      "qa testing services",
      "software quality assurance company",
      "qa services provider",
      "functional testing services",
      "test automation services",
      "uat testing services",
      "accessibility testing services",
      "istqb certified qa engineers",
    ],
  });
}

export default function QualityAssuranceServicesPage() {
  // Created Sep 2026. /quality-assurance-services had been resolving to the
  // catch-all's not-found page — "software QA services" was one of three
  // keywords picked for UK/US lead generation and had no page behind it. The
  // nearest existing page, /qa-outsourcing-services, sells an engagement model
  // ("QA Outsourcing Services") rather than answering "what do you actually
  // do", and at ~1,060 words was the smallest of the six pages benchmarked
  // against it.
  //
  // Coverage here deliberately includes UAT, accessibility, test strategy and
  // shift-left: all four appear on competitor QA pages and on none of ours.
  //
  // FAQ schema is generated from the component's own exported array so the
  // markup cannot drift from what the page renders.
  const faqsForSchema = qaServicesFaqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <div>
      <StructuredData data={qaServicesServiceSchema} />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/quality-assurance-services",
          "Software QA Services"
        )}
      />
      <MainLayout>
        <QAServicesHeroSection />
        <QAServicesCoverageSection />
        <QAServicesProcessSection />
        <ServiceTeamSection people={AI_TEAM} />
        <ServiceLastUpdated slug="quality-assurance-services" />
        <ServiceEngagementModels />
        <QAServicesFAQs />
        <ServiceCta slug="quality-assurance-services" />
      </MainLayout>
    </div>
  );
}
