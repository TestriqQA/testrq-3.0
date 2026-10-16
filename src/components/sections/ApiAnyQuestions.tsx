// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaArrowRight } from "react-icons/fa";
import PhoneLinks from "@/components/ui/PhoneLinks";

const ApiAnyQuestions: React.FC = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "Phone Consultation",
      description: "Speak directly with our API testing experts",
      text: "Call Now",
      action: "tel:+919152929343",
      contact: <PhoneLinks />,
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      text: "Send Email",
      action: "mailto:contact@testriq.com",
      contact: "contact@testriq.com",
    },
    {
      icon: <FaComments className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "Live Chat",
      description: "Instant support from our team",
      text: "Start Chat",
      action: "#",
      contact: "Available 24/7",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have{" "}
            <span className="text-[theme(color.brand.blue)]">Questions</span>{" "}
            About API Testing?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our API testing experts are here to help. Get in touch with us to
            discuss your specific requirements and learn how we can ensure your
            APIs are reliable, secure, and performant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-700 mb-4">{method.description}</p>
              <p className="text-[theme(color.brand.blue)] font-semibold mb-4">
                {method.contact}
              </p>
              <Link
                href={method.action}
                title={method.text + " – Testriq QA Lab"}
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 min-h-[44px] min-w-[44px] border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-md hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors duration-300"
              >
                <span>{method.text}</span>
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Secure Your API Ecosystem?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-4xl mx-auto">
            Don&apos;t let unstable APIs or security vulnerabilities slow down your release cycle. Partner with Testriq to implement a standard-aligned API testing strategy that scales with your business. Whether you are launching a new project or need a global QA service, we are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact-us"
              title="Schedule Free Consultation – Testriq QA Lab"
              className="inline-flex items-center gap-2 py-3 px-8 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-lg rounded-md hover:shadow-lg transition-colors duration-300"
            >
              <span>Schedule Free Consultation</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiAnyQuestions;
