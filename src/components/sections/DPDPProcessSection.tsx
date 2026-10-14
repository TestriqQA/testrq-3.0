// "Our testing process" and "What you receive" — Part 5 of the source document.
//
// Kept in one section because the deliverable only makes sense as the output of
// the process that produced it, and the source's competitive gap analysis calls
// for "a defined deliverable with retest" rather than a vague promise.
//
// CONFIRM BEFORE PUBLISHING: step 6 (remediation support) and the deliverable
// list are both marked [INTERNAL CONFIRMATION REQUIRED] in the source.
import React from "react";

const steps = [
  {
    title: "Discovery and scope",
    body: "We agree which applications, environments, user roles and requirements are in scope.",
  },
  {
    title: "Data-flow understanding",
    body: "We trace personal data through the product with your engineers.",
  },
  {
    title: "Test planning and control mapping",
    body: "We turn the requirements you provide into test scenarios, mapped to the relevant DPDP Rules where you want that traceability.",
  },
  {
    title: "Test execution",
    body: "Manual and automated tests, including API and security testing.",
  },
  {
    title: "Findings and evidence",
    body: "Each result is documented with steps, screenshots, logs and severity.",
  },
  {
    title: "Remediation support (where agreed)",
    body: "We clarify defects with your developers.",
  },
  {
    title: "Retest and final report",
    body: "Fixed issues are retested and the final report records what changed.",
  },
];

const deliverables = [
  "Technical readiness findings by area",
  "Test scenarios and results (pass, fail, blocked) with evidence",
  "Defect list with risk-based priority",
  "Remediation recommendations",
  "Retest results",
  "A clear statement of scope, assumptions and limitations",
];

const DPDPProcessSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our testing process
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ol className="space-y-5">
              {steps.map(({ title, body }, i) => (
                <li key={title} className="flex gap-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-gray-700 mt-8 leading-relaxed">
              Where a finding depends on legal interpretation, we mark it for
              your legal or privacy specialist instead of deciding it ourselves.
            </p>
          </div>

          <aside className="bg-white border border-gray-200 rounded-xl p-7 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-2">What you receive</h3>
            <p className="text-sm text-gray-600 mb-5">
              Deliverables depend on the agreed scope.
            </p>
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 font-medium mt-6 pt-5 border-t border-gray-100">
              This is a technical test report. It is not a government-approved
              certificate.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DPDPProcessSection;
