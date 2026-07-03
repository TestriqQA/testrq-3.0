import Link from "next/link";
import React from "react";
import {
  FaRocket,
  FaArrowRight,
  FaUsers,
  FaCertificate,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const CorporateQATrainingReadyToTransform: React.FC = () => {
  const benefits = [
    {
      icon: <FaUsers className="text-xl text-blue-600" />,
      title: "Expert Instructors",
      description: "ISTQB-certified professionals with 10+ years experience",
    },
    {
      icon: <FaCertificate className="text-xl text-green-600" />,
      title: "Industry Recognition",
      description: "Globally recognized certifications and credentials",
    },
    {
      icon: <FaChartLine className="text-xl text-purple-600" />,
      title: "Proven Results",
      description: "95% success rate with measurable ROI",
    },
    {
      icon: <FaHandshake className="text-xl text-orange-600" />,
      title: "Ongoing Support",
      description: "24/7 support and continuous learning resources",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 text-blue-600 rounded-full text-sm font-lg mb-6">
              <FaRocket className="mr-2" />
              Transform Your QA Team Today
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Elevate Your
              <span className="block">Team&apos;s Technical Depth?</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              By following ISO 29119 standards, our clients often reduce post-release bugs by 30-60%. Align your learning objectives with real-world business outcomes today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Your Training Program
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}>
                <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Free Consultation
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">300+ Professionals Trained</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Companies Served Across Industries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">99.5% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-blue-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingReadyToTransform;
