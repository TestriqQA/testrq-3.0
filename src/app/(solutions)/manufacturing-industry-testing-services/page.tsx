import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaNetworkWired,
  FaCogs,
  FaProjectDiagram,
  FaDatabase,
  FaCertificate,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import StructuredData, {
  createCanonicalBreadcrumb,
  manufacturingIndustryTestingServiceSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/manufacturing-industry-testing-services";

export const metadata: Metadata = {
  title: "Manufacturing & Industry 4.0 Testing Services",
  description:
    "MES / SCADA validation, IEC 61508 functional-safety, IEC 62443 OT cyber-security, OPC UA / MQTT protocol QA, digital-twin testing, and ERP↔shopfloor integration testing for manufacturers — ISTQB + ISO 9001 + ISO 27001 certified.",
  keywords: [
    "Manufacturing Software Testing",
    "Industry 4.0 QA",
    "MES Testing",
    "SCADA Testing",
    "IEC 61508 Functional Safety",
    "IEC 62443 OT Security",
    "OPC UA Testing",
    "MQTT Testing",
    "Digital Twin QA",
    "Industrial IoT Testing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq - Manufacturing QA Services",
    title:
      "Manufacturing & Industry 4.0 Testing Services | MES / SCADA / IEC 61508 / IEC 62443 | Testriq",
    description:
      "MES + SCADA validation, IEC 61508 functional safety, IEC 62443 OT security, OPC UA / MQTT protocol QA, digital-twin testing, ERP↔shopfloor integration.",
    images: [
      {
        url: "https://www.testriq.com/testriq-logo.png",
        width: 1200,
        height: 630,
        alt: "Testriq Manufacturing & Industry 4.0 Testing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Manufacturing & Industry 4.0 Testing Services | MES / SCADA / IEC 61508 / IEC 62443 | Testriq",
    description:
      "MES + SCADA, IEC 61508, IEC 62443 OT security, OPC UA / MQTT, digital-twin, ERP↔shopfloor QA.",
    images: ["https://www.testriq.com/testriq-logo.png"],
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
    Icon: FaShieldAlt,
    title: "OT Cyber-security Under IEC 62443",
    problem:
      "Operational-technology networks are flat, legacy, and often invisible to IT. A single weaponised USB or compromised vendor laptop can pivot from a HMI all the way to the PLC layer.",
    solution: (
      <>
        Segmentation audits, DMZ + jump-host validation, and{" "}
        <Link href="/security-testing" className="text-brand-blue underline">
          OT-aware penetration testing
        </Link>{" "}
        across IEC 62443 security levels SL1–SL4 — without disrupting production windows.
      </>
    ),
  },
  {
    Icon: FaCogs,
    title: "Functional-Safety Validation (IEC 61508 / ISO 26262)",
    problem:
      "Safety-critical control software needs SIL-rated validation, fault-injection coverage, and HAZOP-driven test design — a generic test suite will not survive a notified-body audit.",
    solution: (
      <>
        SIL-rated test plans aligned to IEC 61508 / ISO 26262, with fault-injection coverage, traceability
        matrices, and audit-ready evidence packs.
      </>
    ),
  },
  {
    Icon: FaNetworkWired,
    title: "Protocol Interoperability — OPC UA, MQTT, Modbus, PROFINET",
    problem:
      "Industrial IoT stacks are heterogeneous by design. Vendor implementations of the &quot;same&quot; OPC UA or Modbus profile diverge in subtle ways that only surface under real device matrices.",
    solution: (
      <>
        Conformance + interoperability testing on real shop-floor and lab-bench device matrices —
        catching profile drift, byte-order issues, and timing edge cases before they cause line stops.
      </>
    ),
  },
  {
    Icon: FaProjectDiagram,
    title: "MES / SCADA Failover & Data-Path Reliability",
    problem:
      "PLC → HMI → historian data paths are the eyes of the plant. Silent failures — clock drift, dropped tags, historian gaps — corrode OEE without an obvious alarm.",
    solution: (
      <>
        End-to-end MES + SCADA testing covering failover, tag-rate sustained load, historian gap detection,
        and recipe-management edge cases.
      </>
    ),
  },
  {
    Icon: FaDatabase,
    title: "ERP ↔ Shopfloor Integration Drift",
    problem:
      "SAP / Oracle / Dynamics ERPs hold the BOM, work orders, and inventory state — but the shopfloor lives in MES + historian + SCADA. Sync drift causes phantom inventory, missed work orders, and reconciliation nightmares.",
    solution: (
      <>
        End-to-end ERP ↔ MES integration QA covering BOM propagation, work-order lifecycle, inventory
        movements, and exception-flow reconciliation.
      </>
    ),
  },
  {
    Icon: FaIndustry,
    title: "Digital-Twin & Predictive-Maintenance Drift",
    problem:
      "Digital twins are only as good as their parity with the physical asset — and ML-based predictive-maintenance models silently degrade as machine wear-patterns evolve.",
    solution: (
      <>
        Parity testing of digital-twin models against physical telemetry, drift-detection harnesses, and
        ML-model accuracy regression suites for predictive-maintenance pipelines.
      </>
    ),
  },
];

const services = [
  {
    title: "MES / SCADA System Testing",
    description:
      "Functional, integration, and failover testing of Manufacturing Execution Systems and SCADA stacks, including PLC ↔ HMI ↔ historian data-path validation.",
  },
  {
    title: "IEC 62443 OT Cyber-security Testing",
    description:
      "Penetration testing + segmentation audits for OT networks per security levels SL1–SL4, with DMZ + jump-host validation.",
  },
  {
    title: "IEC 61508 / ISO 26262 Functional-Safety Validation",
    description:
      "SIL-rated test plans, fault-injection coverage, HAZOP-driven test design, traceability matrices for safety-critical industrial control software.",
  },
  {
    title: "Industrial IoT Protocol Testing",
    description:
      "Interoperability + conformance testing for OPC UA, MQTT, Modbus, PROFINET on real shop-floor + lab-bench device matrices.",
  },
  {
    title: "Digital-Twin & Simulation QA",
    description:
      "Parity testing of twin vs physical asset telemetry, drift-detection harnesses, predictive-maintenance ML model accuracy regression.",
  },
  {
    title: "ERP ↔ Shopfloor Integration Testing",
    description:
      "End-to-end QA of SAP / Oracle / Dynamics ERP integration with MES — BOM sync, work-order propagation, inventory-movement reconciliation.",
  },
  {
    title: "Predictive-Maintenance Analytics Validation",
    description:
      "Validation of feature pipelines, model drift detection, alert-suppression logic, and feedback-loop integrity for predictive maintenance.",
  },
  {
    title: "Plant-Floor Application UX & Accessibility",
    description:
      "Glove-friendly UI testing, gloved-touch tap targets, high-contrast HMI validation for shopfloor tablets and panel-mount displays.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plant-Floor Architecture Discovery",
    description:
      "Map your OT topology, control-system layers (Purdue Reference Model), MES + SCADA + historian + ERP integration paths, and the safety + cyber-security regulatory perimeter.",
  },
  {
    step: "02",
    title: "Risk + Safety-Case Test Strategy",
    description:
      "Prioritise failure modes that affect safety, uptime, quality, and audit posture. Map every test to IEC 61508 / IEC 62443 / ISO 27001 control where applicable.",
  },
  {
    step: "03",
    title: "Lab + Shop-Floor Test Execution",
    description:
      "Bench-test against real device matrices for protocol conformance; shop-floor smoke tests during planned maintenance windows to avoid production disruption.",
  },
  {
    step: "04",
    title: "Continuous OT Monitoring",
    description:
      "Synthetic transactions and historian-gap detectors continuously validate the PLC → HMI → historian data path so silent failures surface before OEE degrades.",
  },
  {
    step: "05",
    title: "Compliance + Audit Evidence Packs",
    description:
      "Auditor-ready evidence for IEC 61508 SIL claims, IEC 62443 security-level certification, and ISO 27001 ISMS controls — versioned + traceable to specific test runs.",
  },
];

const complianceFrameworks = [
  { name: "IEC 62443", description: "OT cyber-security security levels SL1–SL4" },
  { name: "IEC 61508", description: "Functional safety for safety-related E/E/PE systems" },
  { name: "ISO 26262", description: "Functional safety for road vehicles (automotive)" },
  { name: "ISO 9001:2015", description: "Quality management system requirements" },
  { name: "ISO/IEC 27001:2022", description: "Information security management (corporate IT layer)" },
  { name: "NIST SP 800-82", description: "Guide to industrial control systems (ICS) security" },
  { name: "FDA 21 CFR Part 11", description: "Electronic records for regulated manufacturing (pharma)" },
  { name: "OPC UA Compliance Test Suite", description: "Vendor-neutral interoperability certification" },
];

const faqs = [
  {
    q: "Can you test OT systems without disrupting our production line?",
    a: "Yes — and that is the operating assumption from day one. Penetration testing and high-impact validation happen against lab-bench replicas of your PLC + HMI + historian stack, with read-only passive monitoring on the live network during planned maintenance windows. Live-line tests run only with site engineering sign-off and a rollback plan attested in writing.",
  },
  {
    q: "Do you work alongside our existing system integrator or replace them?",
    a: "Alongside. System integrators (Rockwell / Siemens / Honeywell / Emerson partners, etc.) own the platform engineering; Testriq owns independent test execution + audit evidence. The two are complementary — auditors actually prefer the segregation of duties.",
  },
  {
    q: "What's a realistic engagement timeline for an IEC 62443 cyber-security assessment?",
    a: "Scoping + asset inventory: 2–3 weeks. Lab-replica build + threat modeling: 2–4 weeks. Active testing (segmentation, jump-host, vendor pathway): 3–6 weeks depending on scope. Evidence-pack delivery: 1–2 weeks. So 8–15 weeks for a complete first-pass per security level claim.",
  },
  {
    q: "Do you handle FDA 21 CFR Part 11 validation for regulated manufacturing?",
    a: "Yes — for life-sciences / pharma manufacturing systems where electronic records + e-signatures fall under 21 CFR Part 11. We extend the same evidence-pack discipline used for IEC 61508 traceability to cover Part 11 controls (audit trails, signature manifestation, access controls).",
  },
  {
    q: "How do you test digital-twin model parity against a physical asset?",
    a: "We build a parity harness that ingests live telemetry from the physical asset and the corresponding twin output, computes drift metrics on a defined cadence, and alarms on threshold breaches. For ML-based predictive-maintenance, the harness also tracks model-accuracy regression against a held-out evaluation set.",
  },
  {
    q: "Are your testers ISTQB-certified and operating under documented controls?",
    a: "Yes — Testriq is ISTQB-certified across the lab and operates under ISO 9001 + ISO/IEC 27001 information-security controls. Customer data, design documents, and test artifacts are handled accordingly under NDAs + retention policies sized to engagement type.",
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

const ManufacturingIndustryTestingPage: React.FC = () => {
  return (
    <div>
      <StructuredData data={manufacturingIndustryTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/manufacturing-industry-testing-services",
          "Manufacturing & Industry 4.0 Testing Services"
        )}
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
                  <span className="text-gray-700 font-medium">Manufacturing & Industry 4.0 Testing Services</span>
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
                  Manufacturing &amp; <span className="text-brand-blue">Industry 4.0</span> Testing Services
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                  Independent QA for MES, SCADA, industrial IoT, and digital-twin systems — IEC 61508
                  functional-safety, IEC 62443 OT cyber-security, OPC UA / MQTT protocol conformance, and
                  ERP↔shopfloor integration. Auditor-ready evidence, zero production disruption.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                  >
                    Talk to a Manufacturing QA Lead <FaArrowRight />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                  >
                    Read industrial case studies
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
                      "MES + SCADA functional + failover testing",
                      "IEC 62443 OT cyber-security assessments",
                      "IEC 61508 / ISO 26262 functional safety",
                      "OPC UA / MQTT / Modbus / PROFINET conformance",
                      "Digital-twin parity + drift detection",
                      "ERP↔shopfloor integration QA",
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
                The six manufacturing-specific failure modes we test for
              </h2>
              <p className="text-gray-600 text-lg">
                Plant-floor and Industry 4.0 systems fail differently from generic web apps. These are the
                ones that translate into line stops, audit findings, or safety incidents.
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
                Manufacturing &amp; Industry 4.0 testing services we offer
              </h2>
              <p className="text-gray-600 text-lg">
                Each service is sequenced around your maintenance windows and integrates with existing system-integrator workflows.
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
                Five steps from plant-floor discovery to ongoing OT monitoring — typically 8–15 weeks for a
                first-pass IEC 62443 / IEC 61508 evidence cycle.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards we validate against</h2>
              <p className="text-gray-600 text-lg">
                Each standard mapped, each test traceable, each run packaged as auditor-ready evidence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              Independent QA for safety-critical manufacturing systems
            </h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a manufacturing QA lead about a tailored IEC 62443 / IEC 61508 / Industry 4.0 test plan
              that respects your maintenance windows and audit timeline.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a manufacturing QA proposal <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManufacturingIndustryTestingPage;
