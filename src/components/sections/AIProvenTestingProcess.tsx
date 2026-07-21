"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const AIProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: <FaDatabase className="w-6 h-6" />,
      title: (<Link href='blog/post/why-discovery-analysis-matters-in-testing'>Risk Assessment & Context</Link>),
      shortTitle: "Risk Assessment",
      description:
        "We provide a risk profile for your system (Minimal or High-Risk) to ensure compliance with the EU AI Act and NIST AI RMF.",
      details: [
        "System Risk Profiling",
        "Regulatory Context Analysis",
        "Compliance Gap Assessment",
        "Safety Criticality Check",
      ],
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      duration: "1-2 days",
    },
    {
      number: "02",
      icon: <FaDatabase className="w-6 h-6" />,
      title: (<Link href='blog/post/ai-testing-learning-guide'>Data Quality Audit</Link>),
      shortTitle: "Data Audit",
      description:
        "Validating training/test data for bias, outliers, and quality issues using automated profiling tools to ensure foundational integrity.",
      details: [
        "Bias Detection in Dataset",
        "Outlier Identification",
        "Data Distribution Check",
        "Label Quality Verification",
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      duration: "3-5 days",
    },
    {
      number: "03",
      icon: <FaBrain className="w-6 h-6" />,
      title: (<Link href='blog/post/model-validation-for-ai-applications'>Model Strength Testing</Link>),
      shortTitle: "Model Strength",
      description:
        "We simulate real-world attacks and edge-case stress tests to reveal exactly where varying AI results could cause a failure.",
      details: [
        "Adversarial Attack Simulation",
        "Edge-Case Stress Testing",
        "Robustness Evaluation",
        "Failure Mode Analysis",
      ],
      color: "red",
      gradient: "from-red-500 to-red-600",
      duration: "4-6 days",
    },
    {
      number: "04",
      icon: <FaChartLine className="w-6 h-6" />,
      title: (<Link href='blog/post/explainability-testing-in-ai'>Explainability & Transparency</Link>),
      shortTitle: "Explainability",
      description:
        "Analyzing model decision-making processes (White-box/Black-box) to ensure results are interpretable for regulatory audits.",
      features: [
        "SHAP/LIME Analysis",
        "Decision Logic Review",
        "Transparency Reporting",
        "Audit Trail Generation",
      ],
      details: [
        "SHAP/LIME Analysis",
        "Decision Logic Review",
        "Transparency Reporting",
        "Audit Trail Generation",
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      duration: "3-4 days",
    },
    {
      number: "05",
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: (<Link href='blog/post/ci-cd-test-automation-integration-deliver-faster-with-confidence'>Real-Time Monitoring</Link>),
      shortTitle: "Monitoring",
      description: (
        <>
          We plug intelligent <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">automation testing</Link> checks into your <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">CI/CD pipeline</Link>, including AI regression testing to catch data drift immediately.
        </>
      ),
      details: [
        "CI/CD Pipeline Integration",
        "Drift Detection Setup",
        "Continuous Regression",
        "Real-time Alerts",
      ],
      color: "green",
      gradient: "from-green-500 to-green-600",
      duration: "Ongoing",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-purple-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Step-by-Step{" "}
            <span className="text-[theme(color.brand.blue)]">
              AI QA Methodology
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our systematic approach ensures <Link href='blog/post/why-discovery-analysis-matters-in-testing'>end-to-end</Link> coverage, from risk profiling to real-time monitoring and compliance.
          </p>
        </div>

        {/* Interactive Neural Network Timeline */}
        <div className="relative mb-12">
          {/* Desktop Neural Network Visualization */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Neural Network Layers */}
              <div className="flex justify-between items-center mb-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    {/* Neural Node */}
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 transform hover:scale-110 relative ${activeStep === index
                        ? `bg-gradient-to-r ${step.gradient} shadow-lg`
                        : activeStep > index
                          ? "bg-green-500 shadow-md"
                          : "bg-gray-400"
                        }`}
                      aria-label={`Step ${step.number}: ${step.title}`}
                    >
                      {activeStep > index ? (
                        <FaCheckCircle className="w-6 h-6" />
                      ) : (
                        step.icon
                      )}

                      {/* Neural Connections */}
                      {activeStep === index && (
                        <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
                      )}
                    </button>

                    {/* Connection Lines (Synapses) */}
                    {index < steps.length - 1 && (
                      <div
                        className="pl-2 absolute top-10 left-20 flex items-center"
                        style={{ width: "calc(100vw / 4 - 5rem)" }}
                      >
                        {/* Multiple connection lines for neural network effect */}
                        <div
                          className={`h-1 w-full ${activeStep > index ? "bg-green-500" : "bg-gray-300"
                            } transition-colors duration-300`}
                        ></div>
                        <div
                          className={`h-px w-full absolute top-2 ${activeStep > index ? "bg-green-400" : "bg-gray-200"
                            } transition-colors duration-300`}
                        ></div>
                        <div
                          className={`h-px w-full absolute -top-2 ${activeStep > index ? "bg-green-400" : "bg-gray-200"
                            } transition-colors duration-300`}
                        ></div>
                      </div>
                    )}

                    {/* Step Label */}
                    <div className="mt-4 text-center">
                      <div
                        className={`font-semibold text-sm ${activeStep === index
                          ? `text-${step.color}-600`
                          : "text-gray-600"
                          }`}
                      >
                        {step.shortTitle}
                      </div>
                      <div className="text-xs text-gray-500">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${activeStep === index
                    ? `border-${step.color}-500 bg-${step.color}-50`
                    : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 ${activeStep === index
                        ? `bg-gradient-to-r ${step.gradient}`
                        : "bg-gray-400"
                        }`}
                    >
                      {step.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {step.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${steps[activeStep].gradient} text-white flex items-center justify-center mr-4 shadow-lg`}
                >
                  {steps[activeStep].icon}
                </div>
                <div>
                  <div
                    className={`text-${steps[activeStep].color}-600 font-semibold text-sm`}
                  >
                    Step {steps[activeStep].number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-lg">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                {steps[activeStep].details.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 bg-gradient-to-r from-${steps[activeStep].color}-50 to-${steps[activeStep].color}-100 rounded-lg`}
                  >
                    <div
                      className={`w-3 h-3 bg-${steps[activeStep].color}-500 rounded-full mr-3 animate-pulse`}
                    ></div>
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 pt-4">
                <div
                  className={`bg-${steps[activeStep].color}-100 text-${steps[activeStep].color}-800 px-4 py-2 rounded-full text-sm font-semibold`}
                >
                  Duration: {steps[activeStep].duration}
                </div>

                {(
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${steps[activeStep].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Next Step</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - AI Model Visualization */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br from-${steps[activeStep].color}-50 to-${steps[activeStep].color}-100 p-8 rounded-2xl border border-${steps[activeStep].color}-200`}
              >
                {/* Dynamic AI Visual Based on Active Step */}
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          Data Analysis
                        </span>
                        <FaDatabase className="text-indigo-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Evaluating training datasets
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <div className="text-indigo-600 text-3xl mb-2">🧠</div>
                        <div className="font-semibold text-gray-700">
                          Model Architecture
                        </div>
                        <div className="text-sm text-gray-600">
                          Neural network analysis
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          Model Accuracy
                        </span>
                        <span className="text-purple-600 font-bold">94.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-purple-500 h-3 rounded-full animate-pulse"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-purple-600 text-3xl mb-2">⚖️</div>
                      <div className="font-semibold text-gray-700">
                        Bias Detection
                      </div>
                      <div className="text-sm text-gray-600">
                        Fairness validation
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          Performance Test
                        </span>
                        <span className="text-blue-600 font-bold">0.3s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full animate-pulse"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-blue-600 text-3xl mb-2">🛡️</div>
                      <div className="font-semibold text-gray-700">
                        Security Testing
                      </div>
                      <div className="text-sm text-gray-600">
                        Adversarial robustness
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          AI Report
                        </span>
                        <FaCheckCircle className="text-green-500" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Comprehensive analysis complete
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-green-600 text-3xl mb-2">📊</div>
                      <div className="font-semibold text-gray-700">
                        Optimization Guide
                      </div>
                      <div className="text-sm text-gray-600">
                        Ethical AI recommendations
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          Monitoring Active
                        </span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full animate-pulse"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="text-green-600 text-3xl mb-2">📈</div>
                      <div className="font-semibold text-gray-700">
                        Drift Tracking
                      </div>
                      <div className="text-sm text-gray-600">
                        No anomalies detected
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

export default AIProvenTestingProcess;
