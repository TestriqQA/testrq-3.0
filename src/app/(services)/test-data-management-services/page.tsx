import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    tdmServiceSchema,
    tdmFAQSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import TDMHeroSection from "@/components/sections/TDMHeroSection";
import TDMAdvantageSection from "@/components/sections/TDMAdvantageSection";
import TDMServicesSection from "@/components/sections/TDMServicesSection";
import TDMMethodologySection from "@/components/sections/TDMMethodologySection";
import TDMFAQs from "@/components/sections/TDMFAQs";
import TDMCTASection from "@/components/sections/TDMCTASection";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/test-data-management-services",
        title: "Test Data Management Services | Synthetic Data | Testriq",
        description:
            "Test data management services from Testriq: secure data masking, synthetic data generation and GDPR-compliant TDM for safe, scalable testing pipelines.",
        ogImage: {
            url: "https://www.testriq.com/OG/Test-data-management-service-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Test Data Management Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "test data management services",
            "tdm qa",
            "synthetic data generation",
            "data masking services",
            "automated tdm solutions",
            "test data provisioning",
            "gdpr compliance tdm",
            "pii data masking",
            "test data subsetting",
        ],
    });
}

export default function TestDataManagementPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Mixed-separator double-brand
    // fixed via title.absolute (previous title ended with " - Testriq"
    // dash; root template "%s | Testriq" produced "... - Testriq |
    // Testriq"). Title dropped "Company" keyword-stuffing tail. The page
    // previously had THREE different title strings (page, og, twitter);
    // now all mirror the canonical page title. Description rewritten —
    // was ~205 chars, now 160 chars, action-verb start. ogImage.type
    // "image/webp" added. Keywords lowercased. 6 dynamic() imports
    // converted to direct ES imports. Breadcrumb already migrated in
    // PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={tdmServiceSchema} />
            <StructuredData data={tdmFAQSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/test-data-management-services",
                    "Test Data Management"
                )}
            />
            <MainLayout>
                <TDMHeroSection />
                <ServiceDirectAnswer slug="test-data-management-services" />
                <TDMAdvantageSection />
                <TDMServicesSection />
                <TDMMethodologySection />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="test-data-management-services" />
                <ServiceEngagementModels />
                <TDMFAQs />
                <TDMCTASection />
                <ServiceCta slug="test-data-management-services" />
            </MainLayout>
        </div>
    );
}
