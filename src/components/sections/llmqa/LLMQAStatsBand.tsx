export default function LLMQAStatsBand() {
  const stats = [
    { value: "9", label: "evaluation dimensions" },
    { value: "1,000s", label: "red-team prompts" },
    { value: "Ed25519", label: "signed certificates" },
    { value: "self-host", label: "or run in our cloud" },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-14 md:py-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-[#057db0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base text-white/80 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
