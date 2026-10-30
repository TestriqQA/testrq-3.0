import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    compatibilityTestingServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import CompatibilityTestingHeroSection from "@/components/sections/CompatibilityTestingHeroSection";
import CompatibilityTestingDigitalDiversity from "@/components/sections/CompatibilityTestingDigitalDiversity";
import CompatibilityTestingCrucialSection from "@/components/sections/CompatibilityTestingCrucialSection";
import CompatibilityTestingServicesSection from "@/components/sections/CompatibilityTestingServicesSection";
import CompatibilityTestingAdvantageSection from "@/components/sections/CompatibilityTestingAdvantageSection";
import CompatibilityTestingFAQs from "@/components/sections/CompatibilityTestingFAQs";
import CompatibilityTestingReadyToStart from "@/components/sections/CompatibilityTestingReadyToStart";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/compatibility-testing-services",
        title: "Compatibility Testing Services | Cross-Browser QA | Testriq",
        description:
            "Validate software across browsers, OS, and devices with Testriq's compatibility testing services. ISO 29119-certified QA for global, multi-platform launches.",
        ogImage: {
            url: "https://www.testriq.com/OG/Compatibility-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Compatibility Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "compatibility testing services",
            "cross-browser testing services",
            "device lab testing",
            "mobile app compatibility testing",
            "website compatibility testing",
            "regression and compatibility testing",
            "automated compatibility testing",
            "user interface consistency",
            "iso 29119 certified testing",
            "global qa outsourcing",
        ],
    });
}

export default function CompatibilityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten (was ~163 chars with smart
    // quote, now 159 chars, action-verb start). Keywords lowercased.
    // 6 dynamic() imports converted to direct ES imports. Breadcrumb
    // already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={compatibilityTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/compatibility-testing-services",
                    "Compatibility Testing"
                )}
            />
            <MainLayout>
                <CompatibilityTestingHeroSection />
                <ServiceDirectAnswer slug="compatibility-testing-services" />
                <CompatibilityTestingDigitalDiversity />
                <CompatibilityTestingCrucialSection />
                <CompatibilityTestingServicesSection />
                <CompatibilityTestingAdvantageSection />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="compatibility-testing-services" />
                <ServiceEngagementModels />
                <CompatibilityTestingFAQs />
                <CompatibilityTestingReadyToStart />
                <ServiceCta slug="compatibility-testing-services" />
            </MainLayout>
        </div>
    );
}
