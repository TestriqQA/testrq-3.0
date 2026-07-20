import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const QAOutsourcingWhyTestriq: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Why Testriq</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Testriq as Your{" "}
            <span className="text-brand-blue">QA Outsourcing Partner</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">ISTQB-certified</strong> QA
                engineers.
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">
                  ISO 9001, ISO 27001, and SOC 2-aligned
                </strong>{" "}
                processes — your data and quality are handled to recognized
                standards.
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">Transparent reporting</strong>{" "}
                — you see coverage, defects, and progress at every stage.
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">Flexible engagement</strong> —
                dedicated, managed, or on-demand.
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">Global delivery</strong> — we
                work across time zones (US, UK, EU, UAE, India) to match your
                schedule.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAOutsourcingWhyTestriq;
