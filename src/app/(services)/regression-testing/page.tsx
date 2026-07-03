import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    createFaqPageSchema,
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

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/regression-testing",
        title: "Regression Testing | Automated & Risk-Based QA | Testriq",
        description:
            "Prevent release failures with Testriq's regression testing. Automated, selective, and risk-based QA for CI/CD pipelines and enterprise release cycles.",
        ogImage: {
            url: "https://www.testriq.com/OG/Regression-Testing-Services-Og.webp",
            width: 1200,
            height: 630,
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
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Regression Testing",
            url: "https://www.testriq.com/regression-testing",
        },
    ];

    // F-44.1: plain-text mirror of RegressionTestingFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is the main difference between unit testing and regression testing?",
            answer: "Unit testing validates individual components in isolation, usually by developers. Regression testing validates the entire system to ensure that these individual changes didn't break existing features.",
        },
        {
            question: "How do you reduce regression testing time with automation?",
            answer: "We use Regression Test Selection (RTS) to find the most vital tests. Our team then runs them in parallel using cloud environments to save you time. This reduces execution time by up to 80%.",
        },
        {
            question: "What is visual regression testing?",
            answer: "Visual regression testing focuses on the UI's appearance. We analyze images to find unintended layout shifts and font changes. These visual tools catch color mismatches that standard functional tests often miss.",
        },
        {
            question: "Why is impact analysis important in regression testing?",
            answer: "Avoid slow, full regression cycles by targeting only the code that changed. Our impact analysis ensures you maintain high quality while significantly cutting execution costs.",
        },
        {
            question: "How do you handle flaky tests in automated regression testing?",
            answer: "We use 'retry' logic and stabilize environments to stop flaky tests. By regularly pruning your test suite, we ensure your results are always reliable and accurate.",
        },
    ];

    return (
        <div>
            <StructuredData data={regressionTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <RegressionTestingHeroSection />
                <RegressionTestingComprehensiveSlider />
                <RegressionTestingROISection />
                <RegressionTestingProvenTestingProcess />
                <RegressionTestingWhyChooseTestriq />
                <RegressionTestingToolsFramework />
                <RegressionTestingCaseStudies />
                <RegressionTestingReadyToEnsureQuality />
                <RegressionTestingFAQs />
            </MainLayout>
        </div>
    );
}
