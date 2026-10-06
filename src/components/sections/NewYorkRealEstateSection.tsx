// Server Component.
//
// The only US-market proof the site can actually point to, so it is stated
// precisely and linked to the case studies that carry it. The figures were
// checked against those pages before being repeated here:
//   - Homefacts  "130M+ listings" / "130 million ... real estate listings"
//   - Brandify   "over 300 brands and 4.5 million physical locations"
// Do not round, inflate or re-attribute these. If a case study is edited, edit
// this section or drop the number.
//
// The Clutch line is deliberately narrow. Six reviews is verifiable from
// reviewsData.ts; the 2019-2025 engagement span comes from the review text on
// the live Clutch profile and is not reproducible from anything in this repo,
// so it is stated once, plainly, and not embellished.
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const CHECKS: { text: string; link?: { href: string; label: string } }[] = [
  { text: "Search and filter results that disagree with the underlying listing data" },
  { text: "Stale or duplicated listings after a data import" },
  { text: "Map and location search near neighbourhood and county boundaries" },
  {
    text: "Search speed at peak traffic, covered by ",
    link: { href: "/performance-testing-services", label: "performance testing" },
  },
];

const NewYorkRealEstateSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Real-estate and <span className="text-brand-blue">listings platforms</span>
        </h2>

        <div className="max-w-4xl space-y-5 text-gray-700">
          <p>
            Property-data platforms are the US-market work we can point to.{" "}
            <Link href="/home-facts-case-study" className="text-brand-blue hover:underline">
              Homefacts
            </Link>{" "}
            gives users access to more than 130 million US real estate listings,
            and{" "}
            <Link href="/realtytrac-case-study" className="text-brand-blue hover:underline">
              RealtyTrac
            </Link>{" "}
            covers foreclosure, pre-foreclosure, auction and bank-owned listings.
            Platforms like these fail in predictable places, so these are the
            checks we run:
          </p>

          <ul className="space-y-3">
            {CHECKS.map((c) => (
              <li key={c.text} className="flex gap-3">
                <FaCheck className="text-brand-blue mt-1 shrink-0" aria-hidden="true" />
                <span>
                  {c.text}
                  {c.link && (
                    <Link href={c.link.href} className="text-brand-blue hover:underline">
                      {c.link.label}
                    </Link>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p>
            A third data-heavy example is{" "}
            <Link href="/brandify-case-study" className="text-brand-blue hover:underline">
              Brandify
            </Link>
            , a marketing platform serving 300+ brands across 4.5 million physical
            locations.
          </p>

          <p>
            Long engagements are part of the record too. On{" "}
            <Link
              href="https://clutch.co/profile/testriq-qa-lab"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-brand-blue hover:underline"
            >
              Clutch
            </Link>
            , where we hold six client reviews, one reviewer (a head of QA at a
            software company in Australia) describes regression and functional
            testing work that ran from 2019 to 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewYorkRealEstateSection;
