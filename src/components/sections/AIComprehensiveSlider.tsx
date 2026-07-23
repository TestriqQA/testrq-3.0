"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBrain,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
  FaArrowRight,
  FaFlask,
  FaRocket,
} from "react-icons/fa";

const AIComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: (<Link href='blog/post/ai-testing-learning-guide'>Data Quality, Bias & Representative</Link>),
      description:
        "AI performance is a direct reflection of its data. Gaps, noise, and label errors translate into catastrophic real-world failures. We move beyond simple data checks to perform bias and representativeness validation.",
      features: [
        "Data Lineage Documentation",
        "Bias & Fairness Validation",
        "Label Error Detection",
        "Representativeness Checks",
      ],
      color: "purple",
      gradientColor: "from-purple-500 to-purple-600",
      metric: "Structured Data Sheets",
      action: "/ai-testing-learning-guide"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: (<Link href='blog/post/model-validation-for-ai-applications'>Solving the &quot;Oracle Problem&quot;</Link>),
      description: (
        <>
          <Link href="/qa-documentation-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Traditional QA</Link> uses fixed logic. AI works on likelihoods. We verify model reasoning using industry-standard tools and establish limits for incorrect AI outputs to ensure reliability.
        </>
      ),
      features: [
        "Model Reasoning Verification",
        "Benefit-Driven Behavior",
        "Output Limit Establishment",
        "Likelihood Validation",
      ],
      color: "blue",
      gradientColor: "from-blue-500 to-blue-600",
      metric: "Reliable Generative AI",
      action: "/model-validation-for-ai-applications"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: (<Link href='blog/post/ai-security-testing'>Safety, Security, and AI Defense</Link>),
      description:
        "We test your models against malicious inputs to ensure they stay secure. Our security protocols follow global standards to ensure resilience against modern risks.",
      features: [
        "Prompt Injection Testing",
        "Data Threat Analysis",
        "Adversarial Attack Simulation",
        "Global Security Standards",
      ],
      color: "red",
      gradientColor: "from-red-500 to-red-600",
      metric: "Resilient AI Defense",
      action: "/ai-security-testing"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: (<Link href='blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance'>Lifecycle Governance & Compliance</Link>),
      description:
        "AI testing is a continuous lifecycle responsibility. We integrate drift monitoring, versioning, and regression testing to ensure updates don't impact performance.",
      features: [
        "Drift Monitoring",
        "Versioning Control",
        "AI Regression Testing",
        "EU AI Act Compliance",
      ],
      color: "green",
      gradientColor: "from-green-500 to-green-600",
      metric: "Compliance Evidence",
      action: "/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: (<Link href='blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence'>Seamless SDLC & CI/CD Integration</Link>),
      description: (
        <>
          We use intelligent <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">automation testing</Link> to validate your AI workflows via custom data pipelines. These tools connect to your current CI/CD systems for quick results.
        </>
      ),
      features: [
        "Intelligent Automation",
        "Custom Data Pipelines",
        "CI/CD Integration",
        "Result Tracking",
      ],
      color: "orange",
      gradientColor: "from-orange-500 to-orange-600",
      metric: "Automated Workflows",
      action: "/ci-cd-test-automation-integration-deliver-faster-with-confidence"
    },
  ];
  // Function to move to the next tab
  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % testingTypes.length); // Loop back to the first tab when reaching the last one
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">5 Critical Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Addressing the{" "}
            <span className="text-[theme(color.brand.blue)]">
              5 Critical Challenges
            </span>
            {" "}of Machine Learning Testing
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The complexity of modern AI requires solving challenges that <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">traditional testing</Link> cannot reach. Our methodology is built to tackle the biggest global hurdles identified in 2026.
          </p>
        </div>

        {/* Active Tab Content with AI-themed Design */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${testingTypes[activeTab].gradientColor} rounded-2xl text-white shadow-lg`}
              >
                {testingTypes[activeTab].icon}
              </div>

              <div>
                <div
                  className={`inline-block bg-${testingTypes[activeTab].color}-100 text-${testingTypes[activeTab].color}-800 px-3 py-1 rounded-full text-sm font-semibold mb-3`}
                >
                  {testingTypes[activeTab].metric}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {testingTypes[activeTab].title}
                </h3>

                <p className="text-gray-700 text-lg mb-6">
                  {testingTypes[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {testingTypes[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 bg-gradient-to-r from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 rounded-lg border border-${testingTypes[activeTab].color}-200`}
                  >
                    <div
                      className={`w-3 h-3 bg-${testingTypes[activeTab].color}-500 rounded-full mr-3 animate-pulse`}
                    ></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:flex justify-between items-center">
                <Link href={`blog/post${testingTypes[activeTab].action}`}
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${testingTypes[activeTab].gradientColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`} aria-label={`Learn more about ${testingTypes[activeTab].title}`}
                >
                  <span>Learn More</span>
<span className="sr-only"> about {testingTypes[activeTab].title}</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>

                {/* Next Button */}
                <button
                  className="w-full mt-4 md:mt-0 md:w-auto px-6 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={nextTab}
                >
                  Next
                </button>

              </div>
            </div>

            {/* Right Side - AI Model Visualization */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${testingTypes[activeTab].color}-50 to-${testingTypes[activeTab].color}-100 p-8 rounded-2xl border border-${testingTypes[activeTab].color}-200`}
              >
                {/* Dynamic AI Visualization Based on Active Tab */}
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Data Quality Score
                        </span>
                        <span className="text-purple-600 font-bold">98.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full animate-pulse"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <div className="text-purple-600 text-3xl mb-2">📊</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Data Lineage
                        </div>
                        <div className="text-xs text-gray-500">
                          Traceability Verified
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-blue-600 text-4xl mb-3">🧠</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Model Reasoning
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Logical
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Consistent
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-xs text-gray-600 mb-1">
                        Output Reliability
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "99%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-red-600 text-4xl mb-3">🛡️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        AI Defense
                      </h4>
                      <div className="text-xs text-gray-500">
                        Adversarial Attack Resistance
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Injection", "Poisoning", "Evasion"].map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="bg-white p-2 rounded shadow-sm"
                          >
                            <div className="flex justify-between text-xs">
                              <span>{feature} Blocked</span>
                              <span>100%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                              <div
                                className="bg-red-500 h-1 rounded-full"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          Drift Detected
                        </span>
                        <span className="text-green-600 font-bold">0%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full animate-pulse"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-green-600 text-3xl mb-2">⚖️</div>
                      <div className="text-sm font-semibold text-gray-700">
                        EU AI Act
                      </div>
                      <div className="text-xs text-gray-500">
                        Fully Compliant
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 4 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-orange-600 text-4xl mb-3">🚀</div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        CI/CD Pipeline
                      </h4>
                      <div className="text-xs text-gray-500">
                        Automated Integration
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded shadow-sm text-center">
                        <div className="text-xs text-gray-600">
                          Automation
                        </div>
                        <div className="text-sm font-bold text-orange-600">
                          100%
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded shadow-sm text-center">
                        <div className="text-xs text-gray-600">Velocity</div>
                        <div className="text-sm font-bold text-orange-600">
                          2x
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIComprehensiveSlider;
