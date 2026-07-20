"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaDatabase,
  FaExchangeAlt,
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaFlask,
} from "react-icons/fa";

const ETLComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "quality",
      title: "Data Quality and Integrity Validation (ISO 8000-1:2022)",
      icon: <FaCheckCircle className="w-6 h-6" />,
      coverage: "ISO 8000-1:2022 Aligned",
      description: (
        <>
          Poor <Link href="/data-analysis-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">data quality</Link> is the leading cause of ETL failures. Gartner reports that bad data costs organizations an average of $15 million every year. Challenge: Validating completeness and accuracy across billions of records. Our Solution: We align our ETL quality assurance with the ISO 8000-1:2022 benchmark. We use Query-Surge and i-CEDQ to automate checks at every ETL stage, ensuring your data remains accurate, timely, and portable.
        </>
      ),
      features: [
        "ISO 8000-1:2022 Benchmark",
        "QuerySurge Automation",
        "iCEDQ Validation Checks",
        "Record Completeness QA",
        "Data Portability Audits",
        "Accuracy Validation"
      ],
      metrics: [
        { label: "Accuracy Rate", value: "99.9%" },
        { label: "Timeliness", value: "99.8%" },
        { label: "Completeness", value: "100%" },
      ],
      action: "/data-quality-testing-in-etl"
    },
    {
      id: "transformation",
      title: "Complex Data Transformations and Mapping",
      icon: <FaExchangeAlt className="w-6 h-6" />,
      coverage: "Zero Data Loss Guarantee",
      description:
        "Complex business rules and diverse data sources cause errors in 70% of ETL projects. Challenge: Incremental loads and complex schema evolutions often break mapping logic. Our Solution: We provide rigorous business rules validation and standardized transformation mapping. We use Informatica and Talend to manage complex 'Source-to-Target' logic, guaranteeing perfect accuracy across every pipeline.",
      features: [
        "Business Rule Validation",
        "Source-to-Target Mapping",
        "Informatica/Talend Optimization",
        "Schema Evolution QA",
        "Incremental Load Testing",
        "Transformation Accuracy"
      ],
      metrics: [
        { label: "Mapping Accuracy", value: "100%" },
        { label: "Logic Validation", value: "99.9%" },
        { label: "Schema Stability", value: "99.7%" },
      ],
      action: "/data-transformation-testing"
    },
    {
      id: "performance",
      title: "Performance Testing for High-Volume Data",
      icon: <FaChartLine className="w-6 h-6" />,
      coverage: "Strict SLA Compliance",
      description:
        "With zettabytes of data now the norm, pipelines often suffer from high latency and cloud-native 'throttling.' Challenge: 48% of teams simplify tests to cut costs, missing performance bottlenecks. Our Solution: Our ETL performance testing utilizes a high-performance stack including JMeter and Gatling. We stress-test your pipelines under realistic loads to meet strict SLAs for real-time analytics.",
      features: [
        "JMeter Stress Testing",
        "Gatling Load Validation",
        "High-Volume Latency Audit",
        "Throttling Prevention",
        "SLA Compliance Testing",
        "Bottleneck Identification"
      ],
      metrics: [
        { label: "Throughput", value: "98.5%" },
        { label: "Latency Reduction", value: "95%" },
        { label: "Peak Load Cap", value: "99.9%" },
      ],
      action: "/etl-performance-testing"
    },
    {
      id: "compliance",
      title: "Regulatory Compliance and Data Security",
      icon: <FaShieldAlt className="w-6 h-6" />,
      coverage: "SOC2, ISO & GDPR Integrated",
      description:
        "In 2026, data privacy is a multi-billion euro concern. Challenge: Healthcare and Finance sectors face average breach costs exceeding $10M. Our Solution: We integrate SOC2, ISO, and GDPR compliance into the ETL flow. Our security protocols include data masking, encryption validation, and audit logging. We ensure your migrations comply with HIPAA, SOX, and the EU Data Act.",
      features: [
        "Data Masking Protocols",
        "Encryption Validation",
        "Audit Trail Logging",
        "HIPAA/SOX Compliance",
        "GDPR/CCPA Safeguards",
        "EU Data Act Alignment"
      ],
      metrics: [
        { label: "Security Pass", value: "100%" },
        { label: "Audit Integrity", value: "100%" },
        { label: "Privacy Protection", value: "100%" },
      ],
      action: "/etl-security-testing"
    },
    {
      id: "automation",
      title: "Automation Scalability in DevOps Cycles",
      icon: <FaDatabase className="w-6 h-6" />,
      coverage: "Shortened Regression Cycles",
      description:
        "Global talent shortage affects 77% of teams, yet only 30% of ETL processes are automated. Challenge: Manual testing creates bottlenecks in modern CI/CD/Data-Ops pipelines. Our Solution: We offer ETL testing automation services using Datagaps and QuerySurge. We use ISO/IEC 29119-3 templates to ensure your data warehouse testing scales alongside your development speed.",
      features: [
        "Datagaps Automation",
        "QuerySurge Integration",
        "ISO/IEC 29119-3 Templates",
        "CI/CD/DataOps Flow",
        "Regression Cycle QA",
        "DevOps Scalability"
      ],
      metrics: [
        { label: "Automation Cycle", value: "80% Faster" },
        { label: "Manual Effort Reduc", value: "70%" },
        { label: "Scalability Rate", value: "99.9%" },
      ],
      action: "/data-loading-testing-etl-performance-testing"
    },
  ];

  // Function to move to the next tab
  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % testingTypes.length); // Loop back to the first tab when reaching the last one
  };
  const activeTestingType = testingTypes[activeTab];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Solving Global Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solving the 2026 <span className="text-brand-blue">Global Challenges</span> in ETL Quality Assurance
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The data landscape of 2026 is defined by volume and complexity. As a leading <Link href="/etl-testing-services" className="text-brand-blue font-semibold hover:underline">ETL partner</Link>, we eliminate the <span className="font-semibold text-brand-blue">five main hurdles</span> to enterprise data success.
          </p>
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Description and Features */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  {activeTestingType.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeTestingType.title}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {activeTestingType.coverage}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeTestingType.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeTestingType.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <Link
                  href={`blog/post${activeTestingType.action}`}
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3.5 text-base font-semibold text-white bg-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-600 active:scale-95 shadow-sm hover:shadow-md"
                >
                  {`Explore ${activeTestingType.title}`}
                </Link>
                <button
                  className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={nextTab}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Right Side - Metrics and Visualization */}
            <div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {activeTestingType.title}
                </h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {activeTestingType.coverage}
                </div>
                <div className="space-y-4">
                  {activeTestingType.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold text-blue-600">
                          {metric.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: metric.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h5 className="font-semibold text-gray-900 mb-4">
                  Testing Coverage Visualization
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                    </div>
                    <div className="text-sm text-gray-600">Validated</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold text-lg">
                        ⚡
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">Optimized</div>
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

export default ETLComprehensiveSlider;
