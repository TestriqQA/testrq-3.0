// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaChartLine,
  FaDollarSign,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown,
  FaCalculator,
  FaTrophy,
} from "react-icons/fa";

const BankingROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: FaDollarSign,
      title: "Cost Savings",
      value: "40-60%",
      description:
        "Reduction in testing costs through automation and optimized processes",
      trend: "down",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaClock,
      title: "Time to Market",
      value: "50%",
      description: "Faster release cycles with comprehensive automated testing",
      trend: "down",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: "Security Incidents",
      value: "95%",
      description: "Reduction in security vulnerabilities and incidents",
      trend: "down",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: FaUsers,
      title: "Customer Satisfaction",
      value: "35%",
      description: "Improvement in customer satisfaction scores",
      trend: "up",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
  ];

  const costBenefitAnalysis = [
    {
      category: "Testing Automation",
      investment: "$150K",
      savings: "$600K",
      roi: "300%",
      timeframe: "12 months",
    },
    {
      category: (<><Link href="/security-testing">Security Testing</Link></>),
      investment: "$100K",
      savings: "$2M",
      roi: "1900%",
      timeframe: "6 months",
    },
    {
      category: (<><Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">Compliance Testing</Link></>),
      investment: "$80K",
      savings: "$500K",
      roi: "525%",
      timeframe: "9 months",
    },
    {
      category: (<><Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">Performance Testing</Link></>),
      investment: "$120K",
      savings: "$800K",
      roi: "567%",
      timeframe: "8 months",
    },
  ];

  const businessImpacts = [
    {
      icon: FaShieldAlt,
      title: "Risk Mitigation",
      description:
        "Proactive identification and resolution of security vulnerabilities",
      impact: "Avoided potential losses of $5M+ from security breaches",
    },
    {
      icon: FaCheckCircle,
      title: "Compliance Assurance",
      description:
        "100% success rate in regulatory audits and compliance assessments",
      impact: "Zero regulatory fines and penalties",
    },
    {
      icon: FaUsers,
      title: "Customer Trust",
      description:
        "Enhanced customer confidence through robust security and reliability",
      impact: "15% increase in customer retention rates",
    },
    {
      icon: FaChartLine,
      title: "Operational Efficiency",
      description: "Streamlined testing processes and reduced manual effort",
      impact: "40% improvement in development team productivity",
    },
  ];

  const roiCalculator = {
    currentCosts: {
      manualTesting: 500000,
      securityIncidents: 200000,
      complianceFines: 100000,
      downtime: 300000,
    },
    withTestriq: {
      testingServices: 200000,
      securityIncidents: 10000,
      complianceFines: 0,
      downtime: 50000,
    },
  };

  const totalCurrentCosts = Object.values(roiCalculator.currentCosts).reduce(
    (a, b) => a + b,
    0
  );
  const totalWithTestriq = Object.values(roiCalculator.withTestriq).reduce(
    (a, b) => a + b,
    0
  );
  const totalSavings = totalCurrentCosts - totalWithTestriq;
  const roiPercentage = Math.round((totalSavings / totalWithTestriq) * 100);

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaChartLine className="w-4 h-4" />
            <span className="text-sm">Strategic ROI</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Maximizing ROI in
            <span className="block text-[theme(color.brand.blue)]">
              BFSI Quality Assurance
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transitioning from manual effort to Automated Regression Testing delivers an <span className="font-semibold text-[theme(color.brand.blue)]">ROI of over 300%</span> for mid-sized banks. Our strategies withstand <span className="font-semibold">tens of thousands of daily automated attacks</span>, slashing annual QA costs from <span className="text-red-600">$1.1M to just $260k</span>.
          </p>
        </div>

        {/* ROI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {metric.value}
                </span>
                {metric.trend === "up" ? (
                  <FaArrowUp className="w-6 h-6 text-green-500" />
                ) : (
                  <FaArrowDown className="w-6 h-6 text-green-500" />
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {metric.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cost-Benefit Analysis */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cost-Benefit Analysis
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of investment vs. returns across different
              testing categories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">
                    Testing Category
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">
                    Investment
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">
                    Annual Savings
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">
                    ROI
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">
                    Payback Period
                  </th>
                </tr>
              </thead>
              <tbody>
                {costBenefitAnalysis.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {item.category}
                    </td>
                    <td className="py-4 px-6 text-center text-red-600 font-semibold">
                      {item.investment}
                    </td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">
                      {item.savings}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                        {item.roi}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">
                      {item.timeframe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <FaCalculator className="w-16 h-16 mx-auto mb-6 text-[theme(color.brand.blue)]" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ROI Calculator Example
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how a typical mid-size bank saves money with our testing
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Costs */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h4 className="text-xl font-bold text-red-700 mb-6 text-center">
                Current Annual Costs
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Manual Testing</span>
                  <span className="font-semibold text-red-700">
                    ${roiCalculator.currentCosts.manualTesting.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Security Incidents</span>
                  <span className="font-semibold text-red-700">
                    $
                    {roiCalculator.currentCosts.securityIncidents.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Compliance Fines</span>
                  <span className="font-semibold text-red-700">
                    $
                    {roiCalculator.currentCosts.complianceFines.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">System Downtime</span>
                  <span className="font-semibold text-red-700">
                    ${roiCalculator.currentCosts.downtime.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-red-300 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-900">Total</span>
                    <span className="text-red-700">
                      ${totalCurrentCosts.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* With Testriq */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-6 text-center">
                With Testriq
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Testing Services</span>
                  <span className="font-semibold text-green-700">
                    $
                    {roiCalculator.withTestriq.testingServices.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Security Incidents</span>
                  <span className="font-semibold text-green-700">
                    $
                    {roiCalculator.withTestriq.securityIncidents.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Compliance Fines</span>
                  <span className="font-semibold text-green-700">
                    $
                    {roiCalculator.withTestriq.complianceFines.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">System Downtime</span>
                  <span className="font-semibold text-green-700">
                    ${roiCalculator.withTestriq.downtime.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-green-300 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-900">Total</span>
                    <span className="text-green-700">
                      ${totalWithTestriq.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings & ROI */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">
                Your Savings
              </h4>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    ${totalSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">
                    {roiPercentage}%
                  </div>
                  <div className="text-sm text-gray-600">
                    Return on Investment
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    3 months
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {businessImpacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                  <impact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {impact.description}
                  </p>
                  <div className="bg-green-100 rounded-xl p-3">
                    <p className="text-sm font-semibold text-green-700">
                      {impact.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaTrophy className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Start Maximizing Your ROI Today
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let inefficient testing processes drain your budget. Let
            us show you how our banking testing solutions can deliver measurable
            returns for your institution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/roi-calculator" className="w-fit">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Calculate Your ROI
              </button>
            </Link>
            <Link href={"/contact-us"} className="w-fit">
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                Request Cost Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingROISection;
