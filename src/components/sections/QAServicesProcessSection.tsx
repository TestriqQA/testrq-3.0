// Server Component.
import React from "react";

const steps = [
  {
    n: "01",
    name: "Discovery & test strategy",
    body:
      "We read the product, the backlog and the last three releases' defect history before proposing anything. The output is a written strategy: what gets automated, what stays manual, what is out of scope and why.",
    when: "Week 1",
  },
  {
    n: "02",
    name: "Test plan & environment setup",
    body:
      "Test cases traced to requirements, data sets prepared, and access to your environments, Jira and CI sorted out. This is the step that slips when it is not owned — so we own it.",
    when: "Week 1–2",
  },
  {
    n: "03",
    name: "Execution inside your sprint",
    body:
      "Our engineers work to your cadence and your definition of done. Defects land in your tracker with reproduction steps, environment, severity and evidence attached — not as a spreadsheet at the end of the week.",
    when: "Ongoing",
  },
  {
    n: "04",
    name: "Automation build-out",
    body:
      "Regression coverage is automated once it has stabilised, never before. Automating a test that is still changing costs more than running it by hand.",
    when: "From sprint 2",
  },
  {
    n: "05",
    name: "Reporting & release sign-off",
    body:
      "Coverage, pass rate, open defects by severity, and a clear go/no-go position for each release. Written so a product owner can act on it without a QA translation layer.",
    when: "Every release",
  },
  {
    n: "06",
    name: "Review & adjust",
    body:
      "Every few sprints we look at what escaped to production and change the strategy accordingly. A suite that never changes is a suite that stops finding things.",
    when: "Quarterly",
  },
];

const QAServicesProcessSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We <span className="text-brand-blue">Work</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The same six steps whether you engage us for one release or for a
            dedicated team. The timings below are typical, not contractual.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
          {steps.map((step) => (
            <li
              key={step.n}
              className="bg-white p-6 rounded-xl border border-gray-200 flex gap-5"
            >
              <span
                aria-hidden="true"
                className="text-brand-blue font-bold text-2xl leading-none flex-shrink-0 tabular-nums"
              >
                {step.n}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {step.when}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default QAServicesProcessSection;
