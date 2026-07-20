// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaMoneyBillWave, FaBug, FaNetworkWired, FaCheckDouble, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const challenges = [
    {
        id: 1,
        title: "Navigating Resource & Budget Constraints (ISO 29119-6 Alignment)",
        icon: <FaMoneyBillWave className="text-3xl text-emerald-600" />,
        description: <>Startups face severe pressure to skip structured QA to meet aggressive timelines. Statistics show that 72% of organizations now embed <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline">QA into their CI/CD pipelines</Link>. However, only those using dedicated Rapid QA Testing Services see a 30-40% increase in release velocity without sacrificing quality.</>,
        solution: "Our Solution: We align with ISO/IEC TR 29119-6:2021, which provides agile-specific guidelines for lightweight test planning. We prioritize the 'Critical Path' of your MVP. This ensures your budget focuses on the high-risk features that impact your launch readiness.",
    },
    {
        id: 2,
        title: "Stopping 'Test Flakiness' in Rapid Cycles",
        icon: <FaBug className="text-3xl text-red-600" />,
        description: "In 2026, 55% of QA teams report 'flaky tests' as their top issue. This problem often wastes 40–50% of developer resources on maintenance alone.",
        solution: "Our Solution: Utilizing QA automation tools like Playwright and Cypress with parallel execution, we build stable, repeatable rapid tests. We follow ISO 29119-3 templates for Test Procedure Specifications. This ensures your automated testing remains a valuable asset rather than a bottleneck.",
    },
    {
        id: 3,
        title: "Maturing Your Startup's Testing Infrastructure",
        icon: <FaNetworkWired className="text-3xl text-blue-600" />,
        description: "More than 68% of startup QA teams struggle with fragmented tools and poor CI/CD integration. This lack of connection delays bug detection, especially during frequent feature pivots.",
        solution: "Our Solution: We implement a unified Startup QA solution that integrates seamlessly with GitHub Actions, Jenkins, or GitLab. Our testing framework automatically validates every sprint. This provides the continuous QA startups need to maintain a high-velocity release cycle.",
    },
    {
        id: 4,
        title: "Balancing Speed with Comprehensive Coverage",
        icon: <FaCheckDouble className="text-3xl text-orange-600" />,
        description: <>Agile demands often strain traditional QA processes. This strain leads to &apos;Technical Debt&apos; and leaves gaps in coverage for both <Link href="/mobile-application-testing" className="text-[theme(color.brand.blue)] underline">mobile</Link> and <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline">web applications</Link>.</>,
        solution: "Our Solution: We use a sprint-aligned, risk-based approach that reduces testing cycles to 48-72 hours. By using AI to automate regression, we empower our team to perform deep exploratory testing. This comprehensive approach ensures your MVP is free of both functional bugs and subtle usability flaws.",
    },
    {
        id: 5,
        title: "Achieving Investor-Ready Traceability and Reporting",
        icon: <FaChartLine className="text-3xl text-indigo-600" />,
        description: "Fragmented defect tracking often fails in fast teams, making it difficult to demonstrate 'Quality Discipline' to potential investors.",
        solution: "Our Solution: ISO/IEC 29119 requires strict traceability from requirements to incidents. Our Launch-Fast QA dashboard provides real-time visibility into quality metrics, bug density, and UAT status. This ensures your startup is 'Audit-Ready' for its next funding round.",
    },
];

const LaunchFastChallenges: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Solving the 2026 Rapid QA Crisis: <br />
                        <span className="text-brand-blue">5 Global Challenges for Startups</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        The startup landscape has shifted toward &quot;Hyper-Agility,&quot; but traditional testing models haven&apos;t kept pace. We have architected Launch-Fast QA to solve the five biggest hurdles facing global MVPs in 2026.
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
                                    {challenge.solution.split(":")[0]}:
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {challenge.solution.split(":")[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LaunchFastChallenges;
