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

const MatrimonialAppBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "3x Increase in User Trust",
      description:
        "Certified matrimonial apps see a significant boost in user confidence and engagement.",
      metric: "300%",
      metricLabel: "Trust Increase",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Higher User Retention",
      description:
        "Security-certified platforms retain 45% more users compared to non-certified competitors.",
      metric: "45%",
      metricLabel: "Better Retention",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: (<>Reduced <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Security</Link> Incidents</>),
      description:
        "Comprehensive certification reduces security breaches and data incidents by 90%.",
      metric: "90%",
      metricLabel: "Fewer Incidents",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Premium Market Position",
      description:
        "Certification establishes your platform as a premium, trustworthy matrimonial service.",
      metric: "Top 10%",
      metricLabel: "Market Position",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Revenue Growth",
      description:
        (<>Certified platforms experience 25% higher <Link href="/blog/post/issue-documentation-in-software-testing-how-detailed-bug-reporting-enhances-web-application-quality">revenue</Link> due to increased user confidence.</>),
      metric: "25%",
      metricLabel: "Revenue Boost",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Better App Store Ratings",
      description:
        "Security and quality certification leads to improved app store ratings and reviews.",
      metric: "4.8/5",
      metricLabel: "Average Rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const businessImpacts = [
    {
      title: "Competitive Advantage",
      description:
        (<>Stand out in the crowded matrimonial app market with verified <Link href="/security-testing">security</Link> and <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">quality</Link> credentials.</>),
      icon: <ArrowUp className="w-6 h-6" />,
    },
    {
      title: (<>Regulatory <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">Compliance</Link></>),
      description:
        "Meet international data protection and privacy regulations without worrying about compliance gaps.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Investor Confidence",
      description:
        (<>Demonstrate commitment to <Link href="/security-testing">security</Link> and <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">quality</Link>, making your platform more attractive to investors.</>),
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: (<><Link href="/blog/post/risk-based-regression-testing-smarter-test-optimization">Risk</Link> Mitigation</>),
      description:
        "Reduce legal and financial risks associated with data breaches and security incidents.",
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
            <span className="text-brand-blue">
              Matrimonial App Certification
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how certification transforms your matrimonial platform into
            a trusted, <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">secure</Link>, and <Link href="/performance-testing-services">high-performing service</Link> that users prefer.
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
            Business Impact Beyond Numbers
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
              Calculate Your ROI from Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how matrimonial app certification can impact your business
              metrics and revenue growth. Most platforms see positive <Link href="/blog/post/automation-testing-roi-how-to-justify-the-cost">ROI</Link> within
              3-6 months.
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

export default MatrimonialAppBenefits;
