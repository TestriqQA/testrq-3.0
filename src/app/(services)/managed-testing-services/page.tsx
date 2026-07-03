import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    managedTestingServiceSchema,
    organizationSchema,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";

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
    title:
        "Managed Testing Services | QA Outsourcing & Teams | Testriq",
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
                width: 1200,
                height: 630,
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

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.testriq.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.testriq.com/services",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Managed Testing Services",
            item: "https://www.testriq.com/managed-testing-services",
        },
    ],
};

export default function ManagedTestingServicesPage() {
    // F-44.1 batch 4: plain-text mirror of ManagedTestingFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are managed testing services and how do they work?",
            answer: "Managed testing services represent a strategic partnership where a vendor takes full responsibility for the testing function, including strategy, resources, tools, and outcomes. Unlike traditional outsourcing where you rent headcount, managed testing involves the vendor owning the entire testing process and being accountable for quality outcomes through SLAs and KPIs. The vendor typically assigns a dedicated team that becomes an extension of your organization, manages all testing activities, and provides transparent reporting on quality metrics and SLA compliance.",
        },
        {
            question: "What is the difference between QA outsourcing and managed testing services?",
            answer: "While traditional QA outsourcing often focuses on staff augmentation (renting headcount), managed testing services involve the vendor owning the entire testing process and being accountable for outcomes. In traditional outsourcing, your organization manages the QA function and directs the vendor's activities. In managed testing, the vendor manages the QA function and is accountable for quality outcomes. Additionally, managed testing typically uses outcome-based or fixed pricing models with SLA-backed accountability, while traditional outsourcing often uses time-and-materials pricing.",
        },
        {
            question: "What are the benefits of managed testing services for enterprises?",
            answer: "Managed testing services provide multiple benefits for enterprises: cost predictability through fixed or outcome-based pricing, access to specialized global talent without lengthy recruitment, faster time-to-market through accelerated testing, and the ability for internal teams to focus on core innovation rather than QA management. Additional benefits include reduced infrastructure investment, consistent quality through standardized processes, scalable testing capacity without proportional cost increases, and reduced management overhead. For regulated industries, managed testing provides compliance expertise and audit documentation.",
        },
        {
            question: "How to choose the best managed testing service provider?",
            answer: "When selecting a managed testing service provider, look for several key factors: industry-specific experience (especially if in healthcare, finance, or regulated sectors), technical depth in automation and specialized testing areas, transparent reporting structures and clear SLAs, proven track record of meeting complex quality requirements, ISTQB certification or equivalent credentials for team members, global reach if you need multi-region support, and references from similar-sized organizations in your industry.",
        },
        {
            question: "How do managed testing services reduce software development costs?",
            answer: "Managed testing services reduce costs by eliminating the need for in-house QA infrastructure, reducing recruitment and training expenses, preventing costly post-release defects through superior test coverage, reducing management overhead, and providing cost predictability through fixed or outcome-based pricing. By shifting from fixed headcount to flexible, outcome-based engagement, organizations pay only for testing capacity they need. The cumulative effect is typically 30-50% reduction in total QA costs compared to maintaining an equivalent in-house team.",
        },
    ];

    return (
        <MainLayout>
            <StructuredData data={managedTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={breadcrumbSchema} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />

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
            <ManagedTestingFAQs />
            <ManagedTestingReadyToStart />
        </MainLayout>
    );
}
