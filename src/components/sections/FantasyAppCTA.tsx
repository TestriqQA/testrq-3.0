"use client";

import React from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const FantasyAppCTA = () => {
  const ctaFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Fair Play & Security Certification",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "12–18 Day Certification Process",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Compliance with Global Gaming Standards",
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "+91-915-2929-343",
      action: "tel:+919152929343",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      value: "contact@testriq.com",
      action: "mailto:contact@testriq.com",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Live Chat",
      value: "Start Chat",
      action: "#",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-12"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to{" "}
            <span className="text-brand-blue">Certify Your Fantasy App?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 200+ fantasy platforms that trust Testriq for real-time,
            secure, and compliant certification. Stand out in the competitive
            fantasy gaming market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main CTA */}
          <div
      className="space-y-8"
    >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started with Free Assessment
              </h3>

              <div className="space-y-4 mb-8">
                {ctaFeatures.map((feature, index) => (
                  <div
      key={index}
      className="flex items-center gap-3"
    >
                    <div className="text-brand-blue">{feature.icon}</div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Link href="/contact-us">
                  <button className="w-full mb-5 cursor-pointer bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Start Free Assessment
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                {/* <button className="w-full border-2 border-brand-blue text-brand-blue hover:bg-[#25A8E0] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer">
                  Download Certification Guide
                </button> */}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">
                Prefer to Talk? Contact Us Directly
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <a
      key={index}
      href={method.action}
      className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:bg-[#25A8E0] hover:text-white transition-colors duration-300 group"
    >
                    <div className="text-brand-blue group-hover:text-white">
                      {method.icon}
                    </div>
                    <div className="text-xs text-gray-600 group-hover:text-blue-100">
                      {method.label}
                    </div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-white">
                      {method.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Benefits Summary */}
          <div
      className="space-y-6"
    >
            <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Testriq for Fantasy QA?
              </h3>

              <div className="space-y-4">
                {[
                  "14+ years of experience in real-time app testing",
                  "Fair play & anti-fraud certification experts",
                  "24/7 uptime, data integrity, and scoring validation",
                  "Compliance with ISO 27001, GDPR, CCPA, OWASP",
                  "Real-time load & live-match performance optimization",
                ].map((benefit, index) => (
                  <div
      key={index}
      className="flex items-start gap-3"
    >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
    >
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-4">
                  Trusted by Industry Leaders
                </h4>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Match Integrity Score
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
      className="text-center mt-16"
    >
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Don&apos;t Delay – Certify Your Fantasy App Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              The competition never sleeps. Secure your app, gain user trust,
              and win in the fantasy arena. Start your free certification
              assessment now.
            </p>
            <Link href={"/contact-us"}>
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Certified Now - Free Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyAppCTA;
