// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import { FaUserGraduate, FaBullseye, FaEdit, FaFlask, FaCompass, FaHammer, FaChartBar } from "react-icons/fa";

const AdHocTestingBestPractices: React.FC = () => {
    const practices = [
        {
            icon: <FaUserGraduate />,
            title: "Expertise-First Assignment",
            desc: "Always assign testers with deep domain knowledge. Intuition is only effective when backed by thousands of hours of experience."
        },
        {
            icon: <FaBullseye />,
            title: "Focus on High-Risk Areas",
            desc: "Instead of random clicking, prioritize modules that impact revenue (payments), security (auth), or have high historical failure rates."
        },
        {
            icon: <FaEdit />,
            title: "Immediate Documentation",
            desc: "Bugs must be logged the moment they're found. Detailed steps, logs, and screen recordings are critical for random bug reproduction."
        },
        {
            icon: <FaFlask />,
            title: "Shift-Left Collaboration",
            desc: "Combine ad-hoc testing with developer 'buddy sessions' to identify edge cases during the initial feature coding phase."
        },
        {
            icon: <FaCompass />,
            title: "Defined Scope Boundaries",
            desc: "Informal doesn't mean aimless. Establish clear goals for each session to ensure no critical path is accidentally ignored."
        },
        {
            icon: <FaHammer />,
            title: "Tool-Assisted Exploitation",
            desc: "Use screen recorders and performance monitors to provide concrete proof for the random bugs discovered."
        },
        {
            icon: <FaChartBar />,
            title: "Post-Session Analysis",
            desc: "Review findings to identify patterns. Lessons from ad-hoc sessions should eventually inform the formal test suite."
        }
    ];

    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white relative overflow-hidden">
            {/* Decorative Side Text */}
            <div className="absolute left-[-2rem] top-1/2 -rotate-90 text-[10rem] font-bold text-gray-50 select-none -z-10 tracking-widest leading-none">
                BESTPRACTICE
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Best Practices for <span className="text-brand-blue">Effective QA</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Maximum ROI from ad-hoc testing comes from applying a structured mindset to an unstructured methodology.
                    </p>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {practices.map((item, index) => (
                        <div key={index} className="group relative flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100 hover:border-brand-blue/20 transition-all duration-300">
                            {/* Number Badge */}
                            <div className="absolute top-4 right-6 text-2xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors">
                                0{index + 1}
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdHocTestingBestPractices;
