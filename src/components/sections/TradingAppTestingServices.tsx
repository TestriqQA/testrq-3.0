"use client";

import React from "react";
import {
  Smartphone,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Database,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const TradingAppTestingServices = () => {
  const testingServices = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: (<><Link href="/mobile-application-testing">Mobile Trading App Testing</Link></>),
      description:
        "Comprehensive testing across iOS and Android platforms for optimal trading experience.",
      features: [
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-platform compatibility testing</Link></>),
        "Real-time data synchronization",
        "Touch interface and gesture testing",
        "App store compliance verification",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: (<><Link href="/web-application-testing-services">Web Trading Platform Testing</Link></>),
      description:
        "Full-stack web application testing for trading platforms and admin panels.",
      features: [
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-platform compatibility testing</Link></>),
        "Responsive design validation",
        "Progressive web app (PWA) testing",
        (<>SEO and <Link href="/blog/post/usability-testing-in-manual-testing-use-cases-techniques">accessibility compliance</Link></>),
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: (<><Link href="/performance-testing-services">Performance & Latency Testing</Link></>),
      description:
        "Low latency and high-frequency trading performance optimization.",
      features: [
        "Ultra-low latency testing",
        "High-frequency trading validation",
        "Market data feed testing",
        "Order execution speed optimization",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: (<><Link href="/security-testing">Security & Penetration Testing</Link></>),
      description:
        "Comprehensive security assessment and penetration testing for financial platforms.",
      features: [
        "Financial data security testing",
        (<><Link href="/api-testing">API security</Link> and endpoint protection</>),
        "Authentication and authorization testing",
        (<>Fraud detection <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">system validation</Link></>),
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: (<><Link href="/banking-finance-industry-testing-services">Algorithmic Trading Testing</Link></>),
      description:
        "Specialized testing for algorithmic and automated trading systems.",
      features: [
        "Algorithm validation and verification",
        "Risk management system testing",
        "Backtesting and simulation",
        "Market impact analysis",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: (<>Data Integrity & <Link href="/api-testing">API Testing</Link></>),
      description: "Market data accuracy and trading API validation services.",
      features: [
        (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Real-time</Link> market data validation</>),
        (<>Trading <Link href="/api-testing">API Testing</Link> and validation</>),
        "Data feed integration testing",
        "Transaction reconciliation testing",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const testingProcess = [
    {
      step: "01",
      title: "Trading Requirements Analysis",
      description:
        "Comprehensive analysis of trading workflows, regulatory requirements, and performance benchmarks.",
    },
    {
      step: "02",
      title: "Test Strategy Development",
      description:
        (<>Creation of detailed test strategy covering <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">functional</Link>, performance, and security aspects.</>),
    },
    {
      step: "03",
      title: "Automated Test Execution",
      description:
        (<>Systematic execution of <Link href="/automation-testing-services">automated</Link> and <Link href="/manual-testing-services">manual tests</Link> with real-time monitoring.</>),
    },
    {
      step: "04",
      title: "Performance Optimization",
      description:
        "Performance tuning and optimization based on test results and industry benchmarks.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-brand-blue">Testing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end testing services specifically designed for trading
            platforms, covering every aspect from ultra-low latency to
            regulatory compliance.
          </p>
        </div>

        {/* Testing Services Grid */}
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
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testing Process */}
        <div
      className="bg-white rounded-xl p-8 shadow-lg mb-16"
    >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Trading App Testing Process
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

        {/* Performance Metrics */}
        <div
      className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
    >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Performance Metrics We Deliver
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our testing services ensure your trading app meets the highest
              performance standards with measurable improvements in speed,
              reliability, and user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: "< 1ms",
                label: "Order Execution Latency",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                metric: "99.99%",
                label: "Uptime Guarantee",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                metric: "10,000+",
                label: "Orders/Second",
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                metric: "Zero",
                label: "Critical Bugs",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div
      key={index}
      className="text-center bg-white/10 rounded-lg p-4"
    >
                <div className="text-white mb-2 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{item.metric}</div>
                <div className="text-blue-100 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
                Start Performance Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppTestingServices;
