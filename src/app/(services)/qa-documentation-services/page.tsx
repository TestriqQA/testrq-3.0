import React from 'react';
import QADocumentationHeroSection from '@/components/sections/QADocumentationHeroSection';
import QADocumentationChallenges from '@/components/sections/QADocumentationChallenges';
import QADocumentationComprehensiveSlider from '@/components/sections/QADocumentationComprehensiveSlider';
import QADocumentationProvenTestingProcess from '@/components/sections/QADocumentationProvenTestingProcess';
import QADocumentationWhyChooseTestriq from '@/components/sections/QADocumentationWhyChooseTestriq';
import QADocumentationToolsFramework from '@/components/sections/QADocumentationToolsFramework';
import QADocumentationCaseStudies from '@/components/sections/QADocumentationCaseStudies';
import QADocumentationFAQs from '@/components/sections/QADocumentationFAQs';
import QADocumentationReadyToEnsureQuality from '@/components/sections/QADocumentationReadyToEnsureQuality';
import { Metadata } from 'next';
import StructuredData, { createCanonicalBreadcrumb, createFaqPageSchema, qaDocumentationServiceSchema } from '@/components/seo/StructuredData';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Analyze Data to Improve QA Team Performance",
  description: "Professional QA documentation services: audit-ready, scalable test documentation aligned with ISO/IEC/IEEE 29119-3 standards for fast, quality-assured delivery.",
  keywords: [
    "QA documentation services",
    "test management",
    "ISO/IEC/IEEE 29119-3",
    "test case writing",
    "test plan strategy",
    "compliance documentation",
    "traceability gap",
    "Testriq QA documentation"
  ],
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/qa-documentation-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/qa-documentation-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Analyze Data to Improve QA Team Performance | Testriq',
    description: 'Enterprise-grade QA documentation services. Bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems.',
    images: [
      {
        url: 'https://www.testriq.com/OG/QA-Documentation-Service-Og.webp',
        width: 1200,
        height: 800,
        alt: 'QA Documentation Services by Testriq',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Analyze Data to Improve QA Team Performance | Testriq',
    description: 'Enterprise-grade QA documentation services. Bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems.',
    images: ['https://www.testriq.com/OG/QA-Documentation-service-Twitter.webp'],
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



const QADocumentationServicesPage = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  // F-44.1 batch 4: plain-text mirror of QADocumentationFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What are the essential components of QA documentation?",
      answer: "The core parts are the Master Test Plan and Test Case Specifications. We also include the RTM, Defect Reports, and a final Test Summary Report. All these should ideally follow the ISO/IEC/IEEE 29119-3 standard for global consistency.",
    },
    {
      question: "Why is documentation important in QA?",
      answer: "Documentation ensures traceability, facilitates knowledge transfer, satisfies regulatory audits (like FDA or ISO), and provides a baseline for automated testing. Without it, software quality becomes 'tribal knowledge,' which is a major risk for scaling companies.",
    },
    {
      question: "Can you provide QA documentation for regulatory compliance audits?",
      answer: "Yes. We specialize in creating 'Audit-Ready' artifacts. We provide validation protocols and traceability matrices. These assets meet the strict requirements of FDA 21 CFR Part 11 and HIPAA.",
    },
    {
      question: "Do you offer templates for comprehensive QA documentation?",
      answer: "Yes, we provide a full suite of QA documentation templates. You can customize these to fit your specific tech stack and industry needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={qaDocumentationServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/qa-documentation-services",
          "QA Documentation Services"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <QADocumentationHeroSection />
      <QADocumentationChallenges />
      <QADocumentationComprehensiveSlider />
      <QADocumentationProvenTestingProcess />
      <QADocumentationWhyChooseTestriq />
      <QADocumentationToolsFramework />
      <QADocumentationCaseStudies />
      <QADocumentationFAQs />
      <QADocumentationReadyToEnsureQuality />
    </div>
  );
};

export default QADocumentationServicesPage;

