"use client";

import Link from "next/link";
import React, { useState } from "react";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaGavel,
  FaClock,
  FaDollarSign,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";

const HealthcareFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance",
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "What does HIPAA compliance testing include?",
          answer:
            "Our HIPAA compliance testing includes comprehensive evaluation of PHI protection, access control validation, audit trail verification, encryption standards, business associate agreements, risk assessments, and breach notification procedures. We ensure your healthcare software meets all HIPAA Security Rule and Privacy Rule requirements through expert healthcare QA services.",
        },
        {
          question: "How long does HIPAA compliance testing take?",
          answer:
            "HIPAA compliance testing typically takes 4-8 weeks depending on the complexity of your healthcare application. This includes initial assessment, gap analysis, testing execution, remediation support, and final compliance validation. We provide detailed documentation for audit purposes.",
        },
        {
          question: "Do you provide HIPAA compliance certification?",
          answer:
            "While HIPAA doesn't require formal certification, we provide comprehensive compliance validation reports and documentation that demonstrate your software meets all HIPAA requirements. Our reports are accepted by auditors and can be used for compliance demonstrations.",
        },
      ],
    },
    {
      icon: FaGavel,
      title: "FDA Validation",
      color: "from-red-500 to-red-600",
      faqs: [
        {
          question: "What FDA regulations do you help with?",
          answer:
            "We specialize in FDA 21 CFR Part 820 (Quality System Regulation), IEC 62304 (Medical Device Software), ISO 14971 (Risk Management), and FDA Software Validation guidance. Our testing supports Class I, II, and III medical device software validation requirements.",
        },
        {
          question: "Can you help with FDA 510(k) submissions?",
          answer:
            "Yes, we provide comprehensive testing documentation and validation reports that support FDA 510(k) submissions. Our documentation includes test protocols, results, risk analysis, and validation evidence required for regulatory submissions.",
        },
        {
          question:
            "How do you handle software as medical device (SaMD) testing?",
          answer:
            "We follow FDA's Software as Medical Device guidance, conducting risk-based testing based on SaMD categorization (I-IV). Our approach includes clinical evaluation, software lifecycle processes, quality management, and post-market surveillance planning.",
        },
      ],
    },
    {
      icon: FaHeartbeat,
      title: "Medical Device Testing",
      color: "from-green-500 to-green-600",
      faqs: [
        {
          question: "What types of medical devices do you test?",
          answer:
            "We test a wide range of medical devices including diagnostic equipment, patient monitoring systems, surgical devices, imaging systems, laboratory instruments, and IoMT (Internet of Medical Things) devices. Our testing covers both standalone devices and integrated healthcare systems.",
        },
        {
          question: "Do you test medical device interoperability?",
          answer:
            "Yes, we conduct comprehensive interoperability testing including HL7 FHIR, DICOM, and other healthcare standards. We test device-to-device communication, EHR integration, and healthcare network connectivity to ensure seamless data exchange.",
        },
        {
          question:
            "How do you ensure patient safety in medical device testing?",
          answer:
            "Patient safety is our top priority. We conduct risk-based testing, hazard analysis, usability testing, and clinical workflow validation. Our testing includes failure mode analysis, safety-critical function validation, and emergency scenario testing.",
        },
      ],
    },
    {
      icon: FaDollarSign,
      title: "Cost & ROI",
      color: "from-purple-500 to-purple-600",
      faqs: [
        {
          question: "What is the typical cost of healthcare testing?",
          answer:
            "Healthcare testing costs vary based on project complexity, regulatory requirements, and testing scope. Typical ranges are $50K-$200K for comprehensive testing, $25K-$75K for compliance validation, and $15K-$50K for security assessment. We provide detailed quotes after initial consultation.",
        },
        {
          question: "What ROI can I expect from healthcare testing?",
          answer:
            "Our clients typically see 1,500%-20,000% ROI through risk mitigation, faster regulatory approval, and operational improvements. Average savings include $2.5M in compliance cost avoidance, $10.9M in breach prevention, and $1.2M in accelerated market entry.",
        },
        {
          question: "Do you offer flexible pricing models?",
          answer:
            "Yes, we offer various pricing models including fixed-price projects, time-and-materials, retainer agreements, and risk-sharing partnerships. We work with your budget and timeline to provide the most cost-effective testing solution.",
        },
      ],
    },
    {
      icon: FaClock,
      title: "Timeline & Process",
      color: "from-teal-500 to-teal-600",
      faqs: [
        {
          question: "How long does healthcare software testing take?",
          answer:
            "Timeline depends on project scope and complexity. Typical durations are: Security testing (2-4 weeks), HIPAA compliance (4-8 weeks), FDA validation (8-16 weeks), and comprehensive testing (12-24 weeks). We provide detailed project timelines during planning.",
        },
        {
          question: "Can you work with our development timeline?",
          answer:
            "Absolutely. We integrate with your development lifecycle, providing continuous testing, sprint-based validation, and parallel testing streams. Our agile approach ensures testing doesn&apos;t become a bottleneck in your development process.",
        },
        {
          question: "What happens if issues are found during testing?",
          answer:
            "We provide detailed issue reports with severity classification, remediation recommendations, and retest procedures. Our team works closely with your developers to resolve issues quickly and efficiently, ensuring minimal impact on your timeline.",
        },
      ],
    },
    {
      icon: FaUserMd,
      title: "Expertise & Support",
      color: "from-orange-500 to-orange-600",
      faqs: [
        {
          question: "What healthcare domain expertise do you have?",
          answer:
            "Our team includes healthcare IT specialists, clinical workflow experts, regulatory compliance professionals, and medical device testing engineers. We have deep experience across EHR/EMR, telemedicine, medical devices, laboratory systems, and healthcare analytics.",
        },
        {
          question: "Do you provide ongoing support after testing?",
          answer:
            "Yes, we offer post-testing support including compliance monitoring, security assessments, regulatory update guidance, and maintenance testing. Our ongoing support ensures your healthcare software remains compliant and secure over time.",
        },
        {
          question: "Can you help with international healthcare regulations?",
          answer:
            "Yes, we have expertise in international healthcare regulations including EU MDR, Health Canada, TGA Australia, and other global standards. We can help you achieve compliance for international market entry and global deployment.",
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
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Testing
            <span className="block text-brand-blue">Questions & Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about healthcare software
            testing, compliance validation, and regulatory requirements.
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
                  <div
                    className={`w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center`}
                  >
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
              <FaUserMd className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-8 text-lg">
              Our healthcare testing experts are here to help. Get personalized
              answers to your specific healthcare software testing questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }
                title="Schedule Expert Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 transition-all duration-300"
              >
                Schedule Expert Consultation
              </Link>

              <Link
                href="/contact-us"
                className="bg-white bg-opacity-20 cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all border border-white border-opacity-30"
              >
                Contact Healthcare Team
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
              Get detailed technical answers from our healthcare testing
              specialists
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaGavel className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Regulatory Guidance
            </h4>
            <p className="text-gray-600 text-sm">
              Expert advice on FDA, HIPAA, and other healthcare compliance
              requirements
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
              Custom quotes and project proposals tailored to your specific
              needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareFAQSection;
