import {
  FaGhost,
  FaScaleBalanced,
  FaShieldHalved,
  FaUserSecret,
  FaMasksTheater,
  FaClipboardCheck,
  FaGaugeHigh,
  FaGraduationCap,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const dimensions = [
  {
    icon: FaGhost,
    title: "Hallucination",
    question: "Is it inventing facts your customers will trust?",
    description:
      "Detect ungrounded claims, fabricated citations, and confident-but-wrong answers. We score factuality against your source-of-truth corpus and flag risky novel assertions.",
  },
  {
    icon: FaScaleBalanced,
    title: "Bias & fairness",
    question: "Does it treat every user the same?",
    description:
      "Counterfactual prompts swap names, pronouns, locations, and demographics to surface uneven treatment, stereotyping, and refusals that only apply to some groups.",
  },
  {
    icon: FaShieldHalved,
    title: "Security & safety",
    question: "Will it say something that ends up in a screenshot?",
    description:
      "Hardened prompts cover prompt injection, PII exposure, self-harm, hate, sexual content, regulated advice, and brand-damaging output. Severity-tiered so you can ship without burying every minor finding.",
  },
  {
    icon: FaUserSecret,
    title: "Red team & jailbreak",
    question: "Holds up against adversarial users.",
    description:
      "Thousands of single- and multi-turn jailbreak prompts, prompt-injection patterns, and role-play attacks — including slow-grooming exploits that only trigger after turn three.",
  },
  {
    icon: FaMasksTheater,
    title: "Persona consistency",
    question: "Stays on-brand under pressure.",
    description:
      "Verify your bot stays in voice, refuses out-of-scope requests, and never claims to be a human when asked. Multi-turn checks catch drift that single-shot evals miss entirely.",
  },
  {
    icon: FaClipboardCheck,
    title: "Compliance",
    question: "Audit-ready, by default.",
    description:
      "Configurable rule packs for GDPR, HIPAA, SOC 2, EU AI Act, and your own policy. Every result is timestamped, signed, and exportable as a tamper-evident PDF.",
  },
  {
    icon: FaGaugeHigh,
    title: "Performance",
    question: "Fast enough to feel like magic.",
    description:
      "Track p50/p95/p99 latency and time-to-first-token across models and prompt versions. Surface cost-per-conversation alongside quality so trade-offs are explicit.",
  },
  {
    icon: FaGraduationCap,
    title: "Domain expertise",
    question: "Knows your industry, stays in scope.",
    description:
      "Verify the bot speaks your domain — terminology, regulations, escalation paths — and politely declines requests outside of it. Industry templates seed the suite; rubrics tune it to your exact use case.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Tool & function calling",
    question: "Picks the right tool, with the right arguments.",
    description:
      "Validate that agents invoke the correct OpenAI / Anthropic / MCP function with arguments that match your schema. Catches silent regressions when tool definitions or model versions change.",
  },
];

export default function LLMQADimensions() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            The platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            9 evaluation dimensions.{" "}
            <span className="text-[theme(color.brand.blue)]">
              One signed certificate.
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Every starter suite ships covering all 9 dimensions. Tune the
            weights, swap the rubrics, or write your own — but never trust a
            single-number leaderboard score again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dimensions.map((dimension) => {
            const Icon = dimension.icon;
            return (
              <div
                key={dimension.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[theme(color.brand.blue)]/10 text-[theme(color.brand.blue)] flex items-center justify-center text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {dimension.title}
                </h3>
                <p className="text-sm italic text-[theme(color.brand.blue)] mb-2 mt-1">
                  {dimension.question}
                </p>
                <p className="text-gray-600 text-sm">{dimension.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
