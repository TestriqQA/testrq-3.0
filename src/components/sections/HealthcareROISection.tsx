// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { 
  FaDollarSign, 
  FaChartLine, 
  FaShieldAlt, 
  FaClock,
  FaCalculator,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

const HealthcareROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: FaDollarSign,
      title: "Cost Savings",
      value: "85%",
      description: "Average reduction in compliance-related costs",
      details: "Avoid costly penalties and reduce remediation expenses",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaClock,
      title: "Time to Market",
      value: "50%",
      description: "Faster regulatory approval and deployment",
      details: "Accelerated FDA approval and compliance certification",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaShieldAlt,
      title: "Risk Reduction",
      value: "95%",
      description: (<>Decrease in <Link href="/blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities">security vulnerabilities</Link></>),
      details: (<>Comprehensive <Link href="/security-testing">security testing</Link> and compliance validation</>),
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaChartLine,
      title: "Efficiency Gain",
      value: "40%",
      description: "Improvement in clinical workflow efficiency",
      details: "Optimized healthcare software performance",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const costComparison = {
    withoutTesting: {
      title: "Without Professional Testing",
      costs: [
        { item: "HIPAA Violation Penalties", amount: "$1.5M - $50M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Data Breach Costs", amount: "$10.93M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Failed FDA Approval", amount: "$2M - $10M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "System Downtime", amount: "$8K/minute", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Remediation Costs", amount: "$500K - $2M", icon: FaExclamationTriangle, color: "text-red-600" }
      ],
      total: "$15M - $75M",
      risk: "High Risk"
    },
    withTesting: {
      title: "With Professional Testing",
      costs: [
        { item: (<><Link href="/blog/post/test-execution-comprehensive-testing-implementation">Comprehensive Testing</Link></>), amount: "$50K - $200K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Compliance Validation", amount: "$25K - $75K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Security Assessment", amount: "$15K - $50K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Ongoing Monitoring", amount: "$10K - $30K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Documentation", amount: "$5K - $20K", icon: FaCheckCircle, color: "text-green-600" }
      ],
      total: "$105K - $375K",
      risk: "Minimal Risk"
    }
  };

  const roiCalculator = [
    {
      category: "Compliance Costs Avoided",
      savings: "$2.5M",
      description: "Average HIPAA penalty avoidance"
    },
    {
      category: (<><Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Security Breach Prevention</Link></>),
      savings: "$10.9M",
      description: "Healthcare data breach cost avoidance"
    },
    {
      category: "Faster Market Entry",
      savings: "$1.2M",
      description: "Revenue acceleration through faster approval"
    },
    {
      category: "Operational Efficiency",
      savings: "$800K",
      description: "Annual savings from improved workflows"
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaCalculator className="w-4 h-4" />
            <span className="text-sm">Return on Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Healthcare Testing
            <span className="block text-brand-blue">
              ROI & Cost Benefits
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the significant financial benefits and risk mitigation that professional healthcare testing services bring to your organization through regulatory compliance, <Link href="/security-testing">data security</Link>, and <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">performance</Link> assurance.
          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {roiMetrics.map((metric, index) => (
            <div key={index} className={`${metric.bgColor} rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{metric.title}</h3>
              <p className="text-gray-600 mb-3">{metric.description}</p>
              <p className="text-sm text-gray-600">{metric.details}</p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Without Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-red-300 hover:ring-3 transition-all">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaExclamationTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{costComparison.withoutTesting.title}</h3>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withoutTesting.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withoutTesting.costs.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">{cost.item}</span>
                  </div>
                  <span className="text-red-700 font-bold">{cost.amount}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-red-100 rounded-2xl">
              <div className="text-3xl font-bold text-red-600 mb-2">{costComparison.withoutTesting.total}</div>
              <div className="text-red-800 font-semibold">Total Potential Cost</div>
            </div>
          </div>

          {/* With Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-green-300 hover:ring-3 transition-all">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{costComparison.withTesting.title}</h3>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withTesting.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withTesting.costs.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">{cost.item}</span>
                  </div>
                  <span className="text-green-700 font-bold">{cost.amount}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-green-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-700 mb-2">{costComparison.withTesting.total}</div>
              <div className="text-green-800 font-semibold">Total Investment</div>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-blue text-white rounded-full px-6 py-2 mb-6">
              <FaChartLine className="w-4 h-4" />
              <span className="text-sm">ROI Breakdown</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Average ROI: 1,500% - 20,000%
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based on our client data, healthcare organizations see exceptional returns on their healthcare testing investment through regulatory risk mitigation, data protection, and operational improvements in their <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">medical software systems</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {roiCalculator.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center">
                  <FaArrowUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-brand-blue mb-1">{item.savings}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{item.category}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl text-white">
            <div className="text-4xl font-bold mb-2">$15.4M</div>
            <div className="text-xl font-semibold mb-2">Total Potential Savings</div>
            <div>Average savings achieved by our healthcare clients</div>
          </div>
        </div>

        {/* Investment Justification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaArrowDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
            <p className="text-gray-600 mb-4">Avoid catastrophic compliance failures and security breaches that can cost millions.</p>
            <div className="text-2xl font-bold text-red-600">Up to $75M</div>
            <div className="text-sm text-gray-500">Potential cost avoidance</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaClock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Approval</h3>
            <p className="text-gray-600 mb-4">Accelerate regulatory approval and market entry with comprehensive testing.</p>
            <div className="text-2xl font-bold text-blue-600">6-12 Months</div>
            <div className="text-sm text-gray-500">Faster time to market</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaChartLine className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
            <p className="text-gray-600 mb-4">Improve clinical workflows and system performance for better patient outcomes.</p>
            <div className="text-2xl font-bold text-green-600">40%+</div>
            <div className="text-sm text-gray-500">Efficiency improvement</div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Calculate Your Healthcare Testing ROI</h3>
            <p className="text-blue-100 mb-8 text-lg">
              See how much you could save and the risks you&apos;ll avoid with professional healthcare testing. 
              Get a personalized ROI analysis for your project.
            </p>
            <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
              <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all">
                Get ROI Analysis
              </button>
              <Link href="/roi-calculator">
                <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all border border-white border-opacity-30">
                Calculate ROI
              </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HealthcareROISection;

