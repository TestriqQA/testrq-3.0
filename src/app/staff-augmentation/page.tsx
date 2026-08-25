import React from "react";
import { Metadata } from "next";
import HireServicePage from "@/components/sections/HireServicePage";

export const revalidate = 3600;
const PAGE_URL = "https://www.testriq.com/staff-augmentation";

export const metadata: Metadata = {
  title: "QA Staff Augmentation — Bench-Quality Engineers, On Your Standup",
  description:
    "QA staff augmentation by Testriq — extend your in-house QA team with ISTQB-certified engineers under your management. ISO 9001 + ISO/IEC 27001 controlled, replacement-guaranteed.",
  keywords: [
    "QA Staff Augmentation",
    "Staff Augmentation",
    "QA Team Extension",
    "ISTQB Certified Engineers",
    "QA Outsourcing",
    "Hire Tester",
    "Augment QA Team",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "QA Staff Augmentation — Bench-Quality Engineers, On Your Standup | Testriq",
    description: "Extend your in-house QA team with ISTQB-certified engineers — under your management.",
    images: [{ url: "https://www.testriq.com/OG/staff-augmentation-og.jpg", width: 1200, height: 630, alt: "Testriq QA Staff Augmentation" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "QA Staff Augmentation — Bench-Quality Engineers, On Your Standup | Testriq",
    description: "Extend your in-house QA team with ISTQB-certified engineers.",
    images: ["https://www.testriq.com/OG/staff-augmentation-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const StaffAugmentationPage: React.FC = () => (
  <HireServicePage
    offeringName="QA Staff Augmentation"
    slug="staff-augmentation"
    breadcrumbName="QA Staff Augmentation"
    heroTitle="QA Staff Augmentation — Bench-Quality Engineers Under Your Management"
    heroDescription="Extend your in-house QA team with ISTQB-certified Testriq engineers operating under your standup, your sprint planning, your Jira board, your management. We provide the bench + the governance; you provide direction. ISO 9001 + ISO/IEC 27001 ISMS controls make vendor-risk review trivially short."
    whatYouGet={[
      "Engineers attend your standup + sprint + retro",
      "Use your Jira / Linear, your repos, your CI",
      "Reported on by your QA lead — Testriq doesn't gate work",
      "Engagement governance layer (escalation + monthly review)",
      "Replace within 2 weeks if a fit fails",
    ]}
    engagementModels={[
      {
        title: "1-Person Extension",
        description: "Single engineer joining your existing QA team — manual, automation, mobile, performance, or security specialisation. Acts like a direct hire without the hiring cycle.",
        bestFor: "Adding capacity to a working QA team, covering a specialisation you don't have in-house, parental-leave / sabbatical coverage.",
      },
      {
        title: "2-4 Person Team Boost",
        description: "Pre-formed Testriq sub-team that integrates into your QA org. Includes a lead who handles internal coordination so your management overhead stays low.",
        bestFor: "Scaling QA from 3-4 to 6-8 engineers without 6 months of recruiting + onboarding. Pre-launch sprint capacity.",
      },
      {
        title: "Specialty Squad",
        description: "Targeted specialist mix — e.g., 1 performance engineer + 1 security engineer + 1 automation engineer — for cross-cutting initiatives the in-house team doesn't have depth in.",
        bestFor: "SOC 2 audit prep, IEC 62443 compliance push, performance-budget overhaul, automation framework rewrite.",
      },
      {
        title: "Time-Zone Coverage Layer",
        description: "Engineers in a complementary time zone to extend your team's coverage hours — e.g., IST engineers covering EST overnight + APAC daytime.",
        bestFor: "Critical incident-response coverage, 24x5 release windows, follow-the-sun QA models.",
      },
    ]}
    roles={[
      {
        title: "Manual QA Tester",
        skills: ["ISTQB", "Exploratory", "Regression", "Bug Triage", "JIRA / TestRail / Xray"],
        typicalEngagement: "3-12 months. Pair with automation engineers; rotate exploratory charters.",
      },
      {
        title: "SDET / Automation Engineer",
        skills: ["Selenium", "Cypress", "Playwright", "Java / Python / JS / TS", "CI/CD", "Framework Architecture"],
        typicalEngagement: "6-18 months. Suite-build then ongoing maintenance + new-feature coverage.",
      },
      {
        title: "Mobile QA Specialist",
        skills: ["Appium", "XCUITest", "Espresso", "Real-Device Farms", "Mobile CI/CD"],
        typicalEngagement: "6-12 months. iOS + Android parity coverage on real device matrices.",
      },
      {
        title: "Performance Engineer",
        skills: ["JMeter", "k6", "Gatling", "APM Correlation", "Capacity Planning"],
        typicalEngagement: "Project-based 4-12 weeks; or ongoing retainer for perf-budget management.",
      },
      {
        title: "QA Lead / Manager",
        skills: ["Test Strategy", "ISTQB Advanced", "Team Coaching", "Stakeholder Reporting", "Process Design"],
        typicalEngagement: "12+ months. Often replaces a vacant in-house QA Lead position.",
      },
      {
        title: "Compliance / Audit Specialist",
        skills: ["SOC 2", "IEC 62443", "ISO 27001", "FDA 21 CFR Part 11", "Evidence Pack Authoring"],
        typicalEngagement: "Audit-cycle project (8-16 weeks); or retainer if multiple audit cycles per year.",
      },
    ]}
    process={[
      { step: "01", title: "Capability mapping", description: "What capabilities does your in-house team have today + what gaps are you trying to fill? 30-minute call." },
      { step: "02", title: "Engineer shortlist", description: "Within 48 hours: 2-3 CVs of engineers from our bench matching your skill matrix + time-zone needs." },
      { step: "03", title: "Your interview, your call", description: "You interview the candidates directly. Your standards, your veto. We facilitate scheduling." },
      { step: "04", title: "Integration", description: "Selected engineer onboards in 3-5 days. Joins your standup, your tools, your processes. We don't insert layers." },
      { step: "05", title: "Light governance", description: "Monthly review with the Testriq engagement lead + escalation channel. Otherwise: stay out of your way." },
    ]}
    whyTestriq={[
      {
        title: "Augmentation, not body-shop",
        description: "Body shops drop a CV and bill. We bring an engagement lead who ensures the engineer is succeeding, handles escalation, and replaces fast when needed. Light governance, not heavy.",
      },
      {
        title: "Pre-skilled bench",
        description: "Every engineer is ISTQB-certified + has demonstrated stack experience before joining the bench. Saves you the 3-6 month upskilling investment a junior hire would need.",
      },
      {
        title: "Compliance-friendly",
        description: "ISO 27001 ISMS controls cover NDAs, data residency, access provisioning, off-boarding. Vendor-risk review at fintech / healthcare clients clears in days, not weeks.",
      },
      {
        title: "Replacement guarantee",
        description: "If the engineer doesn't fit in the first 2 weeks — wrong stack experience, communication style mismatch, time-zone friction — we replace at no charge. Reduces hiring risk to near-zero.",
      },
    ]}
    faqs={[
      {
        q: "How is staff augmentation different from full outsourcing?",
        a: "Augmentation: engineers work under YOUR management, your tools, your processes. Outsourcing: Testriq manages a deliverable end-to-end, often with our own tools + processes. Augmentation suits teams that want bench depth + control; outsourcing suits teams that want a contract + a deliverable.",
      },
      {
        q: "Can engineers work from our office?",
        a: "On-site work in Mumbai (Testriq HQ) is direct. On-site at your office globally requires visa + relocation planning — possible but slower. Most augmentation engagements are remote-first with quarterly in-person if needed.",
      },
      {
        q: "Who handles performance reviews + career growth?",
        a: "Testriq handles annual reviews + career growth + L&D for the engineer. You provide engagement-specific feedback that informs our reviews. The engineer's career path stays with Testriq even if they rotate across multiple of your projects.",
      },
      {
        q: "What if we hit a billing dispute or quality issue?",
        a: "Escalation goes to your dedicated engagement lead first. Unresolved within 5 business days, it escalates to Testriq's COO. Performance-related disputes can trigger replacement under the guarantee.",
      },
      {
        q: "Can we convert an engineer to a direct hire later?",
        a: "Yes. Most augmentation contracts include a buy-out option (placement fee) that lets you convert an engineer to direct hire after 6+ months. Pricing varies; standard in our contracts.",
      },
      {
        q: "What stack do your engineers typically know?",
        a: "Common stacks: JS/TS (React, Next.js, Vue, Node), Python (Django, FastAPI), Java (Spring), .NET, mobile (iOS + Android, Flutter, RN), test tools (Selenium, Cypress, Playwright, Appium, JMeter, Postman, Burp), CI/CD (GitHub Actions, GitLab CI, Jenkins, Azure DevOps). Niche stacks (Salesforce, SAP) available subject to bench availability.",
      },
    ]}
    serviceTypeForSchema="QA Staff Augmentation Services"
    schemaDescription="QA staff augmentation by Testriq — extend your in-house QA team with ISTQB-certified engineers operating under your management. Single engineer, team boost, specialty squad, or time-zone coverage models. ISO 9001 + ISO/IEC 27001 controlled with replacement guarantee."
  />
);

export default StaffAugmentationPage;
