// Server Component. Shared by /quality-assurance-services,
// /saas-testing-services and /ai-application-testing.
//
// Every competitor QA page audited (Beetroot "Meet Your Team", KPMG "Our
// people", Appsierra "A senior engineer will answer", Propel Tech) names
// somebody. No testriq.com service page named anyone. Enterprise QA is a trust
// purchase and the buyer wants to know who is actually on the account.
//
// Names, roles and LinkedIn URLs are copied verbatim from
// src/components/sections/TeamMembersSection.tsx — the /our-team page — so
// there is one source of truth. Do not invent titles or credentials here; if
// someone's role changes, change it there first.
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const people = [
  {
    name: "Pooja Katkar",
    role: "Test Lead",
    linkedin: "https://www.linkedin.com/in/pooja-katkar-737b3525a/",
    src: "/None.webp",
    blurb:
      "Runs test planning and execution on client engagements, and owns the defect triage your team sees day to day.",
  },
  {
    name: "Ragini Kumari",
    role: "QA Specialist",
    linkedin: "https://www.linkedin.com/in/raginikumari90/",
    src: "/None.webp",
    blurb:
      "Specialises in e-learning platforms and user-experience testing — the cases where a build passes every check and still frustrates the person using it.",
  },
  {
    name: "Aakash Yadav",
    role: "R&D Innovation Specialist",
    linkedin: "https://www.linkedin.com/in/aakashyadav9890/",
    src: "/aakash-yadav.webp",
    blurb:
      "Works on the tooling and automation side — how a suite is built so it still runs cleanly a year later.",
  },
];

const ServiceTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who You&rsquo;ll Actually <span className="text-brand-blue">Work With</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Not an account manager who forwards your questions. The people below are
            part of the QA team, and one of them will be on your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {people.map((p) => (
            <div
              key={p.name}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center"
            >
              <Image
                src={p.src}
                alt={`${p.name}, ${p.role} at Testriq QA Lab`}
                width={88}
                height={88}
                className="rounded-full object-cover w-[88px] h-[88px] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-brand-blue text-sm font-medium mb-3">{p.role}</p>
              <p className="text-gray-700 text-sm flex-1">{p.blurb}</p>
              <Link
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on LinkedIn`}
                className="inline-flex items-center text-gray-600 hover:text-brand-blue transition-colors text-sm mt-4"
              >
                <FaLinkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          <Link href="/our-team" className="text-brand-blue hover:underline">
            Meet the rest of the team
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ServiceTeamSection;
