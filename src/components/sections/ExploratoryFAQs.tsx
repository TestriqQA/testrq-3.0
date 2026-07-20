"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExploratoryFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What is the primary benefit of exploratory testing in agile development?",
      answer: (
        <>
          The benefits of exploratory testing in{" "}
          <Link href="blog/post/why-exploratory-testing-is-essential-for-agile-teams" className="text-[theme(color.brand.blue)] underline">
            agile development
          </Link>{" "}
          lie in its flexibility. Exploratory testing adapts to mid-sprint
          changes better than scripted tests. This flexibility helps uncover
          usability issues and logic flaws that standard &apos;passing&apos;
          scripts often miss.
        </>
      ),
    },
    {
      question: "How do you perform session-based exploratory testing (SBTM)?",
      answer:
        "Session-based exploratory testing begins with a specific charter and a 60–90 minute time-box. You then document every action and finding in a dedicated session sheet. The process concludes with a debriefing session to evaluate the 'information gain.'",
    },
    {
      question: "What are some common exploratory testing examples?",
      answer: (
        <>
          An exploratory testing example would be a tester &quot;touring&quot; a
          new mobile app’s payment gateway. Exploratory testers ignore scripts
          to find real-world bugs. They might trigger a low-battery alert or
          switch from Wi-Fi to 5G mid-transaction. They also use &apos;error
          guessing&apos; to test the CVV field with invalid data.
        </>
      ),
    },
    {
      question:
        "What are the best practices for documenting exploratory testing sessions?",
      answer: (
        <>
          Effective documentation begins with time-stamped notes and visual
          evidence. We use Rapid Reporter to capture session details and
          summarize all findings in an ISO 29119-3 compliant report.
        </>
      ),
    },
    {
      question: "Can you automate exploratory testing?",
      answer: (
        <>
          AI tools enhance exploratory testing by crawling applications for
          broken links and UI flaws. While they cannot replicate human
          intuition, they efficiently handle repetitive discovery tasks.
          However, these tools still require human &quot;oracles&quot; to
          interpret the business impact of their findings.
        </>
      ),
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
            Exploratory Testing{" "}
            <span className="text-brand-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to common questions about our exploratory testing
            services, methodologies, and how systematic investigation can
            improve your product quality.
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
                <div className="flex-shrink-0 text-green-600">
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
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our exploratory testing experts are ready to discuss your specific
            requirements and help you plan the perfect investigation strategy
            for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}
              className="bg-white cursor-pointer text-brand-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
          <div className="mt-6 text-green-100 text-sm">
            📞 Call us: (+91) 915-2929-343 | ✉️ Email: contact@testriq.com
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Issue Discovery Rate</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              2,500+
            </div>
            <div className="text-gray-600">Bugs Discovered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryFAQs;
