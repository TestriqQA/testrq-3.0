"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/booking";

const MatrimonialAppFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What is matrimonial app certification and why is it important?",
      answer: (
        <>
          Matrimonial app certification is a comprehensive audit and validation
          process that ensures your platform meets international standards for{" "}
          <Link href="/security-testing">security</Link>,{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            privacy
          </Link>
          , quality, and user safety. It&apos;s important because it builds user
          trust, reduces security risks, ensures regulatory compliance, and
          gives you a competitive advantage in the market. Certified apps
          typically see 3x higher user trust and 45% better retention rates.
        </>
      ),
    },
    {
      question: "How long does the matrimonial app certification process take?",
      answer:
        "The complete certification process typically takes 12-18 working days, depending on the complexity of your app and current compliance status. This includes initial assessment (2-3 days), comprehensive testing (7-10 days), security audit (3-5 days), and final certification issuance (1-2 days). We provide regular updates throughout the process and work efficiently to minimize any disruption to your operations.",
    },
    {
      question: "What standards and regulations do you certify against?",
      answer:
        "We certify against multiple international standards including ISO 27001 (Information Security Management), ISO 27701 (Privacy Information Management), GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), SOC 2 (Service Organization Control), and OWASP security guidelines. We also ensure compliance with regional data localization requirements and industry-specific matrimonial platform standards.",
    },
    {
      question: "What types of testing are included in the certification?",
      answer: (
        <>
          Our certification includes comprehensive testing across six key areas:{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            Security Testing
          </Link>{" "}
          (vulnerability assessment, penetration testing, data encryption
          validation),{" "}
          <Link href="/performance-testing-services">Performance Testing</Link>{" "}
          (load testing, stress testing, optimization),{" "}
          <Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">
            Functional Testing
          </Link>{" "}
          (feature validation, user journey testing),{" "}
          <Link href="/blog/post/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates">
            Usability Testing
          </Link>{" "}
          (UX/UI assessment, accessibility compliance),{" "}
          <Link href="/api-testing">API Testing</Link> (backend validation,
          integration testing), and{" "}
          <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
            Compliance Testing
          </Link>{" "}
          (regulatory requirement validation).
        </>
      ),
    },
    {
      question: "How much does matrimonial app certification cost?",
      answer:
        "Certification costs vary based on your app's complexity, current compliance status, and specific requirements. We offer flexible pricing packages starting from basic certification for new apps to comprehensive enterprise certification for established platforms. Contact us for a personalized quote based on your specific needs. Most clients see positive ROI within 3-6 months through increased user trust and reduced security risks.",
    },
    {
      question: "Do you provide ongoing support after certification?",
      answer:
        "Yes, we provide comprehensive ongoing support including continuous monitoring, regular compliance audits, security updates, and recertification services. Our support plans include 24/7 monitoring, quarterly compliance reviews, annual recertification, and immediate response to any security incidents. We also provide training for your team and help maintain your certification status as regulations evolve.",
    },
    {
      question: "Can you help with compliance for multiple regions?",
      answer:
        "Absolutely. We specialize in multi-regional compliance and can help ensure your matrimonial app meets requirements across different jurisdictions including EU (GDPR), US (CCPA), India (data localization), and other regional regulations. Our team has expertise in international privacy laws and can guide you through the complexities of global compliance while maintaining a unified platform architecture.",
    },
    {
      question:
        "What happens if issues are found during the certification process?",
      answer:
        "If issues are identified during our assessment, we provide detailed remediation guidance and support to help you address them. Our team works closely with your developers to implement necessary fixes and improvements. We offer flexible timelines and can work in phases to address critical issues first. The certification process includes retesting after remediation to ensure all requirements are met before final certification is issued.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-brand-blue">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about matrimonial app certification,
            our process, and how we can help secure your platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#25A8E0] focus:ring-opacity-50 rounded-xl cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-brand-blue">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our certification experts are here to help. Schedule a free
              consultation to discuss your specific requirements and get
              personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={BOOKING_URL} target={ "_blank" }>
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule Free Consultation
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                  Contact Our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrimonialAppFAQs;
