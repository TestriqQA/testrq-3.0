// SEO handoff (Sept 2026) — PART C, new section placed immediately after the
// hero intro. Defines the "penetration testing services" term the page now
// targets and disambiguates it from vulnerability scanning / assessment.
// Copy is verbatim from the handoff; no claims or figures added.
//
// Server Component — no interactive APIs, so this ships zero client JS.
import React from "react";
import { FaSearch, FaClipboardCheck, FaUserSecret, FaCheck } from "react-icons/fa";

const comparisons = [
    {
        title: "Vulnerability scanning",
        icon: <FaSearch className="text-2xl" />,
        accent: "bg-blue-600",
        tint: "bg-blue-50",
        body: "Automated tools run against your systems and produce a list of known weaknesses. It is fast and inexpensive, and it finds the obvious issues. What it cannot do is chain two small flaws together into one serious breach.",
    },
    {
        title: "Vulnerability assessment",
        icon: <FaClipboardCheck className="text-2xl" />,
        accent: "bg-purple-600",
        tint: "bg-purple-50",
        body: "Human review is added to that scan. An engineer removes false positives and ranks what remains by risk. You get an accurate list, but nobody attempts to exploit anything.",
    },
    {
        title: "Penetration testing",
        icon: <FaUserSecret className="text-2xl" />,
        accent: "bg-red-600",
        tint: "bg-red-50",
        body: "An engineer actively attempts to exploit the weaknesses, chain them together, escalate privileges and reach data they should not be able to reach, exactly as an attacker would. This is the only one of the three that tells you what an attacker could actually achieve inside your environment.",
    },
];

// The handoff prints this line under the "Penetration testing" heading, but it
// compares "the third one" against "the first" — it closes out all three
// definitions rather than describing penetration testing alone. Rendered as a
// full-width note under the grid: nesting it in the third card forced every
// card to that card's height, leaving 158px and 210px of dead space inside the
// first two.
const complianceNote =
    "Most compliance frameworks, including PCI DSS, SOC 2, HIPAA and ISO 27001, expect the third one rather than the first.";

const triggers = [
    "Before a major release, or after a significant change to your architecture",
    "Annually, or at whatever interval your compliance framework requires",
    "During enterprise procurement, when a prospective customer asks for evidence",
    "After a security incident, to confirm the gap is genuinely closed",
    "Before entering a regulated market such as healthcare, financial services or the EU",
];

const PenetrationTestingExplainer: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        What Are{" "}
                        <span className="text-brand-blue">
                            Penetration Testing Services
                        </span>
                        ?
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            A penetration test is an authorised, simulated cyber attack
                            carried out by security engineers to find weaknesses that
                            automated scanners miss. Penetration testing services package
                            that work into a defined engagement: an agreed scope, a fixed
                            timeline, a tested system, and a report your team can act on.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Three things sound similar and are often confused. Here is the
                            difference in plain terms.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {comparisons.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                        >
                            <div
                                className={`${item.tint} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                            >
                                <span
                                    className={`${item.accent} w-10 h-10 rounded-xl flex items-center justify-center text-white`}
                                >
                                    {item.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-lg text-gray-700 font-medium leading-relaxed text-center max-w-4xl mx-auto">
                    {complianceNote}
                </p>

                <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        When do you need a penetration test?
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-5">
                        {triggers.map((trigger) => (
                            <li key={trigger} className="flex items-start gap-4">
                                <span className="bg-brand-blue w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaCheck className="text-white text-xs" />
                                </span>
                                <span className="text-gray-600 leading-relaxed">
                                    {trigger}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PenetrationTestingExplainer;
