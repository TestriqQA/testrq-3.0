export default function LLMQATrustedBy() {
  const wordmarks = [
    "Northstar AI",
    "Ledger Labs",
    "Helix Health",
    "Quantum Forge",
    "Veracity",
    "Citrine",
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-10 md:py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-gray-500 mb-6">
          Trusted by teams shipping AI to production
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {wordmarks.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
