import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    saasTestingServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "SaaS Testing Services | Cloud Application QA | Testriq",
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
                width: 1200,
                height: 630,
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
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/saas-testing-services",
                    "SaaS Testing"
                )}
            />
            <MainLayout>
                <SaasTestingHeroSection />
                <SaasTestingWhyDiffers />
                <SaasTestingChallenges />
                <SaasTestingMethodologies />
                <SaasTestingScenarios />
                <SaasTestingToolsTable />
                <SaasTestingCompanyStages />
                <SaasTestingMetrics />
                <SaasTestingCompliance />
                <SaasTestingStrategy />
                <SaasTestingEngagement />
                <SaasTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
