"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaCertificate,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaClock,
  FaArrowRight,
  FaAward,
} from "react-icons/fa";

const IoTWhyChooseTestriq: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "IoT Testing Experts",
      shortTitle: "IoT Experts",
      description:
        "Our team consists of ISTQB-certified IoT testing professionals with extensive experience in connected device technologies.",
      stats: "500+ IoT Devices Tested",
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      features: [
        "Smart Home Testing",
        "Industrial IoT",
        "Wearable Devices",
        "Edge Computing",
      ],
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Faster IoT Deployment",
      shortTitle: "Faster Launch",
      description:
        "Accelerate your IoT development cycle with our efficient testing processes and automated validation frameworks.",
      stats: "55% Faster Deployment",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      features: [
        <span key="automated-testing"><Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Automated Testing</Link></span>,
        "Device Simulation",
        <span key="protocol-testing"><Link href="/api-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Protocol Testing</Link></span>,
        "Quick Validation",
      ],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Comprehensive Security",
      shortTitle: "Security Shield",
      description:
        "Advanced security testing to protect your IoT devices from vulnerabilities and ensure robust data protection.",
      stats: "Zero Security Breaches",
      color: "red",
      gradient: "from-red-500 to-red-600",
      features: [
        <span key="device-security"><Link href="/security-testing" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Device Security</Link></span>,
        "Network Protection",
        "Data Encryption",
        "Firmware Testing",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Optimization",
      shortTitle: "Performance",
      description:
        "Identify and resolve performance bottlenecks to ensure your IoT systems scale efficiently.",
      stats: "99.7% Uptime Achieved",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      features: [
        <span key="connectivity-testing"><Link href="/blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Connectivity Testing</Link></span>,
        "Latency Optimization",
        "Battery Life",
        "Scalability",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Dedicated IoT Support",
      shortTitle: "IoT Support",
      description:
        "24/7 support from our IoT testing specialists who understand your unique device and network requirements.",
      stats: "24/7 IoT Support",
      color: "green",
      gradient: "from-green-500 to-green-600",
      features: [
        <span key="device-expertise"><Link href="/iot-appliances-and-apps-testing-services" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Device Expertise</Link></span>,
        "Protocol Support",
        "Network Analysis",
        "Troubleshooting",
      ],
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Quick Validation",
      shortTitle: "Quick Results",
      description:
        "Fast and efficient IoT testing cycles with comprehensive reporting and actionable recommendations.",
      stats: "36hr Average Response",
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Rapid Testing",
        "Device Profiling",
        "Quick Reports",
        <span key="fast-feedback"><Link href="/launchfast-qa" className="text-[theme(color.brand.blue)] underline hover:decoration-[theme(color.brand.blue)]">Fast Feedback</Link></span>,
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Testriq for{" "}
            <span className="text-[theme(color.brand.blue)]">IoT Testing</span>?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We combine certified IoT QA expertise,{" "}
            <Link href="blog/post/persona-based-testing-enhancing-qa-with-real-user-simulation">
              real-world simulation
            </Link>
            , and
            <Link href="/technology-stack"> advanced tools</Link> to deliver IoT testing
            services that ensure reliable performance,{" "}
            <Link href="blog/post/connectivity-protocol-testing-for-iot-wifi-ble-zigbee-mqtt-more">
              secure connectivity
            </Link>
            , and{" "}
            <Link href="blog/post/interoperability-testing-for-iot-ensuring-seamless-protocol-device-interaction">
              protocol-compliant
            </Link>{" "}
            IoT device ecosystems.
          </p>
        </div>

        {/* Interactive IoT Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 transform hover:scale-105 ${hoveredCard === index ? "z-10" : ""
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* IoT Device Card */}
              <div
                className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${hoveredCard === index ? "shadow-2xl" : "hover:shadow-xl"
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Device Header */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs font-medium">
                          Achievement
                        </div>
                        <div className="text-white font-bold text-sm">
                          {benefit.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* IoT Connection Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className="w-full h-full">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-2 right-2"></div>
                      <div className="w-3 h-3 bg-white rounded-full absolute top-8 right-8"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-12 right-4"></div>
                      <div className="w-1 h-16 bg-white absolute top-4 right-6 transform rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Device Features */}
                <div className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center">
                      <div
                        className="w-2 h-2 rounded-full mr-2 animate-pulse"
                        style={{ backgroundColor: benefit.color || "#10b981" }} // default: green-500
                      ></div>
                      IoT Capabilities:
                    </h4>
                    {benefit.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center pl-4"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mr-3"
                          style={{
                            backgroundColor: benefit.color || "#34d399",
                          }} // default: green-400
                        ></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Hover State */}
                <div
                  className={`absolute inset-0 z-10 bg-gradient-to-r ${benefit.gradient
                    } flex items-center justify-center
                              transition-opacity duration-500 ease-in-out ${hoveredCard === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                    }
                            `}
                >
                  <div className="text-center text-white p-6 transform transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm relative">
                      {React.cloneElement(benefit.icon, {
                        className: "w-8 h-8",
                      })}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {benefit.shortTitle}
                    </h3>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-white/80 text-xs">
                        Success Metric
                      </div>
                      <div className="text-white font-bold">
                        {benefit.stats}
                      </div>
                    </div>
                    <div>
                      <Link
                        href="/contact-us"
                        className={`flex justify-center items-center gap-2 mx-auto bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-white/30 hover:text-white transition-colors duration-300 backdrop-blur-sm`}
                      >
                        <span>Explore IoT Testing</span>
                        <FaArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Connection Indicator */}
                <div
                  className={`absolute top-4 left-4 w-3 h-3 rounded-full transition-all duration-500 ${hoveredCard === index ? "bg-white animate-pulse" : ""
                    }`}
                  style={{
                    backgroundColor:
                      hoveredCard === index ? "" : benefit.color || "#06b6d4", // default cyan-500
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* IoT Network Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Global IoT Testing Network
            </h3>
            <p className="text-gray-600">
              Trusted for quality assurance in the 21.1 Billion connected device ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="relative">
              <div className="text-3xl font-bold text-teal-600 mb-2">21.1B+</div>
              <div className="text-gray-700 text-sm">Global Ecosystem</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-700 text-sm">Stability Score</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                36hr
              </div>
              <div className="text-gray-700 text-sm">Target Sprint</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-green-600 mb-2">ISO</div>
              <div className="text-gray-700 text-sm">29119 Verified</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA with IoT Theme */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Connect with Excellence?
              </h3>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                Join 100+ companies who trust our IoT testing expertise. Get
                started with a comprehensive IoT device assessment and ensure
                your connected ecosystem is reliable and secure.
              </p>
              <Link
                href="/contact-us"
                title="Get Started with IoT Testing – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Get Started with IoT Testing
              </Link>
            </div>

            {/* IoT Network Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
              <div
                className="absolute top-12 right-8 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-8 left-12 w-4 h-4 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTWhyChooseTestriq;
