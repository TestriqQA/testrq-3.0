import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/test-strategy-template";

export const metadata: Metadata = {
  title: "Test Strategy Template — How to Write a Test Strategy",
  description:
    "Test Strategy template walkthrough — scope, approach, risk register, entry/exit criteria, tooling, defect lifecycle, RACI. Aligned to ISO/IEC/IEEE 29119 and ISTQB.",
  keywords: [
    "Test Strategy Template",
    "How to Write a Test Strategy",
    "Test Strategy vs Test Plan",
    "Test Approach",
    "Risk-Based Test Strategy",
    "ISO 29119 Test Strategy",
    "ISTQB Test Strategy",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Test Strategy Template — How to Write a Test Strategy | Testriq",
    description:
      "Test Strategy template — scope, approach, risk register, entry/exit criteria, tooling, defect lifecycle, RACI.",
    images: [{ url: "https://www.testriq.com/OG/test-strategy-template-og.jpg", width: 1200, height: 630, alt: "Test Strategy Template" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Test Strategy Template — How to Write a Test Strategy | Testriq",
    description: "Test Strategy template walkthrough — scope, approach, risk, criteria, tooling, RACI.",
    images: ["https://www.testriq.com/OG/test-strategy-template-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const sections = [
  {
    title: "1. Introduction & Scope",
    purpose:
      "What is being tested, why, and the boundary of the strategy. Names the product, release window, included subsystems, and explicitly out-of-scope items.",
    fields: [
      "Product / system under test",
      "Release version + target window",
      "In-scope modules + integrations",
      "Out-of-scope items (state them explicitly)",
      "Assumptions + dependencies",
    ],
  },
  {
    title: "2. Test Objectives",
    purpose:
      "Outcome-level commitments — what the testing investment is buying. \"Reduce escaped defects by 60%\" beats \"improve quality\".",
    fields: [
      "Coverage targets (per module, per requirement type)",
      "Defect-escape rate target",
      "Performance / load / availability SLAs to validate",
      "Compliance frameworks in scope (SOC 2, IEC 62443, etc.)",
    ],
  },
  {
    title: "3. Test Approach",
    purpose:
      "How testing will be conducted — the level of automation, manual exploratory, regression coverage, performance + security + accessibility coverage.",
    fields: [
      "Test pyramid ratio (unit / integration / e2e)",
      "Automation target % per test type",
      "Manual exploratory charters",
      "Performance + security + accessibility approach",
      "Shift-left activities (design review, static analysis)",
      "Shift-right activities (canary, synthetic monitoring)",
    ],
  },
  {
    title: "4. Risk Register",
    purpose:
      "Quantified risks driving prioritisation — probability × impact, scored and traceable to mitigating test cases. The register is the heart of risk-based testing.",
    fields: [
      "Risk ID + description",
      "Probability score (1-5)",
      "Impact score (1-5)",
      "Risk score (P × I)",
      "Mitigating test case IDs",
      "Owner + review date",
    ],
  },
  {
    title: "5. Entry & Exit Criteria",
    purpose:
      "The conditions required to start each test phase, and the conditions required to declare it complete. Without explicit criteria, phases slide and \"done\" becomes negotiable.",
    fields: [
      "Entry criteria for each phase (build deployed, smoke green, RTM baselined, etc.)",
      "Exit criteria for each phase (defect resolution, coverage met, sign-off given)",
      "Suspension criteria (when to halt testing and escalate)",
      "Resumption criteria (when halted testing can restart)",
    ],
  },
  {
    title: "6. Tooling & Infrastructure",
    purpose:
      "The stack — what tools, what versions, what hosting, what test-data strategy. Locks the environment so results are reproducible.",
    fields: [
      "Test management tool (Xray / TestRail / Zephyr / etc.)",
      "Automation frameworks (Playwright / Cypress / Appium / etc.)",
      "Performance + security tools",
      "CI / CD integration points",
      "Test-data + environment strategy",
      "Observability + reporting stack",
    ],
  },
  {
    title: "7. Defect Lifecycle",
    purpose:
      "How a defect moves from discovery → triage → fix → verification → closure. States, transitions, owners, SLAs.",
    fields: [
      "Defect states (New / Triaged / In Progress / In Review / Resolved / Verified / Closed / Rejected)",
      "Severity definitions (P0 / P1 / P2 / P3) with examples",
      "Triage cadence + owners",
      "Resolution SLAs per severity",
      "Re-test + regression coverage policy",
    ],
  },
  {
    title: "8. Roles, RACI, Schedule",
    purpose:
      "Who owns what + when each deliverable is due. The strategy document doubles as the agreement between the testing team and stakeholders.",
    fields: [
      "Team structure + roles",
      "RACI matrix per major deliverable",
      "High-level schedule + milestones",
      "Escalation path + steering cadence",
      "Approval signatories",
    ],
  },
];

const faqs = [
  {
    q: "What's the difference between a Test Strategy and a Test Plan?",
    a: "Test Strategy is the strategic, often product-level or release-level document — it commits to the testing approach, coverage targets, risk register, and tooling. Test Plan is the tactical, often per-feature or per-cycle document — it commits to specific test cases, schedule, resources, and environment setup. The strategy frames the plan: plans reference back to the strategy for the \"why\" behind their choices.",
  },
  {
    q: "How long should a Test Strategy document be?",
    a: "Long enough to be useful, short enough to be read. For a small SaaS product, 5-10 pages is typical. For a regulated-industry release (BFSI / healthcare / IEC 62443), 20-40 pages is normal because the compliance-mapping sections expand. If the doc is over 60 pages, it's probably duplicating content from elsewhere — link out instead.",
  },
  {
    q: "Does Testriq use a standard template across all clients?",
    a: "We start with a baseline template aligned to ISO/IEC/IEEE 29119 + ISTQB, then tailor per engagement. Regulated industries get additional sections for compliance-evidence mapping; startups get a compressed version that drops sections they don't need yet. The shape is consistent; the depth scales with the engagement.",
  },
  {
    q: "Who should sign off on the Test Strategy?",
    a: "Minimum: the Engineering lead (resource commitments), the Product lead (scope + objectives), and the QA lead (technical approach). For regulated engagements, also Compliance / Risk leadership and an executive sponsor — because the strategy is the document that gets cited in audit findings if a control was de-scoped.",
  },
  {
    q: "How often should the Test Strategy be updated?",
    a: "Quarterly review minimum, plus on every major scope change (new module, new compliance framework, new integration partner). Treat it as a living document — when the strategy stops matching reality, the gap shows up as missed risks or surprise audit findings.",
  },
];

function ArticleStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Test Strategy Template — How to Write a Test Strategy",
        description:
          "Test Strategy template walkthrough — scope, approach, risk register, entry/exit criteria, tooling, defect lifecycle, RACI.",
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

const TestStrategyTemplatePage: React.FC = () => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb("/test-strategy-template", "Test Strategy Template")} />
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
                <li><span className="text-gray-700 font-medium">Test Strategy Template</span></li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                <FaCertificate className="text-white" />
                <span className="text-white text-sm">ISO/IEC/IEEE 29119 · ISTQB-aligned</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Test Strategy Template — <span className="text-brand-blue">How to Write a Test Strategy</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An eight-section strategic doc that commits to scope, approach, risk register, entry/exit criteria, tooling, defect lifecycle, and RACI for a software release or product line. This is the doc the auditor reads first when asking &quot;how did you decide what to test?&quot;
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                >
                  Get a tailored strategy <FaArrowRight />
                </Link>
                <Link
                  href="/test-plan-template"
                  className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                >
                  Read the Test Plan template
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy vs Plan */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Test Strategy vs Test Plan — quick distinction</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              <strong>Test Strategy</strong> is the <em>strategic</em>, often product- or release-level doc — it commits to the approach, coverage targets, risk register, and tooling.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Test Plan</strong> is the <em>tactical</em>, often per-feature or per-cycle doc — it commits to specific test cases, schedule, resources, environment. Plans reference back to the strategy for the &quot;why&quot;.
            </p>
          </div>
        </section>

        {/* Template Sections */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The eight sections</h2>
              <p className="text-gray-600 text-lg">
                Each section has a stated purpose + a checklist of fields. Use it as a literal template — copy, replace placeholders, ship.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((s) => (
                <article key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    <span className="font-semibold text-brand-blue">Purpose: </span>
                    {s.purpose}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Fields</p>
                  <ul className="space-y-1.5">
                    {s.fields.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
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
                { href: "/qa-process", title: "Testriq QA Process", description: "How we apply this strategy in a six-phase process." },
                { href: "/stlc-explained", title: "STLC Explained", description: "The academic 6-phase STLC framework." },
                { href: "/test-plan-template", title: "Test Plan Template", description: "The tactical doc this strategy frames." },
                { href: "/test-case-template", title: "Test Case Template", description: "Field-by-field format for the cases the plan executes." },
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
            <h2 className="text-3xl font-bold mb-4">Need help drafting yours?</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq QA lead — we&apos;ll co-author a Test Strategy tailored to your product, compliance scope, and release cadence.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a tailored Test Strategy <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestStrategyTemplatePage;
