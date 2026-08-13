import React from "react";
import IoTHeroSection from "@/components/sections/IoTApplianceHeroSection";
import IoTChallengesSection from "@/components/sections/IoTApplianceChallengesSection";
import IoTTestingServicesSection from "@/components/sections/IoTApplianceTestingServicesSection";
import IoTTestingProcessSection from "@/components/sections/IoTApplianceTestingProcessSection";
import IoTEcosystemSection from "@/components/sections/IoTApplianceEcosystemSection";
import IoTToolsFrameworkSection from "@/components/sections/IoTApplianceToolsFrameworkSection";
import IoTCaseStudies from "@/components/sections/IoTCaseStudies";
import IoTFAQSection from "@/components/sections/IoTApplianceFAQSection";
import IoTContactSection from "@/components/sections/IoTApplianceContactSection";
import { Metadata } from "next";
import StructuredData, { createCanonicalBreadcrumb, iotTestingServiceSchema } from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "IoT Appliances and apps Testing Services for Smart Devices",
  description: "Testriq offers end-to-end IoT appliances and apps testing services for connected devices, ensuring secure, scalable, and high-performance applications across ecosystems.",
  keywords: [
    "IoT testing",
    "smart device testing",
    "connected device QA",
    "IoT QA services",
    "edge computing testing",
    "IoT security testing",
    "IoT protocol validation",
    "IoT cloud integration testing",
    "IoT performance testing",
    "IoT automation testing"
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/iot-appliances-and-apps-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/iot-appliances-and-apps-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title: "IoT Testing Solutions – Smart Device & Connected App QA | Testriq",
    description: "Ensure flawless performance, connectivity, and security across your IoT ecosystem. Testriq offers specialized IoT testing services for smart devices, edge computing, protocol validation, and cloud integration.",
    images: [
      {
        url: "https://www.testriq.com/OG/IoT-Testing-Service-Og.webp",
        width: 1200,
        height: 800,
        alt: "IoT Testing Solutions by Testriq"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "IoT Testing Solutions – Smart Device & Connected App QA | Testriq",
    description: "Testriq ensures end-to-end QA for IoT systems including devices, edge, cloud, and mobile apps. Reduce latency, improve uptime, and secure your IoT ecosystem.",
    images: ["https://www.testriq.com/OG/IoT-Testing-Service-Twitter.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
};


const IoTTestingPage: React.FC = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node had a 404 URL
  // with extra trailing "s"; terminal item had lowercase "iot" typo and the same
  // bad URL) to 2 canonical items with corrected casing; URL now structurally
  // derived from pathname.
  return (
    <div>
            <StructuredData data={iotTestingServiceSchema} />
            <StructuredData
              data={createCanonicalBreadcrumb(
                "/iot-appliances-and-apps-testing-services",
                "IoT Testing Service"
              )}
            />
    <main className="min-h-screen bg-white">
      <IoTHeroSection />
      <IoTChallengesSection />
      <IoTTestingServicesSection />
      <IoTTestingProcessSection />
      <IoTEcosystemSection />
      <IoTToolsFrameworkSection />
      <IoTCaseStudies />
      <IoTFAQSection />
      <IoTContactSection />
    </main>
    </div>
  );
};

export default IoTTestingPage;

