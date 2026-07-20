import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "we learn your product, tech stack, risks, and release cadence.",
  },
  {
    number: "02",
    title: "QA Strategy",
    description:
      "we design a test plan, coverage goals, and the right toolset.",
  },
  {
    number: "03",
    title: "Team Onboarding",
    description:
      "your testers ramp up and integrate with your tools (Jira, Slack, CI/CD).",
  },
  {
    number: "04",
    title: "Testing & Reporting",
    description:
      "continuous test execution with clear, transparent defect reports.",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description:
      "we expand coverage, add automation, and reduce escaped defects over time.",
  },
];

const QAOutsourcingProcess: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our <span className="text-brand-blue">QA Outsourcing</span> Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAOutsourcingProcess;
