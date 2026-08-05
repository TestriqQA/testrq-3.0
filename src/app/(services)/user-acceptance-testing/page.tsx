import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    uatServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import UATHeroSection from "@/components/sections/UATHeroSection";
import UATWhatIsSection from "@/components/sections/UATWhatIsSection";
import UATTypesSection from "@/components/sections/UATTypesSection";
import UATVsFunctionalSection from "@/components/sections/UATVsFunctionalSection";
import UATChallengesSection from "@/components/sections/UATChallengesSection";
import UATProcessSection from "@/components/sections/UATProcessSection";
import UATApplicationsSection from "@/components/sections/UATApplicationsSection";
import UATBestPracticesSection from "@/components/sections/UATBestPracticesSection";
import UATComparisonSection from "@/components/sections/UATComparisonSection";
import UATFAQs from "@/components/sections/UATFAQs";
import UATScenariosSection from "@/components/sections/UATScenariosSection";
import UATWhyChooseSection from "@/components/sections/UATWhyChooseSection";
import UATNextStepsSection from "@/components/sections/UATNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/user-acceptance-testing",
        title: "User Acceptance Testing Services | Enterprise UAT | Testriq",
        description:
            "Validate software with real users through Testriq's UAT services. ISTQB-certified facilitators for ERP, CRM, and digital transformation acceptance testing.",
        ogImage: {
            url: "https://www.testriq.com/OG/user-acceptance-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq UAT Services",
            type: "image/webp",
        },
        keywords: [
            "user acceptance testing services",
            "uat testing",
            "beta testing management",
            "end-user validation",
            "erp uat testing",
            "crm uat services",
            "digital transformation qa",
            "operational acceptance testing",
            "istqb uat facilitators",
        ],
    });
}

export default function UserAcceptanceTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/user-acceptance-testing). Pattern D
    // fixed — breadcrumb reduced from 3 items (Home / Services / User Acceptance Testing, all with
    // /services/ prefix URLs) to 2 canonical items per PR-2A template. StructuredData moved inside
    // <div> wrapper (was in <> fragment outside <MainLayout>) to match PR-2A template.
    // F-44.1 batch 5: plain-text mirror of UATFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is User Acceptance Testing (UAT) and why is it important?",
            answer: "User Acceptance Testing (UAT) is the final phase of software testing where actual end-users and business stakeholders validate that the software meets their business requirements. It's important because it identifies business misalignment and user experience issues that technical testing often misses, ensuring the software actually delivers business value.",
        },
        {
            question: "What are the key steps in the UAT process?",
            answer: "The UAT process typically follows 6 key steps: Planning (scope & criteria), Test Case Development (business scenarios), Team Selection & Training (facilitating users), Test Execution (collecting feedback), Issue Resolution (prioritizing bypasses/fixes), and Sign-Off (deployment readiness confirmation).",
        },
        {
            question: "How does UAT differ from functional testing?",
            answer: "Functional testing checks if the software works according to technical specifications (the mechanics). UAT validates if the software actually meets user needs and enables business workflows (the value). Functional is done by QA pros; UAT is done by end-users.",
        },
        {
            question: "Who should be involved in User Acceptance Testing?",
            answer: "Key participants include End-Users (provide feedback), Business Analysts (facilitate), Product Owners (strategic decisions), Operations Teams (readiness), and specialized UAT service providers like Testriq who manage the entire lifecycle.",
        },
    ];

    return (
        <div>
            <StructuredData data={uatServiceSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/user-acceptance-testing", "User Acceptance Testing")} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <UATHeroSection />
                <UATWhatIsSection />
                <UATTypesSection />
                <UATVsFunctionalSection />
                <UATChallengesSection />
                <UATProcessSection />
                <UATApplicationsSection />
                <UATBestPracticesSection />
                <UATComparisonSection />
                <UATScenariosSection />
                <UATFAQs />
                <UATWhyChooseSection />
                <UATNextStepsSection />
            </MainLayout>
        </div>
    );
}
