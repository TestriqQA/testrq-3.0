"use client";

import React from "react";
import { CheckCircle, Clock, Sparkles } from "lucide-react";

const DatingAppChooseYourPlan = () => {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Perfect for MVPs",
      price: "$2,999",
      originalPrice: "$4,999",
      duration: "2-3 weeks",
      description: "Essential security certification for new dating apps",
      features: [
        "Basic security audit",
        "Profile verification setup",
        "Privacy compliance check",
        "Trust badge certification",
        "Basic reporting dashboard",
        "Email support",
      ],
      popular: false,
      color: "border-gray-200 bg-white",
    },
    {
      name: "Professional",
      subtitle: "Most Popular",
      price: "$7,999",
      originalPrice: "$12,999",
      duration: "3-4 weeks",
      description: "Comprehensive certification for growing dating apps",
      features: [
        "Everything in Starter",
        "Advanced identity verification",
        "Real-time monitoring setup",
        "Content moderation audit",
        "Algorithm fairness testing",
        "Priority support",
        "Quarterly security reviews",
      ],
      popular: true,
      color: "border-brand-blue bg-gradient-to-br from-brand-blue/5 to-blue-50",
    },
    {
      name: "Enterprise",
      subtitle: "For Global Apps",
      price: "$19,999",
      originalPrice: "$29,999",
      duration: "4-6 weeks",
      description: "Complete certification with custom compliance frameworks",
      features: [
        "Everything in Professional",
        "Full penetration testing",
        "Custom compliance frameworks",
        "White-label reporting",
        "Dedicated account manager",
        "24/7 priority support",
        "Annual certification renewal",
      ],
      popular: false,
      color: "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="text-brand-blue">Certification Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible plans designed for every stage of your dating app journey
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
      key={index}
      className={`relative p-8 rounded-2xl border-2 ${
                plan.color
              } transition-all duration-300 ${
                plan.popular ? "scale-105 shadow-2xl" : "shadow-lg"
              }`}
    >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>

                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {plan.originalPrice}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {plan.duration}
                </div>

                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-brand-blue text-white hover:bg-[#1e90d4]"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                } hover:scale-102 transition-transform active:scale-98 cursor-pointer`}
    >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppChooseYourPlan;
