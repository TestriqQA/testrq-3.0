"use client";

import React from "react";
import { Target, Eye, AlertTriangle, Zap, Award } from "lucide-react";
import Link from "next/link";

const DatingAppCertificationProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your app architecture, user flow, and current security measures",
      duration: "1-2 days",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      step: "02",
      title: "Comprehensive Audit",
      description:
        (<>Deep dive <Link href="/security-testing">security testing</Link> across all parameters including <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link></>),
      duration: "1-2 weeks",
      icon: <Eye className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      step: "03",
      title: (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">Vulnerability</Link> Assessment</>),
      description:
        "Detailed analysis with prioritized recommendations and remediation roadmap",
      duration: "2-3 days",
      icon: <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      step: "04",
      title: "Implementation Support",
      description:
        (<>Guided implementation of security improvements and <Link href="/blog/post/rest-api-testing-guide-endpoints-methods-best-practices">best practices</Link></>),
      duration: "1 week",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      step: "05",
      title: "Certification & Badge",
      description:
        "Final verification and issuance of trust certification badge",
      duration: "1-2 days",
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
            Our <span className="text-brand-blue">Certification Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A transparent, step-by-step journey to earning your trust
            certification
          </p>
        </div>

        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical line - Desktop only */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#25A8E0] to-[#1e90d4] transform -translate-x-1/2 z-0 hidden md:block"></div>

          {/* Mobile vertical line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[#25A8E0] to-[#1e90d4] z-0 md:hidden"></div>

          {processSteps.map((step, index) => (
            <div
      key={index}
      className="relative z-10"
    >
              {/* Mobile Layout */}
              <div className="flex items-start gap-4 md:hidden">
                {/* Step number circle */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-brand-blue text-white p-2 rounded-lg mr-3 flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex md:items-center md:gap-8 md:w-full">
                {/* Left side content for even indices, empty spacer for odd */}
                <div className="flex-1">
                  {index % 2 === 0 && (
                    <div className="bg-white p-6 xl:p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-blue text-white p-3 rounded-xl mr-4 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {step.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Step number circle */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                    {step.step}
                  </div>
                </div>

                {/* Right side content for odd indices, empty spacer for even */}
                <div className="flex-1">
                  {index % 2 === 1 && (
                    <div className="bg-white p-6 xl:p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-brand-blue text-white p-3 rounded-xl mr-4 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {step.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppCertificationProcess;
