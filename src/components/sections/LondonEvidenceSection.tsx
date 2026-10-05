// Server Component.
//
// Two trust blocks that must stay honest, for different reasons.
//
// "Work relevant to UK teams": Phyllo and Canva are real engagements with
// existing case-study pages, and neither is a UK client. The copy therefore
// says what the work was and stops — it must not be reworded to imply UK client
// experience. When a named UK reference is cleared for publication, add it here
// rather than stretching these two.
//
// "Independent reviews": counts and the average are DERIVED from
// qaOutsourcingReviews — the repo's one verified-review source, transcribed from
// the live platforms — instead of being retyped here. Hardcoding them would give
// the site two numbers for the same fact, and the stale one always wins an
// argument with a buyer. Note the second platform is G2, not GoodFirms: the
// GoodFirms review was excluded because GoodFirms itself marked the reviewer
// unverifiable (see the header comment in reviewsData.ts).
//
// No aggregateRating schema is emitted for these. A rating shown on a page but
// sourced from third-party profiles is not eligible for self-serving rich
// results, and the page.tsx Service entity deliberately omits it.
import Link from "next/link";
import React from "react";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { qaOutsourcingReviews } from "@/app/(services)/qa-outsourcing-services/reviewsData";

const CLUTCH_PROFILE = "https://clutch.co/profile/testriq-qa-lab";

const clutchReviews = qaOutsourcingReviews.filter((r) => r.source === "Clutch");
const g2Reviews = qaOutsourcingReviews.filter((r) => r.source === "G2");

// Prose spells out small numbers ("six reviews", not "6 reviews"), but the
// counts are still derived rather than typed, so they cannot go stale. Falls
// back to the numeral above nine.
const SPELLED = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const spell = (n: number) => SPELLED[n] ?? String(n);

const clutchAverage = (
  clutchReviews.reduce((sum, r) => sum + r.rating, 0) / clutchReviews.length
).toFixed(1);

const WORK: { client: string; href: string; detail: string }[] = [
  {
    client: "Phyllo",
    href: "/phyllo-case-study",
    detail:
      "we designed a testing strategy for an evolving API ecosystem, aimed at more reliable releases and less debugging time.",
  },
  {
    client: "Canva",
    href: "/canva-design-platform",
    detail: "release testing for major interface updates across platforms.",
  },
];

const LondonEvidenceSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Work relevant to <span className="text-brand-blue">UK teams</span>
          </h2>
          <ul className="space-y-4">
            {WORK.map((item) => (
              <li
                key={item.client}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-700"
              >
                <Link href={item.href} className="font-semibold text-brand-blue hover:underline">
                  {item.client}
                </Link>
                : {item.detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Independent <span className="text-brand-blue">reviews</span>
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-gray-700">
              You can check what clients say about us outside our own site:{" "}
              <Link
                href={CLUTCH_PROFILE}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-brand-blue hover:underline inline-flex items-center gap-1"
              >
                {spell(clutchReviews.length)} reviews on Clutch
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </Link>
              , currently averaging {clutchAverage} out of 5, and{" "}
              {spell(g2Reviews.length)} on G2. The reviewers so far are based in India,
              Portugal and Australia.
            </p>
            <p
              className="text-gray-600 text-sm mt-4 flex items-center gap-2"
              aria-label={`Average Clutch rating ${clutchAverage} out of 5`}
            >
              <FaStar className="text-yellow-500" aria-hidden="true" />
              {clutchAverage} / 5 on Clutch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LondonEvidenceSection;
