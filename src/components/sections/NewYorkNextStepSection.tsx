// Server Component. Two concrete inputs asked for, so the first reply can be a
// real proposal rather than a discovery call.
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewYorkNextStepSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Next step
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Send us your build cadence and the environments your pipeline deploys
            to. We will propose an overnight test cycle for your next release.
          </p>

          {/* Restored Oct 2026. Both figures come from the deleted CityData
              entry: heroContent.stats carried { number: "15+", label: "Years
              Experience" } and whyChooseContent carried "48-Hour Staffing" /
              "Rapid Integration".

              "15+ Years" is defensible rather than a round number picked for
              effect — organizationSchema, aboutPageSchema and
              pricingServiceSchema all publish foundingDate "2010", so the real
              figure is 16. Note the llms.txt / llms-full.txt intros now say
              "testing software since 2010" instead of a duration, so these two
              surfaces word the same fact differently; "since 2010" is the
              self-maintaining form if this card is ever revisited. */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center min-w-[11rem]">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/80 text-sm mt-1">Years Experience</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center min-w-[11rem]">
              <div className="text-2xl font-bold text-white">48-Hour Staffing</div>
              <div className="text-white/80 text-sm mt-1">Rapid Integration</div>
            </div>
          </div>
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

export default NewYorkNextStepSection;
