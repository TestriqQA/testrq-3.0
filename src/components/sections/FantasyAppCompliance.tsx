"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
  Users,
  Scale,
} from "lucide-react";

const FantasyAppCompliance = () => {
  const complianceAreas = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "GDPR Compliance",
      description:
        "Ensure your fantasy sports app meets European privacy laws for data collection, processing, and user rights.",
      requirements: [
        "Consent-Based User Data Collection",
        "Data Minimization & Retention Controls",
        "User Rights Implementation (Access/Erasure)",
        "Privacy Policy Alignment with GDPR",
      ],
      regions: ["European Union", "UK", "Switzerland"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "CCPA/CPRA Compliance",
      description:
        "Stay compliant with California's consumer privacy regulations and ensure transparent data practices.",
      requirements: [
        "User Data Request Portals",
        "Opt-out of Data Sale Mechanism",
        "Updated Privacy Disclosures",
        "Third-party Data Contract Clauses",
      ],
      regions: ["California", "United States"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "ISO 27001 Certification",
      description:
        "Achieve the global gold standard for information security in fantasy gaming platforms.",
      requirements: [
        "Security Risk Assessment",
        "Policy & Access Control Frameworks",
        "Infrastructure Hardening",
        "Audit & Continuous Improvement",
      ],
      regions: ["Global Standard"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Gaming Fairness & Localization",
      description:
        "Meet local data laws and fair gaming mandates in high-regulation markets.",
      requirements: [
        "Data Residency Requirements",
        "Cross-Border Data Transfer Policies",
        "Fair Play & RNG Transparency",
        "Country-Specific Terms of Use",
      ],
      regions: ["India", "USA", "UK", "Brazil"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const complianceChecklist = [
    {
      category: "Data Protection",
      items: [
        "Encrypt user data both at rest and in transit",
        "Multi-factor authentication for admin access",
        "Routine security testing and patching",
        "Real-time breach alerting protocols",
      ],
    },
    {
      category: "User Privacy",
      items: [
        "Consent and preference management UI",
        "Downloadable data reports for users",
        "Account deletion and data purge tools",
        "Simple, compliant privacy policy access",
      ],
    },
    {
      category: "Operational Security",
      items: [
        "Background checks for backend administrators",
        "Granular access controls by role",
        "Disaster recovery and rollback procedures",
        "Annual certification and compliance audits",
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Global <span className="text-brand-blue">Compliance Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure your fantasy sports app aligns with international privacy,
            security, and fair gaming regulations — and builds trust with players worldwide.
          </p>
        </div>

        {/* Compliance Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceAreas.map((area, index) => (
            <div
      key={index}
      className={`${area.bgColor} ${area.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
    >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${area.color}`}>{area.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                <div className="space-y-2">
                  {area.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Applicable Regions:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.regions.map((region, regionIndex) => (
                    <span
                      key={regionIndex}
                      className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Checklist */}
        <div
      className="bg-gray-50 rounded-xl p-8"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Fantasy App Compliance Checklist
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceChecklist.map((category, index) => (
              <div
      key={index}
      className="bg-white rounded-lg p-6 shadow-sm"
    >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-blue text-white rounded-lg flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-900">{category.category}</h4>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Assessment CTA */}
        <div
      className="text-center mt-16"
    >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Compliance Gap Assessment</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Unsure if your fantasy sports app meets all data privacy, fairness,
              and regional compliance requirements? Get a free assessment and close the gaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="inline-block">
                <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                  Free Compliance Assessment
                </button>
              </Link>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300 cursor-pointer">
                Download Compliance Guide
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyAppCompliance;
