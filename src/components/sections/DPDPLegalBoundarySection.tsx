// "Technical testing is not legal compliance" — Part 5 of the source document.
//
// The source lists an honest "what testing cannot prove" section as one of four
// gaps to win against the audited competitors, one of which promises a "100%
// first-attempt audit pass rate" and compliance "in 8 weeks". Stating the limit
// plainly is both the ethical position and the differentiator, and on a
// legal-adjacent topic it is what E-E-A-T rewards.
import React from "react";
import { FaBalanceScale } from "react-icons/fa";

const outOfScope = [
  "Legal interpretation of the Act and which obligations apply to you",
  "Notices, contracts and vendor arrangements",
  "Governance, records and training",
  "Cross-border transfer questions",
  "Whether your organisation is a Significant Data Fiduciary",
];

const DPDPLegalBoundarySection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <FaBalanceScale className="text-2xl text-blue-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical testing is not legal compliance
          </h2>
        </div>

        <p className="text-lg text-blue-50 leading-relaxed mb-6">
          Technical testing can show how an application behaves in defined
          situations, and whether specific controls work. It cannot, on its own,
          show that an organisation meets every obligation under the DPDP Act.
          The following need qualified legal or privacy professionals:
        </p>

        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
          {outOfScope.map((item) => (
            <li
              key={item}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-blue-50"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg text-white leading-relaxed">
          Testriq works alongside your counsel and DPO. Think of it as the
          engineering check on what they decide.
        </p>
      </div>
    </section>
  );
};

export default DPDPLegalBoundarySection;
