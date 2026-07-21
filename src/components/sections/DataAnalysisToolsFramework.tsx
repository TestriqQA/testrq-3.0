"use client";
import React, { useState } from "react";
import {
  Database,
  BarChart3,
  Brain,
  Cloud,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  FaTools,
  FaPython,
  FaRProject,
  FaDatabase,
  FaJsSquare,
  FaCloud,
  FaSearchPlus,
  FaBrain,
  FaServer,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

const DataAnalysisToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <FaTools className="h-6 w-6" />,
      description: "Core analytical programming for high-fidelity data modeling.",
      tools: [
        {
          name: "Python",
          description: <>Pandas, NumPy, Scikit-learn for <Link href="/technology-stack" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">heavy data lifting</Link>.</>,
          level: "Certified Scientist",
          popularity: "98%",
          icon: <FaPython className="h-6 w-6" />,
        },
        {
          name: "R",
          description: "Statistical computing and professional graphics.",
          level: "High-Tier Analytics",
          popularity: "85%",
          icon: <FaRProject className="h-6 w-6" />,
        },
        {
          name: "SQL",
          description: "Robust data querying and manipulation.",
          level: "Expert Queries",
          popularity: "99%",
          icon: <FaDatabase className="h-6 w-6" />,
        }
      ],
    },
    {
      id: "data-visuals",
      title: "Data Visuals",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Interactive KPI dashboards and narrative data visualization.",
      tools: [
        {
          name: "Tableau",
          description: "Leading enterprise business intelligence tool.",
          level: "Enterprise Dashboards",
          popularity: "94%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "Power BI",
          description: "Interactive visual analytics and custom BI.",
          level: "Business Intelligence",
          popularity: "92%",
          icon: <FaChartLine className="h-6 w-6" />,
        },
        {
          name: "Looker",
          description: "Modern BI platform for real-time visualization.",
          level: "Real-time Analytics",
          popularity: "88%",
          icon: <FaSearchPlus className="h-6 w-6" />,
        },
        {
          name: "D3.js",
          description: "Specialized JavaScript library for custom visuals.",
          level: "Custom Logic",
          popularity: "80%",
          icon: <FaJsSquare className="h-6 w-6" />,
        }
      ],
    },
    {
      id: "distributed-engines",
      title: "Distributed Data Engines",
      icon: <Zap className="h-6 w-6" />,
      description: "Processing zettabytes of data without performance trade-offs.",
      tools: [
        {
          name: "Apache Spark",
          description: "Distributed engine for massive data sets.",
          level: <><Link href="/performance-testing-services" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Zettabyte Scale</Link></>,
          popularity: "95%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "Hadoop",
          description: "Reliable, scalable, distributed computing.",
          level: "Big Data Foundation",
          popularity: "90%",
          icon: <FaServer className="h-6 w-6" />,
        },
        {
          name: "Databricks",
          description: "Unified data analytics platform for teams.",
          level: "Collaborative Data",
          popularity: "86%",
          icon: <FaCogs className="h-6 w-6" />,
        }
      ],
    },
    {
      id: "cloud-warehousing",
      title: "High-Scale Cloud Warehousing",
      icon: <Cloud className="h-6 w-6" />,
      description: "Secure, enterprise-grade storage in the cloud.",
      tools: [
        {
          name: "Snowflake",
          description: "Built-for-the-cloud data warehousing.",
          level: "Cloud Foundation",
          popularity: "94%",
          icon: <FaCloud className="h-6 w-6" />,
        },
        {
          name: "AWS Redshift",
          description: "Amazon's fast, fully managed data warehouse.",
          level: "AWS Infrastructure",
          popularity: "92%",
          icon: <FaDatabase className="h-6 w-6" />,
        },
        {
          name: "Google BigQuery",
          description: "Highly scalable serverless data warehouse.",
          level: "GCP Services",
          popularity: "88%",
          icon: <FaSearchPlus className="h-6 w-6" />,
        }
      ],
    },
    {
      id: "ml-ai",
      title: "ML & AI",
      icon: <Brain className="h-6 w-6" />,
      description: "Leveraging advanced modeling for predictive insights.",
      tools: [
        {
          name: "TensorFlow",
          description: "Comprehensive ecosystem for ML and AI.",
          level: "Advanced Deep Learning",
          popularity: "96%",
          icon: <FaBrain className="h-6 w-6" />,
        },
        {
          name: "PyTorch",
          description: "Flexible deep learning framework.",
          level: "Model Development",
          popularity: "92%",
          icon: <FaBrain className="h-6 w-6" />,
        },
        {
          name: "Keras",
          description: "API for deep learning and neural networks.",
          level: "Rapid Prototyping",
          popularity: "90%",
          icon: <FaCogs className="h-6 w-6" />,
        }
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Advanced Analytics{" "}
            <span className="text-brand-blue">Tools & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge data analysis <Link href="/technology-stack">tools</Link> and analytical frameworks
            to unlock the full potential of your data. Our expertise spans the
            entire <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">data analytics</Link> technology stack, including statistical
            modeling, <Link href="/blog/post/ai-testing-learning-guide">machine learning</Link> model building, and natural language
            processing to drive data-driven recommendations and business
            intelligence.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {toolCategories.map((category, index) => (
              <button
                key={category.id}
                aria-label={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeCategory === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category.icon}
                <span className="ml-2 hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {toolCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600">
                {toolCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolCategories[activeCategory].tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-5 mb-3">
                    <div className="text-brand-blue">{tool.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Complexity Level:</span>
                      <span className="font-medium text-gray-700">
                        {tool.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Industry Adoption:</span>
                      <span className="font-medium text-green-600">
                        {tool.popularity}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: tool.popularity }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Integration */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {toolCategories[activeCategory].title} Integration Capabilities
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Enterprise Integration",
                (<><Link href="/blog/post/cloud-automation-testing-scalable-cost-effective-qa-in-the-cloud">Cloud Deployment</Link></>),
                (<><Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">API Connectivity</Link></>),
                (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Real-time Processing</Link></>),
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-3"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack Architecture */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Complete Analytics Technology Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Data Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Robust <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">data storage</Link>, processing, and management infrastructure
                for all data types.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Analytics Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced machine learning, statistical analysis, and predictive
                modeling capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Presentation Layer
              </h4>
              <p className="text-gray-600 text-sm">
                Interactive dashboards, reports, and <Link href="/technology-stack">visualization tools</Link> for
                actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-brand-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-6">
            Our Technology Implementation Approach
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Assessment</h4>
              <p className="text-blue-100 text-sm">
                Evaluate current infrastructure and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Architecture</h4>
              <p className="text-blue-100 text-sm">
                Design optimal technology stack and architecture
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Implementation</h4>
              <p className="text-blue-100 text-sm">
                Deploy and integrate analytics solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-3">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2"><Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">Optimization</Link></h4>
              <p className="text-blue-100 text-sm">
                Continuous monitoring and <Link href="/performance-testing-services">performance</Link> tuning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisToolsFramework;
