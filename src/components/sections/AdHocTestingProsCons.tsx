// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaCheckCircle, FaMinusCircle, FaArrowRight } from "react-icons/fa";

const AdHocTestingProsCons: React.FC = () => {
    const advantages = [
        { title: "Maximum Speed", desc: "No time wasted on test plans or documentation. Testing starts the minute you need it." },
        { title: "Cost-Effective", desc: "Zero overhead for building test infrastructure or formal case suites. Pay only for execution." },
        { title: "Intuitive Detection", desc: "Experts catch 'logic' bugs that rigid scripts often miss by following creative paths." },
        { title: "Extreme Flexibility", desc: "Redirect effort instantly as requirements change or new priorities emerge during a crisis." },
    ];

    const disadvantages = [
        { title: "No Process Legacy", desc: "Produces minimal documentation, making it harder to track history or long-term coverage." },
        { title: "Skill-Dependent", desc: "Highly dependent on the tester's intuition; less effective with junior or inexperienced staff." },
        { title: "Inconsistent Results", desc: "Coverage is unpredictable; different testers might not probe the same areas twice." },
        { title: "Reproducibility", desc: "Unstructured nature can make it difficult to recreate very specific, random bug conditions." },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Advantages and <span className="text-brand-blue">Disadvantages</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Strategic use of ad-hoc testing requires understanding when to lean on its speed and when formal QA is needed.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Advantages Column */}
                    <div className="bg-white rounded-2xl p-10 border border-transparent hover:border-green-100 shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl">
                                <FaCheckCircle />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">The Strengths</h3>
                                <p className="text-sm text-gray-500">Why speed often wins</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            {advantages.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1"><FaArrowRight className="text-green-500" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Disadvantages Column */}
                    <div className="bg-white rounded-2xl p-10 border border-transparent hover:border-red-100 shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl">
                                <FaMinusCircle />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">The Limitations</h3>
                                <p className="text-sm text-gray-500">When to supplement with formal QA</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            {disadvantages.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1"><FaArrowRight className="text-red-400" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingProsCons;
