"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaWifi } from "react-icons/fa";

const IoTFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the most critical challenge in testing IoT devices in 2026?",
      answer: (
        <>
          The most critical challenge is device diversity and <Link href="/blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction" className="text-[theme(color.brand.blue)] underline">interoperability</Link>. To ensure your product works across various protocols (Zigbee, MQTT) and firmware versions, we use a standardized <Link href="/blog/post/iso-iec-29119-as-a-standardized-framework-for-modern-software-testing" className="text-[theme(color.brand.blue)] underline">ISO/IEC 29119</Link> approach for consistent test design.
        </>
      ),
    },
    {
      question: "How to test IoT connection in remote locations?",
      answer: (
        <>
          To test IoT connection in remote locations, we use network simulators to inject packet loss, jitter, and high latency. We also perform field testing to validate how the device handles Radio Frequency (RF) interference and satellite/cellular handovers using advanced network analyzers.
        </>
      ),
    },
    {
      question: "Why is security testing for medical IoT devices so important?",
      answer: (
        <>
          Security testing for medical IoT devices is vital because a breach can directly impact patient safety. Adhering to <Link href="/healthcare-testing-services" className="text-[theme(color.brand.blue)] underline">HIPAA</Link> and the <span className="font-semibold">Cyber Resilience Act (CRA)</span> ensures we encrypt patient data and harden devices against OT ransomware and unauthorized firmware tampering.
        </>
      ),
    },
    {
      question: "What are the benefits of automating firmware regression tests for smart sensors?",
      answer: (
        <>
          Automating firmware regression tests ensures that every new update (<Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks" className="text-[theme(color.brand.blue)] underline">FOTA</Link>) does not break existing features. Automation slashes testing cycles from weeks to hours, speeding up development and getting your IoT products to market faster.
        </>
      ),
    },
    {
      question: "How do you perform performance testing for smart home ecosystems?",
      answer: (
        <>
          We simulate a connected device environment where multiple <Link href="/smart-device-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">smart devices</Link> (lights, thermostats, cameras) interact simultaneously. We measure <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline">edge computing latency</Link> and the cloud backend&apos;s ability to handle data spikes without service degradation under peak workloads.
        </>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">Frequently</span>{" "}
            Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our IoT testing services and
            methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-[theme(color.brand.blue)]" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom IoT CTA */}
        <div className="text-center py-8">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <FaWifi className="w-6 h-6 mr-2" />
                Ready to Connect Your IoT Success?
              </h3>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                Let our IoT testing experts help you achieve the same level of
                connectivity and reliability. Get started with a comprehensive
                IoT device assessment today.
              </p>
              <Link
                href="/contact-us"
                title="Start Your IoT Success Story – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Start Your IoT Success Story
              </Link>
            </div>

            {/* IoT Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-8 left-12 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTFAQs;
