import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Corporate QA Training Services Professional Software Testing",
  description:
    "Enterprise corporate QA training from Testriq: specialist quality-engineering programs aligned with ISO 29119 and ISTQB standards to upskill your team.",
  keywords: [
    "corporate qa training",
    "software testing training",
    "qa team training",
    "quality assurance training",
    "testing methodology training",
    "automation testing training",
    "manual testing training",
    "performance testing training",
    "qa certification training",
    "corporate training programs",
    "ISO 29119 training",
    "ISTQB corporate certification",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/corporate-qa-training",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/corporate-qa-training",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Corporate QA Training Services - Professional Software Testing Training | Testriq",
    description:
      "Transform your team with Testriq's comprehensive Corporate QA Training services. Expert-led training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
    images: [
      {
        url: "https://www.testriq.com/OG/Corporate QA traing OG img.webp",
        width: 1200,
        height: 630,
        alt: "Testriq Corporate QA Training Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Corporate QA Training Services - Professional Software Testing Training | Testriq",
    description:
      "Transform your team with Testriq's comprehensive Corporate QA Training services. Expert-led training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
    images: ["https://www.testriq.com/OG/Corporate QA traing OG twitter.webp"],
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

const CorporateQATrainingHeroSection = dynamic(
  () => import("@/components/sections/CorporateQATrainingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingChallenges = dynamic(
  () => import("@/components/sections/CorporateQATrainingChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingReadyToTransform = dynamic(
  () => import("@/components/sections/CorporateQATrainingReadyToTransform"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingComprehensiveSlider = dynamic(
  () => import("@/components/sections/CorporateQATrainingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingProvenProcess = dynamic(
  () => import("@/components/sections/CorporateQATrainingProvenProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/CorporateQATrainingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingModules = dynamic(
  () => import("@/components/sections/CorporateQATrainingModules"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingFAQs = dynamic(
  () => import("@/components/sections/CorporateQATrainingFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const corporateQATrainingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate QA Training Services",
  description:
    "Comprehensive corporate QA training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
  provider: {
    "@type": "Organization",
    name: "Testriq QA Lab",
    url: "https://www.testriq.com",
  },
  serviceType: "Corporate Training",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate QA Training Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manual Testing Training",
          description:
            "Comprehensive manual testing methodologies and best practices",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation Testing Training",
          description: "Advanced automation testing frameworks and tools",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Testing Training",
          description:
            "Performance testing strategies and optimization techniques",
        },
      },
    ],
  },
};

export default function CorporateQATrainingPage() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.

  // F-44.1 batch 3: plain-text mirror of CorporateQATrainingFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the best way to set up a QA training program for your organization?",
      answer: "Setting up a successful program starts with a technical workforce development audit. First, identify specific gaps in your CI/CD pipeline integration. Then, choose a provider that offers customized QA bootcamps instead of generic courses.",
    },
    {
      question: "How do you measure the ROI of corporate software QA training?",
      answer: "We measure ROI through 'Defect Detection Efficiency' and 'Time-to-Market' metrics. By following ISO 29119 standards, companies often reduce post-release bugs by 30-60%. This results in significantly lower maintenance costs.",
    },
    {
      question: "Do you offer ISTQB certification for teams?",
      answer: "Yes. Our QA courses prepare teams for ISTQB Foundation and Advanced certifications. This creates a 'common language' of testing across your entire organization.",
    },
    {
      question: "Is online corporate QA training effective for remote teams?",
      answer: "Absolutely. We use interactive virtual labs and real-time collaboration tools for our remote QA training. This ensures our online sessions are just as rigorous and hands-on as our on-site workshops.",
    },
    {
      question: "What is the difference between Manual vs. Automation testing training?",
      answer: "Manual testing training focuses on exploratory techniques, UX, and human-centric edge cases. Automation training focuses on building scalable test automation frameworks and integrating them into your CI/CD pipeline for rapid feedback.",
    },
  ];

  return (
    <div>
      <StructuredData data={corporateQATrainingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/corporate-qa-training", "Corporate QA Training")}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <CorporateQATrainingHeroSection />
        <CorporateQATrainingChallenges />
        <CorporateQATrainingComprehensiveSlider />
        <CorporateQATrainingProvenProcess />
        <CorporateQATrainingWhyChooseTestriq />
        <CorporateQATrainingModules />
        <CorporateQATrainingFAQs />
        <CorporateQATrainingReadyToTransform />
      </MainLayout>
    </div>
  );
}
