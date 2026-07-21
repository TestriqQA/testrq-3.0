"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MobileFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the best mobile app testing strategies for startups 2026?",
      answer: (
        <>
          The best mobile app testing strategies for startups in 2026 involve a <Link href="/blog/post/the-role-of-automation-in-shift-left-and-shift-right-testing" className="text-brand-blue underline">&quot;Shift-Left&quot; approach</Link>. We integrate automated testing directly into your CI/CD pipeline and utilize our Real Device Cloud to maximize coverage while optimizing costs.
        </>
      ),
    },
    {
      question: "How to test mobile apps on multiple screen sizes and resolutions?",
      answer: (
        <>
          To test mobile apps on multiple screen sizes and resolutions, we utilize <Link href="/blog/post/solving-the-top-5-challenges-in-mobile-application-testing" className="text-brand-blue underline">real device cloud testing platforms</Link>. These allow us to run <Link href="/automation-testing-services" className="text-brand-blue underline">automated mobile testing</Link> using Appium across hundreds of physical devices simultaneously, identifying UI glitches that emulators miss.
        </>
      ),
    },
    {
      question: "Why is mobile application security testing services critical for Fintech?",
      answer: (
        <>
          A security testing checklist for fintech mobile applications is vital because these apps handle PII and financial transactions. Our <Link href="/security-testing" className="text-brand-blue underline">mobile application penetration testing service</Link> ensures that encryption, biometric login, and API endpoints are bulletproof.
        </>
      ),
    },
    {
      question: "How do you perform performance testing for mobile apps under poor network conditions?",
      answer: (
        <>
          We use network simulation tools to replicate latency, jitter, and packet loss. We test app performance on weak networks to prevent crashes, ensuring a smooth move between 5G, 4G, and <Link href="/blog/post/connectivity-testing-for-smart-devices-wifi-bluetooth-nfc" className="text-brand-blue underline">offline modes</Link>.
        </>
      ),
    },
    {
      question: "What is the difference between APK and IPA file testing?",
      answer: (
        <>
          APK and IPA file testing refers to the binary validation of Android and iOS apps, respectively. We audit file integrity and permissions before launch, finding security flaws in the code before your app hits the store using our <Link href="/qa-documentation-services" className="text-brand-blue underline">standardized risk reporting</Link>.
        </>
      ),
    },
    {
      question: "Do you follow global compliance standards like ISO 29119?",
      answer: (
        <>
          Yes, Testriq adheres to <Link href="/blog/post/what-is-mobile-application-testing-an-in-depth-guide" className="text-brand-blue underline">ISO/IEC/IEEE 29119 standards</Link> across our entire lifecycle. We also provide SOC2 Type II, GDPR, CCPA, and HIPAA validated quality assurance for highly regulated industries.
        </>
      ),
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mobile Testing{" "}
            <span className="text-[theme(color.brand.blue)]">FAQs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get expert answers to common questions about mobile application
            testing services, QA processes,{" "}
            <Link href="automation-testing-services">test automation</Link>,{" "}
            <Link href="/blog/post/solving-the-top-5-challenges-in-mobile-application-testing">
              real device
            </Link>{" "}
            testing, and app store compliance for iOS and Android apps.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 ease-in-out"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions About Mobile Testing?
            </h3>
            <p className="text-gray-600 mb-6">
              Our mobile testing experts are here to help. Get personalized
              answers to your specific mobile app testing requirements and
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                title="Schedule Mobile Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
              >
                Schedule Mobile Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                📱
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Mobile Testing Hotline
            </h4>
            <p className="text-gray-600 text-sm">
              Direct line to mobile experts
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              (+91) 915-2929-343
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                📧
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Mobile Testing Email
            </h4>
            <p className="text-gray-600 text-sm">
              Detailed mobile testing inquiries
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              contact@testriq.com
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                🚀
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quick Start</h4>
            <p className="text-gray-600 text-sm">
              Get testing started in 24 hours
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              Express Testing Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFAQs;
