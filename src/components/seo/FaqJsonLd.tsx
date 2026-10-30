// FAQPage JSON-LD emitted from the SAME array the surrounding component
// renders, so the markup cannot describe questions the page does not show.
//
// WHY THIS EXISTS
// ---------------
// An audit of all 63 service pages compared each page's FAQPage markup against
// its server-rendered HTML. Only 16 matched. On 16 others the schema and the
// page had drifted apart outright — /application-architecture-inspection-services
// advertised "What is application architecture inspection?" while the page
// rendered "What is an application architecture inspection?", and the schema
// carried 2 questions where the component had 4.
//
// The cause was structural, not careless: the questions lived in the FAQ
// component while the schema was built from a second copy somewhere else — a
// page-local array, a hand-written `*FAQSchema` constant, or a FAQPage node
// nested inside a larger service schema. Two copies of the same content drift
// as soon as either is edited, and nothing failed when they did.
//
// Rendering the schema from the component's own array removes the second copy.
//
// This is not a "use client" module, so it stays usable from both server
// components and the client-side FAQ accordions that import it.
import React from "react";

export interface FaqJsonLdEntry {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  /** The same array the component renders. Order is preserved. */
  faqs: readonly FaqJsonLdEntry[];
}

/**
 * Inline rather than via next/script, matching StructuredData.tsx: an inline
 * data script has to be in the SSR payload to be parsed on the first request,
 * before any JavaScript runs.
 */
export default function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
