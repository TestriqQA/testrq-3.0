// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaLightbulb, FaExchangeAlt } from "react-icons/fa";

const AdHocTestingWhatIs: React.FC = () => {
    const characteristics = [
        "Unstructured approach: No predefined test cases or test plans",
        "Intuitive testing: Testers use domain knowledge and experience",
        "Error guessing: Anticipating where bugs are likely to occur",
        "Random testing: Following no predetermined sequence or pattern",
        "Rapid execution: Tests are executed quickly without heavy documentation",
        "Exploratory nature: Testers explore the application dynamically",
    ];

    const comparisonData = [
        { aspect: "Structure", adhoc: "Completely unstructured", exploratory: "Semi-structured" },
        { aspect: "Planning", adhoc: "No test plan", exploratory: "Guided by test charters" },
        { aspect: "Documentation", adhoc: "Minimal documentation", exploratory: "Documented findings" },
        { aspect: "Approach", adhoc: "Random, intuitive", exploratory: "Systematic exploration" },
        { aspect: "Learning", adhoc: "Reactive learning", exploratory: "Proactive learning" },
        { aspect: "Reproducibility", adhoc: "Difficult", exploratory: "Easier due to documentation" },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Definition */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-6">
                            <FaLightbulb />
                            <span>Understanding Methodology</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
                            What Is Ad-Hoc Testing?
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Ad-hoc testing is an informal, unstructured testing method where testers use their domain knowledge,
                            intuition, and experience to probe an application for bugs without predefined test cases.
                            The term &quot;ad-hoc&quot; means &quot;for this specific purpose&quot;—testing designed for
                            the immediate need rather than following a standardized process.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {characteristics.map((char, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-700">{char}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Comparison Table */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-xl">
                                <FaExchangeAlt />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Ad-Hoc vs. Exploratory</h3>
                                <p className="text-sm text-gray-500">Key differences in approach</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="group relative">
                                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-start lg:items-stretch xl:items-start gap-2 sm:gap-4 lg:gap-3 xl:gap-4 p-4 rounded-2xl bg-gray-50 group-hover:bg-brand-blue/10 transition-colors">
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-0 sm:mt-1 lg:mt-0 xl:mt-1 w-full sm:w-36 md:w-40 lg:w-full xl:w-40 shrink-0">
                                            {row.aspect}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 flex-1 w-full">
                                            <div className="text-sm text-gray-600">
                                                <span className="block font-bold text-gray-900">Ad-Hoc</span>
                                                {row.adhoc}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                <span className="block font-bold text-gray-900">Exploratory</span>
                                                {row.exploratory}
                                            </div>
                                        </div>
                                    </div>
                                    {index !== comparisonData.length - 1 && (
                                        <div className="h-px bg-gray-100 mx-4 mt-4"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                            <p className="text-xs text-amber-800 leading-relaxed italic">
                                * Ad-hoc testing is more random and reactive, while exploratory testing is more systematic and goal-oriented.
                                Both are informal, but exploratory has more structure and documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingWhatIs;
