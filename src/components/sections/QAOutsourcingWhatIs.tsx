import React from "react";

const QAOutsourcingWhatIs: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <span className="text-sm">● Definition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Is <span className="text-brand-blue">QA Outsourcing</span>?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 border-l-4 border-l-brand-blue p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            QA outsourcing is the practice of handing your software testing and
            quality assurance to a specialized external partner instead of
            building and maintaining an in-house QA team. A good QA outsourcing
            partner brings certified testers, ready-made tools and test
            infrastructure, and proven processes — giving you enterprise-grade
            quality on demand, at a lower cost, and with the flexibility to
            scale up or down as your release schedule changes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QAOutsourcingWhatIs;
