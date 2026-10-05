// Server Component — no interactive APIs, so it ships no client JS.
//
// Same byline pattern as LondonHeroSection, and the same reviewer, so the two
// geo landing pages attribute to one person rather than inventing a second.
// LAST_REVIEWED is a constant, not new Date(): a build-time date would claim
// "updated today" on every deploy, the false-freshness signal sitemap.ts
// deliberately removed with STATIC_LASTMOD.
//
// The opening paragraph says plainly that there is no New York office. That is
// the honest version of a geo page for a Mumbai-based supplier, and it is also
// why this page can be a Service with areaServed rather than a LocalBusiness —
// see the schema note in page.tsx.
import Link from "next/link";
import React from "react";
import { FaHome, FaChevronRight, FaMoon } from "react-icons/fa";

export const LAST_REVIEWED_ISO = "2026-10-05";
export const LAST_REVIEWED_DISPLAY = "5 October 2026";
export const REVIEWER = { name: "Pooja Katkar", credential: "Test Lead" };

const NewYorkHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-sm font-medium text-gray-600">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                <FaHome className="text-lg" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaChevronRight className="text-xs text-gray-400" aria-hidden="true" />
              <Link href="/locations-we-serve" className="hover:text-brand-blue transition-colors">
                Locations We Serve
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaChevronRight className="text-xs text-gray-400" aria-hidden="true" />
              <span className="text-brand-blue" aria-current="page">New York</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
            <FaMoon className="mr-2" aria-hidden="true" />
            Overnight QA for US Teams
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Software Testing and QA Services for New York Teams
          </h1>

          <p className="text-lg text-gray-700">
            Testriq&rsquo;s QA engineers work from Mumbai, which puts most of their
            working day in New York&rsquo;s night. For a New York engineering team
            that is the point: a build that lands in the evening is tested, triaged
            and written up before the morning stand-up. We have no New York office.
            Delivery is remote and overnight, with a live overlap only where we
            agree one.
          </p>

          <p className="text-sm text-gray-600 border-t border-gray-200 pt-4">
            Last updated:{" "}
            <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_DISPLAY}</time>
            {" · "}
            Reviewed by{" "}
            <Link href="/our-team" className="text-brand-blue hover:underline">
              {REVIEWER.name}
            </Link>
            , {REVIEWER.credential}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewYorkHeroSection;
