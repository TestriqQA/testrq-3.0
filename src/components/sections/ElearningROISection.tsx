// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import {
  FaChartLine,
  FaGraduationCap,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaCalculator,
  FaChartLine as FaTrendingUp,
  FaClock,
  FaDollarSign
} from "react-icons/fa";

const ElearningROISection: React.FC = () => {
  const roiMetrics = [
    {
      title: "Learning Effectiveness",
      value: "+65%",
      description: "Improvement in knowledge retention and skill acquisition",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Training Cost Reduction",
      value: "40%",
      description: "Savings in training delivery and administrative costs",
      icon: FaDollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Completion Rates",
      value: "+85%",
      description: "Increase in course completion and certification rates",
      icon: FaTrendingUp,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Time to Competency",
      value: "-50%",
      description: "Reduction in time needed to achieve learning objectives",
      icon: FaClock,
      color: "from-orange-500 to-red-600"
    }
  ];

  const businessImpact = [
    {
      category: "Educational Institutions",
      metrics: [
        { label: "Student Retention", value: "+35%", impact: "Higher graduation rates" },
        { label: "Faculty Efficiency", value: "+45%", impact: "More time for teaching" },
        { label: "Administrative Costs", value: "-30%", impact: "Reduced overhead" },
        { label: "Student Satisfaction", value: "+60%", impact: "Better evaluations" }
      ]
    },
    {
      category: "Corporate Training",
      metrics: [
        { label: "Employee Productivity", value: "+40%", impact: "Faster skill application" },
        { label: "Training Costs", value: "-55%", impact: "Reduced travel & materials" },
        { label: "Compliance Rates", value: "+90%", impact: "Better regulatory adherence" },
        { label: "Employee Engagement", value: "+70%", impact: "Higher job satisfaction" }
      ]
    }
  ];

  const costBenefitAnalysis = {
    investment: {
      testing: 50000,
      implementation: 30000,
      training: 20000,
      total: 100000
    },
    benefits: {
      year1: {
        costSavings: 180000,
        productivityGains: 220000,
        retentionImprovement: 150000,
        total: 550000
      },
      year2: {
        costSavings: 200000,
        productivityGains: 280000,
        retentionImprovement: 180000,
        total: 660000
      }
    }
  };

  const implementationTimeline = [
    {
      phase: "Assessment",
      duration: "2-4 weeks",
      description: "Platform analysis and testing strategy development",
      roi: "Baseline established"
    },
    {
      phase: "Testing & Optimization",
      duration: "6-8 weeks",
      description: "Comprehensive testing and performance improvements",
      roi: "Issues identified"
    },
    {
      phase: "Implementation",
      duration: "4-6 weeks",
      description: "Deploy fixes and optimizations",
      roi: "Improvements visible"
    },
    {
      phase: "Results",
      duration: "Ongoing",
      description: "Monitor performance and measure ROI",
      roi: "Full ROI realized"
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
            <FaChartLine className="w-4 h-4" />
            <span className="text-sm font-medium">Return on Investment</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Measurable ROI from
            <span className="block text-brand-blue">E-Learning Optimization</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive e-learning QA testing approach delivers quantifiable results that directly impact learning outcomes, platform performance, operational efficiency, and your organization&apos;s bottom line.

          </p>
        </div>

        {/* ROI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 text-center ring-1 ring-brand-blue  hover:ring-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{metric.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Business Impact by Sector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {businessImpact.map((sector, index) => (
            <div key={index} className="bg-gray-50 ring-1 ring-gray-300 rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{sector.category}</h3>

              <div className="space-y-6">
                {sector.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md ring-1 ring-brand-blue hover:ring-3 transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{metric.label}</h4>
                      <span className="text-2xl font-bold text-green-600">{metric.value}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{metric.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cost-Benefit Analysis */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Cost-Benefit Analysis</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Typical ROI projection for a mid-sized e-learning platform, educational institution, or corporate training solution.            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Investment */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Initial Investment</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Testing & Analysis</span>
                  <span className="font-semibold">${costBenefitAnalysis.investment.testing.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Implementation</span>
                  <span className="font-semibold">${costBenefitAnalysis.investment.implementation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Training & Support</span>
                  <span className="font-semibold">${costBenefitAnalysis.investment.training.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border-2 border-blue-200">
                  <span className="font-bold text-gray-900">Total Investment</span>
                  <span className="font-bold text-blue-600">${costBenefitAnalysis.investment.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Year 1 Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Year 1 Benefits</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="font-semibold text-green-600">${costBenefitAnalysis.benefits.year1.costSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Productivity Gains</span>
                  <span className="font-semibold text-green-600">${costBenefitAnalysis.benefits.year1.productivityGains.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Retention Benefits</span>
                  <span className="font-semibold text-green-600">${costBenefitAnalysis.benefits.year1.retentionImprovement.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-200">
                  <span className="font-bold text-gray-900">Total Benefits</span>
                  <span className="font-bold text-green-600">${costBenefitAnalysis.benefits.year1.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">ROI Summary</h4>
              <div className="space-y-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">450%</div>
                  <div className="text-sm text-gray-600">Year 1 ROI</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3-4</div>
                  <div className="text-sm text-gray-600">Months to Break Even</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$1.2M</div>
                  <div className="text-sm text-gray-600">2-Year Total Benefits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">ROI Timeline</h3>
            <p className="text-lg text-gray-600">When you can expect to see returns on your investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-8">
            {implementationTimeline.map((phase, index) => (
              <div key={index} className="text-center rounded-xl p-3 ring-1 ring-brand-blue hover:ring-3 transition-all duration-300 ease-in-out">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-3">{phase.duration}</p>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{phase.description}</p>
                <div className="inline-flex items-center gap-1 bg-green-100 rounded-full px-3 py-1">
                  <FaCheckCircle className="w-3 h-3 text-green-600" />
                  <span className="text-green-700 text-xs font-medium">{phase.roi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term Benefits */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Long-term Strategic Benefits</h3>
            <p className="text-lg text-gray-600">Beyond immediate ROI, our optimization delivers lasting value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <FaUsers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Scalability</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Platform can grow with your organization without performance degradation
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <FaRocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable foundation enables adoption of new learning technologies
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <FaGraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Reputation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enhanced learning outcomes improve institutional or corporate reputation
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-blue to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaCalculator className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Calculate Your E-Learning ROI</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized ROI projection based on your current e-learning metrics,
            user base, and organizational goals.
          </p>

          <div className="flex flex-col sm:flex-row text-brand-blue gap-4 justify-center">
            <Link href="/roi-calculator" className="inline-block">
              <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg cursor-pointer">
                Get Free ROI Analysis
              </button>
            </Link>
            <Link href="/contact-us" className="inline-block">
              <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30 cursor-pointer">
                Schedule ROI Consultation
              </button>
            </Link>
          </div>

          <div className="mt-8 text-white text-sm">
            <p>✓ Custom ROI projections • ✓ Industry benchmarking • ✓ Implementation roadmap • ✓ Cost-benefit analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningROISection;

