// SEO handoff (Sept 2026) — PART C, new section placed immediately before
// "Why Choose Testriq for Security Testing?". Makes the served markets explicit
// in body copy so they match the `areaServed` array now declared on the Service
// JSON-LD node. Copy is verbatim from the handoff.
//
// Server Component — no interactive APIs, so this ships zero client JS.
import React from "react";
import { FaGlobeAmericas, FaGlobeEurope, FaFlag, FaUserShield } from "react-icons/fa";

const regions = [
    {
        name: "United States",
        icon: <FaGlobeAmericas className="text-2xl" />,
        frameworks: "SOC 2 · HIPAA · PCI DSS",
    },
    {
        name: "United Kingdom",
        icon: <FaFlag className="text-2xl" />,
        frameworks: "GDPR",
    },
    {
        name: "European Union",
        icon: <FaGlobeEurope className="text-2xl" />,
        frameworks: "GDPR",
    },
    {
        name: "UAE",
        icon: <FaUserShield className="text-2xl" />,
        frameworks: "Local regulatory requirements",
    },
];

const PenetrationTestingCoverage: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Penetration Testing Services Across the{" "}
                        <span className="text-brand-blue">US, UK, EU and UAE</span>
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Testriq delivers penetration testing services to clients in the
                            United States, United Kingdom, European Union and UAE.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Reports follow the same structure in every region, so a
                            multi-national team reads one document rather than four.
                            Compliance context is agreed during scoping: GDPR for UK and EU
                            engagements, SOC 2, HIPAA and PCI DSS for US engagements, and
                            local regulatory requirements for the UAE and wider Middle East.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Personally identifiable data is masked throughout every
                            engagement, regardless of region.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {regions.map((region) => (
                        <div
                            key={region.name}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                {region.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {region.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {region.frameworks}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PenetrationTestingCoverage;
