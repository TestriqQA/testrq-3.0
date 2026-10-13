import Link from "next/link";
import React from "react";
import {
  FaDatabase,
  FaSearch,
  FaChartBar,
  FaBrain,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const DataAnalysisProvenTestingProcess = () => {
  const analysisSteps = [
    {
      step: "01",
      title: (<><Link href="/blog/post/why-discovery-analysis-matters-in-testing">Data Discovery</Link> & Assessment</>),
      icon: <FaSearch className="h-8 w-8 text-blue-600" />,
      description:
        "Comprehensive evaluation of available data sources and quality assessment",
      details: [
        "Data source identification and cataloging",
        (<><Link href="/blog/post/data-quality-testing-in-etl">Data quality</Link> assessment and profiling</>),
        "Business requirements gathering",
        "Stakeholder alignment and goal setting",
      ],
      duration: "3-5 days",
      outcome: "Data inventory and analysis roadmap",
    },
    {
      step: "02",
      title: "Data Collection & Integration",
      icon: <FaDatabase className="h-8 w-8 text-purple-600" />,
      description:
        (<>Systematic data gathering and <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">integration</Link> from multiple sources</>),
      details: [
        "Multi-source data extraction",
        (<><Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">Data integration</Link> and consolidation</>),
        "Data validation and verification",
        (<><Link href="/security-testing" className="text-gray-700 hover:text-brand-blue hover:underline decoration-brand-blue">Secure data storage</Link> setup</>),
      ],
      duration: "1-2 weeks",
      outcome: "Unified and validated dataset",
    },
    {
      step: "03",
      title: "Data Cleaning & Preparation",
      icon: <FaCheckCircle className="h-8 w-8 text-green-600" />,
      description:
        "Transform raw data into analysis-ready format through comprehensive cleaning",
      details: [
        "Missing data handling and imputation",
        "Outlier detection and treatment",
        "Data standardization and normalization",
        "Feature engineering and selection",
      ],
      duration: "1-2 weeks",
      outcome: "Clean, analysis-ready dataset",
    },
    {
      step: "04",
      title: "Exploratory Data Analysis",
      icon: <FaChartBar className="h-8 w-8 text-indigo-600" />,
      description:
        "Initial data exploration to understand patterns and relationships",
      details: [
        "Statistical summary generation",
        "Data visualization and plotting",
        "Correlation and relationship analysis",
        "Initial hypothesis formation",
      ],
      duration: "1 week",
      outcome: "Data insights and patterns identified",
    },
    {
      step: "05",
      title: "Advanced Analytics & Modeling",
      icon: <FaBrain className="h-8 w-8 text-orange-600" />,
      description:
        "Apply sophisticated analytical techniques and build predictive models",
      details: [
        "Statistical modeling and analysis",
        (<><Link href="/blog/post/ai-model-accuracy-testing-step-by-step-guide">Machine learning model development</Link></>),
        "Model validation and testing",
        (<><Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">Performance optimization</Link></>),
      ],
      duration: "2-3 weeks",
      outcome: "Validated analytical models",
    },
    {
      step: "06",
      title: "Insights & Recommendations",
      icon: <FaBullseye className="h-8 w-8 text-teal-600" />,
      description: "Generate actionable insights and strategic recommendations",
      details: [
        "Results interpretation and analysis",
        "Business impact assessment",
        "Strategic recommendations development",
        "Implementation roadmap creation",
      ],
      duration: "1 week",
      outcome: "Actionable business insights",
    },
  ];

  const processMetrics = [
    {
      label: (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Data Accuracy</Link></>),
      value: "99.5%",
      description: "Clean and validated data quality",
    },
    {
      label: "Insight Reliability",
      value: "95%",
      description: "Statistically significant findings",
    },
    {
      label: "Implementation Success",
      value: "88%",
      description: "Recommendations successfully adopted",
    },
    {
      label: "ROI Achievement",
      value: "4.2x",
      description: "Average return on analytics investment",
    },
  ];

  const qualityAssurance = [
    "Statistical significance validation",
    "Cross-validation and testing",
    "Peer review and verification",
    "Business logic validation",
    "Results reproducibility testing",
    "Stakeholder feedback integration",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Proven</span> Data Analysis
            Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach to professional data analysis ensures{" "}
            <Link href="/blog/post/how-environment-setup-shapes-reliable-web-application-testing">reliable</Link> data insights and data-driven recommendations through
            rigorous analytical methodologies, statistical modeling, and{" "}
            <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">quality assurance</Link> at every step of the data analytics process.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-teal-200 hidden lg:block"></div>

          <div className="space-y-12">
            {analysisSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                    }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 rounded-full p-3 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">
                          STEP {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <FaCheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaClock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                      <div className="text-sm font-medium text-blue-600">
                        {step.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg my-8 lg:my-0 relative z-10">
                  {step.step}
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quality Assurance & Validation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityAssurance.map((qa, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-center"
              >
                <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{qa}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Process Success Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <FaChartLine className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our proven data analysis process unlock the hidden insights in
              your data and drive strategic business decisions.
            </p>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Start Your Analysis
                <FaArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisProvenTestingProcess;
