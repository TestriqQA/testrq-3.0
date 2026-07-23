// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const IoTCardSlider: React.FC = () => {
  const testingTypes = [
    {
      title: "Embedded Software & Firmware Testing",
      description:
        <>Comprehensive validation of <strong>embedded firmware logic</strong>, sensor accuracy, and <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks" className="font-bold text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">OTA (Over-the-Air) updates</Link> to ensure your device performs flawlessly without data loss.</>,
      features: [
        "Device feature validation",
        "User interface testing",
        "Sensor accuracy testing",
        "Actuator response validation",
      ],
      highlight: "99.9% functionality coverage",
      action:
        "blog/post/device-interoperability-testing-ensuring-seamless-communication-across-iot-devices",
    },
    {
      title: "Protocol Validation (MQTT, Zigbee, BLE)",
      description:
        <>Ensure reliable communication across complex networks. We validate interoperability for <strong>MQTT</strong>, <strong>Zigbee</strong>, <strong>CoAP</strong>, and <Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more" className="font-bold text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Bluetooth Low Energy (BLE)</Link> under varying latency conditions.</>,
      features: [
        "Wireless protocol testing",
        "Network connectivity validation",
        "Data transmission testing",
        "Protocol compliance verification",
      ],
      highlight: "100% protocol compliance",
      action:
        "blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more",
    },
    {
      title: "IoT Security & Penetration Testing",
      description:
        <>Advanced <Link href="/security-testing" className="font-bold text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Vulnerability Assessment and Penetration Testing (VAPT)</Link> to protect against firmware hacking, side-channel attacks, and <strong>unencrypted data transmission</strong>.</>,
      features: [
        "Device authentication testing",
        "Data encryption validation",
        "Vulnerability assessment",
        "Privacy protection testing",
      ],
      highlight: "Zero security vulnerabilities",
      action: "blog/post/ai-security-testing",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              IoT Testing Types
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our specialized testing approaches ensure your IoT devices meet the
            highest standards of{" "}
            <Link href="blog/post/how-does-validation-optimization-improve-web-application-quality" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">
              functionality
            </Link>
            ,{" "}
            <Link href="blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">
              connectivity
            </Link>
            , and <Link href="security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">security</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <div className="text-[theme(color.brand.blue)] font-bold text-lg mb-2">
                  {type.highlight}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheckCircle className="w-4 h-4 text-[theme(color.brand.blue)] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* F-38: aria-label disambiguates the generic "Learn More" anchor —
                  multiple cards on the page emit identical link text. */}
              <Link
                href={type.action}
                aria-label={`Learn more about ${type.title}`}
                className="flex items-center text-[theme(color.brand.blue)] font-semibold hover:text-blue-400 transition-colors duration-300"
              >
                <span>Learn More</span>
<span className="sr-only"> about {type.title}</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            title="Get Comprehensive IoT Testing – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors duration-300"
          >
            Get Comprehensive IoT Testing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IoTCardSlider;
