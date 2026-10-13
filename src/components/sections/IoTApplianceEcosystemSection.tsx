// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaWifi,
  FaCloud,
  FaMobileAlt,
  FaServer,
  FaMicrochip,
  FaNetworkWired,
  FaCogs,
  FaShieldAlt,
  FaLightbulb,
  FaHome,
  FaIndustry,
  FaCar,
  FaHeartbeat,
} from "react-icons/fa";

const IoTEcosystemSection: React.FC = () => {
  const ecosystemComponents = [
    {
      icon: FaMicrochip,
      title: "IoT Devices & Sensors",
      description:
        "The physical layer of the IoT, including smart sensors, actuators, and embedded systems that collect and transmit data.",
      examples: [
        "Smart Home Devices",
        "Wearables",
        "Industrial Sensors",
        "Connected Vehicles",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaNetworkWired,
      title: (<><Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more">Connectivity & Gateways</Link></>),
      description:
        "The communication layer that enables devices to connect to the internet and other systems, often via IoT gateways.",
      examples: [
        "Wi-Fi, Bluetooth, Zigbee",
        "LoRaWAN, NB-IoT, 5G",
        "Edge Gateways",
        "MQTT, CoAP Protocols",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaServer,
      title: "Edge Computing",
      description:
        "Processing and analyzing data closer to the source of data generation, reducing latency and bandwidth usage.",
      examples: [
        "Local Data Processing",
        "Real-time Analytics",
        "Edge AI/ML",
        "Fog Computing",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaCloud,
      title: (<><Link href="/blog/post/cloud-integration-testing-for-iot-aws-iot-azure-iot-google-iot-core">Cloud Platforms & Analytics</Link></>),
      description:
        "Centralized platforms for data storage, processing, advanced analytics, and application hosting.",
      examples: [
        "AWS IoT, Azure IoT, Google Cloud IoT",
        "Data Lakes & Warehouses",
        (<><Link href="/blog/post/ai-model-accuracy-testing-step-by-step-guide">AI/ML Services</Link></>),
        "Dashboarding & Visualization",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FaMobileAlt,
      title: "User Applications & Interfaces",
      description:
        "Mobile apps, web dashboards, and other interfaces that allow users to interact with and control IoT devices.",
      examples: [
        "Smart Home Apps",
        "Industrial Control Panels",
        "Predictive Maintenance Dashboards",
        "Consumer IoT Apps",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: FaShieldAlt,
      title: (<><Link href="/blog/post/ai-security-testing">Security & Privacy</Link></>),
      description:
        "Critical measures and protocols implemented across all layers to protect data, devices, and user privacy.",
      examples: [
        "Device Authentication",
        "Data Encryption",
        "Access Control",
        "Threat Detection & Response",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  const industryApplications = [
    {
      icon: FaHome,
      title: "Smart Homes",
      description:
        "Automated lighting, climate control, security systems, and connected appliances.",
    },
    {
      icon: FaIndustry,
      title: "Industrial IoT (IIoT)",
      description:
        "Predictive maintenance, asset tracking, quality control, and operational efficiency.",
    },
    {
      icon: FaCar,
      title: "Connected Vehicles",
      description:
        "Telematics, infotainment, autonomous driving, and fleet management.",
    },
    {
      icon: FaHeartbeat,
      title: "Healthcare IoT",
      description:
        "Remote patient monitoring, smart hospitals, and wearable health trackers.",
    },
    {
      icon: FaLightbulb,
      title: "Smart Cities",
      description:
        "Intelligent traffic management, smart streetlights, waste management, and public safety.",
    },
    {
      icon: FaCogs,
      title: "Retail & Logistics",
      description:
        "Inventory management, supply chain optimization, smart shelving, and customer analytics.",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaWifi className="w-4 h-4" />
            <span className="text-sm">IoT Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Navigating the Complex
            <span className="block text-brand-blue">IoT Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Understanding the intricate layers of IoT architecture is crucial
            for successful deployment. We provide <Link href="/blog/post/test-execution-comprehensive-testing-implementation">comprehensive IoT testing</Link>{" "}
            services across every component of your IoT <Link href="/blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction">ecosystem</Link>-from edge
            devices and <Link href="/blog/post/functional-testing-for-robotic-systems-precision-sensors-control">sensors</Link> to gateways, protocols, and cloud platforms.
          </p>
        </div>

        {/* Ecosystem Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ecosystemComponents.map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <component.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {component.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {component.description}
              </p>

              <div className="space-y-2">
                {component.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                    <span className="text-sm text-gray-700">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End-to-End Testing Visual */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Testing Covers the Entire IoT Journey
            </h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              From the smallest sensor to the largest <Link href="/blog/post/strategies-for-implementing-test-driven-infrastructure">cloud infrastructure</Link>, we
              ensure every component of your IoT solution is rigorously tested
              for <Link href="/blog/post/functional-testing-for-robotics-movement-sensors-and-control-logic">functionality</Link>, <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">security</Link>, <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">performance</Link>, and <Link href="/blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices">interoperability</Link>.
            </p>
            <div className="relative flex items-center justify-center py-8">
              <FaMicrochip className="w-16 h-16 text-white opacity-70 absolute left-0 top-1/2 -translate-y-1/2" />
              <FaNetworkWired className="w-16 h-16 text-white opacity-70 absolute left-1/4 top-1/2 -translate-y-1/2" />
              <FaServer className="w-16 h-16 text-white opacity-70 absolute left-1/2 top-1/2 -translate-y-1/2" />
              <FaCloud className="w-16 h-16 text-white opacity-70 absolute right-1/4 top-1/2 -translate-y-1/2" />
              <FaMobileAlt className="w-16 h-16 text-white opacity-70 absolute right-0 top-1/2 -translate-y-1/2" />
              <div className="absolute w-full h-1 bg-white bg-opacity-30 rounded-full"></div>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Devices &#8594; Connectivity &#8594; Edge &#8594; Cloud &#8594;
              Applications
            </p>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT Applications Across Industries
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our IoT testing expertise spans diverse industries, ensuring your
              connected IoT solutions meet the unique demands, compliance
              standards, and <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance">regulatory requirements</Link> of your target market-from
              healthcare IoT and industrial IoT to smart home and automotive
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((app, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl ring-1 ring-brand-blue hover:ring-2 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {app.title}
                </h4>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Build a Resilient IoT Ecosystem
            </h3>
            <p className="mb-8 text-lg">
              Partner with us to ensure your IoT devices, platforms, and
              applications are robust, secure, and perform flawlessly in any
              environment.
            </p>
            <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 hover:text-sky-700 transition-all">
                  Explore IoT Testing Solutions
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all border border-white border-opacity-30">
                  Request a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTEcosystemSection;
