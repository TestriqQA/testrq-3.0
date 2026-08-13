import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    continuousTestingServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ContinuousTestingHeroSection from "@/components/sections/ContinuousTestingHeroSection";
import ContinuousTestingWhyDevOps from "@/components/sections/ContinuousTestingWhyDevOps";
import ContinuousTestingBenefits from "@/components/sections/ContinuousTestingBenefits";
import ContinuousTestingComprehensiveSlider from "@/components/sections/ContinuousTestingComprehensiveSlider";
import ContinuousTestingSpecialized from "@/components/sections/ContinuousTestingSpecialized";
import ContinuousTestingFAQs from "@/components/sections/ContinuousTestingFAQs";
import ContinuousTestingReadyToAccelerate from "@/components/sections/ContinuousTestingReadyToAccelerate";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/continuous-testing-services-cicd-pipeline",
        title: "Continuous Testing Services & CI/CD Integration | Testriq",
        description:
            "Shift quality left with Testriq's continuous testing. Automated regression, performance, and security gates integrated into your CI/CD for DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/continues-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Continuous Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "continuous testing services",
            "ci/cd pipeline testing",
            "devops testing integration",
            "shift-left testing",
            "automated regression testing",
            "continuous performance testing",
            "continuous security testing",
            "test data management",
            "dora metrics optimization",
            "ci/cd quality engineering",
        ],
    });
}

export default function ContinuousTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~191 chars, now 153
    // with action-verb start and explicit listing of CI/CD test types
    // (regression / performance / security). Keywords lowercased.
    // 6 dynamic() imports converted to direct ES imports. Breadcrumb
    // already migrated in PR-3 — unchanged.
    // F-44.1 batch 2: plain-text mirror of ContinuousTestingFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is the difference between Continuous Testing and Test Automation?",
            answer: "While Test Automation refers to the use of tools to execute tests without human intervention, Continuous Testing is the broader process of executing these automated tests as part of a software delivery pipeline to obtain immediate feedback on business risks. Automation is the tool, while Continuous Testing is the strategy.",
        },
        {
            question: "Why is Continuous Testing essential for DevOps?",
            answer: "Continuous Testing is essential because it removes the traditional testing bottleneck. In a DevOps environment, where speed is critical, waiting for a manual testing phase is impossible. Continuous Testing ensures that speed does not compromise quality by providing constant, automated validation.",
        },
        {
            question: "What are the key components of a Continuous Testing Service?",
            answer: "The foundational pillars include Test Automation, CI/CD Integration, Test Data Management, and Environmental Parity. Together, these components ensure that tests are reliable, repeatable, and provide an accurate reflection of production readiness.",
        },
        {
            question: "How does continuous testing improve feedback loops?",
            answer: "It provides developers with instant results after every code commit. Instead of waiting days for a QA report, developers know within minutes if their changes have introduced a defect, allowing for immediate remediation and significantly lower technical debt.",
        },
        {
            question: "What are the main challenges in implementing continuous testing?",
            answer: "Common hurdles include cultural resistance to shared quality responsibility, 'flaky' tests that provide inconsistent results, skill gaps in automation, and the high effort required for test maintenance. Testriq specializes in overcoming these challenges through strategic consulting and robust framework implementation.",
        },
    ];

    return (
        <div>
            <StructuredData data={continuousTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/continuous-testing-services-cicd-pipeline",
                    "Continuous Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <ContinuousTestingHeroSection />
                <ContinuousTestingWhyDevOps />
                <ContinuousTestingBenefits />
                <ContinuousTestingComprehensiveSlider />
                <ContinuousTestingSpecialized />
                <ContinuousTestingFAQs />
                <ContinuousTestingReadyToAccelerate />
            </MainLayout>
        </div>
    );
}
