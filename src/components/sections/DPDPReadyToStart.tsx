// Closing CTA and disclaimer — Part 5 of the source document.
//
// The disclaimer is rendered on the page rather than kept in a policy file.
// On a legal-adjacent service page the scope limit is part of the offer, and
// the source requires it to appear in the copy itself.
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

const DPDPReadyToStart: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to test how your product handles personal data?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us about your application, your privacy-related concerns and
            your readiness goals. We will respond with a proposed scope and next
            steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mt-8 max-w-3xl mx-auto text-center">
          <span className="font-semibold">Disclaimer:</span> Testriq&apos;s DPDP
          technical readiness and testing services assess defined application
          behaviours and technical controls within the agreed scope. They do not
          constitute legal advice, a legal determination of compliance, or
          government-issued certification. Organisations should consult
          qualified legal or privacy professionals regarding their complete
          obligations under applicable law.
        </p>
      </div>
    </section>
  );
};

export default DPDPReadyToStart;
