import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { qaOutsourcingReviews, reviewPlatforms } from "@/app/(services)/qa-outsourcing-services/reviewsData";

/** Render a 0–5 rating as filled / half / empty stars. */
function Stars({ rating, className = "" }: { rating: number; className?: string }) {
    return (
        <span className={`inline-flex items-center ${className}`} aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => {
                const position = i + 1;
                if (rating >= position) return <FaStar key={i} className="text-amber-400" />;
                if (rating >= position - 0.5) return <FaStarHalfAlt key={i} className="text-amber-400" />;
                return <FaRegStar key={i} className="text-amber-400" />;
            })}
        </span>
    );
}

/**
 * Third-party client reviews for QA Outsourcing.
 *
 * Both the platform scores and the individual reviews come from src/app/
 * (services)/qa-outsourcing-services/reviewsData.ts.
 *
 * Nothing here is mirrored into JSON-LD. These reviews were collected by
 * Clutch, G2 and Google rather than by this site, so marking them up as the
 * page's own AggregateRating would breach Google's review-snippet policy; the
 * markup was removed on 2026-10-29 and page.tsx records why. Showing the
 * scores attributed and linked, as below, is the honest alternative.
 */
export default function QAOutsourcingReviews() {
    return (
        <section
            aria-labelledby="qa-reviews-heading"
            className="w-full bg-white py-16 px-8 md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2
                        id="qa-reviews-heading"
                        className="text-3xl font-bold text-gray-900 sm:text-4xl"
                    >
                        What Our Clients Say
                    </h2>
                    {/* One figure per platform, each attributed to the platform
                        that published it and linked to the profile a visitor can
                        check it against. Deliberately NOT blended into a single
                        score: the three cover different review sets, so an
                        average of them would be a number nobody publishes. */}
                    <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
                        {reviewPlatforms.map((platform) => (
                            <Link
                                key={platform.name}
                                href={platform.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${platform.rating} out of 5 on ${platform.name}, from ${platform.count} ${platform.countLabel} — opens ${platform.name} in a new tab`}
                                className="flex min-w-[14rem] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                            >
                                <span className="text-4xl font-bold text-gray-900 tabular-nums">
                                    {platform.rating}
                                </span>
                                <span className="flex flex-col items-start text-left">
                                    <span className="text-base font-semibold text-gray-900">
                                        {platform.name}
                                    </span>
                                    <Stars rating={Number(platform.rating)} className="text-base" />
                                    <span className="mt-1 text-sm text-gray-600">
                                        {platform.count} {platform.countLabel}{" "}
                                        <span aria-hidden="true">&#8599;</span>
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {qaOutsourcingReviews.map((review, i) => (
                        <article
                            key={i}
                            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <Stars rating={review.rating} />
                                <span className="text-sm font-semibold text-gray-500">
                                    {review.rating.toFixed(1)}
                                </span>
                            </div>

                            <FaQuoteLeft aria-hidden="true" className="mb-3 h-5 w-5 text-blue-200" />
                            <p className="text-base font-semibold text-gray-900">
                                &ldquo;{review.quote}&rdquo;
                            </p>
                            <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600">
                                {review.body}
                            </p>

                            <div className="mt-6 border-t border-slate-100 pt-4">
                                <p className="text-sm font-semibold text-gray-900">
                                    {review.authorName}
                                </p>
                                <p className="text-xs text-gray-500">{review.authorTitle}</p>
                                <p className="mt-2 text-xs font-medium text-gray-400">
                                    {review.sourceUrl ? (
                                        <Link
                                            href={review.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600"
                                        >
                                            Source: {review.source} &#8599;
                                        </Link>
                                    ) : (
                                        <>Source: {review.source}</>
                                    )}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
