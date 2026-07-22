import Link from "next/link";
import React from "react";
import {
  FaClipboardList,
  FaUsers,
  FaLaptopCode,
  FaCertificate,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const CorporateQATrainingProvenProcess: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      icon: <FaClipboardList className="text-2xl text-blue-600" />,
      description:
        (<>We analyze your team&apos;s current skill level and create a <Link href="/software-testing-guide" className="text-gray-600 hover:text-brand-blue hover:underline decoration-brand-blue">customized training roadmap</Link>.</>),
      details: [
        "Skills gap analysis",
        "Learning objectives definition",
        "Custom curriculum design",
        "Timeline planning",
      ],
    },
    {
      step: "02",
      title: "Interactive Learning",
      icon: <FaUsers className="text-2xl text-green-600" />,
      description:
        "Engaging sessions with expert instructors using real-world scenarios and case studies.",
      details: [
        "Live instructor-led sessions",
        "Interactive workshops",
        "Group discussions",
        "Q&A sessions",
      ],
    },
    {
      step: "03",
      title: "Hands-on Practice",
      icon: <FaLaptopCode className="text-2xl text-purple-600" />,
      description:
        (<>Deploying learned skills in a safe, guided sandbox. <Link href="/" className="text-blue-600 underline">Real project simulations</Link> to build confidence before live deployment.</>),
      details: [
        (<><Link href="/" className="text-blue-600 underline">Real project simulations</Link></>),
        (<><Link href="/technology-stack" className="text-gray-500 hover:text-brand-blue hover:underline decoration-brand-blue">Tool-based exercises</Link></>),
        "Peer collaboration",
        "Mentored practice",
      ],
    },
    {
      step: "04",
      title: "Assessment & Certification",
      icon: <FaCertificate className="text-2xl text-orange-600" />,
      description:
        "Comprehensive evaluation and industry-recognized certification upon completion.",
      details: [
        "Knowledge assessments",
        "Practical evaluations",
        "Certification exams",
        "Performance feedback",
      ],
    },
    {
      step: "05",
      title: "Progress Tracking",
      icon: <FaChartLine className="text-2xl text-red-600" />,
      description:
        "Continuous monitoring of learning progress with detailed analytics and reporting.",
      details: [
        "Learning analytics",
        "Progress dashboards",
        "Performance metrics",
        "Regular check-ins",
      ],
    },
    {
      step: "06",
      title: "Ongoing Support",
      icon: <FaHandshake className="text-2xl text-indigo-600" />,
      description:
        "Post-training support and resources to ensure long-term success and skill retention.",
      details: [
        "24/7 support access",
        "Resource libraries",
        "Community forums",
        "Refresher sessions",
      ],
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaClipboardList />
            <span className="text-sm">Our Training Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proven Process for
            <span className="bg-clip-text text-brand-blue">
              {" "}
              Maximum Learning Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures effective knowledge transfer and
            skill development through structured learning phases and continuous
            support.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Step Content */}
                <div className="flex-1 lg:max-w-md">
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                  >
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                      {index % 2 !== 0 && (
                        <>
                          {step.icon}
                          <div className="text-3xl font-bold text-gray-500">
                            {step.step}
                          </div>
                        </>
                      )}
                      {index % 2 === 0 && (
                        <>
                          <div className="text-3xl font-bold text-gray-500">
                            {step.step}
                          </div>
                          {step.icon}
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2 text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-200 rounded-full shadow-lg z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Training Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our proven methodology has helped hundreds of teams achieve QA
              excellence. Let us create a customized training program for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={"_blank"}>
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semiboldtransition-colors">
                  Schedule Consultation
                </button>
              </Link>
              {/* <button className="border border-gray-300 cursor-pointer text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Download Brochure
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateQATrainingProvenProcess;
