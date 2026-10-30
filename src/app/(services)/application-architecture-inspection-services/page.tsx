import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    architectureServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ArchitectureHeroSection from "@/components/sections/ArchitectureHeroSection";
import ArchitectureAdvantageSection from "@/components/sections/ArchitectureAdvantageSection";
import ArchitectureServicesSection from "@/components/sections/ArchitectureServicesSection";
import ArchitectureMethodologySection from "@/components/sections/ArchitectureMethodologySection";
import ArchitectureFAQs from "@/components/sections/ArchitectureFAQs";
import ArchitectureCTASection from "@/components/sections/ArchitectureCTASection";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/application-architecture-inspection-services",
        title: "Application Architecture Inspection Services | Testriq",
        description:
            "Application architecture inspection services from Testriq: microservices reviews, technical-debt audits and cloud-native validation for scaling teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/application-architecture-inspection-services-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Application Architecture Inspection Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "application architecture inspection",
            "software architecture audit",
            "microservices review",
            "technical debt assessment",
            "cloud-native audit",
            "system design review",
            "scalability inspection",
            "legacy modernization audit",
            "distributed systems review",
            "architecture health check",
        ],
    });
}

export default function ArchitectureInspectionPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed —
    // previous title ended with " - Testriq" (dash separator) and the root
    // layout's template "%s | Testriq" produced "... - Testriq | Testriq".
    // New title leads with "Application Architecture Inspection", surfaces
    // "Microservices Audit" as B2B differentiator. Description trimmed
    // from ~210 chars to 155. ogImage.type "image/webp" added. og:title
    // and twitter:title now mirror page title. 6 dynamic() imports
    // converted to direct ES imports. Breadcrumb already migrated in
    // PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={architectureServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/application-architecture-inspection-services",
                    "Architecture Inspection"
                )}
            />
            <MainLayout>
                <ArchitectureHeroSection />
                <ServiceDirectAnswer slug="application-architecture-inspection-services" />
                <ArchitectureAdvantageSection />
                <ArchitectureServicesSection />
                <ArchitectureMethodologySection />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="application-architecture-inspection-services" />
                <ServiceEngagementModels />
                <ArchitectureFAQs />
                <ArchitectureCTASection />
                <ServiceCta slug="application-architecture-inspection-services" />
            </MainLayout>
        </div>
    );
}
