"use client";

import Link from "next/link";
import React, { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaDollarSign,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const GamingFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: FaGamepad,
      title: "General Gaming Testing",
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "What types of games do you test?",
          answer: (
            <>
              We test all types of games including mobile games (iOS/Android),
              PC games (Windows/Mac/Linux), console games
              (PlayStation/Xbox/Nintendo Switch), VR/AR games, and web-based
              games. Our game testing services cover all genres—from casual
              puzzle games to complex AAA titles, MMORPGs, and battle royale
              games, ensuring{" "}
              <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                cross-platform game compatibility
              </Link>
              , immersive gameplay, and flawless gaming experiences.
            </>
          ),
        },
        {
          question: "How long does game testing typically take?",
          answer:
            "Testing duration varies based on game complexity and scope. Mobile games typically take 2-6 weeks, PC games 4-8 weeks, console games 6-12 weeks, and AAA titles can take 12-24 weeks. We provide detailed timelines during project planning and can work with your development schedule.",
        },
        {
          question:
            "Do you test games during development or only after completion?",
          answer:
            "We offer both approaches. We can integrate with your development process for continuous testing throughout development (recommended) or conduct comprehensive testing on completed builds. Early testing integration helps identify and fix issues sooner, reducing overall costs and time to market.",
        },
      ],
    },
    {
      icon: FaMobile,
      title: "Mobile Game Testing",
      color: "from-green-500 to-green-600",
      faqs: [
        {
          question: "How many devices do you test mobile games on?",
          answer: (
            <>
              We test on 500+ real devices covering iOS (iPhone/iPad) and
              Android phones/tablets. Our device lab includes popular models,
              different OS versions, various screen sizes, and different
              hardware configurations to ensure{" "}
              <Link href="/blog/post/final-reporting-in-desktop-app-testing-qa-metrics-benchmarks-continuous-improvement">
                comprehensive compatibility testing.
              </Link>
            </>
          ),
        },
        {
          question: "Do you help with app store approval?",
          answer:
            "Yes, we ensure your mobile game meets all App Store and Google Play requirements. Our testing includes app store compliance validation, content rating guidelines, in-app purchase testing, and submission preparation to maximize approval chances.",
        },
        {
          question: "Can you test mobile game performance and battery usage?",
          answer: (
            <>
              Absolutely. We conduct comprehensive{" "}
              <Link href="/performance-testing-services">
                performance testing
              </Link>{" "}
              including frame rate analysis, loading time optimization, memory
              usage monitoring, battery consumption testing, and thermal
              performance evaluation across different device configurations.
            </>
          ),
        },
      ],
    },
    {
      icon: FaDesktop,
      title: "PC & Console Testing",
      color: "from-purple-500 to-purple-600",
      faqs: [
        {
          question: "What PC configurations do you test on?",
          answer:
            "We test on 200+ PC configurations including different hardware combinations (CPU, GPU, RAM), operating systems (Windows 10/11, macOS, Linux), and various driver versions. We also test minimum, recommended, and high-end system requirements.",
        },
        {
          question: "Do you handle console certification testing?",
          answer: (
            <>
              Yes, we provide console certification support for PlayStation,
              Xbox, and Nintendo Switch. Our team is familiar with{" "}
              <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                platform-specific requirements
              </Link>
              , technical certification criteria, and submission processes to
              help you achieve platform approval.
            </>
          ),
        },
        {
          question:
            "Can you test controller compatibility and accessibility features?",
          answer:
            "We test all types of controllers including standard gamepads, specialized controllers, keyboard/mouse combinations, and accessibility devices. We also validate accessibility features to ensure your game is inclusive and meets accessibility standards.",
        },
      ],
    },
    {
      icon: FaUsers,
      title: "Multiplayer & Online Testing",
      color: "from-red-500 to-red-600",
      faqs: [
        {
          question: "How do you test multiplayer games?",
          answer: (
            <>
              We conduct comprehensive{" "}
              <Link href="/blog/post/multiplayer-testing-ensuring-smooth-online-gameplay-and-seamless-matchmaking">
                multiplayer testing
              </Link>{" "}
              including network synchronization, matchmaking systems, chat/voice
              communication, social features, and{" "}
              <Link href="/blog/post/load-testing-in-performance-testing-complete-guide">
                server load testing
              </Link>
              . We simulate various network conditions and test with different
              player counts to ensure stable multiplayer experiences.
            </>
          ),
        },
        {
          question: "Can you test games with large player counts?",
          answer: (
            <>
              Yes, we can simulate and test games supporting thousands of
              concurrent players. We use automated testing{" "}
              <Link href="/technology-stack">tools</Link> and real player testing to
              validate server performance, database optimization, and network
              architecture under high load conditions.
            </>
          ),
        },
        {
          question: "Do you test anti-cheat and security features?",
          answer:
            "We provide comprehensive security testing including anti-cheat system validation, exploit detection, data protection testing, and server security assessment. Our security experts help protect your game from cheating, hacking, and data breaches.",
        },
      ],
    },
    {
      icon: FaDollarSign,
      title: "Cost & Pricing",
      color: "from-orange-500 to-orange-600",
      faqs: [
        {
          question: "How much does game testing cost?",
          answer:
            "Costs vary based on game complexity, platforms, and testing scope. Mobile game testing typically ranges from $50K-$300K, PC games $100K-$600K, and console games $200K-$800K. We provide detailed quotes after understanding your specific requirements and can work with various budget ranges.",
        },
        {
          question: "Do you offer different pricing models?",
          answer:
            "Yes, we offer flexible pricing including fixed-price projects, time-and-materials, milestone-based payments, and ongoing testing retainers. We can also provide risk-sharing partnerships for indie developers and revenue-sharing models for certain projects.",
        },
        {
          question: "What ROI can I expect from professional game testing?",
          answer:
            "Our clients typically see 1,000%-6,250% ROI through successful launches, reduced post-launch costs, higher player retention, and increased revenue. The investment in quality testing pays for itself many times over through better reviews, word-of-mouth marketing, and player satisfaction.",
        },
      ],
    },
    {
      icon: FaClock,
      title: "Timeline & Process",
      color: "from-teal-500 to-teal-600",
      faqs: [
        {
          question: "Can you work with tight launch deadlines?",
          answer:
            "Yes, we can scale our team and resources to meet tight deadlines. We offer expedited testing services, parallel testing streams, and 24/7 testing capabilities when needed. However, we always recommend allowing adequate time for thorough testing to ensure quality.",
        },
        {
          question: "How do you handle game updates and patches?",
          answer:
            "We provide ongoing testing support for game updates, patches, and new content releases. Our regression testing ensures updates don't break existing functionality, and we can set up automated testing pipelines for continuous integration and deployment.",
        },
        {
          question: "What happens if critical bugs are found close to launch?",
          answer:
            "We provide rapid response for critical issues with dedicated teams working around the clock. We help prioritize bugs, provide detailed reproduction steps, work closely with your development team, and conduct expedited retesting to minimize launch delays.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <FAQSchema faqs={faqCategories.flatMap((c) => c.faqs)} />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gaming Testing
            <span className="block text-brand-blue">Questions & Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about gaming software
            testing, platform requirements, and our{" "}
            <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
              comprehensive testing
            </Link>
            services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* FAQs */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                            ) : (
                              <FaChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGamepad className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our gaming testing experts are here to help. Get personalized
              answers to your specific game testing questions and project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
                title="Schedule Gaming Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all duration-200"
              >
                Schedule Gaming Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaQuestionCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Technical Questions
            </h4>
            <p className="text-gray-600 text-sm">
              Get detailed technical answers from our gaming testing specialists
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaGamepad className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Platform Guidance
            </h4>
            <p className="text-gray-600 text-sm">
              Expert advice on platform-specific requirements and certification
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Pricing & Proposals
            </h4>
            <p className="text-gray-600 text-sm">
              Custom quotes and project proposals tailored to your game
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingFAQSection;
