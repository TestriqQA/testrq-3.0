// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

const RoboticAnyQuestions: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-brand-blue to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Validate Your Robotic Systems?
        </h2>
        <p className="text-xl text-white mb-8 leading-relaxed">
          Get started with comprehensive robotic testing services. Our experts
          are ready to help ensure your robots are safe, reliable, and perform
          at their best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-blue-500">
            <FaPhone className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <h3 className="font-semibold mb-2">(+91) 915-2929-343</h3>
            <p className="text-blue-500 text-sm">
              Speak directly with our robotic testing experts
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-blue-500">
            <FaEnvelope className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <h3 className="font-semibold mb-2">contact@testriq.com</h3>
            <p className="text-blue-500 text-sm">
              Get detailed information about our services
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-blue-500">
            <FaComments className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-blue-500 text-sm">
              Chat with our team for immediate assistance
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={BOOKING_URL} target={ "_blank" }
            title="Schedule Consultation – Testriq QA Lab"
            className="inline-flex items-center justify-center px-8 py-3 min-h-[44px] min-w-[44px] border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoboticAnyQuestions;
