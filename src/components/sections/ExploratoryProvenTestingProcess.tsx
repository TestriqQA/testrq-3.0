"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaTools,
  FaClock,
  FaFileAlt,
  FaComments,
  FaSync,
  FaChevronRight,
} from "react-icons/fa";

const ExploratoryProvenTestingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Charter Definition",
      duration: "1-2 Hours",
      icon: <FaSearch className="text-2xl" />,
      description:
        "We define the 'Mission' of the session. In exploratory testing, you might probe the checkout flow with various discount codes to uncover edge-case calculation errors.",
      activities: [
        "Mission objective setup",
        "Risk profile analysis",
        "Scope boundary definition",
        "Resource allocation",
      ],
      nextStep: "Technique Selection",
    },
    {
      id: 2,
      title: "Technique Selection",
      duration: "30 Mins",
      icon: <FaTools className="text-2xl" />,
      description:
        "Choosing between persona-based, touring, or heuristic testing approaches based on the feature's risk profile.",
      activities: [
        "Heuristic selection",
        "Persona modeling",
        "Touring strategy",
        "Tool preparation",
      ],
      nextStep: "Time-Boxed Execution",
    },
    {
      id: 3,
      title: "Time-Boxed Execution",
      duration: "60-90 Mins",
      icon: <FaClock className="text-2xl" />,
      description:
        "We conduct intensive 60-90 minute sessions where testers simultaneously learn the application and identify defects using advanced hunting heuristics.",
      activities: [
        "Simultaneous learning",
        "Defect identification",
        "Heuristic application",
        "Edge case probing",
      ],
      nextStep: "Documentation",
    },
    {
      id: 4,
      title: "Documentation (Session Sheets)",
      duration: "Real-time",
      icon: <FaFileAlt className="text-2xl" />,
      description:
        "Real-time recording of observations, setup data, and potential 'interest points.'",
      activities: [
        "Observation recording",
        "Setup data logging",
        "Screenshot/video capture",
        "Interest point tagging",
      ],
      nextStep: "Debriefing",
    },
    {
      id: 5,
      title: "Debriefing",
      duration: "1 Hour",
      icon: <FaComments className="text-2xl" />,
      description:
        "Our team collaborates with your stakeholders to verify discovered bugs and align on the subsequent testing strategy.",
      activities: [
        "Bug verification",
        "Stakeholder collaboration",
        "Strategy alignment",
        "Impact analysis",
      ],
      nextStep: "Reporting & Sync",
    },
    {
      id: 6,
      title: "Reporting & Regression Sync",
      duration: "Ongoing",
      icon: <FaSync className="text-2xl" />,
      description:
        "We add every critical bug we find to your automated testing suite.",
      activities: [
        "Defect logging",
        "Regression suite update",
        "Test automation sync",
        "Final reporting",
      ],
      nextStep: "Complete",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Exploratory Testing{" "}
            <span className="text-brand-blue">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our investigation-driven QA approach blends structured exploration
            with creative investigation techniques to ensure comprehensive
            coverage and maximum issue discovery across all application areas.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeStep === step.id
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } cursor-pointer`}
            >
              <span className="text-2xl">{step.id}</span>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 md:p-8 mb-12">
          <div className="grid justify-center lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center text-white">
                  {steps[activeStep - 1].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-green-600 font-medium">
                    Duration: {steps[activeStep - 1].duration}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {steps[activeStep - 1].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Activities:
                </h4>
                <div className="space-y-3">
                  {steps[activeStep - 1].activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeStep < steps.length && (
                <div className="flex items-center space-x-3 text-green-600">
                  <span className="font-medium">Next Step</span>
                  <span>{steps[activeStep - 1].nextStep}</span>
                  <FaChevronRight className="text-sm" />
                </div>
              )}
            </div>

            {/* Right Content - Process Visualization */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Exploratory Testing Workflow
              </h4>

              {/* Timeline Visualization */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    onClick={() => setActiveStep(step.id)}
                    key={step.id}
                    className={`w-full flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition-all duration-300 ${step.id === activeStep
                      ? "bg-green-100 border-2 border-green-300"
                      : step.id < activeStep
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-gray-50 border-2 border-gray-200"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step.id === activeStep
                        ? "bg-green-600 text-white"
                        : step.id < activeStep
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 text-gray-600"
                        }`}
                    >
                      {step.id < activeStep ? "✓" : step.id}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {step.duration}
                      </div>
                    </div>
                    {step.id === activeStep && (
                      <div className="text-green-600 animate-pulse">
                        {steps[activeStep - 1].icon}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="text-green-600 font-medium">
                    {Math.round((activeStep / steps.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(activeStep / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Session Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-lg font-bold text-green-600">2-4hr</div>
                  <div className="text-xs text-gray-600">Session Length</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-lg font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">Issue Discovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryProvenTestingProcess;
