"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBuilding,
  FaHeart,
  FaShoppingCart,
  FaUniversity,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

const QADocumentationCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      industry: "Healthcare Technology",
      icon: FaHeart,
      company: "MedTech Solutions",
      title:
        "Comprehensive QA Documentation for FDA-Compliant Medical Device Software",
      challenge:
        "MedTech Solutions needed comprehensive QA documentation for their medical device software to meet FDA 21 CFR Part 11 compliance requirements. Their existing documentation was fragmented across multiple systems and lacked the rigor required for regulatory approval.",
      solution:
        "We implemented a complete QA documentation framework including detailed test plans, validation protocols, risk assessment documentation, and traceability matrices. Our team created standardized templates and processes that ensured consistent documentation across all development phases.",
      results: [
        "100% FDA compliance achieved on first submission",
        "Documentation creation time reduced by 65%",
        "Zero critical findings during FDA audit",
        "Streamlined approval process saving 4 months",
      ],
      metrics: {
        timeReduction: "65%",
        complianceRate: "100%",
        auditFindings: "0",
        timeSaved: "4 months",
      },
      technologies: ["Confluence", "JIRA", "TestRail", "SharePoint"],
      testimonial:
        "Testriq's documentation expertise was instrumental in achieving FDA approval. Their comprehensive approach and attention to regulatory details saved us months of rework.",
      clientRole: "VP of Quality Assurance",
      color: "red",
    },
    {
      id: 2,
      industry: "Financial Services",
      icon: FaBuilding,
      company: "FinanceFirst Bank",
      title:
        "Enterprise QA Documentation Standardization for Digital Banking Platform",
      challenge:
        "FinanceFirst Bank's digital transformation required standardized QA documentation across 15 development teams working on their new banking platform. Inconsistent documentation practices were causing delays and quality issues.",
      solution:
        "We developed a comprehensive documentation framework with standardized templates, automated workflows, and integrated review processes. Our solution included test case libraries, requirement traceability, and compliance documentation for SOX and PCI DSS requirements.",
      results: [
        "Standardized documentation across 15 teams",
        "50% reduction in review cycle time",
        "95% improvement in requirement traceability",
        "Zero compliance violations in annual audit",
      ],
      metrics: {
        teamsStandardized: "15",
        reviewTimeReduction: "50%",
        traceabilityImprovement: "95%",
        complianceViolations: "0",
      },
      technologies: ["Azure DevOps", "Confluence", "Power BI", "SharePoint"],
      testimonial:
        "The standardized documentation framework transformed our development process. We now have consistent, high-quality documentation across all teams.",
      clientRole: "Chief Technology Officer",
      color: "blue",
    },
    {
      id: 3,
      industry: "E-commerce",
      icon: FaShoppingCart,
      company: "GlobalShop Inc.",
      title: "Agile QA Documentation for Multi-Platform E-commerce Solution",
      challenge:
        "GlobalShop Inc. needed agile-friendly QA documentation for their multi-platform e-commerce solution supporting web, mobile, and API integrations. Traditional documentation approaches were too slow for their rapid release cycles.",
      solution:
        "We implemented a lean documentation approach with living documents, automated test case generation, and integrated CI/CD documentation workflows. Our solution included user story documentation, acceptance criteria templates, and automated reporting.",
      results: [
        "Documentation delivery aligned with 2-week sprints",
        "40% faster time-to-market for new features",
        "90% reduction in documentation maintenance effort",
        "Improved cross-team collaboration and clarity",
      ],
      metrics: {
        sprintAlignment: "100%",
        timeToMarket: "40% faster",
        maintenanceReduction: "90%",
        teamSatisfaction: "95%",
      },
      technologies: ["GitHub", "Notion", "Slack", "Jenkins"],
      testimonial:
        "Testriq's agile documentation approach perfectly matched our fast-paced development environment. Documentation is no longer a bottleneck.",
      clientRole: "Head of Engineering",
      color: "green",
    },
    {
      id: 4,
      industry: "Education Technology",
      icon: FaUniversity,
      company: "EduTech University",
      title: "Comprehensive Documentation for Learning Management System",
      challenge:
        "EduTech University required comprehensive QA documentation for their new learning management system serving 50,000+ students. The system needed to meet accessibility standards (WCAG 2.1) and integrate with multiple third-party educational tools.",
      solution:
        "We created detailed documentation covering functional testing, accessibility testing, integration testing, and performance testing. Our documentation included user acceptance testing procedures, accessibility compliance checklists, and comprehensive test data management guidelines.",
      results: [
        "WCAG 2.1 AA compliance achieved",
        "Successful integration with 25+ third-party tools",
        "99.9% system uptime during peak enrollment",
        "Positive feedback from 95% of faculty users",
      ],
      metrics: {
        accessibilityCompliance: "WCAG 2.1 AA",
        integrations: "25+",
        uptime: "99.9%",
        userSatisfaction: "95%",
      },
      technologies: ["TestRail", "Confluence", "JIRA", "Accessibility Tools"],
      testimonial:
        "The comprehensive documentation ensured our LMS launch was smooth and successful. Every aspect was thoroughly documented and tested.",
      clientRole: "Director of IT Services",
      color: "purple",
    },
  ];

  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
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
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const colors = getColorClasses(currentCase.color);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaCheckCircle className="mr-2" />
            Success Stories & Case Studies
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Results from QA Documentation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our comprehensive <Link href="/blog/post/how-to-write-secure-test-cases-2">QA documentation</Link> services have helped
            organizations across various industries achieve <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">compliance</Link>, enhance
            software <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">quality assurance</Link>, improve documentation clarity and
            efficiency, and accelerate project delivery through well-structured
            test plans, <Link href="/blog/post/how-many-test-cases-have-you-automated-per-day">test cases</Link>, and QA process documentation.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevCase}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Left navigation button"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  aria-label="Navigation dots"
                  className="p-2 min-w-[24px] min-h-[24px] flex items-center justify-center"
                >
                  <span
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      activeCase === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextCase}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Right navigation button"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div
                  className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4`}
                >
                  <currentCase.icon className="mr-2" />
                  {currentCase.industry}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentCase.company}
                </h3>
                <h4 className="text-xl text-gray-700 mb-6">
                  {currentCase.title}
                </h4>
              </div>

              {/* Challenge */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Challenge
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {currentCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Solution
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Results */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Results
                </h5>
                <div className="space-y-3">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Impact Metrics
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentCase.metrics).map(
                    ([key, value], index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-2xl font-bold ${colors.text} mb-1`}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Client Testimonial
                </h5>
                <blockquote className="text-gray-700 italic mb-4">
                  &quot;{currentCase.testimonial}&quot;
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">{currentCase.clientRole}</div>
                  <div>{currentCase.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Overview */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Diverse Industries
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our QA documentation expertise spans across multiple industries,
              each with unique requirements and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              const isActive = activeCase === index;
              const studyColors = getColorClasses(study.color);

              return (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`p-6 rounded-xl transition-all duration-200 text-center ${
                    isActive
                      ? `${studyColors.bg} ${studyColors.border} border-2 shadow-md`
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${studyColors.bg} flex items-center justify-center mx-auto mb-3`}
                  >
                    <IconComponent className={`text-xl ${studyColors.text}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {study.industry}
                  </h4>
                  <p className="text-sm text-gray-600">{study.company}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your QA Documentation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join these successful organizations and experience the benefits of
              professional <Link href="/blog/post/a-step-by-step-guide-to-the-qa-documentation-services-process">QA documentation services</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="px-8 py-4 cursor-pointer bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Contact Us
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="px-8 py-4 border-2 cursor-pointer border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                View More Case Studies
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationCaseStudies;
