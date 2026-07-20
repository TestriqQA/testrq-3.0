"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DesktopFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the best practices for desktop application performance testing?",
      answer: (
        <>
          To test desktop performance effectively, we first establish a baseline on a &apos;clean&apos; OS. We then simulate resource-heavy background tasks and monitor for memory leaks during extended &apos;soak&apos; periods, ensuring <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline">optimal performance</Link>.
        </>
      ),
    },
    {
      question: "How to test desktop software without an internet connection?",
      answer: (
        <>
          To ensure a reliable user experience, we <Link href="/manual-testing" className="text-[theme(color.brand.blue)] underline">test</Link> local data caching and offline stability. We then confirm that all data syncs correctly the moment the application reconnects to the internet.
        </>
      ),
    },
    {
      question: "What is the difference between .EXE and .MSI package testing?",
      answer: (
        <>
          .EXE and .MSI package testing focus on different installers. Our MSI testing evaluates database-driven logic and rollback safety. Meanwhile, we validate EXE files by focusing on custom wrapper scripts and user-permission prompts.
        </>
      ),
    },
    {
      question: "Can I use Selenium for desktop app testing?",
      answer: (
        <>
          Selenium is primarily for web browsers. Appium (WinAppDriver) and TestComplete are our preferred tools for <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline">Windows 11 UI automation</Link>. They provide the deep integration needed to handle native desktop elements.
        </>
      ),
    },
    {
      question: "Why is hardware compatibility (RAM, CPU, GPU) testing important?",
      answer: (
        <>
          Desktop applications interact directly with local system resources. <Link href="/desktop-application-testing-services" className="text-[theme(color.brand.blue)] underline">Hardware compatibility testing</Link> is essential for enterprise software to ensure stability across legacy CPUs and diverse GPU configurations.
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Desktop Testing{" "}
            <span className="text-[theme(color.brand.blue)]">FAQs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our desktop application
            testing services, processes, and deliverables.
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
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
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
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our desktop testing experts are here to help. Get personalized
              answers to your specific testing requirements and challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                className="px-8 py-3 cursor-pointer bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                📧
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
            <p className="text-gray-600 text-sm">
              Get detailed answers via email
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              contact@testriq.com
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                📞
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
            <p className="text-gray-600 text-sm">
              Speak with our experts directly
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              (+91) 915-2929-343
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-[theme(color.brand.blue)] font-bold">
                💬
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">
              Instant answers to quick questions
            </p>
            <p className="text-[theme(color.brand.blue)] text-sm font-semibold mt-2">
              Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopFAQs;
