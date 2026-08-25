import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/test-case-template";

export const metadata: Metadata = {
  title: "Test Case Template — Field-By-Field Format with Examples",
  description:
    "Test Case template — fields, examples (positive, negative, boundary, equivalence-class), test case vs test scenario, and best-practice writing rules. ISTQB-aligned.",
  keywords: [
    "Test Case Template",
    "How to Write a Test Case",
    "Test Case Format",
    "Test Case Fields",
    "Test Case Examples",
    "Test Case vs Test Scenario",
    "ISTQB Test Case",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Test Case Template — Field-By-Field Format with Examples | Testriq",
    description:
      "Test Case template — fields, examples (positive, negative, boundary, equivalence-class), best practices. ISTQB-aligned.",
    images: [{ url: "https://www.testriq.com/OG/test-case-template-og.jpg", width: 1200, height: 630, alt: "Test Case Template" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Test Case Template — Field-By-Field Format with Examples | Testriq",
    description: "Test Case template — fields, examples, best practices. ISTQB-aligned.",
    images: ["https://www.testriq.com/OG/test-case-template-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const fields = [
  { name: "Test Case ID", required: true, description: "Unique, traceable identifier — e.g., TC-CO-001 for Checkout case 001. Used in RTM + defect references." },
  { name: "Title / Summary", required: true, description: "One-line action-oriented summary. \"Verify checkout completes with expired test card declines gracefully\" beats \"Test 1\"." },
  { name: "Module / Feature", required: true, description: "The system area being exercised. Maps to a feature ID from the Test Plan." },
  { name: "Requirement ID (RTM link)", required: true, description: "Source requirement or acceptance criterion. Without this, you cannot prove coverage." },
  { name: "Priority", required: true, description: "P0 / P1 / P2 / P3. Drives execution order in time-boxed cycles." },
  { name: "Type", required: true, description: "Functional / Non-functional / Regression / Smoke / Exploratory / Negative / Boundary / Security / Accessibility." },
  { name: "Preconditions", required: true, description: "State the system must be in before execution — logged-in user, seeded data, feature flag on, etc." },
  { name: "Test Data", required: false, description: "Specific inputs the case uses — email addresses, card numbers, file uploads. Reference data sets in test-data fixtures." },
  { name: "Test Steps", required: true, description: "Ordered, atomic actions. One verb per step. \"Click Pay\" not \"Click Pay then check email then verify webhook\"." },
  { name: "Expected Result", required: true, description: "The observable, verifiable outcome. \"Order is created\" is weak; \"Order #ABC123 appears in /orders with status=PAID within 5s\" is verifiable." },
  { name: "Actual Result", required: false, description: "Populated at execution time — what actually happened. Used for pass/fail determination + defect reproduction." },
  { name: "Status", required: false, description: "Not Run / Pass / Fail / Blocked / Skipped. Updated per execution cycle." },
  { name: "Severity (if defect)", required: false, description: "Severity of the defect raised, if any. Often distinct from priority." },
  { name: "Automation Status", required: false, description: "Automated / Manual / Candidate. Drives automation-investment prioritisation." },
  { name: "Notes / Attachments", required: false, description: "Screenshots, logs, edge-case observations. Especially important for exploratory cases." },
];

const examples = [
  {
    type: "Positive (Happy Path)",
    id: "TC-CO-001",
    title: "Verify successful checkout with valid card and registered user",
    preconditions: "User logged in; cart contains 1 item; valid test card on file.",
    steps: [
      "Navigate to /cart",
      "Click \"Proceed to Checkout\"",
      "Verify default shipping + billing address loaded",
      "Click \"Place Order\"",
    ],
    expected:
      "Order confirmation page renders with order ID; order appears in /account/orders with status=PAID within 5s; confirmation email sent to user@example.com (webhook delivered).",
  },
  {
    type: "Negative",
    id: "TC-CO-007",
    title: "Verify checkout rejects expired card gracefully",
    preconditions: "User logged in; cart contains 1 item; expired test card (exp 01/2020) on file.",
    steps: [
      "Navigate to /cart",
      "Click \"Proceed to Checkout\"",
      "Click \"Place Order\"",
    ],
    expected:
      "Decline message \"Your card has expired. Please use a different card.\" rendered inline; user remains on /checkout; no order created in DB; no webhook fired; PaymentAttempt logged with reason=expired_card.",
  },
  {
    type: "Boundary",
    id: "TC-CO-014",
    title: "Verify checkout at maximum order total (USD 999,999.99)",
    preconditions: "User logged in; cart total = USD 999,999.99 (largest supported); valid high-limit test card.",
    steps: ["Navigate to /cart", "Click \"Place Order\"", "Confirm Stripe sandbox accepts amount"],
    expected:
      "Order created with total=999999.99; Stripe charge.amount = 99999999 (cents); no integer overflow; receipt PDF renders amount correctly formatted.",
  },
  {
    type: "Equivalence-class",
    id: "TC-CO-019",
    title: "Verify checkout for users in EU VAT zone applies correct tax",
    preconditions: "User logged in with billing country=DE (any EU member state — representative of the EU VAT equivalence class).",
    steps: ["Add EUR 100 item to cart", "Proceed to /checkout"],
    expected:
      "Tax line item = EUR 19 (19% DE VAT) shown before placing order. Order total = EUR 119. Invoice PDF shows VAT-ID field.",
  },
];

const bestPractices = [
  {
    title: "Atomic steps",
    description:
      "One verb per step. Steps must be reproducible weeks later by a tester who didn't write the case. \"Click Pay and verify email\" hides two things that can fail independently.",
  },
  {
    title: "Verifiable expected results",
    description:
      "Replace \"works correctly\" with observable conditions — DB row created, status=X, timestamp within Y seconds, email sent to Z. If you can't verify it deterministically, the test isn't useful for regression.",
  },
  {
    title: "Cover the failure space",
    description:
      "For every happy-path case, write 2-3 negative + boundary cases. Production bugs come from inputs nobody thought to test — invalid Unicode, daylight-saving edges, zero-quantity orders, expired tokens at 23:59.",
  },
  {
    title: "Stable IDs",
    description:
      "Once assigned, never reuse a Test Case ID. Even deprecated cases retain their ID with status=Deprecated. Audit traceability depends on it.",
  },
  {
    title: "Map to requirements",
    description:
      "Every case must reference a requirement or acceptance criterion. Orphan test cases either expose a missing requirement (good — file it) or are testing the wrong thing (worse — delete).",
  },
];

const faqs = [
  {
    q: "What's the difference between a Test Case and a Test Scenario?",
    a: "A Test Scenario is high-level — \"Verify checkout with valid card\". A Test Case is the specific, executable form — TC-CO-001 with preconditions, ordered steps, specific test data, and a verifiable expected result. Scenarios feed test-design workshops; test cases get executed.",
  },
  {
    q: "How detailed should test steps be?",
    a: "Detailed enough that a tester who joined the team yesterday can run the case correctly. For automated cases, less verbose (the code is the spec); for manual cases, more verbose. A useful rule: if execution requires reading external docs to know what \"click submit\" means, the steps are not detailed enough.",
  },
  {
    q: "Should every test case be automated?",
    a: "No. Exploratory cases, accessibility audits, multi-stakeholder UAT, and one-off regulatory sign-offs are typically manual. Aim to automate the cases that run every release (regression + smoke + critical-path E2E) and accept manual execution for cases that run occasionally or require human judgment.",
  },
  {
    q: "How does the RTM (Requirement Traceability Matrix) use these test cases?",
    a: "The RTM maps each requirement to one or more test cases by ID, tracking execution status per cycle. \"REQ-CO-007 (decline expired card) → TC-CO-007, last executed 2026-05-14, status=Pass.\" That mapping is the artifact you hand the auditor when asked to prove coverage.",
  },
  {
    q: "What tools does Testriq use to manage test cases?",
    a: "Whatever the client uses — Xray (Jira native), TestRail, Zephyr Scale, qTest, Polarion (for regulated industries), or simple Markdown/CSV when the team is small. Tool choice doesn't change the template fields; it changes how they're stored and exported.",
  },
];

function ArticleStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Test Case Template — Field-By-Field Format with Examples",
        description:
          "Test Case template — fields, examples (positive, negative, boundary, equivalence-class), best practices.",
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

const TestCaseTemplatePage: React.FC = () => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb("/test-case-template", "Test Case Template")} />
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
                <li><span className="text-gray-700 font-medium">Test Case Template</span></li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                <FaCertificate className="text-white" />
                <span className="text-white text-sm">ISTQB-aligned · IEEE 829 §8 reference</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Test Case Template — <span className="text-brand-blue">Field-By-Field Format</span> with Examples
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The fields that go in a usable test case, with worked examples across positive, negative, boundary, and equivalence-class types. Built so the case still makes sense to the tester who runs it six months from now.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                >
                  Get a tailored case library <FaArrowRight />
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

        {/* Fields */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Case fields</h2>
              <p className="text-gray-600 text-lg">
                Required fields gate execution. Optional fields support reporting + traceability.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden">
                <thead className="bg-brand-blue text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Field</th>
                    <th className="text-left p-4 font-semibold w-24">Required</th>
                    <th className="text-left p-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((f) => (
                    <tr key={f.name} className="border-t border-gray-200 align-top">
                      <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{f.name}</td>
                      <td className="p-4">
                        {f.required ? (
                          <span className="inline-flex items-center gap-1 text-brand-blue text-xs font-semibold">
                            <FaCheckCircle /> Yes
                          </span>
                        ) : (
                          <span className="text-gray-500 text-xs">Optional</span>
                        )}
                      </td>
                      <td className="p-4 text-gray-700 leading-relaxed">{f.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Worked examples</h2>
              <p className="text-gray-600 text-lg">
                Four real test cases across the most common test types. Steal, modify, ship.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {examples.map((e) => (
                <article key={e.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {e.type} · <span className="text-gray-500">{e.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{e.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Preconditions: </span>{e.preconditions}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Steps</p>
                  <ol className="space-y-1.5 mb-4 list-decimal pl-5">
                    {e.steps.map((s) => (
                      <li key={s} className="text-sm text-gray-700">{s}</li>
                    ))}
                  </ol>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-brand-blue">Expected: </span>{e.expected}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Five rules for usable test cases</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestPractices.map((p) => (
                <div key={p.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Companion templates</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/qa-process", title: "Testriq QA Process", description: "How test cases flow through our 6-phase process." },
                { href: "/stlc-explained", title: "STLC Explained", description: "Where Test Case Design fits in STLC." },
                { href: "/test-strategy-template", title: "Test Strategy Template", description: "Where the test-design approach is set." },
                { href: "/test-plan-template", title: "Test Plan Template", description: "The plan that schedules + executes these cases." },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all"
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
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-slate-50 rounded-xl border border-gray-100 p-5 open:shadow-sm">
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
            <h2 className="text-3xl font-bold mb-4">Need a starter case library for your product?</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq QA lead — we&apos;ll seed a case library for your critical paths and hand it off in your test-management tool of choice.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a starter case library <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TestCaseTemplatePage;
