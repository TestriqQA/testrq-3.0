// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaCog,
  FaNetworkWired,
  FaBatteryHalf,
  FaCloud,
  FaChartLine,
  FaExclamationTriangle,
  FaArrowRight,
  FaSync,
} from "react-icons/fa";

const IoTChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaNetworkWired,
      title: (<><Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">Device Connectivity Issues</Link></>),
      problem:
        "IoT devices failing to maintain stable connections across different network conditions and protocols",
      impact: "Device unreliability and poor user experience",
      stats: "68% of IoT deployments face connectivity challenges",
      solution:
        "Comprehensive network testing across protocols, edge cases, and real-world conditions",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      action:
        "/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks",
    },
    {
      icon: FaShieldAlt,
      title: (<><Link href="/blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities">Security Vulnerabilities</Link></>),
      problem:
        "IoT devices often lack proper security measures, creating entry points for cyberattacks",
      impact: (<><Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Data breaches</Link>, privacy violations, and network compromises</>),
      stats: "IoT attacks increased by 300% in the last year",
      solution:
        (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Advanced security testing</Link> including <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link> and vulnerability assessments</>),
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      action: "/iot-security-validation-protecting-devices-from-cyber-threats",
    },
    {
      icon: FaSync,
      title: (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Data Synchronization Problems</Link></>),
      problem:
        "Inconsistent data flow between IoT devices, edge systems, and cloud platforms",
      impact: "Inaccurate analytics and unreliable automation",
      stats: (<>45% of IoT projects fail due to <Link href="/blog/post/ehr-emr-system-testing-and-integration-ensuring-data-integrity-and-interoperability">data integration issues</Link></>),
      solution: "End-to-end data flow testing and synchronization validation",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      action:
        "/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems",
    },
    {
      icon: FaBatteryHalf,
      title: "Power Management Issues",
      problem:
        "IoT devices draining batteries faster than expected or failing power optimization",
      impact: "Frequent maintenance and reduced device lifespan",
      stats: "Battery life issues affect 52% of IoT devices",
      solution:
        (<>Power <Link href="/blog/post/final-reporting-in-desktop-app-testing-qa-metrics-benchmarks-continuous-improvement">consumption testing</Link> and optimization across usage scenarios</>),
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      action:
        "/power-management-testing-optimizing-battery-life-for-iot-devices",
    },
    {
      icon: FaCloud,
      title: "Scalability Limitations",
      problem:
        "IoT systems failing to handle increasing device counts and data volumes",
      impact: "System crashes and performance degradation",
      stats: "73% of IoT systems struggle with scale beyond 10K devices",
      solution:
        (<><Link href="/blog/post/load-testing-in-performance-testing-complete-guide">Load testing</Link> and <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">scalability</Link> validation for massive IoT deployments</>),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      action:
        "/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently",
    },
    {
      icon: FaCog,
      title: (<><Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">Interoperability Failures</Link></>),
      problem:
        "Different IoT devices and platforms failing to work together seamlessly",
      impact: "Fragmented ecosystems and limited functionality",
      stats: "60% of IoT projects face interoperability challenges",
      solution: (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-platform compatibility</Link> testing and protocol validation</>),
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      action:
        "/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices",
    },
  ];

  const challengeStats = [
    {
      icon: FaExclamationTriangle,
      value: "68%",
      label: "Connectivity Issues",
      description: "IoT deployments facing network challenges",
    },
    {
      icon: FaShieldAlt,
      value: "300%",
      label: "Security Attack Increase",
      description: "Growth in IoT-targeted cyberattacks",
    },
    {
      icon: FaChartLine,
      value: "45%",
      label: "Project Failure Rate",
      description: "Due to data integration problems",
    },
    {
      icon: FaBatteryHalf,
      value: "52%",
      label: "Power Issues",
      description: "Devices with battery optimization problems",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm">IoT Challenges</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Critical IoT Testing
            <span className="block text-brand-blue">
              Challenges & Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IoT applications face unique challenges that can compromise{" "}
            <Link href="/blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa">functionality</Link>, <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">IoT security</Link>, and user trust. Our specialized IoT
            testing services proactively address these critical issues-such as{" "}
            <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">interoperability</Link>, real-time performance, and{" "}<Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">{" "}data privacy</Link>
            {" "}risks-before they impact your IoT ecosystem..
          </p>
        </div>

        {/* Challenge Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {challengeStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              {/* Header */}
              <div className={`${challenge.bgColor} p-6 pb-4`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <challenge.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {challenge.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    PROBLEM
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-orange-700 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    IMPACT
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.impact}
                  </p>
                </div>

                {/* Stats */}
                <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                  <div className="text-sm font-bold text-gray-900 mb-1">
                    Industry Statistic
                  </div>
                  <div className="text-sm text-gray-600">{challenge.stats}</div>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    OUR SOLUTION
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={`blog/post${challenge.action}`}
                  className={`w-full bg-gradient-to-r ${challenge.color} text-white py-3 px-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group `  } aria-label={`Learn more about ${challenge.title}`}
                >
                  Learn More                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Overview */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaWifi className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t Let These Challenges Compromise Your IoT Success
            </h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Our comprehensive <Link href="/blog/post/beginners-guide-to-iot-testing-types-tools-protocol-ecosystem">IoT testing</Link> methodology addresses all these
              critical challenges before they impact your devices, users, and
              business operations. From edge-to-cloud validation to security
              hardening, we ensure your IoT ecosystem performs flawlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 text-brand-blue gap-6 mb-8">
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">30+</div>
                <div className=" text-sm">IoT Devices Tested</div>
              </div>
              <div className="text-center p-4 bg-white text-brand-blue bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">99.8%</div>
                <div className="text-sm">Uptime Achievement</div>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">90%</div>
                <div className="text-sm">Security Issue Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTChallengesSection;
