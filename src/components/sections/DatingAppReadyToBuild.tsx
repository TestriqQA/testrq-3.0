"use client";

import React from "react";
import { ArrowRight, Phone, ArrowUp } from "lucide-react";
import Link from "next/link";

const DatingAppReadyToBuild = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Build Unshakeable Trust?
            </h2>

            <p className="text-xl mb-12 opacity-90">
              We certify dating apps that meet all six pillars of trust, helping
              them showcase safety, <Link href="/blog/post/performance-testing-for-ai-applications">reliability</Link>, and user protection.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full sm:w-auto">
              <Link href="/contact-us">
                <button
      className="bg-white cursor-pointer text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
    >
                  Start Certification
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>

              <a
      href="tel:(+91) 915-2929-343"
      className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
    >
                <Phone className="mr-2 w-5 h-5" />
                Call (+91) 915-2929-343
              </a>
            </div>

            <div className="text-center opacity-90">
              <p className="text-lg mb-2">
                🔒 Your Users Deserve Better. Let&apos;s Build It.
              </p>
              <p className="text-base">
                TESTRIQ QA Lab - Your partner in building safe, real, and
                trusted dating experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 bg-brand-blue text-white p-4 rounded-full shadow-lg z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default DatingAppReadyToBuild;
