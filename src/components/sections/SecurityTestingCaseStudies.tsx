"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaBuilding,
  FaHeart,
  FaUniversity,
  FaChevronLeft,
  FaChevronRight,
  FaTrophy,
} from "react-icons/fa";

const SecurityTestingCaseStudies: React.FC = () => {
  const [currentStudy, setCurrentStudy] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Banking Platform Security Assessment",
      industry: "Financial Services",
      icon: <FaBuilding className="text-2xl" />,
      client: "Major International Bank",
      challenge:
        "A leading international bank needed comprehensive security testing for their new digital banking platform to ensure compliance with PCI DSS and protect against sophisticated cyber threats targeting financial institutions.",
      solution:
        "Conducted extensive penetration testing, vulnerability assessment, and compliance validation covering web applications, mobile apps, APIs, and backend infrastructure. Implemented advanced threat modeling and red team exercises.",
      results: [
        "Identified and remediated 47 critical security vulnerabilities",
        "Achieved 100% PCI DSS compliance certification",
        "Reduced security incident response time by 65%",
        "Enhanced fraud detection capabilities by 40%",
      ],
      technologies: [
        (<><Link href="/web-application-testing-services">Web Application Testing</Link></>),
        (<><Link href="/api-testing">API Security</Link></>),
        (<><Link href="/mobile-application-testing">Mobile Security</Link></>),
        (<><Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">Network Penetration Testing</Link></>),
      ],
      timeline: "8 weeks",
      teamSize: "12 security experts",
      color: "blue",
    },
    {
      id: 2,
      title: "Healthcare Data Protection & HIPAA Compliance",
      industry: "Healthcare",
      icon: <FaHeart className="text-2xl" />,
      client: "Regional Healthcare Network",
      challenge:
        "A healthcare network managing sensitive patient data across multiple facilities required comprehensive security testing to ensure HIPAA compliance and protect against healthcare-targeted ransomware attacks.",
      solution:
        "Performed thorough security assessment including vulnerability scanning, penetration testing, and compliance validation. Implemented specialized healthcare security controls and data encryption validation.",
      results: [
        "Achieved full HIPAA compliance across all systems",
        "Eliminated 89% of identified security vulnerabilities",
        "Implemented advanced threat detection reducing breach risk by 75%",
        "Enhanced patient data encryption and access controls",
      ],
      technologies: [
        "HIPAA Compliance Testing",
        "Data Encryption Validation",
        "Access Control Testing",
        "Threat Modeling",
      ],
      timeline: "10 weeks",
      teamSize: "8 security specialists",
      color: "red",
    },
    {
      id: 3,
      title: "E-commerce Platform Security Hardening",
      industry: "E-commerce",
      icon: <FaBuilding className="text-2xl" />,
      client: "Global E-commerce Marketplace",
      challenge:
        "A major e-commerce platform processing millions of transactions daily needed comprehensive security testing to protect customer payment data and prevent fraud while maintaining high performance.",
      solution:
        "Conducted extensive web application security testing, payment processing validation, and fraud prevention system assessment. Implemented continuous security monitoring and automated vulnerability scanning.",
      results: [
        "Reduced payment fraud incidents by 82%",
        "Achieved PCI DSS Level 1 compliance",
        "Improved security incident detection by 90%",
        "Enhanced customer trust and platform reliability",
      ],
      technologies: [
        "Payment Security Testing",
        "Fraud Prevention",
        "Web Application Security",
        "Continuous Monitoring",
      ],
      timeline: "12 weeks",
      teamSize: "15 security experts",
      color: "green",
    },
    {
      id: 4,
      title: "Educational Institution Cybersecurity Assessment",
      industry: "Education",
      icon: <FaUniversity className="text-2xl" />,
      client: "State University System",
      challenge:
        "A state university system with multiple campuses needed comprehensive security assessment to protect student data, research information, and academic systems from increasing cyber threats targeting educational institutions.",
      solution:
        "Performed campus-wide security assessment including network penetration testing, web application security, email security, and student information system validation. Implemented security awareness training and incident response procedures.",
      results: [
        "Secured 50,000+ student and faculty records",
        "Reduced security incidents by 70%",
        "Implemented comprehensive security awareness program",
        "Enhanced research data protection and intellectual property security",
      ],
      technologies: [
        "Network Security",
        "Student Information Systems",
        "Research Data Protection",
        "Security Training",
      ],
      timeline: "14 weeks",
      teamSize: "10 security consultants",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        bg: string;
        text: string;
        accent: string;
        border: string;
      };
    } = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        accent: "bg-blue-600",
        border: "border-blue-200",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        accent: "bg-red-600",
        border: "border-red-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        accent: "bg-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        accent: "bg-purple-600",
        border: "border-purple-200",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const currentCaseStudy = caseStudies[currentStudy];
  const colors = getColorClasses(currentCaseStudy.color);

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTrophy />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Security Testing{" "}
            <span className="text-brand-blue">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our comprehensive security testing services have helped
            organizations across various industries strengthen their
            cybersecurity posture, achieve regulatory compliance with standards
            like ISO 27001 and HIPAA, and protect against sophisticated threats
            such as phishing attacks, unauthorized access, and <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">data breaches</Link>.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={prevStudy}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 cursor-pointer"
            aria-label="Left navigation button"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          <div className="flex space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStudy(index)}
                aria-label="Navigation dots"
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentStudy ? "bg-brand-blue" : "bg-gray-300"
                } cursor-pointer`}
              />
            ))}
          </div>

          <button
            onClick={nextStudy}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 cursor-pointer"
            aria-label="Right navigation button"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>

        {/* Current Case Study */}
        <div className={`${colors.bg} rounded-2xl p-8 md:p-12 shadow-xl`}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Overview */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`${colors.accent} w-16 h-16 rounded-2xl flex items-center justify-center`}
                >
                  <span className="text-white">{currentCaseStudy.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    {currentCaseStudy.industry}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {currentCaseStudy.client}
                  </h3>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {currentCaseStudy.title}
              </h4>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 font-medium">Timeline:</span>
                  <span className={`${colors.text} font-semibold`}>
                    {currentCaseStudy.timeline}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 font-medium">Team Size:</span>
                  <span className={`${colors.text} font-semibold`}>
                    {currentCaseStudy.teamSize}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Technologies Used:
                </h5>
                {currentCaseStudy.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 ${colors.accent} rounded-full`}
                    ></div>
                    <span className="text-gray-700 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Challenge
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {currentCaseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  Solution
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {currentCaseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Results & Impact
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentCaseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-sm"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`${colors.accent} w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Security Testing Success Metrics
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional security testing
              results across diverse industries and complex environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Security Assessments
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                15,000+
              </div>
              <div className="text-gray-600 font-medium">
                Vulnerabilities Found
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">
                Critical Issues Identified
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">
                Compliance Success Rate
              </div>
            </div>
          </div>
        </div>

        {/* Industry Coverage */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBuilding className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Financial Services
            </h4>
            <p className="text-sm text-gray-600">
              <Link href="/banking-finance-industry-testing-services">Banking, insurance, and fintech security testing</Link>
            </p>
          </div>

          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2"><Link href="/healthcare-testing-services">Healthcare</Link></h4>
            <p className="text-sm text-gray-600">
              HIPAA compliance and patient data protection
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaBuilding className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2"><Link href="/e-commerce-testing-services">E-commerce</Link></h4>
            <p className="text-sm text-gray-600">
              Payment security and fraud prevention
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaUniversity className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2"><Link href="/e-learning-testing-services">Education</Link></h4>
            <p className="text-sm text-gray-600">
              Student data protection and research security
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Strengthen Your Security Posture?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that trust Testriq for
              comprehensive security testing and cybersecurity expertise.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingCaseStudies;
