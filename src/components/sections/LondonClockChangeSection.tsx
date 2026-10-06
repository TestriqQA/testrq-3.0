// Server Component. Short on purpose — it exists to own a specific, searchable
// failure mode ("BST clock change broke our scheduled job") that no other page
// on the site answers, and to route that intent to /timezone-testing-services.
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa";

const LondonClockChangeSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaRegClock className="text-brand-blue shrink-0" aria-hidden="true" />
            Clock-change bugs
          </h2>
          <p className="text-lg text-gray-700">
            The UK clocks move on the last Sunday of March and the last Sunday of
            October. Scheduled jobs, booking slots, billing cut-offs and daily
            reports that assume a 24-hour day tend to fail on those two dates, and
            the failure often shows up a week later in a finance report. Our{" "}
            <Link href="/timezone-testing-services" className="text-brand-blue hover:underline">
              timezone testing
            </Link>{" "}
            exercises those dates before release.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LondonClockChangeSection;
