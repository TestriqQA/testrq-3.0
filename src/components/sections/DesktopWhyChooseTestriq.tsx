// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaAward,
  FaDesktop,
  FaShieldAlt,
} from "react-icons/fa";

const DesktopWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: <Link href="healthcare-testing-services" className="text-[theme(color.brand.blue)] underline">Enterprise Experts</Link>,
      description:
        "With over 10 years of experience, we specialize in WPF and WinForms testing. We focus specifically on high-stakes requirements for the financial and industrial sectors.",
      stats: "10+ Years Experience",
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: <Link href="manual-testing" className="text-[theme(color.brand.blue)] underline">Cross-Platform Mastery</Link>,
      description:
        "We provide the dedicated infrastructure to test applications across Linux environments and the latest macOS updates.",
      stats: "Linux & macOS Ready",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: <Link href="security-testing" className="text-[theme(color.brand.blue)] underline">End-to-End Solutions</Link>,
      description:
        "We provide full-lifecycle testing, including rigorous validation of your final .MSI and .EXE installers.",
      stats: "Full MSI/EXE Coverage",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Testriq for{" "}
            <span className="text-[theme(color.brand.blue)]">
              Desktop Testing?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Partner with Testriq for global QA and testing expertise. Our team
            understands how high-quality software drives measurable business
            results.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 text-[theme(color.brand.blue)] group-hover:bg-[theme(color.brand.blue)] group-hover:text-white transition-colors duration-300">
                {advantage.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="text-[theme(color.brand.blue)] font-semibold text-sm">
                {advantage.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Testriq vs Traditional Testing
              </h3>

              <div className="space-y-6">
                {[
                  {
                    feature: (
                      <Link href="blog/post/performance-testing-for-ai-applications" className="text-[theme(color.brand.blue)] underline">
                        Testing Speed
                      </Link>
                    ),
                    testriq: "24-48 hours",
                    traditional: "1-2 weeks",
                    advantage: "10x faster",
                  },
                  {
                    feature: (
                      <Link href="blog/post/cross-platform-regression-testing-ensuring-consistency-across-devices-os" className="text-[theme(color.brand.blue)] underline">
                        Platform Coverage
                      </Link>
                    ),
                    testriq: "15+ platforms",
                    traditional: "3-5 platforms",
                    advantage: "3x more coverage",
                  },
                  {
                    feature: (
                      <Link href="blog/post/bug-discovery-find-hidden-defects-with-heuristic-exploratory-testing" className="text-[theme(color.brand.blue)] underline">
                        Bug Detection Rate
                      </Link>
                    ),
                    testriq: "99.8%",
                    traditional: "85-90%",
                    advantage: "15% higher",
                  },
                  {
                    feature: "Cost Efficiency",
                    testriq: "40% less cost",
                    traditional: "Standard pricing",
                    advantage: "40% savings",
                  },
                ].map((comparison, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-1">
                        {comparison.feature}
                      </div>
                      <div className="text-sm text-gray-600">
                        Testriq:{" "}
                        <span className="text-[theme(color.brand.blue)] font-semibold">
                          {comparison.testriq}
                        </span>{" "}
                        vs Traditional:{" "}
                        <span className="text-gray-500">
                          {comparison.traditional}
                        </span>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      {comparison.advantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Client Satisfaction
                  </h4>
                  <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                    98.5%
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                </div>

                {/* Rating Bars */}
                <div className="space-y-4">
                  {[
                    { label: "Quality", percentage: 99 },
                    { label: "Speed", percentage: 98 },
                    { label: "Communication", percentage: 97 },
                    { label: "Support", percentage: 99 },
                  ].map((rating, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{rating.label}</span>
                        <span>{rating.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic mb-2">
                    &quot;Testriq&apos;s desktop testing services exceeded our
                    expectations. Their thorough approach and quick turnaround
                    helped us launch on time.&quot;
                  </p>
                  <div className="text-xs text-gray-600">
                    - Senior Developer, Tech Startup
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[theme(color.brand.blue)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Trusted by 200+ Companies
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Testriq Difference?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Testriq for their
            desktop application testing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              title="Start Your Project Today – Testriq QA Lab"
              className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-brand-blue hover:shadow-lg transition-colors"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopWhyChooseTestriq;
