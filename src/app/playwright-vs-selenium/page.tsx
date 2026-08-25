import React from "react";
import { Metadata } from "next";
import ComparisonPage from "@/components/sections/ComparisonPage";

export const revalidate = 3600;
const PAGE_URL = "https://www.testriq.com/playwright-vs-selenium";

export const metadata: Metadata = {
  title: "Playwright vs Selenium — When to Migrate (and When Not To)",
  description:
    "Playwright vs Selenium — head-to-head across language bindings, browser support, flake patterns, parallelism, ecosystem, and migration cost. ISTQB-led recommendation.",
  keywords: ["Playwright vs Selenium", "Selenium vs Playwright", "Test Automation Migration", "Microsoft Playwright", "WebDriver"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Playwright vs Selenium — When to Migrate (and When Not To) | Testriq",
    description: "Playwright vs Selenium — bindings, browsers, flake, parallelism, ecosystem, migration cost.",
    images: [{ url: "https://www.testriq.com/OG/playwright-vs-selenium-og.jpg", width: 1200, height: 630, alt: "Playwright vs Selenium" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Playwright vs Selenium — When to Migrate (and When Not To) | Testriq",
    description: "Playwright vs Selenium — bindings, browsers, flake, parallelism, migration cost.",
    images: ["https://www.testriq.com/OG/playwright-vs-selenium-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const PlaywrightVsSeleniumPage: React.FC = () => (
  <ComparisonPage
    toolA="Playwright"
    toolB="Selenium"
    slug="playwright-vs-selenium"
    breadcrumbName="Playwright vs Selenium"
    heroTitle="Playwright vs Selenium — When to Migrate (and When Not To)"
    tldr="Playwright is Microsoft's modern browser-automation library — async/await, multi-browser including WebKit, first-party network interception, trace viewer for fast triage, no Grid required. Selenium is the W3C-WebDriver standard with broader language bindings (Java / Python / C# / Ruby / JS), deeper Grid + cloud-grid ecosystem, and tighter Appium integration. Migration to Playwright recoups when flake + cross-browser ergonomics outweigh the suite-rewrite cost; staying on Selenium recoups when multi-language requirements or existing scale make rewriting expensive."
    pickAWhen={[
      "Greenfield project on JavaScript / TypeScript stack",
      "Flake on Selenium is killing CI reliability",
      "Multi-browser including WebKit / Safari engine is required",
      "Network interception + offline-deterministic E2E is critical",
      "Single-language team (TS / JS / Python / .NET / Java per Playwright bindings)",
    ]}
    pickBWhen={[
      "Multi-language team (Java + Python + C# + Ruby)",
      "Existing 5,000+ case Selenium suite working reasonably well",
      "Tight Appium-driven mobile + web suite sharing",
      "Strict W3C WebDriver compliance required (industry-standard contract)",
      "Cloud-grid (BrowserStack / Sauce / LambdaTest) investments already deep",
    ]}
    comparisonTable={[
      { dimension: "Maintainer", a: "Microsoft", b: "Selenium project (W3C standard)" },
      { dimension: "Language bindings", a: "TS, JS, Python, .NET, Java", b: "Java, Python, C#, JS, Ruby, Kotlin" },
      { dimension: "Browser support", a: "Chromium, Firefox, WebKit (Safari engine), Edge", b: "Chrome, Firefox, Safari (real, on macOS), Edge, IE legacy" },
      { dimension: "Auto-waits", a: "Built-in for assertions + interactions", b: "Manual (explicit / fluent waits)" },
      { dimension: "Network interception", a: "First-class — page.route() at context level", b: "Selenium 4 BiDi (newer) or external proxy" },
      { dimension: "Grid / parallel", a: "Built-in sharding, no Grid needed", b: "Selenium Grid (self-hosted) or cloud grids" },
      { dimension: "Mobile coverage", a: "Web only (mobile-web via emulation)", b: "Appium pairs natively with Selenium for native mobile" },
      { dimension: "Flake (default)", a: "Lower — auto-waits eliminate most flake sources", b: "Higher historically — depends on framework discipline" },
      { dimension: "Failure debug", a: "Trace viewer (post-run, fully replayable)", b: "Screenshots + logs + framework-dependent" },
      { dimension: "Speed", a: "2-4× faster than equivalent Selenium typically", b: "Baseline" },
    ]}
    dimensions={[
      {
        title: "Architecture + speed",
        a: "Playwright drives browsers via the Chrome DevTools Protocol (CDP) for Chromium + native protocols for Firefox and WebKit. Single library, no Grid layer. Single-test runs are 2-4× faster than equivalent Selenium because the WebDriver protocol hop is eliminated.",
        b: "Selenium drives browsers via the W3C WebDriver standard — every action serialises through the driver process. Slower per-action but proven at enormous scale, with mature Grid orchestration for parallelism. Selenium 4 BiDi narrows the gap but doesn't close it.",
      },
      {
        title: "Language bindings",
        a: "TypeScript, JavaScript, Python, .NET (C#), Java — covers the common ecosystems. Java + Python + .NET bindings are maintained but less feature-rich than the TS/JS ones; check the docs for each language before committing.",
        b: "Java, Python, C#, JavaScript, Ruby, Kotlin — the broadest language reach in browser automation. For multi-language QA-led teams, Selenium is often the only viable option.",
      },
      {
        title: "Flake handling",
        a: "Auto-waits + retry-on-failure are built in. Most patterns that cause Selenium flake (timing assumptions, stale element references) simply don't happen. The trade-off: when flake does happen, root cause is usually subtler.",
        b: "Flake is a known Selenium pain point. With Page Object discipline + proper explicit/fluent waits + framework retry policies, you can keep flake under 1%. Without discipline, suites grow flake-rate linearly with case count.",
      },
      {
        title: "Mobile + web suite sharing",
        a: "Playwright doesn't drive native mobile. For mobile + web teams on Playwright, you maintain a separate Appium (or equivalent) suite — no shared Page Object benefit.",
        b: "Selenium + Appium share the W3C WebDriver protocol. Same Page Object patterns, same language bindings, same reporting harness across web + native mobile. For teams running both, this is a meaningful productivity advantage.",
      },
      {
        title: "Migration cost reality",
        a: "Migrating to Playwright typically costs 6-10 weeks for a 1,000-case suite, case-by-case tracked. Realistic recovery: 6-12 months of reduced flake + faster CI to break even on the migration investment.",
        b: "Staying on Selenium costs zero migration but pays a continuing flake + CI-time tax. For mature suites already disciplined, this tax is bearable. For suites with structural flake problems, the tax compounds.",
      },
    ]}
    migration="Selenium → Playwright migrations make sense when (a) the team is single-language and on JS/TS/Python/.NET, (b) flake is consuming meaningful CI time, (c) cross-browser including WebKit is a constraint. Plan 6-10 weeks for a 1,000-case suite, with the old suite running in parallel until coverage parity is verified. Playwright → Selenium is unusual but happens when multi-language requirements or Appium-shared mobile suites become deal-breakers. Either direction, treat it as a framework rewrite, not a tool swap — the abstractions are different."
    faqs={[
      {
        q: "Is Playwright a serious Selenium replacement?",
        a: "For greenfield projects on JS/TS/Python/.NET stacks: yes, full replacement. For mature multi-language Selenium suites: partial — multi-language reach + Appium pairing are real Selenium advantages Playwright doesn't match.",
      },
      {
        q: "Does Selenium 4 BiDi close the Playwright gap?",
        a: "Partially. BiDi adds bidirectional protocol features (network interception, console events, log streaming) Selenium 3 didn't have. The headline gap — auto-waits, trace viewer DX, speed — remains. Selenium 4 is meaningfully better than Selenium 3, but Playwright is still more modern.",
      },
      {
        q: "How much faster is Playwright really?",
        a: "On wall-clock for equivalent suites with equivalent parallelism: typically 2-4× faster. The speedup comes from eliminating the WebDriver protocol hop + browser-context model that parallelises within workers. Real numbers vary; we benchmark per-engagement.",
      },
      {
        q: "Can we keep Selenium for mobile + use Playwright for web?",
        a: "Yes — common pattern. Selenium + Appium for mobile + web parity where mobile is dominant; Playwright for web-only when web is the dominant surface. Two frameworks to maintain but each in its strongest lane.",
      },
      {
        q: "What about Cypress?",
        a: "Cypress is the third leg of this comparison — strong on dev-led JS/TS DX + component testing, weaker on cross-browser + multi-language. See /playwright-vs-cypress and /selenium-vs-cypress for those head-to-heads.",
      },
    ]}
    related={[
      { href: "/playwright-testing-services", title: "Playwright Testing Services", description: "Production Playwright + trace viewer + sharding." },
      { href: "/selenium-testing-services", title: "Selenium Testing Services", description: "Selenium framework + Grid + cloud-grid + Appium." },
      { href: "/playwright-vs-cypress", title: "Playwright vs Cypress", description: "Microsoft modern vs in-browser DX." },
      { href: "/selenium-vs-cypress", title: "Selenium vs Cypress", description: "Multi-language enterprise vs modern JS/TS." },
    ]}
  />
);

export default PlaywrightVsSeleniumPage;
