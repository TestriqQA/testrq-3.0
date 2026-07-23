"use client";

import Link from "next/link";
import React, { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaWifi,
  FaSignal,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const TelecomFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Telecom Software Testing",
      icon: FaWifi,
      questions: [
        {
          question: "What types of telecom software testing do you perform?",
          answer:
            (<>We test telecom software across OSS/BSS platforms, billing systems, CRM portals, provisioning tools, self-care applications, and service orchestration platforms. Our QA covers functional validation, <Link href="/api-testing">API integration testing</Link>, performance benchmarking, and security assurance to ensure smooth and reliable operations.</>),
        },
        {
          question: "How do you test integrations between telecom systems?",
          answer:
            "We validate integrations between systems like CRM, billing, order management, and provisioning by simulating real-world data flows and transactions. This includes verifying data consistency, error handling, API response times, and interoperability with third-party platforms.",
        },
        {
          question:
            "Can you test our systems without impacting live customers?",
          answer:
            "Yes. We use staging environments, sandbox APIs, and controlled test data to validate functionality without affecting production users. When testing in live environments is necessary, we use non-intrusive methods such as monitoring tools and off-peak execution windows.",
        },
      ],
    },
    {
      category: "IoT & Connected Applications",
      icon: FaSignal,
      questions: [
        {
          question:
            "How do you test IoT applications in the telecom ecosystem?",
          answer:
            "We validate IoT application platforms, device management portals, and middleware layers for performance, scalability, and reliability. Our testing simulates device onboarding, data processing, analytics, and user interaction flows under varying load conditions.",
        },
        {
          question:
            "What protocols and APIs do you support in IoT software testing?",
          answer:
            "We test using industry protocols like MQTT, CoAP, HTTP/HTTPS, and WebSockets, along with REST and SOAP APIs. We also validate proprietary APIs for IoT device management, billing integration, and analytics dashboards.",
        },
        {
          question: "How do you ensure IoT application security?",
          answer:
            (<>Our IoT software <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">security testing</Link> includes authentication validation, API <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link>, encryption verification, and secure firmware update checks. We assess vulnerabilities in both device-side and application-side components.</>),
        },
      ],
    },
    {
      category: "Performance & User Experience",
      icon: FaClock,
      questions: [
        {
          question: "How do you measure and improve application performance?",
          answer:
            (<>We run <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">load</Link>, <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">stress</Link>, and endurance tests to measure response times, transaction throughput, and resource utilization. We also track user experience metrics like page load speed, error rates, and process completion times under real-world conditions.</>),
        },
        {
          question: "What KPIs do you track for telecom software optimization?",
          answer:
            "We track API latency, transaction success rates, concurrent user handling capacity, application uptime, and customer journey completion rates. These KPIs help optimize platform stability and end-user satisfaction.",
        },
        {
          question:
            "How long does a typical software performance assessment take?",
          answer:
            "A basic performance test cycle can take 1–3 weeks, while a comprehensive multi-system assessment may require 4–8 weeks, depending on complexity and integrations.",
        },
      ],
    },
    {
      category: "Implementation & Support",
      icon: FaUsers,
      questions: [
        {
          question: "Do you provide ongoing QA support after implementation?",
          answer:
            (<>Yes. We offer continuous <Link href="/regression-testing">regression testing</Link>, automated monitoring setup, and periodic performance audits to maintain software quality as new features are released.</>),
        },
        {
          question:
            (<>Can you integrate your testing tools with our <Link href="/blog/post/devsecops-integrating-security-in-your-ci-cd-pipeline-2">CI/CD pipeline</Link>?</>),
          answer:
            "Absolutely. We integrate automated test suites into CI/CD tools like Jenkins, GitLab CI, and Azure DevOps, ensuring that every code release is validated before deployment.",
        },
        {
          question: "Do you train our teams on QA processes?",
          answer:
            "We offer training on telecom-specific QA best practices, test automation frameworks, defect management, and performance monitoring, ensuring your team can maintain high-quality software delivery.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <FAQSchema
        faqs={faqs.flatMap((c) => c.questions).map((q) => ({ question: q.question, answer: q.answer }))}
      />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About
            <span className="block text-[theme(color.brand.blue)]">
              Telecom Software Testing
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our software testing services
            for telecom, covering OSS/BSS validation, application performance,
            system integration, <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">IoT platforms</Link>, and ongoing QA support.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openFAQ === faqIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[theme(color.brand.blue)] transition-colors duration-300"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)] flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                          <p className="text-gray-600 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our telecom software testing experts are here to help. Get
            personalized answers and learn how our QA services can strengthen
            your digital platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }>
              <button className="cursor-pointer bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-98 transition-all duration-300">
                Schedule Expert Consultation
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 cursor-pointer border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300">
                Contact Support Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomFAQSection;
