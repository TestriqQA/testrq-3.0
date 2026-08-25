import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowRight,
  FaCheckCircle,
  FaSearch,
  FaClipboardList,
  FaCogs,
  FaServer,
  FaPlay,
  FaFlagCheckered,
  FaCertificate,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/stlc-explained";

export const metadata: Metadata = {
  title: "STLC Explained: The 6 Phases of Software Testing Life Cycle",
  description:
    "Software Testing Life Cycle (STLC) explained — the 6 phases, entry/exit criteria, deliverables, and common pitfalls. Aligned to ISTQB syllabus + ISO/IEC/IEEE 29119.",
  keywords: [
    "STLC",
    "Software Testing Life Cycle",
    "Test Life Cycle",
    "STLC Phases",
    "STLC vs SDLC",
    "Test Planning",
    "Test Case Design",
    "Test Execution",
    "Entry Exit Criteria",
    "ISTQB STLC",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "STLC Explained: The 6 Phases of Software Testing Life Cycle | Testriq",
    description:
      "The 6 STLC phases with entry/exit criteria, deliverables, and pitfalls — aligned to ISTQB + ISO 29119.",
    images: [{ url: "https://www.testriq.com/OG/stlc-explained-og.jpg", width: 1200, height: 630, alt: "STLC Explained" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "STLC Explained: The 6 Phases of Software Testing Life Cycle | Testriq",
    description: "The 6 STLC phases with entry/exit criteria, deliverables, and pitfalls.",
    images: ["https://www.testriq.com/OG/stlc-explained-og.jpg"],
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

const stlcPhases = [
  {
    Icon: FaSearch,
    title: "1. Requirement Analysis",
    purpose:
      "Read what was built (and what wasn't), map it to testable artifacts, and surface ambiguity while it's still cheap to resolve.",
    entry: ["Approved requirements / user stories / acceptance criteria available", "Stakeholder access for clarifications"],
    deliverables: ["Testability matrix (each requirement → 1+ test scenario)", "List of ambiguities + open questions back to PM", "RTM (Requirement Traceability Matrix) baseline"],
    exit: ["RTM baselined", "Open questions either resolved or risk-accepted in writing"],
    pitfall:
      "Skipping this phase because \"the stories are clear enough\" — ambiguity that's free to resolve here costs 10-100× to fix once code ships.",
  },
  {
    Icon: FaClipboardList,
    title: "2. Test Planning",
    purpose:
      "Decide what gets tested, how, by whom, with what tools, against what criteria — the strategic doc that gates execution.",
    entry: ["RTM baselined", "Test approach (manual / automation / hybrid) agreed"],
    deliverables: ["Test plan document (IEEE-829-aligned)", "Effort estimation + schedule", "Resource + tooling commitments", "Risk register + mitigation plan"],
    exit: ["Test plan signed off by stakeholders", "Schedule + budget approved"],
    pitfall:
      "Treating the test plan as a one-time document. The plan must be a living artifact that updates per release; otherwise it ossifies into a compliance prop nobody reads.",
  },
  {
    Icon: FaCogs,
    title: "3. Test Case Design & Development",
    purpose:
      "Convert requirements into executable test cases — positive, negative, boundary, equivalence-class, decision-table, exploratory charters.",
    entry: ["Test plan signed off", "Test design techniques agreed (BVA, ECP, decision-table, state-transition)"],
    deliverables: ["Detailed test cases (per /test-case-template format)", "Automation scripts (where applicable)", "Test data sets + generation scripts", "Updated RTM with case IDs"],
    exit: ["Test cases peer-reviewed", "Automation scripts committed + CI-runnable"],
    pitfall:
      "Writing only happy-path test cases. Production bugs almost always come from inputs nobody thought to test — invalid Unicode, daylight-savings edges, zero-quantity orders, expired tokens at 23:59.",
  },
  {
    Icon: FaServer,
    title: "4. Test Environment Setup",
    purpose:
      "Stand up an environment that mirrors production closely enough for results to be trusted, and isolated enough to test destructively.",
    entry: ["Test cases ready", "Infra requirements documented (DB sizes, integrations, mocks)"],
    deliverables: ["Provisioned test environment", "Seeded test data", "Mock services / stubs for unavailable integrations", "Smoke-test pass on the bare environment"],
    exit: ["Environment smoke-test passes", "Integration endpoints reachable", "Access provisioned for QA team"],
    pitfall:
      "Sharing a single staging environment across QA, demos, and partner integration testing. A broken demo invalidates a day of test runs, and partner tests step on QA data without anyone realising.",
  },
  {
    Icon: FaPlay,
    title: "5. Test Execution",
    purpose:
      "Run the tests. Log defects. Re-test. Repeat until exit criteria are met or the build is rejected.",
    entry: ["Environment smoke-test green", "Build under test deployed", "Test cases + automation scripts ready"],
    deliverables: ["Daily execution status", "Defect log (severity + reproducibility + impact)", "Pass/fail metrics per requirement", "Updated RTM (executed status)", "Exploratory testing session notes"],
    exit: ["All planned test cases executed", "All P0/P1 defects resolved + verified", "Exit-criteria metrics met (coverage, pass rate, defect density)"],
    pitfall:
      "Treating \"all tests pass\" as the only exit signal. A pass rate of 100% on a test suite that misses the production failure modes is worse than a 95% pass rate on a suite that covers them — false confidence is more expensive than honest gaps.",
  },
  {
    Icon: FaFlagCheckered,
    title: "6. Test Cycle Closure",
    purpose:
      "Capture what was learned, file the artifacts, hand off to operations / support, and feed the next cycle a sharper risk register.",
    entry: ["Exit criteria met", "Sign-off given by stakeholders"],
    deliverables: ["Test closure report (executive summary + drilldown)", "Coverage + defect-density metrics", "Lessons-learned retrospective", "Automation-candidate prioritisation", "Updated risk register for next cycle"],
    exit: ["Test closure report distributed", "Artifacts archived per retention policy", "Lessons-learned actioned in next cycle's plan"],
    pitfall:
      "Skipping closure when the release is \"already out the door\". Without retrospective discipline, every defect class repeats forever and automation never gets prioritised correctly.",
  },
];

const faqs = [
  {
    q: "What's the difference between STLC and SDLC?",
    a: "SDLC (Software Development Life Cycle) is the full software-build framework — requirements, design, implementation, testing, deployment, maintenance. STLC (Software Testing Life Cycle) is the testing-specific 6-phase framework that runs in parallel with SDLC's development phases. Where SDLC says \"Test the build\", STLC tells you the six phases that gets you from requirement to closure report.",
  },
  {
    q: "Is STLC waterfall-only, or does it work in Agile / DevOps?",
    a: "STLC phases describe activities, not gates. In waterfall they're sequential and gated. In Agile / DevOps they collapse and overlap — Requirement Analysis happens during story grooming, Test Case Design happens alongside development, Execution runs continuously in CI, Closure happens per-release every two weeks. The phases stay; the cadence compresses.",
  },
  {
    q: "What does \"entry criteria\" and \"exit criteria\" mean in STLC?",
    a: "Entry criteria are the conditions required before a phase can begin (e.g., RTM baselined before Test Planning starts). Exit criteria are the conditions required before a phase can be considered complete (e.g., all P0/P1 defects resolved before Test Execution exits). Without explicit entry/exit criteria, phases slide into each other and the \"done\" bar becomes negotiable — usually downwards.",
  },
  {
    q: "What is the RTM (Requirement Traceability Matrix)?",
    a: "A table that maps every requirement / acceptance criterion to one or more test cases, and tracks each test case's execution status. The RTM is the artifact that proves coverage to auditors: requirement X is exercised by test cases Y and Z, both passed on date D against build B. Without an RTM, \"we tested it\" is a claim you can't substantiate.",
  },
  {
    q: "Does Testriq follow STLC strictly?",
    a: "We use STLC as the academic backbone, then layer our own Discovery + Risk Modeling phase before Requirement Analysis and an explicit Reporting + Evidence phase before Closure. See /qa-process for our adapted six-phase process and how it maps to + extends STLC.",
  },
  {
    q: "Which STLC phase is most often skipped?",
    a: "Test Environment Setup. Teams assume staging is \"close enough\", only to discover under load testing that connection-pool limits, queue depths, or storage-tier differences cause production-only failures. Treat environment setup as a first-class phase with its own smoke-test gate.",
  },
];

function HowToStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Software Testing Life Cycle (STLC)",
    description:
      "The six phases of the Software Testing Life Cycle — Requirement Analysis, Test Planning, Test Case Design, Test Environment Setup, Test Execution, Test Cycle Closure — with entry/exit criteria and deliverables.",
    step: stlcPhases.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title.replace(/^\d+\.\s*/, ""),
      text: p.purpose,
    })),
  };
  return <StructuredData data={schema} />;
}

function FaqStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <StructuredData data={schema} />;
}

function ArticleStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "STLC Explained: The 6 Phases of Software Testing Life Cycle",
    description:
      "The Software Testing Life Cycle (STLC) explained — the 6 phases, entry/exit criteria, deliverables, and common pitfalls.",
    author: {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      name: "Testriq QA Lab",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.testriq.com/#organization",
      name: "Testriq QA Lab",
      logo: { "@type": "ImageObject", url: "https://www.testriq.com/testriq-logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };
  return <StructuredData data={schema} />;
}

const StlcExplainedPage: React.FC = () => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb("/stlc-explained", "STLC Explained")} />
      <HowToStructuredData />
      <FaqStructuredData />
      <ArticleStructuredData />

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
                <li><span className="text-gray-700 font-medium">STLC Explained</span></li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                <FaCertificate className="text-white" />
                <span className="text-white text-sm">ISTQB-aligned · ISO/IEC/IEEE 29119</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                STLC Explained: The <span className="text-brand-blue">6 Phases</span> of the Software Testing Life Cycle
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                STLC — Software Testing Life Cycle — is the academic six-phase framework that defines how testing activities flow from requirement to closure. This guide walks each phase with its entry / exit criteria, deliverables, and the failure mode teams hit most often when they shortcut it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/qa-process"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                >
                  See how Testriq applies it <FaArrowRight />
                </Link>
                <Link
                  href="/test-strategy-template"
                  className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                >
                  Test Strategy Template
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STLC vs SDLC */}
        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">STLC vs SDLC — quick distinction</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              SDLC (Software Development Life Cycle) describes the full build pipeline — requirements through maintenance. STLC describes the testing-specific phases that run in parallel with SDLC&apos;s development phase. Where SDLC says &quot;Test the build&quot;, STLC tells you the six structured phases that turn a requirement into a defensible closure report.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In Agile / DevOps the STLC phases compress and overlap — Requirement Analysis happens during story grooming, Test Case Design happens alongside development, Execution runs continuously in CI, Closure happens every sprint. The <em>phases</em> stay; the <em>cadence</em> changes.
            </p>
          </div>
        </section>

        {/* Phases */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The six STLC phases</h2>
              <p className="text-gray-600 text-lg">
                Each phase has explicit entry criteria, deliverables, exit criteria, and a common pitfall to avoid.
              </p>
            </div>
            <div className="space-y-6">
              {stlcPhases.map(({ Icon, title, purpose, entry, deliverables, exit, pitfall }) => (
                <article key={title} className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100">
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    </div>
                    <div className="lg:col-span-9 space-y-4">
                      <p className="text-gray-800 leading-relaxed">
                        <span className="font-semibold text-brand-blue">Purpose: </span>
                        {purpose}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Entry criteria</p>
                          <ul className="space-y-1.5">
                            {entry.map((e) => (
                              <li key={e} className="flex items-start gap-2 text-sm text-gray-700">
                                <FaCheckCircle className="text-brand-blue mt-0.5 flex-shrink-0" />
                                <span>{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Deliverables</p>
                          <ul className="space-y-1.5">
                            {deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                                <FaCheckCircle className="text-brand-blue mt-0.5 flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Exit criteria</p>
                          <ul className="space-y-1.5">
                            {exit.map((e) => (
                              <li key={e} className="flex items-start gap-2 text-sm text-gray-700">
                                <FaCheckCircle className="text-brand-blue mt-0.5 flex-shrink-0" />
                                <span>{e}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4 mt-2">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-red-600">Common pitfall: </span>
                          {pitfall}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Templates referenced above</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/qa-process", title: "Testriq QA Process", description: "How we apply + extend STLC in real engagements." },
                { href: "/test-strategy-template", title: "Test Strategy Template", description: "Structure for the strategic doc that gates Test Planning." },
                { href: "/test-plan-template", title: "Test Plan Template", description: "IEEE-829-aligned plan structure." },
                { href: "/test-case-template", title: "Test Case Template", description: "Field-by-field format used in Test Case Design." },
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
                <details
                  key={f.q}
                  className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm"
                >
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
            <h2 className="text-3xl font-bold mb-4">From theory to production — let Testriq run STLC for you</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              ISTQB-certified testers, ISO 9001 + ISO/IEC 27001 controlled processes, evidence-grade outputs from phase 1 through phase 6.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Talk to a QA Lead <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StlcExplainedPage;
