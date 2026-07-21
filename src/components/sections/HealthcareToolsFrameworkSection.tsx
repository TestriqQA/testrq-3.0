// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.

import React from "react";
import {
  FaShieldAlt,
  FaCog,
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaLock,
  FaLaptopCode,
  FaCloudDownloadAlt,
} from "react-icons/fa";

import {
  SiOwasp,
  SiBurpsuite,
  SiMetasploit,
  SiSelenium,
  SiAppium,
  SiCypress,
  SiPostman,
  SiJest,
} from "react-icons/si";

import{FaNetworkWired, FaBoxes, FaCogs } from "react-icons/fa";
import Link from "next/link";

const HealthcareToolsFrameworkSection: React.FC = () => {
  const testingTools = [
    {
      category: (<><Link href="/security-testing">Security Testing</Link></>),
      icon: FaShieldAlt,
      color: "text-red-500",
      bgColor: "bg-red-50",
      tools: [
        {
          name: (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">OWASP ZAP</Link></>),
          description: "Web application security scanner",
          icon: <SiOwasp aria-hidden className="w-5 h-5 text-red-500" />,
        },
        {
          name: (<><Link href="/blog/post/using-burp-suite-for-security-testing-beginner-to-pro">Burp Suite</Link></>),
          description: "Penetration testing platform",
          icon: <SiBurpsuite aria-hidden className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Nessus",
          description: "Vulnerability assessment",
          icon: <FaNetworkWired className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Metasploit",
          description: "Security testing framework",
          icon: <SiMetasploit aria-hidden className="w-5 h-5 text-red-500" />,
        },
      ],
    },
    {
      category: (<><Link href="/automation-testing-services">Automation Testing</Link></>),
      icon: FaCog,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        {
          name: (<><Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium</Link></>),
          description: "Web application automation",
          icon: <SiSelenium aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: (<><Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest">Appium</Link></>),
          description: "Mobile app automation",
          icon: <SiAppium aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Cypress",
          description: "End-to-end testing framework",
          icon: <SiCypress aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "TestComplete",
          description: "Comprehensive test automation",
          icon: <FaLaptopCode className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      category: (<><Link href="/api-testing">API Testing</Link></>),
      icon: FaCode,
      color: "text-green-500",
      bgColor: "bg-green-50",
      tools: [
        {
          name: "Postman",
          description: "API development and testing",
          icon: <SiPostman aria-hidden className="w-5 h-5 text-green-500" />,
        },
        {
          name: "REST Assured",
          description: "Java-based REST API testing",
          icon: <FaCloudDownloadAlt className="w-5 h-5 text-green-500" />,
        },
        {
          name: "SoapUI",
          description: "SOAP and REST API testing",
          icon: <FaBoxes className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Newman",
          description: "Command-line Postman runner",
          icon: <FaCogs className="w-5 h-5 text-green-500" />,
        },
      ],
    },
    {
      category: (<><Link href="/performance-testing-services">Performance Testing</Link></>),
      icon: FaDatabase,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      tools: [
        {
          name: (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">JMeter</Link></>),
          description: "Load and performance testing",
          icon: <SiJest aria-hidden className="w-5 h-5 text-purple-500" />,
        },
        {
          name: (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">LoadRunner</Link></>),
          description: "Enterprise performance testing",
          icon: <FaCogs className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "BlazeMeter",
          description: "Cloud-based load testing",
          icon: <FaNetworkWired className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "K6",
          description: "Modern load testing tool",
          icon: <FaCloud className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
  ];

  const complianceFrameworks = [
    {
      name: "HIPAA Compliance",
      description:
        "Health Insurance Portability and Accountability Act validation",
      features: [
        "PHI Protection",
        "Access Controls",
        "Audit Trails",
        "Data Encryption",
      ],
    },
    {
      name: (<><Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">FDA Validation</Link></>),
      description: "Food and Drug Administration software validation support",
      features: [
        "21 CFR Part 820",
        "IEC 62304",
        "Risk Management",
        "Documentation",
      ],
    },
    {
      name: "HL7 FHIR",
      description: "Healthcare interoperability standards testing",
      features: [
        "Data Exchange",
        "API Validation",
        "Resource Testing",
        "Conformance",
      ],
    },
    {
      name: "DICOM Testing",
      description: "Digital Imaging and Communications in Medicine validation",
      features: [
        "Image Transfer",
        "PACS Integration",
        "Modality Testing",
        "Workflow",
      ],
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools &amp; Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Advanced Healthcare Testing
            <span className="block text-brand-blue">
              Tools &amp; Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage industry-leading tools and QA frameworks specifically
            designed for healthcare software testing, ensuring HIPAA compliance,
            <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">data security</Link>, and optimal <Link href="/performance-testing-services">performance testing</Link> across all medical
            applications.
          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testingTools.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      {tool.icon}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Frameworks */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
              <FaLock className="w-4 h-4" />
              <span className="text-sm">Compliance Frameworks</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Regulatory Compliance
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare testing frameworks ensuring your
              healthcare software meets all regulatory requirements, including
              HIPAA, FDA, and GDPR compliance, along with recognized industry
              standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:border-[theme(color.brand.blue)] transition-colors"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {framework.name}
                </h4>
                <p className="text-gray-600 mb-4">{framework.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {framework.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Healthcare Testing Stack
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Cutting-edge technologies and methodologies for comprehensive
              healthcare software validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Cloud Testing</h4>
              <p className="text-blue-100">
                <Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">AWS, Azure, GCP healthcare cloud validation</Link>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Data Validation</h4>
              <p className="text-blue-100">
                <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">EHR, EMR</Link>, and clinical data integrity testing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Security Testing</h4>
              <p className="text-blue-100">
                Advanced cybersecurity and privacy protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareToolsFrameworkSection;
