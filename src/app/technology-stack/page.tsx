import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { toolsPageSchema } from "@/components/seo/StructuredData";
import { Metadata } from "next";

// SEO metadata for the Tools page
export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Testriq" template,
  // which would otherwise print the brand twice (F-71).
  title: { absolute: "QA Automation Tools & Frameworks We Use | Testriq" },
  description: "Explore our comprehensive arsenal of 50+ QA tools. We leverage industry leaders like Selenium, Cypress, Playwright, and JMeter to build robust, scalable automation frameworks for your business.",
  keywords: [
    "testing tools",
    "test automation frameworks",
    "QA tools",
    "selenium testing",
    "cypress framework",
    "playwright automation",
    "web application testing tools",
    "mobile testing frameworks",
    "API testing tools",
    "healthcare testing tools",
    "software testing automation",
    "quality assurance tools",
    "test management tools",
    "performance testing tools",
    "security testing frameworks",
    "CI/CD testing tools",
    "automated testing solutions",
    "testing infrastructure",
    "test orchestration",
    "continuous testing"
  ],
  openGraph: {
    title: "Testing Tools & Frameworks | Professional QA Automation Solutions",
    description: "Discover our comprehensive suite of testing tools and frameworks for web application testing, mobile testing, API testing, and healthcare software testing.",
    type: "website",
    url: "https://www.testriq.com/OG/Advance-Testing-tools-og.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testing Tools & Frameworks | Professional QA Automation Solutions",
    description: "Discover our comprehensive suite of testing tools and frameworks for web application testing, mobile testing, API testing, and healthcare software testing.",
    images: ['https://www.testriq.com/OG/Advance-Testing-tools-Twitter.webp'],
  },
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: "https://www.testriq.com/technology-stack",
  },
};

// Dynamic imports for better performance
import ToolsHeroSection from "@/components/sections/ToolsHeroSection"

const ToolsCategoriesSection = dynamic(
  () => import("@/components/sections/ToolsCategoriesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsFrameworksSection = dynamic(
  () => import("@/components/sections/ToolsFrameworksSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsTechStackSection = dynamic(
  () => import("@/components/sections/ToolsTechStackSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsIndustrySpecificSection = dynamic(
  () => import("@/components/sections/ToolsIndustrySpecificSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsAutomationSection = dynamic(
  () => import("@/components/sections/ToolsAutomationSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsPerformanceSection = dynamic(
  () => import("@/components/sections/ToolsPerformanceSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsReadyToElevateSection = dynamic(
  () => import("@/components/sections/ToolsReadyToElevateSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);



export default function ToolsPage() {
  return (
    <div>
      <StructuredData data={toolsPageSchema} />
      <MainLayout>
        <ToolsHeroSection />
        <ToolsCategoriesSection />
        <ToolsFrameworksSection />
        <ToolsTechStackSection />
        <ToolsIndustrySpecificSection />
        <ToolsAutomationSection />
        <ToolsPerformanceSection />
        <ToolsReadyToElevateSection />
      </MainLayout>
    </div>
  );
}

