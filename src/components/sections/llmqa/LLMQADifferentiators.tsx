import {
  FaArrowsRotate,
  FaScrewdriverWrench,
  FaCertificate,
  FaGaugeHigh,
} from "react-icons/fa6";

const differentiators = [
  {
    icon: FaArrowsRotate,
    title: "Multi-turn conversation evals",
    body: "Catch persona drift, context loss, and slow-grooming jailbreaks that only trigger after turn three. Single-shot evals will never see these failures.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Tool & function-calling validation",
    body: "Assert the right tool was called with the right arguments, then continue the conversation with mocked responses to test downstream reasoning end-to-end.",
  },
  {
    icon: FaCertificate,
    title: "Ed25519-signed certifications",
    body: "Every cert is cryptographically signed and offline-verifiable. Publish a Trust Portal at trust/your-bot and let your customers verify it themselves.",
  },
  {
    icon: FaGaugeHigh,
    title: "Continuous monitoring",
    body: "Rerun on a schedule, on every prompt change, and on every model upgrade. Auto-revoke a certificate the moment a regression breaks the contract.",
  },
];

export default function LLMQADifferentiators() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            What only LLMQA does
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            The four things every other tool gets{" "}
            <span className="text-[theme(color.brand.blue)]">wrong</span> (or
            skips entirely).
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[theme(color.brand.blue)]/10 text-[theme(color.brand.blue)] flex items-center justify-center text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
