import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    accessibilityServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AccessibilityHeroSection from "@/components/sections/AccessibilityHeroSection";
import AccessibilitySolutionsSection from "@/components/sections/AccessibilitySolutionsSection";
import AccessibilityWhySection from "@/components/sections/AccessibilityWhySection";
import AccessibilityServicesListSection from "@/components/sections/AccessibilityServicesListSection";
import AccessibilityProcessSection from "@/components/sections/AccessibilityProcessSection";
import AccessibilityFAQSection from "@/components/sections/AccessibilityFAQSection";
import AccessibilityAnyQuestions from "@/components/sections/AccessibilityAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/accessibility-testing-services",
        title: "Accessibility Testing Services | WCAG 2.2 & ADA | Testriq",
        description:
            "Ensure your digital products are inclusive with Testriq's expert Accessibility Testing Services. We specialize in WCAG 2.2, Section 508, and ADA compliance.",
        ogImage: {
            url: "https://www.testriq.com/OG/Accessibility-testing-og-image.webp",
            width: 2752,
            height: 1536,
            alt: "Accessibility Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "accessibility testing services",
            "wcag 2.2 compliance testing",
            "ada compliance testing",
            "section 508 compliance testing",
            "web accessibility testing",
            "mobile app accessibility testing",
            "screen reader testing",
            "digital inclusion services",
            "vpat accessibility testing",
            "inclusive design testing",
        ],
    });
}

export default function AccessibilityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed —
    // page title ended with "| Testriq" while the root layout's title
    // template ("%s | Testriq") added a second "| Testriq" suffix. og:title
    // and twitter:title now mirror the page title (were a different string).
    // ogImage.type "image/webp" added. 7 dynamic() imports converted to
    // direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    // F-44.1 batch 4: plain-text mirror of AccessibilityFAQSection UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What are accessibility testing services?",
            answer: "Accessibility testing services ensure that digital products, such as websites, mobile apps, and software, are usable by people with disabilities. This involves evaluating compliance with accessibility standards like WCAG, ADA, and Section 508, ensuring equal access and an inclusive user experience for all individuals.",
        },
        {
            question: "Why is accessibility testing important for websites?",
            answer: "Accessibility testing is crucial for websites to ensure legal compliance (e.g., ADA, WCAG), expand market reach to a broader audience, and enhance brand reputation. It improves the user experience for individuals with disabilities, preventing exclusion and potential legal challenges, while fostering an inclusive digital environment.",
        },
        {
            question: "What is the difference between automated and manual accessibility testing?",
            answer: "Automated accessibility testing uses software tools to quickly scan digital content for common accessibility issues, such as missing alt text or color contrast problems. It is efficient for large-scale checks but can only detect a fraction of issues. Manual accessibility testing involves human testers, often using assistive technologies like screen readers, to evaluate complex interactions and user flows, identifying nuanced issues that automated tools miss. Both are essential for comprehensive coverage.",
        },
        {
            question: "How to achieve WCAG 2.2 compliance?",
            answer: "Achieving WCAG 2.2 compliance involves conducting thorough accessibility audits, implementing guidelines for perceivable, operable, understandable, and robust content, and regularly testing with both automated tools and manual methods, including assistive technologies. It requires addressing new success criteria introduced in WCAG 2.2, such as those related to drag-and-drop interfaces and target size.",
        },
        {
            question: "What are the legal requirements for website accessibility?",
            answer: "Legal requirements for website accessibility vary by region but commonly include adherence to standards like the Americans with Disabilities Act (ADA) in the U.S., the Web Content Accessibility Guidelines (WCAG) internationally, and Section 508 for federal agencies. These laws mandate that digital content be accessible to individuals with disabilities, often requiring compliance with specific WCAG levels (e.g., AA).",
        },
    ];

    return (
        <div>
            <StructuredData data={accessibilityServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/accessibility-testing-services",
                    "Accessibility Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <AccessibilityHeroSection />
                <AccessibilitySolutionsSection />
                <AccessibilityWhySection />
                <AccessibilityServicesListSection />
                <AccessibilityProcessSection />
                <AccessibilityFAQSection />
                <AccessibilityAnyQuestions />
            </MainLayout>
        </div>
    );
}
