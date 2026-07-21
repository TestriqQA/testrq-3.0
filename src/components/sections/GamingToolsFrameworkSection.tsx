// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaVrCardboard,
  FaTools,
  FaCheckCircle,
  FaCog,
  FaRocket,
  FaLaptopCode,
  FaBoxOpen,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import {
  SiUnity,
  SiUnrealengine,
  SiAppium,
  SiSelenium,
  SiFirebase,
} from "react-icons/si";

const GamingToolsFrameworkSection: React.FC = () => {
  const testingTools = [
    {
      category: "Game Engine Testing",
      icon: FaGamepad,
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
      tools: [
        {
          name: "Unity Test Framework",
          description: "Native Unity testing solution",
          icon: <SiUnity aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Unreal Automation",
          description: "Unreal Engine testing framework",
          icon: <SiUnrealengine aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "GameDriver",
          description: (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Cross-platform</Link> game automation</>),
          icon: <FaLaptopCode className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "AltTester",
          description: (<>Unity <Link href="/blog/post/etl-testing-tools-frameworks">UI test</Link> automation</>),
          icon: <FaBoxOpen className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      category: "Mobile Game Testing",
      icon: FaMobile,
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
      tools: [
        {
          name: (<><Link href="/blog/post/top-mobile-testing-frameworks-compared-appium-espresso-xcuitest">Appium</Link></>),
          description: "Mobile app automation framework",
          icon: <SiAppium aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "TestFlight",
          description: "iOS beta testing platform",
          icon: <FaApple className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Firebase Test Lab",
          description: "Android testing infrastructure",
          icon: <SiFirebase aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "GameBench",
          description: "Mobile game performance testing",
          icon: <FaMobile className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      category: (<><Link href="/performance-testing-services">Performance Testing</Link></>),
      icon: FaRocket,
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
      tools: [
        {
          name: "Unity Profiler",
          description: "Unity performance analysis",
          icon: <SiUnity aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Unreal Insights",
          description: "Unreal Engine profiling",
          icon: <SiUnrealengine aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Xcode Instruments",
          description: "iOS performance monitoring",
          icon: <FaApple className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Android Studio Profiler",
          description: "Android performance analysis",
          icon: <FaAndroid className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
    {
      category: (<><Link href="/automation-testing-services">Automation Testing</Link></>),
      icon: FaCog,
      color: "text-[theme(color.brand.blue)]",
      bgColor: "bg-blue-50",
      tools: [
        {
          name: (<><Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium</Link></>),
          description: "Web-based game automation",
          icon: <SiSelenium aria-hidden className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "TestComplete",
          description: "Desktop game testing",
          icon: <FaCheckCircle className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Ranorex",
          description: "GUI test automation",
          icon: <FaCog className="w-5 h-5 text-blue-500" />,
        },
        {
          name: "Squish",
          description: "Cross-platform GUI testing",
          icon: <FaTools className="w-5 h-5 text-blue-500" />,
        },
      ],
    },
  ];

  const platformFrameworks = [
    {
      name: "Mobile Platforms",
      description: (<><Link href="/mobile-application-testing">iOS and Android game testing</Link> frameworks</>),
      features: [
        "Touch Controls",
        "Device Compatibility",
        "App Store Compliance",
        "Performance",
      ],
      icon: <FaMobile className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "PC Gaming",
      description: "Windows, Mac, and Linux game validation",
      features: [
        "Hardware Configs",
        "Graphics Settings",
        "Input Devices",
        "Steam Integration",
      ],
      icon: <FaDesktop className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "Console Gaming",
      description: "PlayStation, Xbox, and Nintendo testing",
      features: [
        "Certification",
        (<><Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">Platform Features</Link></>),
        "Controllers",
        "Online Services",
      ],
      icon: <FaGamepad className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "AR/VR Gaming",
      description: "Immersive gaming experience validation",
      features: [
        "Motion Tracking",
        "Spatial Audio",
        "Comfort Testing",
        "Hand Tracking",
      ],
      icon: <FaVrCardboard className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaTools className="w-4 h-4" />
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Gaming Testing
            <span className="block text-brand-blue">Tools & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge game testing <Link href="/technology-stack">tools</Link> and frameworks specifically
            designed for gaming applications, ensuring optimized game{" "}
            <Link href="/performance-testing-services">performance</Link>, immersive gameplay, and flawless gaming experiences
            across all platforms.
          </p>
        </div>

        {/* Testing Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testingTools.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-brand-blue hover:ring-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    {tool.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Frameworks */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
              <FaGamepad className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">
                Platform Frameworks
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cross-Platform Gaming Validation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <Link href="/blog/post/test-execution-comprehensive-testing-implementation">Comprehensive</Link> game testing frameworks ensuring your games deliver
              flawless performance across all gaming platforms and devices,
              including mobile, console, PC, and browser-based environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFrameworks.map((framework, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:ring-2 hover:ring-brand-blue transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {framework.name}
                </h4>
                <p className="text-gray-600 mb-4">{framework.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {framework.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Gaming Testing Stack
            </h3>
            <p className=" text-lg max-w-2xl mx-auto">
              Advanced technologies and methodologies for comprehensive gaming
              application validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">PC Gaming</h4>
              <p>Steam, Epic Games, and standalone validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Mobile Gaming</h4>
              <p>iOS App Store and Google Play optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaVrCardboard className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">AR/VR Gaming</h4>
              <p>Immersive experience and comfort testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingToolsFrameworkSection;
