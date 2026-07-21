"use client";

import Link from "next/link";
import React, { useState, useTransition } from "react";
import {
  FaFileAlt,
  FaUserCheck,
  FaVideo,
  FaCode,
  FaHandshake,
  FaTrophy,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const CareersApplicationProcessSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [, startTransition] = useTransition();

  const processSteps = [
    {
      step: 1,
      icon: FaFileAlt,
      title: "Application Submission",
      description:
        "Submit your resume and cover letter through our careers portal. We review every application personally.",
      duration: "1-2 days",
      tips: "Tailor your resume to highlight relevant QA experience and include specific tools/technologies you've worked with.",
      color: "from-blue-500 to-blue-700",
    },
    {
      step: 2,
      icon: FaUserCheck,
      title: "Initial Screening",
      description:
        "HR team conducts a brief phone/video call to discuss your background, interests, and role expectations.",
      duration: "30 minutes",
      tips: "Be prepared to discuss your QA journey, career goals, and why you're interested in Testriq specifically.",
      color: "from-green-500 to-green-700",
    },
    {
      step: 3,
      icon: FaVideo,
      title: "Technical Interview",
      description:
        "Video interview with the hiring manager and team lead focusing on technical skills and problem-solving.",
      duration: "45-60 minutes",
      tips: "Review common QA concepts, testing methodologies, and be ready to discuss your past projects in detail.",
      color: "from-purple-500 to-purple-700",
    },
    {
      step: 4,
      icon: FaCode,
      title: "Practical Assessment",
      description:
        "Hands-on testing exercise or take-home assignment relevant to the role you're applying for.",
      duration: "2-3 hours",
      tips: "Focus on demonstrating your approach to problem-solving rather than just finding bugs. Document your process clearly.",
      color: "from-orange-500 to-red-500",
    },
    {
      step: 5,
      icon: FaUsers,
      title: "Team Interview",
      description:
        "Meet with potential team members to assess cultural fit and discuss collaboration style.",
      duration: "30-45 minutes",
      tips: "Ask questions about team dynamics, current projects, and growth opportunities. Show genuine interest in the team.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      step: 6,
      icon: FaHandshake,
      title: "Final Decision",
      description:
        "Reference checks, offer discussion, and onboarding preparation. Welcome to the team!",
      duration: "2-3 days",
      tips: "Prepare your references in advance and be ready to discuss salary expectations and start date preferences.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const faqs: {
    question: string;
    answer: React.ReactNode;
  }[] = [
      {
        question: "How long does the entire hiring process take?",
        answer: (
          <>
            Our typical QA hiring process takes 2–3 weeks from application to
            offer, ensuring a thorough candidate evaluation across roles like
            <Link href="/manual-testing-services" className="text-brand-blue underline"> manual testing</Link>, <Link href="/automation-testing-services" className="text-brand-blue underline"> automation testing</Link>, and <Link href="/performance-testing-services" className="text-brand-blue underline">performance testing</Link>. For
            urgent software testing roles, we can expedite the process to 1–2
            weeks. You&apos;ll be kept informed of timelines, interview stages, and
            selection updates throughout your application journey at Testriq QA
            Lab.
          </>
        ),
      },
      {
        question: "What should I expect in the technical interview?",
        answer:
          "The technical interview focuses on your QA knowledge, problem-solving approach, and relevant experience. We'll discuss testing methodologies, tools you've used, and how you handle different testing scenarios. It's more conversational than interrogational - we want to understand your thought process.",
      },
      {
        question: "Is the practical assessment mandatory for all roles?",
        answer:
          "Yes, all QA roles include a practical component, but it varies by position. Senior roles might involve system design or strategy discussions, while individual contributor roles focus on hands-on testing exercises. We provide clear instructions and reasonable timeframes for all assessments.",
      },
      {
        question: "Can I interview remotely?",
        answer:
          "Absolutely! All our interviews can be conducted remotely via video call. Even for office-based positions, we accommodate remote interviews. We use standard video conferencing tools and will send you all necessary details in advance.",
      },
      {
        question:
          "What if I don't have experience with specific tools mentioned in the job posting?",
        answer:
          "Don't let that stop you from applying! We value learning ability and foundational QA knowledge over specific tool experience. If you have strong testing fundamentals and willingness to learn, we provide training and support for new tools and technologies.",
      },
      {
        question: "Do you provide feedback if I'm not selected?",
        answer:
          "Yes, we provide constructive feedback to all candidates who complete our interview process. We believe feedback helps everyone grow, and we want to maintain positive relationships with talented professionals in the QA community.",
      },
      {
        question: "Can I reapply if I'm not selected this time?",
        answer:
          "Definitely! We encourage candidates to reapply after gaining additional experience or skills. We typically suggest waiting 6 months before reapplying for the same role, but you can apply for different positions anytime. Your previous application won't negatively impact future applications.",
      },
      {
        question: "What documents do I need to prepare?",
        answer:
          "You'll need an updated resume, cover letter (optional but recommended), and contact information for 2-3 professional references. For some roles, a portfolio of testing artifacts or automation scripts can be helpful. We'll let you know if anything specific is needed for your role.",
      },
    ];

  const toggleFAQ = (index: number) => {
    startTransition(() => {
      setOpenFAQ(openFAQ === index ? null : index);
    });
  };

  const interviewTips = [
    {
      icon: FaLightbulb,
      title: "Research the Company",
      description:
        "Learn about our services, clients, and recent company news. Show genuine interest in our mission and values.",
    },
    {
      icon: FaCheckCircle,
      title: "Prepare Your Stories",
      description:
        "Use the STAR method (Situation, Task, Action, Result) to structure examples of your past QA experiences.",
    },
    {
      icon: FaQuestionCircle,
      title: "Ask Great Questions",
      description:
        "Prepare thoughtful questions about the role, team, growth opportunities, and company culture.",
    },
    {
      icon: FaClock,
      title: "Practice Time Management",
      description:
        "Be punctual for all interviews and manage your time well during practical assessments.",
    },
  ];

  const scrollToOpenPostions = () => {
    const element = document.getElementById("open-positions-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
            <FaTrophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white">
              Application Process
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Journey to
            <span className="block text-[theme(color.brand.blue)]">
              Joining Testriq
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            We&apos;ve designed our QA hiring process to be thorough,
            transparent, and respectful of your time. Here&apos;s what you can
            expect at each step of your application journey for software testing
            roles-from initial screening and technical assessments to interviews
            with QA leads and final onboarding at Testriq QA Lab.
          </p>
        </div>

        {/* Process Steps - Improved mobile layout */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 bg-[theme(color.brand.blue)] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                  {step.step}
                </div>

                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                >
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-[theme(color.brand.blue)]" />
                  <span className="text-xs sm:text-sm font-medium text-[theme(color.brand.blue)]">
                    {step.duration}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <FaLightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                        Pro Tip:
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {step.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips - Mobile optimized */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Interview Success Tips
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              Make the most of your interview experience with these proven
              strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {interviewTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <tip.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                  {tip.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Mobile optimized */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              Get answers to common questions about our hiring process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 min-h-[60px] touch-manipulation"
                  aria-label={faq.question}
                >
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 pr-4 leading-tight">
                    {faq.question}
                  </h4>
                  {openFAQ === index ? (
                    <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-4 pb-4 sm:px-8 sm:pb-6">
                    <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile optimized */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center">
          <FaTrophy className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 opacity-80" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Start Your Application?
          </h3>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Take the first step towards joining our world-class QA team.
            We&apos;re excited to learn about your experience and discuss how
            you can contribute to our mission of delivering exceptional software
            quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={scrollToOpenPostions}
              className="bg-white text-[theme(color.brand.blue)] px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg min-h-[48px] touch-manipulation"
            >
              Browse Open Positions
            </button>
          </div>

          <div className="mt-6 sm:mt-8 text-blue-100 text-xs sm:text-sm">
            <p>
              Questions about the process? Email us at{" "}
              <Link href="mailto:hr@testriq.com" className="font-semibold hover:underline">
                hr@testriq.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersApplicationProcessSection;
