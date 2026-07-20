// F-21: was a 'use client' component but used zero React/Next interactive
// APIs (no useState / useEffect / event handlers / framer-motion / etc.).
// Converted to a Server Component so the 5-card process methodology +
// CTA renders in the initial HTML payload — saves the hydration cost on
// the homepage critical path (Phase 1's F-12 worst Lighthouse mobile 51).
//
// 216 other components exhibit the same anti-pattern site-wide; tracked
// as F-21.1 for a systematic sweep that requires per-file verification
// (some listings may import client-only libraries the heuristic missed).

import Link from "next/link";
import React from "react";
import { FaCogs, FaRocket } from "react-icons/fa";

const processSteps: {
  id: string;
  title: string;
  description: React.ReactNode;
  progress: number;
}[] = [
    {
      id: "01",
      title: "QA Strategy & Consulting",
      description: "We align testing with business ROI, evaluating SDLC visibility and methodology to ensure global readiness.",
      progress: 20,
    },
    {
      id: "02",
      title: "Environment & Synthetic Data",
      description: "Establishing secure protocols and generating realistic, GDPR-compliant synthetic test data for edge cases.",
      progress: 40,
    },
    {
      id: "03",
      title: "Multi-Layered Execution",
      description: "Rigorous regression, cross-browser, and software adaptation testing for global cultural accuracy.",
      progress: 60,
    },
    {
      id: "04",
      title: "Scalability Engineering",
      description: "Stress testing for SaaS and enterprise platforms to ensure infrastructure handles global traffic spikes.",
      progress: 80,
    },
    {
      id: "05",
      title: "AI & ML Validation",
      description: "Expert validation of Gen-AI agents, bias detection, and securing models against modern threats.",
      progress: 100,
    }
  ]


const HomeProcesses = () => {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-20 lg:px-24 bg-white">
      {/* Top Badge + Heading */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
          <FaCogs />
          <span className="text-sm">The Testriq Blueprint</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Step-by-Step{" "}
          <span className="text-[theme(color.brand.blue)]">QA Methodology</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-lg leading-relaxed">
          Our methodology focuses on more than just findings bugs. We evaluate your SDLC Visibility and provide high-level Consulting to align testing with business ROI worldwide.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition duration-300 transform hover:shadow-sky-100 hover:shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[theme(color.brand.blue)] flex items-center justify-center text-sm font-black mb-4 border border-sky-100">
                {step.id}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </div>
            <div className="w-full h-1 mt-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[theme(color.brand.blue)]"
                style={{ width: `${step.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 w-full max-w-2xl mx-auto bg-[theme(color.background.gray)] p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-50">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
            <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />
          </div>
          <div>
            <h3 className="text-gray-900 text-xl font-bold">Ready to Scale?</h3>
            {/* gray-600: this box is on #F5F5F5 (4.43:1 at gray-500). The step
                descriptions above stay gray-500 — they are on white and pass. */}
            <p className="text-gray-600 text-sm">Experience our global blueprint today.</p>
          </div>
        </div>
        <Link title="Get Started" href="/contact-us">
          <button className="whitespace-nowrap bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-600 transition-all hover:scale-105">
            Optimize My QA
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeProcesses;
