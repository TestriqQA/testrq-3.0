import React from "react";
import HealthcareHeroSection from "@/components/sections/HealthcareHeroSection";
import HealthcareChallengesSection from "@/components/sections/HealthcareChallengesSection";
import HealthcareTestingServicesSection from "@/components/sections/HealthcareTestingServicesSection";
import HealthcareTestingProcessSection from "@/components/sections/HealthcareTestingProcessSection";
import HealthcareComplianceSection from "@/components/sections/HealthcareComplianceSection";
import HealthcareToolsFrameworkSection from "@/components/sections/HealthcareToolsFrameworkSection";
import HealthcareROISection from "@/components/sections/HealthcareROISection";
import HealthcareFAQSection from "@/components/sections/HealthcareFAQSection";
import HealthcareContactSection from "@/components/sections/HealthcareContactSection";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, healthcareTestingServiceSchema } from "@/components/seo/StructuredData";
import RelatedCaseStudies from "@/components/sections/RelatedCaseStudies";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Healthcare Testing Services | HIPAA QA",
  description: "Testriq’s end-to-end healthcare testing services keep your software secure, compliant and user-friendly, aligned with HIPAA and FDA standards.",
  keywords: [
    "Healthcare Software Testing",
    "HIPAA Compliance Testing",
    "FDA Validation Support",
    "EHR Testing",
    "Medical Device Testing",
    "Telemedicine App Testing",
    "Patient Data Security",
    "Healthcare Cybersecurity",
    "Medical Software QA",
    "Healthcare QA Services"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/healthcare-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/healthcare-testing-services',
    siteName: 'Testriq - Healthcare QA Services',
    title: 'Healthcare Testing Solutions | Medical Software QA & HIPAA Compliance | Testriq',
    description: 'Secure your healthcare software with Testriq’s expert QA testing services. Ensure HIPAA compliance, FDA validation, EHR integration, and patient data security.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Healthcare-Testing-Service-Og.webp',
        width: 1200,
        height: 800,
        alt: 'Testriq - Healthcare Software Testing Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Healthcare Testing Solutions | Medical Software QA & HIPAA Compliance | Testriq',
    description: 'Secure your healthcare software with Testriq’s expert QA testing services. Ensure HIPAA compliance, FDA validation, EHR integration, and patient data security.',
    images: ['https://www.testriq.com/OG/Healthcare-Testing-Service-Twitter.webp'],
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

const HealthcareTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div>
          <StructuredData data={ healthcareTestingServiceSchema} />
          <StructuredData
            data={createCanonicalBreadcrumb(
              "/healthcare-testing-services",
              "Healthcare Testing Service"
            )}
          />

    <main className="min-h-screen bg-white">
      <HealthcareHeroSection />
      <ServiceDirectAnswer slug="healthcare-testing-services" />
      <HealthcareChallengesSection />
      <HealthcareTestingServicesSection />
      <HealthcareTestingProcessSection />
      <HealthcareComplianceSection />
      <HealthcareToolsFrameworkSection />
      {/* <HealthcareCaseStudiesSection /> */}
      <HealthcareROISection />
      <ServiceTeamSection />
      <ServiceLastUpdated slug="healthcare-testing-services" />
      <ServiceEngagementModels />
      <HealthcareFAQSection />
      <HealthcareContactSection />
    {/* PART 4 / JOB A3 — contextual links to the case studies that
        prove this service. In the body, not the footer: the nav and
        footer already link this page ~1,457 times and Google
        discounts boilerplate links. Mapping lives in
        src/lib/seo/related-case-studies.ts. */}
    <RelatedCaseStudies serviceSlug="healthcare-testing-services" />
    <ServiceCta slug="healthcare-testing-services" />
    </main>
    </div>
  );
};

export default HealthcareTestingPage;

