import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  iso42001ComplianceTestingSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "ISO/IEC 42001 AI Compliance Testing Services | Testriq",
  description:
    "ISO/IEC 42001:2023 compliance testing for AI Management Systems: gap analysis, AI risk and bias assessment, explainability validation, and EU AI Act alignment.",
  keywords: [
    "ISO 42001 Compliance Testing",
    "ISO/IEC 42001:2023 Certification",
    "AI Management System Testing",
    "AIMS Compliance",
    "AI Governance Testing",
    "AI Risk Assessment Services",
    "AI Bias Testing",
    "AI Explainability Testing",
    "EU AI Act Compliance",
    "NIST AI RMF Alignment",
    "Responsible AI Testing",
    "AI Ethics Compliance",
    "Testriq AI Compliance",
    "AI Transparency Testing",
    "Annex A Controls Testing",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical:
      "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
    siteName: "Testriq - AI Compliance & QA Testing",
    title:
      "ISO/IEC 42001:2023 Compliance Testing | AI Governance & Certification | Testriq",
    description:
      "Achieve ISO/IEC 42001:2023 certification for your AI systems. Expert AIMS compliance testing covering risk assessment, bias detection, explainability, and regulatory alignment.",
    images: [
      {
        url: "https://www.testriq.com/OG/ISO-42001-Compliance-Testing-Og.webp",
        width: 1200,
        height: 630,
        alt: "ISO/IEC 42001:2023 Compliance Testing Services by Testriq QA Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "ISO/IEC 42001:2023 Compliance Testing | AI Governance & Certification | Testriq",
    description:
      "Achieve ISO/IEC 42001:2023 certification for your AI systems. Expert AIMS compliance testing covering risk assessment, bias detection, explainability, and regulatory alignment.",
    images: ["https://www.testriq.com/OG/ISO-42001-Compliance-Testing-Twitter.webp"],
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

import ISO42001HeroSection from "@/components/sections/ISO42001HeroSection";

const ISO42001WhatIsSection = dynamic(
  () => import("@/components/sections/ISO42001WhatIsSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ComprehensiveSlider = dynamic(
  () => import("@/components/sections/ISO42001ComprehensiveSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ProvenTestingProcess = dynamic(
  () => import("@/components/sections/ISO42001ProvenTestingProcess"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001WhyChooseTestriq = dynamic(
  () => import("@/components/sections/ISO42001WhyChooseTestriq"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ToolsFramework = dynamic(
  () => import("@/components/sections/ISO42001ToolsFramework"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ComplianceTable = dynamic(
  () => import("@/components/sections/ISO42001ComplianceTable"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001FAQs = dynamic(
  () => import("@/components/sections/ISO42001FAQs"),
  { ssr: true, loading: () => <FAQLoader /> }
);

const ISO42001ReadyToStart = dynamic(
  () => import("@/components/sections/ISO42001ReadyToStart"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function ISO42001ComplianceTestingServices() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.

  // F-44.1 batch 3: plain-text mirror of ISO42001FAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is ISO/IEC 42001:2023 and who needs it?",
      answer: "ISO/IEC 42001:2023 is the first international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organizations that develop, provide, or use AI-based products and services. Any organization seeking to demonstrate responsible AI governance — whether in healthcare, finance, automotive, or technology — can benefit from this certification. It is increasingly expected by regulators, enterprise clients, and partners.",
    },
    {
      question: "How does ISO/IEC 42001 relate to the EU AI Act and NIST AI RMF?",
      answer: "ISO/IEC 42001:2023 serves as a management system standard that can help organizations demonstrate compliance with multiple regulatory frameworks. The EU AI Act (effective 2025-2026) requires AI system providers to implement risk management, transparency, and governance measures — all of which align with ISO 42001 requirements. Similarly, the NIST AI Risk Management Framework (RMF) shares common objectives. Achieving ISO 42001 certification positions your organization to meet these regulatory requirements efficiently.",
    },
    {
      question: "What is the difference between ISO 42001 and ISO 27001?",
      answer: "While ISO 27001 focuses on Information Security Management Systems (ISMS), ISO 42001 specifically addresses AI Management Systems (AIMS). ISO 27001 covers data security, access controls, and information protection. ISO 42001 extends beyond security to cover AI-specific concerns like bias, fairness, explainability, ethical use, societal impact, and AI lifecycle management. Many organizations implement both standards in an integrated management system.",
    },
    {
      question: "How long does it take to achieve ISO/IEC 42001 certification?",
      answer: "The timeline depends on your organization's current AI maturity level. Typically, the journey from initial gap assessment to certification readiness takes 3-6 months. Organizations with existing management systems (like ISO 27001 or ISO 9001) may accelerate this timeline. Testriq's structured 6-phase approach is designed to minimize delays and ensure first-pass certification success.",
    },
    {
      question: "What are the Annex A controls in ISO/IEC 42001:2023?",
      answer: "Annex A of ISO/IEC 42001:2023 contains 38 controls organized across multiple domains including AI policy, AI impact assessment, data management for AI, AI system lifecycle, and third-party/supplier management. These controls provide specific implementation requirements that complement the main clauses (4-10) of the standard. Our testing covers every control with evidence-based validation.",
    },
    {
      question: "Can Testriq help with both compliance testing and certification preparation?",
      answer: "Yes. Testriq provides end-to-end support — from initial gap analysis and risk assessment through testing execution, remediation guidance, and pre-certification audit simulation. While we do not issue the certification itself (that is done by accredited certification bodies), we ensure your organization is fully prepared to pass the certification audit on the first attempt. Our 98% first-pass certification rate speaks to the effectiveness of our approach.",
    },
    {
      question: "What industries benefit most from ISO 42001 compliance?",
      answer: "Any industry deploying AI systems benefits from ISO 42001 certification, but it is especially critical for healthcare (clinical AI, diagnostic tools), financial services (credit scoring, fraud detection), automotive (ADAS, autonomous driving), government (public sector AI), and enterprise SaaS (AI-powered features). Regulatory pressure and client expectations are driving rapid adoption across these sectors.",
    },
    {
      question: "Does Testriq provide ongoing compliance monitoring after certification?",
      answer: "Absolutely. ISO 42001 is not a one-time certification — it requires continual improvement and surveillance audits. Testriq provides post-certification services including periodic compliance re-assessments, model drift monitoring, regulatory update alerts (tracking changes in EU AI Act, NIST AI RMF, etc.), and annual surveillance test support to ensure your AIMS remains effective and compliant.",
    },
  ];

  return (
    <div>
      <StructuredData data={iso42001ComplianceTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/iso-iec-42001-compliance-testing-services",
          "ISO/IEC 42001 Compliance Testing"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <ISO42001HeroSection />
        <ISO42001WhatIsSection />
        <ISO42001ComprehensiveSlider />
        <ISO42001ComplianceTable />
        <ISO42001ProvenTestingProcess />
        <ISO42001WhyChooseTestriq />
        <ISO42001ToolsFramework />
        <ISO42001FAQs />
        <ISO42001ReadyToStart />
      </MainLayout>
    </div>
  );
}
