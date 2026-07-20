"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LaunchFastFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I speed up product launch with agile QA?",
      answer:
        (<>The best way to speed up product launch with agile QA is to integrate testing early in the SDLC We use <Link title="CI/CD integration" href='/blog/post/ci-cd-integration-with-automated-tests' className="text-[theme(color.brand.blue)] underline">CI/CD integration</Link> and automated testing training to catch bugs at the &apos;commit&apos; stage. This approach prevents expensive rework during the software release cycle.</>),
    },
    {
      question: "What are the benefits of on-demand QA services for startups?",
      answer:
        (<>Our on-demand QA services provide instant access to senior-level engineers. This gives your dev team the flexibility it needs without the overhead of a full-time hire. This is crucial for early-stage companies needing <Link title="Rapid QA Testing Services" href='/launchfast-qa' className="text-[theme(color.brand.blue)] underline">Rapid QA Testing Services</Link> during critical build phases.</>),
    },
    {
      question: "Does Launch-Fast QA support 24/7 agile support for software testing?",
      answer:
        (<>Yes. We offer 24/7 agile support for software testing by leveraging a global talent pool. Our &apos;follow-the-sun&apos; model ensures we test your code while you sleep. Your results are ready for review before your morning stand-up begins.</>),
    },
    {
      question: "How many users do I need for MVP testing?",
      answer:
        "For an MVP testing and validation phase, even 5–10 active users can surface major usability flaws. Aim for 50–100 beta testers to achieve statistical significance. This sample size allows you to validate your core value proposition with reliable data insights.",
    },
    {
      question: "What is the difference between Manual and Automation testing for startups?",
      answer:
        (<>Manual testing is essential for exploratory, UX, and &quot;human-centric&quot; edge cases in new features. <Link title="Automation testing" href='/automation-testing-services' className="text-[theme(color.brand.blue)] underline">Automation testing</Link> is ideal for regression cycles. It ensures that new updates don&apos;t break existing functionality within your CI/CD pipeline.</>),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA{" "}
            <span className="text-brand-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our LaunchFast QA services,
            processes, and how we can help accelerate your <Link title="product launch" href='blog/post/performance-optimization-for-pre-launch-software-testing' className="text-[theme(color.brand.blue)] underline">product launch</Link>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-blue-600">
                  {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our LaunchFast QA experts are ready to discuss your specific
            requirements and help you plan the perfect rapid testing strategy
            for your product launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"} title="Contact Us – Testriq QA Lab">
              <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
          <div className="mt-6 text-blue-100 text-sm">
            📞 Call us: (+91) 915-2929-343 | ✉️ Email: contact@testriq.com
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">48hr</div>
            <div className="text-gray-600">Average Turnaround</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">300+</div>
            <div className="text-gray-600">Successful Launches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastFAQs;
