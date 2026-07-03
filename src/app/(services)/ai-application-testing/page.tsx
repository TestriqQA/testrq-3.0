
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  aiTestingServiceSchema,
  createCanonicalBreadcrumb,
  createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Global AI Testing Services | Reliable Systems for the Future",
  description:
    "Testriq AI Application Testing services help ensure your ML models are safe, fair, and compliant, connecting MLOps with QA for high-stakes AI systems.",
  keywords: [
    "AI application testing",
    "AI testing services",
    "machine learning model testing",
    "AI bias detection",
    "AI security testing",
    "AI model validation",
    "AI performance testing",
    "generative AI testing",
    "AI explainability",
    "ethical AI testing",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/ai-application-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/ai-application-testing",
    siteName: "Testriq - AI Testing Services",
    title: "AI Application Testing Services - Accurate, Fair, and Reliable ",
    description:
      "Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by teams across industries.",
    images: [
      {
        url: "https://www.testriq.com/OG/AI-Aplication-Tesing-Service-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Application Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "AI Application Testing Services - Accurate, Fair, and Reliable",
    description:
      "Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by teams across industries.",
    images: ["https://www.testriq.com/OG/AI-Application-Testing-service-Twitter.webp"],
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

const AITestingHeroSection = dynamic(
  () => import("@/components/sections/AITestingHeroSection"),
  { ssr: true, loading: () => <HeroLoader /> }
);

const AIProvenTestingProcess = dynamic(
  () => import("@/components/sections/AIProvenTestingProcess"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIWhyChooseTestriq = dynamic(
  () => import("@/components/sections/AIWhyChooseTestriq"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AICaseStudies = dynamic(
  () => import("@/components/sections/AICaseStudies"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIFAQs = dynamic(() => import("@/components/sections/AIFAQs"), {
  ssr: true,
  loading: () => <FAQLoader />,
});

const AIAnyQuestions = dynamic(
  () => import("@/components/sections/AIAnyQuestions"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIComprehensiveSlider = dynamic(
  () => import("@/components/sections/AIComprehensiveSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AICardSlider = dynamic(
  () => import("@/components/sections/AICardSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIToolsFramework = dynamic(
  () => import("@/components/sections/AIToolsFramework"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function AIApplicationTesting() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  // F-44.1 batch 2: plain-text mirror of AIFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the difference between traditional testing and AI testing?",
      answer: "Traditional software quality assurance relies on fixed, predictable logic. Conversely, machine learning testing evaluates variable outcomes, requiring statistical validation to ensure reasoning remains safe and accurate.",
    },
    {
      question: "How does the EU AI Act affect AI testing services?",
      answer: "The EU AI Act (2026) mandates strict tests for high-risk AI. Companies must now prove their AI is safe and record their impact checks to stay compliant. Our services provide the necessary 'Declaration of Conformity' and technical documentation for EU market entry.",
    },
    {
      question: "Why is AI model validation necessary for Gen-AI?",
      answer: "AI models remain vulnerable to prompt injection and data errors. We use AI model validation and Red-Teaming to find these weak spots. We simulate attacks to stop hackers from stealing your data or breaking your safety rules.",
    },
    {
      question: "What is the NIST AI RMF?",
      answer: "The NIST AI RMF is a set of US rules for managing AI risks. Companies use it to prove their AI is fair, safe, and easy to explain. It helps build trust with users and clients.",
    },
  ];

  return (
    <div>
      <StructuredData data={aiTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/ai-application-testing",
          "AI Application Testing"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <AITestingHeroSection />
        <AIComprehensiveSlider />
        <AICardSlider />
        <AIProvenTestingProcess />
        <AIWhyChooseTestriq />
        <AIToolsFramework />
        <AICaseStudies />
        <AIFAQs />
        <AIAnyQuestions />
      </MainLayout>
    </div>
  );
}
