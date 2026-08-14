import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaCertificate, FaHome, FaChevronRight } from "react-icons/fa";
import StructuredData, { createCanonicalBreadcrumb } from "@/components/seo/StructuredData";
import { getBreadcrumbTrail } from "@/lib/seo/breadcrumb-labels";

export interface ToolLandingPageProps {
  /** Display name of the tool, e.g. "Selenium" */
  toolName: string;
  /** Public slug, e.g. "selenium-testing-services" (NO leading slash) */
  slug: string;
  /** Breadcrumb leaf name, e.g. "Selenium Testing Services" */
  breadcrumbName: string;
  /** Hero H1 */
  heroTitle: string;
  /** Hero one-paragraph description */
  heroDescription: string;
  /** "What is X" explainer body */
  whatIs: string;
  /** When-to-use bullet list */
  whenToUse: string[];
  /** Services we offer for this tool */
  services: Array<{ title: string; description: string }>;
  /** Tool-ecosystem integrations grouped by category */
  integrations: Array<{ category: string; tools: string[] }>;
  /** Why Testriq for this tool */
  whyTestriq: Array<{ title: string; description: string }>;
  /** FAQ entries */
  faqs: Array<{ q: string; a: string }>;
  /** "serviceType" field for the Service JSON-LD */
  serviceTypeForSchema: string;
  /** "description" field for the Service JSON-LD */
  schemaDescription: string;
}

const SITE_URL = "https://www.testriq.com";

function toolPageUrl(slug: string) {
  return `${SITE_URL}/${slug}`;
}

function ServiceStructuredData(props: ToolLandingPageProps) {
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
      name: `${props.toolName} Testing Services`,
      itemListElement: props.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      priceSpecification: { "@type": "PriceSpecification", price: "0" },
    },
  };
  return <StructuredData data={schema} />;
}

function FaqStructuredData({ faqs }: { faqs: ToolLandingPageProps["faqs"] }) {
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

const ToolLandingPage: React.FC<ToolLandingPageProps> = (props) => {
  return (
    <div>
      <StructuredData data={createCanonicalBreadcrumb(`/${props.slug}`, props.breadcrumbName)} />
      <ServiceStructuredData {...props} />
      <FaqStructuredData faqs={props.faqs} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
            {/* Trail comes from getBreadcrumbTrail so the visible crumbs and the
                BreadcrumbList JSON-LD above can never drift apart. Tool pages
                resolve to Home → parent service → tool. */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1.5 hover:text-gray-900">
                    <FaHome className="w-4 h-4" aria-hidden="true" /> <span>Home</span>
                  </Link>
                </li>
                {getBreadcrumbTrail(`/${props.slug}`, props.breadcrumbName).map((crumb) => (
                  <React.Fragment key={crumb.label}>
                    <li aria-hidden="true">
                      <FaChevronRight className="w-3 h-3 text-gray-400" />
                    </li>
                    <li>
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-gray-900">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-gray-700 font-medium" aria-current="page">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-brand-blue px-4 py-2 rounded-full gap-2 mb-5">
                  <FaCertificate className="text-white" />
                  <span className="text-white text-sm">ISTQB + ISO 9001 + ISO 27001 Certified Partner</span>
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
                    Talk to a {props.toolName} Lead <FaArrowRight />
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
                    When to use {props.toolName}
                  </h2>
                  <ul className="space-y-3 text-gray-800">
                    {props.whenToUse.map((item) => (
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

        {/* What Is */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is {props.toolName}?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{props.whatIs}</p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our {props.toolName} testing services
              </h2>
              <p className="text-gray-600 text-lg">
                Each service plugs into your existing CI / observability stack rather than replacing it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.services.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {props.toolName} ecosystem we integrate with
              </h2>
              <p className="text-gray-600 text-lg">
                Tooling on its own is noise. The value is in the pipeline it sits in.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.integrations.map((group) => (
                <div key={group.category} className="bg-slate-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">{group.category}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <li key={tool} className="text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full px-3 py-1">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Testriq */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Testriq for {props.toolName}</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
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

        {/* CTA */}
        <section className="bg-brand-blue text-white py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Run your {props.toolName} suite with people who&apos;ve shipped it before</h2>
            <p className="text-white/85 text-lg mb-7 max-w-2xl mx-auto">
              Talk to a Testriq lead — we&apos;ll plug into your existing {props.toolName} stack or stand one up for you, gated to your CI pipeline + audit posture.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform"
            >
              Get a {props.toolName} proposal <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ToolLandingPage;
