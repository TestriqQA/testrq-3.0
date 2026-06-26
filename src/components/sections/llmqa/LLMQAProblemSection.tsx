import { FaTriangleExclamation, FaArrowsRotate, FaUserSecret } from "react-icons/fa6";

export default function LLMQAProblemSection() {
  const problems = [
    {
      icon: <FaTriangleExclamation />,
      title: "Your bot lies — and sounds confident doing it.",
      body: "A finance assistant cites a tax rate that does not exist. A support bot invents a refund policy. Your evals miss it because you are still grading single-shot answers against rough rubrics.",
    },
    {
      icon: <FaArrowsRotate />,
      title: "Your bot drifts the moment you change the prompt.",
      body: "You tweak a system message to fix one ticket and silently regress three behaviours nobody is testing. Without a real merge gate, every prompt commit is a roll of the dice.",
    },
    {
      icon: <FaUserSecret />,
      title: "Your bot still falls for the same jailbreak from 2024.",
      body: "Single-shot red-team prompts pass. Then a user grooms it across five turns into reciting a banned recipe — and you find out from a screenshot on X.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[theme(color.brand.blue)] mb-3">
            The problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            The model is great. The bot is{" "}
            <span className="text-[theme(color.brand.blue)]">not the model.</span>
          </h2>
          <p className="text-lg text-gray-600">
            A foundation model that scores 95 on a leaderboard still ships as a
            chatbot that lies, drifts, and breaks the moment a real user gets
            creative. You need to test the bot — not the model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[theme(color.brand.blue)]/10 text-[theme(color.brand.blue)] flex items-center justify-center text-xl mb-4">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
