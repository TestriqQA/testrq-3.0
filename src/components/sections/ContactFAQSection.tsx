"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
} from "react-icons/fa";

const ContactFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs: {
    question: string;
    answer: React.ReactNode;
  }[] = [
    {
      question: "What's the best way to contact Testriq for urgent issues?",
      answer: (
      <>
        For urgent QA issues, we recommend calling our direct support line at
        (+91) 915-2929-343 during business hours (9 AM – 6 PM IST). For critical
        production issues, our 24/7 emergency QA support is available. You can
        also use our live chat for immediate QA assistance with{" "}
        <Link href="/software-testing-guide">
          Software Testing
        </Link>
        , bug resolution, or deployment-related incidents.
      </>
    ),},
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "Response times vary by contact method: Email inquiries receive responses within 2 hours during business hours. Phone calls are answered immediately during business hours. Live chat provides instant responses. Scheduled meetings can typically be arranged within 24-48 hours.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer free 15-minute consultations to discuss your QA needs and provide initial recommendations. For more detailed discussions, we also offer 45-minute deep dive sessions and 90-minute team workshops. You can schedule any of these through our online booking page.",
    },
    {
      question: "Can I schedule a meeting outside of regular business hours?",
      answer:
        "Absolutely! While our standard hours are Monday-Friday, 9 AM - 6 PM IST, we understand that different time zones and schedules require flexibility. When booking a call, you can request alternative times, and we'll do our best to accommodate your schedule.",
    },
    {
      question: "What information should I include when contacting you?",
      answer:
        "To help us provide the most relevant assistance, please include: your company name and industry, a brief description of your current testing challenges or needs, your project timeline and urgency level, and any specific technologies or platforms you're working with. The more details you provide, the better we can tailor our response.",
    },
    {
      question: "Do you provide support for international clients?",
      answer:
        "Yes, we work with clients globally! While our primary office hours are IST, we have team members across different time zones to provide support. We offer video consultations, email support, and can arrange calls at times convenient for international clients.",
    },
    {
      question: "Is there a cost for initial consultations or quotes?",
      answer:
        "Initial consultations and project quotes are completely free. We believe in providing value upfront and helping you understand how we can assist your QA needs before any commitment. Detailed project scoping and custom solution development may involve fees, which we'll discuss transparently.",
    },
    {
      question: "How do I know if my message was received?",
      answer:
        "You'll receive an automatic confirmation email immediately after submitting our contact form. For phone calls, you'll speak directly with our team. For scheduled meetings, you'll receive calendar invitations and reminder emails. If you don't receive confirmation within a few minutes, please check your spam folder or contact us directly.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToForm = () => {
    document.querySelector("#form-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="py-16 bg-white px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-[theme(color.brand.blue)]">
              Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Find quick answers to common questions about contacting our team and
            getting started with Testriq.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-6 h-6 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FaQuestionCircle className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pl-10">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white text-center">
          <FaLightbulb className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can&apos;t find the answer youre looking for? Our team is here to
            help! Reach out through any of our contact methods and we&apos;ll
            get back to you promptly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-white cursor-pointer text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-98 transition-all"
            >
              Contact Support
            </button>
           <Link href={BOOKING_URL}
           target={ "_blank" }
           
           >
            <button
              
              className="bg-white cursor-pointer bg-opacity-20 text-[theme(color.brand.blue)] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 hover:scale-98 transition-all border border-white border-opacity-30"
            >
              Schedule Meeting
            </button>
            </Link>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl font-bold">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Fastest Response
            </h4>
            <p className="text-sm text-gray-600">
              Use live chat or phone for immediate assistance during business
              hours
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">📧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Detailed Inquiries
            </h4>
            <p className="text-sm text-gray-600">
              Email us for complex questions that need comprehensive responses
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">📅</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Project Discussions
            </h4>
            <p className="text-sm text-gray-600">
              Schedule a meeting for in-depth project planning and consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;
