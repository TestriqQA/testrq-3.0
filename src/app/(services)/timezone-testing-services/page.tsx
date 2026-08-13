import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    timezoneTestingServiceSchema,
    timezoneFAQSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import TimezoneTestingHero from "@/components/sections/TimezoneTestingHero";
import TimezoneAdvantageSection from "@/components/sections/TimezoneAdvantageSection";
import TimezoneServicesGrid from "@/components/sections/TimezoneServicesGrid";
import TimezoneMethodology from "@/components/sections/TimezoneMethodology";
import TimezoneFAQs from "@/components/sections/TimezoneFAQs";
import TimezoneCTA from "@/components/sections/TimezoneCTA";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/timezone-testing-services",
        title: "Timezone Testing Services | Follow-the-Sun QA | Testriq",
        description:
            "Sync global delivery with Testriq's timezone testing. Real-time QA, follow-the-sun cycles, and localized support for distributed enterprise engineering teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/time-zone-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Time Zone Aligned QA Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "timezone testing services",
            "real-time qa collaboration",
            "follow-the-sun testing",
            "nearshore software testing",
            "localized qa support",
            "synchronous qa",
            "global delivery model qa",
            "24/7 software testing",
            "agile qa integration",
            "localized uat services",
        ],
    });
}

export default function TimezoneTestingServices() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Mixed-separator double-brand
    // fixed via title.absolute (previous title ended with " - Testriq"
    // dash). New title leads with primary keyword "Timezone Testing
    // Services" (was "Testing in Your Time Zone" — a sentence fragment
    // that's harder to rank). Description rewritten — was ~178 chars,
    // now 159 chars, action-verb start. og:title and twitter:title
    // now mirror page title. Helper added robots block (page had NONE).
    // ogImage.type "image/webp" added. og:image filename typo fixed
    // in a follow-up commit: "time-zone-tresting-og-image.webp" had
    // the asset COPIED to "time-zone-testing-og-image.webp" in
    // /public/OG/ so the old URL still resolves (any social-card cache
    // stays valid) while this page now references the correctly-spelled
    // asset. The "tresting" file is kept on disk intentionally.
    // Keywords lowercased. 6 dynamic() imports converted to direct ES
    // imports. Breadcrumb already migrated in PR-3 — unchanged.
    return (
        <div>
            <StructuredData data={timezoneTestingServiceSchema} />
            <StructuredData data={timezoneFAQSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/timezone-testing-services",
                    "Testing in Your Time Zone"
                )}
            />
            <MainLayout>
                <TimezoneTestingHero />
                <TimezoneAdvantageSection />
                <TimezoneServicesGrid />
                <TimezoneMethodology />
                <TimezoneFAQs />
                <TimezoneCTA />
            </MainLayout>
        </div>
    );
}
