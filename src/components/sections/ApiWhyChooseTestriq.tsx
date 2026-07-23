"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCertificate,
  FaShieldAlt,
  FaArrowRight,
  FaAward,
  FaLock,
} from "react-icons/fa";

const ApiWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: (<Link href="/security-testing" className="hover:underline text-inherit">GDPR Compliance</Link>),
      shortTitle: "GDPR Ready",
      description:
        "All tests involving PII follow strict data masking and privacy protocols for the EU market.",
      stats: "100% PII Masked",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Strict Data Masking",
        "Privacy Rule Mapping",
        "EU Market Alignment",
        "Secure Hub Access",
      ],
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: (<Link href="/security-testing" className="hover:underline text-inherit">SOC2 Type II</Link>),
      shortTitle: "SOC2 Certified",
      description:
        "Our environments and data handling meet rigorous security standards to protect your IP.",
      stats: "SOC2 Audited",
      color: "green",
      gradient: "from-green-500 to-green-600",
      features: [
        "Certified Environments",
        "IP Protection",
        "Audited Workflows",
        "Vendor Management",
      ],
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "ISO 27001",
      shortTitle: "Security Standard",
      description:
        "Global security standards to protect your data with the highest level of integrity.",
      stats: "ISO Approved",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Data Integrity",
        "Security Governance",
        "Risk Mitigation",
        "Global Compliance",
      ],
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Proficiency Testing",
      shortTitle: "Paperless Tests",
      description:
        (<>Specialized API <Link href="/qa-documentation-services" className="hover:underline text-white">paperless proficiency testing</Link> to ensure systems meet certification rules.</>),
      stats: "Certified Status",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Skill Verification",
        "Certification Prep",
        "Adaptive Assessments",
        "Automated Grading",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Global Standards & Compliance
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security & <span className="text-[theme(color.brand.blue)]">Compliance</span> is Non-Negotiable
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We engineer our services to meet the highest global benchmarks. In the global market, we handle your information with the highest level of integrity.
          </p>
        </div>

        {/* Interactive Hexagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 transform hover:scale-105 ${hoveredCard === index ? "z-10" : ""
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div
                className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 group ${hoveredCard === index ? "shadow-2xl" : "hover:shadow-xl"
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs font-medium">
                          Success Rate
                        </div>
                        <div className="text-white font-bold text-sm">
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Animated Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full rounded-full border-4 border-white animate-spin"></div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Key Features:
                    </h4>
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {/* SAFELIST color classes or pass full class */}
                        <div
                          className={`w-2 h-2 rounded-full mr-3 animate-pulse`}
                          style={{
                            backgroundColor: `var(--tw-color-${benefit.color}-500)`,
                          }}
                        ></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 z-10 bg-gradient-to-r ${benefit.gradient
                    }
      transition-opacity duration-500 ease-in-out flex items-center justify-center
      ${hoveredCard === index ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm relative">
                      {React.cloneElement(benefit.icon, {
                        className: "w-8 h-8",
                      })}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {benefit.shortTitle}
                    </h3>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    {/* F-38: aria-label disambiguates the generic "Learn More" link —
                        multiple benefit cards link to the same /contact-us, screen
                        readers need per-card context. */}
                    <Link
                      href="/contact-us"
                      aria-label={`Learn more about ${benefit.shortTitle}`}
                      className="flex justify-center items-center gap-2 mx-auto bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                    >
                      <span>Learn More</span>
<span className="sr-only"> about {benefit.shortTitle}</span>
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700 text-sm">APIs Tested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                99.8%
              </div>
              <div className="text-gray-700 text-sm">Bug Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24hr
              </div>
              <div className="text-gray-700 text-sm">Avg Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-700 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 200+ companies who trust our API testing expertise. Get
              started with a comprehensive API assessment and see why we&apos;re the
              preferred choice.
            </p>
            <Link href="/contact-us">
              <button className="bg-white text-[theme(color.brand.blue)] cursor-pointer px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-colors duration-300 shadow-lg transform hover:scale-105">
                Get Started with API Testing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiWhyChooseTestriq;
