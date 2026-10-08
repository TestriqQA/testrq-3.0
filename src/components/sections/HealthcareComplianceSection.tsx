// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaLock,
  FaFileAlt,
  FaGavel,
  FaUserShield,
  FaEye,
  FaKey,
  FaCertificate,
  FaBalanceScale,
} from "react-icons/fa";

const HealthcareComplianceSection: React.FC = () => {
  const complianceStandards = [
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance",
      description:
        "Complete Health Insurance Portability and Accountability Act compliance validation",
      features: [
        <>
          <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
            PHI Protection
          </Link>{" "}
          & Encryption
        </>,
        "Access Control Implementation",
        "Audit Trail Monitoring",
        "Business Associate Agreements",
        "Risk Assessment & Management",
        "Breach Notification Procedures",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaGavel,
      title: "FDA 21 CFR Part 820",
      description:
        "Medical device quality system regulation compliance for healthcare software",
      features: [
        "Design Controls",
        "Document Control",
        "Risk Management (ISO 14971)",
        "Software Lifecycle Processes",
        <>
          <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">
            Validation & Verification
          </Link>
        </>,
        "Post-Market Surveillance",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: FaFileAlt,
      title: "IEC 62304",
      description:
        "Medical device software lifecycle processes standard compliance",
      features: [
        "Software Safety Classification",
        "Software Development Planning",
        "Software Requirements Analysis",
        "Software Architecture Design",
        <>
          <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">
            Software Integration Testing
          </Link>
        </>,
        <>
          <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">
            Software System Testing
          </Link>
        </>,
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaLock,
      title: "HITECH Act",
      description:
        "Health Information Technology for Economic and Clinical Health Act compliance",
      features: [
        "Enhanced HIPAA Enforcement",
        "Breach Notification Rules",
        "Meaningful Use Requirements",
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Security Risk Assessments
          </Link>
        </>,
        <>
          <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
            Encryption Standards
          </Link>
        </>,
        "Audit Controls",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaCertificate,
      title: "SOC 2 Type II",
      description:
        "Service Organization Control 2 compliance for healthcare service providers",
      features: [
        "Security Controls",
        "Availability Monitoring",
        "Processing Integrity",
        "Confidentiality Measures",
        <>
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            Privacy Protection
          </Link>
        </>,
        "Continuous Monitoring",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FaBalanceScale,
      title: "GDPR Healthcare",
      description:
        "General Data Protection Regulation compliance for healthcare data processing",
      features: [
        "Lawful Basis for Processing",
        "Data Subject Rights",
        "Privacy by Design",
        "Data Protection Impact Assessment",
        "Consent Management",
        "Cross-Border Data Transfer",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const complianceProcess = [
    {
      icon: FaClipboardCheck,
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of current compliance status",
    },
    {
      icon: FaUserShield,
      title: "Gap Analysis",
      description: "Identification of compliance gaps and risk areas",
    },
    {
      icon: FaEye,
      title: "Implementation Planning",
      description: "Strategic roadmap for achieving full compliance",
    },
    {
      icon: FaKey,
      title: (
        <>
          <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">
            Validation & Testing
          </Link>
        </>
      ),
      description: "Thorough testing of compliance controls and measures",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaShieldAlt className="w-4 h-4" />
            <span className="text-sm font-semibold">Regulatory Compliance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Healthcare Regulatory
            <span className="block text-brand-blue">
              Compliance & Standards
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <Link href="/blog/post/scorm-compliance-and-learning-analytics-testing-ensuring-accurate-tracking-and-assessment-of-learner-progress">
              Comprehensive compliance
            </Link>{" "}
            testing and regulatory validation services ensuring your healthcare
            software meets all{" "}
            <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
              HIPAA
            </Link>
            ,{" "}
            <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
              FDA
            </Link>
            , and GDPR{" "}
            <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
              regulatory requirements
            </Link>{" "}
            and healthcare industry standards.
          </p>

          {/* Inbound link to the UK landing page — see the matching note in
              BankingComplianceSection. NHS/HL7/FHIR coverage lives there. */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            For NHS-connected software, HL7 and FHIR message handling and UK
            GDPR, see our{" "}
            <Link
              href="/software-qa-testing-services-in-london"
              className="text-brand-blue underline hover:no-underline"
            >
              testing services for London and UK teams
            </Link>
            .
          </p>
        </div>

        {/* Compliance Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {complianceStandards.map((standard, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:ring-[theme(color.brand.blue)] hover:ring-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <standard.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {standard.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {standard.description}
              </p>

              <div className="space-y-2">
                {standard.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Process */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Compliance Testing Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic healthcare QA approach to ensure your healthcare
              software meets all regulatory requirements, including HIPAA and
              FDA compliance, and maintains ongoing{" "}
              <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
                compliance testing
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Compliance Matters</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Patient Safety</h4>
                  <p className="text-sm">
                    Protect patient data and ensure{" "}
                    <Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">
                      software reliability
                    </Link>{" "}
                    in critical healthcare environments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaGavel className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Legal Protection</h4>
                  <p className="text-sm">
                    Avoid costly penalties and legal issues with comprehensive
                    regulatory compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCertificate className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Market Access</h4>
                  <p className="text-sm">
                    Enable faster market entry and broader adoption with
                    certified compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Compliance Statistics
            </h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-red-50 rounded-2xl">
                <div className="text-3xl font-bold text-red-600 mb-1">
                  $10.93M
                </div>
                <div className="text-sm text-gray-600">
                  Average cost of healthcare data breach,{" "}
                  <Link
                    href="https://www.quodorbis.com/critical-condition-ransomware-is-hitting-healthcare-hard-ccm-is-the-antidote/#:~:text=IBM's%202023%20Cost%20of%20a,and%20long%2Dtail%20reputational%20damage."
                    className="text-brand-blue underline"
                  >
                    View More
                  </Link>
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">
                  Our client compliance success rate
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Healthcare regulations we cover
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ensure Your Healthcare Software Compliance
            </h3>
            <p className="mb-8 text-lg">
              Don&apos;t risk non-compliance. Let our experts help you navigate
              the complex landscape of healthcare regulations and achieve full
              compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Start Compliance Assessment – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 transition-all duration-300"
              >
                Start Compliance Assessment
              </Link>

              {/* <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg  hover:scale-98 transition-all border border-white border-opacity-30 cursor-pointer">
                Download Compliance Checklist
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareComplianceSection;
