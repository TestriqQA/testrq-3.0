"use client";

import React from "react";
import {
  Lock,
  UserCheck,
  Shield,
  Database,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const TradingAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-10 h-10" />,
      title: "End-to-End Encryption",
      description:
        "We ensure your platform protects all trading data and communications with robust encryption before granting certification.",
      features: [
      (<>AES-256 <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">encryption</Link> for data at rest</>),
        "TLS 1.3 for data in transit",
        "Secure key management",
        "Encrypted trading communications",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Identity Verification",
      description:
        "We validate that your identity checks prevent fraud and maintain regulatory compliance.",
      features: [
        (<>Document <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">verification</Link></>),
        (<><Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">Biometric</Link> authentication</>),
        "Address verification",
        "Enhanced due diligence",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Advanced Authentication",
      description:
        "We confirm that multi-factor authentication and secure login methods are implemented effectively.",
      features: [
        "2FA/MFA support",
        (<>Hardware token <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">integration</Link></>),
        (<><Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">Biometric</Link> login</>),
        "Session management",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Secure Data Storage",
      description:
        "We check that all stored data is encrypted, backed up, and access is tightly controlled.",
      features: [
        (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Encrypted</Link> databases</>),
        (<>Secure <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">cloud</Link> storage</>),
        "Regular automated backups",
        "Access control policies",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Real-time Monitoring",
      description:
        "We review your monitoring systems to ensure continuous protection against suspicious activity.",
      features: [
        "24/7 system monitoring",
        "Anomaly detection",
        (<><Link href="/performance-testing-services">Performance</Link></>),
        (<><Link href="/security-testing">Security</Link> event logging</>),
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Fraud Detection",
      description:
        "We assess your fraud detection capabilities to ensure suspicious activity is quickly identified and addressed.",
      features: [
        (<><Link href="/blog/post/ai-testing-learning-guide">Machine learning algorithms</Link></>),
        "Pattern recognition",
        "Risk scoring",
        "Automated alerts",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  const scrollToSection = () => {
    const section = document.getElementById(
      "trading-app-certification-process"
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of{" "}
            <span className="text-brand-blue">Trading App Security</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t just list features - we verify your platform meets all six
            essential security pillars before awarding our certification.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
      key={index}
      className={`${feature.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
    >
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
      className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
    >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Certified?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We’ll assess your trading platform against our six security
              pillars and certify your compliance - giving your users complete
              confidence in your safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToSection}
                className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                View Certification Process
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-300 cursor-pointer">
                Download Requirements
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppSecurityFeatures;
