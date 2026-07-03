// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaMobile, FaHistory, FaShieldAlt, FaUserCheck, FaShoppingCart, FaPlug, FaCloud, FaMoneyCheckAlt } from "react-icons/fa";

const AdHocTestingApplications: React.FC = () => {
    const apps = [
        {
            icon: <FaMobile className="text-brand-blue" />,
            title: "Mobile Applications",
            desc: "Rapid validation across 10+ devices for weekly updates.",
            approach: "Unscripted cross-device probes for stability/UI bugs.",
            impact: "Identified 3 device-specific crashes before weekly launch."
        },
        {
            icon: <FaHistory className="text-indigo-500" />,
            title: "Rapid Regression",
            desc: "Validating frequent changes for CI/CD pipelines.",
            approach: "Error-guessing focused on recently modified modules.",
            impact: "Verified 5 major updates in a single morning session."
        },
        {
            icon: <FaShieldAlt className="text-red-500" />,
            title: "Security Checks",
            desc: "Quick sanity checks on authentication and controls.",
            approach: "Probing for XSS and injection vulnerabilities in new fields.",
            impact: "Caught 1 critical auth vulnerability before production pdeploy."
        },
        {
            icon: <FaUserCheck className="text-green-500" />,
            title: "Usability/UX",
            desc: "User-centric unscripted navigation feedback.",
            approach: "Simulating diverse user paths without pre-set goals.",
            impact: "Found 4 unintuitive UI bottlenecks in the new onboarding."
        },
        {
            icon: <FaShoppingCart className="text-orange-500" />,
            title: "E-Commerce",
            desc: "Revenue-critical checkout path validation.",
            approach: "Stress-testing checkout with random payment variations.",
            impact: "Fixed 2 checkout loops before a major Black Friday sale."
        },
        {
            icon: <FaPlug className="text-purple-500" />,
            title: "API Integrations",
            desc: "Validating integration points and third-party APIs.",
            approach: "Random parameter testing and error handling validation.",
            impact: "Detected 1 data mismatch issue in the new payment gateway."
        },
        {
            icon: <FaCloud className="text-cyan-500" />,
            title: "SaaS/Cloud",
            desc: "Multi-tenant isolation and cloud functionality.",
            approach: "Probing for data leakage across simulated tenant accounts.",
            impact: "Verified data isolation for 3 new enterprise clients."
        },
        {
            icon: <FaMoneyCheckAlt className="text-emerald-500" />,
            title: "Fintech",
            desc: "High-security financial transaction validation.",
            approach: "Strict security sanity checks for regulated features.",
            impact: "Achieved 100% compliance validation for a core module fix."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Industry-Specific <span className="text-brand-blue">Use Cases</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ad-hoc testing provides flexible solutions across diverse technical environments and business sectors.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map((app, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                                {app.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">{app.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {app.desc}
                            </p>
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Our Approach</span>
                                    <p className="text-xs text-gray-500 font-medium">{app.approach}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Result</span>
                                    <p className="text-xs text-brand-blue font-semibold italic">&quot;{app.impact}&quot;</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingApplications;
