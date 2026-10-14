// /dpdp-compliance-testing-services
//
// Built from "DPDP Compliance Testing Services: SEO Strategy and Service Page"
// (Testriq QA Lab, 14 Oct 2026). Three decisions from that document shape every
// section, and they are worth stating here because they are easy to erode in
// later edits:
//
//   1. Primary keyword is "DPDP compliance testing services" — the one phrase
//      that says testing (what Testriq does) rather than consulting (what the
//      ranking pages sell). The competitor audit found the generic "DPDP
//      compliance services" SERP dominated by consultancies and software
//      vendors, where a QA firm would be fighting the wrong intent.
//   2. The page sells evidence, not certification. No DPDP certificate exists
//      for ordinary businesses, so the deliverable is a technical test report
//      with findings, proof and a retest.
//   3. Nothing invents clients, case studies, credentials or timelines. One
//      audited competitor promises a "100% first-attempt audit pass rate" and
//      compliance "in 8 weeks"; this page deliberately makes no such claim.
//
// Cannibalisation: the nearest existing page is Cyber Security Testing, which
// targets "security testing / penetration testing". Overlap stays low as long
// as this page remains privacy-behaviour specific and does not repeat generic
// pentest copy.
//
// The route lives in (services) so discoverRoutes picks it up for sitemap.ts
// and /website-map automatically — no manual registration needed.
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  dpdpComplianceTestingSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { ContentLoader, FAQLoader } from "@/components/ui/Loaders";
import { dpdpFaqs } from "@/components/sections/dpdpFaqData";

export const revalidate = 3600;

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Testriq" template, which would
  // otherwise print the brand twice (F-71).
  title: { absolute: "DPDP Compliance Testing Services | Testriq" },
  description:
    "Testriq QA Lab tests consent, deletion, access control and breach workflows in your app for DPDP readiness. Technical testing, not legal certification.",
  keywords: [
    "DPDP compliance testing services",
    "DPDP testing services",
    "DPDP Act compliance testing",
    "DPDP readiness assessment",
    "DPDP gap assessment",
    "DPDP privacy testing",
    "DPDP security testing",
    "DPDP consent management testing",
    "data deletion workflow testing",
    "Data Principal rights testing",
    "DPDP technical readiness",
    "privacy regression testing",
    "test data masking validation",
    "DPDP Rules 2025 testing",
    "personal data protection testing India",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/dpdp-compliance-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/dpdp-compliance-testing-services",
    siteName: "Testriq - Privacy & Compliance QA Testing",
    title: "DPDP Compliance Testing Services | Testriq",
    description:
      "Technical verification of consent, data rights, deletion, access control and breach workflows inside your product. Reproducible findings, evidence and a retest.",
    // Generic brand card on purpose. The source document specifies a bespoke
    // hero image (dpdp-compliance-testing-services-hero.webp) that does not
    // exist yet, and a broken OG reference previews worse than a plain one.
    // Swap this for the bespoke card once the asset is produced — original
    // graphics only, and no stock "certified" badges, which would contradict
    // the page's own position that no DPDP certificate exists.
    images: [
      {
        url: "https://www.testriq.com/OG/testriq-logo-og.png",
        width: 1200,
        height: 630,
        alt: "DPDP Compliance Testing Services by Testriq QA Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "DPDP Compliance Testing Services | Testriq",
    description:
      "Technical verification of consent, data rights, deletion, access control and breach workflows inside your product. Reproducible findings, evidence and a retest.",
    images: ["https://www.testriq.com/OG/testriq-logo-og.png"],
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

import DPDPHeroSection from "@/components/sections/DPDPHeroSection";

const DPDPRiskSection = dynamic(
  () => import("@/components/sections/DPDPRiskSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPWhatIsSection = dynamic(
  () => import("@/components/sections/DPDPWhatIsSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPServicesSection = dynamic(
  () => import("@/components/sections/DPDPServicesSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPScenariosSection = dynamic(
  () => import("@/components/sections/DPDPScenariosSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPIndustriesSection = dynamic(
  () => import("@/components/sections/DPDPIndustriesSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPProcessSection = dynamic(
  () => import("@/components/sections/DPDPProcessSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPWhyChooseSection = dynamic(
  () => import("@/components/sections/DPDPWhyChooseSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPLegalBoundarySection = dynamic(
  () => import("@/components/sections/DPDPLegalBoundarySection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const DPDPFAQs = dynamic(() => import("@/components/sections/DPDPFAQs"), {
  ssr: true,
  loading: () => <FAQLoader />,
});

const DPDPReadyToStart = dynamic(
  () => import("@/components/sections/DPDPReadyToStart"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function DPDPComplianceTestingServices() {
  return (
    <div>
      <StructuredData data={dpdpComplianceTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/dpdp-compliance-testing-services",
          "DPDP Compliance Testing Services"
        )}
      />
      {/* FAQ copy comes from the same module the accordion renders, so the
          markup and the visible answers cannot drift apart. */}
      <StructuredData data={createFaqPageSchema(dpdpFaqs)} />
      <MainLayout>
        <DPDPHeroSection />
        <DPDPRiskSection />
        <DPDPWhatIsSection />
        <DPDPServicesSection />
        <DPDPScenariosSection />
        <DPDPIndustriesSection />
        <DPDPProcessSection />
        <DPDPWhyChooseSection />
        <DPDPLegalBoundarySection />
        <DPDPFAQs />
        <DPDPReadyToStart />
      </MainLayout>
    </div>
  );
}
