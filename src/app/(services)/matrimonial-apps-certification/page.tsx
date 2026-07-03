import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  matrimonialAppCertificationSchema,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";


export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Matrimonial App Certification  ",

  description: "Certify your matrimonial app for privacy, security, and performance. Testriq testing ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust.",
  keywords: [
    "Matrimonial App Certification",
    "matrimonial platform security",
    "privacy compliance",
    "GDPR for matrimonial apps",
    "ISO 27001 certification",
    "secure matrimonial apps",
    "CCPA compliance",
    "app certification for matchmaking",
    "user trust for dating apps",
    "QA for matrimonial apps"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/matrimonial-apps-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/matrimonial-apps-certification',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Matrimonial App Certification | Security, Privacy & Quality Compliance - Testriq',
    description: 'Certify your matrimonial app for privacy, security, and performance. Testriq testing ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust.',
    images: [
      {
        url: 'https://www.testriq.com/OG/Matrimonial-App-Certification-OG.webp',
        width: 1200,
        height: 630,
        alt: 'Matrimonial App Certification - Testriq QA Lab',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Matrimonial App Certification | Security, Privacy & Quality Compliance - Testriq',
    description: 'Certify your matrimonial app for privacy, security, and performance. Testriq testing ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust.',
    images: ['https://www.testriq.com/OG/Matrimonial-App-Certification-Twitter.webp'],
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



import MatrimonialAppHeroSection from "@/components/sections/MatrimonialAppHeroSection";

const MatrimonialAppCertificationPillars = dynamic(
  () => import("@/components/sections/MatrimonialAppCertificationPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCertificationProcess = dynamic(
  () => import("@/components/sections/MatrimonialAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppSecurityFeatures = dynamic(
  () => import("@/components/sections/MatrimonialAppSecurityFeatures"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppBenefits = dynamic(
  () => import("@/components/sections/MatrimonialAppBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCompliance = dynamic(
  () => import("@/components/sections/MatrimonialAppCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppTestingServices = dynamic(
  () => import("@/components/sections/MatrimonialAppTestingServices"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppFAQs = dynamic(
  () => import("@/components/sections/MatrimonialAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCTA = dynamic(
  () => import("@/components/sections/MatrimonialAppCTA"),
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
      name: "What is matrimonial app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matrimonial app certification is a comprehensive audit and certification program that ensures your matrimonial platform meets international standards for security, privacy, quality, and user safety.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the matrimonial app certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification process typically takes 12-18 working days, including initial assessment, testing phases, remediation support, and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What standards do you certify against?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We certify against ISO 27001 for security, GDPR for privacy, ISTQB standards for quality assurance, and industry-specific matrimonial app security guidelines.",
      },
    },
  ],
};

export default function MatrimonialAppsCertification() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div className="overflow-hidden">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={matrimonialAppCertificationSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/matrimonial-apps-certification", "Matrimonial App Certification")}
      />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <MatrimonialAppHeroSection />
        <MatrimonialAppCertificationPillars />
        <MatrimonialAppCertificationProcess />
        <MatrimonialAppSecurityFeatures />
        <MatrimonialAppBenefits />
        <MatrimonialAppCompliance />
        <MatrimonialAppTestingServices />
        <MatrimonialAppFAQs />
        <MatrimonialAppCTA />
      </MainLayout>
    </div>
  );
}

