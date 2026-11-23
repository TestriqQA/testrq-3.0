"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { MessageCircle, FileText, ArrowRight, Sparkles } from "lucide-react";

const CategoriesCTASection: React.FC = () => {
    const ref = useRef(null);    return (
        <section
            ref={ref}
            className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
            {/* Restyled to the light theme to match the rest of the site: a white
                section holding a brand-blue CTA card (same treatment as the CTA
                band in BlogPostsGrid). The dark navy background, gradient orbs
                and grid overlay were decorative only and have been dropped. */}
            <div className="relative max-w-4xl mx-auto px-6 py-14 sm:px-10 md:px-14 md:py-16 text-center text-white bg-gradient-to-br from-brand-blue to-sky-700 rounded-3xl shadow-lg overflow-hidden">
                {/* Badge */}
                <div
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 rounded-full text-white text-sm font-medium mb-8"
    >
                    <Sparkles className="w-4 h-4" />
                    Ready to Get Started?
                </div>

                {/* Heading */}
                <h2
      className="text-4xl lg:text-5xl font-bold text-white mb-6"
    >
                    Let&apos;s Make Your Software{" "}
                    <span className="text-white">
                        Flawless
                    </span>
                </h2>

                {/* Description */}
                <p
      className="text-xl text-sky-50 mb-10 max-w-2xl mx-auto"
    >
                    Partner with our ISTQB-certified experts and experience enterprise-grade
                    quality assurance that delivers results.
                </p>

                {/* CTA Buttons */}
                <div
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
                    {/* Primary CTA */}
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[theme(color.brand.blue)] font-bold rounded-lg transition-all duration-300 hover:shadow-xl"
                    >
                        <MessageCircle className="relative w-5 h-5" />
                        <span className="relative">Talk to Expert</span>
                        <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="/contact-us"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/70 text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                        <FileText className="w-5 h-5" />
                        <span>Request Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Trust indicators */}
                <div
      className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-sky-50"
    >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>24h Response Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>No Commitment Required</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesCTASection;
