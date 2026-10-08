// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaChartLine,
  // FaUsers,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUniversity,
  FaBuilding,
  FaLaptop,
} from "react-icons/fa";

const ElearningCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      company: "EduTech University",
      industry: "Higher Education",
      type: "University",
      icon: FaUniversity,
      challenge:
        "Low student engagement and high dropout rates in online courses",
      solution:
        "Comprehensive LMS testing, accessibility improvements, and mobile optimization",
      results: [
        {
          metric: "Student Engagement",
          improvement: "+68%",
          color: "text-green-600",
        },
        {
          metric: "Course Completion",
          improvement: "+45%",
          color: "text-green-600",
        },
        {
          metric: "Mobile Usage",
          improvement: "+120%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "The testing revealed critical usability issues we never noticed. Student satisfaction scores have never been higher.",
      bgColor: "from-blue-50 to-indigo-50",
      accentColor: "blue-600",
    },
    {
      company: "SkillBoost Corporate",
      industry: "Corporate Training",
      type: "Enterprise",
      icon: FaBuilding,
      challenge: "Scalability issues during company-wide training rollouts",
      solution:
        "Performance testing, load optimization, and integration testing with HR systems",
      results: [
        {
          metric: "System Capacity",
          improvement: "+400%",
          color: "text-green-600",
        },
        {
          metric: "Training Completion",
          improvement: "+85%",
          color: "text-green-600",
        },
        {
          metric: "IT Support Tickets",
          improvement: "-70%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "Our training platform now handles 10,000+ concurrent users without any issues. The ROI has been phenomenal.",
      bgColor: "from-green-50 to-emerald-50",
      accentColor: "green-600",
    },
    {
      company: "LearnSmart Academy",
      industry: "K-12 Education",
      type: "School District",
      icon: FaLaptop,
      challenge:
        "Accessibility compliance issues and poor performance on older devices",
      solution:
        "WCAG compliance testing, performance optimization, and cross-device compatibility",
      results: [
        {
          metric: "Accessibility Score",
          improvement: "+95%",
          color: "text-green-600",
        },
        {
          metric: "Device Compatibility",
          improvement: "+100%",
          color: "text-green-600",
        },
        {
          metric: "Student Participation",
          improvement: "+55%",
          color: "text-green-600",
        },
      ],
      testimonial:
        "Every student can now access our platform regardless of their device or abilities. True educational equity achieved.",
      bgColor: "from-purple-50 to-pink-50",
      accentColor: "purple-600",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-white gap-2 bg-brand-blue rounded-full px-6 py-2 mb-6">
            <FaStar className="w-4 h-4" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Transforming E-Learning
            <span className="block text-brand-blue">
              Through Quality Testing
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our comprehensive e-learning testing solutions have helped
            educational institutions and corporate learning platforms achieve
            remarkable improvements in learning outcomes, platform usability,
            and system reliability.
          </p>
        </div>

        {/* Success Metrics */}
        {/* <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-lg text-gray-600">
              Measurable results across educational sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  {metric.value}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h4>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${study.bgColor} rounded-3xl p-12 shadow-lg border border-gray-100`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Company Info & Challenge */}
                <div>
                  <div className="flex gap-4 mb-8">
                    <div
                      className={`w-16 h-16 bg-${study.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.company}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-${study.accentColor} font-semibold`}
                        >
                          {study.industry}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{study.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaChartLine className="w-5 h-5 text-red-500" />
                      Challenge:
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaRocket className="w-5 h-5 text-blue-500" />
                      Solution:
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white bg-opacity-70 rounded-2xl p-6 border-l-4 border-gray-300">
                    <p className="text-gray-700 italic mb-4">
                      &quot;{study.testimonial}&quot;
                    </p>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
                    <FaCheckCircle className="w-6 h-6 text-green-500" />
                    Results Achieved
                  </h4>

                  <div className="space-y-6 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-white bg-opacity-80 rounded-2xl p-6 text-center hover:bg-opacity-100 transition-all duration-300 shadow-sm"
                      >
                        <div
                          className={`text-4xl font-bold ${result.color} mb-2`}
                        >
                          {result.improvement}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Link href="/case-studies" className="inline-block">
                      <button
                        className={`w-full bg-${study.accentColor} text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 hover:scale-98 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 cursor-pointer`}
                      >
                        Read Full Case Study
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Impact */}
        <div className="mt-16 bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cross-Industry Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our e-learning testing expertise spans across various educational
              sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <FaUniversity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Higher Education</h4>
              <p className="text-gray-600 text-sm mb-4">
                Universities, colleges, and online degree programs
              </p>
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Institutions served</div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <FaBuilding className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">
                Corporate Training
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Employee development and skill enhancement programs
              </p>
              <div className="text-2xl font-bold text-green-600">75+</div>
              <div className="text-sm text-gray-600">Companies optimized</div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <FaLaptop className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">K-12 Education</h4>
              <p className="text-gray-600 text-sm mb-4">
                School districts and educational technology platforms
              </p>
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-gray-600">Districts improved</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-brand-blue to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaGraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your E-Learning Platform?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join these successful educational institutions and create
            exceptional learning experiences that drive real results for your
            students and organization.
          </p>

          <div className="flex flex-col text-brand-blue sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              title="Start Your Success Story – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white font-semibold text-lg rounded-2xl shadow-lg
             hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              Start Your Success Story
            </Link>

            <Link
              href="/case-studies"
              title="View More Case Studies – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 font-semibold text-lg rounded-2xl border border-white border-opacity-30
             hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              View More Case Studies
            </Link>
          </div>

          <div className="mt-8 text-indigo-100 text-sm">
            <p>
              ✓ Free platform assessment • ✓ Custom optimization plan • ✓ Proven
              methodology • ✓ Measurable results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningCaseStudiesSection;
