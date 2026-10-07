import Link from "next/link";
import React from "react";
import { BOOKING_URL } from "@/lib/booking";
import {
  FaRocket,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const QADocumentationReadyToEnsureQuality = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-600 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white rounded-full translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 text-white">
            <FaRocket className="mr-2 text-white" />
            Ready to Transform Your QA Documentation?
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ensure Quality with Professional
            <span className="block text-yellow-300">
              QA Documentation Services
            </span>
          </h2>

          <p className="text-xl lg:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Choosing Testriq means you are partnering with a <span className="font-bold text-yellow-300">Lead Global SEO and QA Consultant</span> team. We balance technical rigor with business logic through field-tested templates and senior architects with 10+ years of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href={BOOKING_URL} target={"_blank"}>
              <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-yellow-300 text-blue-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <FaCalendarAlt className="mr-3" />
                Schedule Free Consultation
              </button>
            </Link>

            {/* <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-200">
              <FaFileAlt className="mr-3" />
              Download Documentation Guide
            </button> */}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Years Experience", value: "15+" },
              { label: "Support Available", value: "24/7" },
            ].map((item, index) => (
              <div className="text-center" key={index}>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-300">
                  {item.value}
                </div>
                <div className="text-lg text-white/90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTA and Contact Options Section */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center space-x-4 bg-white/20 rounded-full px-8 py-4">
            <FaCheckCircle className="text-green-300 text-xl" />
            <span className="text-lg font-medium">
              Free consultation • No commitment • Expert guidance
            </span>
          </div>
        </div>

        <div className="mt-16 text-center text-white">
          <p className="text-lg opacity-75 mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex justify-center text-center items-center flex-col md:flex-row gap-4 opacity-60 text-white">
            <div className="text-sm ">ISO 9001 Certified</div>
            <div className="w-1 h-1 bg-white  rounded-full"></div>
            <div className="text-sm">ISTQB Professionals</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-sm">GDPR Compliant</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-sm">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationReadyToEnsureQuality;
