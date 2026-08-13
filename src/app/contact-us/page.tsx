import React from "react";
import { Metadata } from "next";
import StructuredData, {
  contactUsPageSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";

const ContactHeroSection = dynamic(
  () => import("@/components/sections/ContactHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactMethodsSection = dynamic(
  () => import("@/components/sections/ContactMethodsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactFAQSection = dynamic(
  () => import("@/components/sections/ContactFAQSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ContactOfficeSection = dynamic(
  () => import("@/components/sections/ContactOfficeSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Contact Us Testriq QA Lab | Software Testing Services",
  description:
    "Get in touch with Testriq QA Lab for expert software testing services. Reach out for project inquiries, careers, or collaborations. We respond quickly & securely.",
  keywords: [
    "contact Testriq",
    "QA consultation",
    "software testing support",
    "schedule QA call",
    "QA expert contact",
    "Testriq support",
    "software QA consultation",
    "test automation support",
    "contact software testers",
    "software testing company contact",
  ],
 metadataBase: new URL('https://www.testriq.com/'),
 alternates: {
  canonical: 'https://www.testriq.com/contact-us',
  },
  openGraph: {
    title: "Contact Us | Get in Touch with Testriq QA Experts",
    description: "Reach out to Testriq for your QA and software testing needs.",
    type: "website",
    url: "https://www.testriq.com/contact-us",
    images: [
      {
        url: "https://www.testriq.com/OG/Contact-Us-Og.webp",
        width: 1200,
        height: 800,
        alt: "Testriq Contact Us OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch with Testriq QA Experts",
    description: "Reach out to Testriq for your QA and software testing needs.",
    images: [
      {
        url: "https://www.testriq.com/OG/Contact-Us-Twitter.webp",
        width: 1200,
        height: 675,
        alt: "Testriq Contact Us Twitter Image",
      },
    ],
  },
};

const ContactUsPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node — wrong section
  // entirely — pointing at /contact-us; terminal item had 404 URL /contact-uss
  // with extra trailing "s") to 2 canonical items; URL now structurally derived
  // from pathname.
  return (
    <div className="scroll-smooth">
      <StructuredData data={contactUsPageSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/contact-us", "Contact Us")}
      />
      <main className="min-h-screen bg-gray-50">
        <ContactHeroSection />
        <ContactMethodsSection />
        <ContactFAQSection />
        <ContactOfficeSection />
      </main>
    </div>
  );
};

export default ContactUsPage;
