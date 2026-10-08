import React from "react";
import {
  FaRocket,
  FaUsers,
  FaHandshake,
  FaBuilding,
  FaLock,
  FaPlane,
  FaRoute,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

const AboutStorySection = () => {
  // Newest first. The list is authored in the order it is displayed rather
  // than being sorted at render: the zigzag layout below alternates sides on
  // index, so the array order IS the visual order and sorting it elsewhere
  // would silently change which side each card lands on.
  const milestones = [
    {
      year: "2027",
      title: "The Road Ahead",
      description:
        "Vision to expand into the GCC and Singapore markets.",
      icon: FaGlobe,
    },
    {
      year: "2026",
      title: "Product Launch & Group Growth",
      description:
        "Delivered 80+ Fintech and Cybersecurity projects, launched our own LLM validation tool llmqa.ai, and welcomed Cinute Infomedia — founded in October 2026 — into the group.",
      icon: FaRobot,
    },
    {
      year: "2025",
      title: "Drone QA Success",
      description:
        "Delivered our first successful QA project in the Drone industry.",
      icon: FaPlane,
    },
    {
      year: "2024",
      title: "Tech Expansion",
      description:
        "Ventured into Cybersecurity and Artificial Intelligence testing.",
      icon: FaLock,
    },
    {
      year: "2023",
      title: "Major Milestone",
      description:
        "Completed 8+ years with the world’s #1 VPN and launched CDPL Pvt. Ltd.",
      icon: FaHandshake,
    },
    {
      year: "2020",
      title: "Scaling Up",
      description:
        "Achieved 100+ QA experts and scaled delivery across critical verticals.",
      icon: FaUsers,
    },
    {
      year: "2017",
      title: "Incorporation",
      description:
        "Formally incorporated as a Limited Liability Partnership (LLP).",
      icon: FaBuilding,
    },
    {
      year: "2015",
      title: "Team Expansion",
      description:
        "Grew to 50+ certified testing professionals across multiple domains.",
      icon: FaUsers,
    },
    {
      year: "2010",
      title: "Foundation",
      description: "A Team of 2 members started working in a shared workspace",
      icon: FaRocket,
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 gap-2 bg-brand-blue text-white rounded-full">
            <FaRoute />
            <p className="text-sm">Our Journey</p>
          </div>
          <h2 className="text-3xl md:text-5xl mt-5 font-bold text-gray-900 mb-6">
            The{" "}
            <span className="text-[theme(color.brand.blue)]">
              Testriq Story
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Testriq began with a vision to redefine software testing through
            precision, innovation, and a commitment to quality. Today,
            we&apos;re a globally trusted QA partner helping businesses ship
            better products with confidence and speed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[theme(color.brand.blue)] h-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                        <milestone.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div
                    className={`w-4 h-4 bg-[theme(color.brand.blue)] rounded-full border-4 border-white shadow-lg 
    ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                  ></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Years of  Experience" },
            { number: "500K+", label: "Test Cases Executed" },
            { number: "100+", label: "Happy Client" },
            { number: "15+", label: "Countries Served" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
