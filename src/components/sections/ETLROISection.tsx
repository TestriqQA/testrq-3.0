// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaDollarSign, FaClock, FaShieldAlt, FaChartLine } from "react-icons/fa";

const ETLROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      colour: "text-green-500",
      percentage: "45%",
      title: "Cost Reduction",
      description: (
        <>
          Average cost savings through <Link href="/automation-testing-services" className="text-green-500 hover:underline">automated ETL testing</Link> and early defect detection in data pipelines
        </>
      ),
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      colour: "text-blue-500",
      percentage: "65%",
      title: "Faster Deployment",
      description: "Reduced time-to-deployment with automated ETL testing processes and continuous validation"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      colour: "text-red-500",
      percentage: "99.8%",
      title: "Data Accuracy",
      description: (
        <>
          Critical <Link href="/data-analysis-services" className="text-red-500 hover:underline">data quality issues</Link> prevented from reaching production environments
        </>
      ),
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      colour: "text-purple-500",
      percentage: "320%",
      title: "ROI Increase",
      description: "Average return on investment within the first year of ETL testing implementation"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">
              Return on Investment
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Measurable ROI</span> from ETL Testing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive ETL testing services deliver quantifiable business value by enhancing data quality, reducing ETL-related costs, and accelerating deployment cycles for your data integration projects, ensuring accuracy, compliance, and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`mb-4 ${metric.colour}`}>
                {metric.icon}
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.colour} mb-2`}>
                {metric.percentage}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your ETL Testing ROI
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how much you can save and gain with our comprehensive ETL testing services. Request a personalized ROI analysis to measure the impact on your data integration project’s cost, accuracy, and performance.
          </p>
          <Link href="/roi-calculator" className="inline-block">
            <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg cursor-pointer">
              Get ROI Analysis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ETLROISection;

