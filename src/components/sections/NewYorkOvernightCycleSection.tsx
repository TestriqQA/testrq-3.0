// Server Component.
//
// The whole proposition of this page in one block: what happens to a build
// between a New York evening and a New York morning. An ordered list because
// the sequence is the content.
//
// The daylight-time caveat is kept visible rather than buried. India does not
// observe DST, so the offset to New York changes twice a year — stating it here
// stops the schedule reading as a promise that silently breaks each November.
import React from "react";

const CYCLE: { time: string; detail: string }[] = [
  {
    time: "5:00 pm ET",
    detail:
      "Your CI publishes the build. The automated regression and API suites we maintain in your pipeline run at once.",
  },
  {
    time: "12:00 am ET",
    detail:
      "Mumbai’s working day begins (9:30 am IST). Engineers review every failure, separate real defects from flaky tests, and verify fixes.",
  },
  {
    time: "12:00–6:00 am ET",
    detail:
      "Manual and exploratory passes on the riskiest changes in the release. Performance runs are scheduled off-peak so they do not compete with your traffic.",
  },
  {
    time: "7:00–8:00 am ET",
    detail:
      "Defects, evidence and a go or no-go summary are posted in your tracker.",
  },
  {
    time: "9:00 am ET",
    detail: "Your stand-up starts with the results already in hand.",
  },
];

const NewYorkOvernightCycleSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          An overnight test cycle for{" "}
          <span className="text-brand-blue">New York releases</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-4xl">
          Times are US daylight time. In winter, India&rsquo;s day shifts one hour
          earlier on New York&rsquo;s clock.
        </p>

        <ol className="max-w-4xl space-y-4">
          {CYCLE.map((step) => (
            <li
              key={step.time}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 bg-gray-50 border border-gray-200 rounded-xl p-5"
            >
              <span className="font-semibold text-brand-blue whitespace-nowrap sm:w-40 shrink-0">
                {step.time}
              </span>
              <p className="text-gray-700">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default NewYorkOvernightCycleSection;
