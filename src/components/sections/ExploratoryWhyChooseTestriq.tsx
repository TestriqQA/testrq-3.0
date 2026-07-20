"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaSearch,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const ExploratoryWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      id: 1,
      title: "Expert Exploration Skills",
      metric: "95% Issue Discovery",
      icon: <FaSearch className="text-3xl" />,
      color: "green",
      description:
        "Our ISTQB-certified exploratory testing specialists blend systematic investigation with creative thinking to uncover critical issues that traditional testing often misses.",
      capabilities: [
        "Session-based test management",
        "Charter-driven exploration",
        "Heuristic evaluation expertise",
        "Risk-based investigation",
      ],
    },
    {
      id: 2,
      title: "Comprehensive Coverage",
      metric: "100% User Journeys",
      icon: <FaLightbulb className="text-3xl" />,
      color: "blue",
      description:
        "Systematic exploration of all user scenarios, edge cases, and integration points for complete coverage.",
      capabilities: [
        "End-to-end journey testing",
        "Edge case discovery",
        "Integration point validation",
        "Cross-platform exploration",
      ],
    },
    {
      id: 3,
      title: "Human-Centered Approach",
      metric: "Real User Perspective",
      icon: <FaUsers className="text-3xl" />,
      color: "purple",
      description:
        "Testing from real user perspectives using personas, scenarios, and actual usage patterns.",
      capabilities: [
        "Persona-based testing",
        "User empathy mapping",
        "Accessibility evaluation",
        "Usability assessment",
      ],
    },
    {
      id: 4,
      title: "Actionable Insights",
      metric: "Detailed Reporting",
      icon: <FaChartLine className="text-3xl" />,
      color: "orange",
      description:
        "Comprehensive documentation with actionable insights, improvement recommendations, and priority guidance.",
      capabilities: [
        "Detailed bug reports",
        "Improvement recommendations",
        "Risk assessment",
        "Priority guidance",
      ],
    },
    {
      id: 5,
      title: "Quality Assurance",
      metric: "Zero Missed Issues",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "teal",
      description:
        "Rigorous quality processes ensure no critical issues are missed during exploration sessions.",
      capabilities: [
        "Systematic documentation",
        "Peer review process",
        "Quality checkpoints",
        "Verification protocols",
      ],
    },
    {
      id: 6,
      title: "Rapid Turnaround",
      metric: "Same-Day Results",
      icon: <FaClock className="text-3xl" />,
      color: "indigo",
      description:
        "Fast exploration cycles with immediate feedback and rapid issue identification for agile teams.",
      capabilities: [
        "Real-time reporting",
        "Immediate feedback",
        "Agile integration",
        "Continuous exploration",
      ],
    },
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      green: isHovered
        ? "bg-green-600 text-white"
        : "bg-green-50 text-green-600 border-green-200",
      blue: isHovered
        ? "bg-blue-600 text-white"
        : "bg-blue-50 text-blue-600 border-blue-200",
      purple: isHovered
        ? "bg-purple-600 text-white"
        : "bg-purple-50 text-purple-600 border-purple-200",
      orange: isHovered
        ? "bg-orange-600 text-white"
        : "bg-orange-50 text-orange-600 border-orange-200",
      teal: isHovered
        ? "bg-teal-600 text-white"
        : "bg-teal-50 text-teal-600 border-teal-200",
      indigo: isHovered
        ? "bg-indigo-600 text-white"
        : "bg-indigo-50 text-indigo-600 border-indigo-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      green: "bg-green-600",
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600",
      teal: "bg-teal-600",
      indigo: "bg-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Why Choose Testriq </span>for
            Exploratory Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We combine expert exploratory testing skills with <Link href='blog/post/usability-investigation-how-exploratory-testing-elevates-ux' className="text-[theme(color.brand.blue)] underline">systematic investigation</Link> techniques to deliver comprehensive exploratory testing that uncovers <Link href='blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality' className="text-[theme(color.brand.blue)] underline">critical issues</Link> and provides actionable insights for continuous product improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`p-4 lg:p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${getColorClasses(
                advantage.color,
                hoveredCard === advantage.id
              )}`}
              onMouseEnter={() => setHoveredCard(advantage.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${hoveredCard === advantage.id
                    ? getColorClasses(advantage.color, true)
                    : getIconBgColor(advantage.color)
                    }`}
                >
                  {advantage.icon}
                </div>
                <div
                  className={`text-lg font-bold ${hoveredCard === advantage.id
                    ? "text-white"
                    : "text-gray-900"
                    }`}
                >
                  {advantage.metric}
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-4 ${hoveredCard === advantage.id ? "text-white" : "text-gray-900"
                  }`}
              >
                {advantage.title}
              </h3>

              <p
                className={`mb-6 leading-relaxed ${hoveredCard === advantage.id
                  ? "text-white text-opacity-90"
                  : "text-gray-600"
                  }`}
              >
                {advantage.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-3">
                <h4
                  className={`font-semibold ${hoveredCard === advantage.id
                    ? "text-white"
                    : "text-gray-900"
                    }`}
                >
                  Key Capabilities:
                </h4>
                <div className="space-y-2">
                  {advantage.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${hoveredCard === advantage.id
                          ? "bg-white bg-opacity-70"
                          : getIconBgColor(advantage.color)
                          }`}
                      ></div>
                      <span
                        className={`text-sm ${hoveredCard === advantage.id
                          ? "text-white text-opacity-90"
                          : "text-gray-700"
                          }`}
                      >
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/contact-us">
                <button
                  className={`w-full cursor-pointer mt-10 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${hoveredCard === advantage.id
                    ? `bg-white bg-opacity-20 border-2 ${getColorClasses(
                      advantage.color,
                      false
                    )} border-white border-opacity-30`
                    : `${getColorClasses(
                      advantage.color,
                      false
                    )} hover:shadow-lg`
                    }`}
                >
                  Explore Testing
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Exploratory Testing Excellence Network
            </h3>
            <p className="text-gray-600 mb-8">
              Exploration techniques and methodologies we&apos;ve successfully
              implemented
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">60000+</div>
                <div className="text-sm text-gray-600">Bugs Discovered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">
                  Issue Detection Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Apps Explored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Discover Hidden Issues?
          </h3>
          <p className="text-gray-600 mb-6">
            Join 500+ companies who trust our exploratory testing expertise. Get started with systematic exploration and uncover critical issues that scripted testing misses.
          </p>
          <Link href={"/contact-us"} className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Get Started with Exploratory Testing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploratoryWhyChooseTestriq;
