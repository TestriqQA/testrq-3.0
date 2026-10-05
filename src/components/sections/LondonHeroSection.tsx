// Server Component — no interactive APIs, so it ships no client JS.
//
// The byline and "last updated" date are a deliberate E-E-A-T signal: this page
// targets regulated UK buyers (Open Banking, NHS, FCA evidence) who check who
// stands behind the claims. Pooja Katkar is the same Test Lead named on
// /quality-assurance-services, /saas-testing-services and /ai-application-testing,
// so the attribution is consistent across the site rather than invented per page.
//
// LAST_REVIEWED is a plain constant rather than new Date(): a build-time date
// would advertise "updated today" on every deploy, which is the same false
// freshness signal sitemap.ts deliberately removed with STATIC_LASTMOD. Bump it
// when the copy actually changes.
import Link from "next/link";
import React from "react";
import { FaHome, FaChevronRight, FaCheckDouble } from "react-icons/fa";

export const LAST_REVIEWED_ISO = "2026-10-05";
export const LAST_REVIEWED_DISPLAY = "5 October 2026";
export const REVIEWER = { name: "Pooja Katkar", credential: "Test Lead" };

const LondonHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
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
              <span className="text-brand-blue" aria-current="page">London</span>
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
            <FaCheckDouble className="mr-2" aria-hidden="true" />
            ISTQB-Certified QA Engineers
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Software Testing and QA Services for London Teams
          </h1>

          <p className="text-lg text-gray-700">
            Testriq provides software testing services to teams in London and across
            the UK, supported by our Mumbai-based team of ISTQB-certified engineers.
            We work remotely and collaborate with your team during overlapping
            business hours, including sprint calls and regular project discussions.
            This page covers what UK teams ask us to test, what the first two weeks
            look like, and where our responsibilities begin and end.
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

export default LondonHeroSection;
