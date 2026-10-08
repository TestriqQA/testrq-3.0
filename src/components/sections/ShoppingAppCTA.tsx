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

const ShoppingAppCTA = () => {
  const ctaFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: (
        <>
          End-to-End{" "}
          <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">
            Security Compliance
          </Link>
        </>
      ),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "10-15 Day Certification Process",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "PCI DSS & Global Regulation Coverage",
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
            <span className="text-brand-blue">Certify Your Shopping App?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by 500+ eCommerce platforms, Testriq helps your app meet
            global compliance standards, build trust, and enhance digital
            security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
      className="space-y-8"
    >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start with a Free Compliance Audit
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
                  <button className="w-full cursor-pointer bg-brand-blue mb-5 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Start Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                {/* <button className="w-full border-2 border-brand-blue text-brand-blue hover:bg-[#25A8E0] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer">
                  Download Compliance Guide
                </button> */}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">
                Questions? Contact Us
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

          <div
      className="space-y-6"
    >
            <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Why Testriq for eCommerce Certification?
              </h3>
              <div className="space-y-4">
                {[
                  "15+ years of compliance and testing experience",
                  "Certified experts in PCI DSS, GDPR, CCPA",
                  "99.9% uptime compliance rate",
                  "Global scalability and support",
                  "Ongoing regulatory tracking & re-certification",
                ].map((item, index) => (
                  <div
      key={index}
      className="flex items-start gap-3"
    >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
    >
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-4">
                  Trusted by Top eCommerce Brands
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">
                      Compliance Uptime
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

        <div
      className="text-center mt-16"
    >
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Let’s Secure Your Shopping App Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Avoid compliance gaps that can cost you customers. Start your
              security and standards certification with Testriq today.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Now - Free Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingAppCTA;
