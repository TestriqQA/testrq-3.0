// Server Component.
//
// Native <details>/<summary>: answers are in the DOM on first paint for
// crawlers and answer engines, keyboard and screen-reader behaviour is the
// browser's, and the section ships no client JS.
//
// Each entry carries BOTH a plain-text `a` and an optional `aNode`. The schema
// helper requires plain text (createFaqPageSchema's contract), while two of
// these answers need inline links. The two are kept word-for-word identical so
// the visible answer and the FAQPage markup say the same thing — Google
// requires the markup to match visible content, and a link adds no text.
// If you edit one, edit the other.
import Link from "next/link";
import React from "react";

export interface NewYorkFaq {
  q: string;
  /** Plain text — this is what goes into FAQPage JSON-LD. */
  a: string;
  /** Optional rendered form with inline links. Must read identically to `a`. */
  aNode?: React.ReactNode;
}

export const newYorkFaqs: NewYorkFaq[] = [
  {
    q: "What happens if a failure appears at 3 am New York time?",
    a: "Automated failures are triaged when Mumbai's working day begins, at midnight ET. We do not page your engineers. Anything that blocks the release goes to the top of the morning summary.",
    aNode: (
      <>
        Automated failures are triaged when Mumbai&rsquo;s working day begins, at
        midnight ET. We do not page your engineers. Anything that blocks the
        release goes to the top of the morning summary.
      </>
    ),
  },
  {
    q: "Can you work inside our existing pipeline?",
    a: "Yes. We work in your issue tracker and CI, for example Jira with GitHub, GitLab CI, Jenkins or Azure DevOps.",
  },
  {
    q: "Do you test with production data?",
    a: "No. We use synthetic or masked data, which keeps customer and patient records out of test environments. See our test data management guide.",
    aNode: (
      <>
        No. We use synthetic or masked data, which keeps customer and patient
        records out of test environments. See our{" "}
        <Link
          href="/blog/post/test-data-management-in-software-testing"
          className="text-brand-blue hover:underline"
        >
          test data management guide
        </Link>
        .
      </>
    ),
  },
  {
    q: "How do US daylight-saving changes affect the schedule?",
    a: "India does not change its clocks, so the overnight window moves by one hour twice a year. We schedule against your New York calendar so your morning deadline stays fixed.",
  },
  {
    q: "Can we start with a single release instead of a long contract?",
    a: "Yes. A fixed-scope pilot around one release cycle lets you judge the results first. Prices for standard bundles are on the pricing page.",
    aNode: (
      <>
        Yes. A fixed-scope pilot around one release cycle lets you judge the
        results first. Prices for standard bundles are on the{" "}
        <Link href="/pricing" className="text-brand-blue hover:underline">
          pricing page
        </Link>
        .
      </>
    ),
  },
];

const NewYorkFAQSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Questions New York teams <span className="text-brand-blue">ask us</span>
        </h2>

        <div className="max-w-4xl space-y-4">
          {newYorkFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-gray-50 border border-gray-200 rounded-xl p-5 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-start justify-between gap-4">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="text-brand-blue shrink-0 transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="text-gray-700 mt-3">{faq.aNode ?? faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewYorkFAQSection;
