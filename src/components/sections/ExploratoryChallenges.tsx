// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import {
    FaClipboardList,
    FaUserGraduate,
    FaChartBar,
    FaClock,
    FaBalanceScale,
} from "react-icons/fa";
import Link from "next/link";

const challenges = [
    {
        id: 1,
        title: "Solving Documentation Gaps (ISO 29119-2 Compliance)",
        icon: <FaClipboardList className="text-3xl text-emerald-600" />,
        description:
            "Historically, exploratory testing was unscripted and often led to sparse notes. This made defect reproduction a nightmare for developers.",
        solutionLabel: "Our Solution",
        solutionContent:
            "We follow ISO/IEC/IEEE 29119-2 standards, which require structured charters, session sheets, and incident reports. We use exploratory testing tools like Rapid Reporter and Session Tester. Our Jira integration ensures every 'aha!' moment is traceable and repeatable.",
    },
    {
        id: 2,
        title: "Bridging the Expert Talent Shortage",
        icon: <FaUserGraduate className="text-3xl text-red-600" />,
        description:
            "Success in exploratory testing requires two key skills. Testers must be able to apply heuristic approaches and expert error guessing. Amidst the 2026 talent shortage, identifying these skilled exploratory testing specialists has become a significant challenge.",
        solutionLabel: "Our Solution",
        solutionContent:
            "Our testers are not just analysts; they are ISTQB-certified specialists trained in context-driven testing. We prioritize high-risk business logic by applying test oracles and persona-based models. This structured methodology allows our specialists to identify critical flaws in complex workflows.",
    },
    {
        id: 3,
        title: "Quantifying Coverage and ROI",
        icon: <FaChartBar className="text-3xl text-blue-600" />,
        description:
            <>Proving the value of <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] underline">manual QA</Link> exploration can be subjective if not quantified.</>,
        solutionLabel: "Our Solution",
        solutionContent:
            <>We leverage <Link href="/qa-documentation-services" className="text-[theme(color.brand.blue)] underline">ISO/IEC/IEEE 29119-3</Link> templates to track coverage. We use exploratory testing checklists and session metrics to provide tangible proof of our work. These reports clearly show how we uncover bugs that automated suites miss, demonstrating the value to your stakeholders.</>,
    },
    {
        id: 4,
        title: "Scaling in Rapid Agile & CI/CD Sprints",
        icon: <FaClock className="text-3xl text-orange-600" />,
        description:
            "Time-boxed sessions can be resource-intensive, often clashing with the speed of modern agile development.",
        solutionLabel: "Our Solution",
        solutionContent:
            "Our exploratory testing strategies utilize 30–60 minute time-boxed charters. This approach ensures scalability within your agile testing sprints. We integrate real-time reporting into Azure DevOps or GitHub without slowing down your release cycle.",
    },
    {
        id: 5,
        title: "Balancing Creativity with ISO Structure",
        icon: <FaBalanceScale className="text-3xl text-indigo-600" />,
        description:
            <>Too much structure stifles intuition; too little breeds chaos. In 2026, the rise of <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline">automated exploratory testing</Link> requires a hybrid approach.</>,
        solutionLabel: "Our Solution",
        solutionContent:
            "We act as the 29119-compliant bridge. Our exploratory testing methods include state transition and error guessing. These techniques allow our team to use their intuition while staying within a structured framework of planning and debriefing.",
    },
];

const ExploratoryChallenges: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Solving the 2026 Global Challenges <br />
                        <span className="text-brand-blue">in Exploratory Testing</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        The software landscape of 2026 demands more than just passing &quot;green
                        checks.&quot; To rank and compete globally, an exploratory testing
                        process must solve these five industry-defining hurdles:
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.id}
                            className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-blue/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/5 transition-colors">
                                    {challenge.icon}
                                </div>
                                <div className="text-4xl font-black text-gray-100 group-hover:text-brand-blue/10 transition-colors">
                                    0{challenge.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                                {challenge.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {challenge.description}
                            </p>

                            <div className="pt-6 border-t border-gray-50">
                                <p className="text-gray-900 font-semibold text-sm mb-2 italic">
                                    {challenge.solutionLabel}:
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {challenge.solutionContent}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploratoryChallenges;
