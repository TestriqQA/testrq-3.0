// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaMobile,
  FaDesktop,
  FaGamepad,
  FaVrCardboard,
  FaApple,
  FaAndroid,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaSteam,
  FaCloud,
  FaCheckCircle,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
import {
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";

const GamingPlatformsSection: React.FC = () => {
  const platforms = [
    {
      icon: FaMobile,
      title: "Mobile Gaming",
      description: (
        <>
          <Link href="/mobile-application-testing">
            Comprehensive testing for iOS and Android mobile games
          </Link>
        </>
      ),
      platforms: [
        "iOS (iPhone/iPad)",
        "Android Phones/Tablets",
        "Cross-Platform Mobile",
      ],
      features: [
        "Touch Interface Testing",
        "Device Compatibility",
        "Battery Optimization",
        "App Store Compliance",
        "In-App Purchase Testing",
        "Push Notification Testing",
      ],
      stats: { devices: "500+", coverage: "99%", platforms: "2" },
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FaDesktop,
      title: "PC Gaming",
      description: (
        <>
          <Link href="/desktop-application-testing-services">
            Desktop gaming testing
          </Link>{" "}
          across Windows, Mac, and Linux
        </>
      ),
      platforms: ["Windows 10/11", "macOS", "Linux Distributions"],
      features: [
        "Hardware Compatibility",
        "Graphics Settings Testing",
        "Keyboard/Mouse Controls",
        "Multi-Monitor Support",
        "Steam Integration",
        "Epic Games Store",
      ],
      stats: { devices: "200+", coverage: "95%", platforms: "3" },
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FaGamepad,
      title: "Console Gaming",
      description: "Console testing for PlayStation, Xbox, and Nintendo Switch",
      platforms: ["PlayStation 4/5", "Xbox One/Series X|S", "Nintendo Switch"],
      features: [
        "Platform Certification",
        "Controller Testing",
        "Achievement Systems",
        "Online Services",
        "Exclusive Features",
        <>
          <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
            Performance Optimization
          </Link>
        </>,
      ],
      stats: { devices: "15+", coverage: "100%", platforms: "3" },
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FaVrCardboard,
      title: "AR/VR Gaming",
      description: "Immersive gaming testing for AR and VR platforms",
      platforms: [
        "Oculus Quest/Rift",
        "HTC Vive",
        "PlayStation VR",
        "ARKit/ARCore",
      ],
      features: [
        "Motion Tracking",
        "Comfort Testing",
        "Spatial Audio",
        "Hand Tracking",
        "Room-Scale VR",
        "AR Object Placement",
      ],
      stats: { devices: "25+", coverage: "90%", platforms: "6" },
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  const platformLogos = [
    { icon: FaApple, name: "iOS", color: "text-gray-800" },
    { icon: FaAndroid, name: "Android", color: "text-green-600" },
    { icon: FaWindows, name: "Windows", color: "text-blue-600" },
    { icon: FaPlaystation, name: "PlayStation", color: "text-blue-800" },
    { icon: FaXbox, name: "Xbox", color: "text-green-700" },
    { icon: FaGamepad, name: "Switch", color: "text-red-600" },
    { icon: FaSteam, name: "Steam", color: "text-gray-700" },
    { icon: FaVrCardboard, name: "Oculus", color: "text-blue-500" },
  ];

  const gameEngines = [
    {
      icon: SiUnity,
      name: "Unity",
      description: (
        <>
          Comprehensive Unity game testing and{" "}
          <Link href="/blog/post/how-does-validation-optimization-improve-web-application-quality">
            optimization
          </Link>
        </>
      ),
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: SiUnrealengine,
      name: "Unreal Engine",
      description: "Advanced Unreal Engine game testing and validation",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: FaRocket,
      name: "Custom Engines",
      description: "Testing for proprietary and custom game engines",
      color: "from-purple-600 to-purple-700",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-purple-50 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4" />
            <span className="text-sm">Gaming Platforms</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Gaming Platform
            <span className="block text-brand-blue">Testing Coverage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive game testing across all major gaming platforms and
            devices, ensuring your game delivers exceptional player experiences,
            seamless{" "}
            <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
              cross-platform
            </Link>{" "}
            game <Link href="/performance-testing-services">performance</Link>,
            and reliable gameplay everywhere your players want to play.
          </p>
        </div>

        {/* Platform Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30"
            >
              {/* Header */}
              <div className={`${platform.bgColor} p-8 pb-6`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <platform.icon aria-hidden className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Supported Platforms */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Supported Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.platforms.map((platformName, platformIndex) => (
                      <span
                        key={platformIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {platformName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Testing Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">
                      {platform.stats.devices}
                    </div>
                    <div className="text-xs text-gray-600">Test Devices</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">
                      {platform.stats.coverage}
                    </div>
                    <div className="text-xs text-gray-600">Coverage</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-lg font-bold text-gray-900">
                      {platform.stats.platforms}
                    </div>
                    <div className="text-xs text-gray-600">Platforms</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Logos */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expertise in Leading Platforms
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With deep expertise across major{" "}
              <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                gaming platforms
              </Link>{" "}
              and distribution channels, we ensure your games meet
              platform-specific standards, compliance requirements, and deliver
              exceptional experiences on console, mobile, PC, and browser-based
              environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {platformLogos.map((logo, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-100 transition-colors">
                  <logo.icon aria-hidden className={`w-8 h-8 ${logo.color}`} />
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Engine Support */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Game Engine Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized testing for popular game engines with deep technical
              knowledge and engine-specific optimization techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameEngines.map((engine, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-3xl shadow-lg ring-1 ring-brand-blue hover:ring-3 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${engine.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <engine.icon aria-hidden className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {engine.name}
                </h4>
                <p className="text-gray-600">{engine.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaTrophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Platform Certification
            </h3>
            <p className="text-gray-600">
              Expert guidance through platform certification processes for
              console and mobile app stores.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Optimized Performance
            </h3>
            <p className="text-gray-600">
              <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">
                Platform-specific optimization
              </Link>{" "}
              to ensure your game runs perfectly on every target device.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Cross-Platform Sync
            </h3>
            <p className="text-gray-600">
              Seamless{" "}
              <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
                cross-platform gameplay
              </Link>{" "}
              and data synchronization testing and validation.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Test Your Game Across All Platforms
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Ensure your game delivers exceptional experiences on every
              platform your players use. Our{" "}
              <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
                comprehensive
              </Link>{" "}
              platform testing covers everything from mobile to VR.
            </p>
            <div className="flex flex-col sm:flex-row text-[theme(color.brand.blue)] gap-4 justify-center">
              <Link
                href="/contact-us"
                title="Get Platform Testing Quote – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-black rounded-2xl font-semibold text-lg hover:scale-98 hover:bg-gray-100
             transition-all"
              >
                Get Platform Testing Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingPlatformsSection;
