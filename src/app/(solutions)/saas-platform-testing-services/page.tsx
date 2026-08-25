import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaCreditCard,
  FaShieldAlt,
  FaCodeBranch,
  FaServer,
  FaRocket,
  FaCertificate,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import StructuredData, {
  createCanonicalBreadcrumb,
  saasPlatformTestingServiceSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/saas-platform-testing-services";

export const metadata: Metadata = {
  title: "SaaS Platform Testing Services",
  description:
    "Multi-tenant QA, SOC 2 + GDPR pre-audit testing, subscription-billing validation, API contract testing, and zero-downtime release verification for B2B and B2C SaaS platforms — ISTQB + ISO 9001 + ISO 27001 certified.",
  keywords: [
    "SaaS Testing Services",
    "Multi-Tenant Testing",
    "SaaS QA",
    "SOC 2 Compliance Testing",
    "GDPR Testing",
    "Subscription Billing QA",
    "API Contract Testing",
    "SaaS Load Testing",
    "Zero-Downtime Release Testing",
    "Feature-Flag Testing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq - SaaS QA Services",
    title: "SaaS Platform Testing Services | Multi-Tenant QA, SOC 2 + GDPR | Testriq",
    description:
      "End-to-end QA for B2B & B2C SaaS platforms — multi-tenant isolation, subscription billing, SOC 2 / GDPR pre-audit, API contracts, scalability, zero-downtime releases.",
    images: [
      {
        url: "https://www.testriq.com/OG/saas-platform-testing-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Testriq SaaS Platform Testing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "SaaS Platform Testing Services | Multi-Tenant QA, SOC 2 + GDPR | Testriq",
    description:
      "End-to-end QA for B2B & B2C SaaS platforms — multi-tenant isolation, billing, SOC 2 + GDPR, API contracts, scalability, zero-downtime releases.",
    images: ["https://www.testriq.com/OG/saas-platform-testing-services-og.jpg"],
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

const challenges = [
  {
    Icon: FaUsers,
    title: "Multi-Tenant Data Isolation",
    problem:
      "Shared-database SaaS architectures regularly leak between tenants when row-level security or query filters break under edge-case roles, exports, or async jobs.",
    solution: (
      <>
        Tenant-isolation matrix testing across read paths, async workers, exports, and admin tooling — paired with{" "}
        <Link href="/security-testing" className="text-brand-blue underline">
          authorization fuzzing
        </Link>{" "}
        to catch missing tenant filters before they hit production.
      </>
    ),
  },
  {
    Icon: FaCreditCard,
    title: "Subscription, Billing & Dunning Edge Cases",
    problem:
      "Trial-to-paid, plan upgrades/downgrades, mid-cycle proration, webhook retries, and dunning sequences combinatorially explode — a single broken webhook can leak revenue silently for weeks.",
    solution: (
      <>
        End-to-end billing-flow QA across Stripe / Chargebee / Recurly, with synthetic clocks for proration, webhook-replay coverage, and idempotency assertions on every state transition.
      </>
    ),
  },
  {
    Icon: FaShieldAlt,
    title: "SOC 2 & GDPR Pre-Audit Risk",
    problem:
      "Auditors flag missing audit-log entries, weak access-review evidence, incomplete DSAR workflows, and ad-hoc encryption-key handling — findings that delay enterprise procurement by months.",
    solution: (
      <>
        Pre-audit validation of every Trust Services Criterion + GDPR Article 15-22 flow, paired with documented evidence packs the auditor can sign off on. Ties to{" "}
        <Link href="/security-testing" className="text-brand-blue underline">
          security testing
        </Link>{" "}
        + access-control QA.
      </>
    ),
  },
  {
    Icon: FaCodeBranch,
    title: "API Contracts Breaking on Continuous Delivery",
    problem:
      "Every multi-tenant SaaS exposes public APIs + webhooks. A backwards-incompatible change silently breaks partner integrations until a customer escalates — usually on a Friday afternoon.",
    solution: (
      <>
        Pact / OpenAPI contract tests that gate every deploy; partner-integration regression suites that exercise the same surface real customers use.
      </>
    ),
  },
  {
    Icon: FaServer,
    title: "Scalability Under Enterprise Tenant Load",
    problem:
      "Auto-scaling tested against synthetic traffic shapes lies — real enterprise tenants drive bursty, fan-out queries that exhaust DB connection pools or trigger noisy-neighbour CPU contention.",
    solution: (
      <>
        Production-shape{" "}
        <Link href="/performance-testing-services" className="text-brand-blue underline">
          load + soak testing
        </Link>{" "}
        with per-tenant traffic profiles, queue-depth assertions, and explicit autoscaling-policy validation.
      </>
    ),
  },
  {
    Icon: FaRocket,
    title: "Zero-Downtime Releases & Feature-Flag Sprawl",
    problem:
      "Blue-green or canary rollouts catch broad failures but miss feature-flag combinatorics — N flags = 2^N effective branches, only a handful ever get hit in QA.",
    solution: (
      <>
        Synthetic monitoring during canary windows + targeted feature-flag matrix testing against critical-path combinations. Rolled into{" "}
        <Link href="/regression-testing" className="text-brand-blue underline">
          automated regression
        </Link>{" "}
        so every release is gated.
      </>
    ),
  },
];

const services = [
  {
    title: "Multi-Tenant Isolation Testing",
    description:
      "Data-isolation matrices, role-based access boundaries, per-tenant config drift detection, cross-tenant export safety.",
  },
  {
    title: "Subscription & Billing QA",
    description:
      "Trial / upgrade / downgrade / cancel flows, proration edge cases, Stripe / Chargebee / Recurly webhook reliability, dunning sequences.",
  },
  {
    title: "SOC 2 & GDPR Compliance Testing",
    description:
      "Pre-audit validation of access controls, audit-log completeness, encryption-at-rest/in-transit, DSAR workflows, and data-residency policies.",
  },
  {
    title: "API Contract Testing",
    description:
      "Schema-driven Pact / OpenAPI tests across public APIs, webhooks, and partner integrations gated into your CI pipeline.",
  },
  {
    title: "Scalability & Load Testing",
    description:
      "Burst-load + sustained-soak simulation validating auto-scaling, DB pools, queue throughput at enterprise tenant volumes.",
  },
  {
    title: "Zero-Downtime Release Validation",
    description:
      "Blue-green / canary verification, feature-flag matrix testing, synthetic-monitor smoke suites gating production rollouts.",
  },
  {
    title: "Onboarding & Activation Flow QA",
    description:
      "First-run setup, SSO/SCIM provisioning, sample-data seeding, time-to-first-value tests for B2B activation.",
  },
  {
    title: "Mobile + Web Parity Testing",
    description:
      "Cross-platform regression for SaaS that ships iOS / Android / responsive web from a single API surface.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Tenant Modeling",
    description:
      "Map your tenant model, billing topology, integration surface, and SOC 2 / GDPR scope so the QA strategy mirrors how real customers (and auditors) exercise the platform.",
  },
  {
    step: "02",
    title: "Risk-Based Test Strategy",
    description:
      "Prioritise the highest-impact failure modes — tenant leakage, revenue leakage, audit findings, partner-API regressions — and build automation around those first.",
  },
  {
    step: "03",
    title: "CI-Integrated Automation",
    description:
      "Wire contract tests, isolation suites, and feature-flag matrices into your CI pipeline so every commit is graded against the failure modes that actually matter.",
  },
  {
    step: "04",
    title: "Production Synthetic Monitoring",
    description:
      "Synthetic monitors run the critical-path activation and checkout flows continuously, so canary-window regressions trip alerts before the first real customer feels them.",
  },
  {
    step: "05",
    title: "Compliance Evidence Packs",
    description:
      "Every test run produces auditor-ready evidence — control mapping, run history, sign-offs — collapsing weeks of SOC 2 evidence collection into a single export.",
  },
];

const complianceFrameworks = [
  { name: "SOC 2 Type II", description: "Trust Services Criteria pre-audit validation" },
  { name: "GDPR", description: "Articles 15-22 DSAR workflow + data-residency testing" },
  { name: "ISO/IEC 27001:2022", description: "ISMS control validation aligned to Annex A" },
  { name: "HIPAA (for SaaS in health)", description: "PHI handling + BAA-compatible controls" },
  { name: "PCI DSS", description: "For SaaS that handles cardholder data directly" },
  { name: "CCPA / CPRA", description: "Consumer rights + opt-out workflows" },
];

const faqs = [
  {
    q: "How does Testriq test multi-tenant isolation without access to our production data?",
    a: "We build a representative test-tenant matrix in your staging environment — typically 3-5 tenants spanning small/medium/enterprise plans, with seeded data that mirrors real production shapes. Isolation tests then exercise the read paths, async workers, exports, and admin tooling that historically leak across tenants. No production data ever leaves your environment.",
  },
  {
    q: "Can you start before our SOC 2 audit window, or only during prep?",
    a: "Either. The highest ROI is 60-90 days before your audit window — we can validate every Trust Services Criterion control with documented test evidence, surface gaps while you still have time to remediate, and hand the auditor a pre-packaged evidence trail. Mid-audit engagement is also possible if findings appeared late.",
  },
  {
    q: "Do you write tests in our existing framework, or replace it?",
    a: "We extend whatever you already have — Playwright, Cypress, Jest, Pytest, Postman/Newman, k6, Pact. The goal is to leave your team with maintainable suites in their own stack, not a separate Testriq-only test harness.",
  },
  {
    q: "How does this differ from your generic /saas-testing-services service page?",
    a: "/saas-testing-services covers QA service offerings for any SaaS app. This /saas-platform-testing-services solution page is the industry-vertical buyer view — multi-tenant architecture, subscription billing, compliance audits, partner-API contracts — the failure modes specific to running a SaaS business, not just any cloud app.",
  },
  {
    q: "What's your typical engagement length for a B2B SaaS?",
    a: "Most engagements run 8-16 weeks for the initial setup — discovery, test-strategy build-out, automation in CI, evidence-pack delivery. After that, retainer or pay-as-you-go for ongoing release-gating and audit-cycle support.",
  },
  {
    q: "Are your testers ISTQB-certified, and do you have ISO/IEC 27001 controls of your own?",
    a: "Yes on both — Testriq is ISTQB-certified across the lab and operates under ISO 9001 + ISO/IEC 27001 information-security controls. Customer data and test artifacts are handled accordingly.",
  },
];

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

const SaasPlatformTestingPage: React.FC = () => {
  return (
    <div>
      <StructuredData data={saasPlatformTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/saas-platform-testing-services", "SaaS Platform Testing Services")}
      />
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
                  <span className="text-gray-700 font-medium">SaaS Platform Testing Services</span>
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                  <FaCertificate className="text-white" />
                  <span className="text-white text-sm">ISTQB + ISO 9001 + ISO 27001 Certified Partner</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  SaaS Platform <span className="text-brand-blue">Testing Services</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                  End-to-end QA for B2B and B2C SaaS platforms — multi-tenant isolation, subscription billing,
                  SOC 2 + GDPR pre-audit validation, API contract testing, scalability, and zero-downtime release
                  verification. Built for teams shipping continuous delivery without breaking enterprise tenants.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                  >
                    Talk to a SaaS QA Lead <FaArrowRight />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                  >
                    Read SaaS case studies
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                    What we cover
                  </h2>
                  <ul className="space-y-3 text-gray-800">
                    {[
                      "Multi-tenant isolation matrix testing",
                      "Stripe / Chargebee / Recurly billing QA",
                      "SOC 2 + GDPR pre-audit evidence packs",
                      "Pact / OpenAPI contract gating in CI",
                      "Production-shape load + soak testing",
                      "Canary + feature-flag matrix validation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The six SaaS-specific failure modes we test for
              </h2>
              <p className="text-gray-600 text-lg">
                Generic web-app QA misses the failure modes unique to running a SaaS business. These are the
                ones that show up as escalations, audit findings, or revenue leaks.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map(({ Icon, title, problem, solution }) => (
                <div
                  key={title}
                  className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">{problem}</p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-semibold text-brand-blue">Testriq approach: </span>
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                SaaS testing services we offer
              </h2>
              <p className="text-gray-600 text-lg">
                Each service plugs into your existing CI / observability stack rather than replacing it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How we engage</h2>
              <p className="text-gray-600 text-lg">
                A five-step path from kickoff to compliance-ready coverage — typically 8 to 16 weeks for the
                initial build-out, then ongoing release-gating.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((p) => (
                <div key={p.step} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-brand-blue mb-3">{p.step}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance frameworks we test against</h2>
              <p className="text-gray-600 text-lg">
                Each control mapped, each test traceable, each run packaged as auditor-ready evidence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceFrameworks.map((c) => (
                <div key={c.name} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-3">
                  <FaCertificate className="text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{c.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{c.description}</div>
                  </div>
                </div>
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
                <details
                  key={f.q}
                  className="group bg-slate-50 rounded-xl border border-gray-100 p-5 open:shadow-sm"
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
            <h2 className="text-3xl font-bold mb-4">
              Ship your next SaaS release without the tenant-leak surprise
            </h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a SaaS QA lead about a tailored multi-tenant + compliance test plan for your platform.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a SaaS QA proposal <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaasPlatformTestingPage;
