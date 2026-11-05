// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
//
// 2026-11-04 — the opening paragraph was rewritten. It used to read:
//
//   "Testriq operates on a Follow-the-Sun delivery model. We support startups
//    in Silicon Valley, fintech firms in London, and large enterprises in
//    Singapore. Our global reach allows us to provide seamless collaboration
//    and local expertise."
//
// Three separate problems, and the page targets exactly the buyers most likely
// to check:
//
//   1. "fintech firms in London" — there is no UK client we can name. The note
//      at the top of LondonEvidenceSection.tsx records this explicitly: Phyllo
//      and Canva are the engagements closest to that market and NEITHER is a
//      UK client, with the instruction that a named UK reference be added only
//      once cleared for publication. Silicon Valley and Singapore are the same
//      kind of claim with nothing behind them.
//
//   2. "local expertise" implies people on the ground. The only registered
//      address in this codebase is Mira Bhayandar, Maharashtra, with
//      addressCountry "IN" (StructuredData.tsx). There are no international
//      offices, and the brief is explicit: do not imply physical offices in
//      the USA, UK, Australia, Canada, UAE or Germany unless they exist.
//
//   3. "Follow-the-Sun" means work handed between teams in different regions
//      as each day ends. That needs multiple delivery centres. One location
//      can offer shifted and overlapping hours, which is a real and useful
//      thing — but it is not follow-the-sun, and using the term invites a
//      procurement question we would fail. The term also appeared in the
//      heading of the panel on the right, and that panel ILLUSTRATED the
//      hand-off; both were rewritten, because correcting the paragraph alone
//      would have left the same claim on the page in a stronger form.
//
// What replaces it says the true version, which is also the more persuasive
// one for a CTO: India-based, delivered remotely, with overlap arranged around
// the client's working day. Being straightforward about this is worth more than
// a borrowed phrase, because it is checkable.
//
// STILL UNVERIFIED, deliberately left in place: "Support for 50+ languages"
// below. That figure appears nowhere else in the codebase or in any approved
// company material — this component is its only source. It may well be true,
// but removing a published company statistic is a business decision, not a
// code change, so it is flagged for confirmation rather than quietly dropped.
import React from "react";
import { FaGlobe, FaClock, FaUsers, FaLanguage } from "react-icons/fa";

const ManualTestingGlobalReach: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold">
                            <FaGlobe className="mr-2" />
                            Global Delivery Model
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Global Delivery for <span className="text-brand-blue">US, UK, EU, and Asia</span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Testriq operates from <strong>India</strong> and delivers to
                            international clients remotely. Working hours are arranged to give
                            your team a usable overlap for stand-ups, handovers and release
                            sign-off, so testing progresses while your developers are offline and
                            questions are answered while they are not.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-xl">
                                    <FaClock className="text-2xl text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Real-time Collaboration</h3>
                                    <p className="text-gray-600">Active engagement across all time zones to ensure testing never stops.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-50 p-3 rounded-xl">
                                    <FaLanguage className="text-2xl text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Local-Market Testing</h3>
                                    <p className="text-gray-600">Support for 50+ languages and regional configurations for global success.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-50 p-3 rounded-xl">
                                    <FaUsers className="text-2xl text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Flexible Staffing Models</h3>
                                    <p className="text-gray-600">On-shore, Off-shore, and Hybrid models to meet your budget and security needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Representation */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

                            {/* This panel was the picture of the follow-the-sun
                                claim the paragraph used to make: a "24/7"
                                figure over three rows reading Silicon Valley
                                "Active", London "Syncing", Singapore
                                "Handoff" — three delivery centres passing work
                                between them as each day ended. We have one, in
                                India, so none of those states was real, and
                                leaving the panel while correcting the prose
                                would have left the stronger version of the
                                claim on the page in the more persuasive form.

                                It now shows the thing a buyer planning an
                                engagement actually wants: how far their working
                                day sits from ours. The offsets are from IST
                                (UTC+5:30) at standard time and are arithmetic,
                                not estimates — they shift by an hour in the
                                regions that observe daylight saving, which the
                                note below says rather than pretending to a
                                precision this panel cannot hold. */}
                            <div className="relative z-10">
                                <div className="text-6xl font-bold mb-4 opacity-20">IST</div>
                                <h3 className="text-3xl font-bold mb-6">Working-Hour Overlap</h3>

                                <div className="space-y-8">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>Singapore (SGT)</span>
                                        <span className="font-mono text-green-200">+2.5 hrs</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>United Kingdom (GMT)</span>
                                        <span className="font-mono text-purple-200">&minus;5.5 hrs</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span>US West Coast (PST)</span>
                                        <span className="font-mono text-blue-200">&minus;13.5 hrs</span>
                                    </div>
                                </div>

                                <p className="mt-6 text-sm text-blue-100">
                                    Hours relative to our India base at standard time, shifting
                                    by one where daylight saving applies. Overlap windows are
                                    agreed per engagement.
                                </p>

                                <div className="mt-12 flex items-center space-x-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
                                                QA
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">Expert Teams Globally Distributed</span>
                                </div>
                            </div>
                        </div>

                        {/* Float badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="text-4xl font-bold text-brand-blue mb-1">50+</div>
                            <div className="text-sm text-gray-600 font-medium">Languages Supported</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManualTestingGlobalReach;
