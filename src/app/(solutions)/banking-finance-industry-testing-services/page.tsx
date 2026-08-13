import React from "react";
import BankingHeroSection from "@/components/sections/BankingHeroSection";
import BankingChallengesSection from "@/components/sections/BankingChallengesSection";
import BankingTestingServicesSection from "@/components/sections/BankingTestingServicesSection";
import BankingToolsFrameworksSection from "@/components/sections/BankingToolsFrameworksSection";
import BankingComplianceSection from "@/components/sections/BankingComplianceSection";
import BankingROISection from "@/components/sections/BankingROISection";
import BankingFAQSection from "@/components/sections/BankingFAQSection";
import BankingContactSection from "@/components/sections/BankingContactSection";
import { Metadata } from "next";
import StructuredData, { bankingFinanceTestingServiceSchema, createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Banking & Financial Application Testing Services | testriq",
  description: "Protect your financial ecosystem with Testriq’s BFSI testing services. We ensure 100% audit pass rates, SOC2 Type II compliance, and security that withstands 300x more threats than other sectors.",
  keywords: [
    "banking testing solutions",
    "BFSI QA services",
    "PCI DSS compliance testing",
    "core banking validation",
    "mobile banking QA",
    "financial software testing",
    "banking automation testing",
    "regulatory compliance testing",
    "financial QA services",
    "SOX testing",
    "GDPR testing",
    "security testing for banks"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/banking-finance-industry-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/banking-finance-industry-testing-services',
    siteName: 'Testriq - Banking & Finance QA Services',
    title: 'Banking & Finance Testing Solutions | BFSI QA Services | Testriq',
    description: 'Ensure secure, compliant, and high-performance banking platforms with Testriq’s comprehensive BFSI testing solutions. PCI DSS, SOX, GDPR compliant QA services.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Banking-App-Testing-Services-og.webp',
        width: 1200,
        height: 800,
        alt: 'Banking & Finance Testing Solutions | Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Banking & Finance Testing Solutions | BFSI QA Services | Testriq',
    description: 'Secure your financial applications with Testriq’s expert BFSI testing services. Compliance, performance, and security all-in-one.',
    images: ['https://www.testriq.com/OG/Banking-App-Testing-Services-Twitter.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const BankingFinanceTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL;
  // terminal item also had missing space "Banking FinanceTesting Service" and a
  // 404 URL with extra trailing "s") to 2 canonical items with corrected name;
  // URL now structurally derived from pathname.
  return (
    <div>
      <StructuredData data={bankingFinanceTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/banking-finance-industry-testing-services",
          "Banking Finance Testing Service"
        )}
      />
      <main className="min-h-screen bg-white">
        <BankingHeroSection />
        <BankingChallengesSection />
        <BankingTestingServicesSection />
        <BankingToolsFrameworksSection />
        <BankingComplianceSection />
        {/* <BankingCaseStudiesSection /> */}
        <BankingROISection />
        <BankingFAQSection />
        <BankingContactSection />
      </main>
    </div>
  );
};

export default BankingFinanceTestingPage;

