import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  webAppTestingServiceSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import WebappTestingHeroSection from "@/components/sections/WebappTestingHeroSection";
import WebappChallenges from "@/components/sections/WebappChallenges";
import WebappCompliance from "@/components/sections/WebappCompliance";
import WebappTechStack from "@/components/sections/WebappTechStack";
import CardSlider from "@/components/sections/WebAppCardSlider";
import WebappWhyChooseTestriq from "@/components/sections/WebappWhyChooseTestriq";
import WebappFAQs from "@/components/sections/WebappFAQs";
import WebappAnyQuestions from "@/components/sections/WebappAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/web-application-testing-services",
    title: "Web Application Testing | Cross-Browser & Security | Testriq",
    description:
      "Validate web applications with Testriq's testing. Cross-browser compatibility, OWASP Top 10 security, and Playwright/Cypress automation for global QA teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Web-Application-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "Web Application Testing Services by Testriq",
      type: "image/webp",
    },
    keywords: [
      "web application testing",
      "web qa services",
      "cross-browser testing",
      "web app security testing",
      "next.js testing",
      "iso 29119 web testing",
      "saas testing",
      "e-commerce testing",
      "playwright automation",
      "cypress automation",
      "owasp top 10 testing",
      "performance testing services",
    ],
  });
}

export default function WebAppTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped "Company" keyword-stuffing tail and
  // surfaces "Cross-Browser & Security QA" as concrete differentiators
  // (was "Web Application Testing Services | QA Company | Testriq").
  // Description rewritten — was ~213 chars, now 157 chars, action-verb
  // start; surfaces OWASP + Playwright/Cypress as concrete tech.
  // twitter:image unified with og:image (was a separate
  // Web-Application_Testing_Twitter.webp with non-standard underscore
  // casing). ogImage.type "image/webp" added. Keywords lowercased.
  // 8 dynamic() imports converted to direct ES imports. Breadcrumb
  // already migrated in PR-3 — unchanged.
  // F-44.1: plain-text mirror of WebappFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "Which web application testing frameworks offer the highest ROI for startups in the 2026 ecosystem?",
      answer: "We recommend a mix of Cypress or Playwright for fast UI automation and OWASP ZAP for baseline security. These are the best web application testing tools for startups in 2026.",
    },
    {
      question: "How do I automate web application testing for Next.js?",
      answer: "To automate web application testing for Next.js, we recommend using Playwright because of its excellent support for Server-Side Rendering (SSR) and React components.",
    },
    {
      question: "What is the difference between Front-end and Back-end testing?",
      answer: "Front-end testing focuses on the UI and browser compatibility. Back-end testing involves API testing for web apps, database validation, and server-side logic.",
    },
    {
      question: "Why does SQL Injection remain a critical risk in 2026?",
      answer: "Our web application penetration testing services specialize in identifying these vulnerabilities in legacy systems and rapid, unreviewed code pushes, ensuring your data remains secure.",
    },
    {
      question: "How does cross-browser compatibility testing impact SEO?",
      answer: "If your app has layout issues on Safari or Firefox, your bounce rate increases, hurting rankings. A robust checklist for cross-browser compatibility testing is essential for SEO success.",
    },
  ];

  return (
    <div>
      <StructuredData data={webAppTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/web-application-testing-services",
          "Web Application Testing"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <WebappTestingHeroSection />
        <WebappChallenges />
        <WebappCompliance />
        <WebappTechStack />
        <CardSlider />
        <WebappWhyChooseTestriq />
        <WebappFAQs />
        <WebappAnyQuestions />
      </MainLayout>
    </div>
  );
}
