import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    shiftLeftServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ShiftLeftHeroSection from "@/components/sections/ShiftLeftHeroSection";
import ShiftLeftImperativeSection from "@/components/sections/ShiftLeftImperativeSection";
import ShiftLeftWhySection from "@/components/sections/ShiftLeftWhySection";
import ShiftLeftSolutionsSection from "@/components/sections/ShiftLeftSolutionsSection";
import ShiftLeftAdvantageSection from "@/components/sections/ShiftLeftAdvantageSection";
import ShiftLeftChallengesSection from "@/components/sections/ShiftLeftChallengesSection";
import ShiftLeftFAQs from "@/components/sections/ShiftLeftFAQs";
import ShiftLeftNextStepsSection from "@/components/sections/ShiftLeftNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/shift-left-testing",
        title: "Shift-Left Testing | Early Defect Detection | Testriq",
        description:
            "Detect defects early with Testriq's shift-left testing services. CI/CD integration, TDD coaching, and BDD consulting for Agile and DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/Shift-left-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Shift-Left Testing Services",
            type: "image/webp",
        },
        keywords: [
            "shift-left testing services",
            "early defect detection",
            "ci/cd testing integration",
            "test-driven development",
            "bdd consulting",
            "devops testing solutions",
            "agile testing services",
            "continuous quality assurance",
            "early qa services",
            "defect prevention testing",
        ],
    });
}

export default function ShiftLeftTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/shift-left-testing). Pattern A*
    // fixed — og:url was absent from the openGraph block entirely. Pattern D fixed — breadcrumb
    // reduced from 3 items (Home / Services → /services/ / Shift-Left Testing →
    // /services/shift-left-testing) to 2 canonical items per PR-2A/2B template.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    // F-44.1 batch 3: plain-text mirror of ShiftLeftFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is shift-left testing and why is it important?",
            answer: "Shift-left testing is the practice of moving testing activities earlier in the software development lifecycle, ideally starting from the requirements and design phases. It is important because it helps catch defects when they are easiest and cheapest to fix, significantly reducing the overall cost of quality, accelerating delivery, and improving reliability.",
        },
        {
            question: "How to implement shift-left testing in an Agile environment?",
            answer: "Involving QA professionals in requirements gathering, encouraging developers to write unit tests, automating testing within the CI/CD pipeline, and fostering a collaborative culture where quality is a shared responsibility are key steps.",
        },
        {
            question: "What are the benefits of shift-left testing for businesses?",
            answer: "Benefits include faster time-to-market, significant cost savings by minimizing expensive post-release fixes, reduction in technical debt, and higher customer satisfaction through more reliable software.",
        },
        {
            question: "What is the difference between shift-left and shift-right testing?",
            answer: "Shift-left focuses on pre-production testing to prevent defects. Shift-right involves testing in production (monitoring, A/B testing) to gather real-world feedback and identify live-environment issues.",
        },
        {
            question: "How does shift-left testing reduce software development costs?",
            answer: "By resolving defects at their earliest stages, companies avoid the exponential increase in fix costs. Catching an issue during design is often 100x cheaper than fixing it after it has reached production.",
        },
    ];

    return (
        <div>
            <StructuredData data={shiftLeftServiceSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/shift-left-testing", "Shift-Left Testing")} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <ShiftLeftHeroSection />
                <ShiftLeftImperativeSection />
                <ShiftLeftWhySection />
                <ShiftLeftSolutionsSection />
                <ShiftLeftAdvantageSection />
                <ShiftLeftChallengesSection />
                <ShiftLeftFAQs />
                <ShiftLeftNextStepsSection />
            </MainLayout>
        </div>
    );
}
