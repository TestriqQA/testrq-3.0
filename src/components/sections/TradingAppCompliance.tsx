"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  FileText,
  Shield,
  Database,
  CheckCircle,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const TradingAppCompliance = () => {
  const complianceStandards = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "FINRA Compliance",
      description: "Financial Industry Regulatory Authority requirements for US-based trading platforms.",
      requirements: [
        "Broker-dealer registration compliance",
        "Customer protection rules",
        "Market conduct standards",
        "Record keeping requirements",
      ],
      regions: ["United States"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "SEC Regulations",
      description: "Securities and Exchange Commission compliance for investment platforms and securities trading.",
      requirements: [
        "Investment adviser registration",
        "Custody rule compliance",
        "Disclosure requirements",
        "Fiduciary duty standards",
      ],
      regions: ["United States"],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "MiFID II Compliance",
      description: "Markets in Financial Instruments Directive for European trading platforms.",
      requirements: [
        "Best execution requirements",
        "Transaction reporting",
        "Client categorization",
        "Product governance rules",
      ],
      regions: ["European Union", "UK"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "KYC/AML Compliance",
      description: "Know Your Customer and Anti-Money Laundering requirements for financial platforms.",
      requirements: [
        "Customer identification program",
        "Suspicious activity monitoring",
        "Enhanced due diligence",
        "Regulatory reporting",
      ],
      regions: ["Global Standard"],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ];

  const dataProtectionStandards = [
    {
      title: "GDPR Compliance",
      description: "European General Data Protection Regulation for trading platforms handling EU customer data.",
      requirements: [
        "Data subject rights implementation",
        "Privacy by design architecture",
        "Consent management systems",
        "Data processing records",
      ],
      regions: ["European Union", "UK", "Switzerland"],
    },
    {
      title: "CCPA Compliance",
      description: "California Consumer Privacy Act requirements for US-based trading services.",
      requirements: [
        "Consumer rights portal",
        "Data sale opt-out mechanisms",
        "Privacy policy updates",
        "Third-party data sharing disclosure",
      ],
      regions: ["California", "United States"],
    },
  ];

  const complianceChecklist = [
    {
      category: "Data Protection",
      items: [
        "Financial data encryption at rest and in transit",
        "Secure trader authentication and authorization",
        "Regular security vulnerability assessments",
        "Data breach notification procedures",
      ],
    },
    {
      category: "Trading Operations",
      items: [
        "Order execution monitoring and reporting",
        "Market data accuracy validation",
        "Transaction reconciliation processes",
        "Risk management controls",
      ],
    },
    {
      category: "Regulatory Reporting",
      items: [
        "Automated regulatory reporting systems",
        "Audit trail maintenance",
        "Compliance monitoring dashboards",
        "Regular compliance assessments",
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
            Global{" "}
            <span className="text-brand-blue">Compliance Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure your trading app meets international regulatory requirements and industry 
            standards across different jurisdictions and financial markets.
          </p>
        </div>

        {/* Compliance Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceStandards.map((standard, index) => (
            <div
      key={index}
      className={`${standard.bgColor} ${standard.borderColor} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
    >
              <div className={`${standard.color} mb-4`}>
                {standard.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {standard.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {standard.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Requirements:
                </h4>
                <div className="space-y-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Applicable Regions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {standard.regions.map((region, regionIndex) => (
                    <span
                      key={regionIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Protection Standards */}
        <div
      className="bg-gray-50 rounded-xl p-8 mb-16"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Data Protection & Privacy Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataProtectionStandards.map((standard, index) => (
              <div
      key={index}
      className="bg-white rounded-lg p-6 shadow-md"
    >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {standard.title}
                </h4>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {standard.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Key Requirements:
                  </h5>
                  <div className="space-y-2">
                    {standard.requirements.map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Applicable Regions:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {standard.regions.map((region, regionIndex) => (
                      <span
                        key={regionIndex}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Checklist */}
        <div
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Compliance Checklist
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceChecklist.map((category, index) => (
              <div
      key={index}
    >
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-brand-blue" />
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
      className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
    >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Compliance Gap Assessment
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Not sure if your trading app meets all compliance requirements? Get a free compliance 
              gap assessment to identify areas that need attention before regulatory issues arise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="inline-block">
                <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                  Free Compliance Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-300 cursor-pointer">
                Download Compliance Guide
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppCompliance;

