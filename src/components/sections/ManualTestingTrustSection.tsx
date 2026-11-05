// Server Component.
//
// Added 2026-11-04 — brief Section 11, "Reviews and International Trust".
//
// The figures and profile URLs are NOT written here. They come from
// `reviewPlatforms` in src/app/(services)/qa-outsourcing-services/reviewsData.ts,
// which is the single place any platform score is allowed to live. That file
// records when each figure was last checked against the live profile and what
// wording the platform itself uses for its count. Retyping "4.8" into this
// component would create a second number for the same fact, which is how the
// Clutch count ended up understated on two other pages before 2026-10-29.
//
// The totals in the summary line are COMPUTED from that array, not written
// down, so adding a fifth platform cannot leave a stale total behind.
//
// What is deliberately NOT here
// -----------------------------
// 1. No aggregateRating, and no Review objects, in any schema this page emits.
//    These reviews were collected BY Clutch, G2, GoodFirms and Google, not by
//    this site. Google treats reviews of an organisation published on that
//    organisation's own site as self-serving and ineligible for review rich
//    results — including when they arrive through a third-party widget. The
//    markup was removed from /qa-outsourcing-services on 2026-10-29 for this
//    reason and must not reappear here. Showing the scores attributed and
//    linked, as below, is the honest alternative.
//
// 2. No blended score. Four platforms covering four different review sets
//    averaged together produces a number nobody publishes and nobody can
//    check. The counts ARE summed, which is a different operation: 55 is the
//    true number of published reviews across the four, and each platform's
//    own rating stays beside its own count.
//
// 3. No review quotations. /qa-outsourcing-services reproduces review text
//    that was cleared for that page; nothing establishes the same clearance
//    for this one, and the brief requires permission before reproducing full
//    review text. The summary line below therefore states only what the repo
//    can evidence — counts, and the reviewer locations already verified for
//    LondonEvidenceSection.
//
// 4. No platform logos. public/ holds ClutchIO_Logo.png and
//    GoodFirms_Logo.png but nothing for G2 or Google Reviews, and each
//    platform's brand guidelines govern how its mark may be used. Two logos
//    and two text labels would look broken, and sourcing the other two marks
//    without checking their terms is not a call to make in a code change. Text
//    wordmarks for all four are consistent and honest; the missing assets are
//    listed as an outstanding item.
//
// Links are `noopener noreferrer` WITHOUT nofollow, matching
// QAOutsourcingReviews. These are genuine editorial references to our own
// verified profiles — not paid, sponsored or user-generated — so nofollow
// would not be warranted.
import Link from "next/link";
import React from "react";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { reviewPlatforms } from "@/app/(services)/qa-outsourcing-services/reviewsData";

const totalReviews = reviewPlatforms.reduce((sum, p) => sum + p.count, 0);

const ManualTestingTrustSection: React.FC = () => {
    return (
        <section
            aria-labelledby="manual-testing-trust-heading"
            className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-10">
                    <h2
                        id="manual-testing-trust-heading"
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
                    >
                        Trusted by Businesses for Software{" "}
                        <span className="text-brand-blue">Testing and QA Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {totalReviews} published client reviews across four independent
                        platforms, each holding its own score. We do not average them into a
                        single figure — the sets are different, so a blended number would be one
                        no platform publishes. Every rating below links to the profile it comes
                        from, so you can check it rather than take our word for it. Reviewers
                        include teams in India, Portugal and Australia.
                    </p>
                </div>

                {/* One card per platform, driven by `reviewPlatforms`. The grid
                    reflows at every breakpoint, so a platform can be added or
                    dropped in reviewsData.ts without touching this layout. */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {reviewPlatforms.map((platform) => (
                        <article
                            key={platform.name}
                            className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6"
                        >
                            <h3 className="text-base font-bold uppercase tracking-wide text-gray-500">
                                {platform.name}
                            </h3>

                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-gray-900 tabular-nums">
                                    {platform.rating}
                                </span>
                                <span className="text-sm text-gray-500">out of 5</span>
                            </div>

                            <div
                                className="mt-2 flex items-center gap-1 text-amber-400"
                                aria-hidden="true"
                            >
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar
                                        key={i}
                                        className={
                                            i < Math.round(Number(platform.rating))
                                                ? "text-amber-400"
                                                : "text-gray-200"
                                        }
                                    />
                                ))}
                            </div>

                            <p className="mt-3 flex-grow text-sm text-gray-600">
                                From {platform.count} {platform.countLabel} on {platform.name}.
                            </p>

                            <Link
                                href={platform.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View client reviews on ${platform.name}: ${platform.rating} out of 5 from ${platform.count} ${platform.countLabel} — opens ${platform.name} in a new tab`}
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
                            >
                                View Client Reviews
                                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManualTestingTrustSection;
