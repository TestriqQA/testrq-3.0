// PART 4 / JOB A3 — contextual links from a service page to the case studies
// that prove it.
//
// Rendered in the page body rather than the footer, because the whole point of
// PART 4 is that boilerplate nav/footer links are discounted: these pages
// already have ~1,457 of those. A link from inside the body with descriptive
// anchor text is the signal that counts.
//
// Server component on purpose. The titles come from Sanity, but if that call
// fails the links still render with a slug-derived title — the inbound link is
// the deliverable here, so it must not depend on Sanity being reachable.

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { sanityGetAllCaseStudies } from "@/lib/sanity-data-adapter";
import { caseStudyFallbackTitle, relatedCaseStudiesFor } from "@/lib/seo/related-case-studies";

interface RelatedCaseStudiesProps {
    /** The service page's own slug, e.g. "api-testing". */
    serviceSlug: string;
    /** Optional heading override. */
    heading?: string;
}

export default async function RelatedCaseStudies({
    serviceSlug,
    heading = "Related case studies",
}: RelatedCaseStudiesProps) {
    const slugs = relatedCaseStudiesFor(serviceSlug);
    if (slugs.length === 0) return null;

    let titles = new Map<string, string>();
    try {
        const all = await sanityGetAllCaseStudies();
        titles = new Map(all.map((study) => [study.slug, study.title]));
    } catch (err) {
        console.error(`Sanity error fetching case study titles for /${serviceSlug}:`, err);
    }

    const cards = slugs.map((slug) => ({
        slug,
        title: titles.get(slug) ?? caseStudyFallbackTitle(slug),
    }));

    return (
        <section
            aria-labelledby="related-case-studies-heading"
            className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    id="related-case-studies-heading"
                    className="text-3xl font-bold text-gray-900 mb-2"
                >
                    {heading}
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl">
                    Real engagements where Testriq delivered measurable results.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <li key={card.slug}>
                            <Link
                                href={`/${card.slug}`}
                                className="group flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-[theme(color.brand.blue)]">
                                    {card.title}
                                </span>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[theme(color.brand.blue)]">
                                    Read the case study
                                    <FaArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
