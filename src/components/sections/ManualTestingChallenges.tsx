// Server Component.
//
// Added 2026-11-04 — the brief's Section 2. It sits between the hero and the
// service list: what is going wrong, then what we do about it.
//
// The page had nothing in this slot. The nearest thing,
// ManualTestingComprehensiveSlider, is about conditions in the testing
// industry — automation adoption rates, hybrid QA roles — which is a different
// subject from the reader's own problem. A buyer arrives because something is
// already going wrong on their product, and a landing page that opens with
// market commentary asks them to care about our industry before we have shown
// we understand theirs.
//
// Each item names a failure a product team recognises and then says what we do
// about it. No item claims a result, a timeline or a percentage: this section
// is where overpromising would be easiest and least checkable, and the brief
// rules out unsupported SLA, availability and outcome claims. "We agree
// regression scope per sprint" is a commitment about process, which we can
// keep. "We cut your defect escape rate by 40%" would be a number we cannot
// evidence.
import React from "react";
import {
    FaLayerGroup,
    FaUserClock,
    FaBug,
    FaRedoAlt,
    FaObjectUngroup,
    FaShieldAlt,
} from "react-icons/fa";

interface Challenge {
    icon: React.ReactNode;
    problem: string;
    detail: string;
    response: string;
}

const CHALLENGES: Challenge[] = [
    {
        icon: <FaLayerGroup aria-hidden="true" />,
        problem: "Releases have outgrown the testing that used to cover them",
        detail:
            "More services, more integrations and more configurations mean the number of paths through the product grows faster than the team checking them.",
        response:
            "We map coverage to where the risk actually sits — the flows that carry revenue, data or a legal obligation — instead of testing everything equally thinly.",
    },
    {
        icon: <FaUserClock aria-hidden="true" />,
        problem: "QA capacity is the constraint, not developer capacity",
        detail:
            "Features are finished and waiting. Testing is done by whoever has an hour, which means it is done inconsistently and it is the first thing dropped when a deadline moves.",
        response:
            "Added capacity in the shape that fits: a dedicated team, an extension of your in-house QA, or engineers for a single release.",
    },
    {
        icon: <FaBug aria-hidden="true" />,
        problem: "Defects are reaching users that testing should have caught",
        detail:
            "Usually not because nobody tested, but because the cases were written from the same assumptions as the code, so both miss the same things.",
        response:
            "Independent test design, plus time-boxed exploratory sessions aimed squarely at what no written case anticipated.",
    },
    {
        icon: <FaRedoAlt aria-hidden="true" />,
        problem: "Regression testing expands until nobody can finish it",
        detail:
            "Every release adds cases and none are retired, so the suite becomes too slow to run fully and gets sampled informally instead — which is how old bugs return.",
        response:
            "A maintained regression pack with scope agreed per cycle, and a clear statement of what each cycle did and did not cover.",
    },
    {
        icon: <FaObjectUngroup aria-hidden="true" />,
        problem: "The product behaves differently depending on where it is used",
        detail:
            "Layout breaks on one browser, a flow behaves differently on Android, and the inconsistency is invisible to a team all working on the same setup.",
        response:
            "Compatibility and cross-browser coverage built from your own analytics, not an arbitrary device matrix, with defects recorded against the exact version they occur on.",
    },
    {
        icon: <FaShieldAlt aria-hidden="true" />,
        problem: "Nobody can say whether a release is safe to ship",
        detail:
            "The decision rests on whether the team feels confident, because the evidence is spread across tickets, threads and a spreadsheet somebody updated last week.",
        response:
            "A release-readiness summary before you ship: what was tested, what is still open, and the severity of each open item.",
    },
];

const ManualTestingChallenges: React.FC = () => {
    return (
        <section
            aria-labelledby="manual-testing-challenges-heading"
            className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-12">
                    <h2
                        id="manual-testing-challenges-heading"
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
                    >
                        Why Growing Product Teams Need{" "}
                        <span className="text-brand-blue">Expert Manual QA Testing</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        These are the six situations teams are usually in when they come to
                        us. If more than one sounds familiar, the problem is capacity and
                        structure rather than effort.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CHALLENGES.map((item) => (
                        <article
                            key={item.problem}
                            className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6"
                        >
                            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-lg text-brand-blue">
                                {item.icon}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                {item.problem}
                            </h3>
                            <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">
                                {item.detail}
                            </p>
                            <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-700">
                                <span className="font-semibold text-gray-900">
                                    How we help:{" "}
                                </span>
                                {item.response}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManualTestingChallenges;
