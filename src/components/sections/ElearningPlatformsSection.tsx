// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaGoogle,
  FaSchool,
  FaBuilding,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";

import { SiMoodle } from "react-icons/si";

const ElearningPlatformsSection: React.FC = () => {
  const platforms = [
    {
      name: "Moodle",
      icon: <SiMoodle aria-hidden className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
    {
      name: "Canvas",
      icon: (
        <FaChalkboardTeacher className="w-8 h-8 text-brand-blue mx-auto mb-3" />
      ),
    },
    {
      name: "Blackboard",
      icon: <FaSchool className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
    {
      name: "Google Classroom",
      icon: <FaGoogle className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
    {
      name: "Schoology",
      icon: (
        <FaGraduationCap className="w-8 h-8 text-brand-blue mx-auto mb-3" />
      ),
    },
    {
      name: "D2L Brightspace",
      icon: <FaBookOpen className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
    {
      name: (
        <>
          Custom{" "}
          <Link href="/blog/post/scalability-testing-for-learning-management-systems-lms-ensuring-a-smooth-experience-for-all-users">
            LMS
          </Link>
        </>
      ),
      icon: <FaLaptopCode className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
    {
      name: "Corporate Training Platforms",
      icon: <FaBuilding className="w-8 h-8 text-brand-blue mx-auto mb-3" />,
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-Learning{" "}
            <span className="text-brand-blue">Platform Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We test all major e-learning platforms with specialized knowledge of
            educational technology requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center ring-1 ring-brand-blue hover:ring-3 hover:shadow-lg transition-shadow"
            >
              {platform.icon}
              <h3 className="font-semibold text-gray-900">{platform.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact-us"
            title="Get Platform Assessment – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] min-w-[44px]
             bg-gradient-to-r from-brand-blue to-sky-600 text-white font-semibold rounded-xl
             hover:scale-98 transition-all duration-200 ease-in-out"
          >
            Get Platform Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElearningPlatformsSection;
