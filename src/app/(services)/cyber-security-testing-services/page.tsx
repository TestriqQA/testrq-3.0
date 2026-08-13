import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    cyberSecurityServiceSchema,
    createCanonicalBreadcrumb,
    createFaqPageSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import CyberSecurityHeroSection from "@/components/sections/CyberSecurityHeroSection";
import SecurityTestingCrucialSection from "@/components/sections/SecurityTestingCrucialSection";
import SecurityTestingServicesGrid from "@/components/sections/SecurityTestingServicesGrid";
import SecurityTestingMethodology from "@/components/sections/SecurityTestingMethodology";
import CyberSecurityROISection from "@/components/sections/CyberSecurityROISection";
import CyberSecurityFAQs from "@/components/sections/CyberSecurityFAQs";
import CyberSecurityCTASection from "@/components/sections/CyberSecurityCTASection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/cyber-security-testing-services",
        title: "Cyber Security Testing & Penetration Testing | Testriq",
        description:
            "Fortify your defenses with Testriq's cyber security testing. VAPT, vulnerability assessments, and ISTQB & CEH-certified ethical hacking for enterprise teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/Cyber-security-testing-ogimage.webp",
            width: 2752,
            height: 1536,
            alt: "Cyber Security Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "cyber security testing services",
            "penetration testing services",
            "vulnerability assessment services",
            "security audit services",
            "application security testing",
            "infrastructure security audit",
            "ethical hacking services",
            "istqb certified security testing",
            "vapt services",
            "compliance audits gdpr hipaa soc2",
        ],
    });
}

export default function CyberSecurityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Description rewritten — was ~241 chars (way over
    // Google snippet limit) with "2026 cyber threats" time anchor; now
    // 157 chars, action-verb start, drops time anchor, surfaces VAPT +
    // certifications. Keywords lowercased. 6 dynamic() imports converted
    // to direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    // F-44.1 batch 2: plain-text mirror of CyberSecurityFAQs UI content for FAQPage JSON-LD.
    const faqsForSchema = [
        {
            question: "What is the difference between a vulnerability assessment and a penetration test?",
            answer: "A vulnerability assessment identifies and reports potential security weaknesses in a system, application, or network. It's like a doctor's check-up, listing all potential health issues. A penetration test goes a step further by actively exploiting identified vulnerabilities to determine the extent of potential damage and the effectiveness of existing security controls. It simulates a real-world attack to assess the actual risk.",
        },
        {
            question: "How often should a company perform a security audit for compliance?",
            answer: "The frequency depends on several factors, including industry regulations, the sensitivity of data handled, and the rate of changes to your IT environment. For highly regulated industries (e.g., finance, healthcare), annual or bi-annual audits are often mandatory. For others, a comprehensive audit at least once a year, coupled with continuous monitoring and targeted testing after significant system changes, is recommended.",
        },
        {
            question: "How does security testing fit into the DevSecOps lifecycle?",
            answer: "In a DevSecOps model, security testing is integrated throughout the entire software development lifecycle, rather than being a separate, late-stage activity. This means security checks, vulnerability scans, and penetration tests are performed continuously from the design phase through development, testing, and deployment. This 'shift-left' approach helps identify and remediate security flaws early.",
        },
        {
            question: "How much does a professional penetration test cost in 2026?",
            answer: "The cost varies significantly based on scope, complexity, and the type of testing (e.g., black-box, white-box). Factors include network size and specific compliance needs. Testriq provides customized quotes after a thorough assessment. Contact us for a free consultation to receive a tailored estimate.",
        },
    ];

    return (
        <div>
            <StructuredData data={cyberSecurityServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/cyber-security-testing-services",
                    "Cyber Security Testing"
                )}
            />
            <StructuredData data={createFaqPageSchema(faqsForSchema)} />
            <MainLayout>
                <CyberSecurityHeroSection />
                <SecurityTestingCrucialSection />
                <SecurityTestingServicesGrid />
                <SecurityTestingMethodology />
                <CyberSecurityROISection />
                <CyberSecurityFAQs />
                <CyberSecurityCTASection />
            </MainLayout>
        </div>
    );
}
