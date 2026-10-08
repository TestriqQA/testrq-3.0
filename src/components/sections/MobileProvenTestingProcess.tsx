// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";

const MobileProvenTestingProcess: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Mobile Testing Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our proven process ensure your mobile application delivers
              exceptional quality and performance across all devices and
              platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact-us"
                title="Start Your Project – Testriq QA Lab"
                className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              {/* <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors cursor-pointer">
                Download Process Guide
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProvenTestingProcess;
