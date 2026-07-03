import React from "react";
import { Metadata } from "next";
import ToolLandingPage from "@/components/sections/ToolLandingPage";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/playwright-testing-services";

export const metadata: Metadata = {
  title: "Playwright Testing Services — Cross-Browser E2E Automation",
  description:
    "Playwright end-to-end testing services: multi-browser (Chromium, Firefox, WebKit), trace viewer, network interception, parallel sharding, and CI/CD integration.",
  keywords: [
    "Playwright Testing Services",
    "Playwright Automation",
    "Playwright E2E",
    "Playwright vs Cypress",
    "Playwright Trace Viewer",
    "Playwright CI/CD",
    "Cross-Browser Testing Playwright",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Playwright Testing Services — Cross-Browser E2E Automation | Testriq",
    description: "Playwright E2E across Chromium / Firefox / WebKit — trace viewer, sharding, CI/CD.",
    images: [{ url: "https://www.testriq.com/testriq-logo.png", width: 1200, height: 630, alt: "Testriq Playwright Testing Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Playwright Testing Services — Cross-Browser E2E Automation | Testriq",
    description: "Playwright E2E across Chromium / Firefox / WebKit — trace viewer + sharding + CI/CD.",
    images: ["https://www.testriq.com/testriq-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const PlaywrightTestingPage: React.FC = () => (
  <ToolLandingPage
    toolName="Playwright"
    slug="playwright-testing-services"
    breadcrumbName="Playwright Testing Services"
    heroTitle="Playwright Cross-Browser E2E Test Automation Services"
    heroDescription="Production Playwright suites across Chromium, Firefox, and WebKit (Safari engine) with the trace viewer your team will actually use for failure triage. First-party network interception, auto-waits that eliminate the Thread.sleep tax, sharded parallel execution, and tight CI/CD integration. Built by testers who&apos;ve led migrations from Selenium and Cypress to Playwright at scale."
    whatIs="Playwright is Microsoft's modern browser-automation library, designed to fix Selenium's flake problems and Cypress's single-browser constraint. It drives Chromium, Firefox, and WebKit from one API, supports async/await idioms in TS / JS / Python / .NET / Java, ships first-class network interception, and includes a trace viewer that makes failure debugging dramatically faster than Selenium's screenshot-and-pray model. Auto-waits + retry-on-failure are built in — most flake patterns from older tools simply don't appear."
    whenToUse={[
      "Multi-browser including real Safari (WebKit) at scale",
      "TypeScript / JavaScript dev-led teams wanting first-party Microsoft tooling",
      "Network interception, mocking, and offline-deterministic E2E",
      "Teams hit by Cypress single-browser constraint or Selenium flake",
      "Sharded parallel execution + trace viewer for fast failure triage",
    ]}
    services={[
      {
        title: "Playwright Framework Setup",
        description: "TypeScript-first framework — Page Object Model, custom fixtures, parallel-safe test data, trace + video + screenshot on failure, retry budget tuning.",
      },
      {
        title: "Multi-Browser Configuration",
        description: "Chromium + Firefox + WebKit + Microsoft Edge configurations, viewport + device emulation matrix, geolocation + locale + timezone profiles for global app testing.",
      },
      {
        title: "Network Interception & API Mocking",
        description: "First-party route.fulfill() / route.continue() patterns for deterministic E2E, plus contract verification against real APIs via Pact compatibility.",
      },
      {
        title: "Parallel Sharding & CI Integration",
        description: "Sharded execution across CI workers, smart test distribution, JUnit + HTML + Allure reporters, GitHub Actions / GitLab CI / Azure DevOps wiring.",
      },
      {
        title: "Migration from Selenium / Cypress",
        description: "Pattern translation, framework rewrite, automated case-by-case migration tracker — typical effort 6-10 weeks for a 1,000-case suite.",
      },
      {
        title: "Visual & Accessibility Testing",
        description: "Built-in screenshot comparison + Percy / Applitools / Chromatic for visual regression; axe-core integration for inline WCAG 2.1 AA scanning during functional runs.",
      },
    ]}
    integrations={[
      { category: "Language bindings", tools: ["TypeScript", "JavaScript", "Python", ".NET / C#", "Java"] },
      { category: "Test runners", tools: ["Playwright Test (built-in)", "Jest", "Vitest", "Mocha", "pytest", "NUnit"] },
      { category: "Visual regression", tools: ["Percy", "Applitools", "Chromatic", "Built-in screenshots"] },
      { category: "BDD / DSL", tools: ["Cucumber-Playwright", "playwright-bdd"] },
      { category: "CI / CD", tools: ["GitHub Actions", "GitLab CI", "Azure DevOps", "Jenkins", "CircleCI"] },
      { category: "Reporting", tools: ["Playwright HTML reporter", "Allure", "ReportPortal", "Xray", "Currents"] },
    ]}
    whyTestriq={[
      {
        title: "Migration playbook from Selenium + Cypress",
        description: "We've migrated suites both directions — and we have a documented playbook that estimates effort, preserves coverage, and tracks each case through the rewrite. No big-bang rewrites that strand the team mid-flight.",
      },
      {
        title: "Trace viewer discipline",
        description: "Most teams enable the trace viewer + never use it. We build the team habit — every CI failure links to its trace, every triage starts with the trace. Failure debugging time drops 60-80% vs Selenium's screenshot-only model.",
      },
      {
        title: "Auto-wait + retry-budget tuning",
        description: "Playwright's auto-waits are powerful but tunable — we set retry budgets that catch genuinely transient failures while flagging design-time flake so it gets fixed instead of papered over.",
      },
      {
        title: "ISO 9001 + ISO 27001 controls",
        description: "Customer data, traces, and CI artifacts handled per our documented ISMS. For regulated-industry clients, evidence packs are traceable + audit-ready.",
      },
    ]}
    faqs={[
      {
        q: "Playwright vs Cypress — which one for our team?",
        a: "Playwright wins for multi-browser including real Safari, for teams that want async/await idioms, and for first-party network interception. Cypress wins for the in-browser DX, component testing in the same tool as E2E, and for teams that strongly prefer the time-travel debugger over the trace viewer. Both are excellent — choice is team-stack + cross-browser-scale dependent.",
      },
      {
        q: "Playwright vs Selenium — when to migrate?",
        a: "Migrate when flake is killing CI reliability + the team is JS/TS-first. Don't migrate if your suite is Java + TestNG + 5,000 cases that work fine — the migration cost won't recoup. Playwright shines for new projects + teams already in the JS / TS / Python ecosystem.",
      },
      {
        q: "Can Playwright test mobile apps?",
        a: "No — Playwright is for web (including mobile-web via device emulation). For native mobile, see /appium-mobile-testing-services. For hybrid + web-view-heavy apps, Playwright can cover much of the test surface; native-only features need Appium.",
      },
      {
        q: "How does Playwright's network interception compare to Cypress's?",
        a: "Both are first-class. Cypress uses cy.intercept(); Playwright uses page.route(). The capabilities overlap — Playwright's edge is per-context routing (you can stub for one test context while leaving another live), useful for multi-user scenarios. Cypress's edge is the in-browser interactive debugging of intercepts.",
      },
      {
        q: "Does Playwright support BDD / Gherkin?",
        a: "Not natively, but via libraries — playwright-bdd and Cucumber-Playwright integrate Gherkin features with Playwright's runner. We use these when the client uses Gherkin for stakeholder communication; otherwise we prefer Playwright's native test runner for terseness.",
      },
      {
        q: "How fast is a typical Playwright suite vs equivalent Selenium?",
        a: "On wall-clock with same parallel-worker count, Playwright is typically 2-4× faster than equivalent Selenium — auto-waits eliminate the explicit-wait overhead, and Playwright's browser-context model is cheaper than new Selenium sessions. Real numbers depend on suite shape; we benchmark per-engagement.",
      },
    ]}
    serviceTypeForSchema="Playwright Cross-Browser E2E Test Automation"
    schemaDescription="Playwright cross-browser E2E test automation services — framework setup, multi-browser config, network interception, parallel sharding, migration from Selenium / Cypress, visual + accessibility testing. ISTQB-certified + ISO 9001 + ISO/IEC 27001-controlled."
  />
);

export default PlaywrightTestingPage;
