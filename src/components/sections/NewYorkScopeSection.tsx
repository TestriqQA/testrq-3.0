// Server Component.
//
// A scope boundary, not a capability list. The "we don't" column is the part
// that earns trust with a New York buyer — naming exchange matching engines and
// ultra-low-latency trading infrastructure as out of scope is more credible
// than a page claiming everything, and it pre-empts a conversation that would
// otherwise waste a sales cycle.
//
// The audit disclaimer matters: Testriq supplies test results and evidence and
// is not an auditor or certifying body. Do not reword this into a compliance
// claim.
import Link from "next/link";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const NewYorkScopeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          What we test, and{" "}
          <span className="text-brand-blue">what we don&rsquo;t</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaCheck className="text-green-600" aria-hidden="true" />
              We test
            </h3>
            <p className="text-gray-700">
              Web and mobile front ends, APIs and microservices, role-based
              access, reports and exports, application load and stress behaviour,
              accessibility against WCAG, and OWASP-based security testing of
              applications and APIs. See{" "}
              <Link href="/automation-testing-services" className="text-brand-blue hover:underline">
                automation testing
              </Link>{" "}
              and{" "}
              <Link href="/mobile-application-testing" className="text-brand-blue hover:underline">
                mobile application testing
              </Link>
              .
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaTimes className="text-red-600" aria-hidden="true" />
              We don&rsquo;t test
            </h3>
            <p className="text-gray-700">
              Exchange matching engines or ultra-low-latency trading
              infrastructure. We don&rsquo;t give legal or regulatory opinions, and
              we don&rsquo;t issue audits or certifications such as SOC 2 or HIPAA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewYorkScopeSection;
