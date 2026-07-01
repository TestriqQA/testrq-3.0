import Link from "next/link";
import React from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaGlobeAmericas,
} from "react-icons/fa";

const CaseStudiesOverviewSection = () => {
  const achievements = [
    {
      icon: FaRocket,
      title: "Accelerated Time-to-Market",
      description: (
        <>
          Reduced deployment cycles by 75% through comprehensive automation and
          streamlined testing processes
        </>
      ),
      metric: "75% Faster",
      color: "blue",
    },
    {
      icon: FaShieldAlt,
      title: "Enhanced Security & Quality",
      description: (
        <>
          Achieved 99% bug reduction rate with{" "}
          <Link
            href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats"
          >
            advanced security testing
          </Link>{" "}
          and quality assurance protocols
        </>
      ),
      metric: "99% Bug Reduction",
      color: "green",
    },
    {
      icon: FaCogs,
      title: "Process Optimization",
      description: (
        <>
          Implemented efficient testing workflows that improved overall
          development productivity by 60%
        </>
      ),
      metric: "60% Efficiency Gain",
      color: "purple",
    },
    {
      icon: FaUsers,
      title: "Client Satisfaction",
      description: (
        <>
          Earned strong client satisfaction through dedicated support and
          exceptional service delivery
        </>
      ),
      metric: "100% Satisfaction",
      color: "orange",
    },
    {
      icon: FaChartBar,
      title: "ROI Improvement",
      description: (
        <>
          Delivered average 300% return on investment through reduced
          maintenance costs and faster releases
        </>
      ),
      metric: "300% ROI",
      color: "red",
    },
    {
      icon: FaGlobe,
      title: "Global Service Delivery",
      description: (
        <>
          Successfully served clients across 25+ countries with localized
          testing solutions and support
        </>
      ),
      metric: "25+ Countries",
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600",
      green: "from-green-50 to-green-100 text-green-600",
      purple: "from-purple-50 to-purple-100 text-purple-600",
      orange: "from-orange-50 to-orange-100 text-orange-600",
      red: "from-red-50 to-red-100 text-red-600",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaGlobeAmericas />
            <span className="text-sm">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses{" "}
            <span className="text-[theme(color.brand.blue)]">Worldwide</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our{" "}
            <Link href="/blog/post/understanding-software-testing-a-comprehensive-guide-for-beginners">
              comprehensive testing solutions
            </Link>{" "}
            have consistently delivered exceptional results across diverse
            industries. Here&apos;s how we&apos;ve helped our clients achieve
            their quality assurance goals and business objectives.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${getColorClasses(
                    achievement.color
                  )} flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    Average Improvement
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our success is measured by the success of our clients. These
              numbers represent real impact across hundreds of projects and
              satisfied customers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-blue-100 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-blue-100 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <p className="text-blue-100 text-sm">Global Service Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-blue-100 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesOverviewSection;
