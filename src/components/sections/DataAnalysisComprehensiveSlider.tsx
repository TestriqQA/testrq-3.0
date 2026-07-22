"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
  FaFlask,
} from "react-icons/fa";

const DataAnalysisComprehensiveSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const analyticsTypes = [
    {
      id: "prescriptive",
      title: "Prescriptive Intelligence",
      icon: <FaBrain className="h-6 w-6" />,
      description: "Data-driven strategies for success with actionable steps for growth.",
      content: {
        overview: "Prescriptive analytics provides actionable strategies to reach specific goals. We calculate the best course of action to grow small businesses and optimize large enterprises.",
        keyCapabilities: [
          "Actionable Growth Strategies",
          "Business Logic Optimization",
          "Decision Support Systems",
          "Strategic Success Roadmaps",
          "Enterprise Scaling Plans",
          "Resource Optimization"
        ],
        benefits: [
          "Data-driven strategic growth",
          "Optimized ROI for enterprise projects",
          "Confident stakeholder alignment",
          "Proactive business maneuvering"
        ],
        deliverables: "Strategy Roadmaps → Action Plans → Optimization Models → Growth Forecasts"
      },
    },
    {
      id: "diagnostic-predictive",
      title: "Diagnostic & Predictive",
      icon: <FaChartLine className="h-6 w-6" />,
      description: "Identify why events happened and forecast strategic trends.",
      content: {
        overview: "We identify root causes using Python and R frameworks to forecast strategic trends and anticipate market shifts before they occur.",
        keyCapabilities: [
          "Root Cause Identification",
          "Strategic Trend Forecasting",
          "Python & R Modeling",
          "Market Shift Anticipation",
          "Pattern Recognition",
          "Anomaly Detection"
        ],
        benefits: [
          "Early problem detection",
          "Anticipatory market positioning",
          "High-fidelity trend analysis",
          "Reduced operational risks"
        ],
        deliverables: "Diagnostic Reports → Predictive Models → Trend Analysis → Risk Heatmaps"
      },
    },
    {
      id: "real-time",
      title: "Real-Time Dashboards",
      icon: <FaDatabase className="h-6 w-6" />,
      description: "Monitor inventory, track shipping, and optimize pricing instantly.",
      content: {
        overview: "In e-commerce and retail, real-time tools help you monitor inventory, track shipping, and optimize pricing instantly to prevent revenue loss.",
        keyCapabilities: [
          "E-commerce Real-time Monitoring",
          "Inventory Tracking Tools",
          "Live Pricing Optimization",
          "Shipping Logistics Analysis",
          "Instant Revenue Tracking",
          "Dynamic KPI Dashboards"
        ],
        benefits: [
          "Zero-latency insights",
          "Immediate pricing agility",
          "Streamlined logistics",
          "Maximized sales opportunities"
        ],
        deliverables: "Real-time Dashboards → Live Alerts → Inventory Logs → Dynamic Metrics"
      },
    },
    {
      id: "quality-scrubbing",
      title: "Data Quality & Scrubbing",
      icon: <FaBullseye className="h-6 w-6" />,
      description: "Validating data accuracy and completeness at the source (ISO 8000).",
      content: {
        overview: "We align our Data Cleaning & Scrubbing protocols with the ISO 8000-1:2022 benchmark to end the 'Garbage In, Garbage Out' cycle forever.",
        keyCapabilities: [
          "ISO 8000 Data Quality Audit",
          "Automated Data Cleaning",
          "Anomaly Correction",
          "Duplicate Removal",
          "Source-level Validation",
          "Integrity Frameworking"
        ],
        benefits: [
          "Trustworthy business intelligence",
          "Compliance with global benchmarks",
          "Clean-slate analysis ready",
          "Reduced error propagation"
        ],
        deliverables: "Cleaned Data Sets → Integrity Reports → ISO Audit Logs → Validation Specs"
      },
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete{" "}
            <span className="text-brand-blue">Analytics Methodology Suite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">comprehensive</Link> range of data analysis services designed
            to extract maximum business value from your data at every stage of
            the <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">analytics</Link> maturity journey-from data discovery and <Link href="/blog/post/exploratory-software-testing-a-journey-beyond-the-script">exploratory</Link>
            {" "}data analysis to predictive analytics, prescriptive insights, and
            strategic decision-making.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {analyticsTypes.map((type, index) => (
              <button
                key={type.id}
                aria-label={type.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {type.icon}
                <span className="ml-2 hidden sm:inline">{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  {analyticsTypes[activeTab].icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">
                    {analyticsTypes[activeTab].title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {analyticsTypes[activeTab].content.overview}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Delivery Process
                  </h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <FaArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      {analyticsTypes[activeTab].content.deliverables}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {analyticsTypes[activeTab].content.benefits.map(
                      (benefit, index) => (
                        <div key={index} className="flex items-center">
                          <FaCheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Core Capabilities
                </h4>
                <div className="space-y-3">
                  {analyticsTypes[activeTab].content.keyCapabilities.map(
                    (capability, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">
                          {capability}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl text-white">
                  <h5 className="font-semibold mb-2">Ready to Get Started?</h5>
                  <p className="text-blue-100 text-sm mb-4">
                    Transform your data into actionable insights with our expert
                    analytics services.
                  </p>
                  <Link href="/contact-us">
                    <button className="bg-white cursor-pointer text-brand-blue px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Start Analysis
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Maturity Journey */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Analytics Maturity Journey
          </h3>

          <div className="flex flex-col lg:flex-row  items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {[
              "Descriptive",
              "Diagnostic",
              "Predictive",
              "Prescriptive",
              "Cognitive",
            ].map((stage, index) => (
              <div key={stage} className="flex items-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">{stage}</div>
                  <div className="text-sm text-gray-500">Analytics</div>
                </div>
                {index < 4 && (
                  <FaArrowRight className="h-5 w-5 text-gray-400 ml-4 hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisComprehensiveSlider;
