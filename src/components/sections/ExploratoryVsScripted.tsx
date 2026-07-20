// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaRobot, FaSearch, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import Link from "next/link";

const ExploratoryVsScripted: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Exploratory Testing vs Scripted Testing: <br />
                        <span className="text-brand-blue">The Strategic Mix</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        For early-stage companies, the question is often: Exploratory
                        testing vs scripted testing: which is better for startups? The
                        Testriq Verdict: A healthy Agile QA strategy requires both.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Scripted Testing Card */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                <FaRobot className="text-4xl text-gray-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Scripted Testing
                                </h3>
                                <p className="text-gray-500 font-medium">Safety Net</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Best for <Link href="/regression-testing" className="text-[theme(color.brand.blue)] underline">regression testing</Link> and ensuring that existing features
                            don&apos;t break. This Alignment serves as your safety net.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Validates expected behavior</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Ensures regression stability</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Ideal for repetitive checks</span>
                            </li>
                        </ul>
                    </div>

                    {/* Exploratory Testing Card */}
                    <div className="bg-brand-blue/5 rounded-3xl p-8 border border-brand-blue/10 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                <FaSearch className="text-4xl text-brand-blue" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Exploratory Testing
                                </h3>
                                <p className="text-brand-blue font-medium">Discovery Phase</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Best for new features, complex UI/UX transitions, and finding
                            &quot;unknown unknowns.&quot; This method acts as a initial investigative
                            phase.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaLightbulb className="text-brand-blue mt-1 flex-shrink-0" />
                                <span>Uncovers edge cases & logic flaws</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaLightbulb className="text-brand-blue mt-1 flex-shrink-0" />
                                <span>Validates UX & user flows</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <FaLightbulb className="text-brand-blue mt-1 flex-shrink-0" />
                                <span>Finds defects <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline">automation</Link> misses</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Verdict Box */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4">Our Recommendation</h3>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We recommend a <span className="text-brand-blue font-bold">70/30 split</span> (70% scripted/automated, 30% exploratory) to maximize software release cycle speed and product quality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExploratoryVsScripted;
