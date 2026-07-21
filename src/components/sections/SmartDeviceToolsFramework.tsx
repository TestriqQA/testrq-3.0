// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import {
  FaMobile,
  FaWifi,
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaBatteryHalf,
  FaNetworkWired,
  FaBug,
  FaCloud,
} from "react-icons/fa";

import {
  SiAppium,
  SiAndroid,
  SiApachejmeter,
  SiGatling,
  SiBurpsuite,
} from "react-icons/si";

import { MdInsights } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const SmartDeviceToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "Network & Protocols",
      icon: <FaWifi className="w-6 h-6 text-blue-500" />,
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer and M2M validator",
          icon: <Image src="/Wireshark_Logo.png" alt="Wireshark Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "iperf3",
          description: "Network bandwidth and stability testing",
          icon: <Image src="/iperf3_Logo.png" alt="iperf3 Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "MQTT Spy / CoAP",
          description: "IoT messaging protocol profiling",
          icon: <FaWifi className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Zigbee Sniffers",
          description: "Low-power mesh network analysis",
          icon: <FaWifi className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      title: "Security & Hardening",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      tools: [
        {
          name: "OWASP ZAP",
          description: (
            <>
              <Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Application security</Link> vulnerability testing
            </>
          ),
          icon: <Image src="/Owasp_Zap_Logo.png" alt="OWASP ZAP Logo" width={20} height={20} className="object-contain" />,
        },
        {
          name: "Burp Suite",
          description: "Web and API penetration testing platform",
          icon: <SiBurpsuite aria-hidden className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Nmap / Metasploit",
          description: "Network discovery and exploit auditing",
          icon: <FaNetworkWired className="w-5 h-5 text-red-500" />,
        },
        {
          name: "Firmware Hardening",
          description: "Validation of low-level software security",
          icon: <FaShieldAlt className="w-5 h-5 text-red-500" />,
        },
      ],
    },
    {
      title: "Performance & Load",
      icon: <FaChartLine className="w-6 h-6 text-purple-500" />,
      tools: [
        {
          name: "Apache JMeter",
          description: (
            <>
              High-tier device <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">performance and load testing</Link>
            </>
          ),
          icon: <SiApachejmeter aria-hidden className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Gatling",
          description: "High-density connection and load framework",
          icon: <SiGatling aria-hidden className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "k6",
          description: "Modern load testing for edge systems",
          icon: <FaChartLine className="w-5 h-5 text-purple-500" />,
        },
        {
          name: "Edge Performance",
          description: "Data stability at maximum concurrent load",
          icon: <FaChartLine className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
    {
      title: "Power & Diagnostics",
      icon: <FaBatteryHalf className="w-6 h-6 text-orange-500" />,
      tools: [
        {
          name: "Battery Historian",
          description: "Deep-dive battery life optimization and profiling",
          icon: <FaBatteryHalf className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Xcode Instruments",
          description: "iOS performance and power usage telemetry",
          icon: <MdInsights className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Android Profiler",
          description: "Android system and power diagnostics",
          icon: <SiAndroid aria-hidden className="w-5 h-5 text-orange-500" />,
        },
        {
          name: "Sensors Audit",
          description: "Precision accuracy and calibration tracking",
          icon: <FaTools className="w-5 h-5 text-orange-500" />,
        },
      ],
    },
    {
      title: "Automation & CI/CD",
      icon: <FaMobile className="w-6 h-6 text-green-500" />,
      tools: [
        {
          name: "Appium",
          description: (
            <>
              <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Automated testing</Link> for smart home ecosystems
            </>
          ),
          icon: <SiAppium aria-hidden className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Jenkins / GitLab",
          description: "Automated pipeline for device verification",
          icon: <FaBug className="w-5 h-5 text-green-500" />,
        },
        {
          name: "Appium Server",
          description: "Cross-platform device orchestration",
          icon: <FaBug className="w-5 h-5 text-green-500" />,
        },
        {
          name: "CI/CD Integration",
          description: "Faster builds and regression cycles",
          icon: <FaBug className="w-5 h-5 text-green-500" />,
        },
      ],
    },
    {
      title: "Emerging Tech",
      icon: <FaCloud className="w-6 h-6 text-indigo-500" />,
      tools: [
        {
          name: "Digital Twin",
          description: "Simulating massive IoT fleets virtually",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "Fleet Simulation",
          description: "One million concurrent device modeling",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "Cloud Backend QA",
          description: "High-density deployment stress tests",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
        {
          name: "5G Edge Simulation",
          description: "Validation before physical deployment",
          icon: <FaCloud className="w-5 h-5 text-indigo-500" />,
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-brand-blue">Tech Stack</span> (2026 Trends)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We utilize the most advanced <Link href='/technology-stack' className="text-brand-blue underline">app testing tools</Link> and diagnostic platforms to provide exhaustive <span className="text-brand-blue font-semibold">smart device validation</span>, ensuring performance and security at every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tool.icon && <span>{tool.icon}</span>}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tool Integration */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Custom Tool Integration
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We can integrate with your existing smart device tools and
              frameworks, or recommend the best combination for your specific
              smart device testing requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDeviceToolsFramework;
