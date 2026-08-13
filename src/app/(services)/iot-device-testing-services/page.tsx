import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  createFaqPageSchema,
  iotDeviceTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import IoTTestingHeroSection from "@/components/sections/IoTTestingHeroSection";
import IoTComprehensiveSlider from "@/components/sections/IoTComprehensiveSlider";
import IoTCardSlider from "@/components/sections/IoTCardSlider";
import IoTProvenTestingProcess from "@/components/sections/IoTProvenTestingProcess";
import IoTComplianceTable from "@/components/sections/IoTComplianceTable";
import IoTWhyChooseTestriq from "@/components/sections/IoTWhyChooseTestriq";
import IoTToolsFramework from "@/components/sections/IoTToolsFramework";
import IoTCaseStudies from "@/components/sections/IoTCaseStudies";
import IoTFAQs from "@/components/sections/IoTFAQs";
import IoTAnyQuestions from "@/components/sections/IoTAnyQuestions";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/iot-device-testing-services",
    title: "IoT Testing Services | Firmware, MQTT & Device QA | Testriq",
    description:
      "Validate connected devices with Testriq's IoT testing services. Firmware security (ISO 27404), MQTT/Zigbee compatibility, and 5G-edge resilience testing.",
    ogImage: {
      url: "https://www.testriq.com/OG/IoT-Testing-Services-og.webp",
      width: 1200,
      height: 800,
      alt: "Global IoT Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "iot testing services",
      "firmware security testing",
      "mqtt protocol testing",
      "5g-edge iot resilience",
      "iso/iec 27404 compliance",
      "etsi en 303 645 iot security",
      "smart device quality assurance",
      "industrial iot penetration testing",
      "fota update validation",
      "zettabyte scale performance testing",
    ],
  });
}

export default function IoTDeviceTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title separator normalized from ":" to "|" for
  // consistency with the rest of the site. Description rewritten — was
  // ~189 chars with "2026 connected ecosystem" + "21.1B+ devices"
  // anchors, now 153, action-verb start, surfaces ISO 27404 +
  // protocols. twitter:image unified with og:image (was a separate
  // Iot-Testing_services-twitter.webp with mixed underscore/casing).
  // ogImage.type "image/webp" added. Keywords lowercased. 10 dynamic()
  // imports converted to direct ES imports. Breadcrumb already migrated
  // in PR-3 — unchanged.
  // F-44.1 batch 4: plain-text mirror of IoTFAQs UI content for FAQPage JSON-LD.
  const faqsForSchema = [
    {
      question: "What is the most critical challenge in testing IoT devices in 2026?",
      answer: "The most critical challenge is device diversity and interoperability. To ensure your product works across various protocols (Zigbee, MQTT) and firmware versions, we use a standardized ISO/IEC 29119 approach for consistent test design.",
    },
    {
      question: "How to test IoT connection in remote locations?",
      answer: "To test IoT connection in remote locations, we use network simulators to inject packet loss, jitter, and high latency. We also perform field testing to validate how the device handles Radio Frequency (RF) interference and satellite/cellular handovers using advanced network analyzers.",
    },
    {
      question: "Why is security testing for medical IoT devices so important?",
      answer: "Security testing for medical IoT devices is vital because a breach can directly impact patient safety. Adhering to HIPAA and the Cyber Resilience Act (CRA) ensures we encrypt patient data and harden devices against OT ransomware and unauthorized firmware tampering.",
    },
    {
      question: "What are the benefits of automating firmware regression tests for smart sensors?",
      answer: "Automating firmware regression tests ensures that every new update (FOTA) does not break existing features. Automation slashes testing cycles from weeks to hours, speeding up development and getting your IoT products to market faster.",
    },
    {
      question: "How do you perform performance testing for smart home ecosystems?",
      answer: "We simulate a connected device environment where multiple smart devices (lights, thermostats, cameras) interact simultaneously. We measure edge computing latency and the cloud backend's ability to handle data spikes without service degradation under peak workloads.",
    },
  ];

  return (
    <div>
      <StructuredData data={iotDeviceTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/iot-device-testing-services",
          "IoT Testing Service"
        )}
      />
      <StructuredData data={createFaqPageSchema(faqsForSchema)} />
      <MainLayout>
        <IoTTestingHeroSection />
        <IoTComprehensiveSlider />
        <IoTCardSlider />
        <IoTProvenTestingProcess />
        <IoTComplianceTable />
        <IoTWhyChooseTestriq />
        <IoTToolsFramework />
        <IoTCaseStudies />
        <IoTFAQs />
        <IoTAnyQuestions />
      </MainLayout>
    </div>
  );
}
