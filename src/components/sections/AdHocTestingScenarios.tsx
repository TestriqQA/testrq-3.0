// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaFireAlt, FaMobileAlt, FaSyncAlt, FaDatabase, FaUsers, FaArrowRight } from "react-icons/fa";

const AdHocTestingScenarios: React.FC = () => {
    const scenarios = [
        {
            icon: <FaFireAlt />,
            title: "Production Hotfixes & Emergency Patches",
            color: "red",
            problem: "A critical bug reaches production. You need to validate a fix immediately before redeployment.",
            why: "Quick turnaround ad-hoc services validate fixes in hours, not days. Testers rapidly probe functionality to confirm the fix works without regressions.",
            example: "A payment failure affecting revenue is fixed in 2 hours; ad-hoc testing validates it in 30 mins, enabling confident deployment.",
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Application Rapid Releases",
            color: "blue",
            problem: "Weekly release cycles for mobile apps make formal testing for every update too slow.",
            why: "Experienced mobile testers quickly probe new features across devices/OS versions, identifying stability issues without formal test plans.",
            example: "A new feature release is validated across 10+ devices in 4 hours, identifying 3 critical device-specific bugs.",
        },
        {
            icon: <FaSyncAlt />,
            title: "Agile Sprint Completion Feedback",
            color: "green",
            problem: "Agile teams need rapid feature validation before the sprint review without slowing down the sprint.",
            why: "Intuitive validation aligned with sprint velocity helps identify edge cases quickly before stakeholders see the demo.",
            example: "Testers spend 6 hours on 5 new features, identifying 8 bugs and ensuring a smooth sprint review session.",
        },
        {
            icon: <FaDatabase />,
            title: "Legacy System Migrations",
            color: "purple",
            problem: "Migrating from legacy systems to new platforms requires rapid validation of data and core stability.",
            why: "Error-guessing techniques identify common migration problems and data integrity issues faster than exhaustive formal lists.",
            example: "During an ERP migration, ad-hoc testers identify 15 critical migration issues within 2 weeks, preventing go-live disruption.",
        },
        {
            icon: <FaUsers />,
            title: "Startups with Limited QA Resources",
            color: "orange",
            problem: "Startups can't afford large QA teams or expensive formal testing infrastructure.",
            why: "On-demand testers offer cost-effective, pay-as-you-go validation to catch major bugs before marketing launches.",
            example: "A startup validates a new feature launch in 8 hours for $800, saving $80k+ in annual internal hiring costs.",
        },
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        5 Scenarios Where <span className="text-brand-blue">Ad-Hoc Testing Excels</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Strategic use of ad-hoc testing delivers exceptional value when speed and intuition matter most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scenarios.map((scenario, index) => (
                        <div key={index} className="relative group p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-brand-blue/20 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                            {/* Color Header */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-transform group-hover:scale-110
                                ${scenario.color === 'red' ? 'bg-red-100 text-red-600' :
                                    scenario.color === 'blue' ? 'bg-brand-blue/10 text-brand-blue' :
                                        scenario.color === 'green' ? 'bg-green-100 text-green-600' :
                                            scenario.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                                'bg-orange-100 text-orange-600'}`}
                            >
                                {scenario.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">{scenario.title}</h3>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">The Problem</h4>
                                    <p className="text-sm text-gray-600">{scenario.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Why It Excels</h4>
                                    <p className="text-sm text-gray-600">{scenario.why}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Real-World Case</h4>
                                    <p className="text-sm text-gray-700 italic font-medium">&quot;{scenario.example}&quot;</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue to-indigo-700 text-white flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold mb-4">Facing an urgent QA challenge?</h3>
                        <p className="text-blue-100 text-sm mb-8">Deploy our experienced ad-hoc testers within hours to resolve your crisis.</p>
                        <Link href="/contact-us" className="w-full">
                            <button className="cursor-pointer w-full py-4 bg-white text-brand-blue rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                                Start Rapid Testing
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingScenarios;
