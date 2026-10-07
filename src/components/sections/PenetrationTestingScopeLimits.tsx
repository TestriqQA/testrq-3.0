// SEO handoff (Sept 2026) — PART C, new section placed immediately before the
// FAQ section. Copy is verbatim from the handoff.
//
// NOTE FROM THE HANDOFF — do not delete this section to make the page sound
// stronger. Stating scope limits is a deliberate trust signal that Google's
// quality guidelines reward, and buyers respond to it.
//
// Server Component — no interactive APIs, so this ships zero client JS.
import React from "react";
import { FaBalanceScale } from "react-icons/fa";

const PenetrationTestingScopeLimits: React.FC = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 border-l-4 border-brand-blue rounded-r-2xl p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-brand-blue w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaBalanceScale className="text-white text-xl" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            What a Penetration Test Does Not Cover
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A penetration test is a point-in-time assessment of an agreed
                            scope. It is not a guarantee that no vulnerability exists
                            anywhere in your environment, and it does not replace continuous
                            monitoring, secure development practice or an incident response
                            plan.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We will also tell you during scoping if what you have asked for
                            is not the right assessment for your goal. If a vulnerability
                            assessment would satisfy your compliance requirement at lower
                            cost than a full penetration test, we will say so.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PenetrationTestingScopeLimits;
