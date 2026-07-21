// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaUsers,
  FaCheckCircle,
  FaChartLine as FaTrendingUp,
  FaRocket,
  FaCalculator
} from "react-icons/fa";

const EcommerceROISection: React.FC = () => {
  const roiMetrics = [
    {
      title: "Revenue Increase",
      value: "35%",
      description: "Average revenue boost from optimized e-commerce platforms",
      icon: FaDollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Conversion Rate",
      value: "+42%",
      description: "Improvement in conversion rates after comprehensive testing",
      icon: FaTrendingUp,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Customer Retention",
      value: "+28%",
      description: "Increase in returning customers due to better user experience",
      icon: FaUsers,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cost Savings",
      value: "60%",
      description: "Reduction in post-launch bug fixes and support tickets",
      icon: FaCalculator,
      color: "from-orange-500 to-red-600"
    }
  ];

  const investmentBreakdown = [
    { category: "Testing Investment", amount: "$25,000", percentage: 100 },
    { category: "Revenue Increase (Year 1)", amount: "$180,000", percentage: 720 },
    { category: "Cost Savings (Year 1)", amount: "$45,000", percentage: 180 },
    { category: "Total ROI (Year 1)", amount: "$200,000", percentage: 800 }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-white gap-2 bg-gradient-to-r from-brand-blue to-sky-600 rounded-full px-6 py-2 mb-6">
            <FaChartLine className="w-4 h-4" />
            <span className="text-sm font-medium">Return on Investment</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Measurable ROI from
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">E-Commerce Testing</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive e-commerce testing approach delivers quantifiable results through <Link href="/performance-testing-services" className="text-brand-blue underline">performance optimization</Link> and <Link href="/manual-testing-services" className="text-brand-blue underline">checkout validation</Link> that directly impact your bottom line. See the average returns our clients achieve.

          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl ring-1 ring-brand-blue p-8 text-center hover:ring-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{metric.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* ROI Calculator Example */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-l from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent mb-4">ROI Calculator Example</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based on a typical e-commerce business with $500K annual revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentBreakdown.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 ring-1 ring-brand-blue text-center shadow-sm hover:shadow-md hover:scale-102 hover:ring-3 transition-all duration-200">
                <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-2">{item.amount}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.category}</h4>
                <div className="text-sm text-gray-600">{item.percentage}% of investment</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-3">
              <FaCheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-700">800% ROI in First Year</span>
            </div>
          </div>
        </div>

        {/* Benefits Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Direct Revenue Impact */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Revenue Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Increased Conversion Rate</span>
                <span className="font-bold text-green-600">+$120,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Reduced Cart Abandonment</span>
                <span className="font-bold text-green-600">+$85,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Mobile Optimization</span>
                <span className="font-bold text-green-600">+$65,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-100 rounded-xl border-2 border-green-200">
                <span className="font-semibold text-gray-900">Total Revenue Increase</span>
                <span className="font-bold text-green-600 text-lg">+$270,000</span>
              </div>
            </div>
          </div>

          {/* Cost Savings */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Savings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Reduced Support Tickets</span>
                <span className="font-bold text-blue-600">-$25,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Prevented Downtime</span>
                <span className="font-bold text-blue-600">-$35,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-gray-700">Avoided Security Breaches</span>
                <span className="font-bold text-blue-600">-$50,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
                <span className="font-semibold text-gray-900">Total Cost Savings</span>
                <span className="font-bold text-blue-600 text-lg">-$110,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline to ROI */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Timeline to ROI</h3>
            <p className="text-lg text-gray-600">See when you can expect to see returns on your testing investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Month 1</h4>
              <p className="text-gray-600 text-sm">Testing begins, initial issues identified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Month 2-3</h4>
              <p className="text-gray-600 text-sm">Fixes implemented, improvements visible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">✓</div>
              <h4 className="font-semibold text-gray-900 mb-2">Month 4-6</h4>
              <p className="text-gray-600 text-sm">ROI breakeven point reached</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">$</div>
              <h4 className="font-semibold text-gray-900 mb-2">Month 6+</h4>
              <p className="text-gray-600 text-sm">Continued returns and growth</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] via-sky-600 to-blue-500 rounded-3xl p-12 text-white text-center">
          <FaRocket className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Calculate Your Potential ROI</h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized ROI projection based on your current e-commerce metrics and business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-95 transition-all shadow-lg">
              Get Free ROI Analysis
            </button>
            <button className="bg-white bg-opacity-20 text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-95 transition-all border border-white border-opacity-30">
              Schedule ROI Consultation
            </button>
          </div>

          <div className="mt-8 text-green-100 text-sm">
            <p>✓ Custom ROI projections • ✓ Industry benchmarking • ✓ Implementation roadmap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceROISection;

