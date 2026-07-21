// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGamepad,
  FaBug,
  FaMobile,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";

const GamingChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaBug,
      title: "Game-Breaking Bugs",
      problem: "Critical bugs that crash games or break core gameplay mechanics",
      impact: "Player frustration, negative reviews, and revenue loss",
      stats: "73% of players uninstall games after encountering major bugs",
      solution: (<>Comprehensive <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">functional testing</Link> across all game scenarios and edge cases</>),
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      action: "/game-breaking-bugs-preparing-your-game-for-a-smooth-launch"
    },
    {
      icon: FaClock,
      title: "Performance Issues",
      problem: "Frame rate drops, loading delays, and memory leaks affecting gameplay",
      impact: "Poor user experience and competitive disadvantage",
      stats: "60% of players abandon games with consistent performance issues",
      solution: (<>Advanced <Link href="/performance-testing-services">performance testing</Link> and optimization across all target devices</>),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      action: "/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms"
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Compatibility",
      problem: "Games behaving differently across various platforms and devices",
      impact: "Fragmented user experience and increased support costs",
      stats: "45% of mobile games fail on specific device configurations",
      solution: (<>Comprehensive <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">cross-platform testing</Link> on real devices and configurations</>),
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      action: "/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices"
    },
    {
      icon: FaUsers,
      title: (<><Link href="/blog/post/multiplayer-testing-ensuring-smooth-online-gameplay-and-seamless-matchmaking">Multiplayer Synchronization</Link></>),
      problem: "Network lag, desynchronization, and connection issues in multiplayer games",
      impact: "Unfair gameplay and player churn",
      stats: "Multiplayer issues cause 40% higher player dropout rates",
      solution: (<>Specialized multiplayer testing with network simulation and <Link href="/blog/post/load-testing-in-performance-testing-complete-guide">load testing</Link></>),
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      action: "/multiplayer-testing-ensuring-smooth-online-gameplay-and-seamless-matchmaking"
    },
    {
      icon: FaShieldAlt,
      title: (<><Link href="/blog/post/top-10-security-vulnerabilities-based-on-owasp">Security Vulnerabilities</Link></>),
      problem: "Cheating, hacking, and data breaches compromising game integrity",
      impact: "Unfair gameplay and potential legal liabilities",
      stats: "Gaming industry faces 167% more cyberattacks than average",
      solution: (<><Link href="/security-testing">Security testing</Link> including anti-cheat validation and <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link></>),
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      action: "/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches"
    },
    {
      icon: FaRocket,
      title: "Launch Day Failures",
      problem: "Server overload and critical issues discovered after game release",
      impact: "Massive player disappointment and brand damage",
      stats: "67% of game launches experience critical issues in first week",
      solution: (<>Pre-launch <Link href="/blog/post/stress-testing-applications-identifying-breaking-points">stress testing</Link> and comprehensive release validation</>),
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      action: "/launch-day-failures-preventing-critical-issues-on-game-release"
    }
  ];


  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-brand-blue rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4" />
            <span className="text-sm">Gaming Challenges</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Critical Gaming
            <span className="block text-brand-blue">
              Testing Challenges
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gaming applications face unique challenges like <Link href="/performance-testing-services">performance</Link> and <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">scalability</Link>, <Link href="/blog/post/cross-platform-testing-ensuring-seamless-gaming-experiences-across-devices">cross-platform</Link> compatibility, and security risks that can make or break the player experience. Our specialized game testing services address these critical issues-from gameplay mechanics testing to vulnerability scanning-before they impact your players.

          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className={`${challenge.bgColor} ring-1 ring-${challenge.bgColor} hover:ring-3 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <challenge.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-700 mb-2">Problem:</h4>
                  <p className="text-gray-700 text-sm">{challenge.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-orange-700 mb-2">Impact:</h4>
                  <p className="text-gray-700 text-sm">{challenge.impact}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Stats:</h4>
                  <p className="text-gray-700 text-sm">{challenge.stats}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Our Solution:</h4>
                  <p className="text-gray-700 text-sm">{challenge.solution}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href={`blog/post${challenge.action}`} className="mt-6 flex items-center text-sky-700 font-semibold text-sm group-hover:text-blue-700 transition-colors" 
                aria-label={`Learn more about ${challenge.title}`}>
                  Learn More 
                  <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Overview */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <div className="max-w-4xl mx-auto text-white">
            <div className="w-20 h-20 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaGamepad className="w-20 h-20 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t Let These Challenges Ruin Your Game Launch
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              Our comprehensive gaming testing methodology addresses all these critical challenges
              before they impact your players. From performance optimization to <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">security validation</Link>,
              we ensure your game delivers the exceptional experience players expect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">50+</div>
                <div className=" text-sm">Games Tested</div>
              </div>
              <div className="text-center p-4 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-sm">Bug-Free Launches</div>
              </div>
              <div className="text-center p-4 text-brand-blue bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">85%</div>
                <div className="text-sm"><Link href="/blog/post/bug-discovery-find-hidden-defects-with-heuristic-exploratory-testing">Bug Reduction Rate</Link></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingChallengesSection;