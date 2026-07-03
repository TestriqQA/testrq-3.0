import React from "react";
import { Metadata } from "next";
import ToolLandingPage from "@/components/sections/ToolLandingPage";

export const revalidate = 3600;

const PAGE_URL = "https://www.testriq.com/appium-mobile-testing-services";

export const metadata: Metadata = {
  title: "Appium Mobile Testing Services — iOS + Android Automation",
  description:
    "Appium mobile test automation: real-device and emulator coverage, iOS XCUITest and Android UiAutomator2, hybrid and native apps, cloud device farms, and CI/CD.",
  keywords: [
    "Appium Testing Services",
    "Appium Mobile Automation",
    "iOS Automation Appium",
    "Android Automation Appium",
    "Appium WebDriver",
    "Mobile CI/CD",
    "Real Device Testing",
    "Appium vs Espresso",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Testriq",
    title: "Appium Mobile Testing Services — iOS + Android Automation | Testriq",
    description: "Appium real-device + emulator mobile QA — iOS + Android, cloud farms, CI/CD.",
    images: [{ url: "https://www.testriq.com/testriq-logo.png", width: 1200, height: 630, alt: "Testriq Appium Mobile Testing Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Appium Mobile Testing Services — iOS + Android Automation | Testriq",
    description: "Appium mobile QA — iOS + Android real device + emulator, cloud farms, CI.",
    images: ["https://www.testriq.com/testriq-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const AppiumTestingPage: React.FC = () => (
  <ToolLandingPage
    toolName="Appium"
    slug="appium-mobile-testing-services"
    breadcrumbName="Appium Mobile Testing Services"
    heroTitle="Appium Mobile Test Automation Services — iOS + Android"
    heroDescription="Cross-platform mobile automation with Appium — real-device + emulator/simulator coverage across iOS (XCUITest driver) and Android (UiAutomator2 driver), native + hybrid + mobile-web flows, cloud device farms for matrix coverage, and tight CI/CD integration. Built by testers who&apos;ve shipped Appium suites on apps with 50M+ installs."
    whatIs="Appium is the W3C WebDriver-compliant automation framework for mobile — driving native iOS apps via XCUITest, native Android apps via UiAutomator2 (and Espresso when needed), hybrid apps via WebView bridging, and mobile-web via Safari + Chrome drivers. One framework + one set of language bindings (Java, Python, JS, C#) across both platforms makes it the default cross-platform mobile QA tool."
    whenToUse={[
      "Cross-platform mobile app testing (iOS + Android in one suite)",
      "Native, hybrid, and mobile-web flow coverage",
      "Real-device farms (BrowserStack / Sauce Labs / pCloudy / AWS Device Farm)",
      "Teams migrating from XCUITest + Espresso silos to a unified framework",
      "Mobile + web Selenium hybrid suites sharing Page Object patterns",
    ]}
    services={[
      {
        title: "Appium Framework Setup",
        description: "Multi-platform framework — desired-capabilities config, Page Object for iOS + Android, screenshot + log + device-recording on failure harness, retry-on-flake.",
      },
      {
        title: "Real-Device + Emulator Coverage",
        description: "BrowserStack / Sauce Labs / pCloudy / AWS Device Farm integration, local device lab setup, capability matrix tuning across OS versions + device classes.",
      },
      {
        title: "iOS XCUITest Driver Setup",
        description: "Xcode + Apple Developer + provisioning-profile configuration, iOS WebDriverAgent build pipeline, real-device test signing, Safari mobile-web integration.",
      },
      {
        title: "Android UiAutomator2 + Espresso",
        description: "UiAutomator2 driver setup for black-box tests; Espresso driver for instrumented in-process tests where deep state introspection is needed.",
      },
      {
        title: "Mobile CI / CD Pipeline",
        description: "GitHub Actions / GitLab CI / Bitrise / App Center / CircleCI wiring with cloud-device-farm sharding, parallel matrix runs, JUnit + Allure reporting.",
      },
      {
        title: "Performance + Battery + Network Profiling",
        description: "App performance metrics (cold-start, FPS, memory), battery-drain profiling, network-condition throttling — measured during the same Appium runs.",
      },
    ]}
    integrations={[
      { category: "Drivers", tools: ["XCUITest (iOS)", "UiAutomator2 (Android)", "Espresso", "Safari", "Chrome", "Flutter driver"] },
      { category: "Language bindings", tools: ["Java", "Python", "JavaScript / WD.js", "C#", "Ruby"] },
      { category: "Device cloud", tools: ["BrowserStack App", "Sauce Labs Real Device", "pCloudy", "AWS Device Farm", "Kobiton", "HeadSpin"] },
      { category: "CI / CD", tools: ["GitHub Actions", "GitLab CI", "Bitrise", "App Center", "CircleCI", "Jenkins"] },
      { category: "Reporting", tools: ["Allure", "Extent Reports", "ReportPortal", "TestRail", "Xray"] },
      { category: "BDD", tools: ["Cucumber", "SpecFlow", "behave", "Karate"] },
    ]}
    whyTestriq={[
      {
        title: "iOS + Android, not just one side",
        description: "Many partners are strong on Android but weak on iOS (the harder, more provisioning-heavy platform). We run both — including Xcode provisioning, WebDriverAgent rebuilds, and the iOS-specific flake patterns nobody else seems to know about.",
      },
      {
        title: "Cloud-farm cost optimisation",
        description: "Device-farm minutes get expensive fast. Our sharding patterns + smart device-selection cuts cloud-farm spend 30-50% vs naive parallel-everything strategies.",
      },
      {
        title: "Real-device + emulator hybrid",
        description: "Some tests should run on emulators (fast, cheap, parallelisable); some need real devices (sensors, battery, biometrics, NFC, ARKit). We design the test pyramid accordingly — not force-fit everything to real devices.",
      },
      {
        title: "ISO 9001 + ISO 27001 controls",
        description: "Mobile app builds, test data, device-farm credentials, and screenshots handled per our documented ISMS. Especially relevant for fintech + healthcare apps.",
      },
    ]}
    faqs={[
      {
        q: "Appium vs Espresso vs XCUITest — when to use each?",
        a: "Appium for cross-platform suites sharing one framework. Espresso for Android-only when you need deep in-process state introspection. XCUITest for iOS-only when you need tight Apple-platform integration. Most teams run Appium for the bulk of E2E + a smaller Espresso / XCUITest set for unit + instrumented integration tests.",
      },
      {
        q: "Real devices or emulators — which should we invest in?",
        a: "Both. Emulators / simulators for the bulk of regression (cheap, fast, parallelisable). Real devices for sensor-dependent flows (camera, GPS, biometrics, NFC), battery profiling, and final-mile smoke. The right ratio is typically 80/20 emulator-to-real-device, but it varies by app type.",
      },
      {
        q: "Which cloud device farm is best?",
        a: "BrowserStack App + Sauce Labs Real Device are the leaders for breadth. pCloudy is competitive for India-market-focused apps. AWS Device Farm is cost-effective if you're already on AWS. We help pick based on your device-matrix needs, security requirements (some farms have stronger isolation than others), and budget.",
      },
      {
        q: "What about Flutter + React Native apps?",
        a: "Appium drives Flutter apps via the Flutter driver, and React Native apps via the standard UiAutomator2 / XCUITest drivers (React Native renders native components). For RN, suite patterns are essentially native-Android + native-iOS. For Flutter, we usually pair Appium with Flutter Integration Test for deeper widget-tree assertions.",
      },
      {
        q: "How do you handle flaky Appium tests?",
        a: "Mobile flake has different root causes than web: device-state contamination, animation-not-settled timing, network-condition variability, OS-update behavior changes. We address via per-test device-reset, explicit animation-finished waits, network-condition pinning, and OS-version pinning in CI configuration.",
      },
      {
        q: "Can Appium test mobile-web (browser) flows alongside native?",
        a: "Yes — Appium drives mobile Safari + mobile Chrome via the standard W3C WebDriver protocol. Same Page Object patterns apply. For mobile-web-heavy apps, we sometimes pair Appium with Playwright (mobile emulation) for faster iteration + Appium for real-device validation.",
      },
    ]}
    serviceTypeForSchema="Appium Mobile Test Automation"
    schemaDescription="Appium mobile test automation services — iOS XCUITest + Android UiAutomator2 driver setup, real-device + emulator coverage, cloud device farms, CI/CD integration, native + hybrid + mobile-web flows. ISTQB-certified + ISO 9001 + ISO/IEC 27001-controlled."
  />
);

export default AppiumTestingPage;
