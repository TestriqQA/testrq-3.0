import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function LLMQAFinalCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-br from-[theme(color.brand.blue)] to-[#057db0]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Ship LLM features you can actually vouch for.
          </h2>
          <p className="text-white/85 text-lg mt-4">
            Run your first complete test free — all 9 dimensions, a full
            multi-judge panel, and a signed certificate. No card, no time-bomb.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="https://llmqa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[theme(color.brand.blue)] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start free — no card
              <FaArrowRight />
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-5">
            First complete test free · $200/test after that · Bring your own
            provider keys
          </p>
        </div>
      </div>
    </section>
  );
}
