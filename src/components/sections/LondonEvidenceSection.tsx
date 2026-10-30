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
// "Independent reviews": the counts, the rating and the profile link all come
// from `reviewPlatforms` in reviewsData.ts, never retyped here. Two numbers for
// the same fact is how this went wrong once already — until 2026-10-29 these
// were derived from the transcribed REVIEWS instead, which counted only the six
// Clutch and two G2 reviews copied into the repo and so understated both
// platforms (Clutch publishes 8, G2 4). Derived-but-from-the-wrong-set reads
// exactly like a correct number, which is what made it survive. Note the second
// platform is G2, not GoodFirms: the GoodFirms review was excluded because
// GoodFirms itself marked the reviewer unverifiable (see reviewsData.ts).
//
// No aggregateRating schema is emitted for these. A rating shown on a page but
// sourced from third-party profiles is not eligible for self-serving rich
// results, and the page.tsx Service entity deliberately omits it.
import Link from "next/link";
import React from "react";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { platform, spellCount } from "@/app/(services)/qa-outsourcing-services/reviewsData";

const clutch = platform("Clutch");
const g2 = platform("G2");

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
                href={clutch.profileUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-brand-blue hover:underline inline-flex items-center gap-1"
              >
                {spellCount(clutch.count)} reviews on Clutch
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </Link>
              , currently averaging {clutch.rating} out of 5, and{" "}
              {/* Linked too, so the sentence's own promise — that you can go and
                  check — holds for both platforms rather than just the first. */}
              <Link
                href={g2.profileUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-brand-blue hover:underline inline-flex items-center gap-1"
              >
                {spellCount(g2.count)} on G2
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </Link>
              {/* "Reviewers include" rather than the old "the reviewers so far
                  are based in", which claimed to account for ALL of them. It was
                  already a stretch over eight transcribed reviews (the two G2
                  ones state no location) and is plainly wrong over the twelve
                  the platforms actually hold. These three are the ones a visitor
                  can see named on /qa-outsourcing-services. */}
              . Reviewers include teams in India, Portugal and Australia.
            </p>
            <p
              className="text-gray-600 text-sm mt-4 flex items-center gap-2"
              aria-label={`Average Clutch rating ${clutch.rating} out of 5`}
            >
              <FaStar className="text-yellow-500" aria-hidden="true" />
              {clutch.rating} / 5 on Clutch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LondonEvidenceSection;
