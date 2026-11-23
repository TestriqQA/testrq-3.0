// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaChartLine, FaCheckCircle, FaRobot, FaCogs, FaUsers } from "react-icons/fa";

const AutomationTestingROISection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">
              Return on Investment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Strategic Automation Solutions: <span className="text-brand-blue">Solving the 2026 ROI Gap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold italic text-brand-blue">Industry data shows</span> only 25% of firms report immediate ROI. Testriq solves maintenance overhead and script fragility through standardized, resilient frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Maintenance & Flaky Tests */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fixing Flaky Tests</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We implement keyword-driven and model-based testing (MBT) to reduce script fragility and ensure stability.
            </p>
            <div className="mt-4 text-brand-blue font-bold text-sm"><Link href="/qa-documentation-services" className="hover:underline">ISO 29119-5:2024 Compliance</Link></div>
          </div>

          {/* System Complexity */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCogs className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Managing Complexity</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              End-to-end automation for micro-services that tracks data across all integrations and closes coverage gaps.
            </p>
            <div className="mt-4 text-green-600 font-bold text-sm"><Link href="/api-testing" className="hover:underline">Micro-services Optimized</Link></div>
          </div>

          {/* AI-Augmented Testing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaRobot className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bridging the Skill Gap with AI-Augmented Testing</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Using Agentic AI and machine learning to generate test cases and predict failure points before they occur.
            </p>
            <div className="mt-4 text-purple-600 font-bold text-sm"><Link href="/ai-application-testing" className="hover:underline">Agentic AI Driven</Link></div>
          </div>

          {/* Skill Gap Bridge */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bridging the Gap</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We help upskill manual teams by providing expert-led training and intelligent automation tools.
            </p>
            <div className="mt-4 text-orange-600 font-bold text-sm"><Link href="/manual-testing-services" className="hover:underline">Expert Automation Skills</Link></div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact-us">
            <button className="bg-brand-blue text-white cursor-pointer px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Get Your Automation ROI Analysis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingROISection;

