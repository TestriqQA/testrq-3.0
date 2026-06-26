const steps = [
  {
    number: "01",
    step: "Step 1 of 3",
    title: "Connect",
    description:
      "Paste an OpenAI / Anthropic / Gemini key, or point us at any HTTP endpoint. Workspaces, projects, and bot targets are first-class — no spreadsheet wrangling.",
  },
  {
    number: "02",
    step: "Step 2 of 3",
    title: "Test",
    description:
      "Pick a starter suite or load your own golden examples. Run thousands of cases across 9 dimensions in parallel. Stream results as they complete.",
  },
  {
    number: "03",
    step: "Step 3 of 3",
    title: "Certify",
    description:
      "Issue a signed certificate, publish a Trust Portal, and wire the CI gate. Continuous monitoring keeps the cert honest — or revokes it automatically.",
  },
];

export default function LLMQAHowItWorks() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            From paste-an-endpoint to{" "}
            <span className="text-[theme(color.brand.blue)]">signed certificate</span>{" "}
            in an afternoon.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[theme(color.brand.blue)] text-white flex items-center justify-center text-lg font-bold mb-4">
                {step.number}
              </div>
              <span className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
