"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  Shield,
  Award,
  DollarSign,
  Star,
  ArrowUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const FantasyAppBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "4x Growth in User Engagement",
      description:
        "Certified fantasy platforms see a surge in user interaction and game participation.",
      metric: "400%",
      metricLabel: "Engagement Rise",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Increased Player Retention",
      description:
        "Platforms with certification retain 50% more players over time through enhanced trust and experience.",
      metric: "50%",
      metricLabel: "More Retention",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Reduced Fraud Risk",
      description:
        "Certification reduces cheating, multi-account abuse, and in-game frauds by up to 85%.",
      metric: "85%",
      metricLabel: "Lower Fraud Risk",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Top Industry Recognition",
      description:
        "Certified fantasy apps earn credibility and recognition from users, platforms, and sports communities.",
      metric: "Top Tier",
      metricLabel: "Reputation Status",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Boost in Revenue",
      description:
        "Platforms with certification see 30% more revenue through user trust and monetization opportunities.",
      metric: "30%",
      metricLabel: "Revenue Growth",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "App Store Visibility",
      description:
        "Certified apps maintain an average 4.9/5 rating, leading to better rankings and visibility in app stores.",
      metric: "4.9/5",
      metricLabel: "Average Rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const businessImpacts = [
    {
      title: "Market Differentiation",
      description:
        "Position your fantasy app as a reliable and secure choice in a saturated marketplace.",
      icon: <ArrowUp className="w-6 h-6" />,
    },
    {
      title: "Regulatory Compliance",
      description:
        "Fulfill legal obligations like fair play, privacy, and digital payments compliance with confidence.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Investor Appeal",
      description:
        "Prove your platform’s security and credibility to attract VC and institutional investment.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Risk & Fraud Prevention",
      description:
        "Minimize exposure to legal actions, cheating incidents, and user complaints through proactive certification.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefits of{" "}
            <span className="text-brand-blue">Fantasy App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock greater user retention, platform growth, and trust with a
            certification process tailored for competitive fantasy sports
            applications.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
      key={index}
      className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
    >
              <div className={`${benefit.color} mb-4`}>{benefit.icon}</div>

              <div className="mb-4">
                <div className={`text-3xl font-bold ${benefit.color} mb-1`}>
                  {benefit.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.metricLabel}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Business Impact Section */}
        <div
      className="bg-white rounded-xl p-8 shadow-lg"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Business Impact Beyond Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessImpacts.map((impact, index) => (
              <div
      key={index}
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
    >
                <div className="text-[#25A8E0] mt-1">{impact.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div
      className="text-center mt-16"
    >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Measure Your Certification ROI
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Curious how much impact certification could bring to your fantasy
              platform? Use our ROI calculator or explore case studies to find
              out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get an ROI Analysis
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyAppBenefits;
