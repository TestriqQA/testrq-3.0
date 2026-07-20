// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import {
    FaMobileAlt,
    FaUserShield,
    FaCogs,
    FaHourglassHalf,
    FaUserTie,
} from "react-icons/fa";
import Link from "next/link";

const challenges = [
    {
        id: 1,
        title: "Mastering Cross-Browser and Device Fragmentation",
        icon: <FaMobileAlt className="text-3xl text-emerald-600" />,
        description:
            <><Link href="/mobile-application-testing" className="text-[theme(color.brand.blue)] underline">Mobile devices</Link> now account for over 58% of global web traffic. Testing across endless combinations of Chrome, Safari, and Firefox has become a logistical nightmare for QA teams. Layout bugs and inconsistent UX often lead to high churn rates.</>,
        solution:
            "Our Solution: We align with ISO/IEC/IEEE 29119-2:2021, utilizing multi-environment validation and Responsive design testing. Our cross-browser checklist ensures your app performs flawlessly. We cover everything from legacy desktop browsers to the latest mobile operating systems.",
    },
    {
        id: 2,
        title: "Defending Against Escalating Security Threats",
        icon: <FaUserShield className="text-3xl text-red-600" />,
        description:
            <>Web applications are the primary target for 36% of all penetration tests. With cyberattacks now costing businesses an average of $4.88M per breach, <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline">web app testing</Link> must be security-centric. OWASP Top 10 threats like SQL injection and XSS are becoming more sophisticated.</>,
        solution:
            "Our Solution: Our solution follows the ISO/IEC/IEEE 29119-5:2024 standard. We provide outsourced security testing that includes risk assessment, HTTPS/SSL verification, and web risk assessment scans. We don't just scan; we simulate real-world attacks to harden your defenses.",
    },
    {
        id: 3,
        title: "Solving the 80% Automation Flakiness Trap",
        icon: <FaCogs className="text-3xl text-blue-600" />,
        description:
            <>Dynamic UIs and AI-driven changes have made traditional <Link href="/automation-testing-services" className="text-[theme(color.brand.blue)] underline">Web UI automation</Link> brittle. Over 80% of automated tests fail because of &apos;flakiness&apos; in dynamic environments. Maintenance of Selenium, Cypress, or Playwright scripts often takes longer than the testing itself.</>,
        solution:
            "Our Solution: We implement ISO/IEC/IEEE 29119-4 model-based testing. Our automated testing ensures stability during Agile sprints. We use self-healing scripts that analyze the DOM in real-time to prevent broken tests.",
    },
    {
        id: 4,
        title: "Closing Coverage Gaps in Hyper-Fast Release Cycles",
        icon: <FaHourglassHalf className="text-3xl text-orange-600" />,
        description:
            "Rapid CI/CD pipelines often leave edge cases untested. This gap contributed to the 83% spike in application attacks seen in early 2026. Manual QA often misses real-user scenarios under the pressure of short development cycles.",
        solution:
            "Our Solution: We mandate strict documentation per ISO/IEC/IEEE 29119-3:2021. Our web app QA testing maintains full traceability from requirements to incident reports. This rigorous approach ensures zero coverage gaps, even during 48-hour release cycles.",
    },
    {
        id: 5,
        title: "Overcoming the Global QA Talent Shortage",
        icon: <FaUserTie className="text-3xl text-indigo-600" />,
        description:
            <>Specialized engineering talent is currently in short supply. Many firms struggle to find experts for complex <Link href="/api-testing" className="text-[theme(color.brand.blue)] underline">API testing</Link> and AI-augmented security assessments. Automated tools alone uncover 2,000x fewer vulnerabilities than when paired with expert manual exploration.</>,
        solution:
            "Our Solution: Testriq offers a managed service alternative. Our ISTQB-certified team provides expert web application QA. We maintain a 99% process progress metric to ensure timely and transparent delivery.",
    },
];

const WebappChallenges: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Navigating the 2026 Web QA Landscape: <br />
                        <span className="text-brand-blue">5 Global Challenges</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        The complexity of the web has evolved. Leading performance testing companies must address the unique hurdles of the 2026 ecosystem.
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
                                    {challenge.solution.split(":").slice(1).join(":")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebappChallenges;
