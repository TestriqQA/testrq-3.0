// Server Component — no interactive APIs. Follows the ISO42001HeroSection
// pattern (breadcrumb, badge, h1, CTAs) so the services family stays visually
// consistent.
//
// Copy source: "DPDP Compliance Testing Services: SEO Strategy and Service
// Page" (14 Oct 2026), Part 5. Two rules from that document are load-bearing
// here and in every sibling section:
//   1. The page sells evidence, not certification. There is no official DPDP
//      certificate for ordinary businesses, so the deliverable is a technical
//      test report. Nothing on this page may imply otherwise.
//   2. Nothing invents clients, case studies, credentials or timelines. The
//      source marks unverified statements [INTERNAL CONFIRMATION REQUIRED];
//      those are either omitted or written so they claim only what the rest of
//      the site already evidences.
import Link from "next/link";
import React from "react";
import { FaShieldAlt, FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

const DPDPHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 lg:pb-28 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-sky-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link href="/" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">DPDP Compliance Testing Services</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaShieldAlt className="mr-2" />
              Privacy-Focused QA
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
              <span className="text-brand-blue">DPDP Compliance Testing Services</span>{" "}
              for Applications and Platforms
            </h1>

            <p className="text-xl text-gray-800 font-medium leading-relaxed">
              Check how your product actually handles personal data, with test
              evidence your team can act on.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              India&apos;s Digital Personal Data Protection (DPDP) Act and Rules
              set expectations for consent, notices, security safeguards, data
              rights and breach response. Policies describe intent. Your
              application is where those promises either work or fail.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Testriq QA Lab provides technical verification of consent flows,
              data rights workflows, deletion behaviour, access controls and
              breach-response processes inside your web, mobile and{" "}
              <Link href="/api-testing" className="text-brand-blue hover:underline">
                API-based products
              </Link>
              . You receive reproducible findings, evidence and a retest, within
              an agreed scope.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Book a DPDP Readiness Assessment
                <FaArrowRight />
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-brand-blue font-semibold rounded-xl border border-brand-blue hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Discuss Your Testing Requirements
              </Link>
            </div>

            {/* Kept directly under the CTAs, not in the footer disclaimer only.
                The source document treats this as part of the offer itself:
                a reader deciding whether to enquire has to know what they are
                and are not buying before they click. */}
            <p className="text-sm text-gray-600 italic pt-1">
              Technical testing service. Not legal advice, not a legal
              determination of compliance and not a government certification.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              What a DPDP readiness assessment covers
            </h2>
            <ul className="space-y-4">
              {[
                "Consent capture, withdrawal and the processing that follows",
                "Data Principal rights: access, correction, erasure, grievance",
                "Deletion and retention behaviour across every connected store",
                "API and application security safeguards",
                "Personal data in logs, exports and non-production environments",
                "Breach detection and notification workflows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaShieldAlt className="text-brand-blue mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-6 pt-5 border-t border-gray-100">
              Every finding ships with steps to reproduce, evidence and a
              severity, then a retest once your team has fixed it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPDPHeroSection;
