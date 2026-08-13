import React from "react";
import dynamic from "next/dynamic";
import SapTestingHeroSection from "@/components/sections/SapTestingHeroSection";
import SapComprehensiveSlider from "@/components/sections/SapComprehensiveSlider";
import SapProvenTestingProcess from "@/components/sections/SapProvenTestingProcess";
import SapWhyChooseTestriq from "@/components/sections/SapWhyChooseTestriq";
import SapToolsFramework from "@/components/sections/SapToolsFramework";
import SapCaseStudies from "@/components/sections/SapCaseStudies";
import SapFAQs from "@/components/sections/SapFAQs";
import SapAnyQuestions from "@/components/sections/SapAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    sapTestingSchema,
} from "@/components/seo/StructuredData";

const SapTestingChallenges = dynamic(
    () => import("@/components/sections/SapTestingChallenges"),
    { ssr: true }
);

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "SAP Testing Services: S/4HANA Migrations & Upgrades",

    description:
        "Enterprise SAP QA for S/4HANA transitions: end-to-end testing for complex implementations, ensuring global compliance and high-confidence deployments.",
    keywords: [
        "SAP Testing Services",
        "SAP Quality Assurance",
        "Independent SAP Testing",
        "SAP Automation Testing",
        "SAP S/4HANA Testing",
        "SAP Upgrade Testing",
        "SAP Regression Testing",
        "Tricentis Tosca",
        "Worksoft Certify",
        "SAP Fiori testing",
    ],
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/sap-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/sap-testing-services",
        siteName: "Testriq - SAP Testing Services",
        title:
            "SAP Testing Services: Accelerated QA for Seamless S/4HANA Migrations & Upgrades",
        description:
            "Accelerate your SAP deployment and minimize risk with Testriq's ISTQB-certified SAP testing experts, leveraging intelligent automation for seamless S/4HANA migrations and upgrade stability.",
        images: [
            {
                url: "https://www.testriq.com/OG/SAP-testing-og-image.webp",
                width: 2752,
                height: 1536,
                alt: "SAP Testing Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title:
            "SAP Testing Services: Accelerated QA for Seamless S/4HANA Migrations & Upgrades",
        description:
            "Accelerate your SAP deployment and minimize risk with Testriq's ISTQB-certified SAP testing experts, leveraging intelligent automation for seamless S/4HANA migrations and upgrade stability.",
        images: ["https://www.testriq.com/OG/SAP-testing-og-image.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function SapTestingPage() {
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
    // to 2 canonical items; URL now structurally derived from pathname.

    // F-44.1 batch 4: plain-text mirror of SapFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are the main challenges of performance testing in SAP environments?",
            answer: "SAP performance testing presents several unique challenges. Key obstacles include simulating realistic Fiori tile launches and managing overlapping batch jobs. Aligned with ISO 29119, we recommend mirroring production environments to avoid 'blind spots'.",
        },
        {
            question: "How do I find SAP testing services for S/4HANA migration projects?",
            answer: "Searching for SAP S/4HANA migration services? Prioritize vendors who combine migration testing with ISO 29119 compliance. You should also ensure they use automated data validation tools for a smooth transition from legacy ECC.",
        },
        {
            question: "Can you automate SAP Fiori applications?",
            answer: "Yes. Effective SAP Fiori automation requires the right tools and strategy. You can use model-based tools like Tosca or script-based frameworks like Selenium. Both methods need specialized logic to handle Fiori's dynamic UI elements.",
        },
        {
            question: "What are the best SAP testing tools for ECC to S/4HANA migration?",
            answer: "Top SAP testing tools for S/4HANA migrations serve specific roles. Tricentis Tosca leads in automation, while SAP Solution Manager (SolMan) handles lifecycle management. For performance validation, LoadRunner remains the industry standard.",
        },
        {
            question: "Is SAP test automation cost-effective for B2B?",
            answer: "Cost-effective SAP test automation helps B2B organizations reduce manual effort by up to 80% and accelerates release cycles by 40%. This significantly lowers the Total Cost of Ownership (TCO) for your SAP landscape.",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <StructuredData data={sapTestingSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/sap-testing-services",
                    "SAP Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <SapTestingHeroSection />
            <SapTestingChallenges />
            <SapComprehensiveSlider />
            <SapProvenTestingProcess />
            <SapWhyChooseTestriq />
            <SapToolsFramework />
            <SapCaseStudies />
            <SapFAQs />
            <SapAnyQuestions />
        </main>
    );
}
