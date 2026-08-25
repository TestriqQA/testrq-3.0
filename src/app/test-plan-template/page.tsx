import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/test-plan-template";

export const metadata: Metadata = {
  title: "Test Plan Template — IEEE 829-Aligned Test Plan Structure",
  description:
    "Test Plan template walkthrough — IEEE 829-aligned structure with test items, features in/out of scope, approach, pass-fail criteria, suspension/resumption criteria, schedule, environment, risks, approvals.",
  keywords: [
    "Test Plan Template",
    "IEEE 829 Test Plan",
    "How to Write a Test Plan",
    "Test Plan Sections",
    "Test Plan vs Test Strategy",
    "Master Test Plan",
    "ISTQB Test Plan",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Test Plan Template — IEEE 829-Aligned Test Plan Structure | Testriq",
    description:
      "Test Plan template — IEEE 829 structure with test items, scope, approach, criteria, schedule, environment, risks, approvals.",
    images: [{ url: "https://www.testriq.com/OG/test-plan-template-og.jpg", width: 1200, height: 630, alt: "Test Plan Template" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Test Plan Template — IEEE 829-Aligned Test Plan Structure | Testriq",
    description: "Test Plan template — IEEE 829 structure with criteria, schedule, environment, risks, approvals.",
    images: ["https://www.testriq.com/OG/test-plan-template-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const sections = [
  {
    title: "1. Test Plan Identifier",
    purpose: "Unique ID + version + status so the doc is referenceable in audit + traceability trails.",
    example: "TP-2026-Q2-PaymentsRelease-v1.2 — Approved",
  },
  {
    title: "2. Introduction",
    purpose: "Scope of the testing effort — what release / system / module this plan covers, plus references to the parent Test Strategy and any superseding plans.",
    example: "This plan covers QA for the v3.4 Payments release, scoped to checkout + refund + dispute-management flows. Supersedes TP-2026-Q1-PaymentsRelease-v3.3.",
  },
  {
    title: "3. Test Items",
    purpose: "Concrete artifacts under test — builds, releases, modules, integrations. Each item references its source-control or build-pipeline ID.",
    example: "Build #4271 of payments-api; mobile-app v3.4.0 RC2; webhook-router v2.1.0.",
  },
  {
    title: "4. Features to Be Tested",
    purpose: "Explicit list of functional + non-functional features in scope. Each maps to one or more requirement IDs from the RTM.",
    example: "FT-01 Checkout (REQ-CO-*); FT-02 Refund (REQ-RF-*); FT-03 3DS challenge (REQ-3DS-*); FT-04 Performance under 5x peak (NFR-PERF-03).",
  },
  {
    title: "5. Features Not to Be Tested",
    purpose: "Equally explicit list of out-of-scope items. Prevents \"we thought you tested that\" arguments later.",
    example: "Subscription billing engine (untouched in this release); admin console (separate test plan TP-Admin-v3.4).",
  },
  {
    title: "6. Approach",
    purpose: "How testing will be conducted — automation vs manual, regression strategy, performance + security approach. Inherits from Test Strategy.",
    example: "Functional regression via Playwright suite (1,250 cases, full run nightly + on RC). Manual exploratory charters: 3 sessions × 90 min covering refund edges. Performance via k6 against staging-prod-shape DB.",
  },
  {
    title: "7. Pass / Fail Criteria",
    purpose: "Per-feature + overall release-level criteria. Defines what constitutes a passing build vs a rejected build.",
    example: "Per feature: ≥98% test pass rate, zero P0/P1 open. Overall release: all FT-* features Pass, performance NFR met, security scan clean of High/Critical.",
  },
  {
    title: "8. Suspension & Resumption Criteria",
    purpose: "When testing halts and escalates, and what's required to restart. Critical for builds that prove unstable.",
    example: "Suspend if smoke-test fails 2 consecutive RCs OR P0 found that blocks ≥50% of FT-* features. Resume after dev sign-off on root cause + verified fix in next RC.",
  },
  {
    title: "9. Test Deliverables",
    purpose: "Artifacts the plan promises to produce — test cases, automation scripts, defect reports, summary report, RTM.",
    example: "Test case package (Xray export), automation suite (in repo), daily execution status (Confluence), defect log (Jira), test summary report, signed-off RTM.",
  },
  {
    title: "10. Environmental Needs",
    purpose: "Hardware, software, network, test-data, mock-service requirements. Provisioning checklist that gates Test Execution entry.",
    example: "Staging env mirroring prod DB shape; PCI-DSS-compliant test-data set; Stripe sandbox keys; Zerotier VPN for partner-API mock access.",
  },
  {
    title: "11. Schedule",
    purpose: "High-level dates for each phase + critical milestones. Tied to the release calendar.",
    example: "Test prep: 6 May–10 May. Cycle 1: 13 May–17 May. Cycle 2 (regression): 20 May–22 May. UAT: 23 May. Go/no-go: 24 May.",
  },
  {
    title: "12. Risks & Mitigations",
    purpose: "Plan-level risks (not the strategy-level risk register) — schedule, resource, environment, dependency risks. Each with an owner + mitigation.",
    example: "Risk: Stripe sandbox rate-limit blocks E2E run. Mitigation: pre-stage test transactions + parallel sandbox key. Owner: QA lead.",
  },
  {
    title: "13. Roles & Responsibilities",
    purpose: "Who runs which suite, who triages defects, who signs off. Names + escalation path.",
    example: "QA Lead: A. Singh. Automation owner: P. Maske. Performance: B. Iyer. Defect triage: daily 10:30 IST. Escalation: VP Engineering on P0.",
  },
  {
    title: "14. Approvals",
    purpose: "Sign-off signatories — typically Engineering Lead, Product Lead, QA Lead, plus Compliance / Security for regulated releases.",
    example: "Approved by: Eng Lead, Product Manager, QA Lead, Security Lead. Dated. Stored in document-management system per ISO 9001 control.",
  },
];

const faqs = [
  {
    q: "What is IEEE 829, and is it still relevant?",
    a: "IEEE 829 is the historical standard for software test documentation, including Test Plan structure. The standard was superseded by ISO/IEC/IEEE 29119 in 2013, but the IEEE 829 Test Plan section list is still widely used as a checklist. Modern Test Plans align to 29119 conceptually while borrowing the 829 section breakdown for readability.",
  },
  {
    q: "Test Plan vs Master Test Plan — what's the difference?",
    a: "A Master Test Plan covers an entire product or major release; per-level or per-cycle Test Plans roll up to it. Small projects merge them into one document. Large regulated projects keep them separate: the Master Test Plan stays stable across the release; the per-cycle Plans iterate.",
  },
  {
    q: "How does the Test Plan reference the Test Strategy?",
    a: "The Plan inherits scope boundaries, risk register, approach decisions, and tooling commitments from the Strategy. The Plan adds the per-cycle tactical detail — specific dates, specific cycles, specific test cases. If the Plan contradicts the Strategy, the Strategy wins (or the Strategy needs updating, not the Plan).",
  },
  {
    q: "Do we really need all 14 sections every release?",
    a: "For a 2-week startup release, no — sections 1-10 cover the essentials. For a regulated-industry release (BFSI / healthcare / IEC 62443 / FDA 21 CFR Part 11), yes — all 14, because auditors read each one. Tailor depth to the audit posture, not to the page count.",
  },
  {
    q: "Where do automation scripts fit in the Test Plan?",
    a: "Automation scripts are referenced as Test Deliverables (section 9) and detailed under Approach (section 6). The scripts themselves live in source control; the Test Plan documents which scripts cover which test cases (mapped in the RTM), the suite's runtime characteristics, and the CI integration points.",
  },
];

function ArticleStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Test Plan Template — IEEE 829-Aligned Test Plan Structure",
        description:
          "Test Plan template walkthrough — IEEE 829 structure with test items, scope, approach, criteria, schedule, environment, risks, approvals.",
        author: { "@type": "Organization", "@id": "https://www.testriq.com/#organization", name: "Testriq QA Lab" },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.testriq.com/#organization",
          name: "Testriq QA Lab",
          logo: { "@type": "ImageObject", url: "https://www.testriq.com/testriq-logo.png" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      }}
    />
  );
}

function FaqStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

const TestPlanTemplatePage: React.FC = () => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb("/test-plan-template", "Test Plan Template")} />
      <ArticleStructuredData />
      <FaqStructuredData />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1.5 hover:text-gray-900">
                    <FaHome className="w-4 h-4" /> <span>Home</span>
                  </Link>
                </li>
                <li aria-hidden="true"><FaChevronRight className="w-3 h-3 text-gray-400" /></li>
                <li><span className="text-gray-700 font-medium">Test Plan Template</span></li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                <FaCertificate className="text-white" />
                <span className="text-white text-sm">IEEE 829 · ISO/IEC/IEEE 29119</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Test Plan Template — <span className="text-brand-blue">IEEE 829-Aligned Structure</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A 14-section tactical document — test items, features in/out of scope, approach, pass-fail criteria, suspension/resumption rules, schedule, environment, risks, and approvals. Inherits from the higher-level Test Strategy; drives Test Execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                >
                  Get a tailored plan <FaArrowRight />
                </Link>
                <Link
                  href="/test-strategy-template"
                  className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                >
                  Read the Test Strategy template
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The fourteen sections</h2>
              <p className="text-gray-600 text-lg">
                Each section has a stated purpose + a worked example. Use it as a literal template — replace, ship.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((s) => (
                <article key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    <span className="font-semibold text-brand-blue">Purpose: </span>
                    {s.purpose}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-500">Example: </span>
                    <em>{s.example}</em>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Companion templates</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/qa-process", title: "Testriq QA Process", description: "The six-phase process this plan slots into." },
                { href: "/stlc-explained", title: "STLC Explained", description: "Where Test Planning fits in the STLC framework." },
                { href: "/test-strategy-template", title: "Test Strategy Template", description: "The strategic doc this plan inherits from." },
                { href: "/test-case-template", title: "Test Case Template", description: "Field-by-field format for the cases this plan executes." },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{r.description}</p>
                  <span className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1">
                    Read <FaArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-brand-blue group-open:rotate-90 transition-transform flex-shrink-0">
                      <FaChevronRight />
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-blue text-white py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Test Plan for your next release?</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq QA lead — we&apos;ll co-author a Test Plan tied to your release calendar, environment, and audit posture.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a tailored Test Plan <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestPlanTemplatePage;
