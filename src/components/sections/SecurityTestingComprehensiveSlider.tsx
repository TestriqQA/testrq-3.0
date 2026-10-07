"use client";

// SEO handoff (Sept 2026) — PART C "SERVICES SECTION".
//   - H2 renamed "Security Testing Expertise" -> "Our Penetration Testing Services".
//   - Five existing service headings renamed to the "<surface> Penetration
//     Testing" pattern; descriptions replaced with the handoff's final copy.
//   - "Network Penetration Testing" added as a sixth service, after Mobile.
//
// RENDERING CHANGE (approved with the handoff): every tab panel is now rendered
// into the DOM and hidden with the `hidden` attribute instead of being
// conditionally mounted. Previously only the active panel existed in the HTML,
// so five of the six service headings and all their body copy were invisible to
// crawlers — which would have made the renames above worthless. Visual and
// interactive behaviour is unchanged.
//
// `label` is the short string shown on the tab button; `title` is the full
// service name and is what renders as the panel's <h3>. They differ only so the
// six buttons stay legible in the nav grid.

import Link from "next/link";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaCode,
  FaFlask,
  FaMobileAlt,
  FaCloud,
  FaNetworkWired,
} from "react-icons/fa";

const SecurityTestingComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("vapt-services");

  const securityTabs = [
    {
      id: "vapt-services",
      label: "VAPT",
      title: "VAPT: Vulnerability Assessment and Penetration Testing",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "red",
      description:
        "Our core engagement. We combine a full vulnerability assessment with active exploitation, so you receive both breadth of coverage and depth of proof. Findings are ranked by CVSS v3.1 score and by business impact, and every automated result is manually verified before it appears in your report.",
      features: [
        {
          title: "Infrastructure Penetration Testing",
          description: "Simulating real-world attacks to identify and exploit vulnerabilities across your network and servers.",
          metrics: "CEH & OSCP Certified",
        },
        {
          title: "System Weakness Scanning",
          description: "Automated and manual assessments to find known vulnerabilities, including open-source flaws.",
          metrics: "99.8% Threat Detection",
        },
        {
          title: "Risk-Based Prioritization",
          description: "Ranking security gaps based on CVSS scores and business impact for prioritized remediation.",
          metrics: "Actionable Insights",
        },
        {
          title: "Re-testing & Verification",
          description: "Verifying that all high-risk gaps are closed after security repairs are implemented.",
          metrics: "Certified Closure",
        },
      ],
    },
    {
      id: "application-security",
      label: "Web Application",
      title: "Web Application Penetration Testing",
      icon: <FaCode className="text-2xl" />,
      color: "blue",
      description:
        "Manual testing against the OWASP Top 10 and beyond, covering authentication bypass, broken access control, injection flaws, and the business logic failures that scanners cannot model. We test as an authenticated user across every role in your application, not only from the outside.",
      features: [
        {
          title: "SAST & Source Code Review",
          description: "Analyzing source code to find SQL Injection (SQLi) and XSS vulnerabilities before deployment.",
          metrics: "Code-level Security",
        },
        {
          title: "DAST & Dynamic Testing",
          description: "Simulating attacks on running applications to identify security gaps in a live environment.",
          metrics: "Real-world Simulation",
        },
        {
          title: "SCA & Dependency Check",
          description: "Evaluating open-source libraries and third-party components for known vulnerabilities.",
          metrics: "Supply Chain Security",
        },
        {
          title: "Business Logic Analysis",
          description: "Identifying flaws in functional workflows that could be exploited for unauthorized access.",
          metrics: "Logic Gap Neutralization",
        },
      ],
    },
    {
      id: "api-security",
      label: "API",
      title: "API Penetration Testing",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "green",
      // Internal link preserved from the previous copy. The old href was
      // "/api-testing-services", which is neither a route nor a redirect source
      // — it 404'd. Repointed to the real /api-testing page.
      description: (
        <>
          <Link href="/api-testing" className="text-brand-blue hover:underline decoration-brand-blue">REST, GraphQL and SOAP endpoints</Link> tested for broken object-level authorisation, rate-limiting gaps, mass assignment and token handling flaws. APIs now carry a large share of application risk precisely because they are tested less thoroughly than the interfaces in front of them.
        </>
      ),
      features: [
        {
          title: "OWASP API Top 10",
          description: "Targeting the specific vulnerabilities that affect REST, SOAP, and GraphQL APIs.",
          metrics: "99% Incident Defense",
        },
        {
          title: "Broken Object Level Auth",
          description: "Ensuring users can only access their own data through API endpoints.",
          metrics: "Auth & AuthZ Validation",
        },
        {
          title: "Rate-limiting Thresholds",
          description: "Testing API resilience against automated social engineering and exploitation.",
          metrics: "AI-Driven Attack Defense",
        },
        {
          title: "Sensitive Data Filtering",
          description: "Verifying that APIs do not expose excessive data in their responses.",
          metrics: "PII Masking",
        },
      ],
    },
    {
      id: "mobile-security",
      label: "Mobile App",
      title: "Mobile App Penetration Testing",
      icon: <FaMobileAlt className="text-2xl" />,
      color: "purple",
      // Internal link to /mobile-application-testing preserved from the
      // previous copy so the section keeps its outbound link equity.
      description: (
        <>
          <Link href="/mobile-application-testing" className="text-brand-blue hover:underline decoration-brand-blue">iOS and Android testing</Link> covering insecure local storage, certificate pinning, runtime manipulation and the backend APIs your app depends on.
        </>
      ),
      features: [
        {
          title: "iOS Security Testing",
          description: "Specialized reviews for Apple platforms, including manual ethical hacking depth.",
          metrics: "Beyond Auto-scans",
        },
        {
          title: "Android Vulnerability Audit",
          description: "Comprehensive analysis of Android app security, including intent and permission reviews.",
          metrics: "Device-specific Experts",
        },
        {
          title: "Local Data Exposure review",
          description: "Ensuring PII and sensitive data are not leaked through local storage or logs.",
          metrics: "GDPR Compliant",
        },
        {
          title: "Reverse Engineering Defense",
          description: "Evaluating how your application stands up against automated exploitation and side-loading.",
          metrics: "Hardened Reliability",
        },
      ],
    },
    {
      // New service block added by the Sept 2026 handoff. The four features are
      // a breakdown of the handoff's own description — no metrics or figures
      // have been invented for them.
      id: "network-security",
      label: "Network",
      title: "Network Penetration Testing",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "indigo",
      description:
        "External and internal network testing. We map your exposed surface, test segmentation, attempt lateral movement, and establish whether an attacker who compromises one host can reach the rest of your estate.",
      features: [
        {
          title: "External Network Testing",
          description: "Mapping your internet-facing surface and testing every exposed service an attacker can reach without credentials.",
          metrics: "Exposed Surface Mapping",
        },
        {
          title: "Internal Network Testing",
          description: "Testing from inside the perimeter to establish what is reachable once an attacker has an initial foothold.",
          metrics: "Post-Foothold Reach",
        },
        {
          title: "Segmentation Testing",
          description: "Verifying that network segmentation holds in practice and that isolated zones stay isolated.",
          metrics: "Zone Isolation Proof",
        },
        {
          title: "Lateral Movement",
          description: "Attempting to move from one compromised host across the rest of your estate to establish the blast radius.",
          metrics: "Blast-Radius Analysis",
        },
      ],
    },
    {
      id: "cloud-security",
      label: "Cloud",
      title: "Cloud Penetration Testing",
      icon: <FaCloud className="text-2xl" />,
      color: "teal",
      description:
        "AWS, Azure and GCP configuration review combined with active testing of IAM boundaries, storage exposure and container escape paths, carried out within your cloud provider's published testing policy.",
      features: [
        {
          title: "Container & Kubernetes Audit",
          description: "Securing the orchestration layer to prevent lateral movement after an initial breach.",
          metrics: "Modern Stack Security",
        },
        {
          title: "Cloud Mis-configuration Check",
          description: "Identifying open S3 buckets, insecure IAM roles, and VPC configuration flaws.",
          metrics: "Infrastructure Hardening",
        },
        {
          title: "Multi-tenancy Stability",
          description: "Ensuring data isolation between customers in complex SaaS environments.",
          metrics: "SaaS Resilience",
        },
        {
          title: "Shift-Left Security",
          description: "Integrating automated security testing into Jenkins, GitLab, or GitHub workflows.",
          metrics: "CI/CD Ready",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        bg: string;
        text: string;
        border: string;
        accent: string;
      };
    } = {
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        accent: "bg-red-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-600",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        accent: "bg-indigo-600",
      },
      // `teal` was referenced by the Cloud tab but never defined here, so that
      // tab silently fell back to the `red` palette and rendered identically to
      // VAPT. Defining it restores the intended colour — visible now that all
      // six tabs sit in one row.
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        accent: "bg-teal-600",
      },
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">Comprehensive Testing Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-blue">Penetration Testing</span>{" "}
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive security testing services designed to
            protect your applications from{" "}
            <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
              cyber threats
            </Link>
            , ensure compliance with security standards like GDPR,{" "}
            <Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">
              HIPAA
            </Link>
            , and PCI DSS, and maintain the highest levels of{" "}
            <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
              data protection
            </Link>{" "}
            and user trust.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {securityTabs.map((tab) => {
            const colors = getColorClasses(tab.color);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${activeTab === tab.id
                  ? `${colors.bg} ${colors.text} ${colors.border} border-2 shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={
                      activeTab === tab.id ? colors.text : "text-gray-400"
                    }
                  >
                    {tab.icon}
                  </span>
                  <span className="text-sm font-medium">{tab.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Panels — all rendered, inactive ones hidden. Keeping every panel
            in the DOM is what makes the six service headings crawlable. */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {securityTabs.map((tab) => {
            const colors = getColorClasses(tab.color);
            return (
              <div
                key={tab.id}
                hidden={tab.id !== activeTab}
                className="p-8 md:p-12"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`${colors.accent} w-16 h-16 px-2 rounded-full md:rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white">{tab.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tab.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{tab.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {tab.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className={`${colors.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${colors.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          <div className={`${colors.text} font-bold text-sm`}>
                            {feature.metrics}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Rate Display */}
                <div className={`${colors.bg} rounded-xl p-6 mt-8`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Success Rate
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Proven track record in {tab.label} engagements
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`${colors.text} text-3xl font-bold`}>
                        98%
                      </div>
                      <div className="text-gray-600 text-sm">
                        Security Issues Identified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Applications?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive security testing services ensure your
              applications are protected against the latest cyber threats and
              comply with industry{" "}
              <Link href="/security-testing">security</Link> standards.
            </p>
            <Link href="/contact-us">
              <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Start Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingComprehensiveSlider;
