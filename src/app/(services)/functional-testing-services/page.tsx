import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    functionalServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import FunctionalHeroSection from "@/components/sections/FunctionalHeroSection";
import FunctionalCriticalitySection from "@/components/sections/FunctionalCriticalitySection";
import FunctionalWhySection from "@/components/sections/FunctionalWhySection";
import FunctionalSolutionsSection from "@/components/sections/FunctionalSolutionsSection";
import FunctionalAdvantageSection from "@/components/sections/FunctionalAdvantageSection";
import FunctionalFAQs from "@/components/sections/FunctionalFAQs";
import FunctionalNextStepsSection from "@/components/sections/FunctionalNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/functional-testing-services",
        title: "Functional Testing Services | QA & Automation | Testriq",
        description:
            "Validate every workflow with Testriq's functional testing services. Web, mobile, and enterprise QA — manual and automated, ISO 29119-aligned for global teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/functional-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Functional Testing Services by Testriq QA Lab",
            type: "image/webp",
        },
        keywords: [
            "functional testing services",
            "software functional testing",
            "automated functional testing",
            "qa functional testing",
            "functional qa solutions",
            "web app functional testing",
            "mobile app functional testing",
            "enterprise software testing",
        ],
    });
}

export default function FunctionalTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~196 chars, now 158
    // with action-verb start; surfaces "ISO 29119-aligned" for
    // enterprise SEO. Keywords lowercased. 6 dynamic() imports converted
    // to direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    // F-44.1 batch 2: plain-text mirror of FunctionalFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are functional testing services?",
            answer: "Functional testing services verify that a software system or application behaves according to its specified functional requirements and meets intended business needs. These services validate the system's features, capabilities, user interactions, and data manipulation to ensure it performs as expected in real-world scenarios.",
        },
        {
            question: "Why is functional testing important for software?",
            answer: "Functional testing is crucial for software because it identifies defects early in the development cycle, validates that the application fulfills user requirements, and ensures changes do not break existing functionality. It improves system reliability, enhances user experience, and helps ensure regulatory compliance.",
        },
        {
            question: "What is the difference between functional and non-functional testing?",
            answer: "Functional testing validates what the system does (behavior e.g., login, search). Non-functional testing measures how the system performs (e.g., speed, security, scalability). While functional testing checks actions against requirements, non-functional testing focuses on site attributes like performance and load capacity.",
        },
        {
            question: "How to choose a functional testing service provider?",
            answer: "Consider their expertise in your industry, approach to test automation (Selenium, Appium, etc.), cross-platform compatibility, and ability to integrate with your existing development workflows. Look for providers offering flexible scripting, custom reporting, and strong CI/CD integration capabilities.",
        },
        {
            question: "What are the key types of functional testing?",
            answer: "Key types include Unit Testing, Integration Testing, System Testing, User Acceptance Testing (UAT), Regression Testing, Smoke Testing, Sanity Testing, Black Box Testing, and White Box Testing. Each serves a unique purpose in the QA lifecycle to ensure comprehensive validation.",
        },
    ];

    return (
        <div>
            <StructuredData data={functionalServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/functional-testing-services",
                    "Functional Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <FunctionalHeroSection />
                <FunctionalCriticalitySection />
                <FunctionalWhySection />
                <FunctionalSolutionsSection />
                <FunctionalAdvantageSection />
                <FunctionalFAQs />
                <FunctionalNextStepsSection />
            </MainLayout>
        </div>
    );
}
