// "Why choose Testriq" — Part 5 of the source document.
//
// Two deliberate choices, both from the source:
//
// 1. "since 2010" rather than a duration. The source flags the founding-year
//    wording as needing alignment; organizationSchema, aboutPageSchema and
//    pricingServiceSchema all publish foundingDate "2010", and llms.txt already
//    uses "testing software since 2010". A year is checkable and cannot go
//    stale the way "15+ years" does.
//
// 2. No case studies, testimonials or metrics. The source audit found no
//    verified DPDP or privacy-specific case study, and instructs that the page
//    must not imply DPDP project experience. The closing line says so plainly
//    rather than leaving a silence a reader might fill optimistically — add
//    real examples here once they exist.
//
// CONFIRM BEFORE PUBLISHING: ISO 9001 / ISO 27001 appear on the site, but the
// source asks for the current certificate scope and validity to be confirmed
// before they are named on a compliance-adjacent page.
import React from "react";
import Link from "next/link";
import { FaFlask, FaShieldAlt, FaClipboardCheck, FaCertificate, FaBalanceScale } from "react-icons/fa";

const reasons = [
  {
    icon: FaFlask,
    title: "Established QA practice",
    body: "Manual, automation, API, regression, performance, ETL, IoT and AI application testing, delivered since 2010.",
  },
  {
    icon: FaShieldAlt,
    title: "Existing security testing capability",
    body: "Penetration testing, API security testing and OWASP Top 10-based assessment, which underpin the safeguards testing above.",
  },
  {
    icon: FaClipboardCheck,
    title: "Evidence-first reporting",
    body: "Findings you can reproduce, fix and retest — not a score or a rating.",
  },
  {
    icon: FaCertificate,
    title: "Quality and security credentials",
    body: "ISTQB-certified engineers, with ISO 9001 and ISO 27001 certification held by the company.",
  },
  {
    icon: FaBalanceScale,
    title: "Honest scope",
    body: "We say what testing can and cannot establish, and mark anything that needs legal interpretation for your counsel.",
  },
];

const DPDPWhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose Testriq
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Testriq QA Lab LLP is a software testing company that has been
            working in QA since 2010.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <Icon className="text-2xl text-brand-blue mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-8 max-w-3xl leading-relaxed">
          We have not listed DPDP-specific case studies or testimonials on this
          page, because we will not present work we cannot show you. You can
          review our{" "}
          <Link href="/case-studies" className="text-brand-blue hover:underline">
            published case studies
          </Link>{" "}
          for how we report findings in other engagements.
        </p>
      </div>
    </section>
  );
};

export default DPDPWhyChooseSection;
