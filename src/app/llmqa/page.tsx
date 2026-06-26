import dynamic from "next/dynamic";
import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import StructuredData, {
  createFaqPageSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  pathname: "llmqa",
  title: "LLMQA — Test, Validate & Certify Your LLM Chatbot | Testriq",
  description:
    "LLMQA stress-tests your LLM chatbot across 9 dimensions — hallucination, jailbreaks, persona drift, bias, and compliance — then issues a signed, verifiable certificate. First complete test free, $200/test after.",
  keywords: [
    "LLM testing",
    "LLM evaluation platform",
    "chatbot testing",
    "AI red teaming",
    "jailbreak testing",
    "hallucination detection",
    "LLM certification",
    "AI compliance testing",
    "prompt injection testing",
    "multi-turn conversation evals",
  ],
});

const LLMQAHeroSection = dynamic(
  () => import("@/components/sections/llmqa/LLMQAHeroSection"),
  { ssr: true, loading: () => <HeroLoader /> }
);
const LLMQATrustedBy = dynamic(
  () => import("@/components/sections/llmqa/LLMQATrustedBy"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQAProblemSection = dynamic(
  () => import("@/components/sections/llmqa/LLMQAProblemSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQADimensions = dynamic(
  () => import("@/components/sections/llmqa/LLMQADimensions"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQAHowItWorks = dynamic(
  () => import("@/components/sections/llmqa/LLMQAHowItWorks"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQADifferentiators = dynamic(
  () => import("@/components/sections/llmqa/LLMQADifferentiators"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQAStatsBand = dynamic(
  () => import("@/components/sections/llmqa/LLMQAStatsBand"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQATestimonials = dynamic(
  () => import("@/components/sections/llmqa/LLMQATestimonials"),
  { ssr: true, loading: () => <ContentLoader /> }
);
const LLMQAFAQs = dynamic(
  () => import("@/components/sections/llmqa/LLMQAFAQs"),
  { ssr: true, loading: () => <FAQLoader /> }
);
const LLMQAFinalCTA = dynamic(
  () => import("@/components/sections/llmqa/LLMQAFinalCTA"),
  { ssr: true, loading: () => <ContentLoader /> }
);

// Plain-text mirror of the LLMQAFAQs UI content, for FAQPage JSON-LD.
const llmqaFaqs = [
  {
    question: "What is LLMQA, in one sentence?",
    answer:
      "LLMQA is a validation platform that tests any LLM-powered chatbot across 9 dimensions and issues signed certifications your customers can verify.",
  },
  {
    question: "Do I need to write my own evals?",
    answer:
      "No. Starter suites cover accuracy, hallucination, safety, persona, and red-team out of the box. Extend them with your own golden cases as you go.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Yes — Helm charts and Terraform modules ship on Enterprise. Self-serve plans (Trial, Pay as you go, Volume) run on our managed cloud.",
  },
  {
    question: "Does LLMQA train on my data?",
    answer:
      "No. Your prompts and completions are used only to execute the eval and produce results visible to your workspace.",
  },
];

const llmqaSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LLMQA",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "LLM Testing & Validation",
  operatingSystem: "Web",
  url: "https://www.testriq.com/llmqa",
  description:
    "LLMQA stress-tests any LLM-powered chatbot across 9 evaluation dimensions — hallucination, bias & fairness, security & safety, red team & jailbreak, persona consistency, compliance, performance, domain expertise, and tool & function calling — then issues an Ed25519-signed certificate your customers can verify.",
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "USD",
    description:
      "$200 per complete test covering all 9 dimensions and a signed certificate. First complete test free.",
  },
  provider: {
    "@type": "Organization",
    name: "Testriq QA Lab LLP",
    url: "https://www.testriq.com",
  },
};

export default function LLMQAPage() {
  return (
    <div>
      <StructuredData data={llmqaSoftwareSchema} />
      <StructuredData data={createCanonicalBreadcrumb("/llmqa", "LLMQA")} />
      <StructuredData data={createFaqPageSchema(llmqaFaqs)} />
      <MainLayout>
        <LLMQAHeroSection />
        <LLMQATrustedBy />
        <LLMQAProblemSection />
        <LLMQADimensions />
        <LLMQAHowItWorks />
        <LLMQADifferentiators />
        <LLMQAStatsBand />
        <LLMQATestimonials />
        <LLMQAFAQs />
        <LLMQAFinalCTA />
      </MainLayout>
    </div>
  );
}
