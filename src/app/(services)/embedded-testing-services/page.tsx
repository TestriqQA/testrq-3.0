import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    embeddedTestingSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import EmbeddedTestingHeroSection from "@/components/sections/EmbeddedTestingHeroSection";
import EmbeddedComplexity from "@/components/sections/EmbeddedComplexity";
import EmbeddedCritically from "@/components/sections/EmbeddedCritically";
import EmbeddedServiceOfferings from "@/components/sections/EmbeddedServiceOfferings";
import EmbeddedTestriqAdvantage from "@/components/sections/EmbeddedTestriqAdvantage";
import EmbeddedFAQs from "@/components/sections/EmbeddedFAQs";
import EmbeddedAnyQuestions from "@/components/sections/EmbeddedAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/embedded-testing-services",
        title: "Embedded Testing Services | Software & Hardware QA | Testriq",
        description:
            "Ensure precision and reliability with Testriq's embedded testing services. V&V for automotive (ISO 26262), medical, and IoT safety-critical systems.",
        ogImage: {
            url: "https://www.testriq.com/OG/Embedded-testing-service-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Embedded Testing Services by Testriq",
            type: "image/webp",
        },
        keywords: [
            "embedded testing services",
            "embedded software testing",
            "automotive embedded testing",
            "medical device software testing",
            "iso 26262 compliance",
            "do-178c testing",
            "v&v services",
            "software-in-the-loop sil testing",
            "model-in-the-loop mil testing",
            "hardware-in-the-loop hil testing",
            "rtos testing",
            "firmware testing",
            "soc testing",
            "iot device testing",
        ],
    });
}

export default function EmbeddedTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was 159 chars with smart
    // quote ’, now 149 with regular apostrophe. Helper added the robots
    // block (page had NONE). Helper expanded the twitter block (was
    // short-form, missing site/creator). ogImage.type "image/webp" added.
    // Keywords lowercased. 7 dynamic() imports converted to direct ES
    // imports. Breadcrumb already migrated in PR-3 — unchanged.
    // F-44.1 batch 3: plain-text mirror of EmbeddedFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are embedded testing services?",
            answer: "Embedded testing services involve the comprehensive verification and validation of embedded software and hardware systems. This ensures that embedded devices, from IoT gadgets to automotive control units, function reliably, securely, and according to their specifications in real-world environments.",
        },
        {
            question: "Why is embedded software testing important?",
            answer: "Embedded software testing is critical because embedded systems often operate in safety-critical applications (e.g., medical devices, automotive). Thorough testing ensures reliability, prevents costly failures, enhances security against vulnerabilities, and guarantees compliance with industry-specific regulations and standards, ultimately safeguarding users and investments.",
        },
        {
            question: "What is the difference between HIL, SIL, and MIL testing?",
            answer: "Model-in-the-Loop (MIL) testing verifies the control algorithm using a mathematical model of the system. Software-in-the-Loop (SIL) testing integrates the actual production code with a simulated environment. Hardware-in-the-Loop (HIL) testing connects the real embedded controller to a simulated plant model, enabling real-time interaction and comprehensive validation under realistic conditions.",
        },
        {
            question: "How to choose an embedded testing service provider?",
            answer: "When selecting an embedded testing service provider, consider their expertise in your specific industry (e.g., automotive, medical), their proficiency with relevant standards (e.g., ISO 26262, DO-178C), their capabilities in HIL, SIL, and MIL testing, and their experience with test automation frameworks for embedded systems.",
        },
        {
            question: "What are the key challenges in embedded systems testing?",
            answer: "Key challenges include the tight coupling of hardware and software, real-time constraints, limited debugging access, resource constraints (memory, processing power), complex toolchains, ensuring compliance with safety and security standards, and replicating real-world environmental conditions for validation.",
        },
    ];

    return (
        <div>
            <StructuredData data={embeddedTestingSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/embedded-testing-services",
                    "Embedded Testing Services"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <EmbeddedTestingHeroSection />
                <EmbeddedComplexity />
                <EmbeddedCritically />
                <EmbeddedServiceOfferings />
                <EmbeddedTestriqAdvantage />
                <EmbeddedFAQs />
                <EmbeddedAnyQuestions />
            </MainLayout>
        </div>
    );
}
