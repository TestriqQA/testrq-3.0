// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaRocket, FaDollarSign, FaClock, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const LaunchFastROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Faster Time-to-Market",
      value: "60%",
      description: "Reduction in launch timeline",
      details: "Accelerate your product launch with rapid testing cycles and agile methodologies"
    },
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: "Cost Optimization",
      value: "45%",
      description: "Reduction in testing costs",
      details: "Optimize testing expenses through efficient processes and automation"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Development Efficiency",
      value: "70%",
      description: "Faster feedback cycles",
      details: "Rapid feedback enables faster iterations and improved development velocity"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Quality Improvement",
      value: "85%",
      description: "Reduction in post-launch issues",
      details: "Comprehensive testing reduces production bugs and improves user satisfaction"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA <span className="text-brand-blue">ROI & Business Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the measurable ROI and business value our LaunchFast QA services bring to startups and agile development teams through rapid testing sprints across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="bg-brand-blue w-20 h-20 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{metric.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{metric.description}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.details}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Maximize Your ROI?
          </h3>
          <p className="text-gray-600 mb-6">
            Calculate your potential savings and see how LaunchFast QA can accelerate your success.
          </p>
          <Link href="/roi-calculator" className="inline-block">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
              Calculate Your ROI
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastROISection;

