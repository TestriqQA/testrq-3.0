// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaTrophy,
  FaHeart,
  FaGlobe,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const CareersValuesSection: React.FC = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and methodologies to stay ahead in the QA landscape.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork and knowledge sharing to achieve exceptional results.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in everything we do, from code to client relationships.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: FaTrophy,
      title: "Continuous Growth",
      description:
        "We invest in our team's development through learning opportunities and career advancement.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: FaHeart,
      title: "People-Centric",
      description:
        "We prioritize work-life balance and create an environment where everyone can thrive.",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description:
        "We work on projects that make a difference worldwide, improving software quality globally.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  const achievements = [
    {
      icon: FaRocket,
      title: "Industry Recognition",
      description: "Winner of 'Best QA Team' award 2024",
      stat: "Award Winner",
    },
    {
      icon: FaUsers,
      title: "Employee Satisfaction",
      description: "95% employee satisfaction rate",
      stat: "95%",
    },
    {
      icon: FaHandshake,
      title: "Learning Investment",
      description: "$5,000 annual learning budget per employee",
      stat: "$5K",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6">
            <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white">Our Values</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Drives Us
            <span className="block text-[theme(color.brand.blue)]">
              Every Day
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Our core values shape our QA culture and drive collaboration to deliver{" "}
            <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary" className="text-brand-blue underline">
              high-quality software testing
            </Link>{" "}
            solutions in{" "}
            <Link href="/automation-testing-services" className="text-brand-blue underline">
              automation
            </Link>
            ,{" "}
            <Link href="/manual-testing-services" className="text-brand-blue underline">
              manual QA
            </Link>
            ,{" "}
            <Link href="/performance-testing-services" className="text-brand-blue underline">
              performance
            </Link>
            , and{" "}
            <Link href="/security-testing" className="text-brand-blue underline">
              security
            </Link>
            , ensuring compliance and customer satisfaction.
          </p>
        </div>

        {/* Values Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group ${value.bgColor} ${value.borderColor} border-2 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Background Pattern - Responsive sizing */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-10">
                <div
                  className={`w-full h-full bg-gradient-to-bl ${value.color} rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16`}
                ></div>
              </div>

              <div className="relative">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section - Mobile optimized */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Why Top Talent Chooses Testriq
            </h3>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              We&apos;re not just another tech company. We&apos;re a place where careers
              flourish and innovation thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gray-100 bg-opacity-10 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[theme(color.brand.blue)]" />
                </div>

                <div className="text-xl sm:text-2xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {achievement.stat}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[theme(color.brand.blue)] mb-2">
                  {achievement.title}
                </h4>
                <p className="text-[theme(color.brand.blue)] text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Highlights - Improved mobile layout */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              A Culture Built on
              <span className="block text-[theme(color.brand.blue)]">
                Mutual Respect
              </span>
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaUsers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Remote-First Approach
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Work from anywhere while staying connected with our global
                    team through modern collaboration tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaLightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Learning & Development
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Continuous learning opportunities with conference
                    attendance, online courses, and internal knowledge sharing
                    sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaHeart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Work-Life Balance
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Flexible schedules, unlimited PTO, and a genuine commitment
                    to your personal well-being and family time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Team Diversity
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Our global team represents the best talent from around the world
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Global Service Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  12+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Time Zones</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  45%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Women in Tech</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                  8+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersValuesSection;
