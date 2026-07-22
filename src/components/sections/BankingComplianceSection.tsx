// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.

import Link from "next/link";
import React from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGlobe,
  FaLock,
  FaFileAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const BankingComplianceSection: React.FC = () => {
  const complianceStandards = [
    {
      icon: FaShieldAlt,
      title: "PCI DSS 4.0",
      fullName: "Payment Card Industry Data Security Standard",
      description: (<>Rigorous <Link href="/e-commerce-testing-services" className="text-red-700 hover:text-red-800 underline">Payment Gateway Testing</Link> to secure cardholder data and transaction ecosystems.</>),
      requirements: ["Secure Network Arch.", "PII Encryption", "Vulnerability Mgmt.", "Access Controls"],
      penalty: "Up to $100,000/month in fines",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaLock,
      title: "SOC2 Type II & ISO 27001",
      fullName: "Global Security Standards",
      description: "Maintaining strict internal controls over data security, availability, and privacy.",
      requirements: ["Data Confidentiality", "Network Integrity", "Incident Response", "Physical Security"],
      penalty: "Loss of institutional trust",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaGavel,
      title: "Basel III & SOX",
      fullName: "Financial Governance & Transparency",
      description: "Ensuring capital adequacy reporting and stringent corporate governance controls.",
      requirements: ["Internal Controls", "Financial Reporting", "Audit Transparency", "Risk Coverage"],
      penalty: "Severe regulatory sanctions",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaGlobe,
      title: "ISO/IEC/IEEE 29119",
      fullName: "Independent Verification & Validation",
      description: "Providing an unbiased third-party audit of your software’s readiness for public release.",
      requirements: ["Standardized Documentation", "Generic Process Model", "Test Design Techniques", "Risk-Based Testing"],
      penalty: "Failure to meet global benchmarks",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaFileAlt,
      title: "GDPR & CCPA",
      fullName: "Data Privacy & Integrity",
      description: "Implementing Data Masking & Encryption to protect PII within digital banking channels.",
      requirements: ["Data Subject Rights", "Consent Management", "PII Protection", "Privacy by Design"],
      penalty: "Up to 4% of annual turnover",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: FaUsers,
      title: "FFIEC Guidelines",
      fullName: "Online Banking Security Standards",
      description: "Meeting stringent US federal standards for secure online banking services.",
      requirements: ["Authentication (MFA)", "Threat Mitigation", "Endpoint Security", "Customer Awareness"],
      penalty: "Regulatory enforcement actions",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const complianceProcess = [
    {
      step: "1",
      title: "Risk-Based Test Planning",
      description: "Identifying critical business functions and prioritizing efforts where they impact PCI DSS, GDPR, and Basel III.",
    },
    {
      step: "2",
      title: "Test Environment & Synthetic Data Setup",
      description: "Creating isolated environments using Synthetic Data to mimic production loads without compromising sensitive records.",
    },
    {
      step: "3",
      title: "Automated Regression & API Testing",
      description: (<>CI/CD Pipeline Integration running thousands of scripts across <Link href="/regression-testing" className="text-brand-blue hover:text-sky-700 underline">Banking APIs</Link> for seamless inter-operability.</>),
    },
    {
      step: "4",
      title: "Security & Penetration Testing",
      description: "Identifying zero-day vulnerabilities through Threat Modeling and Advanced Security simulations.",
    },
    {
      step: "5",
      title: "User Acceptance Testing (UAT)",
      description: (<>Ultimate quality gateway certifying that the system is ready for <Link href="/manual-testing-services" className="text-brand-blue underline">secure, real-world deployment</Link>.</>),
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGavel className="w-4 h-4" />
            <span className="text-sm">Regulatory Compliance</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              Compliance Testing
            </span>
            <span className="block">for Banking & Finance</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate the complex regulatory landscape with confidence. Our
            financial compliance testing services ensure your banking and
            financial institution meets all regulatory requirements-including
            PCI DSS, SOX, and GDPR-and avoids costly non-compliance penalties,
            legal risks, and reputational damage..
          </p>
        </div>


        {/* Compliance Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {complianceStandards.map((standard, index) => (
            <div
              key={index}
              className={`${standard.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <standard.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {standard.title}
              </h3>
              <h4 className="text-sm font-medium text-gray-600 mb-4">
                {standard.fullName}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {standard.description}
              </p>

              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-gray-800 text-sm">
                  KEY REQUIREMENTS:
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-100 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaExclamationTriangle className="w-4 h-4 text-red-600" />
                  <span className="font-semibold text-red-700 text-sm">
                    NON-COMPLIANCE PENALTY:
                  </span>
                </div>
                <p className="text-sm text-red-700">{standard.penalty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Process */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Compliance Testing Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic compliance testing approach to ensure comprehensive
              regulatory coverage and audit readiness for banking and financial
              institutions, aligned with standards like PCI DSS, SOX, and GDPR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {complianceProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">
                  {process.title}
                </h4>
                <p className="text-sm text-gray-600">{process.description}</p>
                {index < complianceProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-[theme(color.brand.blue)] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Benefits */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Compliance Testing Matters
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Regulatory compliance isn’t just about avoiding non-compliance
                penalties—it’s about building customer trust, protecting
                sensitive financial data, and ensuring long-term business
                sustainability for your banking and financial applications
                through robust compliance testing services.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Risk Mitigation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proactively identify and address compliance gaps before
                      they become costly violations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUsers className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Customer Trust
                    </h4>
                    <p className="text-sm text-gray-600">
                      Demonstrate your commitment to data protection and
                      regulatory compliance to build customer confidence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Competitive Advantage
                    </h4>
                    <p className="text-sm text-gray-600">
                      Stay ahead of regulatory changes and maintain a
                      competitive edge in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">
                Compliance Success Metrics
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Audit Pass Rate</span>
                  <span className="font-bold text-2xl">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Compliance Violations</span>
                  <span className="font-bold text-2xl">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Audit Preparation Time</span>
                  <span className="font-bold text-2xl">-75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Regulatory Penalties Avoided</span>
                  <span className="font-bold text-2xl">$50M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ensure Your Compliance Today
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for a regulatory audit to discover compliance gaps.
            Let our experts help you achieve and maintain full regulatory
            compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Start Compliance Assessment
              </button>
            </Link>
            {/* <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Compliance Guide
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingComplianceSection;
