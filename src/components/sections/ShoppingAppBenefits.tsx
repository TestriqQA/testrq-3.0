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

const ShoppingAppBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Boost in Buyer Trust",
      description:
        "Certified shopping apps gain up to 3x higher trust from users during checkout and transactions.",
      metric: "3x",
      metricLabel: "More Trust",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Improved Customer Retention",
      description: (
        <>
          Certified <Link href="/e-commerce-testing-services">e-commerce</Link>{" "}
          platforms retain 40% more users with secure and seamless experiences.
        </>
      ),
      metric: "40%",
      metricLabel: "Better Retention",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Fewer Security Breaches",
      description: (
        <>
          Compliance-backed certification reduces{" "}
          <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
            data breaches
          </Link>{" "}
          and fraud by over 85%.
        </>
      ),
      metric: "85%",
      metricLabel: "Threat Reduction",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Stronger Brand Authority",
      description: (
        <>
          Position your platform as a premium and{" "}
          <Link href="/security-testing">secure</Link> destination for online
          shopping.
        </>
      ),
      metric: "Top 10%",
      metricLabel: "Brand Position",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Revenue Acceleration",
      description:
        "Shoppers are more likely to complete purchases on certified platforms, increasing revenue by 30%.",
      metric: "30%",
      metricLabel: "More Revenue",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Better Ratings & Reviews",
      description: (
        <>
          App store ratings improve with higher{" "}
          <Link href="/performance-testing-services">performance</Link>,{" "}
          <Link href="/security-testing">security</Link>, and customer
          satisfaction.
        </>
      ),
      metric: "4.7/5",
      metricLabel: "Avg. Rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const businessImpacts = [
    {
      title: "Customer Confidence",
      description: (
        <>
          Reassure buyers with certified checkout,{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            privacy
          </Link>{" "}
          safeguards, and robust{" "}
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            payment
          </Link>{" "}
          protection.
        </>
      ),
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Compliance Assurance",
      description: (
        <>
          Ensure your app meets PCI-DSS, GDPR, and consumer{" "}
          <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
            data protection
          </Link>{" "}
          standards with ease.
        </>
      ),
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Market Differentiation",
      description: (
        <>
          Stand out in the{" "}
          <Link href="/e-commerce-testing-services">e-commerce</Link> crowd with
          verified certification and{" "}
          <Link href="/security-testing">security</Link> credentials.
        </>
      ),
      icon: <ArrowUp className="w-6 h-6" />,
    },
    {
      title: "Investor Appeal",
      description: (
        <>
          Build investor confidence by demonstrating a proactive approach to{" "}
          <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
            platform
          </Link>{" "}
          integrity and compliance.
        </>
      ),
      icon: <TrendingUp className="w-6 h-6" />,
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
            <span className="text-brand-blue">Shopping App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how certification can elevate your{" "}
            <Link href="/e-commerce-testing-services">e-commerce</Link> app’s
            credibility,{" "}
            <Link href="/performance-testing-services">performance</Link>, and
            bottom-line metrics.
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
            Business Impact That Goes Beyond Metrics
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
              Estimate Your ROI from Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Most certified shopping apps experience measurable{" "}
              <Link href="/blog/post/automation-testing-roi-how-to-justify-the-cost">
                ROI
              </Link>{" "}
              within 2–4 months through higher retention, trust, and conversion.
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

export default ShoppingAppBenefits;
