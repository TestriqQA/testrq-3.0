import Link from "next/link";
import {
  FaBolt,
  FaArrowRight,
  FaCircleCheck,
  FaShieldHalved,
} from "react-icons/fa6";

export default function LLMQAHeroSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-10 pb-16 md:pt-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[theme(color.brand.blue)]/30 bg-[theme(color.brand.blue)]/10 px-3 py-1 text-xs font-medium text-[theme(color.brand.blue)]">
              <FaBolt />
              <span>
                v0.4 · Multi-turn red-team suite + GitHub Actions gate now live
              </span>
            </div>

            <span className="block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mt-5">
              Test. Validate. Trust AI.
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-3">
              Ship LLM features you can{" "}
              <span className="text-[theme(color.brand.blue)]">
                actually vouch for.
              </span>
            </h1>

            <p className="text-lg text-gray-600 mt-5 max-w-xl">
              LLMQA stress-tests your chatbot across hallucination, jailbreaks,
              persona drift, bias, and compliance — then issues a signed
              certificate your customers can verify. Built for the team that has
              to answer for what the bot just said.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="https://llmqa.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[theme(color.brand.blue)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#057db0] transition-colors"
              >
                Start free — no card
                <FaArrowRight />
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              First complete test free · $200/test after that · Bring your own
              provider keys
            </p>
          </div>

          {/* RIGHT COLUMN — result card */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6 font-mono text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                run #482 · checkout-bot · main
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-1 text-xs font-semibold">
                <FaCircleCheck />
                PASS · cert issued
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <div className="text-xs uppercase text-gray-500">Accuracy</div>
                <div className="text-2xl font-bold text-green-600">98.2%</div>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <div className="text-xs uppercase text-gray-500">
                  Hallucination
                </div>
                <div className="text-2xl font-bold text-green-600">0.4%</div>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <div className="text-xs uppercase text-gray-500">Red team</div>
                <div className="text-2xl font-bold text-gray-900">147 / 150</div>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <div className="text-xs uppercase text-gray-500">
                  p95 latency
                </div>
                <div className="text-2xl font-bold text-gray-900">1.82s</div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">
              <div className="text-xs font-semibold uppercase">
                Multi-turn finding
              </div>
              <p className="mt-1">
                Turn 4: bot revealed system prompt after sympathetic user
                persona attack.
              </p>
              <p className="mt-1 text-xs">
                → remediation suggested · -2 pts persona
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <FaShieldHalved />
                <span>Cert · Ed25519</span>
              </div>
              <p className="mt-1">sig: 9d4f…b18c · valid until 2026-07-04</p>
              <p className="mt-1 text-[theme(color.brand.blue)]">
                verify: llmqa.ai/verify/482-9d4fb18c
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
