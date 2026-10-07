// Server Component.
//
// An ordered list, not a decorative stepper: the sequence is the content, and
// <ol> is what makes it legible to a screen reader and extractable as a
// step-by-step answer. Day labels live in <dt>-style spans inside each <li> so
// the numbering stays semantic rather than being faked with styled divs.
import Link from "next/link";
import React from "react";

const STEPS: { day: string; detail: string }[] = [
  {
    day: "Day 1",
    detail:
      "Kick-off call at 10:00 UK time, inside our overlap. We agree the release calendar, environments, access and which UK requirements apply.",
  },
  {
    day: "Days 2–3",
    detail:
      "Risk review of the product. You receive a written test approach to sign off.",
  },
  {
    day: "Days 4–8",
    detail:
      "We build the first automated regression and API suites in your repository and CI, and run exploratory sessions on the highest-risk journeys.",
  },
  {
    day: "Day 9",
    detail:
      "First full run against your staging build. Defects go into your tracker with reproduction steps.",
  },
  {
    day: "Day 10",
    detail:
      "Written report and a 30-minute review call covering what passed, what failed and what we recommend before release.",
  },
];

const LondonFirstTwoWeeksSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          A typical first two weeks with a{" "}
          <span className="text-brand-blue">London team</span>
        </h2>

        <ol className="max-w-4xl space-y-5">
          {STEPS.map((step, i) => (
            <li
              key={step.day}
              className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5"
            >
              <span
                aria-hidden="true"
                className="shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white font-semibold flex items-center justify-center"
              >
                {i + 1}
              </span>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">{step.day}:</span>{" "}
                {step.detail}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-gray-700 mt-8 max-w-4xl">
          Fixed-scope bundle prices are on the{" "}
          <Link href="/pricing" className="text-brand-blue hover:underline">
            pricing page
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default LondonFirstTwoWeeksSection;
