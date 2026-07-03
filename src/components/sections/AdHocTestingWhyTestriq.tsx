// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaUserTie, FaBolt, FaTag, FaHistory, FaGlobeAmericas, FaBuilding } from "react-icons/fa";

const AdHocTestingWhyTestriq: React.FC = () => {
    const reasons = [
        {
            icon: <FaUserTie />,
            title: "Experienced Testers",
            desc: "Our ISTQB-certified team brings deep domain knowledge and intuition to every session, ensuring no critical path is ignored."
        },
        {
            icon: <FaBolt />,
            title: "Rapid Response",
            desc: "We understand urgency. We can mobilize experienced QA squads within hours for emergency patches or hotfix validation."
        },
        {
            icon: <FaTag />,
            title: "Cost-Effective",
            desc: "Ad-hoc testing is our most flexible model. Pay only for the testing you need, when you need it, with zero fixed overhead."
        },
        {
            icon: <FaHistory />,
            title: "Proven Track Record",
            desc: "15+ years of experience providing rapid-turnaround QA for startups, multi-national enterprises, and high-growth Fintechs."
        },
        {
            icon: <FaGlobeAmericas />,
            title: "Global Presence",
            desc: "Operating across US, UK, EU, India, Asia, and UAE, we provide 24/7 support to align with any development time zone."
        },
        {
            icon: <FaBuilding />,
            title: "Industry Depth",
            desc: "Specific expertise in Healthcare, Fintech, E-Commerce, and SaaS ensures we speak your language and know your risks."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Choose Testriq for <span className="text-brand-blue">Ad-Hoc Testing</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We combine the agility of independent testing with the rigor of an enterprise QA lab.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl border border-transparent hover:border-brand-blue/20 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingWhyTestriq;
