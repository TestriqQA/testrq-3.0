import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  smartDeviceTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import SmartDeviceTestingHeroSection from "@/components/sections/SmartDeviceTestingHeroSection";
import SmartDeviceComprehensiveSlider from "@/components/sections/SmartDeviceComprehensiveSlider";
import SmartDeviceProvenTestingProcess from "@/components/sections/SmartDeviceProvenTestingProcess";
import SmartDeviceWhyChooseTestriq from "@/components/sections/SmartDeviceWhyChooseTestriq";
import SmartDeviceToolsFramework from "@/components/sections/SmartDeviceToolsFramework";
import SmartDeviceCaseStudies from "@/components/sections/SmartDeviceCaseStudies";
import SmartDeviceFAQs from "@/components/sections/SmartDeviceFAQs";
import SmartDeviceAnyQuestions from "@/components/sections/SmartDeviceAnyQuestions";
import SmartDeviceComplianceTable from "@/components/sections/SmartDeviceComplianceTable";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/smart-device-testing-services",
    title: "Enterprise Smart Device & IoT Testing Services | Testriq",
    description:
      "Validate connected devices with Testriq's smart device and IoT testing. ISO 29119-3 compliance, 5G/Wi-Fi 6 stability, battery life, and security penetration QA.",
    ogImage: {
      url: "https://www.testriq.com/OG/Smart-Device-Testing-Service-Og.webp",
      width: 1200,
      height: 800,
      alt: "Smart Device Testing Services - Testriq QA Lab",
      type: "image/webp",
    },
    keywords: [
      "enterprise smart device testing services",
      "iot device testing",
      "iso 29119-3 compliance",
      "wearable device qa",
      "smart home device validation",
      "5g and protocol testing",
      "iot security penetration testing",
      "battery life optimization",
      "digital twin iot simulation",
      "machine-to-machine communication testing",
      "zigbee and mqtt validation",
    ],
  });
}

export default function SmartDeviceTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped " USA" geo-restriction (hurt global
  // SEO). Description rewritten — was ~241 chars with "2026 connected
  // era" anchor; now 160 chars, action-verb start, surfaces ISO 29119-3
  // + 5G/Wi-Fi 6 + battery. twitter:image FIXED — was pointing at the
  // wrong asset (Telecommunication-Testing-Service-Twitter.webp from
  // a different service page); now unified with og:image (Smart-Device-
  // Testing-Service-Og.webp). ogImage.type "image/webp" added. Keyword
  // "IoT Device Testing USA" normalized to "iot device testing". Other
  // keywords lowercased. Section components were already direct imports.
  // Breadcrumb already migrated in PR-3 — unchanged.
  // F-44.1 batch 4: plain-text mirror of SmartDeviceFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What are the best practices for IoT security testing in 2026?",
      answer: "To meet 2026 security standards, you must implement m-TLS device identities and secure all OTA updates. Additionally, regular penetration testing is essential to find and patch firmware vulnerabilities before they can be exploited in the field.",
    },
    {
      question: "How to test compatibility between Alexa and smart plugs?",
      answer: "To validate Alexa and smart plug integration, we model the link between the smart home hub and the hardware. We ensure commands trigger without delay and that the companion app always reflects the real-time state of the device, even under poor network conditions.",
    },
    {
      question: "Why is battery life optimization critical for wearable health trackers?",
      answer: "Performance testing for wearable health trackers is vital because users expect a 'set it and forget it' experience. Inefficient sensor polling frequency or background syncs can cause battery consumption issues that lead to high product return rates and brand dissatisfaction.",
    },
    {
      question: "What is the role of Digital Twin Simulation in IoT testing?",
      answer: "Digital Twin Simulation allows us to create a virtual replica of your device and its environment. This approach is essential for scalability testing. We provide rigorous design validation to ensure your cloud backend meets the demands of high-density device deployments, modeling up to one million concurrent connections before hardware launch.",
    },
    {
      question: "How do you perform sensor accuracy testing?",
      answer: "Sensor accuracy testing involves comparing device data (motion, heart rate, temperature) against 'Gold Standard' medical or industrial equipment. We test devices across various high-intensity scenarios, such as workouts for wearables, ensuring that data variance remains within a strict 5% margin.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={smartDeviceTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/smart-device-testing-services",
          "Smart Device Testing Service"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <SmartDeviceTestingHeroSection />
      <SmartDeviceComplianceTable />
      <SmartDeviceComprehensiveSlider />
      <SmartDeviceProvenTestingProcess />
      <SmartDeviceWhyChooseTestriq />
      <SmartDeviceToolsFramework />
      <SmartDeviceCaseStudies />
      <SmartDeviceFAQs />
      <SmartDeviceAnyQuestions />
    </div>
  );
}
