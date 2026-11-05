// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import {
  FaUser,
  FaArrowRight,
  FaHome,
  FaChevronRight
} from "react-icons/fa";
import ManualTestingAnimation from "./ManualTestingAnimation";
import TrackedCtaLink from "@/components/analytics/TrackedCtaLink";

const ManualTestingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Manual Testing
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaUser className="mr-2" />
              Manual Testing Specialists
            </div>

            {/* The gradient-clip span this H1 used was `text-transparent
                bg-clip-text bg-brand-blue` — transparent text clipped to a
                SOLID colour, so it rendered as plain brand-blue text while
                being one CSS property away from invisible. Replaced with the
                colour it was already producing. */}
            {/* The {" "} is load-bearing. `block` on the span puts the second
                line below the first on screen, so the heading LOOKS right
                either way — but the h1's text content is what a crawler reads,
                and without it that string is "Manual Software Testing
                Servicesfor Global Product Teams". Verified in the built HTML. */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Manual Software Testing Services{" "}
              <span className="block text-brand-blue">
                for Global Product Teams
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed font-semibold">
              Testriq provides expert manual software testing services to help
              businesses identify defects, validate critical user journeys and
              improve software reliability.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our ISTQB-certified QA professionals work with product managers,
              CTOs and engineering teams to deliver structured testing across
              web, mobile and enterprise applications, following the{" "}
              ISO/IEC/IEEE 29119 standard so coverage is repeatable and
              reportable rather than ad-hoc.
              <br /><br />
              Whether you need project-based testing, additional QA capacity or
              a dedicated testing team, we offer flexible engagement models
              aligned with your development lifecycle — and work alongside{" "}
              <Link href="/automation-testing-services" className="text-brand-blue underline">
                your existing automation
              </Link>{" "}
              rather than asking you to replace it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <TrackedCtaLink
                href="/contact-us"
                eventName="manual_qa_cta_click"
                placement="hero_primary"
                pagePath="/manual-testing-services"
                className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Request a QA Consultation
                <FaArrowRight className="ml-2" />
              </TrackedCtaLink>
              <TrackedCtaLink
                href="/case-studies"
                eventName="manual_qa_cta_click"
                placement="hero_secondary"
                pagePath="/manual-testing-services"
                className="border border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue/5 transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Case Studies
              </TrackedCtaLink>
            </div>

            {/* Trust indicators.
                2026-11-04 — all four of these were replaced, because all four
                were wrong in some way:

                  - "5,000+ Test Cases Executed" contradicted the rest of the
                    site by a factor of 100. The approved figure, used on every
                    city page, is 500K+ for that same metric. This understated
                    our own record by two orders of magnitude.
                  - "98% Bug Detection Rate" appears nowhere else in the
                    codebase. The nearest real figures are a case study's "98%
                    Regression Detection" and security's "98% Vulnerability
                    Detection" — neither is a general bug-detection rate, and
                    a blanket 98% is not something we can evidence.
                  - "800+ Applications Tested" appears nowhere else at all.
                  - "24/7 Expert Support" directly contradicts the delivery
                    model described in ManualTestingGlobalReach, which is
                    overlapping working hours from one location, not
                    round-the-clock staffing.

                What replaces them are the four the brief specifies, each
                checked against existing approved copy before being used here:
                15+ years (about-us), 180 certified professionals (home hero,
                ManagedTestingStrategy), 500K+ test cases (CityData), and the
                two ISO certifications (named across several service pages). */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  15+
                </div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  180
                </div>
                <div className="text-sm text-gray-600">Certified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  500K+
                </div>
                <div className="text-sm text-gray-600">Test Cases Executed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-blue">
                  ISO
                </div>
                <div className="text-sm text-gray-600">9001 &amp; 27001 Certified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Manual Testing Dashboard */}
          <div className="relative">
            <ManualTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingHeroSection;
