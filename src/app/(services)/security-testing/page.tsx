import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  securityTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import SecurityTestingHeroSection from "@/components/sections/SecurityTestingHeroSection";
import SecurityTestingChallenges from "@/components/sections/SecurityTestingChallenges";
import SecurityTestingComprehensiveSlider from "@/components/sections/SecurityTestingComprehensiveSlider";
import SecureGuardFramework from "@/components/sections/SecureGuardFramework";
import SecurityTestingROISection from "@/components/sections/SecurityTestingROISection";
import SecurityTestingWhyChooseTestriq from "@/components/sections/SecurityTestingWhyChooseTestriq";
import TestriqTCoE from "@/components/sections/TestriqTCoE";
import SecurityTestingToolsFramework from "@/components/sections/SecurityTestingToolsFramework";
import SecurityTestingCaseStudies from "@/components/sections/SecurityTestingCaseStudies";
import SecurityTestingFAQs from "@/components/sections/SecurityTestingFAQs";
import SecurityTestingReadyToEnsureQuality from "@/components/sections/SecurityTestingReadyToEnsureQuality";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/security-testing",
    title: "Security Testing | VAPT & Penetration Testing | Testriq",
    description:
      "Protect digital assets with Testriq's security testing services. VAPT, application security audits, and ISO 29119-aligned cyber resilience for enterprise teams.",
    ogImage: {
      url: "https://www.testriq.com/OG/Security-service-og-image.webp",
      width: 1200,
      height: 630,
      alt: "Security Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "security testing services",
      "vapt services",
      "penetration testing",
      "application security audits",
      "iso 29119 security testing",
      "cyber resilience testing",
      "enterprise security qa",
      "ethical hacking services",
    ],
  });
}

export default function SecurityTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title fixed "Services & ... Services" duplication
  // (was "Security Testing Services & Pen-testing Services | Testriq",
  // now leads with primary keyword + VAPT/Penetration as a clear
  // qualifier). Description rewritten — was ~191 chars with "2026"
  // anchor; now 160 chars, action-verb start, surfaces VAPT + ISO
  // 29119. og:title and twitter:title now mirror page title (og had
  // a third, different description string). ogImage.type "image/webp"
  // added. Keywords lowercased. 9 dynamic() imports converted to
  // direct ES imports. Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1: plain-text mirror of SecurityTestingFAQs UI content for FAQPage JSON-LD.
  // 9 top FAQs sampled across General Security / Penetration Testing / Compliance / Implementation categories.
  const faqsForSchema = [
    {
      question: "What is security testing and why is it important?",
      answer: "Security testing is a comprehensive process of evaluating applications, systems, and networks to identify vulnerabilities, security weaknesses, and potential threats. It's crucial because cyber attacks are increasing in frequency and sophistication, and a single security breach can result in significant financial losses, regulatory penalties, and damage to your organization's reputation. Security testing helps identify and remediate vulnerabilities before malicious actors can exploit them.",
    },
    {
      question: "How often should security testing be performed?",
      answer: "Security testing frequency depends on several factors including your industry, regulatory requirements, and risk profile. We recommend continuous security monitoring with formal assessments quarterly for high-risk environments, semi-annually for medium-risk environments, and annually for lower-risk environments. Additionally, security testing should be performed whenever significant changes are made to your systems, applications, or infrastructure.",
    },
    {
      question: "What types of security testing do you offer?",
      answer: "We offer comprehensive security testing services including vulnerability assessments, penetration testing, web application security testing, mobile application security testing, API security testing, network security testing, cloud security assessments, compliance testing (PCI DSS, HIPAA, SOX, GDPR), source code security reviews, and security architecture reviews. Our services cover all aspects of your technology infrastructure.",
    },
    {
      question: "What is the difference between vulnerability assessment and penetration testing?",
      answer: "Vulnerability assessment is an automated process that identifies and catalogs potential security weaknesses in your systems. Penetration testing goes further by attempting to exploit these vulnerabilities to demonstrate real-world attack scenarios. While vulnerability assessments provide a broad overview of security issues, penetration testing provides proof-of-concept exploits and demonstrates the actual business impact of security vulnerabilities.",
    },
    {
      question: "Will penetration testing disrupt our business operations?",
      answer: "Our penetration testing is designed to minimize business disruption. We work closely with your team to schedule testing during appropriate windows, use controlled testing methodologies, and maintain constant communication throughout the process. We can perform testing in production environments with careful controls or in staging environments that mirror your production systems. Our goal is to identify security issues without impacting your business operations.",
    },
    {
      question: "What deliverables do you provide after penetration testing?",
      answer: "We provide comprehensive reports including an executive summary for leadership, detailed technical findings with proof-of-concept exploits, risk ratings using industry-standard frameworks (CVSS), prioritized remediation recommendations, and a remediation roadmap. We also offer post-testing support including remediation validation, security improvement recommendations, and ongoing security consultation to help you address identified issues.",
    },
    {
      question: "Which compliance standards do you help organizations achieve?",
      answer: "We help organizations achieve compliance with major security standards including PCI DSS, HIPAA, SOX, GDPR, ISO 27001, NIST Cybersecurity Framework, FedRAMP, and industry-specific regulations. Our compliance testing ensures your organization meets all required security controls and documentation requirements.",
    },
    {
      question: "How do you ensure GDPR compliance in security testing?",
      answer: "Our GDPR compliance testing includes comprehensive data protection impact assessments, privacy by design validation, data encryption verification, access control testing, data retention policy validation, breach notification procedure testing, and user rights implementation verification. We ensure that personal data is properly protected throughout its lifecycle and that your organization can demonstrate compliance with GDPR requirements.",
    },
    {
      question: "What is your approach to testing cloud environments?",
      answer: "Our cloud security testing approach includes comprehensive assessment of cloud configurations, identity and access management (IAM) validation, data encryption verification, network security testing, container and serverless security assessment, compliance validation, and cloud-specific threat modeling. We have expertise in AWS, Azure, Google Cloud Platform, and hybrid cloud environments, ensuring comprehensive security coverage across your cloud infrastructure.",
    },
  ];

  return (
    <div>
      <StructuredData data={securityTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/security-testing", "Security Testing")}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <SecurityTestingHeroSection />
        <SecurityTestingChallenges />
        <SecurityTestingComprehensiveSlider />
        <SecureGuardFramework />
        <SecurityTestingROISection />
        <SecurityTestingWhyChooseTestriq />
        <TestriqTCoE />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
