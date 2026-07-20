"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Which web application testing frameworks offer the highest ROI for startups in the 2026 ecosystem?",
    answer:
      (<>We recommend a mix of <Link href='/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress' className="text-[theme(color.brand.blue)] underline">Cypress</Link> or Playwright for fast UI automation and OWASP ZAP for baseline security. These are the best web application testing tools for startups in 2026.</>),
  },
  {
    question: "How do I automate web application testing for Next.js?",
    answer:
      (<>To automate web application testing for Next.js, We recommend using Playwright because of its excellent support for Server-Side Rendering (SSR) and <Link href='/web-application-testing-services' className="text-[theme(color.brand.blue)] underline">React components</Link>.</>),
  },
  {
    question: "What is the difference between Front-end and Back-end testing?",
    answer:
      (<>Front-end testing focuses on the UI and browser compatibility. <Link href='/blog/post/front-end-testing-vs-back-end-testing-key-differences-and-integrations' className="text-[theme(color.brand.blue)] underline">Back-end testing</Link> involves <Link href='/api-testing' className="text-[theme(color.brand.blue)] underline">API testing</Link> for web apps, database validation, and server-side logic.</>),
  },
  {
    question: "Analyzing the Persistence: Why SQL Injection Remains a Critical Risk Assessment in 2026?",
    answer:
      (<>Our <Link href='/security-testing' className="text-[theme(color.brand.blue)] underline">web application penetration testing services</Link> specialize in identifying these vulnerabilities in legacy systems and rapid, unreviewed code pushes, ensuring your data remains secure.</>),
  },
  {
    question: "How does cross-browser compatibility testing impact SEO?",
    answer:
      (<>If your app has layout issues on Safari or Firefox, your bounce rate increases, hurting rankings. A robust checklist for cross-browser compatibility testing is essential for SEO success.</>),
  },
];

export default function WebappFAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
          <span className="text-sm">● Frequently Asked Questions</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Common Questions About{" "}
          <span className="text-[theme(color.brand.blue)]">
            Web Application Testing
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Find answers to the most frequently asked questions about our web
          application testing services, processes, and methodologies.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left text-gray-900 font-semibold text-base sm:text-lg"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`px-6 pt-0 pb-5 text-gray-700 text-sm sm:text-base transition-all duration-300 ${activeIndex === index ? "block" : "hidden"
                }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
