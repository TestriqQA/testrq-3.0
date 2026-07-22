// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaExclamationTriangle,
  FaMobile,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaLink,
  FaDatabase,
} from "react-icons/fa";

const EcommerceChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaChartLine,
      title: "Peak Traffic & Conversion Resilience",
      problem: "Conversion Loss ≈ 7% × Second of Delay. The 'Stampede Effect' causes system crashes during Black Friday surges.",
      impact: "Even a minor performance lag can ruin revenue during high-traffic events.",
      solution: (<>ISO 29119-2 risk-based <Link href="/performance-testing-services" className="text-blue-600 underline">load testing</Link> using JMeter and k6 to simulate millions of concurrent users.</>),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      action: "/performance-load-testing-for-e-commerce-sites",
    },
    {
      icon: FaLink,
      title: "Complex Integration Reliability",
      problem: "25% of all transaction failures stem from faulty external API handshakes (Shipping, CRM, Payments).",
      impact: "Broken checkout flows lead to direct revenue loss and customer frustration.",
      solution: (<>Rigorous <Link href="/api-testing" className="text-orange-600 underline">API integration testing</Link> and sandbox checkout validation for Stripe, PayPal, and more.</>),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      action: "/secure-payment-gateway-testing-for-e-commerce",
    },
    {
      icon: FaMobile,
      title: "Mobile-First Consistency",
      problem: "Mobile drives 60% of traffic, but conversion rates lag due to visual regression on 2,000+ device combinations.",
      impact: "Poor responsive UX is a major driver of revenue loss in the fastest-growing segment.",
      solution: (<>ISO 29119-4 <Link href="/mobile-application-testing" className="text-purple-600 underline">mobile testing</Link> optimized for thumb-reach and visual consistency across all viewports.</>),
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      action: "/mobile-commerce-optimization-testing-services",
    },
    {
      icon: FaShieldAlt,
      title: "Security & PCI DSS 4.0",
      problem: "Breaches cost brands an average of $4.45M. magecart attacks target outdated client-side scripts.",
      impact: "Legal liabilities and complete loss of customer trust from data breaches.",
      solution: (<><Link href="/security-testing" className="text-green-600 underline">PCI DSS 4.0 compliance audits</Link>, SSL validation, and mandatory MFA check penetration testing.</>),
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      action: "/e-commerce-security-testing-compliance-services",
    },
    {
      icon: FaDatabase,
      title: "High-Volume Data Integrity",
      problem: "Inventory sync errors and price mismatches across millions of SKUs lead to customer distrust.",
      impact: "Display errors and 'In-Stock' mismatches create massive legal and operational risks.",
      solution: "ISO 29119-2 shopping cart testing and real-time database validation for taxes, stock, and pricing.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      action: "/cross-platform-e-commerce-testing-delivering-seamless-shopping-experiences-everywhere",
    },
  ];

  const industryStats = [
    { value: "70%", label: "Average Cart Abandonment Rate", trend: "up" },
    { value: "$4.6T", label: "Annual Lost Revenue Globally", trend: "up" },
    { value: "25%", label: "Payment-Related Failures", trend: "up" },
    { value: "7%", label: "Conversion Drop per Second Delay", trend: "up" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">
              2026 Digital Commerce QA
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-10 md:leading-14">
            Solving the 2026 Global <span className="text-[theme(color.brand.blue)]">Challenges in Digital Commerce QA</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The e-commerce ecosystem of 2026 is defined by massive scale and fragmented integrations. As a leading e-commerce testing provider, we solve the five biggest hurdles facing global retailers today:
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry Reality Check
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <challenge.icon className="w-8 h-8 text-white" />
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
                    BUSINESS IMPACT:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 text-sm mb-2">
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
                  className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300" aria-label={`Learn more about ${challenge.title}`}
                >
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cost of Inaction */}
        <div className="bg-gradient-to-tr from-red-700 to-red-300 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12 text-white">
            <FaExclamationTriangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              The Cost of Ignoring These Issues
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Every day these problems persist, your e-commerce platform loses
              potential revenue, customers, and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Revenue Loss</h4>
              <p className="text-sm">
                Unoptimized e-commerce sites lose 20-40% of potential revenue
                due to technical issues and poor user experience.
              </p>
            </div>

            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Customer Churn</h4>
              <p className="text-sm">
                88% of online consumers are less likely to return to a site
                after a bad experience, leading to permanent customer loss.
              </p>
            </div>

            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaShieldAlt className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Brand Damage</h4>
              <p className="text-sm">
                <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
                  Security breaches
                </Link>{" "}
                and poor{" "}
                <Link href="/performance-testing-services">performance</Link>{" "}
                damage brand reputation, requiring years and millions to rebuild
                trust.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              title="Prevent These Issues Now – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] bg-white text-red-600 rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              Prevent These Issues Now
            </Link>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Don&apos;t Let These Challenges Hold You Back
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive e-commerce testing solutions address every
            challenge mentioned above, helping you maximize revenue, improve
            customer satisfaction, and stay ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              title="See Our Solutions – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              See Our Solutions
            </Link>
            <Link
              href="/contact-us"
              title="Get Free Audit – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] bg-white bg-opacity-20 text-[theme(color.brand.blue)] rounded-2xl font-semibold text-lg border border-white border-opacity-30 hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceChallengesSection;
