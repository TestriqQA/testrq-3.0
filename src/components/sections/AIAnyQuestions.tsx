// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import Link from "next/link";
import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaArrowRight } from "react-icons/fa";

const AIAnyQuestions: React.FC = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "AI Expert Consultation",
      description: "Speak directly with our AI testing specialists",
      text: "Call Now",
      action: "tel:(+91) 915-2929-343",
      contact: "(+91) 915-2929-343",
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "AI Testing Support",
      description: "Get detailed responses about AI testing",
      text: "Send Email",
      action: "mailto:contact@testriq.com",
      contact: "contact@testriq.com",
    },
    {
      icon: <FaComments className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      title: "Live AI Chat",
      description: "Instant support from our AI experts",
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
            About AI Testing?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our AI testing specialists are here to help.{" "}
            <Link href="contact-us">Get in touch</Link> with us to discuss your
            specific AI requirements and learn how we can ensure your AI systems
            are accurate, fair, and reliable.
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
            Ready to Test Your AI?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Join the companies who trust our AI testing expertise. Schedule a
            free consultation to discuss your AI testing needs and get a
            customized solution for your AI project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }
              title="Schedule AI Consultation – Testriq QA Lab"
              className="inline-flex items-center gap-2 py-3 px-8 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-lg rounded-md hover:shadow-lg transition-colors duration-300"
            >
              <span>Schedule AI Consultation</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnyQuestions;
