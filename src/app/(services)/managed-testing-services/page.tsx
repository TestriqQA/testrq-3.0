import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    managedTestingServiceSchema,
    organizationSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";
import ServiceCrossLinks from "@/components/sections/ServiceCrossLinks";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceCta from "@/components/sections/ServiceCta";

const ManagedTestingHeroSection = dynamic(() => import("@/components/sections/ManagedTestingHeroSection"), { ssr: true });
const ManagedTestingWhatAre = dynamic(() => import("@/components/sections/ManagedTestingWhatAre"), { ssr: true });
const ManagedTestingChallenges = dynamic(() => import("@/components/sections/ManagedTestingChallenges"), { ssr: true });
const ManagedTestingBlueprint = dynamic(() => import("@/components/sections/ManagedTestingBlueprint"), { ssr: true });
const ManagedTestingImplementations = dynamic(() => import("@/components/sections/ManagedTestingImplementations"), { ssr: true });
const ManagedTestingScenarios = dynamic(() => import("@/components/sections/ManagedTestingScenarios"), { ssr: true });
const ManagedTestingEngagementModels = dynamic(() => import("@/components/sections/ManagedTestingEngagementModels"), { ssr: true });
const ManagedTestingMetrics = dynamic(() => import("@/components/sections/ManagedTestingMetrics"), { ssr: true });
const ManagedTestingComparison = dynamic(() => import("@/components/sections/ManagedTestingComparison"), { ssr: true });
const ManagedTestingStrategy = dynamic(() => import("@/components/sections/ManagedTestingStrategy"), { ssr: true });
const ManagedTestingFAQs = dynamic(() => import("@/components/sections/ManagedTestingFAQs"), { ssr: true });
const ManagedTestingReadyToStart = dynamic(() => import("@/components/sections/ManagedTestingReadyToStart"), { ssr: true });

export const revalidate = 3600;

export const metadata: Metadata = {
    // `absolute` bypasses the root layout's "%s | Testriq" template,
    // which would otherwise print the brand twice (F-71).
    title: { absolute: "Managed Testing Services | Full QA Ownership | Testriq" },
    description:
        "Testriq managed testing services: dedicated QA teams, end-to-end testing, and SLA-backed quality assurance to help enterprises cut costs and scale confidently.",
    keywords: [
        "managed testing services",
        "QA outsourcing",
        "dedicated QA teams",
        "managed QA services",
        "testing center of excellence",
        "managed test automation",
        "SLA-backed QA",
        "enterprise testing services",
        "QA partnership",
        "outcome-based testing",
        "managed security testing",
        "managed performance testing",
        "agile testing services",
        "DevOps testing",
        "compliance testing services",
        "ISTQB certified QA",
        "software testing outsourcing",
        "testing as a service",
        "QA staff augmentation",
        "managed regression testing",
    ],
    openGraph: {
        title:
            "Managed Testing Services | QA Outsourcing & Dedicated Teams | Testriq",
        description:
            "Transfer your entire testing function to a specialized partner. Testriq's managed QA services combine dedicated teams, proven methodologies, and outcome-based accountability.",
        url: "https://www.testriq.com/managed-testing-services",
        siteName: "Testriq QA Lab",
        type: "website",
        images: [
            {
                url: "https://www.testriq.com/OG/managed-testing-service-og-image.webp",
                width: 2752,
                height: 1536,
                alt: "Testriq Managed Testing Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Managed Testing Services | QA Outsourcing & Dedicated Teams | Testriq",
        description:
            "Testriq's managed testing services provide dedicated QA teams, end-to-end testing solutions, and SLA-backed quality assurance for enterprises.",
    },
    alternates: {
        canonical: "https://www.testriq.com/managed-testing-services",
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "google-site-verification-code",
    },
};

// Was a hand-written 3-item trail whose middle node pointed at
// https://www.testriq.com/services — a path that 308-redirects to the homepage.
// createCanonicalBreadcrumb emits the same 2-item Home → page shape as every
// other service page, with the leaf label read from BREADCRUMB_LABELS.
const breadcrumbSchema = createCanonicalBreadcrumb(
    "/managed-testing-services",
    "Managed Testing",
);

export default function ManagedTestingServicesPage() {
    // F-44.1 batch 4: plain-text mirror of ManagedTestingFAQs UI content for FAQPage JSON-LD.
    return (
        <MainLayout>
            <StructuredData data={managedTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={breadcrumbSchema} />

            <ManagedTestingHeroSection />
            <ManagedTestingWhatAre />
            <ManagedTestingChallenges />
            <ManagedTestingBlueprint />
            <ManagedTestingImplementations />
            <ManagedTestingScenarios />
            <ManagedTestingEngagementModels />
            <ManagedTestingMetrics />
            <ManagedTestingComparison />
            <ManagedTestingStrategy />
            <ServiceTeamSection />
            <ServiceLastUpdated slug="managed-testing-services" />
            <ManagedTestingFAQs />
            <ManagedTestingReadyToStart />
        {/* PART 4 / JOB A2 — contextual links to related services that
            had almost no inbound links. In the body, not the footer:
            nav and footer already link these pages ~1,457 times and
            Google discounts boilerplate. Mapping lives in
            src/lib/seo/related-services.ts. */}
        <ServiceCrossLinks serviceSlug="managed-testing-services" />
        <ServiceCta slug="managed-testing-services" />
        </MainLayout>
    );
}
