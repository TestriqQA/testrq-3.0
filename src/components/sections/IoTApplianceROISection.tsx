// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { 
  FaDollarSign, 
  FaChartLine, 
  FaWifi, 
  FaClock,
  FaCalculator,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const IoTROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: FaDollarSign,
      title: "Cost Reduction",
      value: "85%",
      description: "Average operational cost savings",
      details: "Reduced maintenance, energy, and resource costs through IoT optimization",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaClock,
      title: "Efficiency Gains",
      value: "70%",
      description: "Improvement in operational efficiency",
      details: "Automated processes and real-time monitoring boost productivity",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaShieldAlt,
      title: "Risk Mitigation",
      value: "90%",
      description: "Reduction in system failures",
      details: "Predictive maintenance and monitoring prevent costly breakdowns",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaChartLine,
      title: "Revenue Growth",
      value: "95%",
      description: "Increase in business value",
      details: "New revenue streams and improved customer experiences",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const costComparison = {
    withoutIoT: {
      title: "Without Professional IoT Testing",
      costs: [
        { item: "System Failures & Downtime", amount: "$2M - $10M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Security Breaches", amount: "$1M - $50M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Device Compatibility Issues", amount: "$500K - $5M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Performance Problems", amount: "$1M - $8M", icon: FaExclamationTriangle, color: "text-red-600" },
        { item: "Regulatory Non-Compliance", amount: "$2M - $25M", icon: FaExclamationTriangle, color: "text-red-600" }
      ],
      total: "$6.5M - $98M",
      risk: "High Risk"
    },
    withIoT: {
      title: "With Professional IoT Testing",
      costs: [
        { item: "Comprehensive IoT Testing", amount: "$200K - $800K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Security Validation", amount: "$100K - $400K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Performance Optimization", amount: "$150K - $500K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Compliance Testing", amount: "$75K - $300K", icon: FaCheckCircle, color: "text-green-600" },
        { item: "Ongoing Monitoring", amount: "$50K - $200K", icon: FaCheckCircle, color: "text-green-600" }
      ],
      total: "$575K - $2.2M",
      risk: "Minimal Risk"
    }
  };

  const roiCalculator = [
    {
      category: "Operational Efficiency",
      savings: "$8.5M",
      description: "Automated processes and optimized operations"
    },
    {
      category: "Predictive Maintenance",
      savings: "$5.2M",
      description: "Prevented equipment failures and downtime"
    },
    {
      category: "Energy Optimization",
      savings: "$3.8M",
      description: "Smart energy management and consumption reduction"
    },
    {
      category: "Security Protection",
      savings: "$12.3M",
      description: "Prevented security breaches and data loss"
    }
  ];

  const industryROI = [
    {
      industry: "Manufacturing",
      investment: "$500K - $2M",
      returns: "$15M - $75M",
      roi: "2,000% - 3,750%",
      icon: FaRocket
    },
    {
      industry: "Smart Cities",
      investment: "$1M - $5M",
      returns: "$25M - $150M",
      roi: "2,500% - 3,000%",
      icon: FaChartLine
    },
    {
      industry: "Healthcare",
      investment: "$300K - $1.5M",
      returns: "$10M - $60M",
      roi: "3,333% - 4,000%",
      icon: FaChartLine
    },
    {
      industry: "Transportation",
      investment: "$800K - $3M",
      returns: "$20M - $100M",
      roi: "2,500% - 3,333%",
      icon: FaWifi
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IoT Testing
            <span className="block text-brand-blue">
              ROI & Financial Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the significant financial benefits and risk mitigation that professional IoT testing services bring to your connected device deployments and IoT-enabled business operations, ensuring regulatory compliance, data security, and performance reliability across the entire IoT ecosystem.

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
              <p className="text-sm text-gray-500">{metric.details}</p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Without Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaExclamationTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{costComparison.withoutIoT.title}</h3>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withoutIoT.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withoutIoT.costs.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">{cost.item}</span>
                  </div>
                  <span className="text-red-600 font-bold">{cost.amount}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-red-100 rounded-2xl">
              <div className="text-3xl font-bold text-red-600 mb-2">{costComparison.withoutIoT.total}</div>
              <div className="text-red-800 font-semibold">Total Potential Loss</div>
            </div>
          </div>

          {/* With Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{costComparison.withIoT.title}</h3>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withIoT.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withIoT.costs.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">{cost.item}</span>
                  </div>
                  <span className="text-green-600 font-bold">{cost.amount}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-green-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">{costComparison.withIoT.total}</div>
              <div className="text-green-800 font-semibold">Total Investment</div>
            </div>
          </div>
        </div>

        {/* ROI by Industry */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
              <FaWifi className="w-4 h-4" />
              <span className="text-sm">ROI by Industry</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Average ROI: 2,000% - 4,000%
            </h3>
            <p className="text-lg z max-w-2xl mx-auto">
              ROI varies by industry vertical and IoT implementation scale, but all sectors demonstrate exceptional returns on professional IoT testing investment through enhanced device reliability, regulatory compliance, risk reduction, and improved IoT performance.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryROI.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{industry.industry}</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Investment: </span>
                    <span className="font-semibold text-gray-900">{industry.investment}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Returns: </span>
                    <span className="font-semibold text-green-600">{industry.returns}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)]">{industry.roi}</div>
                    <div className="text-xs text-gray-600">Average ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              IoT Testing Value Calculator
            </h3>
            <p className="text-lg max-w-2xl mx-auto">
              Based on our client data, here&apos;s the typical value generated through 
              professional IoT testing services across different benefit categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {roiCalculator.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-2xl">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <FaArrowUp className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="flex-1 text-brand-blue">
                  <div className="text-2xl font-bold mb-1">{item.savings}</div>
                  <div className="text-lg font-semibold mb-1">{item.category}</div>
                  <div className="text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
            <div className="text-4xl font-bold mb-2">$29.8M</div>
            <div className="text-xl font-semibold mb-2">Total Potential Value</div>
            <div className="">Average value generated for IoT clients</div>
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Successful Deployment</h3>
            <p className="text-gray-600 mb-4">Ensure successful IoT deployments with minimal post-launch issues and maximum operational efficiency.</p>
            <div className="text-2xl font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-500">Success rate</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
            <p className="text-gray-600 mb-4">Comprehensive testing reduces security vulnerabilities and system failures significantly.</p>
            <div className="text-2xl font-bold text-blue-600">90%</div>
            <div className="text-sm text-gray-500">Risk reduction</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaChartLine className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Growth</h3>
            <p className="text-gray-600 mb-4">Quality IoT implementations drive new revenue streams and operational improvements.</p>
            <div className="text-2xl font-bold text-cyan-600">3,000%</div>
            <div className="text-sm text-gray-500">Average ROI</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Calculate Your IoT Testing ROI</h3>
            <p className="mb-8 text-lg">
              See how much you could gain and the risks you&apos;ll avoid with professional IoT testing. 
              Get a personalized ROI analysis for your IoT project.
            </p>
            <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
              <Link href="/roi-calculator" className="inline-block">
                <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all cursor-pointer">
                  Get ROI Analysis
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTROISection;

