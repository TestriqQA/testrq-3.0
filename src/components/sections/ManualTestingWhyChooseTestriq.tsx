// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaCertificate,
  FaShieldAlt,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

const ManualTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "ISO 29119 Standards",
      description:
        "We are a leading global QA provider that integrates the ISO 29119 framework. We follow Part 2 for a standard process model and Part 4 for advanced design techniques to spot bugs early.",
      stats: "ISO 29119 Certified Path",
      color: "blue",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Certified Data Security",
      description:
        "We meet SOC2 Type II and ISO 27001 standards for all testing. This framework protects your IP and customer data throughout the entire testing process.",
      stats: "SOC2 Type II & ISO 27001",
      color: "purple",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Privacy & Global Compliance",
      description:
        "We help you launch in the EU and Asia with expert local-market testing. Our team ensures your software meets all local data privacy laws (GDPR, etc.) and cultural fits.",
      stats: "Global Market Ready",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string; iconBg: string };
    } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        iconBg: "bg-purple-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        iconBg: "bg-green-600",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        iconBg: "bg-orange-600",
      },
      teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-600" },
      indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        iconBg: "bg-indigo-600",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">Standards & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Global Standards, <span className="text-brand-blue">Security</span>, and Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For companies in the US, UK, EU, and Asia, quality means security and compliance. Testriq manual testing services provide the international trust global enterprises require.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}
              >
                <div
                  className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white">{advantage.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {advantage.description}
                </p>

                <div className={`${colors.text} font-bold text-lg`}>
                  {advantage.stats}
                </div>
              </div>
            );
          })}
        </div>



        {/* Industry Expertise */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industry Expertise & Domain Knowledge
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our manual testing experts apply deep domain knowledge for
              context-aware testing across industries:
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">
                  <Link href="/healthcare-testing-services" className="text-brand-blue underline">Healthcare & FinTech</Link> – compliance & data integrity
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">
                  <Link href="/e-commerce-testing-services" className="text-brand-blue underline">E-commerce & Retail</Link> – UX & functional validation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">
                  <Link href="/e-learning-testing-services" className="text-brand-blue underline">EdTech & SaaS</Link> – accessibility & workflow coverage
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">
                  <Link href="/iot-device-testing-services" className="text-brand-blue underline">IoT & Smart Devices</Link> – connectivity & usability assurance
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Quality Assurance Commitment
            </h4>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    ISO 9001:2015 Certified
                  </h5>
                  <p className="text-sm text-gray-600">
                    Quality management system certification ensuring consistent
                    service delivery
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    GDPR Compliant
                  </h5>
                  <p className="text-sm text-gray-600">
                    Data protection and privacy compliance for secure testing
                    processes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    24/7 Support
                  </h5>
                  <p className="text-sm text-gray-600">
                    Round-the-clock support for critical testing needs and
                    urgent issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingWhyChooseTestriq;
