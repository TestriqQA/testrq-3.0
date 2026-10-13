"use client";

import React from "react";
import {
  ShoppingBag,
  Globe,
  Zap,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ShoppingAppTestingServices = () => {
  const testingServices = [
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "E-Commerce App Testing",
      description: (
        <>
          End-to-end testing for shopping apps across{" "}
          <Link href="/mobile-application-testing">iOS and Android</Link>{" "}
          platforms.
        </>
      ),
      features: [
        <>
          Device and OS{" "}
          <Link href="/blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa">
            compatibility testing
          </Link>
        </>,
        "Cart, checkout, and payment flow testing",
        "Push notification and deep link validation",
        "App store and Play Store compliance",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: (
        <>
          <Link href="/web-application-testing-services">
            Web Store Testing
          </Link>
        </>
      ),
      description:
        "Robust testing for online shopping portals and admin dashboards.",
      features: [
        <>
          <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
            Cross-browser
          </Link>{" "}
          and responsive layout testing
        </>,
        "PWA and desktop compatibility",
        "SEO and schema markup validation",
        <>
          <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
            Accessibility
          </Link>{" "}
          and compliance checks
        </>,
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: (
        <>
          <Link href="/blog/post/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic">
            Performance Testing
          </Link>
        </>
      ),
      description:
        "Test platform performance during traffic spikes and sale events.",
      features: [
        <>
          <Link href="/blog/post/understanding-load-vs-stress-vs-soak-testing">
            Load and stress testing
          </Link>
        </>,
        "Checkout latency analysis",
        "Search and filter speed validation",
        <>
          CDN and image{" "}
          <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">
            optimization
          </Link>{" "}
          checks
        </>,
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: (
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Security Testing
          </Link>
        </>
      ),
      description:
        "Ensure secure transactions and data protection for online shoppers.",
      features: [
        "Vulnerability scanning & VAPT",
        <>
          Secure{" "}
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            payment gateway
          </Link>{" "}
          validation
        </>,
        "Session and cookie security",
        <>
          User data{" "}
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            encryption
          </Link>{" "}
          checks
        </>,
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: (
        <>
          <Link href="/blog/post/user-experience-testing-for-smart-devices-usability-accessibility">
            User Experience Testing
          </Link>
        </>
      ),
      description:
        "Evaluate shopping journeys, ease of navigation, and conversion paths.",
      features: [
        "Customer flow analysis",
        <>
          <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">
            WCAG accessibility audits
          </Link>
        </>,
        <>
          <Link href="/blog/post/usability-testing-for-web-apps-improve-ux-accessibility-conversion-rates">
            UI/UX issue detection
          </Link>
        </>,
        "Conversion optimization A/B testing",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: (
        <>
          Integration & <Link href="/api-testing">API Testing</Link>
        </>
      ),
      description: (
        <>
          Test APIs and 3rd-party tools critical to{" "}
          <Link href="/e-commerce-testing-services">e-commerce</Link>{" "}
          operations.
        </>
      ),
      features: [
        "Payment, tax, and shipping APIs",
        <>
          ERP, CRM, and analytics{" "}
          <Link href="/blog/post/api-test-automation-strategy-faster-ci-cd">
            integrations
          </Link>
        </>,
        "Social login & single sign-on checks",
        "Webhook and queue reliability",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const testingProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understand business goals and test objectives for your shopping platform.",
    },
    {
      step: "02",
      title: "Test Case Design",
      description: (
        <>
          Craft functional, <Link href="/regression-testing">regression</Link>,
          and edge-case scenarios for real-world coverage.
        </>
      ),
    },
    {
      step: "03",
      title: "Execution & Reporting",
      description: (
        <>
          Run tests across devices and{" "}
          <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">
            browsers
          </Link>{" "}
          with real-time issue tracking.
        </>
      ),
    },
    {
      step: "04",
      title: "Go-Live Validation",
      description:
        "Certify app readiness for peak traffic, seasonal campaigns, and secure launches.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            End-to-End{" "}
            <span className="text-brand-blue">Testing for Shopping Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From user experience to{" "}
            <Link href="/blog/post/which-iot-platform-is-the-most-secure-for-your-business">
              secure
            </Link>{" "}
            checkout, our QA services ensure your shopping app delivers top-tier{" "}
            <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
              performance
            </Link>
            , conversion, and reliability.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testingServices.map((service, index) => (
            <div
      key={index}
      className={`${service.bgColor} ${service.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
    >
              <div className={`${service.color} mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div
      className="bg-white rounded-xl p-8 shadow-lg mb-16"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Testing Process Tailored for E-Commerce
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((step, index) => (
              <div
      key={index}
      className="text-center relative"
    >
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < testingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-brand-blue">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingAppTestingServices;
