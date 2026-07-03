import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    azureTestingSchema,
    azureFAQSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Enterprise Azure Testing Services | Cloud-Native QA & DevOps",
    description:
        "Testriq Azure testing services: secure cloud migrations and continuous Azure DevOps QA delivered by certified experts for enterprise-grade cloud quality.",
    keywords: [
        "Azure testing services",
        "Azure DevOps QA",
        "cloud migration testing",
        "AKS testing",
        "Azure application services testing",
        "Azure security audit",
        "Azure performance testing",
        "Azure SQL testing",
        "cloud-native QA",
        "Microsoft Azure testing",
    ],
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/azure-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/azure-testing-services",
        siteName: "Testriq - Azure Testing Services",
        title: "Enterprise Azure Testing Services - Cloud-Native QA & DevOps",
        description:
            "Partner with global Azure testing specialists to secure your digital future. From comprehensive cloud migrations to continuous DevOps QA, Testriq provides the expertise you need.",
        images: [
            {
                url: "https://www.testriq.com/OG/Azure-testing-og-image.webp",
                width: 1200,
                height: 630,
                alt: "Azure Testing Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Enterprise Azure Testing Services - Cloud-Native QA & DevOps",
        description:
            "Partner with global Azure testing specialists to secure your digital future. Comprehensive cloud migrations and continuous DevOps QA.",
        images: ["https://www.testriq.com/OG/Azure-testing-og-image.webp"],
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

const AzureTestingHeroSection = dynamic(
    () => import("@/components/sections/AzureTestingHeroSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500 font-bold">Loading Cloud Environment...</p>
            </div>
        ),
    }
);

const AzureTestingWhyTrust = dynamic(
    () => import("@/components/sections/AzureTestingWhyTrust"),
    { ssr: true }
);

const AzureTestingSolutions = dynamic(
    () => import("@/components/sections/AzureTestingSolutions"),
    { ssr: true }
);

const AzureTestingMethodology = dynamic(
    () => import("@/components/sections/AzureTestingMethodology"),
    { ssr: true }
);

const AzureTestingFAQs = dynamic(
    () => import("@/components/sections/AzureTestingFAQs"),
    { ssr: true }
);

const AzureTestingCTA = dynamic(
    () => import("@/components/sections/AzureTestingCTA"),
    { ssr: true }
);

export default function AzureTestingPage() {
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node pointing at
    // /services) to 2 canonical items; URL now structurally derived from pathname.
    return (
        <div>
            <StructuredData data={azureTestingSchema} />
            <StructuredData data={azureFAQSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/azure-testing-services",
                    "Azure Testing Services"
                )}
            />
            <MainLayout>
                <AzureTestingHeroSection />
                <AzureTestingWhyTrust />
                <AzureTestingSolutions />
                <AzureTestingMethodology />
                <AzureTestingFAQs />
                <AzureTestingCTA />
            </MainLayout>
        </div>
    );
}
