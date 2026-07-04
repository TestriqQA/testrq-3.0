// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

const ArchitectureCTASection: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-indigo-900 relative overflow-hidden">
            {/* Abstract Architectural Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-white/5 rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/5 rounded-full -ml-32 -mb-32" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center bg-white/10 gap-2 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-md border border-white/20">
                    <FaShieldAlt className="text-blue-400" />
                    <span className="text-sm font-semibold tracking-wide">Secure Your Architectural Legacy</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    Ready to Forge a <br className="hidden md:block" />
                    <span className="text-blue-400 font-bold italic">Resilient Digital Foundation?</span>
                </h2>

                <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                    In an era where technical debt and architectural bottlenecks define market survival, don&apos;t let a legacy foundation stall your innovation. Partner with Testriq, a premier software architecture audit company.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <Link
                        href="/contact-us"
                        className="group inline-flex items-center gap-3 py-4 px-10 bg-brand-blue text-white font-bold text-lg rounded-full hover:bg-brand-blue/90 hover:shadow-[0_0_30px_rgba(37,168,224,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto cursor-pointer"
                    >
                        <span>Talk to Senior Architects</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="text-white font-bold text-lg">Engineering Excellence</p>
                        <p className="text-indigo-300 text-sm">#1 Ranking in Structural ROI</p>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center group">
                        <p className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors italic">Actionable</p>
                        <p className="text-sm text-indigo-200">Modernization roadmaps</p>
                    </div>
                    <div className="text-center group">
                        <p className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors italic">Complimentary</p>
                        <p className="text-sm text-indigo-200">Architecture health check</p>
                    </div>
                    <div className="text-center group">
                        <p className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors italic">ROI-Focused</p>
                        <p className="text-sm text-indigo-200">Driven by engineering rigor</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectureCTASection;
