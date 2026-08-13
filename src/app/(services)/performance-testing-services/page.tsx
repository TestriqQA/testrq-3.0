import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    performanceTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import PerformanceTestingHeroSection from "@/components/sections/PerformanceTestingHeroSection";
import PerformanceTestingChallenges from "@/components/sections/PerformanceTestingChallenges";
import PerformanceTestingComprehensiveSlider from "@/components/sections/PerformanceTestingComprehensiveSlider";
import PerformanceTestingLatencySection from "@/components/sections/PerformanceTestingLatencySection";
import PerformanceTestingProvenTestingProcess from "@/components/sections/PerformanceTestingProvenTestingProcess";
import PerformanceTestingWhyChooseTestriq from "@/components/sections/PerformanceTestingWhyChooseTestriq";
import PerformanceTestingToolsFramework from "@/components/sections/PerformanceTestingToolsFramework";
import PerformanceTestingFAQs from "@/components/sections/PerformanceTestingFAQs";
import PerformanceTestingReadyToEnsureQuality from "@/components/sections/PerformanceTestingReadyToEnsureQuality";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/performance-testing-services",
        title: "Performance Testing Services | Load & Stress | Testriq",
        description:
            "Validate application resilience at scale with Testriq's performance testing services. ISO 29119-compliant load, stress, and endurance testing for DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/performance-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Performance Testing Services by Testriq",
            type: "image/webp",
        },
        keywords: [
            "performance testing services",
            "load testing solutions",
            "stress testing services",
            "scalability testing",
            "endurance testing qa",
            "ci/cd performance testing",
            "iso 29119 performance testing",
            "application performance qa",
            "distributed load testing",
        ],
    });
}

export default function PerformanceTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — og:url was "/services/performance-testing-services"
    // (relative path with /services/ prefix resolving via metadataBase to wrong URL); now derived
    // from pathname via buildPageMetadata. Pattern D fixed — breadcrumb had 3 items where items 2
    // ("Services") and 3 ("Performance Testing") both pointed at /performance-testing-services;
    // reduced to 2 canonical items per PR-2A/2B template. Title fixed — was "Stress Testing
    // Services | Performance Testing Services" (no brand, wrong leading keyword); og:title was a
    // separate better value. 7 dynamic() → direct imports. PR-3 will fix at breadcrumb component
    // level cascading to 40 pages.
    // F-44.1: plain-text mirror of PerformanceTestingFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is the difference between Load Testing and Stress Testing?",
            answer: "Load testing services evaluate system behavior under expected traffic to verify SLAs. Stress testing solutions involve pushing the system to its breaking point to identify weaknesses and recovery protocols.",
        },
        {
            question: "Why is ISO/IEC/IEEE 29119 important for performance testing?",
            answer: "This standard provides a globally recognized framework for precise software performance analysis. It ensures testing is risk-based, documented, and follows repeatable processes that satisfy international auditors.",
        },
        {
            question: "Which performance testing tools are best for web applications?",
            answer: "Tool selection depends on your technology stack. JMeter excels at protocol-heavy testing, while k6 and Gatling are ideal for CI/CD integration and developer-friendly scripting.",
        },
        {
            question: "How do you identify performance bottlenecks?",
            answer: "We combine load generation with APM tools (New Relic, Dynatrace) to track resource usage (CPU, RAM, Disk I/O). We identify API latency, slow database queries, and inefficient load balancing.",
        },
    ];

    return (
        <div>
            <StructuredData data={performanceTestingServiceSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/performance-testing-services", "Performance Testing")} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <PerformanceTestingHeroSection />
                <PerformanceTestingChallenges />
                <PerformanceTestingComprehensiveSlider />
                <PerformanceTestingLatencySection />
                <PerformanceTestingProvenTestingProcess />
                <PerformanceTestingWhyChooseTestriq />
                <PerformanceTestingToolsFramework />
                <PerformanceTestingFAQs />
                <PerformanceTestingReadyToEnsureQuality />
            </MainLayout>
        </div>
    );
}
