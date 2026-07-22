"use client";

import Link from "next/link";
import React, { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const ElearningFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of e-learning platforms do you test?",
      answer:
        "We test all major e-learning platforms including Moodle, Canvas, Blackboard, Google Classroom, custom LMS solutions, and SCORM-compliant systems. Our team has expertise in educational technology standards, WCAG accessibility requirements, and platform-specific QA features for both academic and corporate learning environments.",
    },
    {
      question:
        "How do you ensure accessibility compliance in e-learning platforms?",
      answer:
        "We conduct comprehensive accessibility testing following WCAG 2.1 AA guidelines, Section 508 compliance, and ADA requirements. This includes screen reader compatibility, keyboard navigation, color contrast validation, alternative text for multimedia content, and cognitive accessibility features to ensure inclusive learning experiences for all users.",
    },
    {
      question: "Can you test integrations with third-party educational tools?",
      answer:
        "Yes, we thoroughly test integrations with educational tools like Turnitin, Respondus, Proctorio, video conferencing platforms, gradebook systems, student information systems (SIS), and learning analytics tools. We validate data synchronization, single sign-on (SSO), and seamless user experiences across integrated platforms.",
    },
    {
      question:
        "How do you handle performance testing for large-scale deployments?",
      answer:
        "We simulate real-world scenarios including peak enrollment periods, simultaneous exam sessions, and concurrent video streaming. Our load testing covers thousands of simultaneous users, validates auto-scaling capabilities, tests content delivery networks (CDN), and ensures consistent performance across different geographical locations and network conditions.",
    },
    {
      question: "What about mobile learning and responsive design testing?",
      answer: (
        <>
          We test across all mobile devices and tablets, validate responsive
          design implementations,{" "}
          <Link href="/mobile-application-testing">test mobile apps</Link> (iOS
          and Android), ensure touch interface optimization, validate offline
          learning capabilities, and test mobile-specific features like push
          notifications and synchronization when connectivity is restored.
        </>
      ),
    },
    {
      question: "How do you test multimedia content and SCORM compliance?",
      answer:
        "We validate SCORM 1.2, SCORM 2004, and xAPI (Tin Can API) compliance, test video streaming quality and adaptive bitrate, validate interactive content and simulations, test audio quality and closed captioning, and ensure proper tracking of learning progress and completion status across different content formats.",
    },
    {
      question: "Do you provide ongoing testing support for course updates?",
      answer: (
        <>
          Yes, we offer continuous testing services including{" "}
          <Link href="/regression-testing">regression testing</Link> for course
          updates, validation of new content uploads, testing of platform
          upgrades and patches, seasonal{" "}
          <Link href="/blog/post/load-testing-in-performance-testing-complete-guide">
            load testing
          </Link>{" "}
          (enrollment periods), security testing for new features, and
          performance monitoring with regular health checks.
        </>
      ),
    },
    {
      question: "How do you test assessment and examination systems?",
      answer:
        "We conduct comprehensive testing of quiz engines, proctoring systems, anti-cheating measures, grade calculation accuracy, time limits and auto-submission, question randomization, and secure browser compatibility. We also test accessibility features for students with disabilities during assessments.",
    },
    {
      question:
        "What security testing do you perform for e-learning platforms?",
      answer: (
        <>
          We perform vulnerability assessments,{" "}
          <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
            penetration testing
          </Link>
          ,{" "}
          <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
            data encryption
          </Link>{" "}
          validation, user authentication and authorization testing, FERPA
          compliance verification, secure data transmission testing, and
          validation of privacy controls. We also test backup and disaster
          recovery procedures to ensure data protection.
        </>
      ),
    },
    {
      question: "How long does comprehensive e-learning platform testing take?",
      answer: (
        <>
          Timeline depends on platform complexity and scope. A basic{" "}
          <Link href="/blog/post/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users">
            LMS
          </Link>{" "}
          typically requires 4-6 weeks for comprehensive testing, while
          enterprise-level platforms with multiple integrations may need 8-12
          weeks. We provide detailed project timelines during our initial
          assessment and can accommodate urgent deployment schedules.
        </>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            E-Learning Testing
            <span className="block text-brand-blue">Questions Answered</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our e-learning
            testing services,{" "}
            <Link href="/blog/post/the-importance-of-qa-documentation-services-in-ensuring-quality">
              QA methodologies
            </Link>
            , and what to expect when optimizing your learning management system
            or educational platform for{" "}
            <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
              performance
            </Link>
            , accessibility, and{" "}
            <Link href="/blog/post/etl-security-testing">security</Link>.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-brand-blue" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 text-center">
          <FaGraduationCap className="w-16 h-16 text-brand-blue mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About E-Learning Testing?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our e-learning testing specialists are here to help. Get
            personalized answers to your specific questions and learn how we can
            optimize your educational platform for better learning outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }
              title="Schedule Free Consultation – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-2xl
             hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
            >
              Schedule Free Consultation
            </Link>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            <p>
              ✓ Free platform assessment • ✓ Custom testing strategy • ✓
              Educational technology expertise • ✓ No obligation
            </p>
          </div>
        </div>

        {/* Expert Tip */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaRocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Expert Tip: Start Testing Early
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The best time to start e-learning platform testing is during the
                development phase, not after launch. Early e-learning QA testing
                identifies accessibility issues, performance{" "}
                <Link href="/blog/post/performance-bottlenecks-in-web-apps-how-to-identify-them-2">
                  bottlenecks
                </Link>
                , and
                <Link href="/blog/post/usability-testing-in-manual-testing-use-cases-techniques">
                  usability
                </Link>{" "}
                concerns when they&apos;re less expensive to fix, ensuring a
                smooth learning experience from day one. Contact us to discuss
                QA strategies for your{" "}
                <Link href="/blog/post/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users">
                  LMS
                </Link>{" "}
                development timeline..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningFAQSection;
