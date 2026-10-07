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
    // SEO handoff (Sept 2026), PART E — narrowed from "cyber security testing +
    // penetration testing" to compliance auditing only. This page and
    // /security-testing were targeting the same query set with near-identical
    // content, which is the stated reason neither ranked. /security-testing now
    // owns penetration-testing intent; this page owns compliance-audit intent.
    //
    // Canonical is unchanged — no redirect is required and no page is deleted.
    //
    // Title is the handoff's copy trimmed to this repo's <=60 limit (S-1); the
    // handoff shipped 65. "PCI DSS" leaves the title but is carried by the
    // description, the H2s and the body copy. No description was supplied by the
    // handoff, so this one is written to match the page's new subject — the old
    // one advertised "VAPT, vulnerability assessments and ethical hacking",
    // which no longer describes anything on the page.
    return buildPageMetadata({
        pathname: "/cyber-security-testing-services",
        title: "Cyber Security Compliance Audits | GDPR & HIPAA | Testriq",
        description:
            "Cyber security compliance audits for GDPR, HIPAA, PCI DSS, SOC 2 and ISO 27001. Control-by-control gap analysis, evidence register and remediation plan.",
        ogImage: {
            url: "https://www.testriq.com/OG/Cyber-security-testing-ogimage.webp",
            width: 2752,
            height: 1536,
            alt: "Cyber Security Testing Services - Testriq",
            type: "image/webp",
        },
        keywords: [
            "cyber security compliance audit",
            "compliance audit services",
            "gdpr compliance audit",
            "hipaa compliance audit",
            "pci dss compliance audit",
            "soc 2 readiness assessment",
            "iso 27001 control review",
            "information security audit",
            "cyber risk assessment services",
            "security audit services",
        ],
    });
}

export default function CyberSecurityTestingPage() {
    // TODO(seo phase-4): Migrated from static `export const metadata` to
    // generateMetadata + buildPageMetadata. Double-brand title fixed via
    // title.absolute. Keywords lowercased. 6 dynamic() imports converted to
    // direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
    //
    // F-44.1 batch 2: plain-text mirror of CyberSecurityFAQs UI content for
    // FAQPage JSON-LD. Every entry below must exist verbatim in the visible FAQ
    // UI — Google's FAQPage policy requires the markup to match what users see.
    //
    // SEO handoff (Sept 2026) PART E: two penetration-testing FAQs were removed
    // from both the UI and this mirror — "What is the difference between a
    // vulnerability assessment and a penetration test?" (now answered on
    // /security-testing as the VAPT question) and "How much does a professional
    // penetration test cost in 2026?" (now answered on /security-testing without
    // the time anchor).
    const faqsForSchema = [
        {
            question: "How often should a company perform a security audit for compliance?",
            answer: "The frequency depends on several factors, including industry regulations, the sensitivity of data handled, and the rate of changes to your IT environment. For highly regulated industries (e.g., finance, healthcare), annual or bi-annual audits are often mandatory. For others, a comprehensive audit at least once a year, coupled with continuous monitoring and targeted testing after significant system changes, is recommended.",
        },
        {
            question: "How does security testing fit into the DevSecOps lifecycle?",
            answer: "In a DevSecOps model, security testing is integrated throughout the entire software development lifecycle, rather than being a separate, late-stage activity. This means security checks, vulnerability scans, and penetration tests are performed continuously from the design phase through development, testing, and deployment. This 'shift-left' approach helps identify and remediate security flaws early.",
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
