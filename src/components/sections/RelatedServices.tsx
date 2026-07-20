import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { getRelatedServices } from '@/lib/seo/blog-service-map';

interface RelatedServicesProps {
    /** Slugs from `post.categories` — the primary matching signal. */
    categorySlugs?: readonly string[];
    /** Raw strings from `post.tags` — keyword fallback. */
    tags?: readonly string[];
    /** Post title, used only to personalise the section intro. */
    postTitle?: string;
    /** Max cards. 3 fits the grid cleanly at every breakpoint. */
    limit?: number;
}

/**
 * Contextual links from a blog post to the service pages that match its topic.
 *
 * SEO intent (see src/lib/seo/blog-service-map.ts for the full rationale):
 * the blog carries 82% of site-wide impressions but linked only to other blog
 * URLs, so PageRank pooled in the blog while the commercial pages sat at
 * positions 29-40. This is the return path.
 *
 * Deliberately server-rendered with plain <Link> elements — no client
 * component, no accordion, no JS gate. The whole point is that the anchors
 * exist in the initial HTML where a crawler will actually find them. (The
 * /locations-we-serve hub is the cautionary tale: its city links sit behind
 * two collapsed accordions and render zero anchors server-side.)
 */
export default function RelatedServices({
    categorySlugs = [],
    tags = [],
    postTitle,
    limit = 3,
}: RelatedServicesProps) {
    const services = getRelatedServices(categorySlugs, tags, limit);

    if (services.length === 0) return null;

    return (
        <section
            aria-labelledby="related-services-heading"
            className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
        >
            <div className="mb-6">
                <h2
                    id="related-services-heading"
                    className="text-2xl font-bold text-slate-900 sm:text-3xl"
                >
                    Need help putting this into practice?
                </h2>
                <p className="mt-2 text-base text-slate-600">
                    {postTitle
                        ? `Testriq delivers the services behind this article as managed engagements.`
                        : `Testriq delivers these as managed QA engagements.`}{' '}
                    ISTQB-certified engineers, scoped to your product&apos;s risk profile.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-300 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {service.description}
                            </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                            Explore service
                            <FaArrowRight
                                aria-hidden="true"
                                className="h-3 w-3 transition-transform group-hover:translate-x-1"
                            />
                        </span>
                    </Link>
                ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Talk to a QA specialist
                    <FaArrowRight aria-hidden="true" className="h-3 w-3" />
                </Link>
            </div>
        </section>
    );
}
