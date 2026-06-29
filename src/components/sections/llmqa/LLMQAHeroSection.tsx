import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaArrowRight } from "react-icons/fa6";
import LLMQAConsole from "./LLMQAConsole";

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
              <Image
                src="/llmqa-logo.png"
                alt="LLMQA"
                width={768}
                height={176}
                priority
                className="inline-block h-[1.35em] w-auto align-[-0.25em]"
              />{" "}
              stress-tests your chatbot across hallucination, jailbreaks,
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

          {/* RIGHT COLUMN — animated "watch it run" console */}
          <LLMQAConsole />
        </div>
      </div>
    </section>
  );
}
