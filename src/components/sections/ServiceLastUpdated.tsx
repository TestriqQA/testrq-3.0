// Server Component. DEV-18 — the "last updated" line and its matching
// dateModified, both from one value.
//
// The date is read from src/lib/seo/service-page-dates.ts, which is maintained
// by hand; that file explains why a build date or a git commit date was not
// used. Because the visible line and the schema are rendered from the same
// lookup, a page cannot show one date and publish another.
//
// The property goes on a WebPage node rather than on the page's Service node:
// dateModified is defined on CreativeWork, and Service is not one, so putting
// it there would be invalid. The node carries its own @id so it does not
// collide with the Service and Organization nodes already on these pages.
//
// Rendered as <time dateTime="..."> to match the pattern
// CyberSecurityHeroSection already used before this ticket.
import React from "react";

import { formatReviewDate, reviewedOn } from "@/lib/seo/service-page-dates";

const SITE = "https://www.testriq.com";

interface ServiceLastUpdatedProps {
  /** The page's own slug, e.g. "automation-testing-services". */
  slug: string;
}

const ServiceLastUpdated: React.FC<ServiceLastUpdatedProps> = ({ slug }) => {
  const iso = reviewedOn(slug);
  // A page with no entry renders nothing at all, rather than inventing a date.
  if (!iso) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/${slug}#webpage`,
    url: `${SITE}/${slug}`,
    dateModified: iso,
  };

  return (
    <div className="bg-white pb-10 px-8 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        This page was last reviewed by the Testriq QA team on{" "}
        <time dateTime={iso}>{formatReviewDate(iso)}</time>.
      </p>
    </div>
  );
};

export default ServiceLastUpdated;
