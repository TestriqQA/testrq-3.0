// PART 4 / JOB A2 — contextual links from one service page to closely related
// service pages.
//
// Distinct from RelatedServices in this same folder, which is the BLOG -> service
// return path (driven by src/lib/seo/blog-service-map.ts and rendered on blog
// post pages). This one is service -> service, driven by the brief's Job A2
// table, and exists because all 12 orphan service pages had exactly one inbound
// link each — and that one source was /website-map for every one of them. A
// sitemap listing is an index, not a contextual link.
//
// Rendered in the page body, not the footer: these pages already carry ~1,457
// nav/footer links each and Google discounts boilerplate.
//
// Anchor text is the target page's own phrase via slugToTitle (which handles
// QA/IoT/AI/SaaS acronyms) rather than "learn more". No Sanity dependency — the
// slugs are static, so this renders the same whether or not the CMS is up.

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { slugToTitle } from "@/lib/seo/discover-routes";
import { relatedServicesFor } from "@/lib/seo/related-services";

interface ServiceCrossLinksProps {
    /** The page's own slug, e.g. "api-testing". */
    serviceSlug: string;
    /** Optional heading override. */
    heading?: string;
}

export default function ServiceCrossLinks({
    serviceSlug,
    heading = "Related testing services",
}: ServiceCrossLinksProps) {
    const slugs = relatedServicesFor(serviceSlug);
    if (slugs.length === 0) return null;

    return (
        <section
            aria-labelledby="service-cross-links-heading"
            className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    id="service-cross-links-heading"
                    className="text-3xl font-bold text-gray-900 mb-2"
                >
                    {heading}
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl">
                    Specialised services that pair closely with this one.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {slugs.map((slug) => (
                        <li key={slug}>
                            <Link
                                href={`/${slug}`}
                                className="group flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-[theme(color.brand.blue)]">
                                    {slugToTitle(slug)}
                                </span>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[theme(color.brand.blue)]">
                                    Explore {slugToTitle(slug)}
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
