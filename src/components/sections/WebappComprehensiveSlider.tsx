"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { JSX, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaMobileAlt,
  FaPlug,
} from "react-icons/fa";

type FeatureSet = {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  icon: string | JSX.Element;
  stats: { label: string; value: string }[];
  processLabel?: string;
  processDescription?: string;
  progress?: string;
  features: string[];
  bgColor?: string;
  elColor?: string;
  theme?: string;
  btnText?: string;
  action: Url;
  learnMoreLabel?: string;
};

const testingServices: FeatureSet[] = [
  {
    title: "Security Testing",
    subtitle: "Vulnerability Assessment",
    description:
      (<>Identify vulnerabilities and security flaws to protect your web application from threats, data breaches, and malicious attacks through comprehensive <Link href='security-testing'>security testing</Link> and <Link href='blog/post/ai-security-testing'>robust data</Link> protection validation.</>),
    icon: "🛡️",
    stats: [
      { label: "Tests Run", value: "200+" },
      { label: "Coverage", value: "99%" },
      { label: "Days", value: "4-5" },
    ],
    processLabel: "Security Testing Process",
    processDescription: "Comprehensive security testing workflow",
    progress: "99%",
    features: [
      "Penetration Testing",
      "Authentication Testing",
      "SQL Injection Testing",
      "Vulnerability Assessment",
      "Data Protection Validation",
      "XSS Prevention Testing",
    ],
    bgColor: "bg-blue-100/80",
    elColor: "bg-blue-400",
    btnText: "Learn More About Security Testing",
    action:"/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities"
  },
  {
    title: "Performance Testing",
    subtitle: "Speed & Scalability Optimization",
    description:
      (<>Evaluate your web application&apos;s speed, scalability, and stability under various load conditions and user scenarios to ensure optimal <Link href='performance-testing-services'>performance</Link> and user experience.</>),
    icon: "🚀",
    stats: [
      { label: "Tests Run", value: "300+" },
      { label: "Coverage", value: "95%" },
      { label: "Days", value: "3-4" },
    ],
    processLabel: "Performance Testing Process",
    processDescription: "Comprehensive performance testing workflow",
    progress: "95%",
    features: [
      "Load Testing",
      "Volume Testing",
      "Memory Leak Detection",
      "Stress Testing",
      "Scalability Analysis",
      "Response Time Optimization",
    ],
    bgColor: "bg-green-100/80",
    elColor: "bg-green-400",
    btnText: "Learn More About Performance Testing",
    action:"/advanced-web-app-performance-testing-techniques-for-load-stress-scalability"
  },
  {
    title: "Usability Testing",
    subtitle: "User Experience Optimization",
    description:
      (<>Ensure your web application provides an intuitive and engaging user experience across all <Link href='blog/post/persona-based-testing-enhancing-qa-with-real-user-simulation'>user personas</Link>, devices, and interaction patterns for maximum user satisfaction.</>),
    features: [
      "User Experience Testing",
      "Navigation Testing",
      "User Journey Validation",
      "Accessibility Testing",
      "Content Testing",
      "A/B Testing Support",
    ],
    stats: [
      { label: "Tests Run", value: "150+" },
      { label: "Coverage", value: "92%" },
      { label: "Days", value: "2-3" },
    ],
    processLabel: "Usability Testing Process",
    processDescription: "Comprehensive usability testing workflow",
    progress: "92%",
    icon: <FaUsers />,
    bgColor: "bg-yellow-100/80",
    elColor: "bg-yellow-400",
    btnText: "Learn More About Usability Testing",
    action:"/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates"
  },
  {
    title: "Responsive Testing",
    subtitle: "Multi-device Compatibility",
    description:
      (<>Verify that your web application works flawlessly across all devices, screen sizes, orientations, and touch interfaces for consistent <Link href='blog/post/user-experience-testing-for-smart-devices-usability-accessibility'>user experiences</Link> everywhere.</>),
    features: [
      "Mobile Responsiveness",
      "Desktop Optimization",
      "Orientation Testing",
      "Tablet Compatibility",
      "Touch Interface Testing",
      "Browser Compatibility",
    ],
    stats: [
      { label: "Tests Run", value: "400+" },
      { label: "Coverage", value: "96%" },
      { label: "Days", value: "1-2" },
    ],
    processLabel: "Responsive Testing Process",
    processDescription: "Comprehensive responsive testing workflow",
    progress: "96%",
    icon: <FaMobileAlt />,
    bgColor: "bg-purple-100/80",
    elColor: "bg-purple-400",
    btnText: "Learn More About Responsive Testing",
    action:"/responsive-web-application-testing-ensuring-seamless-multi-device-compatibility"
  },
  {
    title: "Integration Testing",
    subtitle: "Seamless System Integration",
    description:
      (<>Test the seamless integration between different modules, third-party services, external APIs, and system components to ensure <Link href='blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability'>smooth data flow</Link> and functionality.</>),
    features: [
      "API Integration Testing",
      "Database Integration",
      "Microservices Testing",
      "Third-party Services",
      "System Integration",
      "Data Flow Validation",
    ],
    stats: [
      { label: "Tests Run", value: "250+" },
      { label: "Coverage", value: "94%" },
      { label: "Days", value: "3-4" },
    ],
    processLabel: "Integration Testing Process",
    processDescription: "Comprehensive integration testing workflow",
    progress: "94%",
    icon: <FaPlug />,
    bgColor: "bg-red-100/80",
    elColor: "bg-red-400",
    btnText: "Learn More About Integration Testing",
    action:"/integration-testing-for-web-application-ensuring-seamless-system-interactions"
  },
];

export default function ComprehensiveTestingSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testingServices.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + testingServices.length) % testingServices.length
    );

  const current = testingServices[index];

  return (
    <div className="relative px-8 md:px-12 lg:px-24 py-16 w-full mx-auto bg-[theme(color.background.gray)]">
      <div
        className={`rounded-3xl p-6 lg:p-8 md:p-12 text-black transition-all duration-300 ${current.bgColor}`}
      >
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full hover:bg-white/30 cursor-pointer"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testingServices.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === index ? "bg-gray-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full hover:bg-white/30 cursor-pointer"
            aria-label="Next"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Left Column */}
          <div className="flex flex-col justify-center md:justify-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-3xl">
                {current.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{current.title}</h2>
                <p className="text-lg text-black/80">{current.subtitle}</p>
              </div>
            </div>

            <p className="mb-6 text-black/90">{current.description}</p>

            <ul className="grid grid-cols-2 gap-2 text-sm list-disc list-inside mb-8">
              {current.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            <Link href={`blog/post${current.action}`} className="mt-14 bg-white text-center text-sm lg:text-md xl:text-lg text-black font-semibold py-3 rounded-xl">
              {current.btnText || current.learnMoreLabel}
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-center">
            <div className="rounded-xl p-6 bg-white/10">
              <h3 className="text-xl font-bold mb-4">Service Statistics</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {current.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
                    <div className="text-3xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-black/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>


            {current.processLabel && current.progress && (
              <div className="rounded-xl p-6 bg-white/10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-2xl">{current.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {current.processLabel}
                    </h4>
                    <p className="text-sm text-black/80">
                      {current.processDescription}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{current.progress}</span>
                  </div>
                  <div className="w-full h-3 bg-white/80 rounded-full mt-1">
                    <div
                      className={`h-3 rounded-full ${current.elColor}`} // Use the pre-defined class name
                      style={{ width: current.progress }}
                    ></div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
