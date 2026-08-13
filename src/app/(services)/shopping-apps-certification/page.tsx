import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  organizationSchema,
  shoppingAppCertificationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Shopping App Certification",

  description:
    "Certify your shopping and e-commerce apps for security, performance, and global compliance with PCI DSS, GDPR and CCPA-aligned testing that builds user trust.",
  keywords: [
    "shopping app certification",
    "e-commerce app testing",
    "secure payment gateway testing",
    "PCI DSS compliance",
    "GDPR e-commerce compliance",
    "data protection testing",
    "checkout optimization",
    "mobile app compliance testing",
    "fraud detection",
    "certified shopping apps",
    "e-commerce platform security",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/shopping-apps-certification",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/shopping-apps-certification",
    siteName: "Testriq - Shopping App Certification Services",
    title:
      "Shopping App Certification | Secure E-Commerce Testing & PCI Compliance | Testriq",
    description:
      "Certify your shopping and e-commerce apps for security, performance, and global compliance with PCI DSS, GDPR and CCPA-aligned testing that builds user trust.",
    images: [
      {
        url: "https://www.testriq.com/OG/shoping-adds-certification-og-image.webp",
        width: 2752,
        height: 1536,
        alt: "Shopping App Certification - Secure Testing & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Shopping App Certification | Secure E-Commerce Testing & PCI Compliance | Testriq",
    description:
      "Certify your shopping and e-commerce apps for security, performance, and global compliance with PCI DSS, GDPR and CCPA-aligned testing that builds user trust.",
    images: ["https://www.testriq.com/OG/shoping-adds-certification-og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import ShoppingAppHeroSection from "@/components/sections/ShoppingAppHeroSection";

const ShoppingAppCertificationPillars = dynamic(
  () => import("@/components/sections/ShoppingAppCertificationPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCertificationProcess = dynamic(
  () => import("@/components/sections/ShoppingAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppSecurityFeatures = dynamic(
  () => import("@/components/sections/ShoppingAppSecurityFeatures"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppBenefits = dynamic(
  () => import("@/components/sections/ShoppingAppBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);
const ShoppingAppTestingServices = dynamic(
  () => import("@/components/sections/ShoppingAppTestingServices"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppFAQs = dynamic(
  () => import("@/components/sections/ShoppingAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCTA = dynamic(
  () => import("@/components/sections/ShoppingAppCTA"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is shopping app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping app certification is a comprehensive audit and certification program that ensures your e-commerce platform meets international standards for security, payment processing, performance, and user experience.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the shopping app certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification process typically takes 10-16 working days, including initial assessment, security testing, performance optimization, and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What standards do shopping apps need to comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping apps must comply with PCI DSS for payment security, GDPR for privacy, ISO 27001 for information security, and various e-commerce industry standards for user experience and performance.",
      },
    },
  ],
};

export default function ShoppingAppsCertification() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL;
  // terminal name had trailing whitespace) to 2 canonical items;
  // URL now structurally derived from pathname.
  return (
    <div className="overflow-hidden">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={shoppingAppCertificationSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/shopping-apps-certification", "Shopping App Certification")}
      />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <ShoppingAppHeroSection scrollToId="shopping-app-certification-process" />
        <ShoppingAppCertificationPillars />
        <ShoppingAppCertificationProcess />
        <ShoppingAppSecurityFeatures />
        <ShoppingAppBenefits />
        <ShoppingAppTestingServices />
        <ShoppingAppFAQs />
        <ShoppingAppCTA />
      </MainLayout>
    </div>
  );
}
