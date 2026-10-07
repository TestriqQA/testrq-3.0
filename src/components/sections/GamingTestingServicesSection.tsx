// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaGamepad,
  FaMobile,
  FaDesktop,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaVrCardboard,
  FaCog,
  FaChartLine,
  FaBug,
  FaCloud,
  FaTrophy,
} from "react-icons/fa";

const GamingTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaGamepad,
      title: "Functional Game Testing",
      description:
        "Comprehensive testing of game mechanics, controls, UI/UX, and core gameplay features across all game modes and scenarios.",
      features: [
        "Game Mechanics Validation",
        "Control Responsiveness",
        <>
          <Link href="/blog/post/best-practices-for-mobile-ui-ux-testing">
            UI/UX Testing
          </Link>
        </>,
        "Game Flow Testing",
      ],
    },
    {
      icon: FaMobile,
      title: "Mobile Game Testing",
      description: (
        <>
          Specialized testing for mobile games including touch controls,{" "}
          <Link href="/blog/post/responsive-web-application-testing-ensuring-seamless-multi-device-compatibility">
            device compatibility
          </Link>
          , battery optimization, and app store compliance.
        </>
      ),
      features: [
        "Touch Interface Testing",
        "Device Compatibility",
        "Battery Performance",
        "App Store Validation",
      ],
    },
    {
      icon: FaDesktop,
      title: "PC & Console Testing",
      description:
        "Platform-specific testing for PC, PlayStation, Xbox, and Nintendo Switch including hardware compatibility and platform features.",
      features: [
        "Hardware Compatibility",
        "Platform Certification",
        "Controller Testing",
        "Achievement Systems",
      ],
    },
    {
      icon: FaUsers,
      title: (
        <>
          <Link href="/blog/post/multiplayer-testing-ensuring-smooth-online-gameplay-and-seamless-matchmaking">
            Multiplayer Testing
          </Link>
        </>
      ),
      description:
        "Comprehensive multiplayer testing including network synchronization, matchmaking, chat systems, and social features.",
      features: [
        <>
          <Link href="/blog/post/device-connectivity-testing-ensuring-reliable-iot-connections-across-networks">
            Network Synchronization
          </Link>
        </>,
        "Matchmaking Systems",
        "Chat & Voice Testing",
        "Social Features",
      ],
    },
    {
      icon: FaChartLine,
      title: (
        <>
          <Link href="/performance-testing-services">Performance Testing</Link>
        </>
      ),
      description:
        "Advanced performance testing to ensure optimal frame rates, loading times, and memory usage across all target platforms.",
      features: [
        "Frame Rate Optimization",
        <>
          <Link href="/blog/post/performance-testing-for-robotics-load-handling-precision-uptime">
            Load Time Testing
          </Link>
        </>,
        "Memory Management",
        <>
          <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">
            Stress Testing
          </Link>
        </>,
      ],
    },
    {
      icon: FaShieldAlt,
      title: (
        <>
          <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">
            Game Security Testing
          </Link>
        </>
      ),
      description:
        "Security testing to prevent cheating, hacking, and data breaches while protecting player information and game integrity.",
      features: [
        "Anti-Cheat Validation",
        "Data Protection",
        "Server Security",
        <>
          <Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">
            Payment Security
          </Link>
        </>,
      ],
    },
    {
      icon: FaVrCardboard,
      title: "AR/VR Game Testing",
      description:
        "Specialized testing for augmented and virtual reality games including motion tracking, comfort testing, and immersive experience validation.",
      features: [
        "Motion Tracking",
        "Comfort Testing",
        "Spatial Audio",
        "Hand Tracking",
      ],
    },
    {
      icon: FaCloud,
      title: (
        <>
          <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
            Cloud Gaming Testing
          </Link>
        </>
      ),
      description:
        "Testing for cloud-based gaming platforms including streaming quality, latency optimization, and cross-device synchronization.",
      features: [
        "Streaming Quality",
        "Latency Optimization",
        <>
          <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">
            Cross-Device Sync
          </Link>
        </>,
        "Bandwidth Testing",
      ],
    },
    {
      icon: FaBug,
      title: (
        <>
          <Link href="/blog/post/launch-day-failures-preventing-critical-issues-on-game-release">
            Game Compatibility Testing
          </Link>
        </>
      ),
      description:
        "Extensive compatibility testing across different operating systems, hardware configurations, and game engine versions.",
      features: [
        "OS Compatibility",
        "Hardware Configs",
        "Engine Versions",
        "Driver Testing",
      ],
    },
    {
      icon: FaCog,
      title: (
        <>
          <Link href="/automation-testing-services">
            Game Automation Testing
          </Link>
        </>
      ),
      description:
        "Automated testing solutions for repetitive game scenarios, regression testing, and continuous integration pipelines.",
      features: [
        "Automated Regression",
        <>
          <Link href="/blog/post/ci-cd-integration-with-automated-tests">
            CI/CD Integration
          </Link>
        </>,
        "Scenario Automation",
        "Performance Monitoring",
      ],
    },
    {
      icon: FaRocket,
      title: "Launch Readiness Testing",
      description:
        "Comprehensive pre-launch testing including stress testing, day-one patch validation, and launch day monitoring.",
      features: [
        <>
          <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">
            Stress Testing
          </Link>
        </>,
        "Patch Validation",
        "Launch Monitoring",
        "Rollback Testing",
      ],
    },
    {
      icon: FaTrophy,
      title: "Esports Game Testing",
      description:
        "Specialized testing for competitive gaming including tournament mode validation, spectator features, and anti-cheat systems.",
      features: [
        "Tournament Modes",
        "Spectator Features",
        "Competitive Balance",
        "Anti-Cheat Systems",
      ],
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4" />
            <span className="text-sm">Gaming Testing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Gaming
            <span className="block text-brand-blue">Testing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive game testing services designed for gaming
            applications, ensuring flawless gaming experiences, optimized game
            performance, and exceptional player engagement across mobile,
            console, and PC platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:ring-3"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Platform Coverage */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Platform Coverage
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test your games across all major gaming platforms and devices
              to ensure consistent{" "}
              <Link href="/performance-testing-services">performance</Link> and
              player experience everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMobile className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Mobile Gaming
              </h4>
              <p className="text-gray-600 text-sm">
                iOS, Android, cross-platform mobile games
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaDesktop className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                PC Gaming
              </h4>
              <p className="text-gray-600 text-sm">
                Windows, Mac, Linux, Steam, Epic Games
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGamepad className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Console Gaming
              </h4>
              <p className="text-gray-600 text-sm">
                PlayStation, Xbox, Nintendo Switch
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaVrCardboard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                AR/VR Gaming
              </h4>
              <p className="text-gray-600 text-sm">
                Oculus, HTC Vive, ARKit, ARCore
              </p>
            </div>
          </div>
        </div>

        {/* Gaming Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Gaming Industry Expertise
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaTrophy className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">AAA Game Experience</h4>
                  <p className="text-blue-100 text-sm">
                    Extensive experience testing major game releases and indie
                    titles across all genres.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaUsers className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">
                    Multiplayer Specialists
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Deep expertise in multiplayer game testing, networking, and
                    social features.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaRocket className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Launch Success</h4>
                  <p className="text-blue-100 text-sm">
                    Proven track record of successful game launches with minimal
                    post-launch issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Gaming Testing Metrics
            </h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">
                  Bug-free game launches
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-600">
                  Games successfully tested
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-1">
                  85%
                </div>
                <div className="text-sm text-gray-600">
                  Average bug reduction rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Game Testing?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our gaming testing experts are ready to help you deliver
              exceptional player experiences and achieve successful game
              launches across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-[theme(color.brand.blue)]">
              <Link
                href="/contact-us"
                title="Get Gaming Testing Quote – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white text-black rounded-2xl font-semibold text-lg hover:bg-gray-100
             hover:scale-98 hover:text-sky-700 transition-all"
              >
                Get Gaming Testing Quote
              </Link>

              <Link
                 href={BOOKING_URL} target={ "_blank" }
                title="Schedule Gaming Consultation – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-white bg-opacity-20 text-black rounded-2xl font-semibold text-lg
             hover:bg-opacity-30 hover:scale-98 hover:text-sky-700 transition-all
             border border-white border-opacity-30"
              >
                Schedule Gaming Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingTestingServicesSection;
