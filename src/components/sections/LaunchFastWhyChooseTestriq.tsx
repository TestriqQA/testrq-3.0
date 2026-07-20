"use client";

import React, { useState } from "react";
import {
  FaBolt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaClock,
} from "react-icons/fa";
import Link from "next/link";

const LaunchFastWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      id: 1,
      title: "Affordable QA Sprints",
      metric: "Tiered Pricing",
      icon: <FaBolt className="text-3xl" />,
      color: "blue",
      description:
        "Flexible pricing models that grow as your funding does, ensuring early-stage startups get premium QA without the high overhead.",
      capabilities: [
        "Budget-friendly testing",
        "Scale with funding",
        "Resource optimization",
        "Essential quality discipline",
      ],
    },
    {
      id: 2,
      title: "On-Demand QA Services",
      metric: "Scalable Teams",
      icon: <FaRocket className="text-3xl" />,
      color: "green",
      description:
        "Scale our involvement up or down based on your release calendar and feature pivots. Instant access to senior-level engineers.",
      capabilities: [
        "Instant scaling",
        "Senior engineer access",
        "Feature pivot support",
        "Flexible engagement",
      ],
    },
    {
      id: 3,
      title: "Critical Launch Window",
      metric: "48-72hr Window",
      icon: <FaClock className="text-3xl" />,
      color: "purple",
      description:
        "Our team specializes in the critical 48–72 hour window before your public reveal or investor demo to ensure a flawless first impression.",
      capabilities: [
        "Pre-launch validation",
        "Investor demo readiness",
        "Go-to-market sign-off",
        "Rapid bug resolution",
      ],
    },
    {
      id: 4,
      title: "Agile 24/7 Support",
      metric: "Global Talent",
      icon: <FaUsers className="text-3xl" />,
      color: "orange",
      description:
        "Our 'follow-the-sun' model ensures we test your code while you sleep, with results ready for your morning stand-up.",
      capabilities: [
        "24/7 testing support",
        "Overnight regression",
        "Global team alignment",
        "Daily stand-up ready",
      ],
    },
    {
      id: 5,
      title: "Investor-Ready Quality",
      metric: "Full Traceability",
      icon: <FaChartLine className="text-3xl" />,
      color: "teal",
      description:
        "Demonstrate high-velocity 'Quality Discipline' to potential investors with real-time visibility into metrics and UAT status.",
      capabilities: [
        "Audit-ready docs",
        "Quality metrics dashboard",
        "Full test traceability",
        "Investor-facing reports",
      ],
    },
    {
      id: 6,
      title: "Global Compliance",
      metric: "ISO 29119 Aligned",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "indigo",
      description:
        "Maintain the speed of a startup with the reliability of a global consulting firm, meeting US, UK, and EU market benchmarks.",
      capabilities: [
        "ISO 29119-6 compliance",
        "SOC2/GDPR readiness",
        "Enterprise-level security",
        "Regional market standards",
      ],
    },
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      blue: isHovered
        ? "bg-blue-600 text-white"
        : "bg-blue-50 text-blue-600 border-blue-200",
      green: isHovered
        ? "bg-green-600 text-white"
        : "bg-green-50 text-green-600 border-green-200",
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
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600",
      teal: "bg-teal-600",
      indigo: "bg-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Business Impact: Why Launch-Fast is the{" "}
            <span className="text-brand-blue">Best Choice for Startups</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Partnering with Testriq extends beyond acquiring billable hours. We provide a professional risk-mitigation strategy for your MVP launch, offering affordable testing sprints and 24/7 on-demand support that grows with your funding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${getColorClasses(
                advantage.color,
                hoveredCard === advantage.id
              )}`}
              onMouseEnter={() => setHoveredCard(advantage.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${hoveredCard === advantage.id
                    ? getColorClasses(advantage.color, true)
                    : getIconBgColor(advantage.color)
                    }`}
                >
                  {advantage.icon}
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-bold ${hoveredCard === advantage.id
                      ? "text-white"
                      : "text-gray-900"
                      }`}
                  >
                    {advantage.metric}
                  </div>
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
              <div className="flex justify-center text-center mt-6">
                <Link title="Contact Us – Testriq QA Lab" href="/contact-us"
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${hoveredCard === advantage.id
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
                  Explore LaunchFast QA
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              LaunchFast QA Excellence Network
            </h3>
            <p className="text-gray-600 mb-8">
              <Link title="Rapid testing methodologies" href='blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa' className="text-[theme(color.brand.blue)] underline">Rapid testing methodologies</Link> and technologies we&apos;ve
              successfully implemented
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-sm text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99.5%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">48hr</div>
                <div className="text-sm text-gray-600">Avg Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Accelerate Your Launch?
          </h3>
          <p className="text-gray-600 mb-6">
            Join 300+ startups that trust our LaunchFast QA expertise. Start your journey with rapid testing sprints, <Link title="pre-launch testing" href='blog/post/performance-optimization-for-pre-launch-software-testing' className="text-[theme(color.brand.blue)] underline">pre-launch testing</Link>, and <Link title="go-to-market" href="blog/post/how-automated-testing-boosted-fortune-500-company-productivity" className="text-[theme(color.brand.blue)] underline">go-to-market</Link> QA to ensure on-time, successful launches.
          </p>
          <Link title="Contact Us – Testriq QA Lab" href={"/contact-us"}>
            <button className="cursor-pointer bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Get Started with LaunchFast QA
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastWhyChooseTestriq;
