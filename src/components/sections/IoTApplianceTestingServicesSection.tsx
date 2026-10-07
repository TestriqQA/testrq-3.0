// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaWifi,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaNetworkWired,
  FaBatteryHalf,
  FaMobile,
  FaDesktop,
  FaChartLine,
  FaSync,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

const IoTTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaNetworkWired,
      title: (
        <>
          <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
            Device Connectivity Testing
          </Link>
        </>
      ),
      description:
        "Comprehensive testing of IoT device connectivity across protocols, networks, and edge conditions.",
      features: [
        "Protocol Validation",
        "Network Resilience",
        "Edge Case Testing",
        "Connection Recovery",
      ],
    },
    {
      icon: FaShieldAlt,
      title: (
        <>
          <Link href="/blog/post/why-is-iot-security-testing-important">
            IoT Security Testing
          </Link>
        </>
      ),
      description:
        "Advanced security testing to protect IoT devices from cyber threats and ensure data privacy.",
      features: [
        <>
          <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">
            Penetration Testing
          </Link>
        </>,
        "Vulnerability Assessment",
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Data Encryption
          </Link>
        </>,
        "Access Control",
      ],
    },
    {
      icon: FaCloud,
      title: (
        <>
          <Link href="/blog/post/cloud-integration-testing-for-smart-devices-api-sync-validation">
            Cloud Integration Testing
          </Link>
        </>
      ),
      description:
        "End-to-end testing of IoT device integration with cloud platforms and services.",
      features: [
        <>
          <Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">
            API Integration
          </Link>
        </>,
        "Data Pipeline Testing",
        <>
          <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
            Cloud Scalability
          </Link>
        </>,
        "Service Reliability",
      ],
    },
    {
      icon: FaSync,
      title: (
        <>
          <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">
            Data Synchronization Testing
          </Link>
        </>
      ),
      description:
        "Validation of data flow and synchronization between devices, edge systems, and cloud platforms.",
      features: [
        <>
          <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">
            Real-time Sync
          </Link>
        </>,
        <>
          <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">
            Data Integrity
          </Link>
        </>,
        "Conflict Resolution",
        "Offline Capabilities",
      ],
    },
    {
      icon: FaBatteryHalf,
      title: "Power Management Testing",
      description:
        "Optimization and testing of power consumption for battery-powered IoT devices.",
      features: [
        "Battery Life Testing",
        "Power Optimization",
        "Sleep Mode Validation",
        "Energy Profiling",
      ],
    },
    {
      icon: FaCog,
      title: (
        <>
          <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">
            Device Interoperability Testing
          </Link>
        </>
      ),
      description:
        "Testing compatibility and communication between different IoT devices and platforms.",
      features: [
        <>
          <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
            Cross-Platform Testing
          </Link>
        </>,
        "Protocol Compatibility",
        <>
          <Link href="/blog/post/discovery-analysis-in-mobile-app-testing-defining-qa-scope-user-journeys">
            Device Discovery
          </Link>
        </>,
        "Communication Validation",
      ],
    },
    {
      icon: FaMobile,
      title: (
        <>
          <Link href="/blog/post/how-environment-setup-shapes-reliable-web-application-testing">
            Mobile App Integration Testing
          </Link>
        </>
      ),
      description:
        "Testing IoT device control and monitoring through mobile applications.",
      features: [
        "App-Device Communication",
        "Real-time Updates",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      icon: FaChartLine,
      title: (
        <>
          <Link href="/performance-testing-services">
            Performance & Scalability Testing
          </Link>
        </>
      ),
      description:
        "Load testing and performance validation for IoT systems at scale.",
      features: [
        <>
          <Link href="/blog/post/load-testing-in-performance-testing-complete-guide">
            Load Testing
          </Link>
        </>,
        <>
          <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">
            Stress Testing
          </Link>
        </>,
        "Scalability Validation",
        "Performance Monitoring",
      ],
    },
    {
      icon: FaDesktop,
      title: "Edge Computing Testing",
      description:
        "Testing IoT applications that process data at the edge for reduced latency.",
      features: [
        "Edge Processing",
        "Latency Testing",
        "Local Decision Making",
        "Edge-Cloud Sync",
      ],
    },
    {
      icon: FaLock,
      title: "Firmware Testing",
      description:
        "Comprehensive testing of IoT device firmware including updates and rollbacks.",
      features: [
        "Firmware Validation",
        "OTA Updates",
        "Rollback Testing",
        "Version Management",
      ],
    },
    {
      icon: FaWifi,
      title: "Network Protocol Testing",
      description:
        "Testing various IoT communication protocols and network configurations.",
      features: [
        "WiFi, Bluetooth, Zigbee",
        "LoRaWAN, NB-IoT",
        "Protocol Switching",
        "Network Optimization",
      ],
    },
    {
      icon: FaCheckCircle,
      title: (
        <>
          <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">
            Compliance & Standards Testing
          </Link>
        </>
      ),
      description:
        "Ensuring IoT devices meet industry standards and regulatory requirements.",
      features: [
        "FCC Compliance",
        "CE Marking",
        "Industry Standards",
        "Regional Regulations",
      ],
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm">IoT Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive IoT
            <span className="block text-brand-blue">Testing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Specialized testing services designed for IoT applications, ensuring
            <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
              reliable connectivity
            </Link>
            , <Link href="/blog/post/ai-security-testing">robust security</Link>
            , and{" "}
            <Link href="/blog/post/system-integration-testing-for-robotic-systems-ensuring-seamless-operation">
              seamless integration
            </Link>
            across your entire IoT ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* IoT Ecosystem Coverage */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete IoT Ecosystem Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test your IoT solutions across the entire ecosystem-from edge
              devices to{" "}
              <Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">
                cloud platforms
              </Link>
              -ensuring seamless integration,
              <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                cross-device compatibility
              </Link>
              , and{" "}
              <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
                optimized IoT performance
              </Link>{" "}
              through our end-to-end IoT testing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCog className="w-8 h-8 text-white" />
              </div>
              {/* F-37: was h4 — list-item label inside the h3 "Complete IoT
                  Ecosystem Coverage" section. Demoted to styled <p> so the outline
                  stays strictly h2 → h3 across all sibling sections. */}
              <p className="text-xl font-bold text-gray-900 mb-2">
                Edge Devices
              </p>
              <p className="text-gray-600 text-sm">
                Sensors, actuators, smart devices, and embedded systems
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaNetworkWired className="w-8 h-8 text-white" />
              </div>
              {/* F-37: was h4 — list-item label inside the h3 "Complete IoT
                  Ecosystem Coverage" section. Demoted to styled <p> so the outline
                  stays strictly h2 → h3 across all sibling sections. */}
              <p className="text-xl font-bold text-gray-900 mb-2">
                Connectivity
              </p>
              <p className="text-gray-600 text-sm">
                WiFi, Bluetooth, Zigbee, LoRaWAN, cellular networks
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-8 h-8 text-white" />
              </div>
              {/* F-37: was h4 — list-item label inside the h3 "Complete IoT
                  Ecosystem Coverage" section. Demoted to styled <p> so the outline
                  stays strictly h2 → h3 across all sibling sections. */}
              <p className="text-xl font-bold text-gray-900 mb-2">
                Edge Computing
              </p>
              <p className="text-gray-600 text-sm">
                Local processing, real-time analytics, edge gateways
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCloud className="w-8 h-8 text-white" />
              </div>
              {/* F-37: was h4 — list-item label inside the h3 "Complete IoT
                  Ecosystem Coverage" section. Demoted to styled <p> so the outline
                  stays strictly h2 → h3 across all sibling sections. */}
              <p className="text-xl font-bold text-gray-900 mb-2">
                <Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">
                  Cloud Platforms
                </Link>
              </p>
              <p className="text-gray-600 text-sm">
                AWS IoT, Azure IoT, Google Cloud IoT, custom platforms
              </p>
            </div>
          </div>
        </div>

        {/* IoT Testing Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">IoT Industry Expertise</h3>
            <div className="space-y-12">
              <div className="flex items-start gap-3">
                <FaShieldAlt className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  {/* F-37: was h4 — list-item label inside the h3 "IoT Industry
                      Expertise" section. Demoted to styled <p> for strict h2 → h3 outline. */}
                  <p className="font-semibold text-xl mb-1">
                    Security-First Approach
                  </p>
                  <p className="text-blue-100 text-lg">
                    Comprehensive{" "}
                    <Link href="/security-testing">security testing</Link> to
                    protect against
                    <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">
                      IoT-specific threats
                    </Link>{" "}
                    and vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaChartLine className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  {/* F-37: was h4 — list-item label inside the h3 "IoT Industry
                      Expertise" section. Demoted to styled <p> for strict h2 → h3 outline. */}
                  <p className="font-semibold text-xl mb-1">
                    Scalability Experts
                  </p>
                  <p className="text-blue-100 text-lg">
                    Testing IoT systems that scale from hundreds to millions of
                    connected devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaSync className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  {/* F-37: was h4 — list-item label inside the h3 "IoT Industry
                      Expertise" section. Demoted to styled <p> for strict h2 → h3 outline. */}
                  <p className="font-semibold text-xl mb-1">
                    Real-World Testing
                  </p>
                  <p className="text-blue-100 text-lg">
                    Testing in actual deployment conditions with real network
                    constraints and environmental factors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              IoT Testing Metrics
            </h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  99.8%
                </div>
                <div className="text-sm text-gray-600">
                  Device uptime achieved
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  30+
                </div>
                <div className="text-sm text-gray-600">IoT devices tested</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-2xl">
                <div className="text-3xl font-bold text-cyan-600 mb-1">90%</div>
                <div className="text-sm text-gray-600">
                  Security issue reduction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Secure Your IoT Ecosystem?
            </h3>
            <p className="mb-8 text-lg">
              Our IoT testing experts are ready to help you build reliable,
              secure, and{" "}
              <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">
                scalable IoT solutions
              </Link>{" "}
              that perform flawlessly in real-world conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
              <Link
                href="/contact-us"
                title="Get IoT Testing Quote – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px] 
             bg-white text-black rounded-2xl font-semibold text-lg 
             hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all"
              >
                Get IoT Testing Quote
              </Link>

              <Link href={BOOKING_URL} target={ "_blank" }>
                <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  Schedule IoT Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTTestingServicesSection;
