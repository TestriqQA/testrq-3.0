import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowRight,
  FaCheckCircle,
  FaSearch,
  FaClipboardList,
  FaCogs,
  FaPlay,
  FaChartBar,
  FaFlagCheckered,
  FaCertificate,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/qa-process";

export const metadata: Metadata = {
  title: "QA Process — How Testriq Delivers Software Quality",
  description:
    "Testriq's 6-phase QA process — Discovery, Strategy, Test Planning, Execution, Reporting, Closure. Risk-first, evidence-based, ISTQB + ISO 9001 + ISO 27001 certified.",
  keywords: [
    "QA Process",
    "Software Testing Process",
    "QA Methodology",
    "Testing Process",
    "Risk-Based Testing",
    "Shift-Left Testing",
    "Test Strategy",
    "Test Planning",
    "Test Execution",
    "QA Reporting",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "QA Process — How Testriq Delivers Software Quality | Testriq",
    description:
      "6-phase QA process — Discovery, Strategy, Planning, Execution, Reporting, Closure. Risk-first + evidence-based + ISTQB + ISO 9001 + ISO 27001 certified.",
    images: [
      {
        url: "https://www.testriq.com/OG/qa-process-og.jpg",
        width: 1200,
        height: 630,
        alt: "Testriq QA Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "QA Process — How Testriq Delivers Software Quality | Testriq",
    description:
      "6-phase QA process — Discovery, Strategy, Planning, Execution, Reporting, Closure. Risk-first + evidence-based.",
    images: ["https://www.testriq.com/OG/qa-process-og.jpg"],
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

const phases = [
  {
    Icon: FaSearch,
    title: "1. Discovery & Risk Modeling",
    duration: "Week 1",
    description:
      "We start by mapping your product, users, integration surface, and regulatory perimeter. The output is a prioritised risk register that drives every subsequent decision — what to automate first, where to invest manual effort, which compliance frameworks apply.",
    deliverables: [
      "System + integration map",
      "Risk register (probability × impact)",
      "Compliance scope (SOC 2 / GDPR / HIPAA / IEC 62443 / etc.)",
      "Existing test asset inventory",
    ],
  },
  {
    Icon: FaClipboardList,
    title: "2. Test Strategy",
    duration: "Week 1-2",
    description: (
      <>
        A test strategy answers <em>what</em> we test and <em>why</em> — driven by the risk register. It commits to the testing types in scope, the coverage targets, the entry / exit criteria, and the boundary between Testriq + client responsibilities.
        Cross-reference our{" "}
        <Link href="/test-strategy-template" className="text-brand-blue underline">
          test strategy template
        </Link>
        .
      </>
    ),
    deliverables: [
      "Test strategy document (scope, approach, ownership)",
      "Test pyramid + automation target ratio",
      "Tooling + framework decisions",
      "Resource plan + RACI matrix",
    ],
  },
  {
    Icon: FaCogs,
    title: "3. Test Planning & Case Design",
    duration: "Week 2-4",
    description: (
      <>
        Strategy turns into concrete plans — per-release test plans, environment requirements, test data needs, and detailed test cases. We follow our{" "}
        <Link href="/test-case-template" className="text-brand-blue underline">
          test case template
        </Link>{" "}
        + standard{" "}
        <Link href="/test-plan-template" className="text-brand-blue underline">
          test plan template
        </Link>{" "}
        so deliverables are auditor-ready and onboarding-friendly.
      </>
    ),
    deliverables: [
      "Release-level test plan",
      "Functional + non-functional test cases",
      "Test-data + environment requirements",
      "Automation script library",
    ],
  },
  {
    Icon: FaPlay,
    title: "4. Test Execution",
    duration: "Continuous (per release / per sprint)",
    description: (
      <>
        Cases get executed against the build under test — automated suites in CI for fast feedback, manual exploratory for high-risk areas. Defects get logged with full reproduction context + severity rating + impact analysis. Wires into{" "}
        <Link href="/regression-testing" className="text-brand-blue underline">
          regression testing
        </Link>{" "}
        and{" "}
        <Link href="/automation-testing-services" className="text-brand-blue underline">
          automation testing
        </Link>{" "}
        practices.
      </>
    ),
    deliverables: [
      "Daily test execution status",
      "Defect log with severity + reproducibility",
      "Automation run reports (CI-integrated)",
      "Exploratory testing session charters + notes",
    ],
  },
  {
    Icon: FaChartBar,
    title: "5. Reporting & Evidence",
    duration: "Per release + per audit cycle",
    description:
      "Every test run produces auditable evidence — coverage metrics, pass/fail trends, defect-density per module, time-to-resolution. For regulated industries, evidence packs are bundled per control framework (SOC 2 TSC / IEC 61508 SIL / FDA 21 CFR Part 11) so auditors can trace every control to its proof.",
    deliverables: [
      "Per-release QA report (executive summary + drilldown)",
      "Coverage + defect-density dashboards",
      "Compliance evidence packs (audit-ready)",
      "Sign-off recommendations with risk callouts",
    ],
  },
  {
    Icon: FaFlagCheckered,
    title: "6. Closure & Retrospective",
    duration: "Per release / per project end",
    description:
      "We don't just close tickets — we close loops. Every release retrospective surfaces process gaps, automation candidates, recurring defect classes, and team coaching opportunities. The next discovery cycle inherits a sharper risk register because of it.",
    deliverables: [
      "Release retrospective deck",
      "Process-improvement backlog",
      "Automation-candidate prioritisation",
      "Quality metric trend vs prior releases",
    ],
  },
];

const principles = [
  {
    title: "Risk-first prioritisation",
    description:
      "Coverage targets follow risk impact, not feature count. A 10-test suite that exercises the 3 highest-revenue flows beats a 200-test suite that exercises every settings checkbox.",
  },
  {
    title: "Shift-left + shift-right",
    description:
      "We engage at design review (catch ambiguities early) and operate synthetic monitors in production (catch regressions post-deploy). The middle — pre-merge automation — is the cheap part.",
  },
  {
    title: "Evidence-grade, not just exec-summary",
    description:
      "Every test produces a record an auditor can verify. No untracked spreadsheets, no \"trust me\" sign-offs. Audit cycles become 3-day exports instead of 3-week scrambles.",
  },
  {
    title: "ISTQB-certified people, ISO-controlled processes",
    description:
      "Testers are ISTQB-certified; the lab itself operates under ISO 9001 + ISO/IEC 27001. Customer data and test artifacts are handled accordingly.",
  },
];

const faqs = [
  {
    q: "How does Testriq's QA process differ from STLC?",
    a: "STLC is the academic six-phase framework — Requirement Analysis, Test Planning, Test Case Design, Test Environment Setup, Test Execution, Test Cycle Closure. Our 6-phase process is operationally similar but front-loads a Discovery + Risk Modeling step that drives every subsequent decision, and adds an explicit Reporting + Evidence phase tuned for regulated-industry audit cycles. See our /stlc-explained page for a detailed breakdown of the academic STLC framework itself.",
  },
  {
    q: "Can the process be compressed for small or fast-moving projects?",
    a: "Yes. For a 2-week startup MVP, Discovery + Strategy compress to a half-day workshop, Planning + Case Design happen in parallel with execution, and Reporting is a single PR comment + dashboard rather than a formal evidence pack. The phases stay; the artifacts shrink to match the risk profile.",
  },
  {
    q: "Do you replace our existing QA team or augment it?",
    a: "Either model. Augmentation: Testriq engineers embed in your existing team, follow your ticket flow, contribute to your test suite, and exit cleanly. Replacement: we own the entire QA function with a dedicated lead, escalation channel, and monthly steering reviews. Most engagements start augmented and grow into managed if it works.",
  },
  {
    q: "How is risk-based testing different from generic risk-based testing claims?",
    a: "Risk-based testing requires a quantified risk register — probability × impact, scored, prioritised, dated, and traceable to a specific test case. We build that register in Discovery, refresh it per release, and decline to run tests that don't map to a register entry. That discipline is what makes the \"risk-based\" claim real rather than marketing.",
  },
  {
    q: "What QA tools do you typically use?",
    a: "Stack varies by client. Common: Playwright / Cypress / Selenium for web automation; Appium / Espresso / XCUITest for mobile; Postman / Newman / Pact for API; JMeter / k6 / Locust for performance; Burp / OWASP ZAP for security; Xray / TestRail / Zephyr for test management; Jira / Linear for defect tracking. We extend whatever you already have rather than impose a Testriq-only stack.",
  },
  {
    q: "How long until we see measurable improvement?",
    a: "First-pass results inside 4-6 weeks (defect-leakage reduction, coverage visibility, evidence-pack discipline). Sustained improvement on the 8-16 week mark — automation ROI compounds, audit prep collapses from weeks to days, and release confidence stops needing \"hope\" in standup status reports.",
  },
];

function HowToStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Testriq QA Process",
    description:
      "The six-phase quality-assurance process used by Testriq for software testing engagements — Discovery, Strategy, Planning, Execution, Reporting, Closure.",
    totalTime: "P12W",
    step: phases.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title.replace(/^\d+\.\s*/, ""),
      // Strip JSX nodes — extract description as plain string from the
      // serialised text or fall back to title.
      text: typeof p.description === "string" ? p.description : p.title,
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

const QaProcessPage: React.FC = () => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb("/qa-process", "QA Process")} />
      <HowToStructuredData />
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
                <li>
                  <span className="text-gray-700 font-medium">QA Process</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                <FaCertificate className="text-white" />
                <span className="text-white text-sm">ISTQB + ISO 9001 + ISO 27001 Certified</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Our <span className="text-brand-blue">QA Process</span> — How Testriq Delivers Software Quality
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A six-phase, risk-first, evidence-based methodology — Discovery, Strategy, Planning, Execution, Reporting, Closure. Built for teams that ship continuously but answer to auditors quarterly. Refined across hundreds of engagements spanning SaaS, BFSI, healthcare, manufacturing, IoT, and gaming.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                >
                  Talk to a QA Lead <FaArrowRight />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                >
                  See it applied — case studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Four principles behind the process</h2>
              <p className="text-gray-600 text-lg">
                Process diagrams without principles are decoration. These four govern every phase below.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div key={p.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The six phases</h2>
              <p className="text-gray-600 text-lg">
                Each phase has a defined output. Skip a phase, lose the evidence trail behind every later one.
              </p>
            </div>
            <div className="space-y-6">
              {phases.map(({ Icon, title, duration, description, deliverables }) => (
                <article
                  key={title}
                  className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 grid lg:grid-cols-12 gap-6"
                >
                  <div className="lg:col-span-3">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-brand-blue font-semibold">{duration}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="text-gray-700 leading-relaxed mb-4">{description}</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                        Deliverables
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related templates &amp; deep-dives</h2>
              <p className="text-gray-600 text-lg">
                Each phase has a dedicated reference doc you can copy as a starting point.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/stlc-explained", title: "STLC Explained", description: "The 6-phase Software Testing Life Cycle in depth." },
                { href: "/test-strategy-template", title: "Test Strategy Template", description: "What a test-strategy doc actually contains." },
                { href: "/test-plan-template", title: "Test Plan Template", description: "IEEE-829-aligned test plan structure." },
                { href: "/test-case-template", title: "Test Case Template", description: "Field-by-field test-case format + examples." },
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

        {/* Contact CTA */}
        <section className="bg-brand-blue text-white py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get a QA Process tailored to your release cadence</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a QA lead. We&apos;ll map your release rhythm + compliance scope to a 6-phase plan you can act on this quarter.
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

export default QaProcessPage;
