import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    saasTestingServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    // `absolute` bypasses the root layout's "%s | Testriq" template,
    // which would otherwise print the brand twice (F-71).
    title: { absolute: "SaaS Testing Services | Multi-Tenant Cloud QA | Testriq" },
    description:
        "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
    keywords: [
        "SaaS Testing Services",
        "SaaS Application Testing",
        "Multi-Tenant Testing",
        "Cloud Application QA",
        "SaaS Security Testing",
        "SOC2 Compliance Testing",
        "GDPR HIPAA Compliance",
        "SaaS Performance Testing",
        "SaaS Regression Testing",
        "API Integration Testing SaaS",
        "SaaS Load Testing",
        "Cross-Platform SaaS Testing",
    ],
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/saas-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/saas-testing-services",
        siteName: "Testriq - Global QA & Testing",
        title: "SaaS Testing Services | Expert Cloud Application QA & Security",
        description:
            "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
        images: [
            {
                url: "https://www.testriq.com/OG/SaaS-Testing-og-image.webp",
                width: 2752,
                height: 1536,
                alt: "SaaS Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "SaaS Testing Services | Expert Cloud Application QA & Security",
        description:
            "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
        images: ["https://www.testriq.com/OG/SaaS-Testing-og-image.webp"],
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

import SaasTestingHeroSection from "@/components/sections/SaasTestingHeroSection";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import RelatedCaseStudies from "@/components/sections/RelatedCaseStudies";
import ServiceCrossLinks from "@/components/sections/ServiceCrossLinks";
import SaasTestingFAQs, { SAAS_TESTING_FAQS } from "@/components/sections/SaasTestingFAQs";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

const SaasTestingWhyDiffers = dynamic(
    () => import("@/components/sections/SaasTestingWhyDiffers"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingChallenges = dynamic(
    () => import("@/components/sections/SaasTestingChallenges"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingMethodologies = dynamic(
    () => import("@/components/sections/SaasTestingMethodologies"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingScenarios = dynamic(
    () => import("@/components/sections/SaasTestingScenarios"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingToolsTable = dynamic(
    () => import("@/components/sections/SaasTestingToolsTable"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingCompanyStages = dynamic(
    () => import("@/components/sections/SaasTestingCompanyStages"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingMetrics = dynamic(
    () => import("@/components/sections/SaasTestingMetrics"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[700px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingCompliance = dynamic(
    () => import("@/components/sections/SaasTestingCompliance"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingStrategy = dynamic(
    () => import("@/components/sections/SaasTestingStrategy"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[800px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingEngagement = dynamic(
    () => import("@/components/sections/SaasTestingEngagement"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[700px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingReadyToStart = dynamic(
    () => import("@/components/sections/SaasTestingReadyToStart"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

export default function SaasTestingPage() {
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
    // to 2 canonical items; URL now structurally derived from pathname.
    return (
        <div>
            <StructuredData data={saasTestingServiceSchema} />
            {/* Built from the same array the FAQ section renders, so the
                markup and the visible Q&As cannot drift apart. */}
            <StructuredData data={createFaqPageSchema(SAAS_TESTING_FAQS)} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/saas-testing-services",
                    "SaaS Testing"
                )}
            />
            <MainLayout>
                <SaasTestingHeroSection />
                <ServiceDirectAnswer slug="saas-testing-services" />
                <SaasTestingWhyDiffers />
                <SaasTestingChallenges />
                <SaasTestingMethodologies />
                <SaasTestingScenarios />
                <SaasTestingToolsTable />
                <SaasTestingCompanyStages />
                <SaasTestingMetrics />
                <SaasTestingCompliance />
                <SaasTestingStrategy />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="saas-testing-services" />
                <SaasTestingEngagement />
                <SaasTestingFAQs />
                <SaasTestingReadyToStart />
            {/* PART 4 / JOB A3 — contextual links to the case studies that
                prove this service. In the body, not the footer: the nav and
                footer already link this page ~1,457 times and Google
                discounts boilerplate links. Mapping lives in
                src/lib/seo/related-case-studies.ts. */}
            <RelatedCaseStudies serviceSlug="saas-testing-services" />
            {/* PART 4 / JOB A2 — contextual links to related services that
                had almost no inbound links. In the body, not the footer:
                nav and footer already link these pages ~1,457 times and
                Google discounts boilerplate. Mapping lives in
                src/lib/seo/related-services.ts. */}
            <ServiceCrossLinks serviceSlug="saas-testing-services" />
            <ServiceCta slug="saas-testing-services" />
            </MainLayout>
        </div>
    );
}
