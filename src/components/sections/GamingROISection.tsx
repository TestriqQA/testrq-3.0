// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaGamepad,
  FaClock,
  FaCalculator,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaShieldAlt,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const GamingROISection: React.FC = () => {
  const roiMetrics = [
    {
      icon: FaDollarSign,
      title: "Revenue Protection",
      value: "95%",
      description: "Average revenue loss prevention",
      details:
        (<>Prevent costly post-launch fixes and player churn through <Link href="/blog/post/test-execution-comprehensive-testing-implementation">comprehensive testing</Link></>),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaClock,
      title: "Faster Launches",
      value: "60%",
      description: "Reduction in time to market",
      details:
        "Streamlined testing processes accelerate game development cycles",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaShieldAlt,
      title: "Bug Prevention",
      value: "85%",
      description: "Reduction in post-launch issues",
      details:
        (<>Comprehensive testing prevents <Link href="/blog/post/launch-day-failures-preventing-critical-issues-on-game-release">critical bugs</Link> from reaching players</>),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaUsers,
      title: "Player Retention",
      value: "70%",
      description: "Improvement in user engagement",
      details: "Quality games retain players longer and generate more revenue",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const costComparison = {
    withoutTesting: {
      title: "Without Professional Game Testing",
      costs: [
        {
          item: "Post-Launch Bug Fixes",
          amount: "$500K - $5M",
          icon: FaExclamationTriangle,
          color: "text-red-600",
        },
        {
          item: "Player Churn & Refunds",
          amount: "$1M - $20M",
          icon: FaExclamationTriangle,
          color: "text-red-600",
        },
        {
          item: "App Store Penalties",
          amount: "$200K - $2M",
          icon: FaExclamationTriangle,
          color: "text-red-600",
        },
        {
          item: (<><Link href="/performance-testing-services">Performance Issues</Link></>),
          amount: "$800K - $8M",
          icon: FaExclamationTriangle,
          color: "text-red-600",
        },
        {
          item: "Reputation Damage",
          amount: "$2M - $50M",
          icon: FaExclamationTriangle,
          color: "text-red-600",
        },
      ],
      total: "$4.5M - $85M",
      risk: "High Risk",
    },
    withTesting: {
      title: "With Professional Game Testing",
      costs: [
        {
          item: (<><Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">Comprehensive Game Testing</Link></>),
          amount: "$100K - $500K",
          icon: FaCheckCircle,
          color: "text-green-600",
        },
        {
          item: (<><Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">Performance Optimization</Link></>),
          amount: "$75K - $300K",
          icon: FaCheckCircle,
          color: "text-green-600",
        },
        {
          item: (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-Platform Testing</Link></>),
          amount: "$150K - $600K",
          icon: FaCheckCircle,
          color: "text-green-600",
        },
        {
          item: (<><Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">User Experience Testing</Link></>),
          amount: "$50K - $200K",
          icon: FaCheckCircle,
          color: "text-green-600",
        },
        {
          item: "Ongoing QA Support",
          amount: "$25K - $100K",
          icon: FaCheckCircle,
          color: "text-green-600",
        },
      ],
      total: "$400K - $1.7M",
      risk: "Minimal Risk",
    },
  };

  const roiCalculator = [
    {
      category: "Player Retention",
      savings: "$12.5M",
      description: "Increased lifetime value through quality gameplay",
    },
    {
      category: (<><Link href="/blog/post/launch-day-failures-preventing-critical-issues-on-game-release">Launch Success</Link></>),
      savings: "$8.2M",
      description: "Successful launches without major issues",
    },
    {
      category: (<><Link href="/performance-testing-services">Performance Optimization</Link></>),
      savings: "$5.8M",
      description: "Optimized performance across all platforms",
    },
    {
      category: "Brand Protection",
      savings: "$15.3M",
      description: "Protected brand reputation and user trust",
    },
  ];

  const industryROI = [
    {
      industry: "Mobile Games",
      investment: "$200K - $800K",
      returns: "$5M - $25M",
      roi: "2,500% - 3,125%",
      icon: FaRocket,
    },
    {
      industry: "Console Games",
      investment: "$500K - $2M",
      returns: "$15M - $75M",
      roi: "3,000% - 3,750%",
      icon: FaChartLine,
    },
    {
      industry: "PC Games",
      investment: "$300K - $1.2M",
      returns: "$8M - $40M",
      roi: "2,667% - 3,333%",
      icon: FaGamepad,
    },
    {
      industry: "VR/AR Games",
      investment: "$400K - $1.5M",
      returns: "$10M - $50M",
      roi: "2,500% - 3,333%",
      icon: FaChartLine,
    },
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
            Gaming Testing
            <span className="block text-brand-blue">
              ROI & Financial Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the significant financial benefits and risk mitigation that
            professional game testing services bring to your game development
            process, ensuring <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">reliable releases</Link>, player satisfaction, and faster
            time-to-market across all gaming platforms.
          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {roiMetrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {metric.title}
              </h3>
              <p className="text-gray-600 mb-3">{metric.description}</p>
              <p className="text-sm text-gray-500">{metric.details}</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {costComparison.withoutTesting.title}
              </h3>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withoutTesting.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withoutTesting.costs.map((cost, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between p-4 bg-red-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">
                      {cost.item}
                    </span>
                  </div>
                  <span className="text-red-600 font-bold">{cost.amount}</span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-red-100 rounded-2xl">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {costComparison.withoutTesting.total}
              </div>
              <div className="text-red-800 font-semibold">
                Total Potential Loss
              </div>
            </div>
          </div>

          {/* With Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-green-300 hover:ring-3 transition-all">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {costComparison.withTesting.title}
              </h3>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {costComparison.withTesting.risk}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {costComparison.withTesting.costs.map((cost, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-between p-4 bg-green-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <cost.icon className={`w-5 h-5 ${cost.color}`} />
                    <span className="text-gray-800 font-medium">
                      {cost.item}
                    </span>
                  </div>
                  <span className="text-green-600 font-bold">
                    {cost.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-green-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {costComparison.withTesting.total}
              </div>
              <div className="text-green-800 font-semibold">
                Total Investment
              </div>
            </div>
          </div>
        </div>

        {/* ROI by Industry */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white rounded-full px-6 py-2 mb-6">
              <FaGamepad className="w-4 h-4" />
              <span className="text-sm">ROI by Gaming Platform</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Average ROI: 2,500% - 3,750%
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ROI varies by gaming platform and game complexity, but all gaming
              sectors demonstrate exceptional returns on professional game
              testing investment, thanks to reliable gameplay, <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">optimized
              performance</Link>, and faster release cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryROI.map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.industry}
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Investment: </span>
                    <span className="font-semibold text-gray-900">
                      {industry.investment}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Returns: </span>
                    <span className="font-semibold text-green-600">
                      {industry.returns}
                    </span>
                  </div>
                  <div className="pt-2">
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                      {industry.roi}
                    </div>
                    <div className="text-xs text-gray-600">Average ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Game Testing Value Calculator
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Based on our client data, here&apos;s the typical value generated
              through professional game testing services across different
              benefit categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {roiCalculator.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-xl flex items-center justify-center">
                  <FaArrowUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-brand-blue mb-1">
                    {item.savings}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {item.category}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <div className="text-4xl font-bold text-brand-blue mb-2">
              $41.8M
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Total Potential Value
            </div>
            <div className="text-gray-600">
              Average value generated for gaming clients
            </div>
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Successful Launches
            </h3>
            <p className="text-gray-600 mb-4">
              Ensure successful game launches with minimal post-release issues
              and maximum player satisfaction.
            </p>
            <div className="text-2xl font-bold text-green-600">99.5%</div>
            <div className="text-sm text-gray-500">Success rate</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Risk Mitigation
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive testing reduces critical bugs and <Link href="/performance-testing-services">performance</Link> issues
              significantly.
            </p>
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-gray-500">Risk reduction</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaChartLine className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Revenue Growth
            </h3>
            <p className="text-gray-600 mb-4">
              Quality games drive higher player retention and increased
              monetization opportunities.
            </p>
            <div className="text-2xl font-bold text-purple-600">3,200%</div>
            <div className="text-sm text-gray-500">Average ROI</div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Calculate Your Game Testing ROI
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              See how much you could gain and the risks you&apos;ll avoid with
              professional game testing. Get a personalized ROI analysis for
              your gaming project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                Get ROI Analysis
              </button>
              <Link href="/roi-calculator">
                <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  Download ROI Calculator
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GamingROISection;
