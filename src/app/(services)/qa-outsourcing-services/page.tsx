import type { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { buildPageMetadata } from "@/lib/seo/metadata";
import StructuredData, {
    createFaqPageSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

// Metadata values are fixed by the SEO brief for the "QA outsourcing" keyword
// cluster — do not reword the title or description without an SEO review.
export const metadata: Metadata = buildPageMetadata({
    pathname: "qa-outsourcing-services",
    title: "QA Outsourcing Services | Dedicated QA Teams | Testriq",
    description:
        "QA outsourcing services from ISTQB-certified engineers — dedicated QA teams, managed testing & on-demand QA to cut costs and ship faster. Free consultation.",
    keywords: [
        "qa outsourcing services",
        "outsourced software testing",
        "outsource qa",
        "software qa outsourcing",
        "quality assurance outsourcing",
        "offshore qa testing",
        "managed qa",
        "dedicated testing team",
        "software testing outsourcing",
        "outsourced qa services",
        "outsource qa engineers",
    ],
});

const QAOutsourcingHeroSection = dynamic(
    () => import("@/components/sections/QAOutsourcingHeroSection"),
    { ssr: true }
);
const QAOutsourcingWhatIs = dynamic(
    () => import("@/components/sections/QAOutsourcingWhatIs"),
    { ssr: true }
);
const QAOutsourcingWhyOutsource = dynamic(
    () => import("@/components/sections/QAOutsourcingWhyOutsource"),
    { ssr: true }
);
const QAOutsourcingEngagementModels = dynamic(
    () => import("@/components/sections/QAOutsourcingEngagementModels"),
    { ssr: true }
);
const QAOutsourcingServices = dynamic(
    () => import("@/components/sections/QAOutsourcingServices"),
    { ssr: true }
);
const QAOutsourcingProcess = dynamic(
    () => import("@/components/sections/QAOutsourcingProcess"),
    { ssr: true }
);
const QAOutsourcingWhyTestriq = dynamic(
    () => import("@/components/sections/QAOutsourcingWhyTestriq"),
    { ssr: true }
);
const QAOutsourcingIndustries = dynamic(
    () => import("@/components/sections/QAOutsourcingIndustries"),
    { ssr: true }
);
const QAOutsourcingFAQs = dynamic(
    () => import("@/components/sections/QAOutsourcingFAQs"),
    { ssr: true }
);
const QAOutsourcingReadyToStart = dynamic(
    () => import("@/components/sections/QAOutsourcingReadyToStart"),
    { ssr: true }
);

// Plain-text mirror of the QAOutsourcingFAQs UI content for FAQPage JSON-LD.
// Both must stay identical — the SEO brief requires the same text in each.
const qaOutsourcingFaqs = [
    {
        question: "What is QA outsourcing?",
        answer:
            "QA outsourcing means delegating your software testing to a specialized external partner instead of hiring an in-house QA team. You get certified testers, tools, and proven processes on demand — at lower cost and with the flexibility to scale.",
    },
    {
        question: "How much does QA outsourcing cost?",
        answer:
            "Cost depends on your engagement model (dedicated team, managed, or project-based), the number of testers, and the scope of testing. Outsourcing is typically far cheaper than building an in-house team because you avoid hiring, training, tooling, and infrastructure costs. Contact us for a tailored quote.",
    },
    {
        question: "What are the benefits of outsourcing software testing?",
        answer:
            "Lower costs, faster releases, access to ISTQB-certified experts, the ability to scale up or down, independent and unbiased testing, and freeing your developers to focus on building the product.",
    },
    {
        question:
            "Dedicated team, managed testing, or project-based — which should I choose?",
        answer:
            "Choose a dedicated team for ongoing development with a stable roadmap; managed testing if you want us to own the whole QA function against quality goals; and project-based if you need flexible testing for a specific release. Not sure? We'll recommend the right fit in a free consultation.",
    },
    {
        question: "Is my data safe with an outsourced QA partner?",
        answer:
            "Yes. Testriq follows ISO 27001-aligned information-security practices, signs NDAs, and controls access to your systems and test data. Data handling is documented and auditable.",
    },
    {
        question: "How do you manage an outsourced QA team?",
        answer:
            "Your dedicated testers integrate with your tools (Jira, Slack, CI/CD), join your stand-ups if you wish, and report through transparent dashboards — so you always have visibility and control, as if they were in-house.",
    },
    {
        question: "Can you work in our time zone?",
        answer:
            "Yes. We deliver across time zones (US, UK, EU, UAE, India, and beyond) and align working hours to your schedule for real-time collaboration or follow-the-sun testing.",
    },
];

const qaOutsourcingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA Outsourcing Services",
    serviceType: "QA Outsourcing",
    description:
        "QA outsourcing services from Testriq — dedicated QA teams, managed testing, on-demand project-based QA, and QA staff augmentation delivered by ISTQB-certified engineers across manual, automation, performance, security, API, mobile, and web testing.",
    url: "https://www.testriq.com/qa-outsourcing-services",
    provider: {
        "@type": "Organization",
        name: "Testriq QA Lab LLP",
        url: "https://www.testriq.com",
        telephone: "+91-915-2929-343",
    },
    areaServed: ["United States", "United Kingdom", "European Union", "United Arab Emirates", "India"],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "QA Outsourcing Engagement Models",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Dedicated QA Team" },
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Managed Testing Services" },
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "On-Demand / Project-Based QA" },
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "QA Staff Augmentation" },
            },
        ],
    },
};

export default function QAOutsourcingServicesPage() {
    return (
        <MainLayout>
            <StructuredData data={qaOutsourcingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/qa-outsourcing-services",
                    "QA Outsourcing Services"
                )}
            />
            <StructuredData data={createFaqPageSchema(qaOutsourcingFaqs)} />

            <QAOutsourcingHeroSection />
            <QAOutsourcingWhatIs />
            <QAOutsourcingWhyOutsource />
            <QAOutsourcingEngagementModels />
            <QAOutsourcingServices />
            <QAOutsourcingProcess />
            <QAOutsourcingWhyTestriq />
            <QAOutsourcingIndustries />
            <QAOutsourcingFAQs />
            <QAOutsourcingReadyToStart />
        </MainLayout>
    );
}
