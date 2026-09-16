// Server Component — no interactive APIs, so it renders on the server and ships
// no client JS. Do not add hooks here without moving the interactive part into
// its own child component.
import Link from "next/link";
import React from "react";
import { FaCheckDouble, FaArrowRight, FaHome, FaChevronRight } from "react-icons/fa";

const QAServicesHeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link href="/" className="flex items-center gap-2 hover:text-brand-blue transition-colors">
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">Software QA Services</span>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
            <FaCheckDouble className="mr-2" />
            ISTQB-Certified QA Engineers
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Software QA Services
          </h1>

          <p className="text-lg text-gray-700">
            Testriq is a pure-play quality assurance company. Testing is not a side
            service we bolt onto development work &mdash; it is the only thing we do.
            That means functional, automation, performance, security, accessibility
            and release testing delivered by engineers who have spent their careers
            in QA rather than rotating in from a delivery team.
          </p>

          <p className="text-lg text-gray-700">
            We work as an extension of your engineering team: inside your sprints,
            your Jira, your CI pipeline, reporting against the release dates you
            already committed to. Some clients hand us a whole product; others bring
            us in for one release, one audit, or one stubborn area of the suite.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact-us"
              title="Talk to a QA engineer at Testriq"
              className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] bg-brand-blue text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              Talk to a QA Engineer
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              title="Read Testriq QA case studies"
              className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:border-brand-blue transition-colors duration-300"
            >
              See Our Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAServicesHeroSection;
