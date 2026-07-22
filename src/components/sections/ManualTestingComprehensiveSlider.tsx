"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLink, FaProjectDiagram, FaRocket, FaGraduationCap, FaFileSignature, FaFlask } from "react-icons/fa";

const ManualTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "automation-ai-gap",
      title: "Bridging the Automation-AI Gap",
      icon: <FaLink className="text-2xl" />,
      percentage: "2026 Focus",
      color: "blue",
      description: "Many organizations struggle with skill gaps and the high cost of tooling when trying to increase automation. We use the ISO 29119 series to identify where manual testing is most effective. This lets us focus on exploratory testing. Here, our \"human-in-the-loop\" approach provides the intuition needed for complex decisions that AI simply cannot make.",
      features: [
        "ISO 29119-based strategic test allocation",
        "Higher focus on exploratory testing intuition",
        "Human-in-the-loop decision making",
        "Skill gap assessment and mitigation",
        "Tooling cost optimization strategy",
        "AI-Manual hybrid testing strategy"
      ],
      action: "blog/post/the-future-of-manual-testing-adapting-in-an-automated-world"
    },
    {
      id: "system-complexity",
      title: "Managing Exploding System Complexity",
      icon: <FaProjectDiagram className="text-2xl" />,
      percentage: "High Priority",
      color: "purple",
      description: "Modern micro-services often create \"coverage gaps\" that automation misses. Our testers use ISO 29119-4 techniques to maintain consistency across thousands of services. This ensures your test data accurately mimics global production environments.",
      features: [
        "ISO 29119-4 consistent testing techniques",
        "Micro-services coverage gap analysis",
        "Global production data simulation",
        "Multi-service integration validation",
        "Complex dependency mapping",
        "Scalable manual regression models"
      ],
      action: "blog/post/model-validation-for-ai-applications"
    },
    {
      id: "release-cadence",
      title: "Boosting Release Cadence in CI/CD",
      icon: <FaRocket className="text-2xl" />,
      percentage: "Agile Ready",
      color: "green",
      description: "Manual testing shouldn’t kill your momentum. Our team uses the ISO 29119-2 framework to keep testing structured and repeatable. We integrate with your CI/CD pipeline to provide traceable results while protecting your fast time-to-market.",
      features: [
        "ISO 29119-2 structured test framework",
        "Seamless CI/CD pipeline integration",
        "Traceable manual testing results",
        "Rapid sprint-based execution",
        "Time-to-market optimization",
        "Repeatable testing workflows"
      ],
      action: "blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa"
    },
    {
      id: "upskilling-hybrid",
      title: "Upskilling for Hybrid QA Roles",
      icon: <FaGraduationCap className="text-2xl" />,
      percentage: "Certified Team",
      color: "orange",
      description: "The \"manual tester\" of 2026 is a hybrid professional. Our team trains under the ISO process model to gain a shared standard terms. This allows them to work beside automation engineers and AI tools, effectively closing the global skill gap.",
      features: [
        "ISO process model standardized training",
        "Shared QA/Automation vocabulary",
        "Collaboration with AI testing tools",
        "Continuous professional development",
        "Closed loop feedback with engineering",
        "Expert role-based certification"
      ],
      action: "blog/post/the-future-of-manual-testing-adapting-in-an-automated-world"
    },
    {
      id: "standard-design",
      title: "Standard Design and Reporting",
      icon: <FaFileSignature className="text-2xl" />,
      percentage: "New 2024 Standard",
      color: "teal",
      description: "Ad-hoc testing leads to inconsistent quality. We use the ISO 29119-5:2024 standard to guide our keyword-driven and model-based testing. This ensures manual reports give stakeholders clear, data-driven insight into project risk.",
      features: [
        "ISO 29119-5:2024 keyword-driven testing",
        "Model-based manual testing design",
        "Data-driven risk assessment reports",
        "Consistent cross-project metrics",
        "Stakeholder transparency & visibility",
        "Risk-based project insights"
      ],
      action: "blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Navigating the <span className="text-brand-blue">5 Global Challenges</span> of Manual Testing in 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our approach is designed to solve the specific bottlenecks currently plaguing global QA teams, balancing ISO standards with expert human intelligence.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200">
            {testingTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <button
                  key={type.id}
                  aria-label={type.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 min-w-0 px-4 py-4 text-sm font-medium transition-all duration-300 ${activeTab === index
                    ? `${colors.bg} ${colors.text} border-b-2 ${colors.border}`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex sm:flex-col flex-row items-center justify-center space-x-2">
                    <span className={activeTab === index ? colors.text : "text-gray-400"}>
                      {type.icon}
                    </span>
                    <span className="hidden sm:inline">{type.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {testingTypes.map((type, index) => {
              const colors = getColorClasses(type.color);
              return (
                <div
                  key={type.id}
                  className={`${activeTab === index ? "block" : "hidden"} transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                          <span className={colors.text}>{type.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">Success Rate:</span>
                            <span className={`text-lg font-bold ${colors.text}`}>{type.percentage}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {type.description}
                      </p>
                      <Link href={testingTypes[activeTab].action} className="bg-brand-blue text-white inline-block px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Explore {testingTypes[activeTab].title}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gray-400 rounded-full`}></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingComprehensiveSlider;

