import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const ToolsReadyToElevateSection = () => {
  const ctaOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule Consultation",
      description:
        "Book a free 30-minute consultation to discuss your testing needs",
      text: "Book Now",
      action: BOOKING_URL,
      detail: "",
      highlight: true,
    },
    {
      icon: FaPhone,
      title: "Speak with Expert",
      description: "Talk directly with our testing specialists",
      text: "Call Now",
      action: "tel:(+91) 915-2929-343",
      detail: "(+91) 915-2929-343",
      highlight: false,
    },
    {
      icon: FaEnvelope,
      title: "Get Custom Quote",
      description: "Receive a tailored proposal for your project",
      text: "Request Quote",
      action: "mailto:contact@testriq.com",
      detail: "mailto:contact@testriq.com",
      highlight: false,
    },
  ];

  const benefits = [
    "Access to 50+ premium testing tools",
    "Expert guidance on tool selection",
    "Custom framework development",
    "24/7 technical support",
    "Training and knowledge transfer",
    "Continuous tool optimization",
  ];

  const successMetrics = [
    { value: "500+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" },
    { value: "75%", label: "Faster Testing" },
    { value: "60%", label: "Cost Reduction" },
  ];

  return (
    <section className="bg-gradient-to-br from-brand-blue via-sky-700 to-sky-600 px-8 py-16 xl:px-24 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-blue text-white text-sm px-4 py-2 rounded-full mb-6">
            Ready to Get Started?
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Elevate Your Testing with Advanced Tools
          </h2>

          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Transform your software quality assurance with our comprehensive
            suite of testing tools and frameworks. Join hundreds of companies
            that trust us with their critical testing needs.
          </p>

          {/* Primary CTA Button */}
          <Link
            href="/contact-us"
            className="bg-white cursor-pointer text-sky-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 hover:scale-98 transition-all inline-flex items-center gap-3 mb-12 min-h-[48px] min-w-[48px]"
          >
            Start Your Testing Journey
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 bg-gradient-to-br from-brand-blue via-sky-800 to-sky-700 bg-opacity-50 backdrop-blur-sm`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-brand-blue text-white`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3
                  className={`text-xl text-white font-bold mb-4`}
                >
                  {option.title}
                </h3>

                <p
                  className={`mb-3 text-white`}
                >
                  {option.description}
                </p>
                <h3 className="py-2">{option.detail}</h3>

                <Link
                  href={option.action} target={ "_blank" }
                  className="px-6 py-3 cursor-pointer rounded-lg font-semibold transition-colors bg-brand-blue text-white hover:bg-sky-700 inline-flex items-center justify-center min-h-[48px] min-w-[48px]"
                >
                  {option.text}
                </Link>

              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-brand-blue via-sky-800 to-sky-700 bg-opacity-30 backdrop-blur-sm rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              What You Get with Our Testing Tools
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Comprehensive testing solutions designed to accelerate your
              development and ensure the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Proven Results</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {metric.value}
                </div>
                <p className="text-blue-100 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-blue via-sky-800 to-sky-700 rounded-xl p-8 inline-block">
            <h4 className="text-xl font-bold text-white mb-4">
              Ready to Transform Your Testing?
            </h4>
            <p className="text-blue-100 mb-6 max-w-md">
              Join the ranks of successful companies using our advanced testing
              tools and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="bg-white cursor-pointer text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-98 transition-all inline-flex items-center justify-center min-h-[48px] min-w-[48px]"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsReadyToElevateSection;
