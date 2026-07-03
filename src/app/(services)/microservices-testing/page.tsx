import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    createFaqPageSchema,
    microservicesServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MicroservicesHeroSection from "@/components/sections/MicroservicesHeroSection";
import MicroservicesWhatIsSection from "@/components/sections/MicroservicesWhatIsSection";
import MicroservicesPyramidSection from "@/components/sections/MicroservicesPyramidSection";
import MicroservicesChallengesSection from "@/components/sections/MicroservicesChallengesSection";
import MicroservicesKeySolutionsSection from "@/components/sections/MicroservicesKeySolutionsSection";
import MicroservicesApproachesSection from "@/components/sections/MicroservicesApproachesSection";
import MicroservicesApplicationsSection from "@/components/sections/MicroservicesApplicationsSection";
import MicroservicesBestPracticesSection from "@/components/sections/MicroservicesBestPracticesSection";
import MicroservicesToolsSection from "@/components/sections/MicroservicesToolsSection";
import MicroservicesMethodologySection from "@/components/sections/MicroservicesMethodologySection";
import MicroservicesScenariosSection from "@/components/sections/MicroservicesScenariosSection";
import MicroservicesWhyChooseSection from "@/components/sections/MicroservicesWhyChooseSection";
import MicroservicesFAQs from "@/components/sections/MicroservicesFAQs";
import MicroservicesNextStepsSection from "@/components/sections/MicroservicesNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/microservices-testing",
        title: "Microservices Testing Services | Contract & API QA | Testriq",
        description:
            "Validate distributed systems with Testriq's microservices testing. Contract testing, chaos engineering, and Kubernetes API QA for cloud-native architectures.",
        ogImage: {
            url: "https://www.testriq.com/OG/Microservices-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Microservices Testing Services",
            type: "image/webp",
        },
        keywords: [
            "microservices testing services",
            "contract testing",
            "api testing for microservices",
            "distributed systems testing",
            "chaos engineering",
            "kubernetes testing",
            "cloud-native testing",
            "pact testing",
            "service mesh validation",
            "consumer-driven contract testing",
        ],
    });
}

export default function MicroservicesTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/microservices-testing). Pattern A*
    // fixed — og:url was absent from the openGraph block entirely. Pattern D fixed — breadcrumb
    // reduced from 3 items (Home / Services → /services/ / Microservices Testing →
    // /services/microservices-testing) to 2 canonical items per PR-2A/2B template.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Microservices Testing",
            url: "https://www.testriq.com/microservices-testing",
        },
    ];

    // F-44.1 batch 2: plain-text mirror of MicroservicesFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is microservices testing and why is it complex?",
            answer: "Microservices testing is the comprehensive validation of independently deployable services in a distributed system architecture. It is complex because a single transaction might cross 10+ services, multiple databases, and various network protocols, making simple unit tests insufficient for system-wide reliability.",
        },
        {
            question: "How does contract testing work in a microservices architecture?",
            answer: "Contract testing ensures that service consumers and providers agree on the structure of their APIs. Consumer side: defines expectations (contracts) for the provider. Provider side: validates its implementation against those contracts. Prevention: if a provider changes a field, the contract test fails in CI/CD before breaking the consumer.",
        },
        {
            question: "Is it possible to test microservices without a dedicated stage environment?",
            answer: "Yes, through Service Virtualization (mocking dependencies with WireMock) and Contract Testing. These techniques allow developers to validate services in isolation or thin environments, drastically reducing the need for heavy, shared staging clusters.",
        },
        {
            question: "What are the benefits of chaos engineering for distributed systems?",
            answer: "Resilience Validation: ensures the system survives pod failures and network spikes. Incident Preparedness: trains teams to respond to failures before they happen in production. Confidence: provides proof that 'Circuit Breakers' and 'Retries' actually work under load.",
        },
        {
            question: "How do you handle data consistency testing across services?",
            answer: "We implement Saga pattern validation and eventual consistency audits. We use specialized test data management to ensure that distributed transactions settle correctly across multiple database-per-service instances.",
        },
    ];

    return (
        <div>
            <StructuredData data={microservicesServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <MicroservicesHeroSection />
                <MicroservicesWhatIsSection />
                <MicroservicesPyramidSection />
                <MicroservicesChallengesSection />
                <MicroservicesKeySolutionsSection />
                <MicroservicesApproachesSection />
                <MicroservicesApplicationsSection />
                <MicroservicesBestPracticesSection />
                <MicroservicesToolsSection />
                <MicroservicesMethodologySection />
                <MicroservicesScenariosSection />
                <MicroservicesWhyChooseSection />
                <MicroservicesFAQs />
                <MicroservicesNextStepsSection />
            </MainLayout>
        </div>
    );
}
