// Server Component. Block 10 of the service-page content template — the
// specific CTA, rendered as the last block on the page.
//
// Server-rendered for the same reason as the direct answer: the offer should be
// in the initial HTML, not assembled after hydration.
//
// It does NOT replace the generic CTA section each page already ends with.
// Those live in a dozen dedicated components and roughly fifty inline blocks,
// and rewriting them is a copy decision rather than a template one; see the
// note in src/lib/seo/service-ctas.ts. This sits after them so the specific
// offer is the last thing read.
import Link from "next/link";
import React from "react";

import { ctaFor } from "@/lib/seo/service-ctas";

interface ServiceCtaProps {
  /** The page's own slug, e.g. "api-testing". */
  slug: string;
}

const ServiceCta: React.FC<ServiceCtaProps> = ({ slug }) => {
  const cta = ctaFor(slug);
  if (!cta) return null;

  return (
    <section
      aria-labelledby={`service-cta-${slug}`}
      className="bg-white px-8 py-14 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center md:p-10">
        <h2
          id={`service-cta-${slug}`}
          className="text-2xl font-bold text-white md:text-3xl"
        >
          {cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-50 md:text-lg">
          {cta.line}
        </p>
        <Link
          href="/contact-us"
          className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
        >
          {cta.button}
        </Link>
      </div>
    </section>
  );
};

export default ServiceCta;
