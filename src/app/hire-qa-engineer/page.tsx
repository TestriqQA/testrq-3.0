import React from "react";
import { Metadata } from "next";
import HireServicePage from "@/components/sections/HireServicePage";

export const revalidate = 3600;
const PAGE_URL = "https://www.testriq.com/hire-qa-engineer";

export const metadata: Metadata = {
  title: "Hire QA Engineer — ISTQB-Certified Testers, Engaged in Days",
  description:
    "Hire ISTQB-certified QA engineers, automation engineers, performance + security engineers from Testriq — full-time, dedicated team, or on-demand. ISO 9001 + ISO/IEC 27001 controlled.",
  keywords: [
    "Hire QA Engineer",
    "QA Engineer for Hire",
    "ISTQB Certified Tester",
    "QA Outsourcing",
    "Test Engineer Recruitment",
    "Hire Automation Engineer",
    "QA Staff Augmentation",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Hire QA Engineer — ISTQB-Certified Testers, Engaged in Days | Testriq",
    description: "ISTQB-certified QA engineers — full-time, dedicated, or on-demand. ISO 9001 + 27001 controlled.",
    images: [{ url: "https://www.testriq.com/OG/hire-qa-engineer-og.jpg", width: 1200, height: 630, alt: "Hire QA Engineer from Testriq" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Hire QA Engineer — ISTQB-Certified Testers, Engaged in Days | Testriq",
    description: "ISTQB-certified QA engineers — full-time, dedicated, or on-demand.",
    images: ["https://www.testriq.com/OG/hire-qa-engineer-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const HireQaEngineerPage: React.FC = () => (
  <HireServicePage
    offeringName="Hire QA Engineer"
    slug="hire-qa-engineer"
    breadcrumbName="Hire QA Engineer"
    heroTitle="Hire QA Engineer — ISTQB-Certified Talent, Engaged in Days"
    heroDescription="Skip the 3-month hiring cycle. Testriq engineers are ISTQB-certified, vetted against a 6-area skill matrix, and onboard inside a week — full-time, dedicated team, or on-demand. ISO 9001 + ISO/IEC 27001 ISMS controls govern how their work + your data are handled."
    whatYouGet={[
      "ISTQB-certified QA engineer matched to your stack + scale",
      "Trial period — replace inside 2 weeks if not a fit",
      "Dedicated lead for engagement governance + monthly reviews",
      "ISO 9001 + ISO/IEC 27001 ISMS controls + NDAs from day one",
      "Time-zone overlap with US/UK/EU/APAC working hours",
    ]}
    engagementModels={[
      {
        title: "Full-Time Dedicated",
        description: "One or more engineers exclusive to your project — 40 hrs / week, your Slack, your standup, your sprint planning. Same engineer for 6+ months minimum.",
        bestFor: "Stable QA capacity needs, long-running projects, regulated industries needing continuity.",
      },
      {
        title: "Dedicated Team",
        description: "2-8 engineers working as a unified Testriq pod — own QA lead, own scrum master, own retros — embedded into your release process.",
        bestFor: "Owning end-to-end QA function, multi-product orgs, replacing a fragmented in-house QA team.",
      },
      {
        title: "On-Demand Bench",
        description: "Reserve hours per month against a pre-qualified bench. Burn them flexibly across multiple specialisations as work needs.",
        bestFor: "Variable load, multiple smaller projects, post-launch maintenance bursts.",
      },
      {
        title: "Project-Based Fixed-Bid",
        description: "Defined deliverables, fixed price, fixed timeline. We staff + manage + deliver. Cleanest model when scope is clear.",
        bestFor: "Audit-prep cycles, migration projects, framework rewrites, one-off load tests.",
      },
    ]}
    roles={[
      {
        title: "Manual QA Engineer",
        skills: ["ISTQB", "Test Planning", "Exploratory", "Regression", "Bug Triage", "JIRA / Xray"],
        typicalEngagement: "3-12 months. Often paired with automation engineers as part of a balanced team.",
      },
      {
        title: "Automation Engineer",
        skills: ["Selenium", "Cypress", "Playwright", "TestNG / pytest", "CI / CD", "Page Object Model"],
        typicalEngagement: "6-18 months. Suite-build phase first, then ongoing maintenance + new-feature coverage.",
      },
      {
        title: "Mobile QA Engineer",
        skills: ["Appium", "XCUITest", "Espresso", "BrowserStack / Sauce", "iOS + Android", "App Center"],
        typicalEngagement: "6-12 months. Cross-platform suites + real-device matrix coverage.",
      },
      {
        title: "Performance Engineer",
        skills: ["JMeter", "k6", "Gatling", "Load Modeling", "APM Correlation", "Capacity Planning"],
        typicalEngagement: "Project-based, 4-12 weeks per engagement. Often retainer for ongoing perf budget management.",
      },
      {
        title: "Security Test Engineer",
        skills: ["Burp Suite", "OWASP ZAP", "OWASP Top 10", "API Security", "IEC 62443 (OT)", "VAPT"],
        typicalEngagement: "Project-based for VAPT (3-6 weeks). Retainer for ongoing security regression.",
      },
      {
        title: "API + Integration QA",
        skills: ["Postman / Newman", "Pact", "REST / GraphQL", "OpenAPI", "Karate", "Contract Testing"],
        typicalEngagement: "6-12 months. Critical for SaaS + partner-integration-heavy products.",
      },
    ]}
    process={[
      { step: "01", title: "Discovery call", description: "30-minute call mapping your stack, scale, compliance scope, time-zone needs, and engagement-model preference." },
      { step: "02", title: "Skill-matched shortlist", description: "Within 48 hours: 2-3 CVs of engineers from our bench whose specialisation matches your stack." },
      { step: "03", title: "Technical interview", description: "You interview the candidate(s) directly — we don't gate. Your call, your standards, your veto." },
      { step: "04", title: "Onboarding + handover", description: "Selected engineer onboards in 3-5 business days — joins your Slack, accesses your repos under your security policies, attends your standup." },
      { step: "05", title: "Engagement governance", description: "Dedicated Testriq lead runs monthly review with you + escalation channel + replacement guarantee for the first 2 weeks." },
    ]}
    whyTestriq={[
      {
        title: "ISTQB-certified by default",
        description: "Every engineer on the Testriq bench holds the ISTQB Foundation level minimum; senior engineers hold Advanced. Saves you the 6-12 month upskilling investment new hires need.",
      },
      {
        title: "ISO 9001 + ISO/IEC 27001 ISMS",
        description: "Our information-security controls cover NDAs, data residency, access provisioning, off-boarding. For fintech / healthcare / regulated industries, this passes vendor-risk review faster.",
      },
      {
        title: "Replacement guarantee",
        description: "If the engineer isn't a fit in the first 2 weeks, we replace at no charge. Reduces hiring risk vs direct hires where a bad call costs 3-6 months of comp + ramp.",
      },
      {
        title: "Engagement lead, not just a CV drop",
        description: "Every engagement gets a senior Testriq QA lead who runs monthly reviews + handles escalations + ensures the engineer is succeeding. Not a body-shop hand-off.",
      },
    ]}
    faqs={[
      {
        q: "How fast can a QA engineer start?",
        a: "From discovery call to engineer-on-your-Slack: 5-10 business days typically. Shortlist CVs in 48 hours, technical interview within 3-5 days, onboarding in 3-5 days. Faster if you have an existing approved-vendor relationship with Testriq.",
      },
      {
        q: "What time zones do you cover?",
        a: "Testriq operates in IST (UTC+5:30) primarily, with engineers available for US Eastern overlap (mornings IST) and UK/EU overlap (afternoons IST). For 24×5 coverage, we deploy two-engineer rotation. APAC overlap is native.",
      },
      {
        q: "Pricing model?",
        a: "Three options: (1) monthly retainer per engineer (fixed fee, fixed hours, predictable). (2) Hours-burn against a pre-paid bank (flexible across roles). (3) Fixed-bid project (scope-defined). Rates vary by seniority + specialisation + region; quote is engagement-specific.",
      },
      {
        q: "Do engineers work exclusively on our project?",
        a: "Yes in Full-Time Dedicated + Dedicated Team models. No in On-Demand Bench (engineers may work across multiple clients, but with NDA boundaries). All four models support 'no compete' clauses if your contract requires.",
      },
      {
        q: "What if we need to scale up or down quickly?",
        a: "Dedicated models include 30-day notice for downsize; upsize within 1-2 weeks subject to bench availability. On-Demand models scale within days. Project-based models are scope-defined — change requests handled via amendment.",
      },
      {
        q: "How do you handle IP + confidentiality?",
        a: "NDA signed at engagement start (mutual). All IP created by Testriq engineers in your engagement is assigned to you (work-for-hire). Source-code access is governed by your security policies. ISO 27001 ISMS controls govern data handling on our side.",
      },
    ]}
    serviceTypeForSchema="QA Engineer Staffing + Outsourcing"
    schemaDescription="Hire ISTQB-certified QA engineers, automation engineers, performance engineers, and security test engineers from Testriq — full-time dedicated, dedicated team, on-demand bench, or fixed-bid project models. ISO 9001 + ISO/IEC 27001 controlled, replacement guarantee included."
  />
);

export default HireQaEngineerPage;
