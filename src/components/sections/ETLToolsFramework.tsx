// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaTools } from "react-icons/fa";

const ETLToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "ETL Test Automation",
      tools: [
        {
          name: "QuerySurge",
          description: "High-volume data warehouse validation platform",
        },
        {
          name: "iCEDQ (iceDQ)",
          description: "In-memory data testing for real-time pipelines",
        },
        {
          name: "ETL Validator",
          description: "Datagaps visual test case building & QA",
        },
        {
          name: "RightData",
          description: "Automated data reconciliation & profiling",
        },
      ],
    },
    {
      title: "Data Integration Platforms",
      tools: [
        {
          name: "Informatica PowerCenter",
          description: "Enterprise source-to-target mapping validation",
        },
        {
          name: "Talend",
          description: "Open-source data integration & cleansing",
        },
        {
          name: "Matillion",
          description: "Cloud-native ETL for modern data stacks",
        },
        {
          name: "AWS Glue",
          description: "Serverless data integration and discovery",
        },
      ],
    },
    {
      title: "Performance & Load",
      tools: [
        {
          name: "Apache JMeter",
          description: "ETL pipeline performance profiling at scale",
        },
        {
          name: "LoadRunner",
          description: "Enterprise load testing for data estate",
        },
        {
          name: "Gatling",
          description: "High-density concurrent connection testing",
        },
        {
          name: "k6",
          description: "Modern load testing for cloud pipelines",
        },
      ],
    },
    {
      title: "Cloud Warehousing",
      tools: [
        {
          name: "Snowflake",
          description: "Validation for cloud-native data migrations",
        },
        {
          name: "Databricks",
          description: "Lakehouse architecture and Delta Lake QA",
        },
        {
          name: "Azure Data Factory",
          description: "Orchestration & data movement validation",
        },
        {
          name: "Google BigQuery",
          description: "High-velocity data warehouse stress tests",
        },
      ],
    },
    {
      title: "Enterprise Databases",
      tools: [
        {
          name: "PostgreSQL / Oracle",
          description: "Structured data storage and schema audits",
        },
        {
          name: "MongoDB",
          description: "NoSQL document store validation & testing",
        },
        {
          name: "Microsoft SQL Server",
          description: "Relational database integrity and logic QA",
        },
        {
          name: "Redis",
          description: "In-memory data structure store validation",
        },
      ],
    },
    {
      title: "Validation Engines",
      tools: [
        {
          name: "Python Frameworks",
          description: "Custom backend testing and SQL verification",
        },
        {
          name: "AI Anomaly Detection",
          description: "Automated identification of data outliers",
        },
        {
          name: "Pandas / NumPy",
          description: "Advanced data manipulation and validation",
        },
        {
          name: "Great Expectations",
          description: "Standardized data quality and testing",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testriq&apos; s ETL Technical <span className="text-brand-blue">Tech Stack</span> (2026 Trends)
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We utilize a curated selection of <Link href="/technology-stack" className="text-brand-blue font-semibold underline">etl testing tools</Link> to provide exhaustive validation across your entire <span className="text-brand-blue font-semibold">data estate</span>, ensuring performance and security at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive ETL Testing Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our ETL testing methodology combines{" "}
                <Link href="/technology-stack">industry-leading tools</Link> with proven
                testing frameworks to deliver comprehensive validation of your
                data integration processes. We ensure data accuracy, performance
                optimization, and pipeline reliability across all stages of your
                ETL workflow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Automated testing frameworks
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Data quality validation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Performance optimization
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuous monitoring</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Testing Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">ETL Pipelines</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    36hr
                  </div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/technology-stack"
            title="Explore Our ETL Testing Tools – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-blue transition-colors duration-300"
          >
            Explore Our ETL Testing Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ETLToolsFramework;
