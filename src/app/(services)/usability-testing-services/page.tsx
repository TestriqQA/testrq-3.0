import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    usabilityTestingServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import UsabilityTestingHeroSection from "@/components/sections/UsabilityTestingHeroSection";
import UsabilityTestingCrucialSection from "@/components/sections/UsabilityTestingCrucialSection";
import UsabilityTestingAdvantage from "@/components/sections/UsabilityTestingAdvantage";
import UsabilityTestingServicesGrid from "@/components/sections/UsabilityTestingServicesGrid";
import UsabilityTestingMethodology from "@/components/sections/UsabilityTestingMethodology";
import UsabilityTestingFAQs from "@/components/sections/UsabilityTestingFAQs";
import UsabilityTestingCTASection from "@/components/sections/UsabilityTestingCTASection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/usability-testing-services",
        title: "Usability Testing Services | UX Audit & Research | Testriq",
        description:
            "Drive engagement with Testriq's usability testing services. UX audits, mobile and web user research, and ISTQB-certified QA for evidence-driven product teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/usability-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Usability Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "usability testing services",
            "ux audit services",
            "user research services",
            "mobile app usability testing",
            "website usability testing",
            "ecommerce usability testing",
            "ai-driven ux audit",
            "istqb certified ux testing",
            "remote usability testing",
        ],
    });
}

export default function UsabilityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Mixed-separator double-brand
    // fixed via title.absolute (previous title ended with " - Testriq"
    // dash). Title dropped "Company" keyword-stuffing tail. The page
    // previously had THREE different description strings (page ~217
    // chars, og ~131, twitter ~107); now all mirror the page-level
    // description rewritten to 159 chars. Keywords lowercased. 6
    // dynamic() imports converted to direct ES imports. Breadcrumb
    // already migrated in PR-3 — unchanged.
    // F-44.1 batch 5: plain-text mirror of UsabilityTestingFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are the benefits of professional usability testing services?",
            answer: "Professional usability testing services significantly enhance user satisfaction, reduce development costs by identifying issues early, improve conversion rates, and strengthen brand loyalty. It ensures your product is intuitive, efficient, and enjoyable for its target audience.",
        },
        {
            question: "How much does a usability audit cost for a mobile app?",
            answer: "The cost is customized based on scope and complexity. Testriq offers tailored quotes following an initial ROI-focused consultation to ensure you get the most value for your specific mobile platform needs.",
        },
        {
            question: "Why is usability testing important for software development?",
            answer: "It validates design decisions through real-user eyes, uncovering critical pain points that developers might miss. This leads to minimized rework, faster market adoption, and ultimately higher business success.",
        },
        {
            question: "How to choose the best usability testing company?",
            answer: "Look for a combination of ISTQB certified expertise, global reach, and a methodology that integrates AI-driven insights. Testriq combines 15+ years of experience with predictive analytics to deliver unparalleled UX value.",
        },
    ];

    return (
        <div className="scroll-smooth">
            <StructuredData data={usabilityTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/usability-testing-services",
                    "Usability Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <UsabilityTestingHeroSection />
                <UsabilityTestingCrucialSection />
                <UsabilityTestingAdvantage />
                <UsabilityTestingServicesGrid />
                <UsabilityTestingMethodology />
                <UsabilityTestingFAQs />
                <UsabilityTestingCTASection />
            </MainLayout>
        </div>
    );
}
