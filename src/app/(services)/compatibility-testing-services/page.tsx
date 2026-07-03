import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    compatibilityTestingServiceSchema,
    compatibilityFAQSchema,
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

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/compatibility-testing-services",
        title: "Compatibility Testing Services | Cross-Browser QA | Testriq",
        description:
            "Validate software across browsers, OS, and devices with Testriq's compatibility testing services. ISO 29119-certified QA for global, multi-platform launches.",
        ogImage: {
            url: "https://www.testriq.com/OG/Compatibility-testing-og-image.webp",
            width: 1200,
            height: 630,
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
            <StructuredData data={compatibilityFAQSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/compatibility-testing-services",
                    "Compatibility Testing"
                )}
            />
            <MainLayout>
                <CompatibilityTestingHeroSection />
                <CompatibilityTestingDigitalDiversity />
                <CompatibilityTestingCrucialSection />
                <CompatibilityTestingServicesSection />
                <CompatibilityTestingAdvantageSection />
                <CompatibilityTestingFAQs />
                <CompatibilityTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
