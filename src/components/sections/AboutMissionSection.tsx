import React from "react";
import { FaEye, FaBullseye, FaHeart, FaLightbulb } from "react-icons/fa";

const AboutMissionSection = () => {
  const values = [
    {
      icon: FaBullseye,
      title: "Our Mission",
      description:
        "To empower businesses with comprehensive quality assurance solutions that ensure flawless software delivery, accelerate time-to-market, and build user confidence through rigorous testing methodologies.",
      color: "bg-blue-500",
    },
    {
      icon: FaEye,
      title: "Our Vision",
      description:
        "To be the global leader in software testing innovation, setting industry standards for quality assurance while fostering a culture of continuous learning and technological advancement.",
      color: "bg-purple-500",
    },
    {
      icon: FaHeart,
      title: "Our Values",
      description:
        "Excellence, integrity, innovation, and collaboration drive everything we do. We believe in building lasting partnerships through transparent communication and delivering exceptional results.",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2 rounded-full">
            <FaLightbulb />
            <span className="text-sm">What Drives Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl mt-5 font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-[theme(color.brand.blue)]">
              Purpose & Values
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            At Testriq, we&apos;re driven by a shared mission to transform the
            way businesses achieve software quality. Our vision is rooted in
            innovation, accountability, and a commitment to long-term success.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6`}
              >
                <item.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to{" "}
                <span className="text-[theme(color.brand.blue)]">
                  Excellence
                </span>
              </h3>
              <div className="space-y-4">
                {[
                  "Certified QA Engineers applying industry-approved testing methodologies",
                  "Continuous skill upgrades aligned with evolving QA technologies",
                  "Transparent project communication and real-time status updates",
                  "Tailored QA strategies customized for your product lifecycle",
                  "24/7 QA support and dedicated project coordination for agile delivery",
                  "A results-driven approach focused on measurable quality across every engagement",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                    100%
                  </div>
                  <div className="text-gray-700 font-medium mb-4">
                    Client Satisfaction
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our commitment to quality has earned us a perfect
                    satisfaction rate across all our client engagements.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[theme(color.brand.blue)] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
