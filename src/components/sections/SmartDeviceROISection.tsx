// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaDollarSign, FaClock, FaShieldAlt, FaChartLine } from "react-icons/fa";

const SmartDeviceROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      color: "text-green-500",
      percentage: "40%",
      title: "Cost Reduction",
      description: "Average cost savings through early defect detection and prevention in smart device development"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      color: "text-blue-500",
      percentage: "60%",
      title: "Faster Time-to-Market",
      description: (
        <>
          Reduced time-to-market with <Link href="/automation-testing-services" className="text-blue-500 hover:underline">automated smart device testing</Link> processes and validation
        </>
      ),
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: "text-red-500",
      percentage: "99.4%",
      title: "Security Assurance",
      description: (
        <>
          Critical <Link href="/security-testing" className="text-red-500 hover:underline">security vulnerabilities</Link> prevented from reaching production environments
        </>
      ),
    },
    {
      icon: <FaChartLine className="w-8 h-8 " />,
      color: "text-purple-500",
      percentage: "280%",
      title: "ROI Increase",
      description: "Average return on investment within the first year of implementation"
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
            <span className="text-brand-blue">Measurable ROI</span> from Smart Device Testing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive smart device testing services deliver quantifiable business value through improved
            security, reduced costs, and faster time-to-market for your connected devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`mb-4 ${metric.color}`}>
                {metric.icon}
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${metric.color} mb-2`}>
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
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Calculate Your Smart Device Testing ROI
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how much you can save and gain with our comprehensive smart device testing services.
            Get a personalized ROI analysis for your smart device project.
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

export default SmartDeviceROISection;

