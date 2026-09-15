"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaBug,
  FaLock,
  FaCertificate,
} from "react-icons/fa";

const SecurityTestingFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "General Security Testing",
      icon: <FaShieldAlt className="text-xl" />,
      color: "red",
      faqs: [
        {
          question: (<><Link href="/blog/post/etl-security-testing">What is security testing and why is it important?</Link></>),
          answer:
            "Security testing is a comprehensive process of evaluating applications, systems, and networks to identify vulnerabilities, security weaknesses, and potential threats. It's crucial because cyber attacks are increasing in frequency and sophistication, and a single security breach can result in significant financial losses, regulatory penalties, and damage to your organization's reputation. Security testing helps identify and remediate vulnerabilities before malicious actors can exploit them.",
        },
        // Sept 2026 handoff: replaces "How often should security testing be
        // performed?", which asked the same question in broader terms.
        {
          question: "How often should we run a penetration test?",
          answer:
            "At minimum annually, and additionally after any significant architectural change, major release, or security incident. Some frameworks, PCI DSS in particular, set their own required frequency.",
        },
        {
          question: "What types of security testing do you offer?",
          answer:
            (<>We offer comprehensive security testing services including vulnerability assessments, penetration testing, <Link href="/blog/post/whats-the-best-tool-for-security-testing-of-web-applications">web application security testing</Link>, <Link href="/mobile-application-testing">mobile application security testing</Link>, <Link href="/api-testing">API security testing</Link>, network security testing, <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">cloud security</Link> assessments, compliance testing (PCI DSS, HIPAA, SOX, GDPR), source code security reviews, and security architecture reviews. Our services cover all aspects of your technology infrastructure.</>),
        },
      ],
    },
    {
      title: "Penetration Testing",
      icon: <FaBug className="text-xl" />,
      color: "orange",
      faqs: [
        // Sept 2026 handoff: replaces "What is the difference between
        // vulnerability assessment and penetration testing?" — same comparison,
        // reframed around the VAPT term the page now targets.
        {
          question: "What is the difference between VAPT and penetration testing?",
          answer:
            "VAPT stands for Vulnerability Assessment and Penetration Testing, the two activities delivered together. The assessment finds and ranks weaknesses; the penetration test attempts to exploit them. Most enterprise engagements are VAPT rather than a penetration test alone, because the combination gives both breadth and depth.",
        },
        {
          question: "Will penetration testing disrupt our business operations?",
          answer:
            "Our penetration testing is designed to minimize business disruption. We work closely with your team to schedule testing during appropriate windows, use controlled testing methodologies, and maintain constant communication throughout the process. We can perform testing in production environments with careful controls or in staging environments that mirror your production systems. Our goal is to identify security issues without impacting your business operations.",
        },
        {
          question:
            "What deliverables do you provide after penetration testing?",
          answer:
            "We provide comprehensive reports including an executive summary for leadership, detailed technical findings with proof-of-concept exploits, risk ratings using industry-standard frameworks (CVSS), prioritized remediation recommendations, and a remediation roadmap. We also offer post-testing support including remediation validation, security improvement recommendations, and ongoing security consultation to help you address identified issues.",
        },
        // Sept 2026 handoff: replaces "What is required from my side to get
        // started?" with an accurate, specific answer.
        {
          question: "What do we need to provide before testing starts?",
          answer:
            "Scope confirmation, environment access or credentials for authenticated testing, a named technical contact, and written authorisation to test. We supply the authorisation template.",
        },
        // Sept 2026 handoff: new entry, no prior equivalent on this page.
        {
          question: "How much do penetration testing services cost?",
          answer:
            "Cost depends on scope: the number of applications, endpoints and user roles in range, whether testing is authenticated, and the depth of manual testing required. A single web application is a very different engagement from a full network and cloud assessment. We scope every engagement before quoting, so you are not paying for coverage you do not need.",
        },
      ],
    },
    {
      title: "Compliance & Standards",
      icon: <FaCertificate className="text-xl" />,
      color: "blue",
      faqs: [
        {
          question:
            "Which compliance standards do you help organizations achieve?",
          answer:
            "We help organizations achieve compliance with major security standards including PCI DSS (Payment Card Industry Data Security Standard), HIPAA (Health Insurance Portability and Accountability Act), SOX (Sarbanes-Oxley Act), GDPR (General Data Protection Regulation), ISO 27001, NIST Cybersecurity Framework, FedRAMP, and industry-specific regulations. Our compliance testing ensures your organization meets all required security controls and documentation requirements.",
        },
        {
          question: "How do you ensure GDPR compliance in security testing?",
          answer:
            "Our GDPR compliance testing includes comprehensive data protection impact assessments, privacy by design validation, data encryption verification, access control testing, data retention policy validation, breach notification procedure testing, and user rights implementation verification. We ensure that personal data is properly protected throughout its lifecycle and that your organization can demonstrate compliance with GDPR requirements.",
        },
        {
          question:
            (<>Can you help with PCI DSS compliance for <Link href="/blog/post/e-commerce-security-testing-compliance-services">e-commerce platforms</Link>?</>),
          answer:
            "Yes, we specialize in PCI DSS compliance for e-commerce and payment processing environments. Our services include cardholder data environment (CDE) scoping, network segmentation validation, encryption implementation testing, access control verification, vulnerability management, security monitoring validation, and comprehensive documentation preparation. We help you achieve and maintain PCI DSS compliance while ensuring secure payment processing.",
        },
      ],
    },
    {
      title: "Security Implementation",
      icon: <FaLock className="text-xl" />,
      color: "green",
      faqs: [
        {
          question:
            "Do you provide remediation support after identifying security issues?",
          answer:
            "Yes, we provide comprehensive remediation support including detailed remediation guidance, security architecture recommendations, secure coding best practices, implementation assistance, remediation validation testing, and ongoing security consultation. Our goal is not just to identify security issues but to help you effectively address them and improve your overall security posture.",
        },
        {
          question: "How do you handle false positives in security testing?",
          answer:
            "Our experienced security professionals manually validate all findings to minimize false positives. We use a combination of automated tools and manual testing techniques, perform thorough verification of identified vulnerabilities, provide proof-of-concept exploits where appropriate, and clearly document the business impact of each finding. This approach ensures that you receive accurate, actionable security intelligence.",
        },
        {
          question: "What is your approach to testing cloud environments?",
          answer:
            "Our cloud security testing approach includes comprehensive assessment of cloud configurations, identity and access management (IAM) validation, data encryption verification, network security testing, container and serverless security assessment, compliance validation, and cloud-specific threat modeling. We have expertise in AWS, Azure, Google Cloud Platform, and hybrid cloud environments, ensuring comprehensive security coverage across your cloud infrastructure.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 1000 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string; accent: string };
    } = {
      red: { bg: "bg-red-50", text: "text-red-600", accent: "bg-red-600" },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        accent: "bg-orange-600",
      },
      blue: { bg: "bg-blue-50", text: "text-blue-600", accent: "bg-blue-600" },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        accent: "bg-green-600",
      },
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security Testing <span className="text-brand-blue">FAQs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find answers to commonly asked questions about our{" "}
            <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
              security testing
            </Link>{" "}
            services, methodologies, and how we help organizations strengthen
            their cybersecurity posture and achieve compliance.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Category Header */}
                <div className={`${colors.bg} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${colors.accent} w-12 h-12 rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-white">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* FAQs */}
                <div className="divide-y divide-gray-200">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 1000 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div key={faqIndex} className="p-6">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full flex items-center justify-between text-left group"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
                            {faq.question}
                          </h4>
                          <div
                            className={`${colors.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ml-4`}
                          >
                            {isOpen ? (
                              <FaChevronUp className="text-white text-sm" />
                            ) : (
                              <FaChevronDown className="text-white text-sm" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-4 pl-0">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Resources */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Security Guides
            </h4>
            <p className="text-sm text-gray-600">
              Comprehensive security best practices and implementation guides
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBug className="text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Threat Intelligence
            </h4>
            <p className="text-sm text-gray-600">
              Latest cybersecurity threats and vulnerability information
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Compliance Resources
            </h4>
            <p className="text-sm text-gray-600">
              Regulatory compliance guides and requirement checklists
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Security Training
            </h4>
            <p className="text-sm text-gray-600">
              Security awareness{" "}
              <Link href="/corporate-qa-training">training</Link> and
              educational resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingFAQs;
