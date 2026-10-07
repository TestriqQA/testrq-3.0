// Server Component.
//
// Native <details>/<summary> rather than a useState accordion: the answers are
// in the DOM on first paint for crawlers and AI answer engines, keyboard and
// screen-reader behaviour comes free from the browser, and the section ships
// zero client JS on a page whose whole job is to be read.
//
// `londonFaqs` is exported so page.tsx can build the FAQPage JSON-LD from the
// same array the page renders. Google requires the markup to match visible
// content, and generating both from one source makes drift impossible.
import React from "react";

export interface LondonFaq {
  q: string;
  a: string;
}

export const londonFaqs: LondonFaq[] = [
  {
    q: "Can staging run entirely on synthetic data?",
    a: "Yes. We generate synthetic records, or mask copies before they reach a test environment. If your data protection officer needs to approve any real data, we wait for that decision.",
  },
  {
    q: "Will you sign our NDA and data-processing agreement?",
    a: "Yes. We work under the NDA and data-processing terms your legal team supplies.",
  },
  {
    q: "Can you produce test evidence for an FCA or NHS audit?",
    a: "We produce traceable test cases, execution logs and defect records mapped to the requirements you give us. Whether that evidence satisfies a regulator is a judgement for your compliance team.",
  },
  {
    q: "Do you test banking apps that redirect to another app to authenticate?",
    a: "Yes, including the return journey into your app. We test it alongside negative cases such as a cancelled or timed-out authentication.",
  },
  {
    q: "Can you work inside our UK-hosted environments?",
    a: "Yes, over VPN or remote access as your security policy allows. Data stays in your environment.",
  },
];

const LondonFAQSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Questions UK buyers <span className="text-brand-blue">ask us</span>
        </h2>

        <div className="max-w-4xl space-y-4">
          {londonFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white border border-gray-200 rounded-xl p-5 open:shadow-sm"
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
              <p className="text-gray-700 mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonFAQSection;
