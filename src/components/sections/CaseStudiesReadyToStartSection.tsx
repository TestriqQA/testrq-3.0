import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const CaseStudiesReadyToStartSection = () => {
  const benefits = [
    {
      icon: FaRocket,
      title: "Fast Implementation",
      description:
        "Get started within 48 hours with our rapid onboarding process",
    },
    {
      icon: FaShieldAlt,
      title: "Risk-Free Trial",
      description: "30-day money-back guarantee on all our testing services",
    },
    {
      icon: FaUsers,
      title: "Dedicated Team",
      description:
        "Assigned project manager and testing experts for your success",
    },
  ];

  const contactOptions = [
    {
      icon: FaCalendarAlt,
      title: "Schedule a Call",
      description: "Book a free consultation at your convenience",
      action: "https://calendar.app.google/uUHn8prcXbdqcvVb6",
      text: "Schedule Now",
      primary: true,
    },
    {
      icon: FaPhone,
      title: "Call Us Directly",
      description: "(+91) 915-2929-343",
      action: "tel:(+91) 915-2929-343",
      text: "Call Now",
      primary: false,
    },
    {
      icon: FaEnvelope,
      title: "Send Us an Email",
      description: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
      text: "Mail Us",
      primary: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-brand-blue via-sky-700 to-sky-600 px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Your{" "}
            <span className="text-yellow-300">Success Story?</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied clients who have transformed their
            software quality with our expert testing services. Let&apos;s
            discuss how we can help you achieve similar results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact-us"
              className="bg-yellow-400 cursor-pointer text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center hover:scale-95 justify-center gap-2 min-h-[48px] min-w-[48px]"
            >
              <span>Start Your Success Story</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-blue via-sky-800 to-sky-700 rounded-xl p-6 text-white text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Options */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Choose Your Preferred Contact Method
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (

                <div key={index}
                  className={`bg-white/20 text-white rounded-lg p-6 text-center transition-transform`}
                >
                  <IconComponent
                    className={`w-8 h-8 mx-auto mb-4 ${option.primary ? "text-white" : "text-white"
                      }`}
                  />
                  <h4 className="font-semibold mb-2">{option.title}</h4>
                  <p className={`text-sm mb-4 text-white`}>
                    {option.description}
                  </p>

                  <Link key={index} href={`${option.action}`} target={ "_blank" }
                    className="font-semibold bg-yellow-400 text-gray-900 p-2 rounded-xl hover:scale-105 cursor-pointer transition-colors"
                  >
                    {option.text}
                  </Link>
                </div>



              );
            })}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-gray-200 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCheckCircle className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900">Our Guarantee</h3>
          </div>

          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We&apos;re so confident in our testing services that we offer a
            30-day money-back guarantee. If you&apos;re not completely satisfied
            with our work, we&apos;ll refund your investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">
                Client-First Approach
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">No Long-term Contracts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6">
            Don&apos;t let software bugs and quality issues hold your business
            back.
          </p>
          <Link
            href="/contact-us"
            className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-lg font-bold text-xl cursor-pointer hover:scale-98 transition-all inline-flex items-center justify-center min-h-[48px] min-w-[48px]"
          >
            Get Started Today
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CaseStudiesReadyToStartSection;
