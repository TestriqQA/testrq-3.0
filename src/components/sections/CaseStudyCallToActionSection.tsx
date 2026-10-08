import Link from "next/link";
import React from "react";

import { FaRocket, FaPhone, FaEnvelope } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

const CaseStudyCallToActionSection: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaRocket className="w-4 h-4" />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transform Your Software Quality Today
            </h2>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join hundreds of satisfied clients who have achieved exceptional
              results with our comprehensive testing solutions. Let&apos;s
              discuss how we can help you achieve similar success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={BOOKING_URL}
              target={ "_blank" }
              >
                <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">
                Speak directly with our testing experts
              </p>
              <a
                href="tel:+1234567890"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                (+91) 915-2929-343
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">
                Get detailed information about our services
              </p>
              <a
                href="mailto:info@testriq.com"
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                contact@testriq.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
              <p className="text-blue-100 mb-4">
                Begin your testing journey immediately
              </p>
              <Link href="/contact-us" className="inline-block">
                <button className="text-white font-semibold hover:text-blue-200 transition-colors cursor-pointer">
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">500k+</div>
                <div className="text-blue-200 text-sm">Test Cases Executed</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">14+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCallToActionSection;
