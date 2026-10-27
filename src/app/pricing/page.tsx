import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    pricingServiceSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
    title: "Software Testing Pricing & QA Packages",
    description:
        "Transparent, predictable pricing for world-class software testing services. Choose from monthly Managed QA retainers or project-based audits. Scalable solutions for startups and global enterprises.",
    keywords: [
        "software testing pricing",
        "QA outsourcing cost",
        "managed qa services packages",
        "software testing retainer",
        "QA project pricing",
        "test automation pricing",
        "VAPT pricing",
        "API testing cost",
    ],
    alternates: {
        canonical: "https://www.testriq.com/pricing",
    },
    openGraph: {
        title: "QA Testing Packages & Pricing | Testriq",
        description: "No fluff, just results. Transparent pricing for world-class software testing services.",
        url: "https://www.testriq.com/pricing",
        // This page shipped no og:image, so shares of it rendered as a bare
        // link with no picture. Generic brand card for now — there is no
        // pricing-specific asset in public/OG; swap it for one when it exists.
        images: [
            {
                url: "https://www.testriq.com/OG/testriq-logo-og.png",
                width: 1200,
                height: 630,
                alt: "QA testing packages and pricing from Testriq QA Lab",
            },
        ],
    }
};

const Pricing5Hero = dynamic(
    () => import("@/components/sections/Pricing5Hero"),
    { ssr: true, loading: () => <HeroLoader /> }
);

const Pricing5Cards = dynamic(
    () => import("@/components/sections/Pricing5Cards"),
    { ssr: true, loading: () => <ContentLoader /> }
);

export default function PricingPage() {
    return (
        <div className="bg-white min-h-screen">
            <StructuredData data={pricingServiceSchema} />
            <MainLayout>
                <Pricing5Hero />
                <Pricing5Cards />
            </MainLayout>
        </div>
    );
}
