"use client";

import Link from "next/link";
import React, { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaWifi,
  FaShieldAlt,
  FaCloud,
  FaDollarSign,
  FaClock,
  FaMicrochip,
} from "react-icons/fa";

const IoTFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: FaWifi,
      title: "General IoT Testing",
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: (<Link href="/blog/post/how-to-test-iot-devices-for-reliability-2">What types of IoT devices do you test?</Link>),
          answer:
            "We test a wide range of IoT devices including smart home devices (thermostats, lighting, security cameras), industrial IoT sensors and actuators, wearables, connected vehicles, medical IoT devices, and smart city infrastructure. Our IoT testing expertise spans communication protocols like MQTT, Zigbee, BLE, and LoRaWAN, as well as diverse hardware platforms and edge-to-cloud environments.",
        },
        {
          question: "How long does IoT testing typically take?",
          answer:
            "Testing duration varies significantly based on the complexity of the IoT ecosystem, number of devices, protocols involved, and testing scope. A basic smart device might take 2-4 weeks, while a complex industrial IoT platform could take several months. We provide detailed timelines after an initial assessment.",
        },
        {
          question:
            "Do you test the entire IoT ecosystem (device, edge, cloud, app)?",
          answer:
            "Absolutely. Our approach is holistic. We test from the device level (firmware, hardware interaction) through edge computing, connectivity protocols, cloud platform integration, data analytics, and user applications (mobile/web) to ensure seamless end-to-end functionality and security.",
        },
      ],
    },
    {
      icon: FaShieldAlt,
      title: (<Link href="/blog/post/why-is-iot-security-testing-important">IoT Security Testing</Link>),
      color: "from-green-500 to-green-600",
      faqs: [
        {
          question:
            "What security vulnerabilities do you look for in IoT devices?",
          answer:
            "We identify common and advanced vulnerabilities including insecure default credentials, unpatched firmware, insecure network services, weak encryption, insufficient data protection, physical tampering risks, and insecure APIs. Our testing includes penetration testing, vulnerability scanning, and threat modeling.",
        },
        {
          question: "Do you test for compliance with IoT security standards?",
          answer:
            (<>Yes, we ensure your IoT solutions comply with relevant security standards and regulations such as GDPR, CCPA, <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">HIPAA (for healthcare IoT)</Link>, NIST IoT cybersecurity guidelines, and industry-specific certifications. We provide detailed reports and recommendations for compliance.</>),
        },
        {
          question: "How do you handle data privacy in IoT testing?",
          answer:
            "Data privacy is paramount. We implement strict protocols to protect sensitive data during testing, including data anonymization, secure test environments, and adherence to privacy-by-design principles. We verify that data collection, storage, and transmission comply with privacy regulations.",
        },
      ],
    },
    {
      icon: FaCloud,
      title: "Connectivity & Cloud Integration",
      color: "from-purple-500 to-purple-600",
      faqs: [
        {
          question: "Which IoT communication protocols do you support?",
          answer:
            "We support a wide array of protocols including Wi-Fi, Bluetooth, Zigbee, Z-Wave, LoRaWAN, NB-IoT, MQTT, CoAP, HTTP, and more. We test their stability, reliability, and performance under various network conditions and interference scenarios.",
        },
        {
          question:
            "Can you test IoT solutions on specific cloud platforms (AWS IoT, Azure IoT, Google Cloud IoT)?",
          answer:
            "Yes, our team has extensive experience testing IoT solutions integrated with major cloud platforms like AWS IoT, Azure IoT Hub/Central, and Google Cloud IoT Core. We validate data ingestion, device management, analytics, and application integration on these platforms.",
        },
        {
          question:
            "How do you test scalability for large-scale IoT deployments?",
          answer:
            "We conduct rigorous performance and scalability testing by simulating millions of connected devices and massive data volumes. This includes load testing, stress testing, and endurance testing to ensure your IoT infrastructure can handle peak demands and future growth without degradation.",
        },
      ],
    },
    {
      icon: FaMicrochip,
      title: "Hardware & Firmware Testing",
      color: "from-red-500 to-red-600",
      faqs: [
        {
          question: "Do you perform hardware-level testing for IoT devices?",
          answer:
            "While our primary focus is software and system-level testing, we collaborate closely with hardware teams. We perform functional testing of hardware components, sensor accuracy validation, power consumption analysis, and environmental testing (temperature, humidity, vibration) to ensure device robustness.",
        },
        {
          question: "How do you test IoT device firmware?",
          answer:
            "We conduct comprehensive firmware testing including functional validation, security analysis, over-the-air (OTA) update testing, rollback mechanisms, and performance benchmarking. We ensure firmware is stable, secure, and compatible with hardware and cloud components.",
        },
        {
          question:
            "Can you help with device certification and regulatory compliance?",
          answer:
            "Yes, we assist with various device certifications (e.g., FCC, CE, UL) and regulatory compliance requirements. Our testing ensures your devices meet the necessary standards for market entry and safe operation in different regions.",
        },
      ],
    },
    {
      icon: FaDollarSign,
      title: "Cost & Pricing",
      color: "from-orange-500 to-orange-600",
      faqs: [
        {
          question: "How much does IoT testing cost?",
          answer:
            "Costs vary widely based on the complexity of your IoT solution, the number and type of devices, the scope of testing (functional, security, performance), and the duration. A small-scale project might start from $50K, while large enterprise deployments can range into millions. We provide custom quotes after a detailed assessment.",
        },
        {
          question: "Do you offer different pricing models for IoT testing?",
          answer:
            "Yes, we offer flexible pricing models including fixed-price projects, time-and-materials, milestone-based payments, and dedicated team engagements. We tailor our approach to align with your budget and project goals.",
        },
        {
          question: "What ROI can I expect from professional IoT testing?",
          answer:
            "Our clients typically see significant ROI through reduced operational costs (up to 85%), increased efficiency (up to 70%), enhanced security (90% risk reduction), and accelerated time to market. The investment in quality IoT testing prevents costly failures and drives long-term business value.",
        },
      ],
    },
    {
      icon: FaClock,
      title: "Timeline & Process",
      color: "from-teal-500 to-teal-600",
      faqs: [
        {
          question: "What is your typical IoT testing process?",
          answer:
            "Our process involves initial consultation and scope definition, test plan development, test environment setup (including device labs and network simulation), test execution (functional, performance, security, compatibility), defect reporting and retesting, and final reporting with recommendations. We integrate seamlessly with your development lifecycle.",
        },
        {
          question:
            "Can you integrate with our existing CI/CD pipeline for IoT development?",
          answer:
            "Yes, we specialize in integrating our testing processes with your existing CI/CD pipelines. We can automate tests for continuous integration, enabling faster feedback loops and ensuring that new code deployments don't introduce regressions or vulnerabilities in your IoT system.",
        },
        {
          question:
            "How do you ensure real-world testing conditions for IoT devices?",
          answer:
            "We utilize a combination of physical device labs, network emulators, and field testing. This allows us to simulate various real-world conditions such as network latency, intermittent connectivity, diverse environmental factors (temperature, humidity), and interference, ensuring robust device performance.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <FAQSchema
        faqs={faqCategories.flatMap(
          (c) => c.faqs as { question: React.ReactNode; answer: React.ReactNode }[]
        )}
      />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IoT Testing
            <span className="block text-brand-blue">Questions & Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Get answers to the most common questions about <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">IoT software testing</Link>,
            device compatibility, security, and our <Link href="/blog/post/test-execution-comprehensive-testing-implementation">comprehensive testing</Link>
            services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* FAQs */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                            ) : (
                              <FaChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaWifi className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Still Have Questions About IoT Testing?
            </h3>
            <p className="mb-8 text-lg">
              Our IoT testing experts are here to help. Get personalized answers
              to your specific IoT project questions and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }>
                <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                  Schedule IoT Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaQuestionCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Technical Questions
            </h4>
            <p className="text-gray-600 text-sm">
              Get detailed technical answers from our IoT testing specialists
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaMicrochip className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Device Compatibility
            </h4>
            <p className="text-gray-600 text-sm">
              Expert advice on IoT device <Link href="/blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa">compatibility</Link> and interoperability
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Pricing & Proposals
            </h4>
            <p className="text-gray-600 text-sm">
              Custom quotes and project proposals tailored to your IoT solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTFAQSection;
