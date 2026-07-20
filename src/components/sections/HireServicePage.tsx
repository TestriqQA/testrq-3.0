import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";

export interface HireServicePageProps {
  /** Display name of the offering, e.g. "Hire QA Engineer" */
  offeringName: string;
  /** Public slug (no leading slash) */
  slug: string;
  /** Breadcrumb leaf name */
  breadcrumbName: string;
  /** Hero H1 */
  heroTitle: string;
  /** Hero one-paragraph description */
  heroDescription: string;
  /** What you get bullet list (shown in hero right column) */
  whatYouGet: string[];
  /** Engagement models — 3-4 ways the client can engage */
  engagementModels: Array<{
    title: string;
    description: string;
    bestFor: string;
  }>;
  /** Roles available — QA Engineer, Automation Engineer, Performance Engineer, Security Engineer, etc. */
  roles: Array<{
    title: string;
    skills: string[];
    typicalEngagement: string;
  }>;
  /** "How it works" — 4-5 step process from inquiry to engineer on your team */
  process: Array<{ step: string; title: string; description: string }>;
  /** Why Testriq for this offering */
  whyTestriq: Array<{ title: string; description: string }>;
  /** FAQ entries */
  faqs: Array<{ q: string; a: string }>;
  /** "serviceType" field for Service JSON-LD */
  serviceTypeForSchema: string;
  /** "description" field for Service JSON-LD */
  schemaDescription: string;
  /** Optional related internal links, rendered as a "Related services" strip */
  relatedLinks?: Array<{ label: string; href: string }>;
}

const SITE_URL = "https://www.testriq.com";

function ServiceStructuredData(props: HireServicePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.heroTitle,
    description: props.schemaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Testriq QA Lab",
      url: SITE_URL,
    },
    serviceType: props.serviceTypeForSchema,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${props.offeringName} — Engagement Models`,
      itemListElement: props.engagementModels.map((m) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: m.title,
          description: m.description,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      priceCurrency: "USD",
      priceSpecification: { "@type": "PriceSpecification", price: "0" },
    },
  };
  return <StructuredData data={schema} />;
}

function FaqStructuredData({ faqs }: { faqs: HireServicePageProps["faqs"] }) {
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

const HireServicePage: React.FC<HireServicePageProps> = (props) => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb(`/${props.slug}`, props.breadcrumbName)} />
      <ServiceStructuredData {...props} />
      <FaqStructuredData faqs={props.faqs} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
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

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                  <FaCertificate className="text-white" />
                  <span className="text-white text-sm">ISTQB + ISO 9001 + ISO 27001 Certified Talent</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  {props.heroTitle}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
                  {props.heroDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
                  >
                    Talk to a hiring lead <FaArrowRight />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 border border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-md hover:bg-brand-blue/5 transition-colors"
                  >
                    Read case studies
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                    What you get
                  </h2>
                  <ul className="space-y-3 text-gray-800">
                    {props.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Engagement models
              </h2>
              <p className="text-gray-600 text-lg">
                Different engagements fit different stages. The right model is usually the one that matches how your team actually wants to absorb capacity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {props.engagementModels.map((m) => (
                <div key={m.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{m.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-1">Best for</p>
                  <p className="text-sm text-gray-700">{m.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Roles you can hire</h2>
              <p className="text-gray-600 text-lg">
                Specialisations Testriq has bench depth in. Each role is interviewed against the skill matrix below; certifications backed by ISTQB syllabi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.roles.map((r) => (
                <div key={r.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{r.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Core skills</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {r.skills.map((s) => (
                      <li key={s} className="text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full px-3 py-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Typical engagement: </span>
                    {r.typicalEngagement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
              <p className="text-gray-600 text-lg">
                From inquiry to engineer-on-your-team in days, not months.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {props.process.map((p) => (
                <div key={p.step} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-brand-blue mb-3">{p.step}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Testriq */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Testriq for {props.offeringName.toLowerCase()}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {props.whyTestriq.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {props.faqs.map((f) => (
                <details key={f.q} className="group bg-slate-50 rounded-xl border border-gray-100 p-5 open:shadow-sm">
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

        {/* Related services — optional internal links for discovery + SEO */}
        {props.relatedLinks && props.relatedLinks.length > 0 && (
          <section className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Related services</h2>
              <div className="flex flex-wrap gap-3">
                {props.relatedLinks.map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    {related.label}
                    <FaArrowRight className="text-xs" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-brand-blue text-white py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to add QA capacity without the hiring drag?</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq hiring lead. We&apos;ll match your stack, scale, and audit posture to the right engineer profile — typically with a CV in 48 hours.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a proposal <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HireServicePage;
