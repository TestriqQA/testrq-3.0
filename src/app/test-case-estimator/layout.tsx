import React from "react";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

const PAGE_URL = "https://www.testriq.com/test-case-estimator";

export const metadata: Metadata = {
  title: "Test Case Estimator — Free Online Calculator",
  description:
    "Free Test Case Estimator — calculate total test cases, effort in hours, and recommended team size from your module + feature + complexity inputs. Industry-standard formulas, ISTQB-aligned.",
  keywords: [
    "Test Case Estimator",
    "Test Case Calculator",
    "Test Effort Estimation",
    "QA Effort Calculator",
    "Test Estimation Tool",
    "Test Case Count Calculator",
    "Software Testing Estimation",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Test Case Estimator — Free Online Calculator | Testriq",
    description:
      "Free Test Case Estimator — calculate test cases, effort hours, team size from module + feature + complexity inputs.",
    images: [
      {
        url: "https://www.testriq.com/OG/test-case-estimator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Testriq Test Case Estimator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Test Case Estimator — Free Online Calculator | Testriq",
    description:
      "Calculate test cases, effort hours, and team size — free, no signup.",
    images: ["https://www.testriq.com/OG/test-case-estimator-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Test Case Estimator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (web-based)",
  url: PAGE_URL,
  description:
    "Free online calculator that estimates total test cases, effort in hours, and recommended team size based on module count, features per module, test cases per feature, complexity multiplier, and selected test types.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.testriq.com/#organization",
    name: "Testriq QA Lab",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/OnlineOnly",
  },
  isAccessibleForFree: true,
  inLanguage: "en",
};

const faqs = [
  {
    q: "How does this Test Case Estimator calculate effort?",
    a: "Total test cases = modules × features per module × test cases per feature × complexity multiplier × selected-test-types factor. Effort = total test cases × per-case hour rate (defaults to 1.5 hours covering design + execution + retest overhead). Team size = total hours ÷ 128 productive hours per tester per 4-week sprint (80% utilisation), rounded up.",
  },
  {
    q: "What complexity multiplier should I use?",
    a: "1.0 for low complexity (CRUD apps, simple workflows). 1.3 for medium (multi-step workflows, role-based access, integrations). 1.6 for high (financial calculations, regulatory compliance, multi-tenant). 2.0 for very high (mission-critical, real-time, safety-critical). When in doubt, start at 1.3 and adjust based on past project actuals.",
  },
  {
    q: "Why does Mobile have a 1.5× test-type weight?",
    a: "Mobile testing has device-matrix overhead (iOS + Android × multiple versions × multiple devices). One functional test case becomes N test runs across the matrix. The 1.5× weight reflects industry-standard effort inflation vs equivalent web testing.",
  },
  {
    q: "What is the recommended team size based on?",
    a: "4-week sprint × 40 hours/week × 0.80 utilisation = 128 productive hours per tester per sprint. Team size = total estimated hours ÷ 128, rounded up. For projects requiring delivery faster than 1 sprint, scale linearly (e.g., need 2× faster → 2× team size).",
  },
  {
    q: "How accurate is this estimate?",
    a: "Industry test-case estimation has ±25-40% variance even with experienced estimators. Use this estimator as a starting-point conversation tool, not a contractual commitment. The most accurate estimates come from analogy (past similar projects) rather than from formulas.",
  },
  {
    q: "Can I use this for a fixed-bid quote?",
    a: "Treat this as a sanity-check input, not the basis for a fixed-bid quote. Real fixed-bid quotes need a discovery phase covering risk register, acceptance criteria, test data complexity, and environment availability — all factors this tool can't capture from 4 inputs.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TestCaseEstimatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData data={createCanonicalBreadcrumb("/test-case-estimator", "Test Case Estimator")} />
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqStructuredData} />
      {children}
    </>
  );
}
