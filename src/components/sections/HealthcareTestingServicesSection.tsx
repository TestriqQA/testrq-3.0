// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.

import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaLock,
  FaClipboardCheck,
  FaStethoscope,
  FaSyringe,
  FaHospital,
  FaAmbulance,
} from "react-icons/fa";

const HealthcareTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaHeartbeat,
      title: (
        <>
          <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">
            EHR/EMR System Testing
          </Link>
        </>
      ),
      description:
        "Comprehensive testing of Electronic Health Records and Electronic Medical Records systems for data integrity, interoperability, and workflow optimization.",
      features: [
        "HL7 FHIR Compliance",
        <>
          <Link href="/blog/post/etl-testing-case-studies">
            Data Migration Testing
          </Link>
        </>,
        "Workflow Validation",
        <>
          <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">
            Integration Testing
          </Link>
        </>,
      ],
    },
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance Testing",
      description: (
        <>
          Ensure complete HIPAA compliance with thorough{" "}
          <Link href="/security-testing">security testing</Link>, access control
          validation, audit trail verification, and patient data protection
          through our specialized healthcare QA services.
        </>
      ),
      features: [
        <>
          <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
            PHI Protection
          </Link>
        </>,
        "Access Control Testing",
        "Audit Trail Validation",
        "Risk Assessment",
      ],
    },
    {
      icon: FaUserMd,
      title: "Medical Device Testing",
      description:
        "Specialized healthcare testing for medical devices, IoMT systems, and connected healthcare equipment, ensuring FDA compliance, regulatory validation, and patient safety across all digital health platforms.",
      features: [
        "FDA 21 CFR Part 820",
        "IEC 62304 Compliance",
        <>
          <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
            Device Connectivity
          </Link>
        </>,
        <>
          <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
            Safety Validation
          </Link>
        </>,
      ],
    },
    {
      icon: FaDatabase,
      title: "Clinical Data Testing",
      description:
        "Validate clinical data accuracy, integrity, and compliance with healthcare standards and regulatory requirements.",
      features: [
        "Data Validation",
        "Clinical Workflows",
        "Reporting Accuracy",
        "Compliance Checks",
      ],
    },
    {
      icon: FaMobile,
      title: "Telehealth App Testing",
      description:
        "End-to-end testing of telemedicine applications, video consultations, remote monitoring, and mobile health solutions.",
      features: [
        "Video Quality Testing",
        <>
          <Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">
            Real-time Communication
          </Link>
        </>,
        "Mobile Compatibility",
        <>
          <Link href="/security-testing">Security Testing</Link>
        </>,
      ],
    },
    {
      icon: FaCloud,
      title: "Healthcare Cloud Testing",
      description:
        "Cloud infrastructure testing for healthcare applications ensuring scalability, security, and compliance with healthcare regulations.",
      features: [
        <>
          <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">
            Cloud Security
          </Link>
        </>,
        <>
          <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
            Scalability Testing
          </Link>
        </>,
        "Data Backup",
        "Disaster Recovery",
      ],
    },
    {
      icon: FaLock,
      title: "Healthcare Cybersecurity",
      description:
        "Advanced security testing specifically designed for healthcare environments to protect against cyber threats and data breaches.",
      features: [
        <>
          <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
            Penetration Testing
          </Link>
        </>,
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Vulnerability Assessment
          </Link>
        </>,
        "Security Audits",
        "Threat Modeling",
      ],
    },
    {
      icon: FaClipboardCheck,
      title: "Regulatory Compliance",
      description:
        "Comprehensive testing to ensure compliance with FDA, HIPAA, HITECH, and other healthcare regulatory requirements.",
      features: [
        <>
          <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
            FDA Validation
          </Link>
        </>,
        "HITECH Compliance",
        "Quality Assurance",
        "Documentation",
      ],
    },
    {
      icon: FaStethoscope,
      title: "Clinical Decision Support",
      description:
        "Testing of clinical decision support systems, AI-powered diagnostics, and medical algorithms for accuracy and reliability.",
      features: [
        "Algorithm Testing",
        <>
          <Link href="/blog/post/model-validation-for-ai-applications">
            AI Model Validation
          </Link>
        </>,
        "Clinical Accuracy",
        <>
          <Link href="/performance-testing-services">Performance Testing</Link>
        </>,
      ],
    },
    {
      icon: FaSyringe,
      title: "Pharmacy Management",
      description:
        "Specialized testing for pharmacy management systems, e-prescribing, drug interaction checks, and medication management.",
      features: [
        "E-Prescribing",
        "Drug Interactions",
        "Inventory Management",
        "Prescription Validation",
      ],
    },
    {
      icon: FaHospital,
      title: "Hospital Information Systems",
      description:
        "Complete testing of hospital management systems, patient management, billing, and administrative workflows.",
      features: [
        "Patient Management",
        "Billing Systems",
        "Administrative Workflows",
        "Integration Testing",
      ],
    },
    {
      icon: FaAmbulance,
      title: "Emergency Care Systems",
      description:
        "Critical testing for emergency care systems, ambulance dispatch, emergency response, and critical care applications.",
      features: [
        "Emergency Workflows",
        "Real-time Systems",
        "Critical Care Testing",
        <>
          <Link href="/blog/post/final-reporting-in-desktop-app-testing-qa-metrics-benchmarks-continuous-improvement">
            Response Time Testing
          </Link>
        </>,
      ],
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaHeartbeat className="w-4 h-4" />
            <span className="text-sm">Healthcare Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Comprehensive Healthcare
            <span className="block text-brand-blue">Testing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized healthcare testing services designed for digital{" "}
            <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
              healthcare applications
            </Link>
            , ensuring patient safety,{" "}
            <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
              HIPAA compliance
            </Link>
            , FDA regulations, and optimal{" "}
            <Link href="/performance-testing-services">
              performance testing
            </Link>{" "}
            across all healthcare software systems and medical applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:ring-3"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Secure Your Healthcare Software?
            </h3>
            <p className="mb-8 text-lg">
              Our healthcare testing experts are ready to help you achieve
              compliance, ensure patient safety, and optimize your medical{" "}
              <Link href="/blog/post/performance-optimization-for-pre-launch-software-testing">
                software performance
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Get Healthcare Testing Quote – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all"
              >
                Get Healthcare Testing Quote
              </Link>

              <Link
                 href={BOOKING_URL} target={ "_blank" }
                title="Schedule Expert Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-brand-blue font-semibold text-lg rounded-2xl
             border border-white border-opacity-30
             hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all duration-200"
              >
                Schedule Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareTestingServicesSection;
