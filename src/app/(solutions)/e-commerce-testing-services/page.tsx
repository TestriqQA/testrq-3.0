import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  ecommerceTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import EcommerceHeroSection from "@/components/sections/EcommerceHeroSection";
import EcommerceChallengesSection from "@/components/sections/EcommerceChallengesSection";
import EcommerceTestingServicesSection from "@/components/sections/EcommerceTestingServicesSection";
import EcommerceTestingProcessSection from "@/components/sections/EcommerceTestingProcessSection";
import EcommercePlatformsSection from "@/components/sections/EcommercePlatformsSection";
import EcommerceFAQSection from "@/components/sections/EcommerceFAQSection";
import EcommerceContactSection from "@/components/sections/EcommerceContactSection";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/e-commerce-testing-services",
    title: "E-Commerce Testing Services | PCI DSS 4.0 & Platform QA | Testriq",
    description:
      "Optimize conversions and security with Testriq's e-commerce testing. PCI DSS 4.0-compliant QA for Magento, Shopify, and WooCommerce digital commerce platforms.",
    ogImage: {
      url: "https://www.testriq.com/OG/E-commerce-Testing-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "E-Commerce Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "e-commerce testing",
      "online store qa",
      "shopping cart testing",
      "payment gateway testing",
      "mobile commerce testing",
      "ecommerce security testing",
      "cross-browser testing",
      "load testing",
      "pci dss 4.0 compliance",
      "ecommerce qa services",
    ],
  });
}

const EcommerceTestingPage: React.FC = () => {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title's missing space ("E-Commerce Testing |QA
  // Testing") fixed — now "E-Commerce Testing Services | PCI DSS 4.0
  // & Platform QA | Testriq" with "Services" word added and PCI DSS
  // surfaced as B2B differentiator. Description rewritten — was ~191
  // chars with "2026" anchor; now 160 chars, action-verb start, drops
  // time anchor. twitter:image unified with og:image (was a separate
  // E-commerce-Testing-Service-Twitter.webp). ogImage.type "image/webp"
  // added. Keywords lowercased. 0 dynamic() imports — already direct.
  // Breadcrumb already migrated in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={ecommerceTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/e-commerce-testing-services",
          "E-Commerce Testing"
        )}
      />
      <main className="min-h-screen bg-white">
        <EcommerceHeroSection />
        <EcommerceChallengesSection />
        <EcommerceTestingServicesSection />
        <EcommerceTestingProcessSection />
        <EcommercePlatformsSection />
        <EcommerceFAQSection />
        <EcommerceContactSection />
      </main>
    </div>
  );
};

export default EcommerceTestingPage;
