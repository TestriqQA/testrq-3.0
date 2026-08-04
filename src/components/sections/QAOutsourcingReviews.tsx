import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { qaOutsourcingReviews, qaOutsourcingRating } from "@/app/(services)/qa-outsourcing-services/reviewsData";

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
 * Verified client reviews for QA Outsourcing.
 *
 * The reviews and the aggregate score come from src/app/(services)/
 * qa-outsourcing-services/reviewsData.ts, the SAME source the AggregateRating
 * JSON-LD in page.tsx reads — so the visible content and the structured data
 * can never drift (a Google requirement for review rich results).
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
                    <p className="mt-3 text-lg text-gray-600">
                        Verified reviews from clients on Clutch and G2.
                    </p>

                    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
                        <span className="text-4xl font-bold text-gray-900 tabular-nums">
                            {qaOutsourcingRating.value}
                        </span>
                        <span className="flex flex-col items-start">
                            <Stars rating={Number(qaOutsourcingRating.value)} className="text-lg" />
                            <span className="mt-1 text-sm text-gray-600">
                                Based on {qaOutsourcingRating.count} verified reviews
                            </span>
                        </span>
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
