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
    sapTestingSchema,
} from "@/components/seo/StructuredData";
import ServiceCrossLinks from "@/components/sections/ServiceCrossLinks";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

const SapTestingChallenges = dynamic(
    () => import("@/components/sections/SapTestingChallenges"),
    { ssr: true }
);

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "SAP Testing Services | S/4HANA Migration QA",

    description:
        "Enterprise SAP testing services for S/4HANA transitions: end-to-end QA for complex implementations, ensuring global compliance and confident rollouts.",
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
    return (
        <main className="min-h-screen bg-white">
            <StructuredData data={sapTestingSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/sap-testing-services",
                    "SAP Testing"
                )}
            />
            <SapTestingHeroSection />
            <ServiceDirectAnswer slug="sap-testing-services" />
            <SapTestingChallenges />
            <SapComprehensiveSlider />
            <SapProvenTestingProcess />
            <SapWhyChooseTestriq />
            <SapToolsFramework />
            <SapCaseStudies />
            <ServiceTeamSection />
            <ServiceLastUpdated slug="sap-testing-services" />
            <ServiceEngagementModels />
            <SapFAQs />
            <SapAnyQuestions />
        {/* PART 4 / JOB A2 — contextual links to related services that
            had almost no inbound links. In the body, not the footer:
            nav and footer already link these pages ~1,457 times and
            Google discounts boilerplate. Mapping lives in
            src/lib/seo/related-services.ts. */}
        <ServiceCrossLinks serviceSlug="sap-testing-services" />
        <ServiceCta slug="sap-testing-services" />
        </main>
    );
}
