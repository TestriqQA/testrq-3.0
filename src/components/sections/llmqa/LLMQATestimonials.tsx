import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "We were running a Python script and a Notion doc as our “QA pipeline.” LLMQA replaced both in an afternoon — the multi-turn suite caught two persona regressions our manual sweeps had missed for weeks.",
    role: "Staff ML Engineer",
    company: "Series B fintech",
  },
  {
    quote:
      "The signed certificate is the thing. We hand it to procurement and the conversation ends. No more 30-question security review every six months.",
    role: "Head of AI",
    company: "Healthcare SaaS",
  },
  {
    quote:
      "I plugged the GitHub Action into our monorepo on a Friday. By Monday we had three PRs blocked on real safety regressions that would have shipped otherwise.",
    role: "Engineering Manager",
    company: "Developer-tools startup",
  },
];

export default function LLMQATestimonials() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            What our early users say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Engineers who used to sleep poorly. Engineers who now{" "}
            <span className="text-[theme(color.brand.blue)]">ship</span>.
          </h2>
          <p className="text-sm text-gray-500">
            These are real quotes from early customers, kept anonymous at their
            request. We will swap in named, logo’d quotes as they roll out
            publicly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.role}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="text-[theme(color.brand.blue)] text-2xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 flex-1">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{t.role}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
