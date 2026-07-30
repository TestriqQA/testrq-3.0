"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaTools,
  FaCertificate,
  FaUsers,
  FaClipboardCheck,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const CorporateQATrainingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const trainingModules = [
    {
      id: 0,
      title: (<><Link href="/manual-testing-services">Manual Testing Mastery</Link></>),
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      description:
        "Comprehensive manual testing methodologies and best practices",
      features: [
        (<><Link href="/manual-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Test Case Design & Execution</Link></>),
        (<><Link href="/manual-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Exploratory Testing Techniques</Link></>),
        (<><Link href="/qa-documentation-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Bug Reporting & Tracking</Link></>),
        (<><Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">User Experience Testing</Link></>),
        (<><Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">Cross-browser Compatibility</Link></>),
        (<><Link href="/mobile-application-testing" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Mobile Testing Strategies</Link></>),
      ],
      duration: "40 Hours",
      level: "Beginner to Advanced",
      certification: "ISTQB Aligned",
    },
    {
      id: 1,
      title: "Automation Testing Excellence",
      icon: <FaLaptopCode className="text-3xl text-purple-600" />,
      description: "Advanced automation frameworks and tools mastery",
      features: [
        (<><Link href="/selenium-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Selenium WebDriver</Link></>),
        (<><Link href="/automation-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Test Framework Development</Link></>),
        (<><Link href="/blog/post/ci-cd-integration-with-automated-tests">CI/CD Integration</Link></>),
        (<><Link href="/blog/post/api-test-automation-strategy-faster-releases-reliable-integrations">API Test Automation</Link></>),
        "Data-Driven Testing",
        "Page Object Model",
      ],
      duration: "60 Hours",
      level: "Intermediate to Expert",
      certification: "Industry Recognized",
    },
    {
      id: 2,
      title: "Performance Testing Optimization",
      icon: <FaChartLine className="text-3xl text-green-600" />,
      description: "Performance testing strategies and optimization techniques",
      features: [
        (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load Testing Fundamentals</Link></>),
        (<><Link href="/blog/post/top-performance-testing-tools-compared-jmeter-loadrunner-etc">JMeter & LoadRunner</Link></>),
        (<><Link href="/performance-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Performance Monitoring</Link></>),
        (<><Link href="/blog/post/etl-performance-testing">Bottleneck Analysis</Link></>),
        (<><Link href="/blog/post/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users">Scalability Testing</Link></>),
        (<><Link href="/performance-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Performance Tuning</Link></>),
      ],
      duration: "35 Hours",
      level: "Intermediate",
      certification: "Performance Specialist",
    },
    {
      id: 3,
      title: "QA Tools & Frameworks",
      icon: <FaTools className="text-3xl text-orange-600" />,
      description: "Master industry-standard QA tools and frameworks",
      features: [
        (<><Link href="/technology-stack" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Test Management Tools</Link></>),
        "Defect Tracking Systems",
        "Version Control (Git)",
        (<><Link href="/automation-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Continuous Integration</Link></>),
        (<><Link href="/data-analysis-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Reporting & Analytics</Link></>),
        "Quality Metrics",
      ],
      duration: "30 Hours",
      level: "All Levels",
      certification: "Tools Proficiency",
    },
  ];

  const benefits = [
    {
      icon: <FaCertificate className="text-2xl text-blue-600" />,
      title: "Industry Certifications",
      description: "Earn recognized certifications that boost career growth",
    },
    {
      icon: <FaUsers className="text-2xl text-green-600" />,
      title: "Expert Instructors",
      description:
        "Learn from ISTQB-certified professionals with 10+ years experience",
    },
    {
      icon: <FaRocket className="text-2xl text-purple-600" />,
      title: "Hands-on Projects",
      description: "Work on real-world projects and build practical skills",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-orange-600" />,
      title: "Quality Assurance",
      description: "Implement best practices for software quality assurance",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaGraduationCap />
            <span className="text-sm">Comprehensive Training Programs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Future-Proof Your Workforce for <span className="bg-clip-text text-brand-blue">2026 & Beyond</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our enterprise-grade modules move beyond simple instruction to drive workforce transformation. We align with ISO 29119 to ensure global consistency and measurable code quality.
          </p>
        </div>

        {/* Training Modules Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {trainingModules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === index
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {module.icon}
                <span className="hidden sm:inline">{module.title}</span>
              </button>
            ))}
          </div>

          {/* Active Module Content */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  {trainingModules[activeTab].icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {trainingModules[activeTab].title}
                    </h3>
                    <p className="text-gray-600">
                      {trainingModules[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">
                      {trainingModules[activeTab].duration}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Level</div>
                    <div className="font-semibold text-gray-900">
                      {trainingModules[activeTab].level}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-500">Certification</div>
                    <div className="font-semibold text-gray-900">
                      {trainingModules[activeTab].certification}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What You&apos;ll Learn
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {trainingModules[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                    >
                      <FaClipboardCheck className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your QA Team?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already elevated their
              <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">software quality</Link> with our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="border cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors">
                  Request Custom Program
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingComprehensiveSlider;
