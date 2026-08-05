import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    adHocTestingServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    organizationSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AdHocTestingHeroSection from "@/components/sections/AdHocTestingHeroSection";
import AdHocTestingWhatIs from "@/components/sections/AdHocTestingWhatIs";
import AdHocTestingScenarios from "@/components/sections/AdHocTestingScenarios";
import AdHocTestingMethodologies from "@/components/sections/AdHocTestingMethodologies";
import AdHocTestingApplications from "@/components/sections/AdHocTestingApplications";
import AdHocTestingProsCons from "@/components/sections/AdHocTestingProsCons";
import AdHocTestingBestPractices from "@/components/sections/AdHocTestingBestPractices";
import AdHocTestingStrategy from "@/components/sections/AdHocTestingStrategy";
import AdHocTestingWhyTestriq from "@/components/sections/AdHocTestingWhyTestriq";
import AdHocTestingFAQs from "@/components/sections/AdHocTestingFAQs";
import AdHocTestingReadyToStart from "@/components/sections/AdHocTestingReadyToStart";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/ad-hoc-testing",
        title: "Ad-Hoc Testing Services | On-Demand QA | Testriq",
        description:
            "Rapid, on-demand QA with Testriq's ad-hoc testing. Error guessing, monkey testing, and exploratory testing for hotfix validation and fast CI/CD feedback.",
        ogImage: {
            url: "https://www.testriq.com/OG/Ad-Hoc_Testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Ad-Hoc Testing Services",
            type: "image/webp",
        },
        keywords: [
            "ad-hoc testing services",
            "on-demand qa testing",
            "error guessing testing",
            "monkey testing services",
            "exploratory testing services",
            "hotfix validation",
            "rapid qa feedback",
            "agile ad-hoc qa",
            "buddy testing services",
            "unplanned scenario testing",
        ],
    });
}

export default function AdHocTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/ad-hoc-testing, a /services/ prefix
    // URL that does not exist as a route). Pattern D fixed — breadcrumb reduced from 3 items with
    // /services/ prefix URLs to 2 canonical items. PR-3 will fix at breadcrumb component level
    // cascading to 40 pages.
    // F-44.1 batch 3: plain-text mirror of AdHocTestingFAQs UI content for FAQPage JSON-LD.
    const adHocFaqsForSchema = [
        {
            question: "What is ad-hoc testing and when should it be used?",
            answer: "Ad-hoc testing is an informal, unstructured testing method where testers use domain knowledge, intuition, and error-guessing techniques to find bugs without predefined test cases. It should be used for hotfixes requiring immediate validation, mobile apps needing quick cross-device checks, agile sprints needing rapid feature feedback, or startups needing cost-effective testing. It's best combined with formal testing for the perfect balance of speed and coverage.",
        },
        {
            question: "What are the main types of ad-hoc testing?",
            answer: "The primary types include Buddy Testing (developer/tester collaboration), Pair Testing (two testers working together), Monkey Testing (random input stress testing), Error Guessing (intuitive bug prediction), Sanity Testing (quick functional validation after fixes), and Smoke Testing (preliminary build stability check).",
        },
        {
            question: "How does ad-hoc testing differ from exploratory testing?",
            answer: "Ad-hoc testing is completely unstructured and random with zero documentation. Exploratory testing is semi-structured, guided by test 'charters' and learning objectives, and involves more systematic exploration with documented findings. Ad-hoc is best for urgency; Exploratory is best for deep feature investigation.",
        },
        {
            question: "What are the advantages and disadvantages of ad-hoc testing?",
            answer: "Advantages include extreme speed, cost-effectiveness, and intuitive bug detection. Disadvantages include a lack of documentation, difficulty in measuring coverage, and a high dependency on the tester's individual expertise. It's an excellent supplement but rarely a replacement for comprehensive formal QA.",
        },
        {
            question: "What are the best practices for effective ad-hoc testing?",
            answer: "Key practices include using highly experienced testers with deep domain knowledge, focusing on high-risk areas (payments, security), documenting bugs immediately with screen captures, combining it with formal testing phases, and conducting post-session analysis to feed findings back into the main test suite.",
        },
    ];

    return (
        <div>
            <StructuredData data={adHocTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/ad-hoc-testing", "Ad-Hoc Testing")} />
            <StructuredData data={createFaqPageSchema(adHocFaqsForSchema)} />
            <MainLayout>
                <AdHocTestingHeroSection />
                <AdHocTestingWhatIs />
                <AdHocTestingScenarios />
                <AdHocTestingMethodologies />
                <AdHocTestingApplications />
                <AdHocTestingProsCons />
                <AdHocTestingBestPractices />
                <AdHocTestingStrategy />
                <AdHocTestingWhyTestriq />
                <AdHocTestingFAQs />
                <AdHocTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
