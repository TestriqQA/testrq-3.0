// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCommentDots } from "react-icons/fa";

const TimezoneCTA: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-[theme(color.brand.blue)] text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                    <FaCommentDots className="text-blue-200" />
                    <span className="text-sm font-bold uppercase tracking-widest">Free Consultation</span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                    Ready to Synchronize Your <br />
                    <span className="text-blue-200">Quality with Your Ambition?</span>
                </h2>

                <p className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Don&apos;t let geographic distance stall your digital transformation. Partner with Testriq to transform your global delivery model into a high-velocity engine of growth.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/contact-us"
                        className="group flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <p className="text-blue-100 font-medium">
                        Join the companies crushing their launch goals.
                    </p>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-80 uppercase text-xs font-black tracking-widest">
                    <span>#RealTimeQA</span>
                    <span>#FollowTheSun</span>
                    <span>#SynchronousEngineering</span>
                    <span>#GlobalExcellence</span>
                </div>
            </div>
        </section>
    );
};

export default TimezoneCTA;
