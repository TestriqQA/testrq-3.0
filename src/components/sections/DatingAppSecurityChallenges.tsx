"use client";

import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

const DatingAppSecurityChallenges = () => {
  const securityThreats = [
    {
      threat: "Fake Profile Creation",
      impact: "95% of dating apps suffer from fake profiles",
      solution: "AI-powered identity verification",
    },
    {
      threat: "Catfishing & Romance Scams",
      impact: "$304M lost to romance scams in 2022",
      solution: "Real-time fraud detection systems",
    },
    {
      threat: "Data Breaches",
      impact: "Personal data of millions exposed",
      solution: "End-to-end encryption protocols",
    },
    {
      threat: "Harassment & Abuse",
      impact: "60% of women experience harassment",
      solution: "Advanced content moderation",
    },
  ];

  const specializedSecurityReasons = [
    "Personal data includes intimate photos and messages",
    "Location tracking creates physical safety risks",
    "Financial transactions for premium features",
    "Vulnerable user demographics targeted by scammers",
    "Reputation damage affects user acquisition",
    (<>App store <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">compliance</Link> requirements</>),
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dating App{" "}
            <span className="text-brand-blue">Security Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the unique <Link href="/security-testing">security</Link> risks and vulnerabilities in
            online dating platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Common Security Threats
            </h3>
            <div className="space-y-6">
              {securityThreats.map((item, index) => (
                <div
      key={index}
      className="bg-red-50 border border-red-200 p-6 rounded-xl"
    >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {item.threat}
                      </h4>
                      <p className="text-red-700 text-sm mb-2">{item.impact}</p>
                      <p className="text-green-700 text-sm font-medium">
                        ✓ {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-blue/10 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Dating Apps Need Specialized Security
            </h3>
            <div className="space-y-4">
              {specializedSecurityReasons.map((reason, index) => (
                <div
      key={index}
      className="flex items-center"
    >
                  <CheckCircle className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatingAppSecurityChallenges;
