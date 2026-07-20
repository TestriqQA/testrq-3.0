"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SmartDeviceFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the best practices for IoT security testing in 2026?",
      answer: (
        <>
          To meet 2026 <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">security standards</Link>, you must implement m-TLS device identities and secure all OTA updates. Additionally, regular penetration testing is essential to find and patch firmware vulnerabilities before they can be exploited in the field.
        </>
      ),
    },
    {
      question: "How to test compatibility between Alexa and smart plugs?",
      answer:
        "To validate Alexa and smart plug integration, we model the link between the smart home hub and the hardware. We ensure commands trigger without delay and that the companion app always reflects the real-time state of the device, even under poor network conditions.",
    },
    {
      question: "Why is battery life optimization critical for wearable health trackers?",
      answer: (
        <>
          <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Performance testing</Link> for wearable health trackers is vital because users expect a &apos;set it and forget it&apos; experience. Inefficient sensor polling frequency or background syncs can cause battery consumption issues that lead to high product return rates and brand dissatisfaction.
        </>
      ),
    },
    {
      question: "What is the role of Digital Twin Simulation in IoT testing?",
      answer:
        "Digital Twin Simulation allows us to create a virtual replica of your device and its environment. This approach is essential for scalability testing. We provide rigorous design validation to ensure your cloud backend meets the demands of high-density device deployments, modeling up to one million concurrent connections before hardware launch.",
    },
    {
      question: "How do you perform sensor accuracy testing?",
      answer:
        "Sensor accuracy testing involves comparing device data (motion, heart rate, temperature) against 'Gold Standard' medical or industrial equipment. We test devices across various high-intensity scenarios, such as workouts for wearables, ensuring that data variance remains within a strict 5% margin.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our smart device testing
            services and methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceFAQs;
