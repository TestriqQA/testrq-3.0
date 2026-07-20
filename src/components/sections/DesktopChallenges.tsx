// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import {
    FaLaptop,
    FaRobot,
    FaLock,
    FaTachometerAlt,
    FaUserCheck,
} from "react-icons/fa";
import Link from "next/link";

const challenges = [
    {
        id: 1,
        title: "Mastering OS and Hardware Compatibility Fragmentation",
        icon: <FaLaptop className="text-3xl text-emerald-600" />,
        description:
            "Thousands of failure points exist across the modern desktop landscape: OS Diversity (Windows 10/11, macOS), Hardware Complexity (ARM vs x86), and Visual Precision (High-DPI). Variances frequently result in non-reproducible failures.",
        solution:
            "Our Solution: We align with ISO/IEC/IEEE 29119-3:2021, utilizing standardized Test Environment Requirements templates. We systematically map compatibility matrices to validate your standalone application QA across critical user environments.",
    },
    {
        id: 2,
        title: "Overcoming Automation and Tooling Limitations",
        icon: <FaRobot className="text-3xl text-blue-600" />,
        description:
            <>Desktop apps often resist standard <Link href="/web-application-testing-services" className="text-[theme(color.brand.blue)] underline">web-based automation</Link> logic, requiring specialized handling for native controls and legacy stacks (WPF, WinForms, Qt). Most web-centric QA firms cannot handle this.</>,
        solution:
            "Our Solution: Following ISO/IEC/IEEE 29119-5:2024, we implement keyword-driven testing frameworks utilizing tools like TestComplete and Appium (WinAppDriver) to reduce script flakiness for legacy regresson testing.",
    },
    {
        id: 3,
        title: "Securing Local Contexts & Installer Integrity",
        icon: <FaLock className="text-3xl text-red-600" />,
        description:
            "Desktop software handles registry verification and local file system access, making it a prime target for privilege escalation and insecure local storage vulnerabilities outside web app scopes.",
        solution:
            "Our Solution: We integrate DAST and penetration testing, following ISO 29119-2 risk-based methodology. We perform deep .EXE and .MSI package testing to prevent installer-based vulnerabilities.",
    },
    {
        id: 4,
        title: "Managing Performance and Resource Differences",
        icon: <FaTachometerAlt className="text-3xl text-orange-600" />,
        description:
            <>Downtime and <Link href="/performance-testing-services" className="text-[theme(color.brand.blue)] underline">performance lags</Link> cost billions. Desktop apps must remain responsive despite background system load. CPU spikes and memory leaks are critical risks.</>,
        solution:
            "Our Solution: We use ISO 29119-3 Test Procedure Specifications to guide load simulations. We benchmark CPU spikes and detect memory leaks, ensuring your app remains stable under low-resource conditions.",
    },
    {
        id: 5,
        title: "Solving Real-World Usage Un-predictability",
        icon: <FaUserCheck className="text-3xl text-indigo-600" />,
        description:
            "Standalone software encounters issues in live environments due to concurrent software conflicts or &apos;dirty&apos; system states (low disk space, interrupted updates) that standard labs overlook.",
        solution:
            "Our Solution: We emphasize exploratory testing and real-user simulation per ISO 29119-2. We test offline functionality and interrupted updates to reflect true user behavior.",
    },
];

const DesktopChallenges: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Navigating the 2026 Desktop QA Landscape: <br />
                        <span className="text-brand-blue">5 Critical Challenges</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
                        The desktop ecosystem has shifted. We navigate the specific hardware and software challenges of the 2026 landscape.
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

export default DesktopChallenges;
