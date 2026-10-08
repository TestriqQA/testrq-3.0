"use client";

import React from "react";
import {
  Lock,
  Shield,
  Eye,
  Database,
  AlertTriangle,
  CheckCircle,
  Fingerprint,
} from "lucide-react";
import Link from "next/link";

const FantasyAppSecurityFeatures = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Transaction Encryption",
      description:
        "We verify that all user interactions, in-app purchases, and sensitive data are encrypted with robust, industry-standard protocols.",
      checks: ["Payment Safety", "Data Confidentiality", "Encrypted Transfers"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "User Identity Assurance",
      description:
        "We confirm that your app implements strong identity verification processes to keep bots and fake accounts out.",
      checks: ["KYC Validation", "Mobile OTP Verification", "Bot Detection"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Login Security",
      description:
        "We assess whether your authentication system uses multiple security layers to protect accounts from unauthorized access.",
      checks: [
        "Multi-Factor Authentication",
        "Device-Based Login Control",
        "Session Timeout Policies",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integrity & Storage",
      description:
        "We ensure that user records and platform data are stored securely with encryption and restricted access.",
      checks: ["Data Encryption", "Role-Based Access", "Regular Backups"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "User Privacy Controls",
      description:
        "We check that players have control over what personal information is shared or visible within the platform.",
      checks: [
        "Profile Visibility",
        "Leaderboard Privacy",
        "Custom Privacy Settings",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Cheat & Threat Detection",
      description:
        "We verify that the app has measures to detect and respond to suspicious activity, cheating, or fraudulent behavior.",
      checks: ["Anti-Cheat Measures", "Behavioral Monitoring", "Threat Alerts"],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
      className="text-center mb-16"
    >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars of{" "}
            <span className="text-brand-blue">Security Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t build your security — we certify it. Our role is to verify
            that your fantasy sports platform meets every pillar of trust and
            security before awarding certification.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityPillars.map((pillar, index) => (
            <div
      key={index}
      className={`${pillar.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
    >
              <div className={`${pillar.color} mb-4`}>{pillar.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2">
                {pillar.checks.map((check, checkIndex) => (
                  <div key={checkIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
      className="text-center mt-16"
    >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Certified?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              If your fantasy sports app meets all six pillars, we’ll proudly
              award you our official security certification. Let’s start your
              verification process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Begin Certification Review
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300 cursor-pointer">
                View Certification Criteria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FantasyAppSecurityFeatures;
