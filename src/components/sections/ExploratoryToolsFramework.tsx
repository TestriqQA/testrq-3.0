// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  SiJira,
  SiConfluence,
  SiLoom,
  SiDatadog,
  SiNewrelic,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { TbTestPipe } from "react-icons/tb";

// Tool icons mapping
const toolIcons: Record<string, React.ReactNode> = {
  // Session Management
  "Rapid Reporter": (
    <svg role="img" aria-label="Rapid Reporter Logo" viewBox="0 0 24 24" className="w-5 h-5" fill="#4A90A4">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  ),
  "Session Tester": (
    <TbTestPipe size={20} color="#5C6BC0" aria-label="Session Tester Logo" />
  ),
  "Xray": (
    <Image
      src="/Xray_Logo.png"
      alt="Xray Logo"
      width={20}
      height={20}
      className="object-contain"
    />
  ),
  // Documentation & Traceability
  "Jira": <SiJira size={20} color="#0052CC" aria-label="Jira Logo" />,
  "Azure DevOps": <VscAzureDevops size={20} color="#0078D7" aria-label="Azure DevOps Logo" />,
  "Confluence": <SiConfluence size={20} color="#172B4D" aria-label="Confluence Logo" />,
  // Capture & Annotation
  "Loom": <SiLoom size={20} color="#625DF5" aria-label="Loom Logo" />,
  "Snagit": (
    <svg role="img" aria-label="Snagit Logo" viewBox="0 0 24 24" className="w-5 h-5" fill="#00B388">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM8 15l2.5-3.21 1.79 2.15 2.5-3.22L19 15H5l3 0z" />
    </svg>
  ),
  "Bug Magnet": (
    <Image
      src="/BugMagnet_Logo.png"
      alt="Bug Magnet Logo"
      width={20}
      height={20}
      className="object-contain"
    />
  ),
  // Automated Support
  "mabl": (
    <Image
      src="/Mabl_Logo.png"
      alt="mabl Logo"
      width={20}
      height={20}
      className="object-contain"
    />
  ),
  "Testim": (
    <Image
      src="/Testim_Logo.png"
      alt="Testim Logo"
      width={20}
      height={20}
      className="object-contain"
    />
  ),
  // Environment Monitoring
  "Datadog": <SiDatadog size={20} color="#632CA6" aria-label="Datadog Logo" />,
  "New Relic": <SiNewrelic size={20} color="#008C99" aria-label="New Relic Logo" />,
};

const ExploratoryToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Session Management",
      tools: [
        {
          name: "Rapid Reporter",
          description: "Real-time session-based testing note-taking",
        },
        {
          name: "Session Tester",
          description: "Structured session management and charter tracking",
        },
        {
          name: "Xray",
          description: "Native test management for Jira",
        },
      ],
    },
    {
      title: "Documentation & Traceability",
      tools: [
        {
          name: "Jira",
          description: "Issue tracking and project management",
        },
        {
          name: "Azure DevOps",
          description: "Integrated CI/CD and test planning",
        },
        {
          name: "Confluence",
          description: "Knowledge sharing and documentation",
        },
      ],
    },
    {
      title: "Capture & Annotation",
      tools: [
        {
          name: "Loom",
          description: "Video messaging for bug reproduction",
        },
        {
          name: "Snagit",
          description: "Advanced screen capture and image editing",
        },
        {
          name: "Bug Magnet",
          description: "Chrome extension for exploratory testing",
        },
      ],
    },
    {
      title: "Automated Support",
      tools: [
        {
          name: "mabl",
          description: "Intelligent test automation for regression",
        },
        {
          name: "Testim",
          description: "AI-powered UI testing platform",
        },
      ],
    },
    {
      title: "Environment Monitoring",
      tools: [
        {
          name: "Datadog",
          description: "Cloud monitoring and analytics",
        },
        {
          name: "New Relic",
          description: "Full-stack observability and APM",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploratory Testing{" "}
            <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We leverage specialized <Link href='/technology-stack' className="text-[theme(color.brand.blue)] underline">tools and frameworks</Link> purpose-built for
            exploratory testing to enable <Link href='blog/post/usability-investigation-how-exploratory-testing-elevates-ux' className="text-[theme(color.brand.blue)] underline">systematic investigation</Link>,
            <Link href='blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality' className="text-[theme(color.brand.blue)] underline"> comprehensive documentation</Link>, and seamless collaboration throughout
            the exploration process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-brand-blue rounded-full"></div>
              </div>

              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg border border-gray-100 hover:border-green-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div title={tool.name} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                        {toolIcons[tool.name]}
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors duration-300">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exploration Methodologies */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Exploratory Testing Methodologies
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic exploratory approach blends proven investigation
              techniques with <Link href='/technology-stack' className="text-[theme(color.brand.blue)] underline">modern testing tools</Link> to ensure comprehensive
              coverage and <Link href='blog/post/why-discovery-analysis-matters-in-testing' className="text-[theme(color.brand.blue)] underline">maximum issue discovery</Link> across your application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">SBTM</div>
              <div className="text-sm text-gray-600">
                Session-Based Test Management
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">ET</div>
              <div className="text-sm text-gray-600">Exploratory Testing</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">HE</div>
              <div className="text-sm text-gray-600">Heuristic Evaluation</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">UJT</div>
              <div className="text-sm text-gray-600">User Journey Testing</div>
            </div>
          </div>
        </div>

        {/* Testing Techniques */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Exploration Techniques & Approaches
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our team applies diverse exploration techniques and investigation
            approaches to ensure comprehensive coverage and <Link href='blog/post/why-discovery-analysis-matters-in-testing' className="text-[theme(color.brand.blue)] underline">effective issue
              discovery</Link> across all application types and domains.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Session-Based Testing",
              "Charter-Driven Exploration",
              "Persona-Based Testing",
              "Boundary Value Analysis",
              "Error Guessing",
              "Equivalence Partitioning",
              "State Transition Testing",
              "Use Case Testing",
              "Scenario-Based Testing",
              "Risk-Based Testing",
              "Exploratory Automation",
              "Crowd Testing",
            ].map((technique, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium"
              >
                {technique}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Exploratory Testing Toolkit
            </h3>
            <p className="text-gray-600 mb-8">
              Our <Link href='/technology-stack' className="text-[theme(color.brand.blue)] underline">toolkit</Link> is specifically designed for effective exploratory
              testing, ensuring <Link href='blog/post/usability-investigation-how-exploratory-testing-elevates-ux' className="text-[theme(color.brand.blue)] underline">systematic investigation</Link>, <Link href='blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality' className="text-[theme(color.brand.blue)] underline"> comprehensive documentation</Link>, and actionable insights.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600">Exploration Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">
                  Documentation Platforms
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600">Collaboration Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Coverage Tracking</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact-us" className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore Our Toolkit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryToolsFramework;
