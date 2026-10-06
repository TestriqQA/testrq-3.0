// Server Component. Answers the first objection a UK buyer raises about an
// India-based supplier — "when are you actually online?" — with the arithmetic
// rather than a reassurance.
import React from "react";
import { FaGlobeEurope } from "react-icons/fa";

const LondonOverlapSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaGlobeEurope className="text-brand-blue shrink-0" aria-hidden="true" />
            Overlap with UK working hours
          </h2>
          <p className="text-lg text-gray-700">
            India Standard Time is 4&frac12; hours ahead of the UK during British
            Summer Time and 5&frac12; hours ahead for the rest of the year.
            India&rsquo;s working day therefore covers the UK morning and early
            afternoon. Stand-ups, defect triage and release-readiness calls fit
            inside that window, and anything we run before your day starts is
            waiting in your tracker when it does.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LondonOverlapSection;
