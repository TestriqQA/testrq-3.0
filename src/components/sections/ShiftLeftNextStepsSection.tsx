// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaComments, FaSearch, FaRocket } from "react-icons/fa";

const ShiftLeftNextStepsSection: React.FC = () => {
    const steps = [
        {
            icon: <FaSearch className="w-5 h-5" />,
            title: "QA Audit",
            description: "We review your current SDLC to identify bottleneck areas for improvement."
        },
        {
            icon: <FaComments className="w-5 h-5" />,
            title: "Strategy Consulting",
            description: "Defining a tailored roadmap for your Shift-Left transformation."
        },
        {
            icon: <FaRocket className="w-5 h-5" />,
            title: "Implementation",
            description: "Integrating QA into your sprints and automating CI/CD pipelines."
        }
    ];

    return (
        <section className="bg-white py-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-brand-blue rounded-[3rem] p-8 md:p-16 text-white text-center flex flex-col items-center space-y-8 relative z-10 shadow-2xl shadow-blue-400/30">
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/20">
                        Ready to Accelerate?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight text-white italic">
                        Embed Quality at the Core. <span className="text-blue-200">Start Your Shift Today.</span>
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl">
                        Partner with Testriq to redefine your development lifecycle and deliver software that exceeds expectations with fewer resources.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact-us" className="px-10 py-4 bg-white text-brand-blue font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            Request a Free Audit
                        </Link>
                        <Link href="/website-map" className="px-10 py-4 bg-blue-600/50 border border-white/30 text-white font-bold rounded-xl hover:bg-blue-600/70 transition-colors uppercase tracking-widest text-xs flex items-center justify-center">
                            Explore More Services
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-12 w-full border-t border-white/10">
                        {steps.map((step, index) => (
                            <div key={index} className="space-y-2">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold">{step.title}</h3>
                                <p className="text-xs text-blue-200 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full -z-0 blur-3xl opacity-50"></div>
        </section>
    );
};

export default ShiftLeftNextStepsSection;
