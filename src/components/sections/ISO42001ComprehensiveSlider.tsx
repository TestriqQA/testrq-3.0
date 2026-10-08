"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaClipboardCheck,
  FaSearch,
  FaBrain,
  FaLock,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const ISO42001ComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <FaClipboardCheck className="w-8 h-8" />,
      title: "AIMS Gap Assessment",
      description:
        "We conduct a thorough gap analysis of your current AI management practices against the full ISO/IEC 42001:2023 requirements, identifying areas of non-conformity and providing a prioritized roadmap to certification readiness.",
      features: [
        "Clause-by-Clause Gap Analysis",
        "Annex A Control Assessment",
        "Risk Maturity Evaluation",
        "Certification Readiness Score",
      ],
      gradientColor: "from-emerald-500 to-emerald-600",
      metric: "Full Standard Coverage",
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI Risk & Impact Assessment",
      description:
        "Systematic identification and evaluation of risks associated with your AI systems, including bias testing, fairness analysis, and societal impact assessment in alignment with Annex A controls and the PDCA cycle.",
      features: [
        "Bias & Fairness Testing",
        "Societal Impact Analysis",
        "Risk Treatment Planning",
        "Residual Risk Evaluation",
      ],
      gradientColor: "from-teal-500 to-teal-600",
      metric: "Risk Quantification",
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "AI Transparency & Explainability Testing",
      description:
        "Validating that your AI systems provide adequate explanations for their decisions, testing model interpretability, and verifying that documentation meets transparency requirements set by ISO/IEC 42001.",
      features: [
        "Model Interpretability Testing",
        "Decision Audit Trails",
        "Explainability Metrics (SHAP, LIME)",
        "Stakeholder Communication Validation",
      ],
      gradientColor: "from-blue-500 to-blue-600",
      metric: "Explainability Verified",
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "AI Data Governance Testing",
      description:
        "Comprehensive testing of data pipelines, training data quality, data provenance tracking, and privacy compliance to ensure your AI systems are built on trustworthy, representative, and legally compliant datasets.",
      features: [
        "Training Data Quality Validation",
        "Data Provenance & Lineage Audit",
        "GDPR/Privacy Compliance Testing",
        "Data Bias Detection & Mitigation",
      ],
      gradientColor: "from-indigo-500 to-indigo-600",
      metric: "Data Integrity Assured",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "AI Performance & Monitoring Validation",
      description:
        "Testing the operational monitoring frameworks of your AI systems to ensure continuous performance tracking, drift detection, and model degradation alerts are functioning correctly as required by the standard.",
      features: [
        "Model Drift Detection Testing",
        "Performance Threshold Validation",
        "Logging & Audit Trail Review",
        "Incident Response Testing",
      ],
      gradientColor: "from-cyan-500 to-cyan-600",
      metric: "Continuous Compliance",
    },
  ];

  return (
    <section className="bg-white py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-bold text-sm uppercase tracking-widest shadow-sm">
            Our Compliance Testing Suite
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-emerald-600">ISO 42001</span> Testing
            Services
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From gap assessment to certification support, we provide the
            complete testing infrastructure your AI management system needs to
            achieve and maintain ISO/IEC 42001:2023 compliance.
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 group border ${
                  activeTab === index
                    ? `bg-gradient-to-r ${service.gradientColor} text-white shadow-2xl border-transparent scale-105`
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-100"
                } cursor-pointer`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    activeTab === index
                      ? "bg-white/20"
                      : "bg-white shadow-sm group-hover:bg-emerald-50"
                  }`}
                >
                  {React.cloneElement(
                    service.icon as React.ReactElement,
                    {
                      className: `w-6 h-6 ${
                        activeTab === index ? "text-white" : "text-emerald-600"
                      }`,
                    }
                  )}
                </div>
                <span className="font-bold text-lg leading-tight">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-gray-50 rounded-[3rem] p-12 shadow-inner border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full -mr-32 -mt-32 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  {services[activeTab].metric}
                </div>
                <div className="flex gap-2">
                  {services.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeTab
                          ? "bg-emerald-600 w-12"
                          : "bg-gray-300 w-8"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                {services[activeTab].title}
              </h3>

              <p className="text-gray-600 text-xl leading-relaxed mb-10">
                {services[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {services[activeTab].features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-50/50 hover:shadow-md transition-shadow"
                  >
                    <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-bold text-sm tracking-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Link
                  href="/contact-us"
                  className={`flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r ${services[activeTab].gradientColor} text-white font-black rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}
                >
                  Request This Service <FaArrowRight />
                </Link>
                <button
                  onClick={() =>
                    setActiveTab((prev) => (prev + 1) % services.length)
                  }
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-700 font-black rounded-2xl hover:bg-gray-100 transition-all border border-gray-200 cursor-pointer"
                >
                  Explore Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ISO42001ComprehensiveSlider;
