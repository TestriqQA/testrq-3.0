"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  Shield,
  Trophy,
  DollarSign,
  Star,
  Target,
  Briefcase,
  Eye,
  Scale,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const TradingAppBenefits = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "400%",
      label: "Trust Increase",
      description: "4x Increase in Trader Trust",
      detail:
        "Certified trading apps see a significant boost in trader confidence and platform adoption.",
      color: "text-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "60%",
      label: "Better Retention",
      description: "Higher Trader Retention",
      detail:
        "Security-certified platforms retain 60% more active traders compared to non-certified competitors.",
      color: "text-green-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "95%",
      label: "Fewer Incidents",
      description: "Reduced Security Incidents",
      detail:
        "Comprehensive certification reduces security breaches and fraud incidents by 95%.",
      color: "text-purple-600",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "Top 5%",
      label: "Market Position",
      description: "Premium Market Position",
      detail:
        "Certification establishes your platform as a premium, trustworthy trading service.",
      color: "text-orange-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "35%",
      label: "Revenue Boost",
      description: "Revenue Growth",
      detail:
        "Certified platforms experience 35% higher revenue due to increased trader confidence.",
      color: "text-red-600",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.9/5",
      label: "Average Rating",
      description: "Better App Store Ratings",
      detail:
        "Security and quality certification leads to improved app store ratings and reviews.",
      color: "text-pink-600",
    },
  ];

  const businessImpacts = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Competitive Advantage",
      description:
        "Stand out in the crowded fintech market with verified security and compliance credentials.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description:
        "Meet international financial regulations without worrying about compliance gaps.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Investor Confidence",
      description:
        "Demonstrate commitment to security and quality, making your platform more attractive to investors.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Risk Mitigation",
      description:
        "Reduce legal and financial risks associated with data breaches and security incidents.",
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
            <span className="text-brand-blue">Trading App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how certification transforms your trading platform into a
            trusted, <Link href="/security-testing">secure</Link>, and <Link href="/performance-testing-services">high-performing service</Link> that traders prefer and
            regulators approve.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
      key={index}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
              <div className={`${metric.color} mb-4 flex justify-center`}>
                {metric.icon}
              </div>

              <div className="text-center">
                <div
                  className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 mb-3">{metric.label}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {metric.description}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Impact Section */}
        <div
      className="bg-white rounded-xl p-8 shadow-lg mb-16"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Business Impact Beyond Numbers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessImpacts.map((impact, index) => (
              <div
      key={index}
      className="flex items-start gap-4"
    >
                <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {impact.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {impact.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div
      className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
    >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Calculate Your ROI from Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how trading app certification can impact your business metrics
              and revenue growth. Most platforms see positive ROI within 2-4
              months through increased trader trust and reduced risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  Get an ROI Analysis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppBenefits;
