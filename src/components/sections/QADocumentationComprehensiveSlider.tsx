"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaClipboardList,
  FaProjectDiagram,
  FaChartLine,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const QADocumentationComprehensiveSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const documentationTypes = [
    {
      id: "test-planning",
      title: (
        <>
          <Link href="/blog/post/test-execution-comprehensive-testing-implementation" className="inline-flex items-center min-h-[24px]">
            Test Planning & Strategy
          </Link>
        </>
      ),
      icon: FaFileAlt,
      color: "blue",
      description:
        "Comprehensive test planning documentation that defines the complete testing approach, scope, and strategy for your projects.",
      features: [
        "Test Strategy Development",
        "Scope Definition & Boundaries",
        "Resource Planning & Allocation",
        <>
          <Link href="/blog/post/risk-based-regression-testing-smarter-test-optimization">
            Risk Assessment & Mitigation
          </Link>
        </>,
        "Timeline & Milestone Planning",
        "Entry & Exit Criteria",
      ],
      benefits: [
        "Reduced planning time by 50%",
        "Improved resource utilization",
        "Clear project roadmap",
        "Risk mitigation strategies",
      ],
      deliverables: [
        "Master Test Plan Document",
        "Test Strategy Framework",
        "Resource Allocation Matrix",
        "Risk Assessment Report",
        "Timeline & Milestones",
        "Quality Gates Definition",
      ],
    },
    {
      id: "test-cases",
      title: (
        <>
          <Link href="/blog/post/test-execution-comprehensive-testing-implementation" className="inline-flex items-center min-h-[24px]">
            Test Case Documentation
          </Link>
        </>
      ),
      icon: FaClipboardList,
      color: "green",
      description:
        "Detailed test case documentation with step-by-step instructions, expected results, and comprehensive traceability.",
      features: [
        <>
          <Link href="/manual-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">
            Detailed Test Case Design
          </Link>
        </>,
        "Step-by-Step Instructions",
        "Expected Results Definition",
        "Traceability Matrix Creation",
        "Priority & Severity Classification",
        "Test Data Requirements",
      ],
      benefits: [
        "Consistent test execution",
        "95% requirement coverage",
        "Reduced execution errors",
        "Improved test maintenance",
      ],
      deliverables: [
        "Test Case Repository",
        "Traceability Matrix",
        "Test Data Specifications",
        "Execution Guidelines",
        "Review Checklists",
        "Maintenance Procedures",
      ],
    },
    {
      id: "requirements",
      title: (
        <>
          <Link href="/blog/post/how-to-write-qa-documentation-a-complete-guide" className="inline-flex items-center min-h-[24px]">
            Requirements Documentation
          </Link>
        </>
      ),
      icon: FaProjectDiagram,
      color: "purple",
      description:
        "Clear and comprehensive requirements documentation that ensures alignment between business needs and technical implementation.",
      features: [
        "Business Requirements Analysis",
        <>
          <Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">
            Functional Specifications
          </Link>
        </>,
        "Non-Functional Requirements",
        <>
          <Link href="/blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques">
            Acceptance Criteria Definition
          </Link>
        </>,
        "User Story Documentation",
        "Requirements Traceability",
      ],
      benefits: [
        "Clear stakeholder alignment",
        "Reduced scope creep",
        "Improved development accuracy",
        "Enhanced user satisfaction",
      ],
      deliverables: [
        "Business Requirements Document",
        "Functional Specifications",
        "User Story Collection",
        "Acceptance Criteria",
        "Requirements Matrix",
        "Change Management Log",
      ],
    },
    {
      id: "process",
      title: "Process Documentation",
      icon: FaCog,
      color: "orange",
      description:
        "Standardized QA processes and procedures that ensure consistency, compliance, and continuous improvement across all projects.",
      features: [
        "Standard Operating Procedures",
        "Quality Gate Definitions",
        "Review Process Guidelines",
        "Compliance Frameworks",
        "Workflow Documentation",
        "Best Practices Compilation",
      ],
      benefits: [
        "Consistent quality delivery",
        "Compliance assurance",
        "Process optimization",
        "Knowledge preservation",
      ],
      deliverables: [
        "SOP Documentation",
        "Process Flow Diagrams",
        "Quality Checklists",
        <>
          <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
            Compliance Guidelines
          </Link>
        </>,
        "Training Materials",
        "Process Metrics",
      ],
    },
    {
      id: "reporting",
      title: "Reporting & Analytics",
      icon: FaChartLine,
      color: "teal",
      description:
        "Comprehensive reporting templates and analytics documentation for tracking quality metrics and project health.",
      features: [
        <>
          <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">
            Quality Metrics Definition
          </Link>
        </>,
        "Dashboard Templates",
        "Progress Reporting",
        "KPI Tracking Systems",
        <><Link href="/data-analysis-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Trend Analysis</Link></>,
        "Executive Summaries",
      ],
      benefits: [
        <>
          <Link href="/blog/post/data-quality-testing-in-etl">
            Data-driven decisions
          </Link>
        </>,
        "Improved visibility",
        "Proactive issue detection",
        "Stakeholder confidence",
      ],
      deliverables: [
        "Reporting Templates",
        "Dashboard Designs",
        "Metrics Framework",
        "Analysis Guidelines",
        "Trend Reports",
        "Executive Dashboards",
      ],
    },
    {
      id: "user-acceptance",
      title: (
        <>
          <Link href="/blog/post/user-acceptance-testing-in-manual-testing-use-cases-techniques" className="inline-flex items-center min-h-[24px]">
            User Acceptance Testing
          </Link>
        </>
      ),
      icon: FaUsers,
      color: "indigo",
      description:
        "Comprehensive UAT documentation ensuring end-user requirements are met and business objectives are achieved.",
      features: [
        "UAT Planning & Strategy",
        "User Story Validation",
        "Acceptance Criteria",
        <>
          <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
            Test Scenario Design
          </Link>
        </>,
        "User Training Materials",
        "Sign-off Procedures",
      ],
      benefits: [
        "User satisfaction assurance",
        "Business goal alignment",
        "Smooth deployment",
        <>
          <Link href="/blog/post/launch-day-failures-preventing-critical-issues-on-game-release">
            Reduced post-launch issues
          </Link>
        </>,
      ],
      deliverables: [
        "UAT Test Plan",
        "User Test Scenarios",
        "Training Documentation",
        "Sign-off Templates",
        "Feedback Collection",
        "Deployment Checklist",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const activeDoc = documentationTypes[activeTab];
  const colors = getColorClasses(activeDoc.color);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaFileAlt className="mr-2" />
            Documentation Types & Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Core QA Documentation Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our outsourced QA documentation services cover the entire software testing life cycle (STLC), ensuring technical depth and audit-ready outputs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {documentationTypes.map((doc, index) => {
            const IconComponent = doc.icon;
            const isActive = activeTab === index;
            const tabColors = getColorClasses(doc.color);

            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                  ? `${tabColors.bg} ${tabColors.text} ${tabColors.border} border-2 shadow-md`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent"
                  }`}
              >
                <IconComponent className="mr-2 text-sm" />
                <span className="text-sm">{doc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div
                  className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4`}
                >
                  <activeDoc.icon className="mr-2" />
                  {activeDoc.title}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeDoc.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeDoc.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeDoc.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ${colors.text.replace(
                          "text-",
                          "bg-"
                        )} mr-3`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeDoc.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Deliverables */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Deliverables & Outputs
              </h4>
              <div className="space-y-4">
                {activeDoc.deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {deliverable}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full ${colors.text.replace(
                          "text-",
                          "bg-"
                        )} flex items-center justify-center`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">
                  Ready to Get Started?
                </h5>
                <p className="text-gray-600 text-sm mb-4">
                  Our expert team can help you implement comprehensive{" "}
                  {typeof activeDoc.title === "string"
                    ? activeDoc.title.toLowerCase()
                    : ""}
                  for your projects.
                </p>
                <Link href="/contact-us">
                  <button
                    className={`w-full px-6 py-3 ${colors.text.replace(
                      "text-",
                      "bg-"
                    )} text-white cursor-pointer font-medium rounded-lg hover:opacity-90 transition-opacity duration-200`}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationComprehensiveSlider;
