// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGamepad,
  FaMobile,
  FaUsers,
  FaVrCardboard,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine,
  FaClock,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

const GamingCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaMobile,
      title: "Battle Royale Mobile Game",
      challenge:
        "New battle royale game needed comprehensive testing across 200+ Android devices with multiplayer synchronization for 100 players.",
      solution:
        "Multi-platform testing with network simulation, device compatibility testing, and real-time multiplayer validation across diverse hardware configurations.",
      results: [
        "99.8% crash-free sessions achieved",
        "Sub-50ms latency maintained globally",
        "10M+ downloads in first month",
        "4.8-star app store rating maintained",
      ],
      metrics: {
        players: "100 Concurrent",
        devices: "200+ Tested",
        rating: "4.8 Stars",
        downloads: "10M+",
      },
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaGamepad,
      title: "AAA Console RPG Launch",
      challenge:
        "Major RPG sequel required simultaneous launch across PlayStation, Xbox, and PC with complex save synchronization and 200+ hours of content.",
      solution:
        "Comprehensive cross-platform testing, save game validation, performance optimization, and extensive gameplay scenario testing with automated regression suites.",
      results: [
        "Zero day-one critical bugs",
        "95% positive review score",
        "$50M revenue in launch week",
        "Fastest-selling RPG in franchise history",
      ],
      metrics: {
        platforms: "3 Platforms",
        revenue: "$50M",
        score: "95% Positive",
        bugs: "Zero Critical",
      },
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaVrCardboard,
      title: "VR Adventure Experience",
      challenge:
        "Revolutionary VR adventure game needed comfort testing, motion sickness prevention, and hand tracking validation across multiple VR platforms.",
      solution:
        "Specialized VR testing including comfort assessment, motion tracking validation, haptic feedback testing, and cross-platform VR compatibility verification.",
      results: [
        "98% comfort rating achieved",
        "Zero motion sickness reports",
        "Perfect hand tracking accuracy",
        "VR Game of the Year award",
      ],
      metrics: {
        comfort: "98% Rating",
        tracking: "100% Accuracy",
        sickness: "Zero Reports",
        award: "Game of Year",
      },
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaUsers,
      title: "MMORPG Server Infrastructure",
      challenge:
        "New MMORPG needed to support 1 million concurrent players with complex guild systems, real-time combat, and persistent world events.",
      solution:
        "Large-scale load testing, database performance optimization, network architecture validation, and social feature testing with automated player behavior simulation.",
      results: [
        "1M+ concurrent players supported",
        "99.99% server uptime achieved",
        "Sub-100ms global response times",
        "Successful 24/7 world events",
      ],
      metrics: {
        players: "1M Concurrent",
        uptime: "99.99%",
        latency: "<100ms",
        events: "24/7 Active",
      },
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const successMetrics = [
    {
      icon: FaShieldAlt,
      value: "99.9%",
      label: "Bug-Free Launch Rate",
      description: "Games launched without critical day-one issues",
    },
    {
      icon: FaChartLine,
      value: "85%",
      label: "Performance Improvement",
      description: "Average frame rate and loading time optimization",
    },
    {
      icon: FaClock,
      value: "40%",
      label: "Faster Time to Market",
      description: "Reduced testing cycles through automation",
    },
    {
      icon: FaAward,
      value: "50+",
      label: "Games Successfully Tested",
      description: "Across all platforms and genres",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTrophy className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gaming Testing
            <span className="block text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how our specialized game testing services
            have helped developers achieve successful game launches, exceptional
            player experiences, and long-term commercial success through
            smooth gameplay, reliable releases, and optimized game
            performance.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              {/* Header */}
              <div className={`${study.bgColor} p-8 pb-6`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Results
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.metrics).map(
                    ([key, value], metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-3 bg-gray-50 rounded-xl"
                      >
                        <div className="text-lg font-bold text-gray-900">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}
                <button className="w-full bg-brand-blue text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  View Full Case Study
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Gaming Testing Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to gaming
              excellence and player satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaming Genres */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Tested Across All Gaming Genres
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our gaming testing expertise spans every genre, from casual mobile
              games to complex AAA titles and cutting-edge VR experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Action/Adventure",
              "RPG",
              "Strategy",
              "Sports",
              "Racing",
              "Puzzle",
              "Simulation",
              "Fighting",
              "Shooter",
              "MMORPG",
              "Battle Royale",
              "VR/AR",
            ].map((genre, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white bg-opacity-10 rounded-2xl hover:bg-opacity-20 transition-all"
              >
                <div className="text-sm text-brand-blue font-semibold">
                  {genre}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Let us help you achieve similar results with our proven gaming
              testing methodologies and deep industry expertise across all
              gaming platforms and genres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Start Your Success Story – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all duration-200"
              >
                Start Your Success Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingCaseStudiesSection;
