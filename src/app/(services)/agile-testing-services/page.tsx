import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import {
    agileTestingSchema,
    agileFAQSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AgileTestingHeroSection from "@/components/sections/AgileTestingHeroSection";
import AgileTestingWhyChoose from "@/components/sections/AgileTestingWhyChoose";
import AgileTestingSolutions from "@/components/sections/AgileTestingSolutions";
import AgileTestingMethodology from "@/components/sections/AgileTestingMethodology";
import AgileTestingFAQs from "@/components/sections/AgileTestingFAQs";
import AgileTestingCTA from "@/components/sections/AgileTestingCTA";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/agile-testing-services",
        title: "Agile Testing Services | Sprint-Ready QA | Testriq",
        description:
            "Accelerate release cycles with Testriq's Agile testing services. Continuous testing, shift-left QA, and sprint-ready automation for global teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/Agile-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Agile Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "agile testing services",
            "agile QA",
            "continuous testing",
            "shift-left testing",
            "sprint-ready automation",
            "scrum QA",
        ],
    });
}

export default function AgileTestingServicesPage() {
    // TODO(seo phase-2 audit): Pattern D — bulk fix needed across all
    // service+solution pages. The "Services" intermediate breadcrumb item
    // was dropped here because it pointed to the same URL as the leaf
    // (`/agile-testing-services`), violating Schema.org BreadcrumbList
    // semantics and creating a duplicate breadcrumb anchor. The same
    // anti-pattern affects ~50 other service+solution pages site-wide
    // (see docs/seo-audit/02-codebase-audit.md §3.5). A separate branch
    // will sweep all of them in one pass.
    return (
        <>
            {/*
              JSON-LD is inlined as plain <script type="application/ld+json">
              tags rather than via the shared <StructuredData> component.
              The shared component wraps the JSON-LD in next/script, which
              doesn't emit it into the initial SSR HTML — defeating the
              entire purpose for Google's crawler. See
              docs/seo-audit/fixes/agile-testing-after.md for the
              site-wide cleanup TODO that Phase 5 must handle.
            */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(agileTestingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(agileFAQSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(createCanonicalBreadcrumb("/agile-testing-services", "Agile Testing Services")),
                }}
            />

            <MainLayout>
                <AgileTestingHeroSection />
                <AgileTestingWhyChoose />
                <AgileTestingSolutions />
                <AgileTestingMethodology />
                <AgileTestingFAQs />
                <AgileTestingCTA />
            </MainLayout>
        </>
    );
}
