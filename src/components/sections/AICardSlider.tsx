// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AICardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: (
        <Link href="blog/post/ai-security-testing">
          Safe & Secure AI
        </Link>
      ),
      description: (
        <>
          We test your models against malicious inputs to ensure they stay secure and reliable against modern <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">security risks</Link>.
        </>
      ),
      features: [
        "Prompt Injection Testing",
        "Data Threat Analysis",
        "Adversarial Robustness",
        "Security Compliance",
      ],
      highlight: "100% Security Coverage",
      action: "/ai-security-testing",
    },
    {
      title: (
        <Link href="blog/post/bias-fairness-testing-for-ai">
          Fair & Unbiased AI
        </Link>
      ),
      description:
        "We use fairness toolkits to check AI models for demographic bias, ensuring your AI systems are ethical and inclusive.",
      features: [
        "Demographic Bias Detection",
        "Fairness Toolkits (AI Fairness 360)",
        "Ethical Compliance Verification",
        "Bias Mitigation",
      ],
      highlight: "Zero Bias Tolerance",
      action: "/bias-fairness-testing-for-ai",
    },
    {
      title: (
        <Link href="blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
          Compliant & Auditable
        </Link>
      ),
      description:
        "We provide the clear tracking and documentation you need for high-stakes AI regulation compliance (EU AI Act, NIST).",
      features: [
        "Regulation Compliance (EU AI Act)",
        "NIST AI RMF Alignment",
        "Technical Documentation",
        "Governance & Traceability",
      ],
      highlight: "Audit-Ready Reports",
      action: "/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              AI Testing Types
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing approaches ensure your AI systems meet the
            highest standards of{" "}
            <Link href="blog/post/data-extraction-testing">accuracy</Link>,
            fairness, and <Link href="security-testing">security</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">
                  {type.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheckCircle className="w-4 h-4 text-[theme(color.brand.blue)] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* F-38: aria-label disambiguates the generic "Learn More" anchor —
                  multiple cards on the page emit identical link text, leaving
                  screen-reader users with no per-card context. */}
              <Link
                href={`blog/post${type.action}`}
                aria-label={`Learn more about ${type.title}`}
                className="flex items-center text-[theme(color.brand.blue)] font-semibold hover:text-blue-400 transition-colors duration-300"
              >
                <span>Learn More</span>
<span className="sr-only"> about {type.title}</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            title="Get Comprehensive AI Testing – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:shadow-lg transition-colors duration-300"
          >
            Get Comprehensive AI Testing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AICardSlider;
