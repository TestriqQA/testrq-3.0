import React from "react";
import { Metadata } from "next";
import HireServicePage from "@/components/sections/HireServicePage";

export const revalidate = 3600;
const PAGE_URL = "https://www.testriq.com/dedicated-qa-team";

export const metadata: Metadata = {
  title: "Dedicated QA Team — Outsourced QA Function That Owns the Outcome",
  description:
    "Dedicated QA team by Testriq — a fully-managed QA function: QA Lead, automation engineers, manual testers, performance + security specialists. ISO 9001 + ISO/IEC 27001 controlled.",
  keywords: [
    "Dedicated QA Team",
    "Outsourced QA Team",
    "QA Outsourcing",
    "Managed QA Services",
    "Outsourced Quality Assurance",
    "QA Pod",
    "QA Function Outsourcing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Dedicated QA Team — Outsourced QA Function That Owns the Outcome | Testriq",
    description: "Fully-managed QA function: lead, automation, manual, perf, security. Owns the outcome.",
    images: [{ url: "https://www.testriq.com/testriq-logo.png", width: 1200, height: 630, alt: "Testriq Dedicated QA Team" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Dedicated QA Team — Outsourced QA Function That Owns the Outcome | Testriq",
    description: "Fully-managed QA function: lead, automation, manual, perf, security.",
    images: ["https://www.testriq.com/testriq-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const DedicatedQaTeamPage: React.FC = () => (
  <HireServicePage
    offeringName="Dedicated QA Team"
    slug="dedicated-qa-team"
    breadcrumbName="Dedicated QA Team"
    relatedLinks={[
      { label: "QA Outsourcing Services", href: "/qa-outsourcing-services" },
      { label: "Managed Testing Services", href: "/managed-testing-services" },
    ]}
    heroTitle="Dedicated QA Team — Outsourced QA Function That Owns the Outcome"
    heroDescription="A self-sufficient Testriq pod that owns your QA function end-to-end: dedicated QA Lead, automation engineers, manual testers, performance + security specialists, all working as one unit. You get a quality outcome — coverage, evidence, release-gating — without managing individual engineers. ISO 9001 + ISO/IEC 27001 ISMS controlled."
    whatYouGet={[
      "Dedicated QA Lead — your single point of contact + accountability",
      "Right-sized pod (4-12 engineers typical) covering specialisations",
      "Owned by Testriq — we manage the engineers, you manage the outcome",
      "Audit-ready evidence packs for SOC 2 / IEC 62443 / FDA Part 11",
      "Monthly steering review + quarterly business review",
    ]}
    engagementModels={[
      {
        title: "Project QA Pod",
        description: "Dedicated team for a defined product or release cycle. Builds the test strategy, executes the suite, delivers evidence, hands off when project completes.",
        bestFor: "Single-product orgs with quarterly release cycles, MVP-to-production launches, regulatory-cycle releases.",
      },
      {
        title: "Managed QA Function",
        description: "Permanent dedicated team that IS your QA function. Continuous capacity across multiple products + releases + audit cycles. Replaces or supplements an in-house QA org.",
        bestFor: "Mid-size to enterprise orgs that don't want to build + retain an internal QA org but need professional QA depth.",
      },
      {
        title: "Audit-Cycle Pod",
        description: "Specialty pod that engages around regulatory audit cycles — SOC 2, IEC 62443, FDA, ISO 27001 — builds evidence packs, manages the audit interaction, exits cleanly.",
        bestFor: "Regulated industries with annual or biannual audit cycles, M&A due-diligence audits, certification initial-launches.",
      },
      {
        title: "Platform QA Pod",
        description: "Long-running platform-level QA team for SaaS providers — multi-tenant testing, partner-API contract testing, ongoing compliance, performance + security posture.",
        bestFor: "SaaS platforms with continuous-deployment cadence + B2B enterprise customers that demand audit traceability.",
      },
    ]}
    roles={[
      {
        title: "QA Lead",
        skills: ["ISTQB Advanced", "Test Strategy", "Team Coaching", "Stakeholder Reporting", "Process Design"],
        typicalEngagement: "Permanent for the lifetime of the pod. Single point of accountability.",
      },
      {
        title: "Automation Engineers (2-4)",
        skills: ["Selenium", "Cypress", "Playwright", "Page Object", "CI/CD", "Framework Architecture"],
        typicalEngagement: "Long-term. Build + maintain regression suites + new-feature coverage.",
      },
      {
        title: "Manual QA + Exploratory Testers (1-3)",
        skills: ["ISTQB", "Exploratory Charters", "Session-Based Testing", "UAT Facilitation"],
        typicalEngagement: "Long-term. Cover what automation can't: UX, exploratory, accessibility flow.",
      },
      {
        title: "Performance Engineer",
        skills: ["JMeter", "k6", "Gatling", "Load Modeling", "APM Correlation"],
        typicalEngagement: "Embedded in pod for ongoing perf-budget management.",
      },
      {
        title: "Security Test Engineer",
        skills: ["Burp Suite", "OWASP ZAP", "API Security", "VAPT", "Compliance Audits"],
        typicalEngagement: "Embedded in pod; primary during audit cycles, ongoing during release cycles.",
      },
      {
        title: "Mobile QA Specialist (if mobile in scope)",
        skills: ["Appium", "XCUITest", "Espresso", "Real-Device Farms", "Mobile CI/CD"],
        typicalEngagement: "Embedded in pod for the lifetime of mobile coverage.",
      },
    ]}
    process={[
      { step: "01", title: "Scope + risk discovery", description: "Map your product surface, integration scope, compliance frameworks, release cadence, and risk register. Half-day to two-day workshop." },
      { step: "02", title: "Pod design + sizing", description: "Right-sized pod composition + role mix + budget envelope. Typical pods: 4-8 engineers + a QA lead." },
      { step: "03", title: "Pod onboarding", description: "2-week onboarding — pod gets context on product, processes, tooling. Builds initial test strategy + baseline regression suite." },
      { step: "04", title: "Steady-state operation", description: "Pod runs continuously — test design, execution, automation maintenance, performance + security cycles, audit prep. Monthly steering with you." },
      { step: "05", title: "Continuous improvement", description: "Quarterly review of KPIs (coverage, defect-leakage, automation ROI, audit findings). Pod composition + scope tuned based on results." },
    ]}
    whyTestriq={[
      {
        title: "Outcome ownership",
        description: "Most outsourced QA is body-shop staffing under your management. A dedicated pod owns the QA outcome — coverage targets, evidence packs, release-gating decisions. You hold us accountable, not individual engineers.",
      },
      {
        title: "Multi-discipline depth",
        description: "Manual + automation + performance + security + accessibility in one pod, all governed by one QA Lead, all reporting against one risk register. Single accountability layer.",
      },
      {
        title: "Audit-cycle muscle memory",
        description: "Dedicated pods at Testriq have run SOC 2 / IEC 62443 / FDA Part 11 audit cycles. The evidence-pack discipline + auditor-interaction muscle memory transfers to your engagement on day one.",
      },
      {
        title: "ISO 9001 + ISO/IEC 27001 ISMS",
        description: "Documented quality + information-security management. For fintech, healthcare, regulated manufacturing — vendor-risk reviews clear in days because the controls are documented + audited annually.",
      },
    ]}
    faqs={[
      {
        q: "How is a dedicated QA team different from staff augmentation?",
        a: "Staff augmentation: engineers work under YOUR management, you direct the work. Dedicated QA team: a Testriq pod with its own QA Lead owns the QA function — you direct outcomes, the pod manages internal execution. Augmentation suits teams that have a QA Lead + want capacity; dedicated suits teams that want to outsource the function.",
      },
      {
        q: "How big is a typical pod?",
        a: "Most pods: 4-8 engineers + 1 QA Lead. Smaller (2-4) works for single-product MVP-stage clients. Larger (10-20) works for multi-product enterprises. Sizing is risk-based: high-compliance + high-release-cadence + multi-product = bigger pod.",
      },
      {
        q: "What's the minimum engagement length?",
        a: "Project pods: 3-month minimum. Managed QA function: 12-month minimum (with quarterly review checkpoints). Audit-cycle pods: aligned to your audit window (typically 8-16 weeks). Shorter engagements are typically staff-augmentation, not dedicated.",
      },
      {
        q: "Who owns the test artifacts created?",
        a: "You do — all test cases, automation scripts, evidence packs, documentation are work-for-hire assigned to your IP. Testriq retains the right to reuse generic framework patterns (not your test cases) across other clients.",
      },
      {
        q: "Can the pod take on adjacent work — DevOps, SRE, security ops?",
        a: "Pod is QA-focused. We don't pretend to be DevOps or SRE. For adjacent work, we can recommend partners or scope a separate engagement. Keeping the QA pod focused is what makes it effective.",
      },
      {
        q: "What if a key engineer leaves?",
        a: "Pod continuity is Testriq's responsibility. We maintain bench redundancy + documented handover protocols. If an engineer leaves, replacement is onboarded with pod-internal knowledge transfer — typically transparent to you. Lead-role transitions get extra governance.",
      },
    ]}
    serviceTypeForSchema="Dedicated QA Team / Outsourced QA Function"
    schemaDescription="Dedicated QA team services by Testriq — a fully-managed QA pod that owns the QA function end-to-end: dedicated QA Lead, automation + manual + performance + security engineers. ISO 9001 + ISO/IEC 27001 controlled with audit-cycle muscle memory for SOC 2 / IEC 62443 / FDA Part 11."
  />
);

export default DedicatedQaTeamPage;
