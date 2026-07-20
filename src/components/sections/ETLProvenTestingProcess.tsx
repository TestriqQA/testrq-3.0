"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa";

const ETLProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Analyze Mapping & Logic",
      description:
        "We dissect Source-to-Target mapping documents and business logic requirements to identify early-stage risks.",
      duration: "2-3 days",
      activities: [
        "Mapping Document Review",
        "Business Logic Analysis",
        "Risk Identification",
        "Gap Assessment",
      ],
      nextStep: "Test Data Setup & Masking",
    },
    {
      id: 2,
      title: "Test Data Setup & Masking",
      description:
        "Provisioning compliant, high-integrity data for data migration testing.",
      duration: "3-4 days",
      activities: [
        (<Link key={1} href="/security-testing" className="text-gray-600 hover:text-brand-blue hover:underline">PII Data Masking</Link>),
        "Data Subset Creation",
        "Synthetic Data Gen",
        "Compliance Scrubbing",
      ],
      nextStep: "Extraction (Source) Validation",
    },
    {
      id: 3,
      title: "Extraction (Source) Validation",
      description:
        "Using SQL queries to verify that the extracted data matches the source system's schema and count.",
      duration: "4-5 days",
      activities: [
        "Source Schema Audit",
        "Record Count Match",
        "Metadata Verification",
        "SQL Query Validation",
      ],
      nextStep: "Transformation Logic Testing",
    },
    {
      id: 4,
      title: "Transformation Logic Testing",
      description:
        "We audit the staging area to verify your business logic. This ensures the process executes data cleansing and aggregations flawlessly.",
      duration: "5-7 days",
      activities: [
        "Data Cleansing QA",
        "Aggregation Validation",
        "Staging Area Audit",
        "Logical Rule Checks",
      ],
      nextStep: "Target Load Verification",
    },
    {
      id: 5,
      title: "Target Load Verification",
      description:
        "We verify that the target data warehouse matches the expected output accurately and without data loss.",
      duration: "3-4 days",
      activities: [
        "Data Warehouse Audit",
        "Output Accuracy QA",
        "Zero Data Loss Check",
        "Final State Validation",
      ],
      nextStep: "Performance & Scalability Optimization",
    },
    {
      id: 6,
      title: "Performance & Scalability Optimization",
      description: (
        <>
          Our team identifies bottlenecks through <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">pipeline stress-testing</Link> to guarantee we meet your ETL performance benchmarks.
        </>
      ),
      duration: "4-5 days",
      activities: [
        "Pipeline Stress Tests",
        "Bottleneck Identification",
        "Latency Benchmarking",
        "Throughput Profiling",
      ],
      nextStep: "Project Complete",
    },
  ];

  const currentStep = processSteps[activeStep];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Step-by-Step <span className="text-brand-blue">ETL QA Methodology</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our ETL testing process follows a rigorous, <span className="font-semibold text-brand-blue">6-phase journey</span> designed for maximum information gain and data integrity across every pipeline transition.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex flex-col lg:flex-row items-center justify-between min-w-max lg:min-w-0">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <button
                  onClick={() => setActiveStep(index)}
                  className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-300 ${activeStep === index
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-110"
                    : activeStep > index
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-gray-400 border-gray-300 hover:border-blue-300"
                    }`}
                  aria-label={`Step ${step.id}: ${step.title}`}
                >
                  {activeStep > index ? "✓" : step.id}
                  {activeStep === index && (
                    <div className="absolute -inset-2 bg-blue-200 rounded-full animate-ping opacity-75"></div>
                  )}
                </button>

                {index < processSteps.length - 1 && (
                  <div
                    className={`w-2 h-8 lg:w-12 lg:h-2 mx-0 my-2 lg:mx-2 lg:my-0 rounded transition-colors duration-300 ${activeStep > index ? "bg-green-500" : "bg-gray-300"
                      }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Step Information */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                  {currentStep.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentStep.title}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Duration: {currentStep.duration}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Activities:
                </h4>
                <div className="space-y-2">
                  {currentStep.activities.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentStep.nextStep !== "Project Complete" && (
                <div className="flex items-center text-blue-600 font-semibold">
                  <span className="mr-2">Next Step</span>
                  <FaChevronRight className="w-4 h-4 mr-2" />
                  <span>{currentStep.nextStep}</span>
                </div>
              )}
            </div>

            {/* Right Side - Visual Process Flow */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">
                  ETL Testing Workflow
                </h4>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer ${activeStep === index
                        ? "bg-blue-100 border-l-4 border-blue-500"
                        : activeStep > index
                          ? "bg-green-50 border-l-4 border-green-500"
                          : "bg-gray-50 border-l-4 border-gray-300"
                        }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${activeStep === index
                          ? "bg-blue-500 text-white"
                          : activeStep > index
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-gray-600"
                          }`}
                      >
                        {activeStep > index ? "✓" : step.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-900">
                          {step.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {step.duration}
                        </div>
                      </div>
                      {activeStep === index && (
                        <FaPlay className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ETLProvenTestingProcess;
