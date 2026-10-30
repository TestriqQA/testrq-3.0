import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumb,
    regressionTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import RegressionTestingHeroSection from "@/components/sections/RegressionTestingHeroSection";
import RegressionTestingComprehensiveSlider from "@/components/sections/RegressionTestingComprehensiveSlider";
import RegressionTestingROISection from "@/components/sections/RegressionTestingROISection";
import RegressionTestingProvenTestingProcess from "@/components/sections/RegressionTestingProvenTestingProcess";
import RegressionTestingWhyChooseTestriq from "@/components/sections/RegressionTestingWhyChooseTestriq";
import RegressionTestingToolsFramework from "@/components/sections/RegressionTestingToolsFramework";
import RegressionTestingCaseStudies from "@/components/sections/RegressionTestingCaseStudies";
import RegressionTestingReadyToEnsureQuality from "@/components/sections/RegressionTestingReadyToEnsureQuality";
import RegressionTestingFAQs from "@/components/sections/RegressionTestingFAQs";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/regression-testing",
        title: "Regression Testing Services | Automated QA | Testriq",
        description:
            "Prevent release failures with Testriq's regression testing. Automated, selective, and risk-based QA for CI/CD pipelines and enterprise release cycles.",
        ogImage: {
            url: "https://www.testriq.com/OG/Regression-Testing-Services-Og.webp",
            width: 1200,
            height: 800,
            alt: "Regression Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "regression testing services",
            "automated regression testing",
            "risk-based regression testing",
            "selective regression testing",
            "ci/cd regression automation",
            "impact analysis testing",
            "regression qa services",
            "enterprise regression testing",
            "software stability testing",
        ],
    });
}

export default function RegressionTestingPage() {
    // TODO(seo phase-2 audit): Pattern B fixed — og:url had slug typo
    // "https://www.testriq.com/regression-testings" (extra 's' → 404); now derived from pathname
    // via buildPageMetadata. Pattern D fixed — breadcrumb had 3 items where item 2 ("Services")
    // URL pointed at /regression-testing instead of /; reduced to 2 canonical items per PR-2A/2B
    // template. Double-brand fixed — title "...| Testriq" + root layout template produced
    // "...Testriq | Testriq". og:title separator fixed " - " → " | ". og:image and twitter:image
    // unified (were two separate .webp files). Junk page-level fields removed: verification,
    // authors, creator, publisher, formatDetection (all belong in root layout only). 9 dynamic()
    // → direct imports. PR-3 will fix at breadcrumb component level cascading to 40 pages.
    // F-44.1: plain-text mirror of RegressionTestingFAQs UI content for FAQPage JSON-LD.
    return (
        <div>
            <StructuredData data={regressionTestingServiceSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/regression-testing", "Regression Testing")} />
            <MainLayout>
                <RegressionTestingHeroSection />
                <ServiceDirectAnswer slug="regression-testing" />
                <RegressionTestingComprehensiveSlider />
                <RegressionTestingROISection />
                <RegressionTestingProvenTestingProcess />
                <RegressionTestingWhyChooseTestriq />
                <RegressionTestingToolsFramework />
                <RegressionTestingCaseStudies />
                <RegressionTestingReadyToEnsureQuality />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="regression-testing" />
                <ServiceEngagementModels />
                <RegressionTestingFAQs />
                <ServiceCta slug="regression-testing" />
            </MainLayout>
        </div>
    );
}
