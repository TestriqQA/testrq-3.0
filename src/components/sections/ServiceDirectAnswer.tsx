// Server Component. Block 1 of the service-page content template — the direct
// answer, rendered directly under the hero.
//
// It is a Server Component on purpose: the whole point is that the text sits in
// the initial HTML, where an answer engine that does not execute JavaScript can
// still read it. Rendering this client-side would defeat the ticket.
//
// The question is an <h2>, so on pages that had no "What is X?" heading the
// page outline now opens with one — matching the pages that already do this
// well (cyber-security, security-testing, qa-outsourcing) rather than inventing
// a new convention.
//
// No JSON-LD here. The answer restates what the page already says in prose, and
// there is no schema type for "the definition of this service" that Google
// renders; FAQPage would be a misuse, since this is not a Q&A section a visitor
// can interact with. Visible text is the whole deliverable.
import React from "react";

import { directAnswerFor } from "@/lib/seo/service-direct-answers";

interface ServiceDirectAnswerProps {
  /** The page's own slug, e.g. "api-testing". */
  slug: string;
}

const ServiceDirectAnswer: React.FC<ServiceDirectAnswerProps> = ({ slug }) => {
  const entry = directAnswerFor(slug);
  // Pages whose hero already opens with a direct answer have no entry, and
  // render nothing — a second answer under the first would read as a stutter.
  if (!entry) return null;

  return (
    <section
      aria-labelledby={`direct-answer-${slug}`}
      className="bg-white px-8 pt-10 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <h2
          id={`direct-answer-${slug}`}
          className="text-xl font-bold text-gray-900 md:text-2xl"
        >
          {entry.question}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gray-700 md:text-lg">
          {entry.answer}
        </p>
      </div>
    </section>
  );
};

export default ServiceDirectAnswer;
