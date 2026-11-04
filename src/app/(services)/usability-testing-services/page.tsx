import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    usabilityTestingServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { usabilityTestingFaqs } from "./faqs";

import UsabilityTestingHeroSection from "@/components/sections/UsabilityTestingHeroSection";
import UsabilityTestingCrucialSection from "@/components/sections/UsabilityTestingCrucialSection";
import UsabilityTestingAdvantage from "@/components/sections/UsabilityTestingAdvantage";
import UsabilityTestingServicesGrid from "@/components/sections/UsabilityTestingServicesGrid";
import UsabilityTestingMethodology from "@/components/sections/UsabilityTestingMethodology";
import UsabilityTestingFAQs from "@/components/sections/UsabilityTestingFAQs";
import UsabilityTestingCTASection from "@/components/sections/UsabilityTestingCTASection";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

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
    // F-44.1 batch 5 originally kept a plain-text mirror of the
    // UsabilityTestingFAQs UI content here, so the FAQPage JSON-LD could be
    // built on the server from a client component's list. 2026-11-04: the two
    // copies had drifted on a typo, so the list moved to ./faqs.ts and both
    // the accordion and the markup below now read that one array.
    const faqsForSchema = usabilityTestingFaqs;

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
                <ServiceDirectAnswer slug="usability-testing-services" />
                <UsabilityTestingCrucialSection />
                <UsabilityTestingAdvantage />
                <UsabilityTestingServicesGrid />
                <UsabilityTestingMethodology />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="usability-testing-services" />
                <ServiceEngagementModels />
                <UsabilityTestingFAQs />
                <UsabilityTestingCTASection />
                <ServiceCta slug="usability-testing-services" />
            </MainLayout>
        </div>
    );
}
