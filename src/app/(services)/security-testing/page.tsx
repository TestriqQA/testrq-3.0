import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  securityTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import SecurityTestingHeroSection from "@/components/sections/SecurityTestingHeroSection";
import PenetrationTestingExplainer from "@/components/sections/PenetrationTestingExplainer";
import SecurityTestingChallenges from "@/components/sections/SecurityTestingChallenges";
import SecurityTestingComprehensiveSlider from "@/components/sections/SecurityTestingComprehensiveSlider";
import SecureGuardFramework from "@/components/sections/SecureGuardFramework";
import PenetrationTestingCoverage from "@/components/sections/PenetrationTestingCoverage";
import SecurityTestingWhyChooseTestriq from "@/components/sections/SecurityTestingWhyChooseTestriq";
import TestriqTCoE from "@/components/sections/TestriqTCoE";
import SecurityTestingToolsFramework from "@/components/sections/SecurityTestingToolsFramework";
import SecurityTestingCaseStudies from "@/components/sections/SecurityTestingCaseStudies";
import PenetrationTestingScopeLimits from "@/components/sections/PenetrationTestingScopeLimits";
import SecurityTestingFAQs from "@/components/sections/SecurityTestingFAQs";
import SecurityTestingReadyToEnsureQuality from "@/components/sections/SecurityTestingReadyToEnsureQuality";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  // SEO handoff (Sept 2026), PART A — repositioned onto "penetration testing
  // services" (9,900 global searches/month). Canonical and OG image are
  // deliberately unchanged, per the handoff's "do not change" list.
  //
  // Title/description are the handoff's copy trimmed to this repo's enforced
  // limits (S-1: title <=60, S-2: description <=160 — see
  // docs/seo-audit/fix-backlog.md). The handoff shipped 63 and 203; the 203
  // would have been truncated by Google mid-sentence, dropping the served
  // markets entirely. Trimming keeps the exact-match keyword front-loaded and
  // every element of the handoff's message. Cost of the trim: the title drops
  // the "| Testriq" brand suffix to fit under 60.
  return buildPageMetadata({
    pathname: "/security-testing",
    title: "Penetration Testing Services | VAPT & Ethical Hacking",
    description:
      "Penetration testing from certified security engineers. Web, API, mobile, network and cloud VAPT, CVSS-ranked and manually verified. US, UK, EU and UAE.",
    ogImage: {
      url: "https://www.testriq.com/OG/Security-service-og-image.webp",
      width: 2752,
      height: 1536,
      alt: "Security Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "penetration testing services",
      "vapt services",
      "vulnerability assessment and penetration testing",
      "web application penetration testing",
      "api penetration testing",
      "network penetration testing",
      "cloud penetration testing",
      "mobile app penetration testing",
      "ethical hacking services",
      "security testing services",
    ],
  });
}

export default function SecurityTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Description rewritten. og:title and twitter:title now
  // mirror page title. ogImage.type "image/webp" added. Keywords lowercased.
  // 9 dynamic() imports converted to direct ES imports. Breadcrumb already
  // migrated in PR-3 — unchanged.
  //
  // F-44.1: plain-text mirror of SecurityTestingFAQs UI content for FAQPage
  // JSON-LD. Every entry below must exist verbatim in the visible FAQ UI —
  // Google's FAQPage policy requires the markup to match what users see.
  //
  // SEO handoff (Sept 2026):
  //   - PART B: removed SecurityTestingROISection entirely. It carried the
  //     three out-of-date 2023 statistics ($4.45M / 82% / 95%) AND the
  //     "ROI of Security Testing" cards, which appeared word-for-word on
  //     /cyber-security-testing-services. The ROI block is kept there, not
  //     here. The component file was deleted — nothing else imported it.
  //   - PART C: three new sections added (Explainer after the hero, Coverage
  //     before "Why Choose Testriq", Scope Limits before the FAQs).
  //   - PART C FAQ: four new entries added below and in the UI; three older
  //     entries they duplicated were removed from both.
  const faqsForSchema = [
    {
      question: "What is security testing and why is it important?",
      answer: "Security testing is a comprehensive process of evaluating applications, systems, and networks to identify vulnerabilities, security weaknesses, and potential threats. It's crucial because cyber attacks are increasing in frequency and sophistication, and a single security breach can result in significant financial losses, regulatory penalties, and damage to your organization's reputation. Security testing helps identify and remediate vulnerabilities before malicious actors can exploit them.",
    },
    {
      question: "How often should we run a penetration test?",
      answer: "At minimum annually, and additionally after any significant architectural change, major release, or security incident. Some frameworks, PCI DSS in particular, set their own required frequency.",
    },
    {
      question: "What types of security testing do you offer?",
      answer: "We offer comprehensive security testing services including vulnerability assessments, penetration testing, web application security testing, mobile application security testing, API security testing, network security testing, cloud security assessments, compliance testing (PCI DSS, HIPAA, SOX, GDPR), source code security reviews, and security architecture reviews. Our services cover all aspects of your technology infrastructure.",
    },
    {
      question: "What is the difference between VAPT and penetration testing?",
      answer: "VAPT stands for Vulnerability Assessment and Penetration Testing, the two activities delivered together. The assessment finds and ranks weaknesses; the penetration test attempts to exploit them. Most enterprise engagements are VAPT rather than a penetration test alone, because the combination gives both breadth and depth.",
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
      question: "What do we need to provide before testing starts?",
      answer: "Scope confirmation, environment access or credentials for authenticated testing, a named technical contact, and written authorisation to test. We supply the authorisation template.",
    },
    {
      question: "How much do penetration testing services cost?",
      answer: "Cost depends on scope: the number of applications, endpoints and user roles in range, whether testing is authenticated, and the depth of manual testing required. A single web application is a very different engagement from a full network and cloud assessment. We scope every engagement before quoting, so you are not paying for coverage you do not need.",
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
        <PenetrationTestingExplainer />
        <SecurityTestingChallenges />
        <SecurityTestingComprehensiveSlider />
        <SecureGuardFramework />
        <PenetrationTestingCoverage />
        <SecurityTestingWhyChooseTestriq />
        <TestriqTCoE />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <PenetrationTestingScopeLimits />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
