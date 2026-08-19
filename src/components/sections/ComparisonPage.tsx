import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

/**
 * An outbound partner / tooling mention rendered as its own section.
 *
 * `body` is held as one readable sentence-flow string rather than pre-split
 * fragments, so the copy stays reviewable at the call site. Only the FIRST
 * occurrence of `anchor` inside it becomes the link — products tend to get named
 * several times in a paragraph, and repeating the same anchor to the same URL
 * adds nothing and reads as stuffing.
 */
export interface ComparisonPartner {
  /** Section heading */
  title: string;
  /** Body copy — the first occurrence of `anchor` becomes the outbound link */
  body: string;
  /** Anchor text, e.g. "Shiplight" */
  anchor: string;
  /** Absolute outbound URL */
  href: string;
}

export interface ComparisonPageProps {
  /** Display name of tool A, e.g. "Selenium" */
  toolA: string;
  /** Display name of tool B, e.g. "Cypress" */
  toolB: string;
  /** Slug, e.g. "selenium-vs-cypress" (no leading slash) */
  slug: string;
  /** Breadcrumb leaf name, e.g. "Selenium vs Cypress" */
  breadcrumbName: string;
  /** Hero H1 */
  heroTitle: string;
  /** One-paragraph TL;DR shown in hero */
  tldr: string;
  /** "Pick A when" + "Pick B when" verdict callouts */
  pickAWhen: string[];
  pickBWhen: string[];
  /** Side-by-side table — each row is a dimension with A + B cells */
  comparisonTable: Array<{ dimension: string; a: string; b: string }>;
  /** Deep-dive dimensions — bullet "A approach vs B approach" explained */
  dimensions: Array<{ title: string; a: string; b: string }>;
  /** Migration notes — when going between the two */
  migration: string;
  /**
   * Optional partner / tooling callout, rendered between the migration notes and
   * the related links. Opt-in per page: the sibling comparison pages that don't
   * pass it render exactly as they do today.
   */
  partner?: ComparisonPartner;
  /** FAQ entries */
  faqs: Array<{ q: string; a: string }>;
  /** Cross-links to related tool / process pages */
  related?: Array<{ href: string; title: string; description: string }>;
}

const SITE_URL = "https://www.testriq.com";

function ArticleStructuredData(props: ComparisonPageProps) {
  const url = `${SITE_URL}/${props.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.heroTitle,
    description: props.tldr,
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Testriq QA Lab" },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Testriq QA Lab",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/testriq-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return <StructuredData data={schema} />;
}

function FaqStructuredData({ faqs }: { faqs: ComparisonPageProps["faqs"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <StructuredData data={schema} />;
}

/**
 * Renders the partner copy with the first occurrence of `anchor` turned into the
 * outbound link.
 *
 * Deliberately dofollow: no rel="nofollow" and no rel="sponsored". rel is
 * "noopener" alone — "noreferrer" is omitted on purpose so the partner still sees
 * Testriq in their referrer data, and neither value affects link equity either way.
 *
 * If `anchor` isn't found in `body` the copy renders verbatim, so a typo in the
 * anchor shows up as a missing link in review instead of a crash.
 */
function PartnerCopy({ body, anchor, href }: ComparisonPartner) {
  const at = body.indexOf(anchor);
  if (at === -1) return <>{body}</>;
  return (
    <>
      {body.slice(0, at)}
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-blue/80"
      >
        {anchor}
      </a>
      {body.slice(at + anchor.length)}
    </>
  );
}

const ComparisonPage: React.FC<ComparisonPageProps> = (props) => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb(`/${props.slug}`, props.breadcrumbName)} />
      <ArticleStructuredData {...props} />
      <FaqStructuredData faqs={props.faqs} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 pb-14">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1.5 hover:text-gray-900">
                    <FaHome className="w-4 h-4" /> <span>Home</span>
                  </Link>
                </li>
                <li aria-hidden="true">
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                </li>
                <li>
                  <span className="text-gray-700 font-medium">{props.breadcrumbName}</span>
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
              <FaCertificate className="text-white" />
              <span className="text-white text-sm">Independent comparison · ISTQB + ISO certified</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              {props.heroTitle}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">{props.tldr}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
              >
                Get a tool-choice recommendation <FaArrowRight />
              </Link>
              <Link
                href="/qa-process"
                className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
              >
                See our QA process
              </Link>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick verdict</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pick {props.toolA} when…</h3>
                <ul className="space-y-2">
                  {props.pickAWhen.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pick {props.toolB} when…</h3>
                <ul className="space-y-2">
                  {props.pickBWhen.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{props.toolA} vs {props.toolB} — at a glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <thead className="bg-brand-blue text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Dimension</th>
                    <th className="text-left p-4 font-semibold">{props.toolA}</th>
                    <th className="text-left p-4 font-semibold">{props.toolB}</th>
                  </tr>
                </thead>
                <tbody>
                  {props.comparisonTable.map((row) => (
                    <tr key={row.dimension} className="border-t border-gray-200 align-top">
                      <td className="p-4 font-semibold text-gray-900 w-1/4">{row.dimension}</td>
                      <td className="p-4 text-gray-700">{row.a}</td>
                      <td className="p-4 text-gray-700">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dimensions Deep-Dive */}
        <section className="bg-white py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Where the tools actually differ</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl">
              Marketing pages show feature checklists. Below are the dimensions teams actually feel after 6 months of using either tool.
            </p>
            <div className="space-y-6">
              {props.dimensions.map((d) => (
                <article key={d.title} className="rounded-2xl border border-gray-100 p-6 lg:p-7">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{d.title}</h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-slate-50 rounded-xl p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-2">
                        {props.toolA}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{d.a}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-2">
                        {props.toolB}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{d.b}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Migration */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Migration considerations</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{props.migration}</p>
          </div>
        </section>

        {/* Partner / tooling callout — deliberately the same plain treatment as
            the Migration section above it (slate-50, max-w-4xl, no card), so it
            reads as body copy rather than an ad slot. The two slate-50 bands run
            together as one grey region, so the full py-14 on both sides stacked to
            ~112px of dead space above this heading. Trimmed to pt-4 (16px + the
            56px Migration already contributes below its copy = 72px). Only this
            section's padding is reduced — Migration is shared by all six
            comparison pages and stays untouched. */}
        {props.partner && (
          <section className="bg-slate-50 pt-4 pb-14">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{props.partner.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                <PartnerCopy {...props.partner} />
              </p>
            </div>
          </section>
        )}

        {/* Related */}
        {props.related && props.related.length > 0 && (
          <section className="bg-white py-14">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {props.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="block bg-slate-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all"
                  >
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{r.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{r.description}</p>
                    <span className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1">
                      Read <FaArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {props.faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-xl border border-gray-100 p-5 open:shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-brand-blue group-open:rotate-90 transition-transform flex-shrink-0">
                      <FaChevronRight />
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-blue text-white py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Not sure which one is right for you?</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq QA lead. We&apos;ll map {props.toolA} and {props.toolB} against your stack, team, and audit posture — and recommend the one that actually fits.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a tool recommendation <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComparisonPage;
