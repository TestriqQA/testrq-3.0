import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaClock,
  FaAward,
  FaRocket,
} from "react-icons/fa";

const CorporateQATrainingCaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: "TechGlobal Solutions",
      industry: "Financial Services",
      size: "500+ employees",
      challenge: "Legacy testing processes causing delays and quality issues",
      solution:
        "Comprehensive QA transformation program with automation training",
      results: [
        "60% reduction in testing time",
        "40% improvement in bug detection",
        "25 QA professionals certified",
        "ROI achieved within 6 months",
      ],
      testimonial:
        "Testriq's training program transformed our entire QA approach. The results exceeded our expectations.",
      author: "Sarah Johnson, QA Director",
      icon: <FaBuilding className="text-2xl text-blue-600" />,
      color: "blue",
    },
    {
      company: "InnovateTech Startup",
      industry: "E-commerce",
      size: "50-100 employees",
      challenge:
        "Rapid growth requiring scalable QA processes and skilled team",
      solution:
        "Agile testing methodology training and automation framework setup",
      results: [
        "3x faster release cycles",
        "90% test automation coverage",
        "15 team members upskilled",
        "Zero critical bugs in production",
      ],
      testimonial:
        "The training gave our team the confidence and skills to scale our QA operations effectively.",
      author: "Michael Chen, CTO",
      icon: <FaRocket className="text-2xl text-green-600" />,
      color: "green",
    },
    {
      company: "MegaCorp Enterprise",
      industry: "Healthcare",
      size: "1000+ employees",
      challenge: "Complex compliance requirements and distributed QA teams",
      solution: "Specialized healthcare testing training with compliance focus",
      results: [
        "100% compliance achieved",
        "50% reduction in audit findings",
        "80 QA professionals trained",
        "Standardized processes across teams",
      ],
      testimonial:
        "Testriq's expertise in healthcare compliance testing was exactly what we needed.",
      author: "Dr. Emily Rodriguez, Quality Director",
      icon: <FaAward className="text-2xl text-purple-600" />,
      color: "purple",
    },
  ];

  const metrics = [
    {
      value: "500+",
      label: "Professionals Trained",
      icon: <FaUsers className="text-2xl text-blue-600" />,
    },
    {
      value: "50+",
      label: "Companies Transformed",
      icon: <FaBuilding className="text-2xl text-green-600" />,
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: <FaChartLine className="text-2xl text-purple-600" />,
    },
    {
      value: "6 Months",
      label: "Average ROI Timeline",
      icon: <FaClock className="text-2xl text-orange-600" />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FaChartLine className="mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations across industries have transformed their QA
            capabilities and achieved measurable business outcomes with our
            training programs.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-${study.color}-50 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-12 h-12 bg-${study.color}-100 rounded-lg`}
                    >
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {study.company}
                      </h3>
                      <p className="text-gray-600 text-sm">{study.industry}</p>
                      <p className="text-gray-500 text-xs">{study.size}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Key Results
                  </h4>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <div
                          className={`w-2 h-2 bg-${study.color}-500 rounded-full`}
                        ></div>
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-4xl text-gray-300 mb-2">&quot;</div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        {study.testimonial}
                      </p>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="font-semibold text-gray-900">
                        {study.author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {study.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Training Impact by the Numbers
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our training programs deliver measurable results that drive
              business success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-blue-100 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing list of companies that have transformed their QA
              capabilities with our proven training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="inline-block">
                <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                  Start Your Transformation
                </button>
              </Link>
              <Link href="/case-studies" className="inline-block">
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                  View More Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingCaseStudies;
