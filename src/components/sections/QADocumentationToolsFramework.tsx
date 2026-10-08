"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaCog,
  FaCloud,
  FaCode,
  FaChartLine,
  FaUsers,
  FaGithub,
  FaMicrosoft,
  FaPlayCircle,
  FaDatabase,
  FaClipboardList,
  FaProjectDiagram,
} from "react-icons/fa";

const QADocumentationToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      id: "management-collaboration",
      title: "Management & Collaboration",
      icon: FaUsers,
      color: "blue",
      description: "Enterprise-grade tools for project management and team collaboration, ensuring a single source of truth.",
      tools: [
        {
          name: "Jira",
          description: <>Leading <Link href="/technology-stack" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">project tracking tool</Link> for Agile teams.</>,
          features: ["Backlog management", "Sprint planning", "Workflow automation", "Custom reporting"],
          useCases: ["Task tracking", "Bug management", "Agile orchestration"],
          icon: <FaCog className="w-6 h-6" />,
        },
        {
          name: "Confluence",
          description: "Collaboration platform for team documentation.",
          features: ["Real-time editing", "Page versioning", "Template library", "Team wikis"],
          useCases: ["Knowledge base", "SOP storage", "Strategy definition"],
          icon: <FaFileAlt className="w-6 h-6" />,
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes and data.",
          features: ["Database integration", "Hierarchical docs", "Template sharing", "AI assistance"],
          useCases: ["Internal wikis", "Onboarding docs", "Roadmap tracking"],
          icon: <FaFileAlt className="w-6 h-6" />,
        },
        {
          name: "SharePoint",
          description: "Microsoft's document management system.",
          features: ["Access control", "File versioning", "Enterprise search", "Team sites"],
          useCases: ["Document storage", <><Link href="/security-testing" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">Compliance audits</Link></>, "Internal portals"],
          icon: <FaMicrosoft className="w-6 h-6" />,
        }
      ],
    },
    {
      id: "test-management",
      title: "Test Management Tools",
      icon: FaClipboardList,
      color: "green",
      description: "Dedicated platforms for managing test cases, execution, and results tracking.",
      tools: [
        {
          name: "TestRail",
          description: "Comprehensive test case management tool.",
          features: ["Test case hierarchy", "Execution tracking", "Milestone planning", "Reporting API"],
          useCases: ["Case organization", "Result tracking", "Team productivity"],
          icon: <FaClipboardList className="w-6 h-6" />,
        },
        {
          name: "Xray",
          description: "The leading quality management app for Jira.",
          features: ["Native Jira integration", "Step-level tracking", "Requirement linkage", "Automated tests"],
          useCases: ["Testing in Jira", "Traceability gap fix", "Audit readiness"],
          icon: <FaProjectDiagram className="w-6 h-6" />,
        },
        {
          name: "Zephyr",
          description: "High-performance test management for enterprise Jira.",
          features: ["Scale readiness", "Metrics dashboards", "One-click automation", "Planning cycles"],
          useCases: ["Enterprise QA", "Large scale testing", "Dashboards"],
          icon: <FaChartLine className="w-6 h-6" />,
        }
      ],
    },
    {
      id: "version-control",
      title: "Version Control",
      icon: FaCode,
      color: "purple",
      description: "Maintaining documentation integrity and 'Documentation-as-Code' practices.",
      tools: [
        {
          name: "Git-Book",
          description: "Modern documentation platform with Git sync.",
          features: ["Git-sync", "Version branch docs", "Review workflows", "Static hosting"],
          useCases: ["Technical guides", "User manuals", "Developer docs"],
          icon: <FaGithub className="w-6 h-6" />,
        },
        {
          name: "GitHub",
          description: "The world's leading AI-powered developer platform.",
          features: ["Doc revisioning", "PR for reviews", "Wiki support", "GitHub Actions"],
          useCases: ["Doc-as-code", <><Link href="/automation-testing-services" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">CI/CD integration</Link></>, "Knowledge base"],
          icon: <FaGithub className="w-6 h-6" />,
        }
      ],
    },
    {
      id: "knowledge-bases",
      title: "Knowledge Bases",
      icon: FaDatabase,
      color: "teal",
      description: "Personal and team knowledge hubs for structured information retrieval.",
      tools: [
        {
          name: "Obsidian",
          description: "Markdown-based local knowledge base.",
          features: ["Graph view", "Bi-directional links", "Offline access", "Custom plugins"],
          useCases: ["Personal QA notes", "Tech specs link", "Logic mapping"],
          icon: <FaCode className="w-6 h-6" />,
        },
        {
          name: "ReadMe.io",
          description: "Interactive API documentation platform.",
          features: ["API explorers", "Real-time sync", "Versioning", "User metrics"],
          useCases: ["API documentation", "Developer hubs", "User guides"],
          icon: <FaPlayCircle className="w-6 h-6" />,
        }
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-purple-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        button: "bg-orange-600",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        button: "bg-teal-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        button: "bg-indigo-600",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const activeToolCategory = toolCategories[activeCategory];
  const colors = getColorClasses(activeToolCategory.color);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaCog className="mr-2" />
            Tools & Frameworks
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Professional QA Documentation Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading <Link href="/technology-stack">tools</Link> and frameworks like <Link href="/blog/post/getting-started-with-selenium-a-beginners-guide">Selenium</Link>,{" "}
            <Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest">Appium</Link>, <Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Cypress</Link>, and Postman to create, manage, and maintain
            comprehensive QA documentation-including test plans, <Link href="/blog/post/how-many-test-cases-have-you-automated-per-day">test cases</Link>, and
            traceability matrices-that enhance team productivity and ensure
            consistent <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">quality assurance</Link> documentation delivery.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {toolCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === index;
            const categoryColors = getColorClasses(category.color);

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                  ? `${categoryColors.bg} ${categoryColors.text} ${categoryColors.border} border-2 shadow-md`
                  : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
                  } cursor-pointer`}
              >
                <IconComponent className="mr-2 text-sm" />
                <span className="text-sm">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <div
              className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4`}
            >
              <activeToolCategory.icon className="mr-2" />
              {activeToolCategory.title}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeToolCategory.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeToolCategory.description}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeToolCategory.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-5 flex items-center gap-5">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.bg} ${colors.text} mb-4`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${colors.text.replace(
                            "text-",
                            "bg-"
                          )} mr-2`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Use Cases:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {tool.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Integrated Technology Ecosystem
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our comprehensive technology stack ensures <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">seamless integration</Link>,
              efficient workflows, and measurable improvements in documentation
              quality and team productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Seamless Integration
              </h4>
              <p className="opacity-90">
                All tools integrate seamlessly to create a unified documentation
                ecosystem that enhances team collaboration and productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Measurable Results</h4>
              <p className="opacity-90">
                <Link href="/blog/post/scorm-compliance-and-learning-analytics-testing-ensuring-accurate-tracking-and-assessment-of-learner-progress">Advanced analytics</Link> and reporting provide insights into
                documentation effectiveness and team performance metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-brand-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCloud className="text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Scalable Infrastructure
              </h4>
              <p className="opacity-90">
                Cloud-based solutions ensure <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">scalability</Link>, <Link href="/security-testing">security</Link>, and{" "}
                <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">accessibility</Link> for teams of any size and geographic distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationToolsFramework;
