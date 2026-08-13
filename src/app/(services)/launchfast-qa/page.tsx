import LaunchFastQAHeroSection from "@/components/sections/LaunchFastQAHeroSection";
import LaunchFastChallenges from "@/components/sections/LaunchFastChallenges";
import LaunchFastComprehensiveSlider from "@/components/sections/LaunchFastComprehensiveSlider";
import LaunchFastProvenTestingProcess from "@/components/sections/LaunchFastProvenTestingProcess";
import LaunchFastCompliance from "@/components/sections/LaunchFastCompliance";
import LaunchFastWhyChooseTestriq from "@/components/sections/LaunchFastWhyChooseTestriq";
import LaunchFastToolsFramework from "@/components/sections/LaunchFastToolsFramework";
import LaunchFastCaseStudies from "@/components/sections/LaunchFastCaseStudies";
import LaunchFastFAQs from "@/components/sections/LaunchFastFAQs";
import type { Metadata } from "next";
import StructuredData, {
  launchFastQASchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Launch-Fast QA Services for Companies",

  description:
    "Launch-Fast QA for startups and MVPs: agile QA, rapid testing sprints, and 24/7 support to accelerate your release cycle with investor-ready quality.",
  keywords: [
    "Launch-Fast QA",
    "rapid QA testing services",
    "startup MVP testing",
    "agile QA practices",
    "CI/CD integration for startups",
    "ISO 29119-6 compliance",
    "on-demand QA",
    "24/7 software testing support",
    "investor-ready QA reporting",
    "automated smoke suite",
    "startup quality assurance",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/launchfast-qa",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/launchfast-qa",
    siteName: "Testriq - LaunchFast QA Services",
    title: "Launch-Fast QA Services for Companies | Testriq",
    description:
      "Rapid QA testing designed for startup MVP success. Agile integration, 24/7 support, and investor-ready traceability to accelerate your launch.",
    images: [
      {
        url: "https://www.testriq.com/OG/Launch-Fast-QA-Service-og.webp",
        width: 1200,
        height: 800,
        alt: "LaunchFast QA Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Launch-Fast QA Services for Companies | Testriq",
    description:
      "Rapid QA testing designed for startup MVP success. Agile integration, 24/7 support, and investor-ready traceability to accelerate your launch.",
    images: ["https://www.testriq.com/OG/Launch_Fast_QA-Twitter.webp"],
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

export default function LaunchFastQAPage() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  // F-44.1 batch 3: plain-text mirror of LaunchFastFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "How can I speed up product launch with agile QA?",
      answer: "The best way to speed up product launch with agile QA is to integrate testing early in the SDLC. We use CI/CD integration and automated testing training to catch bugs at the 'commit' stage. This approach prevents expensive rework during the software release cycle.",
    },
    {
      question: "What are the benefits of on-demand QA services for startups?",
      answer: "Our on-demand QA services provide instant access to senior-level engineers. This gives your dev team the flexibility it needs without the overhead of a full-time hire. This is crucial for early-stage companies needing rapid QA testing services during critical build phases.",
    },
    {
      question: "Does LaunchFast QA support 24/7 agile support for software testing?",
      answer: "Yes. We offer 24/7 agile support for software testing by leveraging a global talent pool. Our 'follow-the-sun' model ensures we test your code while you sleep. Your results are ready for review before your morning stand-up begins.",
    },
    {
      question: "How many users do I need for MVP testing?",
      answer: "For an MVP testing and validation phase, even 5-10 active users can surface major usability flaws. Aim for 50-100 beta testers to achieve statistical significance. This sample size allows you to validate your core value proposition with reliable data insights.",
    },
    {
      question: "What is the difference between Manual and Automation testing for startups?",
      answer: "Manual testing is essential for exploratory, UX, and 'human-centric' edge cases in new features. Automation testing is ideal for regression cycles. It ensures that new updates don't break existing functionality within your CI/CD pipeline.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={launchFastQASchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/launchfast-qa", "LaunchFast QA")}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <LaunchFastQAHeroSection />
      <LaunchFastChallenges />
      <LaunchFastComprehensiveSlider />
      <LaunchFastProvenTestingProcess />
      <LaunchFastCompliance />
      <LaunchFastWhyChooseTestriq />
      <LaunchFastToolsFramework />
      <LaunchFastCaseStudies />
      <LaunchFastFAQs />
    </div>
  );
}
