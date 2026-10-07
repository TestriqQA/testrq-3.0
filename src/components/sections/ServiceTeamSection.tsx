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
//
// KNOWN GAP: Cezzane Khan (AI_TEAM below) is not on /our-team yet, so those two
// service pages currently name somebody TeamMembersSection.tsx does not list.
// Add them there to restore the invariant above.
//
// Two rosters, because these pages sell different work. DEFAULT_TEAM is the
// general QA line-up. AI_TEAM swaps the second slot for the AI test lead on the
// pages whose buyer is shopping for AI/LLM testing; /saas-testing-services
// deliberately stays on the default. Opt in with `people={AI_TEAM}` — anything
// not passing the prop keeps the old roster, which is why this is a prop rather
// than an edit to the shared array.
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export interface ServiceTeamPerson {
  name: string;
  role: string;
  linkedin: string;
  /** Path under /public. Rendered into an 88×88 circle with object-cover. */
  src: string;
  blurb: string;
}

const poojaKatkar: ServiceTeamPerson = {
  name: "Pooja Katkar",
  role: "Test Lead",
  linkedin: "https://www.linkedin.com/in/pooja-katkar-737b3525a/",
  src: "/None.webp",
  blurb:
    "Runs test planning and execution on client engagements, and owns the defect triage your team sees day to day.",
};

const raginiKumari: ServiceTeamPerson = {
  name: "Ragini Kumari",
  role: "QA Specialist",
  linkedin: "https://www.linkedin.com/in/raginikumari90/",
  src: "/ragini-kumari.webp",
  blurb:
    "Specialises in e-learning platforms and user-experience testing — the cases where a build passes every check and still frustrates the person using it.",
};

const cezzaneKhan: ServiceTeamPerson = {
  name: "Cezzane Khan",
  role: "AI Engineer & Test Lead",
  linkedin: "https://www.linkedin.com/in/cezzane-khan/",
  src: "/cezzane-khan.jpeg",
  // Trimmed from the copy supplied with the request: the original ran ~210
  // characters against a ~110-150 house length, which stretched all three
  // cards in the row. The four test categories are the substance and are kept;
  // the closing example ("three different answers to the same question") is
  // what went.
  blurb:
    "Builds and runs the adversarial test suites for LLM and AI agent systems prompt injection, hallucination, bias, and the consistency checks that catch a model contradicting itself.",
};

const aakashYadav: ServiceTeamPerson = {
  name: "Aakash Yadav",
  role: "QA lead & business strategy manager",
  linkedin: "https://www.linkedin.com/in/aakashyadav9890/",
  src: "/aakash-yadav.webp",
  blurb:
    "Works on the tooling and automation side how a suite is built so it still runs cleanly a year later.",
};

/** General QA roster. Used by /saas-testing-services and any page that omits the prop. */
const DEFAULT_TEAM: ServiceTeamPerson[] = [poojaKatkar, raginiKumari, aakashYadav];

/** AI/LLM roster. Used by /ai-application-testing and /quality-assurance-services. */
export const AI_TEAM: ServiceTeamPerson[] = [poojaKatkar, cezzaneKhan, aakashYadav];

interface ServiceTeamSectionProps {
  /** Defaults to DEFAULT_TEAM. Keep it at three people — the grid is md:grid-cols-3. */
  people?: ServiceTeamPerson[];
}

const ServiceTeamSection: React.FC<ServiceTeamSectionProps> = ({
  people = DEFAULT_TEAM,
}) => {
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
                className="rounded-full object-cover  w-[88px] h-[88px] mb-4"
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
