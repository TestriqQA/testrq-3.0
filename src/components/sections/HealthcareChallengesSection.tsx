// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaUserMd,
  FaDatabase,
  FaLock,
  FaClipboardCheck,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const HealthcareChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaShieldAlt,
      title: "HIPAA Compliance Violations",
      problem:
        "Healthcare data breaches cost an average of $10.93 million per incident",
      impact: "Legal penalties, reputation damage, and patient trust erosion",
      solution: (
        <>
          Comprehensive{" "}
          <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
            HIPAA compliance testing
          </Link>{" "}
          and security validation
        </>
      ),
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      action:
        "/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps",
    },
    {
      icon: FaDatabase,
      title: (
        <>
          <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">
            EHR
          </Link>{" "}
          Integration Failures
        </>
      ),
      problem: "70% of healthcare providers struggle with EHR interoperability",
      impact: "Fragmented patient care and inefficient clinical workflows",
      solution: "Rigorous HL7 FHIR and DICOM integration testing",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      action:
        "/performance-testing-for-healthcare-systems-ensuring-scalability-and-reliability-during-peak-traffic",
    },
    {
      icon: FaUserMd,
      title: (
        <>
          <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
            Medical Device Connectivity
          </Link>
        </>
      ),
      problem:
        "IoMT devices often fail to integrate seamlessly with hospital systems",
      impact: "Delayed diagnoses and compromised patient monitoring",
      solution: "End-to-end medical device testing and validation",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      action:
        "/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance",
    },
    {
      icon: FaClock,
      title: "System Downtime Risks",
      problem: "Healthcare IT downtime costs $8,000 per minute on average",
      impact:
        "Disrupted patient care and potential life-threatening situations",
      solution: (
        <>
          <Link href="/performance-testing-services">Performance testing</Link>{" "}
          and disaster recovery validation
        </>
      ),
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      action:
        "/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability",
    },
    {
      icon: FaLock,
      title: (
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Patient Data Security
          </Link>
        </>
      ),
      problem:
        "Healthcare sector faces 2x more cyberattacks than other industries",
      impact: "Compromised patient privacy and regulatory violations",
      solution: (
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Advanced security testing
          </Link>{" "}
          and{" "}
          <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
            penetration testing
          </Link>
        </>
      ),
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      action:
        "/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats",
    },
    {
      icon: FaClipboardCheck,
      title: "FDA Validation Requirements",
      problem:
        "Medical software requires extensive validation for FDA approval",
      impact: "Delayed product launches and increased development costs",
      solution: (
        <>
          <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
            FDA-compliant testing
          </Link>{" "}
          documentation and validation processes
        </>
      ),
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      action:
        "/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">
              Healthcare Challenges
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Critical Healthcare Software
            <span className="block text-brand-blue">Testing Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare software faces unique challenges that require specialized
            healthcare testing approaches.{" "}
            <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
              Patient safety
            </Link>
            ,{" "}
            <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
              HIPAA compliance
            </Link>
            , and healthcare{" "}
            <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
              data security
            </Link>{" "}
            are non-negotiable requirements for any medical application.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} ring-1 ring-${challenge.bgColor} hover:ring-3 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <challenge.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-700 mb-2">
                    Problem:
                  </h4>
                  <p className="text-gray-700 text-sm">{challenge.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-orange-700 mb-2">
                    Impact:
                  </h4>
                  <p className="text-gray-700 text-sm">{challenge.impact}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-800 mb-2">
                    Our Solution:
                  </h4>
                  <p className="text-gray-700 text-sm">{challenge.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href={`blog/post${challenge.action}`}
                  className="mt-6 flex items-center text-sky-700 font-semibold text-sm group-hover:text-blue-700 transition-colors"
                >
                  Learn More{" "}                  <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">
              Don&apos;t Let These Challenges Compromise Patient Care
            </h3>
            <p className="text-lg mb-8">
              Our specialized healthcare testing services address these critical
              challenges, ensuring your{" "}
              <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">
                medical software
              </Link>{" "}
              meets the highest standards of safety,{" "}
              <Link href="/security-testing">security</Link>, and{" "}
              <Link href="/blog/post/fda-validation-support-for-healthcare-software-ensuring-compliance-medical-software-approval">
                compliance
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Get Healthcare Testing Audit – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-brand-blue font-semibold text-lg rounded-2xl
             hover:shadow-xl hover:scale-98 hover:text-sky-700 transition-all duration-300"
              >
                Get Healthcare Testing Audit
              </Link>

              {/* <button className="bg-white text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-sky-700 hover:shadow-xl hover:scale-98 transition-all duration-300">
                Download Compliance Checklist
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareChallengesSection;
