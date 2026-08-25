import React from "react";
import { Metadata } from "next";
import HireServicePage from "@/components/sections/HireServicePage";

export const revalidate = 3600;
const PAGE_URL = "https://www.testriq.com/qa-engineer-on-demand";

export const metadata: Metadata = {
  title: "QA Engineer On-Demand — Flexible Capacity Without the Headcount",
  description:
    "QA engineer on-demand by Testriq — flex-up + flex-down QA capacity against a pre-qualified bench. Pay for hours used, not headcount carried. ISO 9001 + ISO/IEC 27001 controlled.",
  keywords: [
    "QA Engineer On-Demand",
    "On-Demand QA",
    "Flexible QA Capacity",
    "QA Bench",
    "Hourly QA Engineer",
    "Burst QA Capacity",
    "QA as a Service",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "QA Engineer On-Demand — Flexible Capacity Without the Headcount | Testriq",
    description: "Flex QA capacity — pay for hours used, not headcount carried.",
    images: [{ url: "https://www.testriq.com/OG/qa-engineer-on-demand-og.jpg", width: 1200, height: 630, alt: "Testriq QA Engineer On-Demand" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "QA Engineer On-Demand — Flexible Capacity Without the Headcount | Testriq",
    description: "Flex QA capacity — pay for hours used, not headcount carried.",
    images: ["https://www.testriq.com/OG/qa-engineer-on-demand-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const QaEngineerOnDemandPage: React.FC = () => (
  <HireServicePage
    offeringName="QA Engineer On-Demand"
    slug="qa-engineer-on-demand"
    breadcrumbName="QA Engineer On-Demand"
    heroTitle="QA Engineer On-Demand — Flexible Capacity, No Headcount Commitment"
    heroDescription="Pre-purchase QA hours against the Testriq bench, then burn them flexibly across multiple specialisations as work demands — manual, automation, mobile, performance, security. Ideal for orgs with bursty release cycles, post-launch maintenance, or QA capacity that varies week-to-week. ISO 9001 + ISO/IEC 27001 controlled."
    whatYouGet={[
      "Pre-qualified bench — engineers available within 24-48 hours",
      "Hours bank — buy in 80 / 160 / 320 hour increments",
      "Burn across specialisations (manual + auto + perf + security)",
      "No engineer-headcount commitment — flex up + down weekly",
      "ISO 27001 ISMS controls + NDAs cover all bench engineers",
    ]}
    engagementModels={[
      {
        title: "Hours Bank — Small",
        description: "80 hours/month at fixed monthly fee. Burn across any bench engineer, any specialisation. Hours roll over up to 1 month if unused.",
        bestFor: "Small startups + early-stage products with low-but-non-zero QA needs, post-launch maintenance for shipped products.",
      },
      {
        title: "Hours Bank — Medium",
        description: "160 hours/month. Suited for orgs running 1-2 engineers' worth of QA need but with variable specialisation demand.",
        bestFor: "Mid-stage SaaS with monthly release cycles, multiple side-projects each needing light QA.",
      },
      {
        title: "Hours Bank — Large",
        description: "320 hours/month. Equivalent to ~2 FTE worth of effort but distributed across specialisations as the month's work demands.",
        bestFor: "Enterprise teams with bursty release cycles, multi-product orgs that don't want to allocate fixed engineers to each product.",
      },
      {
        title: "Surge Capacity",
        description: "Reserved bench capacity for pre-release surges + incident response. Pay a small monthly retainer + a higher hourly rate when activated. SLAs for response time guaranteed.",
        bestFor: "High-stakes release windows (Black Friday, regulated-product launches), incident-response readiness, audit-prep crunch periods.",
      },
    ]}
    roles={[
      {
        title: "On-Call Manual QA",
        skills: ["ISTQB", "Exploratory", "Regression", "Bug Triage", "JIRA / TestRail"],
        typicalEngagement: "Hours burn ad-hoc — typical 20-60 hours per sprint.",
      },
      {
        title: "On-Call Automation Engineer",
        skills: ["Selenium", "Cypress", "Playwright", "TestNG / pytest", "CI/CD"],
        typicalEngagement: "Hours burn for new test development or suite stabilisation — typical 40-100 hours per sprint.",
      },
      {
        title: "On-Call Mobile QA",
        skills: ["Appium", "XCUITest", "Espresso", "Real-Device Farms"],
        typicalEngagement: "Hours burn for mobile-specific regression cycles — typical 20-80 hours per release.",
      },
      {
        title: "On-Call Performance Engineer",
        skills: ["JMeter", "k6", "Gatling", "Load Modeling"],
        typicalEngagement: "Project-shaped — typical 40-160 hours for a load-testing engagement.",
      },
      {
        title: "On-Call Security Engineer",
        skills: ["Burp Suite", "OWASP ZAP", "API Security", "VAPT"],
        typicalEngagement: "Project-shaped — typical 40-120 hours for a security testing engagement.",
      },
      {
        title: "On-Call Audit / Compliance Specialist",
        skills: ["SOC 2", "IEC 62443", "ISO 27001", "FDA 21 CFR Part 11", "Evidence Packs"],
        typicalEngagement: "Project-shaped — typical 80-240 hours per audit cycle.",
      },
    ]}
    process={[
      { step: "01", title: "Hours bank setup", description: "Choose monthly hours bank (80/160/320). Sign engagement contract + NDA. Onboards your team to the request channel." },
      { step: "02", title: "Engineer request", description: "Open a request in the channel — specify task, required skills, hours estimate, urgency. Acknowledgment in 4 business hours." },
      { step: "03", title: "Engineer assignment", description: "Bench engineer matched + assigned within 24-48 hours typically. You get the engineer's profile + start time confirmed." },
      { step: "04", title: "Engagement execution", description: "Engineer executes the work — your standup, your tools, your reviewers. Hours burned reported daily." },
      { step: "05", title: "Monthly true-up", description: "Hours-burned report at end of month. Roll-over if under bank size. Top-up purchase if over. Quarterly review of patterns + bank-size right-fit." },
    ]}
    whyTestriq={[
      {
        title: "Bench breadth, not bench drag",
        description: "Hours bank gives you access to 6+ specialisations off one contract. Direct-hire alternative would cost 6 FTEs to cover the same matrix — most orgs don't need 6 FTEs but DO need access to all 6 specialisations occasionally.",
      },
      {
        title: "Fast turnaround",
        description: "Engineer-on-the-keyboard within 24-48 hours of a request. Faster than recruiting any of the specialisations directly, faster than waiting for a contractor through traditional procurement.",
      },
      {
        title: "Compliance + ISMS by default",
        description: "Every bench engineer is under our ISO 27001 ISMS — NDAs, data residency, access provisioning, off-boarding all documented. No engineer-by-engineer compliance overhead for you.",
      },
      {
        title: "Predictable budget, variable consumption",
        description: "Hours-bank pricing makes monthly QA cost predictable while letting actual consumption vary by need. Better budgeting than hourly contractors + better flex than fixed FTE.",
      },
    ]}
    faqs={[
      {
        q: "What if I burn through my hours bank mid-month?",
        a: "Two options: (1) top up with additional hours (priced per hour at the same bank rate). (2) Pause work until next month's bank refresh. We notify at 75% and 90% burn so there are no surprises.",
      },
      {
        q: "Can I get the same engineer every time?",
        a: "We prefer continuity where possible — repeated engagements with the same client default to the same engineer when bench availability allows. For continuity guarantees, dedicated team or staff augmentation models are better fits.",
      },
      {
        q: "What if I have NO usage in a month?",
        a: "Hours roll over for up to one month (so unused April hours can be used in May, but not in June). For seasonal businesses, we offer Surge Capacity instead — small retainer + higher hourly rate when activated, no monthly commitment.",
      },
      {
        q: "Are there minimum engagement sizes?",
        a: "Hours bank starts at 80 hours/month. Below that, project-based engagements (fixed scope, fixed bid) are usually a better fit — see /staff-augmentation for context.",
      },
      {
        q: "How do you handle urgent / after-hours requests?",
        a: "Standard hours-bank: business-hours response. Surge Capacity model: 4-hour response SLA. For 24×7 incident-response, see Dedicated QA Team with follow-the-sun rotation.",
      },
      {
        q: "What's the difference vs. just hiring contractors?",
        a: "Contractors: you find them, vet them, contract them, manage them, off-board them — for every engagement. Hours bank: Testriq does all of that, you just request work. Trade-off: hours bank costs more per hour but eliminates the contractor-management overhead.",
      },
    ]}
    serviceTypeForSchema="QA Engineer On-Demand / Flexible Capacity"
    schemaDescription="QA engineer on-demand services by Testriq — pre-purchase hours bank, burn across manual + automation + mobile + performance + security specialisations as work demands. ISO 9001 + ISO/IEC 27001 controlled. Predictable budget + variable consumption + 24-48 hour response."
  />
);

export default QaEngineerOnDemandPage;
