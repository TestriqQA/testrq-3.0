import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumb,
    createFaqPageSchema,
    migrationServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import MigrationHeroSection from "@/components/sections/MigrationHeroSection";
import MigrationCriticalitySection from "@/components/sections/MigrationCriticalitySection";
import MigrationWhySection from "@/components/sections/MigrationWhySection";
import MigrationSolutionsSection from "@/components/sections/MigrationSolutionsSection";
import MigrationAdvantageSection from "@/components/sections/MigrationAdvantageSection";
import MigrationFAQs from "@/components/sections/MigrationFAQs";
import MigrationNextStepsSection from "@/components/sections/MigrationNextStepsSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/migration-testing",
        title: "Migration Testing Services | Data & Cloud QA | Testriq",
        description:
            "Prevent data loss and ensure seamless transitions with Testriq's migration testing. Expert ETL validation, data integrity checks, and cloud migration QA.",
        ogImage: {
            url: "https://www.testriq.com/OG/migration-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Migration Testing Services",
            type: "image/webp",
        },
        keywords: [
            "migration testing services",
            "data migration testing",
            "cloud migration qa",
            "database migration testing",
            "etl testing services",
            "data integrity testing",
            "application migration testing",
            "erp migration testing",
            "zero-downtime migration qa",
        ],
    });
}

export default function MigrationTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — canonical and og:url now derived from pathname
    // via buildPageMetadata (previously pointed at /services/migration-testing). Pattern A* fixed —
    // og:url was absent from the openGraph block entirely, causing it to be omitted from the HTML
    // head; helper always emits og:url matching canonical. Breadcrumb schema ADDED — this page had
    // none; 2 items per PR-2A template. PR-3 will fix at breadcrumb component level.
    // F-44.1 batch 2: plain-text mirror of MigrationFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is migration testing and why is it important?",
            answer: "Migration testing is the process of verifying that an application or data has been successfully moved from one environment to another without loss, corruption, or functional degradation. It is important to prevent data loss, ensure functional continuity, and minimize business downtime, thereby safeguarding critical operations and user experience.",
        },
        {
            question: "What are the key phases of a migration testing process?",
            answer: "The key phases typically include: Pre-Migration (assessment, data profiling, mapping, and environment readiness), Migration (execution, monitoring, and initial data transfer verification), and Post-Migration (comprehensive validation, data reconciliation, regression testing, and performance testing in the new environment).",
        },
        {
            question: "How to ensure data integrity during a cloud migration?",
            answer: "To ensure data integrity, it is crucial to implement automated reconciliation tools, perform rigorous row-count and checksum validations, verify data transformations against predefined rules, and conduct thorough post-migration functional and data accuracy checks. Establishing clear schema validation and data mapping processes is also vital.",
        },
        {
            question: "What is the difference between pre-migration and post-migration testing?",
            answer: "Pre-migration testing focuses on preparing for the migration by assessing data quality, profiling source data, defining data mapping rules, and ensuring environment readiness. Post-migration testing validates that the data is accurate, complete, and consistent in the new system, and checks all applications and functionalities post-transfer.",
        },
        {
            question: "What are the common challenges in data migration testing?",
            answer: "Common challenges include managing large data volumes, complex transformations, mapping mismatches between source and target systems, ensuring security and compliance throughout the transfer, and minimizing downtime during the migration window. Accurate data preprocessing and source-target system complexity also pose significant hurdles.",
        },
    ];

    return (
        <div>
            <StructuredData data={migrationServiceSchema} />
            <StructuredData data={createCanonicalBreadcrumb("/migration-testing", "Migration Testing")} />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <MigrationHeroSection />
                <MigrationCriticalitySection />
                <MigrationWhySection />
                <MigrationSolutionsSection />
                <MigrationAdvantageSection />
                <MigrationFAQs />
                <MigrationNextStepsSection />
            </MainLayout>
        </div>
    );
}
