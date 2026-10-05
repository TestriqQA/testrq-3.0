// Server Component. One ask, stated plainly — the release date and the
// applicable UK requirements are exactly the two inputs needed to scope.
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LondonNextStepSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Next step
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Send us your next release date and the UK requirements that apply to
            it. We reply with a scoped test approach and a fixed-scope quote.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact us
            <FaArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LondonNextStepSection;
