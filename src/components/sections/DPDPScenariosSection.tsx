// "Technical testing scenarios (examples)" — Part 5 of the source document.
//
// This table is the single strongest differentiator identified in the
// competitor audit: all four audited DPDP pages describe services, none show
// what an actual test looks like. Keeping the "looks for" column is the point —
// it demonstrates testing rather than asserting it.
import React from "react";

const scenarios = [
  {
    area: "Consent capture",
    test: "Accept only “service” purpose; monitor network calls",
    looksFor: "Marketing or analytics calls despite no consent",
  },
  {
    area: "Consent withdrawal",
    test: "Withdraw in settings; repeat actions; check backend flags",
    looksFor: "Processing continuing after withdrawal",
  },
  {
    area: "Notice",
    test: "Open notice on small screen and in each supported language",
    looksFor: "Missing itemised data or purposes; unreadable layout",
  },
  {
    area: "Access and correction",
    test: "Request own data, correct a field",
    looksFor: "Wrong data returned, change not propagated",
  },
  {
    area: "Erasure",
    test: "Delete an account; query every store and integration",
    looksFor: "Residual personal data",
  },
  {
    area: "Retention",
    test: "Trigger scheduled erasure; check pre-notice and retained logs",
    looksFor: "Early deletion of data that must be kept, or late deletion",
  },
  {
    area: "API access control",
    test: "Change record IDs and roles in requests",
    looksFor: "Access to other users’ personal data",
  },
  {
    area: "Test environments",
    test: "Scan staging databases and logs",
    looksFor: "Real personal data in non-production",
  },
  {
    area: "Third parties",
    test: "Record outbound calls on key journeys",
    looksFor: "Unknown recipients of personal data",
  },
  {
    area: "Breach workflow",
    test: "Simulate an alert; time the steps to a draft notice",
    looksFor: "Missing owners, delays, incomplete information",
  },
  {
    area: "Release safety",
    test: "Re-run privacy tests on each build",
    looksFor: "Regressions after updates",
  },
];

const DPDPScenariosSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical testing scenarios
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            These show the level of detail you can expect. Scenarios are
            tailored to your product.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-left border-collapse min-w-[48rem]">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Area</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Example test</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900">Looks for</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map(({ area, test, looksFor }) => (
                <tr key={area} className="border-t border-gray-200 hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                    {area}
                  </td>
                  <td className="px-6 py-4 text-gray-700 align-top">{test}</td>
                  <td className="px-6 py-4 text-gray-700 align-top">{looksFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-8 max-w-3xl leading-relaxed border-l-4 border-brand-blue pl-5 py-1">
          A technical test result is not a legal determination. A pass means a
          defined behaviour worked in the tested conditions. It does not mean
          the organisation meets every obligation under the Act.
        </p>
      </div>
    </section>
  );
};

export default DPDPScenariosSection;
