// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaExclamationTriangle,
  FaAccessibleIcon,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaMobile,
  FaPlay,
  // FaClock,
  FaGraduationCap,
  FaArrowRight,
  FaBook,
  FaGlobe,
} from "react-icons/fa";

const ElearningChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaAccessibleIcon,
      title: "Accessibility Compliance Gaps",
      problem:
        "70% of e-learning platforms fail WCAG 2.1 accessibility standards",
      impact:
        "Excludes millions of learners with disabilities, legal compliance risks",
      solution:
        "Comprehensive accessibility testing and WCAG 2.1 AA compliance validation",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      urgency: "Critical",
      action:
        "/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment",
    },
    {
      icon: FaMobile,
      title: "Mobile Learning Barriers",
      problem:
        "60% of learning happens on mobile, but many platforms aren't optimized",
      impact: "Poor user experience leads to 45% higher dropout rates",
      solution:
        "Mobile-first testing approach with device-specific optimization",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      urgency: "High",
      action:
        "/mobile-learning-optimization-enhancing-e-learning-platforms-for-mobile-devices",
    },
    {
      icon: FaPlay,
      title: "Video Content Issues",
      problem:
        "Video streaming problems affect 40% of online learning sessions",
      impact: "Disrupted learning experiences and reduced engagement",
      solution:
        "Comprehensive video testing across devices and network conditions",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      urgency: "High",
      action:
        "/video-content-testing-for-e-learning-ensuring-smooth-delivery-and-engagement",
    },
    {
      icon: FaUsers,
      title: "Scalability Limitations",
      problem: "LMS platforms crash during peak enrollment periods",
      impact: "Lost revenue, frustrated learners, damaged reputation",
      solution:
        "Load testing and performance optimization for concurrent users",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      urgency: "Critical",
      action:
        "/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users",
    },
    {
      icon: FaShieldAlt,
      title: "Data Privacy Concerns",
      problem: "Educational data breaches increased by 58% in recent years",
      impact: "FERPA violations, legal penalties, loss of trust",
      solution: "Security testing and privacy compliance validation",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      urgency: "Critical",
      action:
        "/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users",
    },
    {
      icon: FaChartLine,
      title: "Poor Learning Analytics",
      problem:
        "Inaccurate tracking leads to 35% of progress data being unreliable",
      impact: "Ineffective learning paths and reduced educational outcomes",
      solution: "Learning analytics validation and SCORM/xAPI testing",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      urgency: "Medium",
      action:
        "/scorm-compliance-and-learning-analytics-testing-ensuring-accurate-tracking-and-assessment-of-learner-progress",
    },
  ];

  const industryStats = [
    {
      value: "70%",
      label: "Platforms Fail Accessibility Tests",
      trend: "up",
      color: "text-red-600",
    },
    {
      value: "45%",
      label: "Higher Mobile Dropout Rates",
      trend: "up",
      color: "text-red-600",
    },
    {
      value: "58%",
      label: "Increase in Data Breaches",
      trend: "up",
      color: "text-red-600",
    },
    {
      value: "35%",
      label: "Unreliable Progress Tracking",
      trend: "up",
      color: "text-red-600",
    },
  ];

  const learningImpact = [
    {
      icon: FaGraduationCap,
      title: "Reduced Learning Outcomes",
      description:
        "Technical issues directly impact educational effectiveness and student success rates.",
      impact: "25% decrease in course completion",
    },
    {
      icon: FaUsers,
      title: "Learner Frustration",
      description:
        "Poor platform performance leads to increased support requests and negative reviews.",
      impact: "40% increase in support tickets",
    },
    {
      icon: FaBook,
      title: "Content Delivery Issues",
      description:
        "Broken multimedia, slow loading, and compatibility problems disrupt learning flow.",
      impact: "60% of learners report technical difficulties",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-100 text-red-700 border-red-200";
      case "High":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-700" />
            <span className="text-sm font-medium text-red-700">
              E-Learning Challenges
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Critical E-Learning Issues
            <span className="block text-brand-blue">
              Blocking Educational Success
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            E-learning platforms face unique challenges that can significantly
            impact educational outcomes, platform{" "}
            <Link href="/performance-testing-services">performance</Link>, and
            learner satisfaction. Our e-learning testing solutions address these
            critical issues through{" "}
            <Link href="/blog/post/accessibility-testing-in-manual-testing-use-cases-techniques">
              accessibility compliance
            </Link>
            ,{" "}
            <Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">
              functional
            </Link>{" "}
            validation, and{" "}
            <Link href="/blog/post/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates">
              usability testing
            </Link>{" "}
            to ensure effective and inclusive learning experiences.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            E-Learning Industry Reality
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Source: EdTech Industry Reports 2024
            </p>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 hover:shadow-2xl hover:ring-3 transition-all duration-300 hover:-translate-y-2 ring-1 ring-brand-blue border-opacity-20 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <challenge.icon className="w-8 h-8 text-white" />
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full border ${getUrgencyColor(
                    challenge.urgency
                  )}`}
                >
                  {challenge.urgency}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-2">
                    THE PROBLEM:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 text-sm mb-2">
                    EDUCATIONAL IMPACT:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 text-sm mb-2">
                    OUR SOLUTION:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href={`blog/post${challenge.action}`}
                  className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300" aria-label={`Learn more about ${challenge.title}`}
                >
                  Learn More
                  <span className="sr-only"> about {challenge.title}</span>
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Impact Analysis */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How Technical Issues Impact Learning
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technical issues in e-learning platforms, such as accessibility
              failures,{" "}
              <Link href="/performance-testing-services">performance</Link>{" "}
              bottlenecks, or{" "}
              <Link href="/blog/post/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates">
                usability
              </Link>{" "}
              flaws, have direct consequences on educational effectiveness and
              learner satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningImpact.map((impact, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl ring-1 ring-brand-blue hover:ring-3 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <impact.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {impact.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {impact.description}
                </p>
                <div className="text-lg font-bold text-red-600">
                  {impact.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost of Poor E-Learning Quality */}
        <div className="bg-gradient-to-tr from-red-700 to-red-300 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <FaExclamationTriangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              The True Cost of Poor E-Learning Quality
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Technical issues in e-learning platforms don&apos;t just affect
              <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
                user experience
              </Link>
              -they directly impact educational outcomes, institutional
              reputation, and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-red-600">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Educational Outcomes</h4>
              <p className="text-sm">
                Poor platform quality leads to 25% lower course completion rates
                and reduced learning effectiveness.
              </p>
            </div>

            <div className="text-center text-red-600 p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Student Retention</h4>
              <p className="text-sm">
                Technical difficulties cause 40% of students to abandon courses,
                leading to significant revenue loss.
              </p>
            </div>

            <div className="text-center text-red-600 p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">
                Institutional Reputation
              </h4>
              <p className="text-sm">
                Accessibility violations and{" "}
                <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
                  security breaches
                </Link>{" "}
                can result in legal action and permanent reputation damage.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              title="Prevent These Issues Now – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-red-600 font-semibold text-lg rounded-2xl shadow-lg
             hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              Prevent These Issues Now
            </Link>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-brand-blue to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaGraduationCap className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Transform Your E-Learning Platform
          </h3>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive e-learning testing solutions address every
            challenge mentioned above, ensuring accessible, engaging, and
            effective learning experiences for all students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              title="Get Free Assessment – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-brand-blue font-semibold text-lg rounded-2xl border border-white border-opacity-30
             hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              Get Free Assessment
            </Link>
          </div>

          <div className="mt-8 text-indigo-100 text-sm">
            <p>
              ✓
              <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
                {" "}
                WCAG 2.1 Compliance
              </Link>{" "}
              • ✓ Mobile Optimization • ✓{" "}
              <Link href="/security-testing">Security Testing</Link> • ✓
              <Link href="/performance-testing-services">
                Performance Enhancement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningChallengesSection;
