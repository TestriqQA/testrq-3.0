// "What is DPDP technical readiness testing?" — Part 5 of the source document.
//
// The three-layer table is the most important block on the page for trust: it
// states plainly which layer Testriq occupies and which two it does not. The
// source document makes this a hard requirement, since the surrounding market
// sells legal interpretation and governance, and a QA firm implying it does
// those would be both wrong and a liability.
import React from "react";
import Link from "next/link";

const layers = [
  {
    layer: "Legal interpretation",
    who: "Lawyers and privacy counsel",
    example: "Does the Act apply to us? Which obligations?",
    ours: false,
  },
  {
    layer: "Privacy governance",
    who: "Your DPO, compliance team",
    example: "Policies, contracts, training, records",
    ours: false,
  },
  {
    layer: "Technical verification",
    who: "Testriq (QA)",
    example:
      "Does consent withdrawal really stop processing? Does deletion reach every system?",
    ours: true,
  },
];

const DPDPWhatIsSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is DPDP technical readiness testing?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            DPDP technical readiness testing is a structured set of tests that
            checks whether specific application behaviours and security controls
            work as intended for the privacy obligations your team has
            identified.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It is one layer of a wider effort:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Layer</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Who does it</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Example</th>
              </tr>
            </thead>
            <tbody>
              {layers.map(({ layer, who, example, ours }) => (
                <tr
                  key={layer}
                  className={`border-t border-gray-200 ${ours ? "bg-blue-50" : ""}`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                    {layer}
                  </td>
                  <td
                    className={`px-6 py-4 align-top ${ours ? "text-brand-blue font-semibold" : "text-gray-700"}`}
                  >
                    {who}
                  </td>
                  <td className="px-6 py-4 text-gray-700 align-top">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-8 max-w-3xl leading-relaxed">
          We work with the requirements your legal or privacy team provides, and
          can map tests to the relevant DPDP Rules. Where interpretation is
          needed, we flag it rather than guess. The testing itself draws on our{" "}
          <Link href="/cyber-security-testing-services" className="text-brand-blue hover:underline">
            security testing
          </Link>{" "}
          and{" "}
          <Link href="/automation-testing-services" className="text-brand-blue hover:underline">
            test automation
          </Link>{" "}
          practices.
        </p>
      </div>
    </section>
  );
};

export default DPDPWhatIsSection;
