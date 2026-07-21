"use client";

import Link from "next/link";
import React, { JSX, useState } from "react";
import { FaSearch, FaRoute, FaEye, FaBug, FaUsers, FaLightbulb } from "react-icons/fa";

const ExploratoryComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const explorationTypes : {
    id: string;
    title: string;
    icon: JSX.Element;
    percentage: string;
    color: string;
    description: React.ReactNode;
    features: string[];
    action: string;
  }[] = [
    {
      id: "session-based-testing",
      title: "Session-Based Testing",
      icon: <FaSearch className="text-2xl" />,
      percentage: "95%",
      color: "green",
      description: (<>Our comprehensive exploratory testing services merge <Link href='blog/post/usability-investigation-how-exploratory-testing-elevates-ux'>systematic investigation</Link> with human intuition to uncover critical issues, usability problems, and edge cases across all platforms, devices, and real-world user scenarios.</>),
      features: [
        "Time-boxed exploration sessions",
        "Charter-based investigation",
        "Session notes and findings",
        "Reproducible test scenarios",
        "Coverage tracking",
        "Risk-based prioritization"
      ],
      action: "/session-based-exploratory-testing-balancing-structure-with-creative-freedom"
    },
    {
      id: "user-journey-exploration",
      title: "User Journey Exploration",
      icon: <FaRoute className="text-2xl" />,
      percentage: "92%",
      color: "blue",
      description: (<><Link href='blog/post/exploratory-software-testing-a-journey-beyond-the-script'>Deep exploration</Link> of user workflows and scenarios across all touchpoints</>),
      features: [
        "End-to-end user flows",
        "Alternative path testing",
        "Edge case scenarios",
        "Cross-platform journeys",
        "Integration point testing",
        "Workflow optimization"
      ],
      action: "/user-journey-exploration-discovering-bugs-across-end-to-end-scenarios"
    },
    {
      id: "usability-investigation",
      title: "Usability Investigation",
      icon: <FaEye className="text-2xl" />,
      percentage: "98%",
      color: "purple",
      description: (<><Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>Comprehensive usability</Link> assessment and user experience evaluation</>),
      features: [
        "Interface design evaluation",
        "Accessibility assessment",
        "User experience optimization",
        "Navigation flow analysis",
        "Content clarity testing",
        "Mobile usability review"
      ],
      action: "/usability-investigation-how-exploratory-testing-elevates-ux"
    },
    {
      id: "bug-discovery",
      title: "Bug Discovery",
      icon: <FaBug className="text-2xl" />,
      percentage: "89%",
      color: "orange",
      description: (<><Link href='blog/post/bug-logging-reporting-in-desktop-testing-best-practices-tools'>Systematic bug</Link> hunting using creative scenarios and heuristic evaluation</>),
      features: [
        "Boundary value testing",
        "Error handling validation",
        "Data integrity checks",
        "Performance edge cases",
        "Security vulnerability hunting",
        "Integration failure scenarios"
      ],
      action: "/bug-discovery-find-hidden-defects-with-heuristic-exploratory-testing"
    },
    {
      id: "persona-based-testing",
      title: "Persona-Based Testing",
      icon: <FaUsers className="text-2xl" />,
      percentage: "94%",
      color: "teal",
      description: (<><Link href='blog/post/session-based-exploratory-testing-balancing-structure-with-creative-freedom'>Role-based exploration</Link> using different user personas and scenarios</>),
      features: [
        "User role simulation",
        "Permission level testing",
        "Workflow customization",
        "Feature accessibility",
        "User preference validation",
        "Context-specific scenarios"
      ],
      action: "/persona-based-testing-enhancing-qa-with-real-user-simulation"
    },
    {
      id: "heuristic-evaluation",
      title: "Heuristic Evaluation",
      icon: <FaLightbulb className="text-2xl" />,
      percentage: "96%",
      color: "indigo",
      description: (<><Link href='blog/post/heuristic-evaluation-in-testing-applying-ux-principles-to-find-flaws'>Expert evaluation</Link> using established usability principles and guidelines</>),
      features: [
        "Nielsen's heuristics application",
        "Design principle validation",
        "Consistency evaluation",
        "Error prevention assessment",
        "User control analysis",
        "Help and documentation review"
      ],
      action: "/heuristic-evaluation-in-testing-applying-ux-principles-to-find-flaws"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "text-green-600 bg-green-50 border-green-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      teal: "text-teal-600 bg-teal-50 border-teal-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      green: "from-green-600 to-green-400",
      blue: "from-blue-600 to-blue-400",
      purple: "from-purple-600 to-purple-400",
      orange: "from-orange-600 to-orange-400",
      teal: "from-teal-600 to-teal-400",
      indigo: "from-indigo-600 to-indigo-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Exploratory Testing <span className="text-brand-blue">Coverage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive exploratory testing services merge systematic investigation with human intuition to uncover <Link href='blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality'>critical issues</Link>, <Link href='blog/post/usability-testing-in-manual-testing-use-cases-techniques'>usability problems</Link>, and <Link href='blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices'>edge cases across all platforms</Link>, devices, and real-world user scenarios.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {explorationTypes.map((type, index) => (
            <button
              key={type.id}
              aria-label={type.title}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === index
                  ? `${getColorClasses(type.color)} border-2`
                  : "text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className={activeTab === index ? "" : "text-gray-400"}>
                {type.icon}
              </span>
              <span className="hidden sm:inline">{type.title}</span>
              <span className="sm:hidden">{type.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(explorationTypes[activeTab].color)}`}>
                  {explorationTypes[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {explorationTypes[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {explorationTypes[activeTab].description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {explorationTypes[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getProgressColor(explorationTypes[activeTab].color)}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={`blog/post${explorationTypes[activeTab].action}`} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${getColorClasses(explorationTypes[activeTab].color)} hover:shadow-lg`}>
                Explore {explorationTypes[activeTab].title}
              </Link>
            </div>

            {/* Right Content - Visualization */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {explorationTypes[activeTab].title}
                </h4>
                <div className="text-3xl font-bold text-gray-900">
                  {explorationTypes[activeTab].percentage}
                  <span className="text-lg text-gray-600"> issue discovery rate</span>
                </div>
              </div>

              {/* Progress Visualization */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Issue Discovery Rate</span>
                    <span className={`font-medium ${explorationTypes[activeTab].color === 'green' ? 'text-green-600' : explorationTypes[activeTab].color === 'blue' ? 'text-blue-600' : explorationTypes[activeTab].color === 'purple' ? 'text-purple-600' : explorationTypes[activeTab].color === 'orange' ? 'text-orange-600' : explorationTypes[activeTab].color === 'teal' ? 'text-teal-600' : 'text-indigo-600'}`}>
                      {explorationTypes[activeTab].percentage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${getProgressColor(explorationTypes[activeTab].color)} h-3 rounded-full transition-all duration-1000`}
                      style={{width: explorationTypes[activeTab].percentage}}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">2-4hr</div>
                    <div className="text-sm text-gray-600">Session Duration</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Expert Support</div>
                  </div>
                </div>
              </div>

              {/* Exploration Techniques Visualization */}
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-3">Exploration Techniques</h5>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getProgressColor(explorationTypes[activeTab].color)} flex items-center justify-center text-white text-sm font-bold`}>
                      ✓
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Systematic</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm font-bold">
                      ⚡
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Intuitive</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-sm font-bold">
                      🎯
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Targeted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploratoryComprehensiveSlider;

