// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaDollarSign,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const AIROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: (
        <FaDollarSign className="w-12 h-12 text-[theme(color.brand.blue)]" />
      ),
      value: "45%",
      label: "Cost Reduction",
      description:
        "Average cost savings through early AI model validation and bias prevention",
    },
    {
      icon: <FaClock className="w-12 h-12 text-[theme(color.brand.blue)]" />,
      value: "50%",
      label: "Faster AI Deployment",
      description:
        "Reduced time-to-market with automated AI testing and validation processes",
    },
    {
      icon: (
        <FaShieldAlt className="w-12 h-12 text-[theme(color.brand.blue)]" />
      ),
      value: "99.5%",
      label: "Bias Prevention",
      description:
        "Critical AI bias and fairness issues prevented from reaching production",
    },
    {
      icon: (
        <FaChartLine className="w-12 h-12 text-[theme(color.brand.blue)]" />
      ),
      value: "250%",
      label: "ROI Increase",
      description:
        "Average return on investment within the first year of AI testing implementation",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaChartLine />
            <span className="text-sm">
              Return on Investment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">
              Measurable ROI
            </span>{" "}
            from AI Testing
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our comprehensive AI testing services deliver quantifiable business
            value through improved model accuracy, reduced bias, and faster
            deployment cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roiMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {metric.label}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your AI Testing ROI
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Discover how much you can save and gain with our comprehensive AI
            testing services. Get a personalized ROI analysis for your AI
            project.
          </p>
          <Link href="/roi-calculator" className="inline-block">
            <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
              Get AI ROI Analysis
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIROISection;
