// SEO handoff (Sept 2026) — repositioned from "Security Testing" to the
// "penetration testing services" query. H1, intro copy and both CTAs replaced
// per PART C of the handoff. The reviewer byline is a new element (E-E-A-T
// signal); the named reviewer is not on /our-team as an individual profile, so
// the link points at the team page itself rather than a 404 anchor.
//
// Converted to a Server Component: the "Watch Demo" lightbox was the only
// client API on this section and the handoff replaces that button with a
// second /contact-us CTA. Matches the F-21.1 precedent elsewhere in this
// folder — no useState, no "use client", less JS on the page's LCP section.
import Link from "next/link";
import React from "react";
import { FaShieldAlt, FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";
import SecurityTestingAnimation from "./SecurityTestingAnimation";

const SecurityTestingHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
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
            Security Testing
          </span>
        </div>
        {/* items-center: the animation is ~444px against a ~990px text column.
            Without it the widget top-aligns and dumps the entire height
            difference as dead space beneath itself. Matches the cyber hero. */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="hidden md:inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
              <FaShieldAlt className="mr-2" />
              Cybersecurity Testing Experts
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Penetration Testing Services for
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Global Enterprises
              </span>
            </h1>

            {/* Reviewer byline — E-E-A-T signal, per handoff PART C */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Reviewed by{" "}
              <Link
                href="/our-team"
                className="text-gray-600 underline decoration-gray-300 underline-offset-2 hover:text-brand-blue hover:decoration-brand-blue transition-colors"
              >
                Krishnakant Sharma
              </Link>
              , OSCP+ · OSCP
              <br />
              Security Tester, Testriq QA Lab
              <br />
              Last updated:{" "}
              <time dateTime="2026-09-10">September 10, 2026</time>
            </p>

            <div className="space-y-2">
              <p className="text-xl text-gray-600 leading-relaxed">
                Penetration testing services simulate a real attack on your
                systems, before an actual attacker finds the way in. At Testriq,
                certified security engineers manually attempt to break into your
                web applications, APIs, mobile apps, networks and cloud
                infrastructure, then hand you a prioritised report of exactly
                what they found and how to fix it.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are an independent testing laboratory, not a reseller of
                security tooling. Every automated finding is verified by hand
                before it reaches your report, so your engineering team spends
                its time on real vulnerabilities instead of false positives.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Testriq delivers penetration testing services to enterprises
                across the United States, United Kingdom, European Union and
                UAE.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Request a Scoped Quote
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="border-2 cursor-pointer border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                  Talk to a Security Engineer
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-600">
                  8,500+
                </div>
                <div className="text-sm text-gray-600">
                  Vulnerabilities Found
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-600">
                  99.8%
                </div>
                <div className="text-sm text-gray-600">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  1,800+
                </div>
                <div className="text-sm text-gray-600">Apps Secured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Security Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Security Testing Dashboard */}
          <div className="relative top-10">
            <SecurityTestingAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestingHeroSection;
